#!/usr/bin/env node
/**
 * Enrich publications by looking up metadata on Crossref (api.crossref.org).
 *
 * Reads:  src/data/publications.ts
 * Writes: publications.review.json   (suggestions per entry, review before applying)
 *
 * Then run `bun run apply:publications` to merge confirmed suggestions
 * (entries with "confirmed": true) back into src/data/publications.ts.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = resolve(ROOT, "src/data/publications.ts");
const OUT = resolve(ROOT, "publications.review.json");

const AUTHOR = "Åke Elden";
const AUTHOR_ASCII = "Aake Elden";
const MAILTO = "akeeld@nla.no"; // Crossref "polite pool"

/**
 * Extremely small TS-object literal reader: we only need `title`, `venue`,
 * `status`, `year`, `doi`. We match on `title:` strings.
 */
async function readPublications() {
  const src = await readFile(SRC, "utf8");
  const objects = [];
  const re = /\{\s*title:\s*"([^"]+)"([\s\S]*?)\n\s{2}\},?/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const body = m[2];
    const get = (k) => {
      const rx = new RegExp(`${k}:\\s*"([^"]*)"`);
      const found = body.match(rx);
      return found ? found[1] : undefined;
    };
    objects.push({
      title: m[1],
      venue: get("venue"),
      status: get("status"),
      year: get("year"),
      doi: get("doi"),
    });
  }
  return objects;
}

async function crossrefSearch(title) {
  const url = new URL("https://api.crossref.org/works");
  url.searchParams.set("query.title", title);
  url.searchParams.set("query.author", AUTHOR_ASCII);
  url.searchParams.set("rows", "5");
  url.searchParams.set("mailto", MAILTO);
  const res = await fetch(url, {
    headers: { "User-Agent": `ake-elden-site (mailto:${MAILTO})` },
  });
  if (!res.ok) throw new Error(`Crossref ${res.status} for "${title}"`);
  const json = await res.json();
  return json.message?.items ?? [];
}

function norm(s) {
  return (s ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function titleScore(a, b) {
  const na = norm(a).split(" ").filter(Boolean);
  const nb = new Set(norm(b).split(" ").filter(Boolean));
  if (!na.length) return 0;
  let hit = 0;
  for (const t of na) if (nb.has(t)) hit++;
  return hit / na.length;
}

function hasAuthor(item) {
  const authors = item.author ?? [];
  return authors.some((a) => {
    const full = norm(`${a.given ?? ""} ${a.family ?? ""}`);
    return (
      full.includes("elden") &&
      (full.includes("ake") || full.includes("aake"))
    );
  });
}

function pickBest(items, title) {
  const scored = items
    .map((it) => {
      const foundTitle = (it.title?.[0] ?? "").trim();
      return {
        item: it,
        score: titleScore(title, foundTitle) + (hasAuthor(it) ? 0.5 : 0),
        titleFound: foundTitle,
      };
    })
    .sort((a, b) => b.score - a.score);
  return scored[0];
}

function suggestionFrom(best) {
  if (!best || !best.item) return null;
  const it = best.item;
  const year =
    it.issued?.["date-parts"]?.[0]?.[0] ??
    it.published?.["date-parts"]?.[0]?.[0] ??
    it.created?.["date-parts"]?.[0]?.[0];
  const containerType = it.type ?? "";
  const journal = it["container-title"]?.[0] ?? it.publisher ?? "";
  const isPreprint = containerType.includes("posted");
  return {
    matchScore: Number(best.score.toFixed(3)),
    matchedTitle: best.titleFound,
    doi: it.DOI,
    url: it.URL ?? (it.DOI ? `https://doi.org/${it.DOI}` : undefined),
    venue: journal,
    year: year ? String(year) : undefined,
    status: isPreprint ? "Preprint" : "Published",
    type: containerType,
    authors: (it.author ?? [])
      .map((a) => [a.given, a.family].filter(Boolean).join(" "))
      .join("; "),
  };
}

async function main() {
  const pubs = await readPublications();
  console.log(`Read ${pubs.length} publications from src/data/publications.ts`);
  const review = [];
  for (const p of pubs) {
    process.stdout.write(`• ${p.title.slice(0, 60).padEnd(62)} `);
    try {
      const items = await crossrefSearch(p.title);
      const best = pickBest(items, p.title);
      const suggestion = suggestionFrom(best);
      const confident = suggestion && suggestion.matchScore >= 0.9;
      review.push({
        title: p.title,
        current: {
          venue: p.venue,
          status: p.status,
          year: p.year,
          doi: p.doi,
        },
        suggestion,
        confirmed: false,
        note: confident
          ? "High confidence — flip `confirmed: true` to apply."
          : suggestion
            ? "Low/medium confidence — verify manually before flipping `confirmed: true`."
            : "No Crossref candidate. Likely working paper or preprint not yet indexed.",
      });
      console.log(
        suggestion
          ? `→ ${suggestion.matchScore >= 0.9 ? "✓" : "?"} ${suggestion.venue || "—"} (${suggestion.year || "n/a"})`
          : "— no match",
      );
    } catch (err) {
      review.push({
        title: p.title,
        current: { venue: p.venue, status: p.status, year: p.year, doi: p.doi },
        suggestion: null,
        confirmed: false,
        error: String(err.message ?? err),
      });
      console.log(`! ${err.message}`);
    }
    // Crossref polite pool: throttle gently
    await new Promise((r) => setTimeout(r, 250));
  }
  await writeFile(OUT, JSON.stringify(review, null, 2), "utf8");
  const highConf = review.filter(
    (r) => r.suggestion && r.suggestion.matchScore >= 0.9,
  ).length;
  console.log(
    `\nWrote ${OUT}\n  ${highConf} high-confidence suggestion(s), ${review.length - highConf} to verify manually.\nEdit the file, set \`"confirmed": true\` on entries you accept, then run: bun run apply:publications`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

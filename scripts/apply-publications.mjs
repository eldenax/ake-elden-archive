#!/usr/bin/env node
/**
 * Apply confirmed Crossref suggestions from publications.review.json into
 * src/data/publications.ts. Only entries with "confirmed": true are applied.
 *
 * Updates the venue, status, year, and doi fields of the matching entry
 * (matched by exact title). Leaves everything else untouched.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = resolve(ROOT, "src/data/publications.ts");
const REVIEW = resolve(ROOT, "publications.review.json");

function escapeReg(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function setField(body, indent, key, value) {
  if (value === undefined || value === null || value === "") return body;
  const escaped = String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const line = `${indent}${key}: "${escaped}",`;
  const rx = new RegExp(`${indent}${key}:\\s*"[^"]*",?`);
  if (rx.test(body)) return body.replace(rx, line);
  // insert after `title:` line
  return body.replace(
    new RegExp(`(${indent}title:\\s*"[^"]*",)`),
    `$1\n${line}`,
  );
}

async function main() {
  const [srcText, reviewText] = await Promise.all([
    readFile(SRC, "utf8"),
    readFile(REVIEW, "utf8"),
  ]);
  const review = JSON.parse(reviewText);
  const confirmed = review.filter((r) => r.confirmed && r.suggestion);
  if (!confirmed.length) {
    console.log("No entries with `confirmed: true`. Nothing to apply.");
    return;
  }

  let out = srcText;
  let applied = 0;
  for (const r of confirmed) {
    const titleRx = new RegExp(
      `(\\{\\s*\\n\\s{4}title:\\s*"${escapeReg(r.title)}",)([\\s\\S]*?)(\\n\\s{2}\\},?)`,
    );
    const m = out.match(titleRx);
    if (!m) {
      console.warn(`! Could not locate entry for: ${r.title}`);
      continue;
    }
    let body = m[2];
    const indent = "    ";
    body = setField(body, indent, "venue", r.suggestion.venue);
    body = setField(body, indent, "status", r.suggestion.status);
    body = setField(body, indent, "year", r.suggestion.year);
    body = setField(body, indent, "doi", r.suggestion.doi);
    out = out.replace(titleRx, `${m[1]}${body}${m[3]}`);
    applied++;
    console.log(`✓ ${r.title}`);
  }
  await writeFile(SRC, out, "utf8");
  console.log(`\nApplied ${applied} confirmed suggestion(s) to ${SRC}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

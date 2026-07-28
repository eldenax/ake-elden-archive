#!/usr/bin/env node
/**
 * Automated sitemap check.
 *
 * 1. Derives the set of expected public routes from src/routeTree.gen.ts
 *    (expanding /concepts/$slug via src/data/concepts.ts).
 * 2. Fetches /sitemap.xml from BASE_URL (default http://localhost:8080),
 *    parses <loc> entries, and verifies:
 *      - sitemap responds 200 with XML content-type
 *      - every expected route is listed
 *      - no unexpected / stale URLs are listed
 *      - every listed URL returns HTTP 200
 *
 * Usage:
 *   node scripts/check-sitemap.mjs                       # against http://localhost:8080
 *   BASE_URL=https://ake-elden-archive.lovable.app node scripts/check-sitemap.mjs
 */

import { readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BASE_URL = (process.env.BASE_URL ?? "http://localhost:8080").replace(/\/$/, "");

// --- Derive expected routes ---------------------------------------------------

const routeTreeSrc = readFileSync(resolve(ROOT, "src/routeTree.gen.ts"), "utf8");

// Pull the `fullPaths` union from FileRouteTypes.
const fullPathsMatch = routeTreeSrc.match(/fullPaths:\s*([\s\S]*?)\n\s{2}fileRoutesByTo/);
if (!fullPathsMatch) {
  console.error("Could not parse fullPaths from routeTree.gen.ts");
  process.exit(2);
}
const fullPaths = [...fullPathsMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);

const EXCLUDED = new Set(["/sitemap.xml"]); // served, not indexed
const DYNAMIC_EXPANDERS = {
  "/concepts/$slug": async () => {
    const mod = await import(pathToFileURL(resolve(ROOT, "src/data/concepts.ts")).href);
    return mod.CONCEPTS.map((c) => `/concepts/${c.slug}`);
  },
  "/themes/$slug": async () => {
    const mod = await import(pathToFileURL(resolve(ROOT, "src/data/themes.ts")).href);
    return mod.THEMES.map((t) => `/themes/${t.slug}`);
  },
};

const expected = new Set();
for (const p of fullPaths) {
  if (EXCLUDED.has(p)) continue;
  if (p.endsWith("/") && p !== "/") {
    // e.g. "/concepts/" — normalize to "/concepts"
    expected.add(p.replace(/\/$/, ""));
    continue;
  }
  if (p.includes("$")) {
    const expander = DYNAMIC_EXPANDERS[p];
    if (!expander) {
      console.error(`No expander registered for dynamic route ${p}`);
      process.exit(2);
    }
    for (const r of await expander()) expected.add(r);
    continue;
  }
  expected.add(p);
}

// --- Fetch and parse sitemap --------------------------------------------------

console.log(`Checking sitemap at ${BASE_URL}/sitemap.xml`);
const smRes = await fetch(`${BASE_URL}/sitemap.xml`);
if (smRes.status !== 200) {
  console.error(`✗ /sitemap.xml returned HTTP ${smRes.status}`);
  process.exit(1);
}
const ct = smRes.headers.get("content-type") ?? "";
if (!/xml/i.test(ct)) {
  console.error(`✗ /sitemap.xml content-type is "${ct}", expected XML`);
  process.exit(1);
}
const xml = await smRes.text();
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

const listed = new Set();
for (const loc of locs) {
  try {
    const u = new URL(loc);
    listed.add(u.pathname.replace(/\/$/, "") || "/");
  } catch {
    console.error(`✗ Invalid <loc> URL: ${loc}`);
    process.exit(1);
  }
}

// --- Compare route sets -------------------------------------------------------

const missing = [...expected].filter((r) => !listed.has(r));
const unexpected = [...listed].filter((r) => !expected.has(r));

let failed = false;
if (missing.length) {
  failed = true;
  console.error(`✗ Missing from sitemap (${missing.length}):`);
  for (const r of missing) console.error(`    ${r}`);
}
if (unexpected.length) {
  failed = true;
  console.error(`✗ Unexpected URLs in sitemap (${unexpected.length}):`);
  for (const r of unexpected) console.error(`    ${r}`);
}

// --- HTTP status checks -------------------------------------------------------

const statusResults = await Promise.all(
  locs.map(async (loc) => {
    try {
      // Rewrite host to BASE_URL so this works whether the sitemap uses
      // production or preview URLs.
      const path = new URL(loc).pathname;
      const target = `${BASE_URL}${path}`;
      const res = await fetch(target, { redirect: "manual" });
      return { loc, target, status: res.status };
    } catch (err) {
      return { loc, target: loc, status: 0, error: String(err) };
    }
  }),
);

for (const r of statusResults) {
  const ok = r.status === 200;
  if (!ok) {
    failed = true;
    console.error(`✗ ${r.target} → ${r.status}${r.error ? ` (${r.error})` : ""}`);
  } else {
    console.log(`✓ ${r.target} → 200`);
  }
}

if (failed) {
  console.error("\nSitemap check FAILED");
  process.exit(1);
}
console.log(`\nSitemap check PASSED — ${listed.size} URLs match routes and return 200.`);

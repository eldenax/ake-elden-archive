#!/usr/bin/env node
/**
 * SEO meta validation.
 *
 * For every route derived from src/routeTree.gen.ts (with /concepts/$slug
 * expanded via src/data/concepts.ts), fetches the SSR HTML from BASE_URL
 * and asserts each page has non-empty:
 *   - <title>
 *   - <meta name="description">
 *   - <meta property="og:title">
 *   - <meta property="og:description">
 *   - <meta property="og:url">
 *   - <meta property="og:type">
 *   - <link rel="canonical">
 *
 * Also rejects default placeholder titles/descriptions and mismatched
 * canonical / og:url values that don't self-reference the page path.
 *
 * Usage:
 *   node scripts/check-seo.mjs
 *   BASE_URL=https://ake-elden-archive.lovable.app node scripts/check-seo.mjs
 */

import { readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BASE_URL = (process.env.BASE_URL ?? "http://localhost:8080").replace(/\/$/, "");

// --- Derive routes (mirrors check-sitemap.mjs) --------------------------------

const routeTreeSrc = readFileSync(resolve(ROOT, "src/routeTree.gen.ts"), "utf8");
const fullPathsMatch = routeTreeSrc.match(/fullPaths:\s*([\s\S]*?)\n\s{2}fileRoutesByTo/);
if (!fullPathsMatch) {
  console.error("Could not parse fullPaths from routeTree.gen.ts");
  process.exit(2);
}
const fullPaths = [...fullPathsMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);

const EXCLUDED = new Set(["/sitemap.xml"]);
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

const routes = new Set();
for (const p of fullPaths) {
  if (EXCLUDED.has(p)) continue;
  if (p.endsWith("/") && p !== "/") {
    routes.add(p.replace(/\/$/, ""));
    continue;
  }
  if (p.includes("$")) {
    const expander = DYNAMIC_EXPANDERS[p];
    if (!expander) {
      console.error(`No expander registered for dynamic route ${p}`);
      process.exit(2);
    }
    for (const r of await expander()) routes.add(r);
    continue;
  }
  routes.add(p);
}

// --- Extraction helpers -------------------------------------------------------

const BAD_TITLES = new Set([
  "lovable app",
  "lovable generated project",
  "vite + react + ts",
  "vite + react",
  "react app",
]);
const BAD_DESCRIPTIONS = new Set(["lovable generated project", ""]);

function pickHead(html) {
  const m = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  return m ? m[1] : html;
}

function extractTitle(head) {
  const m = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decode(m[1].trim()) : null;
}

function extractMeta(head, attr, value) {
  // Match <meta ... attr="value" ... content="...">  OR content first.
  const re = new RegExp(
    `<meta\\b[^>]*\\b${attr}=["']${escapeRe(value)}["'][^>]*>`,
    "gi",
  );
  const matches = head.match(re);
  if (!matches) return null;
  const last = matches[matches.length - 1];
  const c = last.match(/\bcontent=["']([\s\S]*?)["']/i);
  return c ? decode(c[1].trim()) : null;
}

function extractLink(head, rel) {
  const re = new RegExp(`<link\\b[^>]*\\brel=["']${escapeRe(rel)}["'][^>]*>`, "gi");
  const matches = head.match(re);
  if (!matches) return null;
  const last = matches[matches.length - 1];
  const h = last.match(/\bhref=["']([\s\S]*?)["']/i);
  return h ? decode(h[1].trim()) : null;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function pathOf(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, "") || "/";
  } catch {
    return url.replace(/\/$/, "") || "/";
  }
}

// --- Validate -----------------------------------------------------------------

console.log(`Validating SEO tags at ${BASE_URL} (${routes.size} routes)`);
let failed = false;

for (const route of [...routes].sort()) {
  const url = `${BASE_URL}${route}`;
  const problems = [];
  let head;
  try {
    const res = await fetch(url, { redirect: "manual" });
    if (res.status !== 200) {
      console.error(`✗ ${route} → HTTP ${res.status}`);
      failed = true;
      continue;
    }
    const ct = res.headers.get("content-type") ?? "";
    if (!/html/i.test(ct)) {
      console.error(`✗ ${route} content-type "${ct}" is not HTML`);
      failed = true;
      continue;
    }
    head = pickHead(await res.text());
  } catch (err) {
    console.error(`✗ ${route} fetch failed: ${err}`);
    failed = true;
    continue;
  }

  const title = extractTitle(head);
  const description = extractMeta(head, "name", "description");
  const ogTitle = extractMeta(head, "property", "og:title");
  const ogDescription = extractMeta(head, "property", "og:description");
  const ogUrl = extractMeta(head, "property", "og:url");
  const ogType = extractMeta(head, "property", "og:type");
  const canonical = extractLink(head, "canonical");

  const required = { title, description, "og:title": ogTitle, "og:description": ogDescription, "og:url": ogUrl, "og:type": ogType, canonical };
  for (const [name, value] of Object.entries(required)) {
    if (!value) problems.push(`missing ${name}`);
  }

  if (title && BAD_TITLES.has(title.toLowerCase())) {
    problems.push(`placeholder title: "${title}"`);
  }
  if (description && BAD_DESCRIPTIONS.has(description.toLowerCase())) {
    problems.push(`placeholder description: "${description}"`);
  }
  if (canonical && pathOf(canonical) !== route) {
    problems.push(`canonical "${canonical}" does not self-reference "${route}"`);
  }
  if (ogUrl && pathOf(ogUrl) !== route) {
    problems.push(`og:url "${ogUrl}" does not self-reference "${route}"`);
  }

  if (problems.length) {
    failed = true;
    console.error(`✗ ${route}`);
    for (const p of problems) console.error(`    - ${p}`);
  } else {
    console.log(`✓ ${route} — "${title}"`);
  }
}

if (failed) {
  console.error("\nSEO check FAILED");
  process.exit(1);
}
console.log(`\nSEO check PASSED — ${routes.size} routes have complete meta.`);

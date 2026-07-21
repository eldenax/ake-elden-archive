#!/usr/bin/env node
/**
 * Validate public/robots.txt:
 *  - exists and is non-empty
 *  - contains a `User-agent: *` block
 *  - allows crawling (`Allow: /`) and does NOT disallow the whole site
 *  - references a `Sitemap:` URL
 *  - the Sitemap URL matches EXPECTED_SITEMAP (default: production domain)
 *  - the Sitemap URL is reachable and returns HTTP 200 with XML content-type
 *
 * Usage:
 *   node scripts/check-robots.mjs
 *   EXPECTED_SITEMAP=https://ake-elden-archive.lovable.app/sitemap.xml node scripts/check-robots.mjs
 *   SKIP_FETCH=1 node scripts/check-robots.mjs   # skip network check
 */

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROBOTS = resolve(ROOT, "public/robots.txt");
const EXPECTED_SITEMAP =
  process.env.EXPECTED_SITEMAP ?? "https://ake-elden-archive.lovable.app/sitemap.xml";

const errors = [];
const fail = (msg) => errors.push(msg);

if (!existsSync(ROBOTS)) {
  console.error("✗ public/robots.txt is missing");
  process.exit(1);
}
const raw = readFileSync(ROBOTS, "utf8").trim();
if (!raw) {
  console.error("✗ public/robots.txt is empty");
  process.exit(1);
}

const lines = raw
  .split(/\r?\n/)
  .map((l) => l.replace(/#.*$/, "").trim())
  .filter(Boolean);

// Parse into groups keyed by user-agent.
const groups = [];
let current = null;
const sitemaps = [];
for (const line of lines) {
  const [rawKey, ...rest] = line.split(":");
  if (!rawKey || rest.length === 0) {
    fail(`Malformed directive: "${line}"`);
    continue;
  }
  const key = rawKey.trim().toLowerCase();
  const value = rest.join(":").trim();
  if (key === "user-agent") {
    current = { agent: value, allow: [], disallow: [] };
    groups.push(current);
  } else if (key === "allow") {
    if (!current) fail(`"Allow" before any "User-agent": "${line}"`);
    else current.allow.push(value);
  } else if (key === "disallow") {
    if (!current) fail(`"Disallow" before any "User-agent": "${line}"`);
    else current.disallow.push(value);
  } else if (key === "sitemap") {
    sitemaps.push(value);
  } else if (["crawl-delay", "host"].includes(key)) {
    // Allowed but not validated.
  } else {
    fail(`Unknown directive: "${line}"`);
  }
}

const wildcard = groups.find((g) => g.agent === "*");
if (!wildcard) {
  fail('Missing "User-agent: *" block');
} else {
  const blocksAll = wildcard.disallow.includes("/") && !wildcard.allow.includes("/");
  if (blocksAll) fail('"User-agent: *" disallows the entire site ("Disallow: /")');
  const allowsRoot =
    wildcard.allow.includes("/") ||
    (wildcard.disallow.length === 0 || wildcard.disallow.every((p) => p === ""));
  if (!allowsRoot) fail('"User-agent: *" does not allow crawling ("Allow: /" missing)');
}

if (sitemaps.length === 0) {
  fail('Missing "Sitemap:" directive');
} else if (!sitemaps.includes(EXPECTED_SITEMAP)) {
  fail(
    `Sitemap URL mismatch. Expected "${EXPECTED_SITEMAP}", found: ${sitemaps
      .map((s) => `"${s}"`)
      .join(", ")}`,
  );
}

if (errors.length) {
  console.error("robots.txt validation FAILED");
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log("✓ robots.txt structure OK");
console.log(`  User-agent groups: ${groups.map((g) => g.agent).join(", ")}`);
console.log(`  Sitemap: ${sitemaps.join(", ")}`);

if (process.env.SKIP_FETCH === "1") {
  console.log("\nrobots.txt check PASSED (network check skipped)");
  process.exit(0);
}

const sitemapUrl = sitemaps[0];
console.log(`\nFetching ${sitemapUrl} ...`);
try {
  const res = await fetch(sitemapUrl, { redirect: "manual" });
  if (res.status !== 200) {
    console.error(`✗ ${sitemapUrl} → HTTP ${res.status}`);
    process.exit(1);
  }
  const ct = res.headers.get("content-type") ?? "";
  if (!/xml/i.test(ct)) {
    console.error(`✗ ${sitemapUrl} content-type is "${ct}", expected XML`);
    process.exit(1);
  }
  console.log(`✓ ${sitemapUrl} → 200 (${ct})`);
} catch (err) {
  console.error(`✗ Failed to fetch ${sitemapUrl}: ${err}`);
  process.exit(1);
}

console.log("\nrobots.txt check PASSED");

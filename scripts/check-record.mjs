// Guards the shape of the publication record: one peer-reviewed journal corpus,
// with the JMIR article pointing at its published page rather than a preprint.
// Run with: bun run check:record
import {
  PUBLICATIONS,
  JOURNAL_ARTICLES,
} from "../src/data/publications.ts";

const VENUE = "JMIR Metascience and Research Integrity";
const PUBLISHED_URL = "https://metascience.jmir.org/2026/1/e105907";

const failures = [];
const check = (ok, message) => {
  if (!ok) failures.push(message);
};

check(
  PUBLICATIONS.length === JOURNAL_ARTICLES.length,
  `every record item should be a journal article (${JOURNAL_ARTICLES.length} of ${PUBLICATIONS.length})`,
);

const jmir = PUBLICATIONS.filter((p) => p.venue === VENUE);
check(
  jmir.length === 1,
  `expected exactly one ${VENUE} article, found ${jmir.length}`,
);
check(
  jmir[0]?.href === PUBLISHED_URL,
  `the ${VENUE} article should link to ${PUBLISHED_URL}, found ${jmir[0]?.href}`,
);
check(
  !/preprint/i.test(jmir[0]?.status ?? ""),
  `the ${VENUE} article should no longer carry a preprint status (found "${jmir[0]?.status}")`,
);
check(
  !PUBLICATIONS.some((p) => /preprint/i.test(p.status ?? "")),
  "no record item should carry a preprint status",
);

if (failures.length) {
  console.error("Publication record check FAILED:");
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}

console.log(
  `Publication record check PASSED — ${JOURNAL_ARTICLES.length} peer-reviewed journal articles; the ${VENUE} article links to its published page.`,
);

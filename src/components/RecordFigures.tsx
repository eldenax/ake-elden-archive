import { PUBLICATIONS, JOURNAL_ARTICLES } from "../data/publications";

const TOTAL = PUBLICATIONS.length;
const ARTICLES = JOURNAL_ARTICLES.length;
const VENUES = new Set(JOURNAL_ARTICLES.map((p) => p.venue)).size;
const LEVEL_2 = JOURNAL_ARTICLES.filter((p) => p.level === "2").length;

const FIGURES = [
  {
    label: "Publications (2026)",
    value: TOTAL,
    note: "in the record",
  },
  {
    label: "Peer-reviewed articles",
    value: ARTICLES,
    note: "published or accepted",
  },
  {
    label: "Journals",
    value: VENUES,
    note: "distinct venues",
  },
  {
    label: "Level 2 channels",
    value: LEVEL_2,
    note: "Norwegian register",
  },
];

/**
 * The 2026 publication count as a scannable band, so the headline numbers are
 * visible before a visitor starts reading the list.
 */
export function RecordFigures() {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
      {FIGURES.map((f) => (
        <div key={f.label} className="bg-background p-5">
          <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {f.label}
          </dt>
          <dd className="mt-2 font-display text-3xl leading-none text-foreground">
            {f.value}
          </dd>
          <p className="mt-2 text-xs text-muted-foreground">{f.note}</p>
        </div>
      ))}
    </dl>
  );
}

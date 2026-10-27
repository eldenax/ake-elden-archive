import { Link } from "@tanstack/react-router";
import { JOURNAL_ARTICLES } from "../data/publications";

/**
 * Points at the newest article to appear in the record, so it is not buried at
 * the end of the page.
 */
export function LatestArticle() {
  const p = JOURNAL_ARTICLES.find(
    (item) => item.venue === "JMIR Metascience and Research Integrity",
  );
  if (!p) return null;

  const first = p.contribution.split(". ")[0];
  const summary = first.endsWith(".") ? first : `${first}.`;

  return (
    <aside className="rounded-md border border-border bg-background p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Now published
      </p>
      <h3 className="mt-4 font-display text-xl leading-snug text-foreground md:text-2xl">
        {p.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">
        {p.venue} · {p.year}
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85">
        {summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Read the article
        </a>
        <Link
          to="/publications"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          All publications
        </Link>
      </div>
    </aside>
  );
}

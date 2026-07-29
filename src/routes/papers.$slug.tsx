import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPaper, PAPERS } from "../data/papers";
import { CONCEPTS } from "../data/concepts";

const BASE = "https://ake-elden-archive.lovable.app";

export const Route = createFileRoute("/papers/$slug")({
  loader: ({ params }) => {
    const paper = getPaper(params.slug);
    if (!paper) throw notFound();
    return { paper };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Paper unavailable — Dr. Åke Elden" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.paper;
    const url = `${BASE}/papers/${p.slug}`;
    const title = `${p.title} — Dr. Åke Elden`;
    const description = `${p.subtitle ? p.subtitle + " " : ""}${p.abstract}`
      .replace(/\s+/g, " ")
      .slice(0, 157)
      .trim();
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: p.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            url,
            headline: p.title,
            alternativeHeadline: p.subtitle,
            abstract: p.abstract,
            keywords: p.keywords.join(", "),
            creativeWorkStatus: p.status,
            author: {
              "@type": "Person",
              name: "Åke Elden",
              affiliation: { "@type": "Organization", name: "NLA University College" },
            },
          }),
        },
      ],
    };
  },
  component: PaperPage,
  notFoundComponent: PaperNotFound,
});

function PaperNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl text-foreground">Paper not found</h1>
      <p className="mt-4 text-foreground/75">
        This working paper is not listed.{" "}
        <Link to="/publications" className="underline underline-offset-4">
          Back to contributions
        </Link>
        .
      </p>
    </div>
  );
}

function PaperPage() {
  const { paper } = Route.useLoaderData();
  const concepts = paper.conceptSlugs
    .map((slug) => CONCEPTS.find((c) => c.slug === slug))
    .filter(Boolean) as (typeof CONCEPTS)[number][];

  return (
    <div className="bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {paper.status} · {paper.themeLabel}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight text-foreground md:text-4xl">
            {paper.title}
          </h1>
          {paper.subtitle && (
            <p className="mt-3 font-display text-xl italic leading-snug text-foreground/80 md:text-2xl">
              {paper.subtitle}
            </p>
          )}
          <p className="mt-6 text-sm text-muted-foreground">
            Åke Elden · {paper.affiliation}
          </p>
          {paper.draftNote && (
            <p className="mt-2 text-xs text-muted-foreground">{paper.draftNote}</p>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl space-y-16 px-6 py-16 lg:px-8">
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Abstract
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              {paper.abstract}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {paper.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-sm border border-border px-2 py-1 text-xs text-foreground/70"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The claim
            </h2>
            <p className="mt-4 font-display text-lg italic leading-snug text-foreground md:text-xl">
              {paper.claim}
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The four conditions
            </h2>
            <dl className="mt-6 space-y-6">
              {paper.conditions.map((c) => (
                <div key={c.label}>
                  <dt className="font-display text-base text-foreground md:text-lg">
                    {c.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {c.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Formal results
            </h2>
            <ul className="mt-6 space-y-6">
              {paper.results.map((r) => (
                <li key={r.label}>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {r.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {r.statement}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Structure of the argument
            </h2>
            <ol className="mt-6 space-y-6">
              {paper.sections.map((s) => (
                <li key={s.number} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-display text-sm text-muted-foreground">
                    § {s.number}
                  </span>
                  <div>
                    <p className="font-display text-base text-foreground md:text-lg">
                      {s.heading}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                      {s.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Positioning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              {paper.positioning}
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Where this sits in the programme
            </h2>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <Link
                to="/inquiry/$slug"
                params={{ slug: paper.themeSlug }}
                className="rounded-sm border border-border bg-background px-2 py-1 text-foreground/80 hover:border-foreground"
              >
                Problem area · {paper.themeLabel} →
              </Link>
              {concepts.map((c) => (
                <Link
                  key={c.slug}
                  to="/concepts/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-sm border border-border bg-background px-2 py-1 text-foreground/80 hover:border-foreground"
                >
                  Concept · {c.name ?? c.slug} →
                </Link>
              ))}
              <Link
                to="/publications"
                className="rounded-sm border border-border bg-background px-2 py-1 text-foreground/80 hover:border-foreground"
              >
                All contributions →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const ALL_PAPER_SLUGS = PAPERS.map((p) => p.slug);

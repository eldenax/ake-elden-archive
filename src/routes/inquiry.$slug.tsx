import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { THEMES, getTheme } from "../data/themes";
import { getConcept } from "../data/concepts";
import { PUBLICATIONS } from "../data/publications";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const BASE = "https://ake-elden-archive.lovable.app";

function truncate(s: string, max = 300) {
  const clean = s.replace(/\s+/g, " ").trim();
  return clean.length > max ? clean.slice(0, max - 1).replace(/[,;:.\s]+$/, "") + "…" : clean;
}

function buildFaqItems(t: (typeof THEMES)[number]) {
  const overview = truncate([t.tagline, ...t.description].join(" "), 500);
  const concepts = [
    ...t.conceptSlugs.map((s) => s.replace(/-/g, " ")),
    ...(t.conceptNotes ?? []),
  ];
  const worksList = t.works
    .map((w) => (w.status ? `${w.title} (${w.status})` : w.title))
    .join("; ");

  const qa: { q: string; a: string }[] = [
    {
      q: `What does the problem area "${t.name}" investigate?`,
      a: overview,
    },
  ];
  if (concepts.length) {
    qa.push({
      q: `Which concepts are developed in "${t.short}"?`,
      a: `This area develops the following concepts: ${concepts.join(", ")}.`,
    });
  }
  if (t.works.length) {
    qa.push({
      q: `Which works belong to "${t.short}"?`,
      a: truncate(`Works in this area include: ${worksList}.`, 700),
    });
  }
  if (t.projects?.length) {
    qa.push({
      q: `Which applied projects relate to "${t.short}"?`,
      a: `Applied contexts for this area: ${t.projects.join(", ")}.`,
    });
  }
  return qa;
}

function buildFaqSchema(t: (typeof THEMES)[number], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    mainEntity: buildFaqItems(t).map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}


export const Route = createFileRoute("/inquiry/$slug")({
  loader: ({ params }) => {
    const theme = getTheme(params.slug);
    if (!theme) throw notFound();
    return { theme };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Problem area not found — Dr. Åke Elden" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = loaderData.theme;
    const title = `${t.short}: ${t.name} — Dr. Åke Elden`;
    const url = `${BASE}/inquiry/${t.slug}`;

    // Compose a concrete, per-page description from the theme's own content.
    const firstPara = t.description[0] ?? t.tagline;
    const rawDesc = `${t.tagline} ${firstPara}`.replace(/\s+/g, " ").trim();
    const description =
      rawDesc.length > 158 ? rawDesc.slice(0, 155).replace(/[,;:.\s]+$/, "") + "…" : rawDesc;

    // Keywords derived from concepts and concept notes actually developed in this area.
    const keywords = [
      ...t.conceptSlugs.map((s) => s.replace(/-/g, " ")),
      ...(t.conceptNotes ?? []),
      "Åke Elden",
      "philosophy of AI",
    ].join(", ");

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:author", content: "Åke Elden" },
        { property: "article:section", content: "Inquiry" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            url,
            headline: t.name,
            name: title,
            description,
            inLanguage: "en",
            isPartOf: {
              "@type": "CreativeWorkSeries",
              name: "Inquiry — Research Programme",
              url: `${BASE}/inquiry`,
            },
            about: t.conceptNotes?.length
              ? t.conceptNotes.map((n) => ({ "@type": "Thing", name: n }))
              : undefined,
            author: { "@type": "Person", name: "Åke Elden", url: `${BASE}/about` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildFaqSchema(t, url)),
        },
      ],
    };
  },
  component: InquiryDetailPage,
});

function InquiryDetailPage() {
  const { theme } = Route.useLoaderData() as { theme: (typeof THEMES)[number] };
  const pubs = PUBLICATIONS.filter((p) => p.themeSlug === theme.slug);
  const concepts = theme.conceptSlugs
    .map((s) => getConcept(s))
    .filter((c): c is NonNullable<ReturnType<typeof getConcept>> => Boolean(c));

  const idx = THEMES.findIndex((t) => t.slug === theme.slug);
  const prev = idx > 0 ? THEMES[idx - 1] : null;
  const next = idx < THEMES.length - 1 ? THEMES[idx + 1] : null;

  // Related inquiries: score other themes by shared conceptSlugs, shared
  // conceptNotes, and shared applied projects. Keep the top matches.
  const currConcepts = new Set(theme.conceptSlugs);
  const currNotes = new Set((theme.conceptNotes ?? []).map((n) => n.toLowerCase()));
  const currProjects = new Set(theme.projects ?? []);
  const related = THEMES.filter((t) => t.slug !== theme.slug)
    .map((t) => {
      const sharedConcepts = t.conceptSlugs.filter((s) => currConcepts.has(s));
      const sharedNotes = (t.conceptNotes ?? []).filter((n) =>
        currNotes.has(n.toLowerCase()),
      );
      const sharedProjects = (t.projects ?? []).filter((p) => currProjects.has(p));
      const score =
        sharedConcepts.length * 3 + sharedNotes.length + sharedProjects.length * 2;
      return { theme: t, score, sharedConcepts, sharedNotes, sharedProjects };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  // Related works: publications from OTHER themes that share a concept with
  // this theme. Score by concept overlap, then by "selected" status.
  const relatedWorks = PUBLICATIONS.filter(
    (p) => p.themeSlug !== theme.slug && p.conceptSlug && currConcepts.has(p.conceptSlug),
  )
    .map((p) => ({
      pub: p,
      sharedConcept: p.conceptSlug!,
      score: (currConcepts.has(p.conceptSlug!) ? 2 : 0) + (p.selected ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  // Related applied projects: projects from OTHER themes that share concepts
  // (or notes) with this theme, excluding projects already listed here.
  const ownProjects = new Set(theme.projects ?? []);
  const relatedProjectsMap = new Map<
    string,
    { project: string; fromTheme: (typeof THEMES)[number]; sharedConcepts: string[] }
  >();
  for (const t of THEMES) {
    if (t.slug === theme.slug) continue;
    const sharedConcepts = t.conceptSlugs.filter((s) => currConcepts.has(s));
    if (sharedConcepts.length === 0) continue;
    for (const proj of t.projects ?? []) {
      if (ownProjects.has(proj) || relatedProjectsMap.has(proj)) continue;
      relatedProjectsMap.set(proj, { project: proj, fromTheme: t, sharedConcepts });
    }
  }
  const relatedProjects = [...relatedProjectsMap.values()].slice(0, 5);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <Link
            to="/inquiry"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            ← Inquiry
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Area {theme.number.toString().padStart(2, "0")}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            {theme.name}
          </h1>
          <p className="mt-6 font-display text-lg italic leading-relaxed text-foreground/85 md:text-xl">
            {theme.tagline}
          </p>
          <div className="mt-8 space-y-5">
            {theme.description.map((p) => (
              <p key={p} className="text-base leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Works in this area
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            Papers, projects, and manuscripts
          </h2>
          <ul className="mt-10 space-y-6">
            {theme.works.map((w) => (
              <li key={w.title} className="border-t border-border pt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg leading-snug text-foreground md:text-xl">
                    {w.title}
                  </h3>
                  {w.status && (
                    <span className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {w.status}
                    </span>
                  )}
                  {w.note && (
                    <span className="text-xs italic text-muted-foreground">
                      {w.note}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {(concepts.length > 0 || (theme.conceptNotes?.length ?? 0) > 0) && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Concepts
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Concepts developed here
            </h2>
            {concepts.length > 0 && (
              <ul className="mt-8 space-y-3">
                {concepts.map((c) => (
                  <li key={c.slug} className="border-t border-border pt-3">
                    <Link
                      to="/concepts/$slug"
                      params={{ slug: c.slug }}
                      className="font-display text-base text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
                    >
                      {c.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.tagline}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {theme.conceptNotes && theme.conceptNotes.length > 0 && (
              <>
                <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  In development
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-base text-foreground/85">
                  {theme.conceptNotes.map((n) => (
                    <li key={n}>· {n}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      )}

      {pubs.length > 0 && (
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Publications
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Publications under this area
            </h2>
            <ul className="mt-8 space-y-6">
              {pubs.map((p) => (
                <li key={p.title} className="border-t border-border pt-5">
                  <h3 className="font-display text-lg leading-snug text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.status}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    {p.contribution}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                to="/publications"
                className="text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                See all publications →
              </Link>
            </div>
          </div>
        </section>
      )}

      {theme.projects && theme.projects.length > 0 && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Diagnostic contexts
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Applied projects related to this area
            </h2>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-display text-base text-foreground/85">
              {theme.projects.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/projects"
                className="text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                See all projects →
              </Link>
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Related inquiries
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Adjacent problem areas
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Other areas of the programme that share concepts, notes, or applied
              contexts with this one.
            </p>
            <ul className="mt-8 space-y-8">
              {related.map((r) => {
                const relConcepts = r.sharedConcepts
                  .map((s) => getConcept(s))
                  .filter(
                    (c): c is NonNullable<ReturnType<typeof getConcept>> => Boolean(c),
                  );
                return (
                  <li key={r.theme.slug} className="border-t border-border pt-5">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Area {r.theme.number.toString().padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl leading-snug text-foreground md:text-2xl">
                      <Link
                        to="/inquiry/$slug"
                        params={{ slug: r.theme.slug }}
                        className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
                      >
                        {r.theme.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                      {r.theme.tagline}
                    </p>
                    {(relConcepts.length > 0 ||
                      r.sharedNotes.length > 0 ||
                      r.sharedProjects.length > 0) && (
                      <div className="mt-4 space-y-2 text-sm">
                        {relConcepts.length > 0 && (
                          <p className="text-muted-foreground">
                            <span className="uppercase tracking-[0.18em] text-[0.7rem]">
                              Shared concepts:
                            </span>{" "}
                            {relConcepts.map((c, i) => (
                              <span key={c.slug}>
                                {i > 0 && ", "}
                                <Link
                                  to="/concepts/$slug"
                                  params={{ slug: c.slug }}
                                  className="text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
                                >
                                  {c.name}
                                </Link>
                              </span>
                            ))}
                          </p>
                        )}
                        {r.sharedNotes.length > 0 && (
                          <p className="text-muted-foreground">
                            <span className="uppercase tracking-[0.18em] text-[0.7rem]">
                              Shared notes:
                            </span>{" "}
                            {r.sharedNotes.join(", ")}
                          </p>
                        )}
                        {r.sharedProjects.length > 0 && (
                          <p className="text-muted-foreground">
                            <span className="uppercase tracking-[0.18em] text-[0.7rem]">
                              Shared applied contexts:
                            </span>{" "}
                            {r.sharedProjects.join(", ")}
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-muted/30">

        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            Questions about this area
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {buildFaqItems(theme).map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display text-base text-foreground md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground/85">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
          <div className="flex items-center justify-between gap-6 border-t border-border pt-6 text-sm">
            {prev ? (
              <Link
                to="/inquiry/$slug"
                params={{ slug: prev.slug }}
                className="text-muted-foreground hover:text-foreground"
              >
                ← {prev.short}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to="/inquiry/$slug"
                params={{ slug: next.slug }}
                className="text-muted-foreground hover:text-foreground"
              >
                {next.short} →
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PUBLICATIONS } from "../data/publications";
import { THEMES, getTheme } from "../data/themes";
import { getConcept } from "../data/concepts";

const TITLE = "Publications — Dr. Åke Elden";
const DESCRIPTION =
  "Selected and complete publications, organised by theme rather than discipline. Each entry names the theme, the contribution, and — where relevant — the concept it develops.";
const URL_SELF = "https://ake-elden-archive.lovable.app/publications";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: URL_SELF,
          name: TITLE,
          description: DESCRIPTION,
          about: { "@type": "Person", name: "Åke Elden" },
        }),
      },
    ],
  }),
  component: PublicationsPage,
});

function PublicationCard({ p }: { p: (typeof PUBLICATIONS)[number] }) {
  const theme = getTheme(p.themeSlug);
  const concept = p.conceptSlug ? getConcept(p.conceptSlug) : undefined;
  return (
    <article className="border-t border-border pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-lg leading-snug text-foreground md:text-xl">
          {p.title}
        </h3>
        <span className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {p.status}
        </span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {p.venue}
        {p.year ? ` · ${p.year}` : ""}
      </p>
      <p className="mt-4 text-base leading-relaxed text-foreground/85">
        <span className="font-medium uppercase tracking-[0.18em] text-xs text-muted-foreground">
          Contribution ·{" "}
        </span>
        {p.contribution}
      </p>
      {p.caseNote && (
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
          <span className="font-medium uppercase tracking-[0.18em] text-xs text-muted-foreground">
            Case ·{" "}
          </span>
          {p.caseNote}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        {theme && (
          <Link
            to="/themes/$slug"
            params={{ slug: theme.slug }}
            className="rounded-sm border border-border bg-background px-2 py-1 text-foreground/80 hover:border-foreground"
          >
            Theme · {theme.short} →
          </Link>
        )}
        {concept && (
          <Link
            to="/concepts/$slug"
            params={{ slug: concept.slug }}
            className="rounded-sm border border-border bg-background px-2 py-1 text-foreground/80 hover:border-foreground"
          >
            Concept · {concept.name} →
          </Link>
        )}
      </div>
    </article>
  );
}

function PublicationsPage() {
  const selected = PUBLICATIONS.filter((p) => p.selected);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Publications
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Publications, organised by theme
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            Each entry names the theme it belongs to, its contribution to the
            programme, and — where relevant — the concept it develops.
            Publications are grouped by problem area rather than by discipline.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            The most current record is maintained on the{" "}
            <Link
              to="/academic-profile"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              academic profile
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Selected publications
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            Six papers to read first
          </h2>
          <div className="mt-10 space-y-10">
            {selected.map((p) => (
              <PublicationCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Complete list
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            All publications by theme
          </h2>
          <div className="mt-12 space-y-16">
            {THEMES.map((t) => {
              const pubs = PUBLICATIONS.filter((p) => p.themeSlug === t.slug);
              if (pubs.length === 0) return null;
              return (
                <div key={t.slug}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Theme {t.number.toString().padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-foreground md:text-2xl">
                    <Link
                      to="/themes/$slug"
                      params={{ slug: t.slug }}
                      className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
                    >
                      {t.name}
                    </Link>
                  </h3>
                  <div className="mt-8 space-y-10">
                    {pubs.map((p) => (
                      <PublicationCard key={p.title} p={p} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

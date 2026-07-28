import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { PUBLICATIONS, type Capacity } from "../data/publications";
import { THEMES, getTheme } from "../data/themes";
import { getConcept } from "../data/concepts";
import { edgesForPublication, pairKey } from "../data/concept-edges";

const TITLE = "Publications — Dr. Åke Elden";
const DESCRIPTION =
  "Selected and complete publications, organised by theme rather than discipline. Each entry names the theme, the contribution, and — where relevant — the concept it develops.";
const URL_SELF = "https://ake-elden-archive.lovable.app/publications";

const CAPACITY_LABEL: Record<Capacity, string> = {
  presupposed: "Presupposed",
  transformed: "Transformed",
  concealed: "Concealed",
};

const CAPACITY_DESCRIPTION: Record<Capacity, string> = {
  presupposed:
    "Capacities that must already be in place for institutions and technologies to function: judgment, moral standing, responsibility, object constitution, answerability.",
  transformed:
    "Capacities that are reshaped when delegated to technological and institutional systems: practical wisdom, desire, creaturehood, friction, infrastructure.",
  concealed:
    "Capacities that are obscured, evacuated, or rendered unaddressable by automated systems: agency, exclusion, epistemic lag, invisible missions.",
};

const publicationsSearchSchema = z.object({
  capacity: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/publications")({
  validateSearch: zodValidator(publicationsSearchSchema),
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
  const edges = edgesForPublication(p.title);
  return (
    <article className="border-t border-border pt-6">
      {/* Title */}
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-lg leading-snug text-foreground md:text-xl">
          {p.title}
        </h3>
        <span className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {p.status}
        </span>
      </div>

      {/* Contribution — placed immediately after the title, answering "why read this?" */}
      <p className="mt-4 text-base leading-relaxed text-foreground/85">
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

      {/* Journal / venue */}
      <dl className="mt-5 grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-[8rem_1fr]">
        <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Journal
        </dt>
        <dd className="text-foreground/85">
          {p.venue}
          {p.year ? ` · ${p.year}` : ""}
          {p.doi ? (
            <>
              {" · "}
              <a
                href={`https://doi.org/${p.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 hover:text-foreground"
              >
                DOI
              </a>
            </>
          ) : null}
        </dd>

        {/* Concepts introduced */}
        {concept && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Concepts introduced
            </dt>
            <dd>
              <Link
                to="/concepts/$slug"
                params={{ slug: concept.slug }}
                className="underline decoration-dotted underline-offset-4 text-foreground/85 hover:text-foreground"
              >
                {concept.name}
              </Link>
            </dd>
          </>
        )}

        {/* Related theme */}
        {theme && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Related theme
            </dt>
            <dd>
              <Link
                to="/themes/$slug"
                params={{ slug: theme.slug }}
                className="underline decoration-dotted underline-offset-4 text-foreground/85 hover:text-foreground"
              >
                {theme.short}
              </Link>
            </dd>
          </>
        )}

        {/* Capacities */}
        {p.capacities && p.capacities.length > 0 && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Capacities
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {p.capacities.map((c) => (
                  <li key={c}>
                    <Link
                      to="/publications"
                      search={{ capacity: c }}
                      className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {CAPACITY_LABEL[c]}
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
          </>
        )}

        {/* Supporting connections in the concept graph */}
        {edges.length > 0 && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Supporting connections
            </dt>
            <dd>
              <ul className="space-y-1.5">
                {edges.map((e) => {
                  const a = getConcept(e.a);
                  const b = getConcept(e.b);
                  if (!a || !b) return null;
                  const key = pairKey(e.a, e.b);
                  return (
                    <li key={key} className="leading-snug">
                      <Link
                        to="/concept-graph"
                        search={{ pair: key }}
                        hash={`pair-${key}`}
                        className="underline decoration-dotted underline-offset-4 text-foreground/85 hover:text-foreground"
                      >
                        {a.name}
                        <span className="mx-1.5 text-muted-foreground">×</span>
                        {b.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </dd>
          </>
        )}
      </dl>
    </article>
  );
}

function PublicationsPage() {
  const { capacity } = Route.useSearch();
  const activeCapacity = (
    ["presupposed", "transformed", "concealed"] as Capacity[]
  ).includes(capacity as Capacity)
    ? (capacity as Capacity)
    : undefined;

  const filtered = activeCapacity
    ? PUBLICATIONS.filter((p) => p.capacities?.includes(activeCapacity))
    : undefined;

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

      {activeCapacity ? (
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Filtered archive
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              {CAPACITY_LABEL[activeCapacity]} capacities
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85">
              {CAPACITY_DESCRIPTION[activeCapacity]}
            </p>
            <div className="mt-6">
              <Link
                to="/publications"
                search={{}}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Clear filter
              </Link>
            </div>
            <div className="mt-10 space-y-10">
              {filtered && filtered.length > 0 ? (
                filtered.map((p) => <PublicationCard key={p.title} p={p} />)
              ) : (
                <p className="border-t border-border pt-6 text-sm italic text-muted-foreground">
                  No publications are currently tagged with this capacity.
                </p>
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="border-b border-border bg-muted/30">
            <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Selected publications
              </p>
              <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                Six papers to read first
              </h2>
              <div className="mt-10 space-y-10">
                {PUBLICATIONS.filter((p) => p.selected).map((p) => (
                  <PublicationCard key={p.title} p={p} />
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-border">
            <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Published
              </p>
              <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                Published papers
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Peer-reviewed articles that have appeared in print or been
                formally accepted for publication.
              </p>
              <div className="mt-10 space-y-10">
                {(() => {
                  const published = PUBLICATIONS.filter((p) =>
                    p.status.toLowerCase().startsWith("published"),
                  );
                  if (published.length === 0) {
                    return (
                      <p className="border-t border-border pt-6 text-sm italic text-muted-foreground">
                        No entries currently marked as published. Papers listed
                        below are under review, in preparation, or circulating
                        as working papers; those accepted for publication will
                        move into this section.
                      </p>
                    );
                  }
                  return published.map((p) => (
                    <PublicationCard key={p.title} p={p} />
                  ));
                })()}
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
                  const pubs = PUBLICATIONS.filter(
                    (p) =>
                      p.themeSlug === t.slug &&
                      !p.status.toLowerCase().startsWith("published"),
                  );
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
        </>
      )}
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import {
  PUBLICATIONS,
  UNDER_REVIEW,
  ALL_ENTRIES,
  type Capacity,
} from "../data/publications";
import { THEMES } from "../data/themes";
import {
  PublicationCard,
  CAPACITY_LABEL,
  CAPACITY_DESCRIPTION,
} from "../components/PublicationCard";

const TITLE = "Publications — Dr. Åke Elden";
const DESCRIPTION =
  "Peer-reviewed publications of Dr. Åke Elden, verified against NVA: thirteen articles in 2026 across theology, philosophy of science, and the ethics of automated institutions.";
const URL_SELF = "https://ake-elden-archive.lovable.app/publications";

const publicationsSearchSchema = z.object({
  capacity: z.string().optional(),
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
          hasPart: PUBLICATIONS.map((p) => ({
            "@type": "ScholarlyArticle",
            headline: p.title,
            datePublished: p.year,
            isPartOf: { "@type": "Periodical", name: p.venue },
            ...(p.doi ? { identifier: `https://doi.org/${p.doi}` } : {}),
            ...(p.href ? { url: p.href } : {}),
            author: { "@type": "Person", name: "Åke Elden" },
          })),
        }),
      },
    ],
  }),
  component: PublicationsPage,
});

const LEVEL_2 = PUBLICATIONS.filter((p) => p.level === "2").length;
const YEAR_2026 = PUBLICATIONS.filter((p) => p.year === "2026").length;

function PublicationsPage() {
  const { capacity } = Route.useSearch();
  const activeCapacity = (
    ["presupposed", "transformed", "concealed"] as Capacity[]
  ).includes(capacity as Capacity)
    ? (capacity as Capacity)
    : undefined;

  const filtered = activeCapacity
    ? ALL_ENTRIES.filter((p) => p.capacities?.includes(activeCapacity))
    : undefined;

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Publications
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Peer-reviewed publications
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            {YEAR_2026} peer-reviewed articles published online or formally
            accepted in 2026, including {LEVEL_2} in Level 2 channels. Each
            entry names its journal, its contribution to the programme, and —
            where relevant — the concept it develops. Metadata is verified
            against NVA (Nasjonalt vitenarkiv).
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Drafts, working papers, and items in preparation are kept separately
            on the{" "}
            <Link
              to="/research-notes"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              research notes
            </Link>{" "}
            page. The canonical record is on the{" "}
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
        <section className="bg-muted/30">
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
                  No entries are currently tagged with this capacity.
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
                Complete record
              </p>
              <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                Published articles by theme
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Peer-reviewed articles that have appeared in print or been
                formally accepted. Norwegian channel levels are given where a
                level is registered.
              </p>
              <div className="mt-12 space-y-16">
                {THEMES.map((t) => {
                  const pubs = PUBLICATIONS.filter(
                    (p) => p.themeSlug === t.slug,
                  );
                  if (pubs.length === 0) return null;
                  return (
                    <div key={t.slug}>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        Theme {t.number.toString().padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-xl text-foreground md:text-2xl">
                        <Link
                          to="/inquiry/$slug"
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

          <section>
            <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Under review
              </p>
              <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                Manuscripts under review
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Submitted manuscripts awaiting decision or revision. Not part of
                the published record.
              </p>
              <div className="mt-10 space-y-10">
                {UNDER_REVIEW.map((p) => (
                  <PublicationCard key={p.title} p={p} />
                ))}
              </div>
              <p className="mt-10 text-sm text-muted-foreground">
                <Link
                  to="/research-notes"
                  className="underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  Research notes: working papers and items in preparation →
                </Link>
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

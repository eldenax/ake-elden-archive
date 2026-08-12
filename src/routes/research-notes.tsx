import { createFileRoute, Link } from "@tanstack/react-router";
import { RESEARCH_NOTES } from "../data/publications";
import { THEMES } from "../data/themes";
import { PublicationCard } from "../components/PublicationCard";

const TITLE = "Research Notes — Dr. Åke Elden";
const DESCRIPTION =
  "Working papers, drafts, and items in preparation by Dr. Åke Elden — exploratory material kept separate from the peer-reviewed publication record.";
const URL_SELF = "https://ake-elden-archive.lovable.app/research-notes";

export const Route = createFileRoute("/research-notes")({
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
  component: ResearchNotesPage,
});

function ResearchNotesPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research notes
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Working papers and drafts
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            This page holds exploratory material: drafts, circulating working
            papers, and lines of argument still in preparation. None of it is
            peer-reviewed, and none of it belongs to the publication record.
            Items move to{" "}
            <Link
              to="/publications"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              Publications
            </Link>{" "}
            only once a journal decision has been made.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <div className="space-y-16">
            {THEMES.map((t) => {
              const notes = RESEARCH_NOTES.filter((p) => p.themeSlug === t.slug);
              if (notes.length === 0) return null;
              return (
                <div key={t.slug}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Theme {t.number.toString().padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-xl text-foreground md:text-2xl">
                    <Link
                      to="/inquiry/$slug"
                      params={{ slug: t.slug }}
                      className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
                    >
                      {t.name}
                    </Link>
                  </h2>
                  <div className="mt-8 space-y-10">
                    {notes.map((p) => (
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { CORE_CONCEPTS, DEVELOPING_CONCEPTS, type Concept } from "../data/concepts";

const TITLE = "Concepts — Åke Elden";
const DESCRIPTION =
  "The core vocabulary of the research programme — inferential license, exercisable answerability, epistemic infrastructure, and the judgment gap — together with concepts still under development.";

const URL_SELF = "https://ake-elden-archive.lovable.app/concepts";

export const Route = createFileRoute("/concepts/")({
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
  component: ConceptsIndex,
});

function ConceptGrid({ items }: { items: Concept[] }) {
  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
      {items.map((c) => (
        <li key={c.slug} className="bg-background">
          <Link
            to="/concepts/$slug"
            params={{ slug: c.slug }}
            className="group flex h-full flex-col justify-between gap-6 p-8 transition-colors hover:bg-muted/40"
          >
            <div>
              <h3 className="font-display text-xl text-foreground group-hover:underline decoration-dotted underline-offset-4">
                {c.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.tagline}
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
              Read →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ConceptsIndex() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Concepts
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            The conceptual vocabulary of the programme
          </h1>
          <p className="mt-6 font-display text-lg italic leading-relaxed text-foreground/80">
            A small core vocabulary carries the argument of the published
            record; the rest are working distinctions still being tested.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Core concepts
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl text-foreground md:text-3xl">
            The four distinctions the published work turns on
          </h2>
          <div className="mt-10">
            <ConceptGrid items={CORE_CONCEPTS} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Developing concepts
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl text-foreground md:text-3xl">
            Distinctions under development
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Working vocabulary from manuscripts in progress. These are provisional
            and may be revised or absorbed as the arguments are published.
          </p>
          <div className="mt-10">
            <ConceptGrid items={DEVELOPING_CONCEPTS} />
          </div>
        </div>
      </section>
    </div>
  );
}

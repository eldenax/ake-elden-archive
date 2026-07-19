import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getConcept, CONCEPTS } from "../data/concepts";

export const Route = createFileRoute("/concepts/$slug")({
  loader: ({ params }) => {
    const concept = getConcept(params.slug);
    if (!concept) throw notFound();
    return { concept };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Concept not found — Dr. Åke Elden" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.concept.name} — Dr. Åke Elden`;
    const description = loaderData.concept.tagline;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: ConceptNotFound,
  component: ConceptPage,
});

function ConceptNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-8">
      <h1 className="font-display text-3xl text-foreground">Concept not found</h1>
      <p className="mt-4 text-muted-foreground">
        This concept page doesn't exist. Return to the full list.
      </p>
      <div className="mt-8">
        <Link
          to="/concepts"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          All concepts
        </Link>
      </div>
    </div>
  );
}

function ConceptPage() {
  const { concept } = Route.useLoaderData() as { concept: (typeof CONCEPTS)[number] };
  const currentIndex = CONCEPTS.findIndex((c) => c.slug === concept.slug);
  const next = CONCEPTS[(currentIndex + 1) % CONCEPTS.length];
  const prev = CONCEPTS[(currentIndex - 1 + CONCEPTS.length) % CONCEPTS.length];

  return (
    <article className="print-article">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <div className="flex items-start justify-between gap-4">
            <Link
              to="/concepts"
              className="no-print text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              ← All concepts
            </Link>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              Download as PDF
            </button>
          </div>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            {concept.name}
          </h1>
          <p className="mt-6 font-display text-lg italic leading-relaxed text-foreground/80 md:text-xl">
            {concept.tagline}
          </p>
        </div>
      </header>


      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Theory
          </p>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-foreground/85">
            {concept.theory.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Key publications
          </p>
          <ul className="mt-6 space-y-4">
            {concept.publications.map((p, i) => (
              <li
                key={i}
                className="border-t border-border pt-4 text-base leading-relaxed text-foreground/85"
              >
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-muted-foreground">
            A continually updated record is available through the{" "}
            <Link
              to="/publications"
              className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              publications page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Current work
          </p>
          <ul className="mt-6 space-y-4">
            {concept.currentWork.map((p, i) => (
              <li
                key={i}
                className="border-t border-border pt-4 text-base leading-relaxed text-foreground/85"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav
        aria-label="Concept navigation"
        className="no-print mx-auto grid max-w-3xl grid-cols-1 gap-4 px-6 py-16 sm:grid-cols-2 lg:px-8"

      >
        <Link
          to="/concepts/$slug"
          params={{ slug: prev.slug }}
          className="group border-t border-border pt-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            ← Previous
          </span>
          <span className="mt-2 block font-display text-lg text-foreground group-hover:underline">
            {prev.name}
          </span>
        </Link>
        <Link
          to="/concepts/$slug"
          params={{ slug: next.slug }}
          className="group border-t border-border pt-4 sm:text-right"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Next →
          </span>
          <span className="mt-2 block font-display text-lg text-foreground group-hover:underline">
            {next.name}
          </span>
        </Link>
      </nav>
    </article>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { CONCEPTS } from "../data/concepts";

const TITLE = "Concepts — Dr. Åke Elden";
const DESCRIPTION =
  "A developing conceptual framework for AI-mediated human agency: subtractive redescription, inferential license, epistemic infrastructure, artificial and institutional answerability, and predictive mediation.";

export const Route = createFileRoute("/concepts/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ConceptsIndex,
});

function ConceptsIndex() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Selected concepts
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            A developing conceptual framework
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Each concept below is developed in its own dedicated page —
            outlining the underlying theory, key publications, and current
            work. Together they contribute toward a broader theory of
            AI-mediated human agency.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            {CONCEPTS.map((c) => (
              <li key={c.slug} className="bg-background">
                <Link
                  to="/concepts/$slug"
                  params={{ slug: c.slug }}
                  className="group flex h-full flex-col justify-between gap-6 p-8 transition-colors hover:bg-muted/40"
                >
                  <div>
                    <h2 className="font-display text-xl text-foreground group-hover:underline decoration-dotted underline-offset-4">
                      {c.name}
                    </h2>
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
        </div>
      </section>
    </div>
  );
}

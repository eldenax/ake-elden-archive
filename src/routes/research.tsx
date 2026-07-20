import { createFileRoute, Link } from "@tanstack/react-router";
import { CONCEPTS } from "../data/concepts";

const TITLE = "Research Programme — Dr. Åke Elden";
const DESCRIPTION =
  "A coherent research programme on the philosophical and theological conditions of human judgment, responsibility, and formation under artificial intelligence.";

const URL_SELF = "https://ake-elden-archive.lovable.app/research";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: URL_SELF,
          name: TITLE,
          description: DESCRIPTION,
          about: { "@type": "Person", name: "Åke Elden" },
        }),
      },
    ],
  }),
  component: ResearchPage,
});

const PROGRAMMES = [
  {
    title: "Human Judgment",
    items: [
      "answerability",
      "responsibility",
      "practical reasoning",
      "institutional decision-making",
    ],
  },
  {
    title: "Human Formation",
    items: [
      "theological anthropology",
      "moral formation",
      "discernment",
      "creaturehood",
    ],
  },
  {
    title: "Epistemic Conditions",
    items: [
      "inferential license",
      "epistemic infrastructure",
      "scientific methodology",
      "explanation",
    ],
  },
];

const EVOLUTION = [
  {
    year: "2024",
    focus: ["Institutional AI"],
  },
  {
    year: "2025",
    focus: ["Responsibility", "Agency", "Judgment"],
  },
  {
    year: "2026",
    focus: ["Formation", "Theological Anthropology", "Epistemic Conditions"],
  },
];

const QUESTIONS = [
  "What does AI presuppose?",
  "When does explanation become normative?",
  "How can institutions remain answerable while delegating reasoning?",
  "What distinguishes judgment from prediction?",
];

function ResearchPage() {
  return (
    <div>
      {/* Research Question */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research Programme
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            One question, three intersecting programmes
          </h1>
          <div className="mt-10 border-l-2 border-foreground/40 pl-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Research question
            </p>
            <blockquote className="mt-3 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
              How does artificial intelligence transform the conditions that
              make human judgment, responsibility, and moral formation
              possible?
            </blockquote>
          </div>
          <p className="mt-8 text-base leading-relaxed text-foreground/85">
            The programme investigates the background conditions — epistemic,
            institutional, and anthropological — that make distinctly human
            capacities possible, and asks what happens when technological
            systems relocate, conceal, or reshape those conditions.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Programmes
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Three lines, one architecture
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
            {PROGRAMMES.map((p) => (
              <div key={p.title} className="border-t border-border pt-6">
                <h3 className="font-display text-lg text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Research on
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {p.items.map((i) => (
                    <li key={i}>— {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Map */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research map
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
            The architecture at a glance
          </h2>
          <div className="mt-10 rounded-md border border-border bg-muted/30 p-8">
            <pre className="whitespace-pre font-display text-sm leading-relaxed text-foreground md:text-base">{`             Human Formation
                    ↑
     Judgment  ←──→  Responsibility
                    ↑
            Epistemic Conditions
                    ↑
         Artificial Intelligence`}</pre>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Key concepts
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              The conceptual framework
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              These concepts constitute an evolving research programme on the
              philosophical conditions of AI-mediated human agency. Each has
              its own dedicated page.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {CONCEPTS.map((c) => (
              <Link
                key={c.slug}
                to="/concepts/$slug"
                params={{ slug: c.slug }}
                className="group flex h-full flex-col justify-between gap-6 bg-background p-8 transition-colors hover:bg-muted/40"
              >
                <div>
                  <h3 className="font-display text-lg text-foreground group-hover:underline decoration-dotted underline-offset-4">
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
            ))}
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Evolution
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
            How the programme has developed
          </h2>
          <ol className="mt-10 space-y-8">
            {EVOLUTION.map((e, i) => (
              <li key={e.year} className="grid grid-cols-[4rem_1fr] gap-6">
                <span className="font-display text-2xl text-foreground">
                  {e.year}
                </span>
                <div>
                  <ul className="space-y-1 font-display text-lg text-foreground/85">
                    {e.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  {i < EVOLUTION.length - 1 && (
                    <span
                      aria-hidden
                      className="mt-4 block text-muted-foreground"
                    >
                      ↓
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Current Questions */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Current questions
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
            Open lines of inquiry
          </h2>
          <ul className="mt-10 space-y-6">
            {QUESTIONS.map((q) => (
              <li
                key={q}
                className="border-t border-border pt-4 font-display text-lg italic text-foreground/85 md:text-xl"
              >
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            For collaborations, invited lectures, or academic correspondence
          </h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

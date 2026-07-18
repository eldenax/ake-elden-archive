import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Research — Dr. Åke Elden";
const DESCRIPTION =
  "Research programme, themes, concepts, and current projects at the intersection of philosophy of AI, epistemology, and theological anthropology.";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ResearchPage,
});

const CONCEPTS = [
  {
    name: "Subtractive Redescription",
    body: "How AI systems reformulate human practices by removing the tacit conditions that gave them meaning.",
  },
  {
    name: "Inferential License",
    body: "The normative authority to draw conclusions — and how automated inference redistributes it.",
  },
  {
    name: "Epistemic Infrastructure",
    body: "The background scaffolding of concepts, institutions, and practices that make knowledge possible.",
  },
  {
    name: "Artificial Answerability",
    body: "Whether, and how, algorithmic systems can be held to account for what they mediate.",
  },
  {
    name: "Institutional Answerability",
    body: "How responsibility is distributed when institutions delegate judgment to predictive systems.",
  },
  {
    name: "Predictive Mediation",
    body: "The way forecasts reshape the situations they claim only to describe.",
  },
];

const PROJECTS = [
  "AI and Judgment",
  "Institutional Responsibility",
  "Human Formation under Optimization",
  "Algorithmic Governance",
  "Epistemic Automation",
  "Theology of Technology",
];

function ResearchPage() {
  return (
    <div>
      {/* Programme */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research Programme
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            What AI presupposes
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              Artificial intelligence is transforming not only how decisions
              are made but also the conditions under which knowledge,
              responsibility, and human formation become possible.
            </p>
            <p>
              My research investigates the philosophical and theological
              implications of AI-mediated societies, with particular attention
              to <em>judgment</em>, <em>answerability</em>, <em>epistemic
              agency</em>, <em>institutional legitimacy</em>, and{" "}
              <em>human formation</em>.
            </p>
            <p>
              Rather than asking simply what AI can do, I examine the
              background conditions that make distinctly human capacities
              possible — and what happens when technological systems relocate,
              conceal, or reshape those conditions.
            </p>
            <blockquote className="border-l-2 border-foreground/40 pl-6 font-display text-xl italic leading-snug text-foreground">
              Which human capacities are presupposed, transformed, or concealed
              when artificial intelligence becomes part of institutional and
              personal decision-making?
            </blockquote>
          </div>
        </div>
      </section>

      {/* Selected concepts */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected concepts
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              A developing conceptual framework
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Recent work has developed several interconnected concepts that
              together contribute toward a broader theory of AI-mediated human
              agency.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CONCEPTS.map((c) => (
              <article key={c.name} className="border-t border-border pt-5">
                <h3 className="font-display text-lg text-foreground">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Current projects */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Current projects
              </p>
              <h2 className="mt-3 font-display text-3xl text-foreground">
                Lines of ongoing work
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-2">
              {PROJECTS.map((p) => (
                <li
                  key={p}
                  className="border-t border-border pt-3 font-display text-base text-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
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

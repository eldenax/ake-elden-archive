import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/ake-elden-hero.jpg";

const TITLE = "Dr. Åke Elden — Philosophy & Theology of Artificial Intelligence";
const DESCRIPTION =
  "A researcher investigating the philosophical and theological conditions of human judgment, responsibility, and formation in the age of AI.";
const OG_IMAGE =
  "https://id-preview--433ae820-2d37-44cc-ae5b-3f9c81619f70.lovable.app/ake-elden-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

const THEMES = [
  {
    title: "Philosophy of Artificial Intelligence",
    items: [
      "Judgment and answerability",
      "Institutional agency",
      "Human–AI responsibility",
      "Normative legitimacy",
    ],
  },
  {
    title: "Epistemology & Philosophy of Science",
    items: [
      "Epistemic infrastructure",
      "Inferential license",
      "Scientific methodology for AI",
      "Explanation and justification",
    ],
  },
  {
    title: "Theological Anthropology",
    items: ["Human formation", "Creaturehood", "Discernment", "Kenosis"],
  },
  {
    title: "Digital Society",
    items: [
      "Algorithmic governance",
      "Predictive systems",
      "Moral agency",
      "Institutional trust",
    ],
  },
];

function Index() {
  return (
    <>
      {/* Hero — split screen */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        <div className="flex flex-col justify-center px-6 py-20 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              NLA University College · Oslo
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-foreground md:text-5xl xl:text-[3.75rem]">
              Dr. Åke Elden
            </h1>
            <p className="mt-5 font-display text-lg italic leading-relaxed text-foreground/80 md:text-xl">
              Investigating the philosophical and theological conditions of
              human judgment, responsibility, and formation in the age of AI.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Rather than asking what artificial intelligence can do, my
              research examines the background conditions that make distinctly
              human capacities possible — and what happens when technological
              systems relocate, conceal, or reshape those conditions.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore research
              </Link>
              <Link
                to="/publications"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Publications
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[40vh] lg:min-h-0 lg:w-1/2">
          <img
            src={heroImage}
            alt="Abstract paper and ink composition"
            width={1024}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent lg:from-background/60" />
        </div>
      </section>

      {/* Guiding question */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Guiding question
          </p>
          <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
            “Which human capacities are presupposed, transformed, or concealed
            when artificial intelligence becomes part of institutional and
            personal decision-making?”
          </blockquote>
        </div>
      </section>

      {/* Themes */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Research themes
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Four intersecting lines of inquiry
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {THEMES.map((t) => (
              <div key={t.title} className="border-t border-border pt-6">
                <h3 className="font-display text-lg text-foreground">{t.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {t.items.map((i) => (
                    <li key={i}>— {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/research"
              className="text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              Read the full research programme →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

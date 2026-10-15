import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Current Research — Dr. Åke Elden";
const DESCRIPTION =
  "Work in progress by Dr. Åke Elden: the manuscript under draft, papers under review, and the working papers extending the programme.";
const URL_SELF = "https://akeelden.com/current-research";

export const Route = createFileRoute("/current-research")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        }),
      },
    ],
  }),
  component: CurrentResearchPage,
});

type ActiveProject = {
  workingTitle: string;
  paragraph: string;
  question: string;
  output: string;
  themeSlug: string;
  themeLabel: string;
  conceptSlug?: string;
  conceptLabel?: string;
};

const ACTIVE: ActiveProject[] = [
  {
    workingTitle: "When Institutions Stop Answering Back",
    paragraph:
      "This draft examines who can explain and defend institutional decisions when automated procedures take over parts of the reasoning. A named supervisor may remain in place without being able to question or change what the system decides.",
    question:
      "Who can answer for an automated institutional decision, and what do they need to do so meaningfully?",
    output:
      "Draft manuscript, 2026; companion paper on typologies of answerability failure.",
    themeSlug: "judgment-answerability-institutional-reason",
    themeLabel: "Judgment & Answerability",
    conceptSlug: "judgment-gap",
    conceptLabel: "Judgment Gap",
  },
  {
    workingTitle: "Standing Is Not an Ordering",
    paragraph:
      "The partition thesis separates two questions: who counts morally, and whose claims take priority? Using information ethics as a test case, this paper argues that an inclusive account of moral standing does not by itself tell us how to rank competing claims. The manuscript is under review.",
    question:
      "Does knowing who counts morally tell us whose claims should come first?",
    output:
      "Journal article (under review, 2026); follow-up paper on standing and ordering in AI moral-status debates.",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    themeLabel: "Normativity & Standing",
    conceptSlug: "partition-thesis",
    conceptLabel: "Partition Thesis",
  },
  {
    workingTitle: "Comparative Desire and Social Violence",
    paragraph:
      "Digital platforms do more than display inequality. They can shape what people feel entitled to, and turn frustrated expectations into grievance. This paper examines how comparison can contribute to social violence. It is published in Philosophy & Social Criticism.",
    question:
      "When does comparison with others turn into a sense of injustice, and how can that lead to social violence?",
    output:
      "Journal article (Philosophy & Social Criticism, 2026); book-length treatment of post-mimetic relationality as a general social configuration.",
    themeSlug: "desire-comparison-social-relations",
    themeLabel: "Desire & Relations",
    conceptSlug: "comparative-entitlement-formation",
    conceptLabel: "Comparative Entitlement Formation",
  },
  {
    workingTitle: "Second-Order Provenance",
    paragraph:
      "Knowing where data came from is not enough. We also need to know who chose the thresholds, rankings, and categories used to interpret it, and why those choices are justified. This project calls that second-order provenance and develops a way to examine it in institutions.",
    question:
      "Can an institution account for both its data and the rules that make that data matter?",
    output:
      "Working paper; operational audit framework co-developed with ClaimBuilder.ai; workshop paper on institutional recordkeeping as moral infrastructure.",
    themeSlug: "judgment-answerability-institutional-reason",
    themeLabel: "Judgment & Answerability",
    conceptSlug: "second-order-provenance",
    conceptLabel: "Second-Order Provenance",
  },
];


function CurrentResearchPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Current research
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Current work
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            My current projects explore responsibility in institutions, moral
            standing, social comparison, and the origins of institutional
            decisions. Published articles are under Publications; drafts are
            under Working papers.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 space-y-16">
          {ACTIVE.map((p, i) => (
            <article
              key={p.workingTitle}
              className="border-t border-border pt-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Project {String(i + 1).padStart(2, "0")} · Working title
              </p>
              <h2 className="mt-2 font-display text-2xl leading-snug text-foreground md:text-3xl">
                {p.workingTitle}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-foreground/85">
                {p.paragraph}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Main question
                  </p>
                  <p className="mt-2 font-display text-base italic leading-snug text-foreground md:text-lg">
                    {p.question}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Status and planned work
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {p.output}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link
                  to="/inquiry/$slug"
                  params={{ slug: p.themeSlug }}
                  className="rounded-sm border border-border bg-background px-2 py-1 text-foreground/80 hover:border-foreground"
                >
                  Theme · {p.themeLabel} →
                </Link>
                {p.conceptSlug && p.conceptLabel && (
                  <Link
                    to="/concepts/$slug"
                    params={{ slug: p.conceptSlug }}
                    className="rounded-sm border border-border bg-background px-2 py-1 text-foreground/80 hover:border-foreground"
                  >
                    Concept · {p.conceptLabel} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

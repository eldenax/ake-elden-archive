import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Current Research — Dr. Åke Elden";
const DESCRIPTION =
  "Five active research projects: their central philosophical questions, the state of the argument, and expected outputs.";
const URL_SELF = "https://ake-elden-archive.lovable.app/current-research";

export const Route = createFileRoute("/current-research")({
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
      "The principal manuscript currently in draft. When institutional reasoning is delegated to automated procedures, answerability is not eliminated but silently relocated — and often to a site that cannot in fact bear it. The manuscript identifies that site, gives it a name, and shows why nominal oversight arrangements frequently leave the underlying gap intact.",
    question:
      "Where in an institution must answerability be borne once parts of its reasoning have been absorbed into automated procedures — and what does it take for that site to remain occupied?",
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
      "The partition thesis distinguishes the question of who counts morally from the question of how those admitted are to be ordered against one another. Ontocentric information ethics is used as the maximal test case: even the most inclusive standing criterion cannot, by itself, supply an internal principle of priority. The manuscript is under review and is being sharpened against objections from moral-status theorists.",
    question:
      "Under what conditions can criteria of moral standing generate an internal ordering — and when do they leave the ordering problem structurally unresolved?",
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
      "Platform environments do not merely display inequality — they format it as entitlement whose frustration takes a recognisable, and monetisable, affective shape. The paper develops a philosophical account of how comparative entitlements are formed, and of the pathway from platform-mediated comparison, through grievance, to social violence at scale. Currently in revision after review.",
    question:
      "How does infrastructural comparison generate entitlements whose frustration is structurally converted into grievance — and under what conditions does that conversion scale into social violence?",
    output:
      "Journal article (revise and resubmit, 2026); book-length treatment of post-mimetic relationality as a general social configuration.",
    themeSlug: "desire-comparison-social-relations",
    themeLabel: "Desire & Relations",
    conceptSlug: "comparative-entitlement-formation",
    conceptLabel: "Comparative Entitlement Formation",
  },
  {
    workingTitle: "Second-Order Provenance",
    paragraph:
      "First-order provenance tracks where data came from. Second-order provenance tracks where the normative orderings that make those data matter came from — how a threshold, ranking, or category was authored, licensed, and sustained. The project is developing a framework under which institutions can be audited at that second level rather than only at the level of inputs.",
    question:
      "What would it take for an institution to own not only the data it uses, but the normative orderings under which those data are taken to matter?",
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
            Five active projects
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            These are the projects currently under active work. Each one names
            a working title, the philosophical question it is trying to
            answer, and the expected output. Together they show where the
            programme is being extended right now, rather than what it has
            already produced.
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
                    Central philosophical question
                  </p>
                  <p className="mt-2 font-display text-base italic leading-snug text-foreground md:text-lg">
                    {p.question}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Expected output
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

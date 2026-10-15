import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Projects — Dr. Åke Elden";
const DESCRIPTION =
  "Applied research with TrialTact and ClaimBuilder.ai: exploring how people and institutions use evidence, make decisions, and take responsibility.";
const URL_SELF = "https://akeelden.com/projects";

export const Route = createFileRoute("/projects")({
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
  component: ProjectsPage,
});

const PROJECTS = [
  {
    name: "ClaimBuilder.ai",
    role: "Applied research context",
    summary:
      "A setting for examining how institutions build claims, justify decisions, and account for the rules and rankings behind them.",
    themes: [
      { slug: "judgment-answerability-institutional-reason", label: "Judgment & Answerability" },
      { slug: "institutions-infrastructure-technological-mediation", label: "Institutions & Infrastructure" },
    ],
  },
  {
    name: "TrialTact",
    role: "Applied research context",
    summary:
      "A regulated setting for examining how information systems, practical barriers, and administrative expertise shape what people can know and do.",
    themes: [
      { slug: "institutions-infrastructure-technological-mediation", label: "Institutions & Infrastructure" },
    ],
  },
] as const;

function ProjectsPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Projects
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Research in practice
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            These projects bring the philosophical questions into practical
            settings: what counts as evidence, who can defend a decision, and
            what helps or prevents people from acting responsibly.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 space-y-12">
          {PROJECTS.map((p) => (
            <article key={p.name} className="border-t border-border pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl text-foreground md:text-3xl">
                  {p.name}
                </h2>
                <span className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {p.role}
                </span>
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">
                {p.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.themes.map((t) => (
                  <Link
                    key={t.slug}
                    to="/inquiry/$slug"
                    params={{ slug: t.slug }}
                    className="rounded-sm border border-border bg-background px-3 py-1 text-xs text-foreground/80 hover:border-foreground"
                  >
                    {t.label} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

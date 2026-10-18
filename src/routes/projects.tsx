import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Projects — Dr. Åke Elden";
const DESCRIPTION =
  "Social values and human formation, TrialTact, and ClaimBuilder.ai: research on how values are formed, how people and institutions use evidence, make decisions, and take responsibility.";
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
    name: "Social values and human formation",
    role: "Project leader · 2025–2028 · Basic research",
    summary:
      "A basic research project at NLA University College, running 2025–2028, on how social values take shape in human formation — the slow work through which persons come to judge, stand, and act in relation to one another.",
    abstract:
      "This study programme examines the relationship between social responsibility and human formation in the face of contemporary social, technological and institutional challenges. The starting point is that social responsibility cannot primarily be understood as compliance with rules or organisational requirements, but as a moral and relational capacity that develops through formative processes over time. The study draws on perspectives from formation theory, ethics and social science in order to analyse how individuals are formed into responsible citizens through education, professional practice and participation in communities. The analysis shows that the development of social responsibility is closely linked to the capacity for critical reflection, empathy and moral judgement. These qualities are promoted through practices that stimulate dialogue, self-reflection and encounter with diverse perspectives. At the same time, traditional formative processes are challenged by increasing individualisation, digitisation and instrumental understandings of learning and working life. The study argues that sustainable societies require institutions that actively promote both professional competence and character formation. It further discusses how social responsibility can be understood as a foundation for democratic participation and social sustainability. Formation is presented as a continuous process in which people develop the ability to act to the benefit of both themselves and others. The study concludes that a stronger integration of the ideals of formation in education, organisations and public policy can contribute to strengthening social responsibility and promoting a more inclusive and sustainable society.",
    themes: [
      { slug: "formation-agency-human-subject", label: "Formation & Agency" },
      { slug: "desire-comparison-social-relations", label: "Desire, Comparison & Social Relations" },
      { slug: "judgment-answerability-institutional-reason", label: "Judgment & Answerability" },
    ],
  },
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
              {"abstract" in p && p.abstract ? (
                <details className="mt-6 border-t border-border pt-5">
                  <summary className="cursor-pointer text-sm font-medium text-foreground">
                    Read the project abstract
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85">
                    {p.abstract}
                  </p>
                </details>
              ) : null}
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

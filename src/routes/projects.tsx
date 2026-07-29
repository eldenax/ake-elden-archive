import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Projects — Dr. Åke Elden";
const DESCRIPTION =
  "Applied research projects that serve as diagnostic contexts for the philosophical programme: TrialTact and ClaimBuilder.ai.";
const URL_SELF = "https://ake-elden-archive.lovable.app/projects";

export const Route = createFileRoute("/projects")({
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
  component: ProjectsPage,
});

const PROJECTS = [
  {
    name: "ClaimBuilder.ai",
    role: "Applied research context",
    summary:
      "An applied setting in which the philosophy of judgment, answerability, and second-order provenance is tested against the practical construction of institutional claims.",
    themes: [
      { slug: "judgment-answerability-institutional-reason", label: "Judgment & Answerability" },
      { slug: "institutions-infrastructure-technological-mediation", label: "Institutions & Infrastructure" },
    ],
  },
  {
    name: "TrialTact",
    role: "Applied research context",
    summary:
      "An applied setting in which epistemic infrastructure, systemic friction, and administrative expertise become visible under load in a regulated domain.",
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
            Applied projects as diagnostic contexts
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            The projects below are not stand-alone products. They are the
            settings in which the philosophical problems of the research
            programme become visible under practical load — where inferential
            license, second-order provenance, and institutional friction stop
            being abstractions and start pushing back.
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

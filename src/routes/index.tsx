import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/ake-elden-hero.jpg";
import { THEMES } from "../data/themes";
import { PUBLICATIONS } from "../data/publications";

const TITLE = "Dr. Åke Elden — Philosopher of Judgment, Responsibility and Formation";
const DESCRIPTION =
  "A research programme on the philosophical conditions of judgment, responsibility, explanation, institutional reason, normativity, and human formation — with AI as one diagnostic context among several.";
const OG_IMAGE =
  "https://id-preview--433ae820-2d37-44cc-ae5b-3f9c81619f70.lovable.app/ake-elden-hero.jpg";

const URL_SELF = "https://ake-elden-archive.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: URL_SELF,
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Person",
            name: "Åke Elden",
            identifier: "https://orcid.org/0009-0003-0965-7666",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function CapacityCard({
  slug,
  title,
  description,
  count,
}: {
  slug: string;
  title: string;
  description: string;
  count: number;
}) {
  return (
    <Link
      to="/publications"
      search={{ capacity: slug }}
      className="group flex h-full flex-col justify-between gap-6 bg-background p-8 transition-colors hover:bg-muted/40"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {count} contribution{count === 1 ? "" : "s"}
        </p>
        <h3 className="mt-3 font-display text-xl leading-snug text-foreground group-hover:underline decoration-dotted underline-offset-4">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
        Filter archive →
      </span>
    </Link>
  );
}

function Index() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        <div className="flex flex-col justify-center px-6 py-20 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              NLA University College · Oslo
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-foreground md:text-5xl xl:text-[3.75rem]">
              Dr. Åke Elden
            </h1>
            <p className="mt-8 font-display text-xl leading-snug text-foreground md:text-2xl xl:text-[1.7rem]">
              I study the conditions under which judgment, responsibility, and
              explanation become possible — and how technological and
              institutional systems reorganize those conditions.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              The programme is organised around philosophical problems, not
              domains: judgment and answerability; normativity and moral
              standing; explanation and object constitution; formation and
              agency; desire and social relations; institutions and
              infrastructure. Different disciplines and technologies provide
              contexts in which these problems become visible.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Artificial intelligence enters the programme as one revealing
              context — the setting in which transformations of judgment,
              responsibility, and institutional reason show up under load.
              The questions themselves precede it and outlast it.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Research Programme
              </Link>
              <Link
                to="/themes"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Research Themes
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

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Guiding question
          </p>
          <blockquote className="mt-6 border-l-2 border-foreground pl-6 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
            “Which human capacities are presupposed, transformed, or concealed
            when artificial intelligence becomes part of institutional and
            personal decision-making?”
          </blockquote>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            As you explore the site, look for how each project, publication, and
            concept traces one part of that question: the forms of judgment we
            still require, the responsibilities we distribute, the explanations
            we trust, and the human capacities that must be cultivated if
            institutions and technologies are to remain answerable to us.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Explore by capacity
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Human capacities in the archive
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The guiding question sorts the programme into three stances
              toward human capacity: what institutions and technologies must
              already assume, what they reshape, and what they render invisible.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            <CapacityCard
              slug="presupposed"
              title="Presupposed"
              description="Capacities that must already be in place for judgment, responsibility, and explanation to function at all."
              count={
                PUBLICATIONS.filter((p) =>
                  p.capacities?.includes("presupposed"),
                ).length
              }
            />
            <CapacityCard
              slug="transformed"
              title="Transformed"
              description="Capacities that are reshaped when reasoning, desire, or formation is delegated to systems."
              count={
                PUBLICATIONS.filter((p) =>
                  p.capacities?.includes("transformed"),
                ).length
              }
            />
            <CapacityCard
              slug="concealed"
              title="Concealed"
              description="Capacities that are obscured, evacuated, or rendered unaddressable by automated procedures."
              count={
                PUBLICATIONS.filter((p) =>
                  p.capacities?.includes("concealed"),
                ).length
              }
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Research themes
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Six problem areas, one programme
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {THEMES.map((t) => (
              <Link
                key={t.slug}
                to="/themes/$slug"
                params={{ slug: t.slug }}
                className="group flex h-full flex-col justify-between gap-4 bg-background p-8 transition-colors hover:bg-muted/40"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Theme {t.number.toString().padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg leading-snug text-foreground group-hover:underline decoration-dotted underline-offset-4">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.tagline}
                  </p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
                  Enter theme →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-sm">
            <Link
              to="/research"
              className="font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              Read the research programme →
            </Link>
            <Link
              to="/publications"
              className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              See publications →
            </Link>
            <Link
              to="/concepts"
              className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              Browse concepts →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

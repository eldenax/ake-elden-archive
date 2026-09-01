import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/ake-elden-hero.jpg";
import { THEMES } from "../data/themes";
import { PUBLICATIONS, SELECTED } from "../data/publications";

const TITLE =
  "Åke Elden, PhD — Philosophy of Technology, Social Epistemology, Theological Anthropology";
const DESCRIPTION =
  "Åke Elden studies the conditions under which judgment, responsibility, agency, and explanation become possible — and how technological and institutional systems reorganize them.";
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

function Index() {
  const level2 = PUBLICATIONS.filter((p) => p.level === "2").length;

  return (
    <>
      {/* Hero: who, what, where, credibility */}
      <section className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center px-6 py-24 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="max-w-[30rem]">
            <h1 className="font-display text-4xl leading-[1.1] text-foreground md:text-5xl xl:text-[3.5rem]">
              Åke Elden, PhD
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground">
              Researcher in Philosophy of Technology, Social Epistemology, and
              Theological Anthropology
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Research Advisor · NLA University College, Oslo
            </p>

            <p className="mt-12 font-display text-xl leading-snug text-foreground md:text-2xl">
              I study the conditions under which judgment, responsibility,
              agency, and explanation become possible — and how technological
              and institutional systems reorganize those conditions.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Artificial intelligence is a diagnostic context rather than the
              object of study: a particularly revealing case in which changes
              to judgment, answerability, and human formation become visible.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-foreground/80">
              {PUBLICATIONS.length} peer-reviewed articles published online or
              formally accepted in 2026, including {level2} in Level 2
              channels.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <Link
                to="/inquiry"
                className="font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                Research programme
              </Link>
              <span aria-hidden className="text-muted-foreground">·</span>
              <Link
                to="/publications"
                className="font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                Selected publications
              </Link>
              <span aria-hidden className="text-muted-foreground">·</span>
              <Link
                to="/cv"
                className="font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                CV
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[36vh] lg:min-h-0 lg:w-1/2">
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

      {/* Evidence: selected publications */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Selected publications
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            {SELECTED.length} papers to read first
          </h2>
          <ol className="mt-10 space-y-8">
            {SELECTED.map((p) => (
              <li key={p.title} className="border-t border-border pt-6">
                <p className="font-display text-lg leading-snug text-foreground">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-4 hover:text-muted-foreground"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.venue}
                  {p.year ? ` · ${p.year}` : ""}
                  {p.level === "2" ? " · Level 2" : ""}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link
              to="/publications"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View all publications →
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture: the programme */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Research programme
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Six problem areas, one programme
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The work is organised around philosophical problems rather than
              domains or technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {THEMES.map((t) => (
              <Link
                key={t.slug}
                to="/inquiry/$slug"
                params={{ slug: t.slug }}
                className="group flex h-full flex-col justify-between gap-4 bg-background p-8 transition-colors hover:bg-muted/40"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Area {t.number.toString().padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg leading-snug text-foreground group-hover:underline decoration-dotted underline-offset-4">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.tagline}
                  </p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
                  Enter →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-sm">
            <Link
              to="/inquiry"
              className="font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              Read the full programme →
            </Link>
            <Link
              to="/current-research"
              className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              Current work →
            </Link>
          </div>
        </div>
      </section>

      {/* Independence */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Researcher in philosophy of technology, social epistemology, and
            theological anthropology. Research Advisor at NLA University
            College. Views and research presented here are my own.
          </p>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { THEMES } from "../data/themes";

const TITLE = "Research Themes — Dr. Åke Elden";
const DESCRIPTION =
  "Six problem areas organising a single research programme: judgment and answerability, normativity and standing, formation and agency, desire and social relations, explanation and philosophy of science, institutions and infrastructure.";
const URL_SELF = "https://ake-elden-archive.lovable.app/themes";

export const Route = createFileRoute("/themes")({
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
          about: { "@type": "Person", name: "Åke Elden" },
        }),
      },
    ],
  }),
  component: ThemesIndex,
});

function ThemesIndex() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research themes
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            One programme, six problem areas
          </h1>
          <p className="mt-8 text-base leading-relaxed text-foreground/85">
            My research is organized around a coherent set of philosophical
            problems concerning judgment, responsibility, explanation,
            institutional reason, normativity, and human formation. Different
            disciplines and technologies provide contexts in which these
            problems become visible and can be studied.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            The themes below are not disciplinary categories. Each one names a
            philosophical problem area; the papers and projects grouped under
            it are attempts to work on that problem from several sides.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            {THEMES.map((t) => (
              <li key={t.slug} className="bg-background">
                <Link
                  to="/themes/$slug"
                  params={{ slug: t.slug }}
                  className="group flex h-full flex-col justify-between gap-6 p-8 transition-colors hover:bg-muted/40"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Theme {t.number.toString().padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 font-display text-xl leading-snug text-foreground group-hover:underline decoration-dotted underline-offset-4">
                      {t.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t.tagline}
                    </p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
                    Enter theme →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

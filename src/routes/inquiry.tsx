import { createFileRoute, Link } from "@tanstack/react-router";
import { THEMES } from "../data/themes";

const TITLE = "Research Programme — Dr. Åke Elden";
const DESCRIPTION =
  "One research programme, six problem areas: judgment and answerability, normativity and standing, formation and agency, desire and social relations, explanation and philosophy of science, institutions and infrastructure.";
const URL_SELF = "https://ake-elden-archive.lovable.app/inquiry";

export const Route = createFileRoute("/inquiry")({
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
          about: { "@type": "Person", name: "Åke Elden" },
        }),
      },
    ],
  }),
  component: InquiryPage,
});

function InquiryPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research Programme
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            One programme, six problem areas
          </h1>
          <div className="mt-10 border-l-2 border-foreground/40 pl-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Programme statement
            </p>
            <blockquote className="mt-3 font-display text-xl italic leading-snug text-foreground md:text-2xl">
              I study the conditions under which judgment, responsibility, and
              explanation become possible — and how technological and
              institutional systems reorganize those conditions.
            </blockquote>
          </div>
          <p className="mt-8 text-base leading-relaxed text-foreground/85">
            The inquiry is not organised by discipline. Its unifying object is
            a set of background conditions — epistemic, institutional, and
            anthropological — that make distinctly human capacities possible.
            Its unifying question is what happens to those conditions when
            technological and institutional systems reorganize or remove them.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            Judgment, responsibility, and normativity are the primary objects.
            Artificial intelligence enters as one revealing context among
            several: the setting in which the reorganisation of those
            conditions becomes measurable, and in which the philosophical
            stakes stop being hypothetical.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Map
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            The architecture at a glance
          </h2>
          <div className="mt-10 rounded-md border border-border bg-background p-8">
            <pre className="whitespace-pre font-display text-sm leading-relaxed text-foreground md:text-base">{`      Formation & Agency
              ↑
   Judgment ←──→ Answerability
              ↑
   Normativity & Standing
              ↑
   Explanation & Object Constitution
              ↑
   Institutions & Infrastructure
              ↑
   Desire & Social Relations`}</pre>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            The six areas are not siloes. Each is a face of the same object:
            the background conditions under which human acts remain human
            acts.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Problem areas
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            The six problem areas
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            {THEMES.map((t) => (
              <li key={t.slug} className="bg-background">
                <Link
                  to="/inquiry/$slug"
                  params={{ slug: t.slug }}
                  className="group flex h-full flex-col justify-between gap-4 p-8 transition-colors hover:bg-muted/40"
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
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

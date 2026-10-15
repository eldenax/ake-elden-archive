import { createFileRoute, Link } from "@tanstack/react-router";
import { THEMES } from "../data/themes";

const TITLE = "Research Overview — Dr. Åke Elden";
const DESCRIPTION =
  "Åke Elden’s research asks what people need to judge, act freely, and take responsibility, and how technology changes those conditions. Explore six connected areas.";
const URL_SELF = "https://akeelden.com/inquiry";

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
            Research overview
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            What makes human judgment and action possible?
          </h1>
          <div className="mt-10 border-l-2 border-foreground/40 pl-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              My central question
            </p>
            <blockquote className="mt-3 font-display text-xl italic leading-snug text-foreground md:text-2xl">
              What must be in place for us to judge, act freely, and take
              responsibility — and how does technology change those conditions?
            </blockquote>
          </div>
          <p className="mt-8 text-base leading-relaxed text-foreground/85">
            Having an ability does not mean we can use it. We may need reliable
            evidence, time to think, real alternatives, and a chance to question
            a decision. My research examines what happens when technology and
            institutions change these possibilities.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            AI is one example, not the whole subject. The same questions arise
            in science, social life, theology, and institutions.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Explore further
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            The ideas behind the research
          </h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {([
              { to: "/research-premises", label: "Core ideas", text: "What people need to exercise their abilities." },
              { to: "/method", label: "How I approach the questions", text: "What justifies a move from evidence to a conclusion?" },
              { to: "/concepts", label: "Key concepts", text: "The terms developed in this research." },
              { to: "/concept-graph", label: "Research map", text: "Connections between the concepts." },
              { to: "/projects", label: "Applied projects", text: "Where the questions meet practice." },
            ] as const).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="flex items-center justify-between gap-4 py-5 text-foreground hover:underline underline-offset-4">
                  <span><span className="block font-display text-lg">{item.label}</span><span className="mt-1 block text-sm text-muted-foreground">{item.text}</span></span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research areas
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            Six connected questions
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
                      {t.short}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t.tagline}
                    </p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
                    Read more →
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

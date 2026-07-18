import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/ake-elden-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Åke Elden — Behavioral Scientist & Systems Designer" },
      {
        name: "description",
        content:
          "Åke Elden is a Norwegian behavioral scientist designing systems that shape human decisions across healthcare, life sciences, and institutional design.",
      },
      {
        property: "og:title",
        content: "Åke Elden — Behavioral Scientist & Systems Designer",
      },
      {
        property: "og:description",
        content:
          "Åke Elden is a Norwegian behavioral scientist designing systems that shape human decisions across healthcare, life sciences, and institutional design.",
      },
      { property: "og:image", content: "https://id-preview--433ae820-2d37-44cc-ae5b-3f9c81619f70.lovable.app/ake-elden-hero.jpg" },
      { name: "twitter:image", content: "https://id-preview--433ae820-2d37-44cc-ae5b-3f9c81619f70.lovable.app/ake-elden-hero.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
      {/* Text side */}
      <section className="flex flex-col justify-center px-6 py-16 lg:w-1/2 lg:px-16 xl:px-24">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Behavioral Scientist
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-foreground md:text-5xl xl:text-6xl">
            Åke Elden
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Designing systems that shape human decisions. For more than twenty years, Åke has worked
            across global healthcare and life sciences organizations — at the intersection of
            scientific knowledge, regulatory systems, operational reality, and human behavior.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read biography
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-base text-foreground">Healthcare & Life Sciences</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Experience across Pfizer, Abbott, AbbVie, UCB, Novartis, Biogen, and leading CROs.
              </p>
            </div>
            <div>
              <h2 className="font-display text-base text-foreground">Systems & Decisions</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Building frameworks where clinical research, institutional design, and AI meet real-world judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image side */}
      <section className="relative min-h-[50vh] lg:min-h-0 lg:w-1/2">
        <img
          src={heroImage}
          alt="Abstract paper and ink composition suggesting systems and human decisions"
          width={1024}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-20 lg:opacity-40" />
      </section>
    </div>
  );
}

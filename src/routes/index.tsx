import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "../assets/ake-elden-portrait.jpg.asset.json";
import { Button } from "../components/ui/button";
import { SELECTED } from "../data/publications";

const TITLE =
  "Åke Elden, PhD — Philosophy of Technology, Social Epistemology, Theological Anthropology";
const DESCRIPTION =
  "Åke Elden studies the conditions under which judgment, responsibility, agency, and explanation become possible — and how technological and institutional systems reorganize them.";
const URL_SELF = "https://akeelden.com/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
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
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-8 sm:grid-cols-[1.3fr_1fr] sm:gap-12 sm:py-12 lg:gap-20 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground">Philosophy · Technology · Human life</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-normal text-foreground md:text-5xl">
            Åke Elden<span className="mt-2 block font-sans text-base text-muted-foreground">PhD · Research Advisor, NLA University College</span>
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-foreground">
            What makes it possible for us to judge, act freely, and take responsibility?
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I explore how technology changes these possibilities — and what we need to preserve them.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild><Link to="/inquiry">Explore my research →</Link></Button>
            <Button asChild variant="link"><Link to="/academic-profile">About me</Link></Button>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-[240px] sm:max-w-[350px]">
          <img
            src={portrait.url}
            alt="Portrait of Åke Elden in black and white"
            width={350}
            height={350}
            className="aspect-square w-full object-contain grayscale"
            fetchPriority="high"
          />
        </figure>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-20">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl leading-snug tracking-normal text-foreground">
                The Philosophy of Exercisable Human Capacities
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Having a capacity is not the same as being able to exercise it.
                My research asks what must be in place for human knowledge, judgment,
                freedom, and responsibility to become real possibilities.
              </p>
              <Button asChild variant="link" className="mt-4 h-auto px-0">
                <Link to="/research-premises">Read the philosophical framework →</Link>
              </Button>
            </div>
            <div className="divide-y divide-border border-y border-border">
              <Link to="/blog" className="flex items-center justify-between gap-4 py-5 text-foreground hover:underline underline-offset-4">
                <span><span className="block font-display text-lg tracking-normal">From the blog</span><span className="mt-1 block text-sm text-muted-foreground">Essays on human life and a changing world</span></span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="flex items-center justify-between gap-4 py-5 text-foreground hover:underline underline-offset-4">
                <span><span className="block font-display text-lg tracking-normal">Get in touch</span><span className="mt-1 block text-sm text-muted-foreground">akeeld@nla.no</span></span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl tracking-normal text-foreground">Selected publications</h2>
            <Button asChild variant="link" className="px-0"><Link to="/publications">All publications →</Link></Button>
          </div>
          <ol className="mt-6 grid gap-x-12 md:grid-cols-2">
            {SELECTED.map((p) => (
              <li key={p.title} className="border-t border-border py-6">
                <h3 className="font-display text-lg leading-snug tracking-normal text-foreground">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-muted-foreground">{p.title}</a>
                  ) : p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.venue}{p.year ? ` · ${p.year}` : ""}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

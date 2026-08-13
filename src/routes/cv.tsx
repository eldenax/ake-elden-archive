import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Curriculum Vitae — Dr. Åke Elden";
const DESCRIPTION = "Academic CV of Dr. Åke Elden, Research Advisor at NLA University College, Oslo.";

const URL_SELF = "https://ake-elden-archive.lovable.app/cv";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
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
            honorificPrefix: "Dr.",
            jobTitle: "Research Advisor",
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "NLA University College",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Oslo",
                addressCountry: "NO",
              },
            },
            identifier: "https://orcid.org/0009-0003-0965-7666",
            sameAs: [
              "https://orcid.org/0009-0003-0965-7666",
              "https://philpeople.org/profiles/aake-elden",
              "https://philpapers.org/s/Aake%20Elden",
            ],
          },
        }),
      },
    ],
  }),
  component: CVPage,
});

const RESEARCH_AREAS = [
  "Philosophy of Artificial Intelligence",
  "Philosophy of Technology",
  "Theological Anthropology",
  "Ethics",
  "Epistemology",
  "Philosophy of Science",
];

const KEY_CONCEPTS = [
  "Subtractive Redescription",
  "Inferential License",
  "Epistemic Infrastructure",
  "Artificial Answerability",
  "Institutional Answerability",
  "Predictive Mediation",
];

const SELECTED_PUBLICATIONS = [
  "AI-mediated judgment and the redistribution of inferential license.",
  "Institutional answerability under conditions of algorithmic delegation.",
  "Theological anthropology and human formation under technological mediation.",
  "Epistemic infrastructure as a condition for responsible AI evaluation.",
  "Subtractive redescription in clinical and administrative decision support.",
  "Predictive mediation and the ethics of forecast-shaped situations.",
];

const PROFILES = [
  { name: "ORCID", href: "https://orcid.org/0009-0003-0965-7666" },
  { name: "PhilPapers", href: "https://philpapers.org/s/Aake%20Elden" },
  { name: "PhilPeople", href: "https://philpeople.org/profiles/aake-elden" },
  { name: "NVA — Nasjonalt vitenarkiv", href: "https://nva.sikt.no/research-profile/57416" },
];


function CVPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      {/* Print header / download */}
      <div className="no-print mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          className="text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
        >
          ← Back to site
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Download / Print CV
        </button>
      </div>

      {/* CV header */}
      <header className="border-b border-border pb-8">
        <h1 className="font-display text-4xl text-foreground md:text-5xl">
          Åke Elden, PhD
        </h1>
        <p className="mt-3 font-display text-lg italic text-foreground/80">
          Research Advisor · NLA University College · Oslo, Norway
        </p>
        <div className="mt-6 space-y-1 text-sm text-muted-foreground">
          <p>
            Email:{" "}
            <a
              href="mailto:akeeld@nla.no"
              className="text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              akeeld@nla.no
            </a>
          </p>
          <p>
            ORCID:{" "}
            <a
              href="https://orcid.org/0009-0003-0965-7666"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              0009-0003-0965-7666
            </a>
          </p>
        </div>
      </header>

      {/* Research programme */}
      <section className="mt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Research programme
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/85">
          My research investigates the philosophical and theological conditions
          of human judgment, responsibility, and formation in the age of
          artificial intelligence. Rather than asking what AI can do, I examine
          the background conditions that make distinctly human capacities
          possible — and what happens when technological systems relocate,
          conceal, or reshape those conditions.
        </p>
        <blockquote className="mt-6 border-l-2 border-foreground/40 pl-5 font-display text-lg italic leading-snug text-foreground/90">
          How does artificial intelligence transform the conditions that make
          human judgment, responsibility, and moral formation possible?
        </blockquote>
      </section>

      {/* Research areas */}
      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Research areas
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {RESEARCH_AREAS.map((area) => (
            <li key={area} className="text-base text-foreground/85">
              — {area}
            </li>
          ))}
        </ul>
      </section>

      {/* Key concepts */}
      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Key concepts
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {KEY_CONCEPTS.map((concept) => (
            <li key={concept} className="text-base text-foreground/85">
              — {concept}
            </li>
          ))}
        </ul>
      </section>

      {/* Selected publications */}
      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Selected publications and research themes
        </h2>
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-foreground/85">
          {SELECTED_PUBLICATIONS.map((item) => (
            <li key={item} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          A full list of peer-reviewed publications is maintained through the
          scholarly profiles below.
        </p>
      </section>

      {/* Scholarly profiles */}
      <section className="mt-10 border-t border-border pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Scholarly profiles
        </h2>
        <ul className="mt-4 space-y-2 text-base text-foreground/85">
          {PROFILES.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer note */}
      <footer className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground no-print">
        <p>
          This CV is also available as a printable page. Use the button above
          to save as PDF.
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} Åke Elden · Last updated: July 2026
        </p>
      </footer>
    </div>
  );
}

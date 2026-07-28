import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Academic Profile — Dr. Åke Elden";
const DESCRIPTION =
  "Scholarly profiles and academic identifiers for Dr. Åke Elden: ORCID, Google Scholar, OpenAlex, Semantic Scholar, PhilPeople, PhilPapers, NVA, LinkedIn.";
const URL_SELF = "https://ake-elden-archive.lovable.app/academic-profile";

const PROFILES: { name: string; href: string; note?: string }[] = [
  { name: "ORCID", href: "https://orcid.org/0009-0003-0965-7666", note: "0009-0003-0965-7666" },
  { name: "Google Scholar", href: "https://scholar.google.com/citations?user=" },
  { name: "OpenAlex", href: "https://openalex.org/" },
  { name: "Semantic Scholar", href: "https://www.semanticscholar.org/" },
  { name: "PhilPeople", href: "https://philpeople.org/profiles/aake-elden" },
  { name: "PhilPapers", href: "https://philpapers.org/s/Aake%20Elden" },
  { name: "NVA Filter — Nasjonalt vitenarkiv", href: "https://nva.sikt.no/research-profile/57416" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
];

export const Route = createFileRoute("/academic-profile")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "profile" },
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
            sameAs: PROFILES.map((p) => p.href),
          },
        }),
      },
    ],
  }),
  component: AcademicProfilePage,
});

function AcademicProfilePage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Academic profile
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Where to find the full record
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            The most current and complete record of publications is maintained
            through the scholarly profiles below. ORCID is the canonical
            identifier.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILES.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-md border border-border bg-background px-5 py-4 transition-colors hover:border-foreground"
                >
                  <span>
                    <span className="block font-display text-base text-foreground">
                      {p.name}
                    </span>
                    {p.note && (
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {p.note}
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

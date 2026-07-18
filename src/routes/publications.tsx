import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Publications — Dr. Åke Elden";
const DESCRIPTION =
  "Peer-reviewed publications and scholarly profiles of Dr. Åke Elden, including ORCID, Google Scholar, OpenAlex, and Semantic Scholar.";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PublicationsPage,
});

const JOURNALS = [
  "Studies in Christian Ethics",
  "Studia Theologica",
  "AI and Ethics",
  "Philosophy & Technology",
  "Theology and Science",
  "Journal of Health Communication",
  "New Blackfriars",
  "Behavioral Sciences",
  "Philosophies",
];

const PROFILES: { name: string; href: string }[] = [
  { name: "ORCID", href: "https://orcid.org/0009-0003-0965-7666" },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=",
  },
  { name: "OpenAlex", href: "https://openalex.org/" },
  { name: "Semantic Scholar", href: "https://www.semanticscholar.org/" },
  { name: "NVA (Nasjonalt vitenarkiv)", href: "https://nva.unit.no/" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

function PublicationsPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Publications
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Recent scholarly work
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A full and continually updated list of peer-reviewed publications
            is maintained through the scholarly profiles below. Recent work
            has appeared in a range of journals across philosophy of
            technology, theology, ethics, and the behavioural sciences.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display text-2xl text-foreground md:text-3xl">
              Journals featuring recent work
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNALS.map((j) => (
              <li
                key={j}
                className="border-t border-border pt-3 font-display text-base italic text-foreground"
              >
                {j}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Scholarly profiles
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Where to find the full record
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILES.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-md border border-border bg-background px-5 py-4 transition-colors hover:border-foreground"
                >
                  <span className="font-display text-base text-foreground">
                    {p.name}
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
          <p className="mt-10 text-xs text-muted-foreground">
            ORCID: 0009-0003-0965-7666
          </p>
        </div>
      </section>
    </div>
  );
}

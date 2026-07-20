import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Contact — Dr. Åke Elden";
const DESCRIPTION =
  "Contact Dr. Åke Elden, Research Advisor at NLA University College, Oslo — for academic correspondence, invited lectures, and research collaborations.";

const URL_SELF = "https://ake-elden-archive.lovable.app/contact";

export const Route = createFileRoute("/contact")({
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
          "@type": "ContactPage",
          url: URL_SELF,
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Person",
            name: "Åke Elden",
            email: "akeeld@nla.no",
            identifier: "https://orcid.org/0009-0003-0965-7666",
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "NLA University College",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col justify-center px-6 py-20 lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
        Åke Elden, PhD
      </h1>
      <p className="mt-4 font-display text-lg italic text-foreground/80">
        Research Advisor · NLA University College · Oslo, Norway
      </p>

      <div className="mt-12 border-t border-border pt-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Academic correspondence
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          For research collaborations, invited lectures, editorial inquiries,
          or media requests, please make contact by email.
        </p>
        <dl className="mt-8 space-y-6">
          <div>
            <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Primary (institutional)
            </dt>
            <dd className="mt-2">
              <a
                href="mailto:akeeld@nla.no"
                className="font-display text-xl text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                akeeld@nla.no
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Alternative
            </dt>
            <dd className="mt-2">
              <a
                href="mailto:aake.elden@gmail.com"
                className="font-display text-base text-foreground/85 underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                aake.elden@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Affiliation
          </p>
          <p className="mt-3 text-base text-foreground">
            NLA University College
            <br />
            Oslo, Norway
          </p>
          <p className="mt-3">
            <a
              href="https://www.nla.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              nla.no →
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Identifiers
          </p>
          <p className="mt-3 text-base text-foreground">
            ORCID:{" "}
            <a
              href="https://orcid.org/0009-0003-0965-7666"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              0009-0003-0965-7666
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

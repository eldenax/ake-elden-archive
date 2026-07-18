import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Contact — Dr. Åke Elden";
const DESCRIPTION =
  "Contact Dr. Åke Elden, Research Advisor at NLA University College, Oslo — for academic correspondence, invited lectures, and research collaborations.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
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

      <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Affiliation
          </p>
          <p className="mt-3 text-base text-foreground">
            NLA University College
            <br />
            Oslo, Norway
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

      <div className="mt-10 border-t border-border pt-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Correspondence
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          For academic correspondence, invited lectures, or research
          collaborations, please make contact through LinkedIn or via the
          institutional address at NLA University College.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            LinkedIn
          </a>
          <a
            href="https://www.nla.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            NLA University College
          </a>
        </div>
      </div>
    </div>
  );
}

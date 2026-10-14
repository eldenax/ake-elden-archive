import { createFileRoute } from "@tanstack/react-router";
import { ENGAGEMENTS, enquiryHref } from "../data/offerings";

const TITLE = "Lectures & Consultation — Dr. Åke Elden";
const DESCRIPTION =
  "Book Dr. Åke Elden for invited lectures, workshops on AI in research and teaching, and one-to-one research consultations.";

const URL_SELF = "https://akeelden.com/engagements";

export const Route = createFileRoute("/engagements")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
  }),
  component: EngagementsPage,
});

function EngagementsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Engagements
      </p>
      <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
        Lectures &amp; consultation
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        I speak, teach, and advise on AI and human judgment, responsibility in technological
        systems, and theological anthropology.
      </p>

      <ul className="mt-12 space-y-10 border-t border-border pt-10">
        {ENGAGEMENTS.map((e) => (
          <li key={e.slug}>
            <h2 className="font-display text-2xl text-foreground">{e.title}</h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {e.format}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {e.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="font-display text-lg text-foreground">{e.price}</span>
              {e.paymentLink ? (
                <a
                  href={e.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book and pay
                </a>
              ) : (
                <a
                  href={enquiryHref(`Enquiry: ${e.title}`)}
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Enquire by email
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

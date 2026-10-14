import { createFileRoute } from "@tanstack/react-router";
import { LETTER, enquiryHref, type LetterTier } from "../data/offerings";

const TITLE = "The Research Letter — Dr. Åke Elden";
const DESCRIPTION =
  "Subscribe to The Research Letter from Dr. Åke Elden: research news, worked concepts, and annotated readings on AI, judgment, and responsibility.";

const URL_SELF = "https://akeelden.com/letter";

export const Route = createFileRoute("/letter")({
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
  component: LetterPage,
});

function TierCard({ tier, href, cta }: { tier: LetterTier; href: string; cta: string }) {
  const external = href.startsWith("http");
  return (
    <div className="flex flex-col rounded-md border border-border p-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {tier.name}
      </p>
      <p className="mt-3 font-display text-2xl text-foreground">{tier.price}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground/85">
        {tier.includes.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {cta}
      </a>
    </div>
  );
}

function LetterPage() {
  const { free, paid } = LETTER;
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Letter</p>
      <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
        {LETTER.name}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        {LETTER.summary}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-2">
        <TierCard
          tier={free}
          href={free.link || enquiryHref("Subscribe to The Research Letter")}
          cta="Subscribe free"
        />
        {paid.link && <TierCard tier={paid} href={paid.link} cta="Become a supporter" />}
      </div>
    </div>
  );
}

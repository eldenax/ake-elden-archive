import { createFileRoute, Link } from "@tanstack/react-router";
import { RESOURCES } from "../data/offerings";

const TITLE = "Resources — Dr. Åke Elden";
const DESCRIPTION =
  "Reading guides, teaching modules, and templates by Dr. Åke Elden on AI, responsibility, and judgment in research and teaching.";

const URL_SELF = "https://akeelden.com/resources";

export const Route = createFileRoute("/resources")({
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
  component: ResourcesPage,
});

function ResourcesPage() {
  // Only resources with a live Stripe Payment Link are offered.
  const available = RESOURCES.filter((r) => r.paymentLink);
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Resources
      </p>
      <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
        Guides, modules, and templates
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        Material from my research, prepared for students, teachers, and researchers. Each resource
        is a one-time purchase delivered as a download.
      </p>

      <div className="mt-12 border-t border-border pt-10">
        {available.length === 0 ? (
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            The first resources are in preparation.{" "}
            <Link
              to="/letter"
              className="text-foreground underline decoration-dotted underline-offset-4 hover:decoration-solid"
            >
              Subscribe to the Research Letter
            </Link>{" "}
            to hear when they are released.
          </p>
        ) : (
          <ul className="space-y-10">
            {available.map((r) => (
              <li key={r.slug}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {r.kind}
                </p>
                <h2 className="mt-2 font-display text-2xl text-foreground">{r.title}</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="font-display text-lg text-foreground">{r.price}</span>
                  <a
                    href={r.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Buy
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

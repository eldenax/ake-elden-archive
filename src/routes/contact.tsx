import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Åke Elden" },
      {
        name: "description",
        content: "Get in touch with Åke Elden for inquiries about research, consulting, and collaboration.",
      },
      { property: "og:title", content: "Contact — Åke Elden" },
      {
        property: "og:description",
        content: "Get in touch with Åke Elden for inquiries about research, consulting, and collaboration.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <header className="mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </p>
        <h1 className="font-display text-4xl text-foreground md:text-5xl">Get in touch</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          For inquiries about research, consulting, speaking, or collaboration, please reach out
          through LinkedIn.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2">
        <a
          href="https://no.linkedin.com/in/aakeelden"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-md border border-border bg-card p-6 transition-colors hover:bg-accent"
        >
          <h2 className="font-display text-lg text-card-foreground group-hover:text-accent-foreground">
            LinkedIn
          </h2>
          <p className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground/80">
            Connect and send a message on LinkedIn.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-accent-foreground">
            View profile →
          </span>
        </a>

        <div className="rounded-md border border-border bg-card p-6">
          <h2 className="font-display text-lg text-card-foreground">Location</h2>
          <p className="mt-2 text-sm text-muted-foreground">Based in Norway</p>
        </div>
      </div>
    </div>
  );
}

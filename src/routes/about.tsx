import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Åke Elden" },
      {
        name: "description",
        content:
          "Learn about Åke Elden's background as a Norwegian behavioral scientist, his education at NTNU, and his career across healthcare and life sciences.",
      },
      { property: "og:title", content: "About — Åke Elden" },
      {
        property: "og:description",
        content:
          "Learn about Åke Elden's background as a Norwegian behavioral scientist, his education at NTNU, and his career across healthcare and life sciences.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <header className="mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          About
        </p>
        <h1 className="font-display text-4xl text-foreground md:text-5xl">Åke Elden</h1>
      </header>

      <article className="prose-editorial text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Åke Elden (born 1969) is a Norwegian behavioral scientist from Namsos. His work sits at
          the intersection of clinical research, pharmaceutical innovation, and the systems that shape
          how people make decisions under uncertainty.
        </p>

        <h2>Education</h2>
        <p>
          Elden completed his training as a behavioral scientist at the Norwegian University of
          Science and Technology (NTNU) in 1995, studying deductive mental models under Professor
          Ivar Bjørgen, founder of the Institute of Psychology in Trondheim. His academic foundation
          in cognition and decision-making continues to inform his applied work today.
        </p>

        <h2>Career</h2>
        <p>
          For more than two decades, Åke has worked with global healthcare and life sciences
          organizations including Pfizer, Abbott, AbbVie, UCB, Novartis, Biogen, PPD, ICON, and
          Syneos Health. These are environments where scientific knowledge, regulatory frameworks,
          operational constraints, and human judgment must align — often under pressure and with
          incomplete information.
        </p>

        <h2>Systems for complex decisions</h2>
        <p>
          Åke designs systems for complex human decision environments. His focus spans digital
          learning, institutional design, and the emerging role of artificial intelligence in
          healthcare — always with an eye toward how formal structures influence real behavior.
        </p>

        <h2>Other roles</h2>
        <p>
          Beyond his scientific and consulting work, Elden holds several governance and leadership
          roles in Norwegian organizations, reflecting a long-standing interest in how institutions
          are built and sustained.
        </p>
      </article>
    </div>
  );
}

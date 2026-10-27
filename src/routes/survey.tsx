import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const TARGET = "/survey.html";

export const Route = createFileRoute("/survey")({
  head: () => ({
    meta: [
      { title: "Being Seen in the Age of AI — Åke Elden" },
      { name: "description", content: "Åke Elden’s questionnaire on being seen in the age of AI." },
      { property: "og:title", content: "Being Seen in the Age of AI — Åke Elden" },
      { property: "og:description", content: "Åke Elden’s questionnaire on being seen in the age of AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    scripts: [{ children: `window.location.replace("${TARGET}");` }],
  }),
  component: SurveyRedirect,
});

function SurveyRedirect() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <p className="text-sm text-muted-foreground">
        Opening the survey…{" "}
        <a className="underline" href={TARGET}>
          Continue
        </a>
      </p>
    </main>
  );
}

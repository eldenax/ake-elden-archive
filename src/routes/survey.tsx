import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const TARGET = "/survey.html";

export const Route = createFileRoute("/survey")({
  head: () => ({
    meta: [
      { title: "Survey" },
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

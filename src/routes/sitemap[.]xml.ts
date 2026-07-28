import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CONCEPTS } from "../data/concepts";

const BASE_URL = "https://ake-elden-archive.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { THEMES } = await import("../data/themes");
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/research", changefreq: "monthly", priority: "0.9" },
          { path: "/themes", changefreq: "monthly", priority: "0.9" },
          { path: "/concepts", changefreq: "monthly", priority: "0.8" },
          { path: "/concept-graph", changefreq: "monthly", priority: "0.7" },
          { path: "/publications", changefreq: "monthly", priority: "0.8" },
          { path: "/current-research", changefreq: "weekly", priority: "0.8" },
          { path: "/projects", changefreq: "monthly", priority: "0.7" },
          { path: "/academic-profile", changefreq: "monthly", priority: "0.7" },
          { path: "/news", changefreq: "weekly", priority: "0.7" },
          { path: "/cv", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...THEMES.map((t) => ({
            path: `/themes/${t.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...CONCEPTS.map((c) => ({
            path: `/concepts/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

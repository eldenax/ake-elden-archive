import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://ake-elden-archive.lovable.app";
const SITE_TITLE = "Dr. Åke Elden — Philosophy & Theology of Artificial Intelligence";
const SITE_DESCRIPTION =
  "Dr. Åke Elden is a researcher at NLA University College investigating the philosophical and theological conditions of human judgment, responsibility, and formation in the age of AI.";

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Åke Elden",
  honorificPrefix: "Dr.",
  jobTitle: "Research Advisor",
  description:
    "Researcher in artificial intelligence, philosophy of technology, and theological anthropology.",
  url: SITE_URL,
  identifier: "https://orcid.org/0009-0003-0965-7666",
  sameAs: [
    "https://orcid.org/0009-0003-0965-7666",
    "https://philpeople.org/profiles/aake-elden",
    "https://philpapers.org/s/Aake%20Elden",
    "https://nva.sikt.no/research-profile/57416",
  ],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "NLA University College",
    url: "https://www.nla.no/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oslo",
      addressCountry: "NO",
    },
  },
  knowsAbout: [
    "Philosophy of Artificial Intelligence",
    "Philosophy of Technology",
    "Theological Anthropology",
    "Ethics",
    "Epistemology",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_TITLE,
  url: SITE_URL,
  inLanguage: "en",
  author: { "@type": "Person", name: "Åke Elden" },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Åke Elden" },
      { property: "og:site_name", content: "Dr. Åke Elden" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Libre+Baskerville:wght@400;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PERSON_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Programme" },
  { to: "/themes", label: "Themes" },
  { to: "/concepts", label: "Concepts" },
  { to: "/concept-graph", label: "Concept Graph" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
  { to: "/academic-profile", label: "Profile" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 lg:px-8">
        <Link to="/" className="shrink-0 font-display text-base tracking-tight text-foreground">
          Dr. Åke Elden
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-xs md:text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "font-semibold text-foreground" }}
              activeOptions={{ exact: true }}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Affiliation & contact */}
          <div className="space-y-4">
            <div>
              <p className="font-display text-sm text-foreground">Dr. Åke Elden</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Research Advisor · NLA University College · Oslo, Norway
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:akeeld@nla.no"
                className="underline decoration-dotted underline-offset-4 hover:text-foreground"
              >
                akeeld@nla.no
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              ORCID:{" "}
              <a
                href="https://orcid.org/0009-0003-0965-7666"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 hover:text-foreground"
              >
                0009-0003-0965-7666
              </a>
            </p>
          </div>

          {/* Scholarly profiles */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Scholarly profiles
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a
                  href="https://scholar.google.com/citations?user="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="https://philpapers.org/s/Aake%20Elden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  PhilPapers
                </a>
              </li>
              <li>
                <a
                  href="https://philpeople.org/profiles/aake-elden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  PhilPeople
                </a>
              </li>
              <li>
                <a
                  href="https://nva.sikt.no/research-profile/57416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  NVA Filter — Nasjonalt vitenarkiv
                </a>
              </li>
            </ul>
          </div>

          {/* Professional */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Professional
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  to="/cv"
                  className="text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  Download CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Copyright & last updated */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Site
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Åke Elden
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

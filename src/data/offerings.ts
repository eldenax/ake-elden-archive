/**
 * Paid offerings: the Research Letter, digital resources, and engagements.
 *
 * Payments run through Stripe Payment Links, so no server code or secret key
 * lives in this repository. To switch an item on:
 *   1. Create the product in the Stripe dashboard (Product catalogue → Add product).
 *   2. Create a Payment Link for it (recurring price for subscriptions).
 *   3. For digital resources, set the link's "After payment" option to redirect
 *      to the download, or deliver the file by email from Stripe.
 *   4. Paste the link (https://buy.stripe.com/...) into `paymentLink` below.
 *
 * An item without a `paymentLink` never shows a buy button: resources stay
 * hidden, the paid letter tier is hidden, and engagements fall back to an
 * email enquiry, so the live site never offers something that cannot be bought.
 */

export const OFFERINGS_EMAIL = "akeeld@nla.no";

export type LetterTier = {
  name: string;
  price: string;
  description: string;
  includes: string[];
  /** Free tier: sign-up page (Substack, Buttondown, …). Paid tier: Stripe Payment Link. */
  link: string;
};

export const LETTER = {
  name: "The Research Letter",
  summary:
    "A short letter from the research desk: what I am working on, a concept worked through in plain prose, and the readings that shaped it.",
  free: {
    name: "Reader",
    price: "Free",
    description: "Monthly letter with research news and one worked concept.",
    includes: ["Monthly letter", "New publications and preprints", "Selected readings"],
    link: "",
  } satisfies LetterTier,
  paid: {
    name: "Supporter",
    price: "NOK 75 / month",
    description:
      "Weekly letter with working notes, draft arguments, and annotated reading lists. Supports independent research.",
    includes: [
      "Everything in Reader",
      "Weekly working notes",
      "Annotated reading list per theme",
      "Early access to drafts and preprints",
    ],
    link: "",
  } satisfies LetterTier,
};

export type Resource = {
  slug: string;
  title: string;
  kind: "Reading guide" | "Teaching module" | "Template";
  price: string;
  description: string;
  paymentLink: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: "ai-and-answerability-reading-guide",
    title: "AI and Answerability: A Reading Guide",
    kind: "Reading guide",
    price: "NOK 149",
    description:
      "Annotated route through the literature on responsibility, epistemic agency, and AI-mediated judgment, with discussion questions.",
    paymentLink: "",
  },
  {
    slug: "seminar-module-technology-and-judgment",
    title: "Seminar Module: Technology and Judgment",
    kind: "Teaching module",
    price: "NOK 390",
    description:
      "Four ready-to-teach sessions with readings, slides outline, and seminar prompts for university courses.",
    paymentLink: "",
  },
  {
    slug: "research-ethics-ai-use-template",
    title: "AI-Use Disclosure Template for Research",
    kind: "Template",
    price: "NOK 99",
    description:
      "A disclosure and provenance template for documenting AI assistance in theses, articles, and grant applications.",
    paymentLink: "",
  },
];

export type Engagement = {
  slug: string;
  title: string;
  format: string;
  price: string;
  description: string;
  /** Stripe Payment Link for a fixed-price booking; empty means "enquire by email". */
  paymentLink: string;
};

export const ENGAGEMENTS: Engagement[] = [
  {
    slug: "invited-lecture",
    title: "Invited lecture or keynote",
    format: "45–60 minutes, on site or online",
    price: "By agreement",
    description:
      "Lectures on AI and human judgment, responsibility in technological systems, and theological anthropology for universities, schools, churches, and professional bodies.",
    paymentLink: "",
  },
  {
    slug: "research-consultation",
    title: "Research consultation",
    format: "60 minutes, online",
    price: "NOK 1 200",
    description:
      "One-to-one conversation on a thesis, article, or grant application: argument structure, literature, and method.",
    paymentLink: "",
  },
  {
    slug: "workshop",
    title: "Workshop on AI use in research and teaching",
    format: "Half day, on site or online",
    price: "By agreement",
    description:
      "Practical workshop for departments and teams on responsible AI use, disclosure, and provenance in academic work.",
    paymentLink: "",
  },
];

export function enquiryHref(subject: string): string {
  return `mailto:${OFFERINGS_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/**
 * SEO configuration. Used only at build time (metadata, sitemap, robots,
 * structured data), so it can read server-side environment variables.
 */
import { EDUCATION, LINKS, PROJECTS } from "./site";

/**
 * The site's public address, used for canonical URLs, the sitemap and social
 * previews. Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL, if you set it (e.g. "https://sachinsharma.dev")
 *   2. On Vercel, the production domain (picks up a custom domain automatically)
 *   3. https://himalayansailor.vercel.app
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "https://himalayansailor.vercel.app"
).replace(/\/$/, "");

export const SEO = {
  title: "Sachin Sharma — Full-Stack AI Engineer | AI Agents, RAG & LLM Infrastructure",
  shortTitle: "Sachin Sharma — Full-Stack AI Engineer",
  description:
    "Full-stack AI engineer with 11 years in software and ML. Co-founder of AskCodi and MakersClaw. I build AI agents, RAG systems and LLM infrastructure, from system design to production on Kubernetes. Open to new roles.",
  keywords: [
    "Sachin Sharma",
    "Full-Stack AI Engineer",
    "AI Engineer",
    "Senior AI Engineer",
    "LLM Engineer",
    "Machine Learning Engineer",
    "AI agents",
    "Multi-agent systems",
    "Agentic AI",
    "RAG",
    "Retrieval-augmented generation",
    "LLM infrastructure",
    "LangGraph",
    "LangChain",
    "MCP",
    "Model Context Protocol",
    "FastAPI",
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "Kubernetes",
    "GKE",
    "PostgreSQL",
    "Vector databases",
    "Milvus",
    "Document AI",
    "OCR",
    "Computer vision",
    "PyTorch",
    "AskCodi",
    "MakersClaw",
    "Papersafe",
    "AI startup co-founder",
    "Hire AI engineer",
  ],
};

/** schema.org Person — helps search engines show a rich result for your name. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sachin Sharma",
    alternateName: "himalyansailor",
    url: SITE_URL,
    jobTitle: "Full-Stack AI Engineer",
    description: SEO.description,
    sameAs: [LINKS.linkedin, LINKS.github, LINKS.instagram],
    knowsAbout: [
      "Artificial intelligence",
      "AI agents",
      "Multi-agent orchestration",
      "Retrieval-augmented generation",
      "LLM infrastructure",
      "Machine learning",
      "Computer vision",
      "Python",
      "TypeScript",
      "FastAPI",
      "Next.js",
      "Kubernetes",
    ],
    alumniOf: EDUCATION.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    // Current companies (co-founder roles still running).
    worksFor: PROJECTS.filter((p) => p.period.endsWith("now")).map((p) => ({
      "@type": "Organization",
      name: p.title,
      url: p.href,
    })),
  };
}

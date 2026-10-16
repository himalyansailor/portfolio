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
  title: "Sachin Sharma — AI Solutions Architect & CTO | AI Agents, LLM Infrastructure & RAG",
  shortTitle: "Sachin Sharma — AI Solutions Architect & CTO",
  description:
    "AI solutions architect and CTO with 11 years in software and ML. CTO at AskCodi and MakersClaw; led Papersafe through acquisition. I architect AI agents, RAG and LLM infrastructure and lead the teams that ship them. Open to lead and leadership roles.",
  keywords: [
    "Sachin Sharma",
    "AI Solutions Architect",
    "Solutions Architect",
    "AI Architect",
    "CTO",
    "Chief Technology Officer",
    "Head of AI",
    "Head of Engineering",
    "Engineering Manager",
    "AI Engineering Lead",
    "Technical Lead",
    "Technical leadership",
    "Full-Stack AI Engineer",
    "AI Engineer",
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
    "Pose estimation",
    "Model training",
    "Data collection and annotation",
    "Model evaluation",
    "Applied ML research",
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
    jobTitle: "AI Solutions Architect & CTO",
    description: SEO.description,
    sameAs: [LINKS.linkedin, LINKS.github, LINKS.instagram],
    knowsAbout: [
      "AI solutions architecture",
      "Technical leadership",
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

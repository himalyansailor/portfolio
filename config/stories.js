/**
 * Recruiter-facing content: availability, highlights, case studies,
 * principles, leadership, open-source projects and "now".
 * Facts come from the resume and public GitHub repos; edit freely.
 */

export const AVAILABILITY = {
  open: true,
  label: "Open to AI architect, Head of AI and CTO roles",
  note: "Available now",
};

/** At-a-glance numbers for a 10-second scan. */
export const HIGHLIGHTS = [
  { value: "11+", label: "years in software & ML", color: "#ffb7d5" },
  { value: "3×", label: "CTO of AI companies", color: "#c8b6ff" },
  { value: "450K+", label: "accounts on a platform I scaled", color: "#b9f2df" },
  { value: "1", label: "acquisition (Papersafe, 2026)", color: "#ffd98e" },
  { value: "#3", label: "Product of the Day on Product Hunt", color: "#a9ddff" },
];

/**
 * Architecture case studies. Each stage is a column in the interactive
 * diagram; clicking a node shows its detail.
 */
export const CASE_STUDIES = [
  {
    id: "askcodi",
    company: "AskCodi",
    title: "One endpoint for every model",
    role: "CTO",
    href: "https://askcodi.com",
    color: "#ffb7d5",
    problem:
      "AskCodi’s products, from AI pair programming to agent orchestration, all needed many model providers at once, with streaming responses, predictable costs and protection against abuse, while scaling to hundreds of thousands of accounts.",
    stages: [
      {
        label: "Clients",
        nodes: [
          { id: "apps", name: "AskCodi apps", detail: "The AI pair programmer, the LangGraph web IDE with Neo4j-backed agents, and long-running agent workflows all call the same gateway." },
          { id: "api", name: "API customers", detail: "External developers use the OpenAI-compatible API platform, so existing OpenAI SDKs and tools work by changing only the base URL." },
        ],
      },
      {
        label: "Gateway (FastAPI)",
        nodes: [
          { id: "endpoint", name: "OpenAI-compatible endpoint", detail: "One request and response format for every provider. Clients integrate once; adding or swapping a provider happens behind the gateway." },
          { id: "limits", name: "Rate limiting", detail: "Rate limiting protects upstream provider quotas and keeps one heavy user from degrading everyone else." },
          { id: "budget", name: "Token budgeting", detail: "Token budgeting caps how much each request can spend, so cost stays predictable as usage grows." },
          { id: "cache", name: "Redis cache", detail: "Repeated requests are served from Redis, cutting latency and provider cost." },
        ],
      },
      {
        label: "Providers",
        nodes: [
          { id: "router", name: "Provider router", detail: "Routes each request to OpenAI, Anthropic, Gemini, xAI or Fireworks and streams the response back to the client over SSE." },
        ],
      },
      {
        label: "Run & observe",
        nodes: [
          { id: "infra", name: "AWS + PostgreSQL", detail: "Horizontal pod scaling, persistent volumes, ingress and backend configuration on AWS, with PostgreSQL." },
          { id: "obs", name: "Evals & observability", detail: "Deterministic agent evaluations catch regressions before release; OpenTelemetry, PostHog and Sentry show what happens in production." },
        ],
      },
    ],
    decisions: [
      "Standardise on the OpenAI wire format, so every client and SDK integrates once and providers become a backend choice.",
      "Treat cost as a first-class constraint: token budgets and caching sit in the request path, not in a monthly report.",
      "Gate agent changes on deterministic evals, because LLM features regress silently without them.",
    ],
    outcomes: ["450K+ registered accounts", "90K+ workspaces", "$250K in a two-month launch", "4 product pivots"],
  },
  {
    id: "makersclaw",
    company: "MakersClaw",
    title: "Isolated agent runtimes, self-served",
    role: "CTO & co-founder",
    href: "https://makersclaw.com",
    color: "#c8b6ff",
    problem:
      "Customers wanted to run their own AI agents without managing infrastructure, which meant isolating every tenant, giving agents durable storage, and charging fairly for the work agents actually do.",
    stages: [
      {
        label: "Customer",
        nodes: [
          { id: "console", name: "Self-service console", detail: "Customers provision and manage their own agent runtime without talking to anyone." },
        ],
      },
      {
        label: "Platform (GKE)",
        nodes: [
          { id: "pods", name: "Isolated Claw pods", detail: "Each customer gets an isolated runtime pod on Google Kubernetes Engine, so one tenant’s agents can’t affect another’s." },
          { id: "storage", name: "Expandable storage", detail: "Persistent volumes that grow with the customer, so agents keep their files and state between runs." },
          { id: "metering", name: "Per-tool-call metering", detail: "Prepaid usage metered per tool call, so customers pay for what their agents actually do." },
        ],
      },
      {
        label: "Agents",
        nodes: [
          { id: "planner", name: "Central planner", detail: "The platform was redesigned into a goal-driven multi-agent system, with centralised planning coordinating the agents." },
          { id: "memory", name: "Shared workspace memory", detail: "Memory shared across the whole workspace and agent pool, so agents build on each other’s work instead of starting cold." },
        ],
      },
    ],
    decisions: [
      "Isolate per customer at the pod level: the strongest boundary for multi-tenant agents that run arbitrary tools.",
      "Meter per tool call rather than per seat, which matches price to what agents do.",
      "Coordinate agents through a central planner and shared memory rather than letting them talk peer to peer.",
    ],
    outcomes: ["#3 Product of the Day", "Multi-tenant on GKE", "Multi-agent redesign"],
  },
  {
    id: "papersafe",
    company: "Papersafe",
    title: "RAG that lawyers can trust",
    role: "CTO",
    color: "#b9f2df",
    problem:
      "Legal teams needed answers extracted from confidential, multilingual filings, but a wrong answer without a source is worse than no answer, and the documents could never leak.",
    stages: [
      {
        label: "Ingest",
        nodes: [
          { id: "ocr", name: "Multilingual OCR", detail: "Scanned and native PDFs in several languages are turned into text, ready for extraction." },
          { id: "extract", name: "Clause & figure extraction", detail: "Clauses and figures are pulled out as structured data rather than left in free text." },
        ],
      },
      {
        label: "Retrieve",
        nodes: [
          { id: "vectors", name: "Milvus vector database", detail: "Document chunks are embedded and indexed in Milvus for search and retrieval in production; Chroma was used only for prototyping." },
          { id: "rag", name: "Source-grounded RAG", detail: "Every extracted value is cited to the exact PDF page it came from, so a lawyer can check it in one click." },
        ],
      },
      {
        label: "Verify",
        nodes: [
          { id: "review", name: "Human review", detail: "Low-confidence results are routed to a spreadsheet-style review interface instead of being shown as fact." },
        ],
      },
      {
        label: "Share",
        nodes: [
          { id: "rooms", name: "Virtual data rooms", detail: "Document-level access control and page-level watermarking let counsel share confidential filings while preserving chain of custody." },
        ],
      },
    ],
    decisions: [
      "No answer without a citation: page-level sources are part of the output, not an add-on.",
      "Use confidence to decide who answers, the model or a person, rather than automating everything.",
      "Build security into the product (access control, watermarking), because the data is the customer’s risk.",
    ],
    outcomes: ["Acquired by a law firm, Jun 2026", "Page-level citations", "Human-in-the-loop review"],
  },
];

/** Principles, each backed by where it shows up in the work. */
export const PRINCIPLES = [
  {
    title: "Every agent needs a test suite.",
    body: "LLM features regress quietly. I gate releases on deterministic evals and regression suites.",
    proof: "AskCodi agent evals · rag-sentinel-eval CI gate",
    color: "#ffb7d5",
  },
  {
    title: "Retrieval must cite its sources.",
    body: "If a user can’t check an answer, they can’t trust it. Citations belong in the output.",
    proof: "Papersafe page-level citations",
    color: "#c8b6ff",
  },
  {
    title: "Don’t marry one model provider.",
    body: "Models change monthly. Put them behind one interface, and switching becomes a config change.",
    proof: "AskCodi multi-provider gateway",
    color: "#b9f2df",
  },
  {
    title: "Confidence decides who answers.",
    body: "When the model isn’t sure, route to a person. Automation where it’s safe, people where it isn’t.",
    proof: "Papersafe human review",
    color: "#ffd98e",
  },
  {
    title: "Cost is an architecture decision.",
    body: "Token budgets, caching and usage metering belong in the design, not in a finance review.",
    proof: "AskCodi budgets & cache · MakersClaw metering",
    color: "#a9ddff",
  },
  {
    title: "Observability isn’t phase two.",
    body: "Tracing, error tracking and product analytics ship with the system, so production is never a guess.",
    proof: "OpenTelemetry · Sentry · PostHog",
    color: "#f4b8ff",
  },
];

/** How I lead — drawn from the roles on the resume. */
export const LEADERSHIP = [
  {
    title: "Architect, then stay hands-on",
    body: "As CTO I set the architecture and still build core systems myself, like AskCodi’s AI gateway, so my technical calls are grounded in the code.",
  },
  {
    title: "Own the outcome end to end",
    body: "From client requirements and system design to deployment and observability, through four product pivots and one acquisition.",
  },
  {
    title: "Translate between business and engineering",
    body: "I’ve run daily stakeholder meetings on site at a national bank and turned client discussions into production systems at my own companies.",
  },
  {
    title: "Grow the people around me",
    body: "I mentor junior engineers and interns, and I like teams where people own real parts of the system.",
  },
];

/** Original public repos on GitHub (forks excluded). */
export const OPEN_SOURCE = [
  {
    name: "rag-sentinel-eval",
    href: "https://github.com/himalyansailor/rag-sentinel-eval",
    language: "Python",
    color: "#b9f2df",
    summary:
      "A CI quality gate for RAG pipelines. It runs known questions through retrieval and generation, has a local open-source LLM grade faithfulness, relevance, precision and recall, and fails the build when faithfulness drops below 0.85.",
    tags: ["RAG evaluation", "CI", "Ollama / vLLM", "LangChain"],
  },
  {
    name: "Docket",
    href: "https://github.com/himalyansailor/docket",
    language: "Swift",
    color: "#c8b6ff",
    summary:
      "A macOS dock companion that shows Claude, Codex, Gemini and Perplexity usage at a glance, plus tasks, a focus timer and clipboard history. Signed, notarised and installable with Homebrew.",
    tags: ["macOS", "Swift", "Homebrew cask"],
  },
  {
    name: "n8n-nodes-askcodi",
    href: "https://github.com/himalyansailor/n8n-nodes-askcodi",
    language: "TypeScript",
    color: "#ffb7d5",
    summary: "An n8n community node for the AskCodi API, bringing its OpenAI-compatible chat completions into n8n workflows, with a ready-made chat workflow template.",
    tags: ["n8n", "Integrations", "OpenAI-compatible"],
  },
  {
    name: "calorie-tracker",
    href: "https://github.com/himalyansailor/calorie-tracker",
    language: "JavaScript",
    color: "#ffd98e",
    summary: "A Next.js app that estimates calories with the AskCodi API from a food, quantity and unit, with daily goal tracking.",
    tags: ["Next.js", "shadcn/ui", "AskCodi API"],
  },
];

/** What I'm doing now. Update this every month or two. */
export const NOW = {
  updated: "October 2026",
  items: [
    "Running engineering as CTO at AskCodi and MakersClaw.",
    "Building rag-sentinel-eval, a CI gate that grades RAG pipelines with a local LLM.",
    "Shipped Docket, a macOS app for keeping AI subscription limits in view.",
    "Looking for my next AI architect, Head of AI or CTO role.",
  ],
};

/** Site configuration and content — edit values here. */

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/himalayansailor",
  github: "https://github.com/himalyansailor",
  instagram: "https://www.instagram.com/himalayansailor",
};

/**
 * Where every contact action points: header "Let's talk ↗", the Contact Me
 * and Enter keys, the dialog button, and the contact section.
 */
export const CONTACT_URL = LINKS.linkedin;

/** First day of professional experience (YYYY-MM-DD); the live clock counts from here. */
export const EXPERIENCE_START = "2015-06-01";

export const PROFILE = {
  name: "Sachin Sharma",
  role: "Full-Stack AI Engineer",
  intro:
    "The last six years have gone into building and running AI products end to end: system design, agents, retrieval, and deployment on Kubernetes and Vercel.",
};

export const MARQUEE_MESSAGE =
  "Agents. Retrieval. LLM infrastructure. . Software and ML since 2015, shipped end to end. . Pick a key.";

/** Selected work, from the resume. `href` is optional. */
export const PROJECTS = [
  {
    title: "AskCodi",
    role: "Co-founder",
    period: "2022 – now",
    href: "https://askcodi.com",
    color: "#ffb7d5",
    summary:
      "An AI coding platform that went through four major product pivots: AI pair programming, a LangChain/LangGraph web IDE with Neo4j-backed agents, an OpenAI-compatible API platform, and long-running agent orchestration.",
    highlights: [
      "450K+ registered accounts and 90K+ workspaces",
      "$250K gross in a two-month AppSumo launch, then recurring subscriptions",
      "FastAPI gateway over OpenAI, Anthropic, Gemini, xAI and Fireworks behind one OpenAI-compatible endpoint, with SSE streaming, token budgets, Redis caching and rate limiting",
      "GKE and PostgreSQL with autoscaling; OpenTelemetry, PostHog, Sentry and deterministic agent evals",
    ],
    stack: ["FastAPI", "LangGraph", "Neo4j", "GKE", "PostgreSQL", "Redis", "Next.js", "Electron"],
  },
  {
    title: "MakersClaw",
    role: "Co-founder",
    period: "2025 – now",
    href: "https://makersclaw.com",
    color: "#c8b6ff",
    summary:
      "A self-service platform on Google Kubernetes Engine where customers provision isolated Claw runtime pods, redesigned into a goal-driven multi-agent system with centralised planning.",
    highlights: [
      "#3 Product of the Day on Product Hunt",
      "Isolated runtime pods with expandable persistent storage and prepaid, per-tool-call metering",
      "VM-status-aware automation: stop after 30 minutes idle, restart on demand, no more 10-minute wake cycles",
    ],
    stack: ["TypeScript", "React 19", "MCP SDK", "Vercel AI SDK", "Composio", "Supabase", "GKE"],
  },
  {
    title: "Papersafe",
    role: "Co-founder",
    period: "2025 – 2026",
    note: "Acquired by a law firm, Jun 2026",
    color: "#b9f2df",
    summary:
      "A document intelligence platform for legal teams: multilingual OCR, clause and figure extraction, and retrieval over filings.",
    highlights: [
      "Source-grounded RAG that cites the exact PDF page for every extracted value",
      "Low-confidence results routed to a spreadsheet-style human review interface",
      "Document-level access control and page-level watermarking for virtual data rooms",
    ],
    stack: ["Python", "FastAPI", "Milvus", "PostgreSQL", "Next.js", "Nutrient"],
  },
  {
    title: "Multi-ball golf tracking",
    role: "Co-founder, Bhansali Sharma GbR",
    period: "2021 – 2022",
    color: "#ffd98e",
    summary:
      "An AI system that tracks several golf balls at once, taken from client requirements through data collection, training and deployment.",
    highlights: [
      "Computer-vision corpus of 50,000+ images built from hundreds of videos",
      "Pruned ResNet models: about 94% accuracy indoors and 90% outdoors",
      "Optimised for CPU inference on client servers",
    ],
    stack: ["PyTorch", "ResNet", "Computer vision"],
  },
];

export const EXPERIENCE = [
  {
    role: "Co-founder",
    company: "AskCodi",
    href: "https://askcodi.com",
    period: "Apr 2022 – now",
    points: [
      "Lead product strategy and technical execution across four product pivots.",
      "Built and run the multi-provider AI gateway and the GKE platform behind it.",
    ],
  },
  {
    role: "Co-founder",
    company: "MakersClaw",
    href: "https://makersclaw.com",
    period: "Apr 2025 – now",
    points: [
      "Lead product and engineering; designed the self-service deployment platform on GKE.",
      "Led the redesign into a goal-driven multi-agent system.",
    ],
  },
  {
    role: "Co-founder",
    company: "Papersafe",
    period: "Nov 2025 – Jun 2026",
    points: ["Designed and built the document intelligence platform end to end, through to acquisition."],
  },
  {
    role: "Co-founder",
    company: "Bhansali Sharma GbR",
    period: "Apr 2021 – Apr 2022",
    points: ["Delivered an AI multi-ball tracking system for golf, from research to deployment."],
  },
  {
    role: "Working Student",
    company: "Viewlicity GmbH (PuttView)",
    href: "https://www.puttview.com/",
    period: "Aug 2019 – Mar 2021",
    points: [
      "Owned backend development for PuttView and green book products (Unity, C#, SQL Server, Node.js).",
      "Automated camera calibration, cutting processing time from two days to 15 minutes.",
      "Designed an LSTM-CNN model for time-series pose estimation.",
    ],
  },
  {
    role: "Working Student",
    company: "Basler AG",
    href: "https://www.baslerweb.com/en/",
    period: "Jun 2018 – Aug 2019",
    points: [
      "Built a Python validation framework for GigE machine-vision cameras, scaled to a test farm with hundreds of test cases.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nucleus Software Exports",
    href: "https://www.nucleussoftware.com/",
    period: "Jun 2015 – Aug 2017",
    points: [
      "Engineered web and mobility modules for the FinnOne lending platform (Java, Spring, Oracle SQL).",
      "Delivered on site at State Bank of India headquarters, taking two mobile apps from pilot to production.",
    ],
  },
];

export const SKILLS = [
  { group: "Agentic AI", color: "#ffb7d5", items: ["AI agents", "LangGraph", "LangChain", "CrewAI", "MCP", "Multi-agent orchestration"] },
  { group: "Retrieval & Document AI", color: "#c8b6ff", items: ["Milvus", "Chroma", "Neo4j", "Page-level citations", "Multilingual OCR", "Clause extraction"] },
  { group: "Evaluation & leadership", color: "#b9f2df", items: ["Agent evals", "Regression suites", "Confidence scoring", "Human-in-the-loop", "Multi-provider architecture"] },
  { group: "Machine learning", color: "#ffd98e", items: ["PyTorch", "TensorFlow", "Transformers", "CNN", "LSTM"] },
  { group: "Backend", color: "#a9ddff", items: ["Python", "FastAPI", "Flask", "Node.js", "SSE streaming"] },
  { group: "Frontend & apps", color: "#f4b8ff", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Electron", "Unity"] },
  { group: "Data", color: "#ffc3a0", items: ["PostgreSQL", "Supabase", "Redis", "MongoDB", "Firestore", "SQL Server", "Oracle"] },
  { group: "Cloud & DevOps", color: "#c6d7ff", items: ["Kubernetes / GKE", "AWS", "Docker", "Vercel", "CI/CD", "OpenTelemetry"] },
];

export const RESEARCH = [
  {
    title: "Virtual or Physical? Social Robots Teaching a Fictional Language Through a Role-Playing Game Inspired by Game of Thrones",
    note: "Published paper",
    href: "https://www.researchgate.net/publication/337418392_Virtual_or_Physical_Social_Robots_Teaching_a_Fictional_Language_Through_a_Role-Playing_Game_Inspired_by_Game_of_Thrones",
  },
  { title: "2D Human Pose Estimation with Propagating LSTM Feature Boosting", note: "MSc thesis" },
  { title: "Robotic Multimodal Object Recognition", note: "Recognition across modalities by weighting and squeezing, on LSTM and CNN" },
  { title: "Automated Spell Checking", note: "Context-aware correction combining Norvig’s approach with a hidden Markov model" },
];

export const EDUCATION = [
  { degree: "MSc, Intelligent Adaptive Systems (AI)", school: "Universität Hamburg", year: "2021" },
  { degree: "B.Tech, Electronics & Communication Engineering", school: "NIT Hamirpur", year: "2015" },
];

/** Dialog copy, keyed by dialog id. */
export const DIALOGS = {
  about: {
    title: "About Me",
    paragraphs: [
      "I’m Sachin Sharma, a full-stack AI engineer. I started on enterprise lending software for banks, did my MSc in AI, and since 2021 I’ve co-founded and built AI products: AskCodi, MakersClaw and Papersafe.",
      "My work runs the whole stack: system design, agents and retrieval, the API and infrastructure underneath, and the logging, tracing and evaluations that keep it honest in production. I’ve also mentored freshers and interns along the way.",
    ],
    facts: ["From the Himalayas, hence @himalayansailor", "MSc AI, Universität Hamburg"],
  },
  process: {
    title: "How I Work",
    paragraphs: [
      "I own things end to end: from system design through development to deployment and the observability that follows it.",
      "For AI products that means agents with deterministic evaluations, retrieval that cites its sources, low-confidence results routed to people, and infrastructure that scales up and down with real usage.",
    ],
  },
};

/**
 * Keyboard keys in reading order. Coordinates use the unscaled
 * 900 × 312 composition. Each key does one of:
 *   dialog: open a dialog · href: go to a section or page (external opens a new tab)
 */
export const KEYS = [
  { id: "p", letter: "P", caption: "Selected Work", face: "#ffb7d5", base: "#d94f8a", x: 73, y: 0, href: "#work" },
  { id: "o1", letter: "O", caption: "About Me", face: "#c8b6ff", base: "#7153c7", x: 219, y: 0, dialog: "about" },
  { id: "r", letter: "R", caption: "Experience", face: "#b9f2df", base: "#2caa85", x: 365, y: 0, href: "#experience" },
  { id: "t", letter: "T", caption: "Tech Stack", face: "#ffd98e", base: "#d28a24", x: 511, y: 0, href: "#skills" },
  { id: "f", letter: "F", caption: "Research", face: "#a9ddff", base: "#3886c9", x: 0, y: 139, href: "#research" },
  { id: "o2", letter: "O", caption: "How I Work", face: "#f4b8ff", base: "#a34cbf", x: 146, y: 139, dialog: "process" },
  { id: "l", letter: "L", caption: "Education", face: "#ffc3a0", base: "#d96c44", x: 292, y: 139, href: "#education" },
  { id: "i", letter: "I", caption: "GitHub", face: "#c6d7ff", base: "#5a78c9", x: 438, y: 139, href: LINKS.github, external: true },
  { id: "o3", letter: "O", caption: "Contact Me", face: "#d9f28f", base: "#7aa52d", x: 584, y: 139, href: CONTACT_URL, external: true },
  { id: "enter", letter: "↵", caption: "Let’s Talk", face: "#ffe446", base: "#eab800", x: 657, y: 0, w: 218, h: 300, href: CONTACT_URL, external: true, enter: true },
];

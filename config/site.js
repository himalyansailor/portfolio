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

/** One-page résumé, generated from /resume (see README). */
export const RESUME_PDF = "/Sachin-Sharma-Resume.pdf";

/** First day of professional experience (YYYY-MM-DD); the live clock counts from here. */
export const EXPERIENCE_START = "2015-06-01";

export const PROFILE = {
  name: "Sachin Sharma",
  role: "AI Solutions Architect & CTO",
  intro:
    "CTO at AskCodi and MakersClaw. I architect AI products end to end and lead the teams that ship them: system design, agents, retrieval, and production infrastructure on AWS and GKE.",
};

export const MARQUEE_MESSAGE =
  "AI solutions architecture. Agents. Retrieval. LLM infrastructure. . CTO, architect and engineer since 2015. . Pick a key.";

/** Selected work, from the resume. `href` is optional. */
export const PROJECTS = [
  {
    title: "AskCodi",
    role: "CTO & co-founder",
    period: "2022 – now",
    href: "https://askcodi.com",
    color: "#ffb7d5",
    summary:
      "An AI coding platform. I lead product strategy and technical execution, and led four major product pivots: AI pair programming, a LangChain/LangGraph web IDE with Neo4j-backed agents, an OpenAI-compatible API platform, and long-running agent orchestration.",
    highlights: [
      "Scaled to 450K+ registered accounts and 90K+ workspaces",
      "$250K gross in a two-month AppSumo launch, then moved to recurring subscriptions",
      "Architected a FastAPI gateway that puts OpenAI, Anthropic, Gemini, xAI and Fireworks behind one OpenAI-compatible endpoint, with SSE streaming, token budgets, Redis caching and rate limiting",
      "Scaled the infrastructure on AWS and PostgreSQL; reliability through deterministic agent evals, OpenTelemetry, PostHog and Sentry",
    ],
    stack: ["FastAPI", "LangGraph", "LangSmith", "Neo4j", "MCP SDK", "PostgreSQL", "MongoDB", "Redis", "AWS"],
  },
  {
    title: "MakersClaw",
    role: "CTO & co-founder",
    period: "2025 – now",
    href: "https://makersclaw.com",
    color: "#c8b6ff",
    summary:
      "A self-service platform on Google Kubernetes Engine where customers provision isolated Claw runtime pods. I lead product and engineering, and led its redesign into a goal-driven multi-agent system with centralised planning.",
    highlights: [
      "#3 Product of the Day on Product Hunt",
      "Designed the deployment platform: isolated runtime pods, expandable persistent storage, prepaid per-tool-call metering",
      "Shared memory across the whole workspace and agent pool in the orchestration architecture",
    ],
    stack: ["TypeScript", "React 19", "FastAPI", "MCP SDK", "Composio", "Redis", "Supabase", "GKE"],
  },
  {
    title: "Papersafe",
    role: "CTO & co-founder",
    period: "2025 – 2026",
    note: "Acquired by a law firm, Jun 2026",
    color: "#b9f2df",
    summary:
      "A document intelligence platform for legal teams, which I designed and built end to end through to acquisition: multilingual OCR, clause and figure extraction, and retrieval over filings.",
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
      "An AI system that tracks several golf balls at once. I led it end to end, from client requirements and research through data collection, training, testing and system integration.",
    highlights: [
      "Computer-vision corpus of 50,000+ images built from hundreds of videos",
      "Fine-tuned ResNet models: about 94% accuracy indoors and 90% outdoors",
      "Optimised for CPU inference on client servers",
    ],
    stack: ["PyTorch", "TensorFlow", "Keras", "ResNet", "C#", "Unity", "Azure"],
  },
];

export const EXPERIENCE = [
  {
    role: "CTO",
    company: "AskCodi",
    href: "https://askcodi.com",
    period: "Apr 2022 – now",
    points: [
      "Lead product strategy and technical execution; scaled the platform to 450K+ accounts and 90K+ workspaces.",
      "Led four major product pivots and architected the multi-provider AI gateway and the AWS infrastructure behind it.",
    ],
  },
  {
    role: "CTO",
    company: "MakersClaw",
    href: "https://makersclaw.com",
    period: "Apr 2025 – now",
    points: [
      "Co-founded and lead product and engineering; #3 Product of the Day on Product Hunt.",
      "Designed the self-service deployment platform on GKE and led the redesign into a goal-driven multi-agent system.",
    ],
  },
  {
    role: "CTO",
    company: "Papersafe",
    period: "Nov 2025 – Jun 2026",
    points: ["Designed and built the document intelligence platform end to end, through to its acquisition by a law firm."],
  },
  {
    role: "Co-founder",
    company: "Bhansali Sharma GbR",
    period: "Apr 2021 – Apr 2022",
    points: [
      "Led an AI multi-ball tracking system for golf from client requirements and research to deployment, translating client discussions into production-ready solutions.",
    ],
  },
  {
    role: "Working Student",
    company: "Viewlicity GmbH (PuttView)",
    href: "https://www.puttview.com/",
    period: "Aug 2019 – Mar 2021",
    points: [
      "Owned backend development for PuttView and green book products (Unity, C#, SQL Server, Node.js).",
      "Led the automation of camera calibration, cutting processing time from two days to 15 minutes.",
      "Designed an LSTM-CNN model for time-series pose estimation.",
    ],
  },
  {
    role: "Working Student",
    company: "Basler AG",
    href: "https://www.baslerweb.com/en/",
    period: "Jun 2018 – Aug 2019",
    points: [
      "Built a Python validation framework for GigE machine-vision cameras and moved testing onto a test farm in a CI/CD pipeline.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nucleus Software Exports",
    href: "https://www.nucleussoftware.com/",
    period: "Jun 2015 – Aug 2017",
    points: [
      "Engineered cloud-based web and mobile modules for the FinnOne enterprise lending platform (Java, Spring Boot, Oracle SQL).",
      "Owned on-site solution delivery and pilot support at State Bank of India headquarters, working with stakeholders to take both mobile apps from pilot to production.",
    ],
  },
];

export const SKILLS = [
  { group: "Leadership & architecture", color: "#ffb7d5", items: ["Technical leadership", "Solutions architecture", "Multi-provider AI architecture", "Product strategy", "Client & stakeholder delivery", "Mentoring engineers"] },
  { group: "Agentic AI", color: "#c8b6ff", items: ["AI agents", "LangGraph", "LangChain", "CrewAI", "MCP", "Multi-agent orchestration"] },
  { group: "Retrieval & Document AI", color: "#b9f2df", items: ["Milvus", "Chroma", "Neo4j", "Page-level citations", "Multilingual OCR", "Clause extraction"] },
  { group: "Evaluation & reliability", color: "#ffd98e", items: ["Agent evals", "Regression suites", "Confidence scoring", "Human-in-the-loop", "LangSmith", "OpenTelemetry"] },
  { group: "Machine learning", color: "#a9ddff", items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "CNN", "LSTM", "OpenCV"] },
  { group: "Full-stack", color: "#f4b8ff", items: ["Python", "FastAPI", "Node.js", "TypeScript", "React", "Next.js", "SSE streaming", "Electron"] },
  { group: "Data", color: "#ffc3a0", items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Firestore", "SQL Server", "Oracle"] },
  { group: "Cloud & DevOps", color: "#c6d7ff", items: ["AWS", "Kubernetes / GKE", "Azure", "Docker", "Vercel", "CI/CD"] },
];

/**
 * Applied ML research, as a pipeline from raw data to deployed models.
 * Everything here comes from the resume (Bhansali Sharma GbR, Viewlicity /
 * PuttView, Basler, MSc thesis, and current LLM evaluation work).
 */
export const ML_PIPELINE = [
  {
    step: "01",
    title: "Data collection",
    color: "#a9ddff",
    points: [
      "Built a 50,000+ image computer-vision corpus from hundreds of 5–10 minute videos: noise removal, clip segmentation, frame sampling and augmentation.",
      "Collected and prepared golf putting motion data to benchmark pose estimation for an industrial application.",
      "Turned image and laser data into golf-green contour and slope data used by professional golfers.",
    ],
  },
  {
    step: "02",
    title: "Model training",
    color: "#c8b6ff",
    points: [
      "Designed an LSTM-CNN model for time-series pose estimation that captures directional continuity across movements.",
      "Optimised ResNet-based tracking models with architecture pruning, k-fold cross-validation and hyperparameter tuning.",
      "MSc thesis: 2D human pose estimation with propagating LSTM feature boosting.",
    ],
  },
  {
    step: "03",
    title: "Evaluation",
    color: "#b9f2df",
    points: [
      "Established a 2D pose-estimation benchmark using Percentage of Correct Keypoints (PCK).",
      "Reached about 94% indoor and 90% outdoor accuracy for multi-ball tracking.",
      "Built a ground-truth image-comparison framework for GigE machine-vision cameras, run on a test farm of hundreds of cases.",
    ],
  },
  {
    step: "04",
    title: "Deployment",
    color: "#ffd98e",
    points: [
      "Deployed optimised models to client servers for CPU-only inference.",
      "Automated camera calibration through mathematical modelling, cutting processing from two days to 15 minutes.",
      "Today the same discipline runs my LLM work: deterministic agent evals, regression suites and confidence scoring.",
    ],
  },
];

/**
 * Papers, thesis and research projects. `art` picks the illustration in
 * components/ResearchArt.jsx; `href` is optional.
 */
export const RESEARCH = [
  {
    title: "Virtual or Physical? Social Robots Teaching a Fictional Language Through a Role-Playing Game Inspired by Game of Thrones",
    kind: "Published paper · ICSR 2019",
    art: "robots",
    color: "#ffb7d5",
    description:
      "A user study comparing the NICO social robot in physical and virtual form as a language tutor. 55 participants learned five phrases of High Valyrian through a role-playing game. Enjoyment and immersion differed significantly between the two for participants new to social robots, while vocabulary retention was about the same.",
    href: "https://www.researchgate.net/publication/337418392_Virtual_or_Physical_Social_Robots_Teaching_a_Fictional_Language_Through_a_Role-Playing_Game_Inspired_by_Game_of_Thrones",
  },
  {
    title: "2D Human Pose Estimation with Propagating LSTM Feature Boosting",
    kind: "MSc thesis · Intelligent Adaptive Systems",
    art: "pose",
    color: "#c8b6ff",
    description:
      "Pose estimation over video: CNN keypoint features are propagated and boosted through an LSTM, so predictions keep directional continuity from frame to frame. It connects to my pose-estimation work at PuttView, benchmarked on golf putting motion with Percentage of Correct Keypoints (PCK).",
  },
  {
    title: "Robotic Multimodal Object Recognition",
    kind: "Research project",
    art: "multimodal",
    color: "#b9f2df",
    description:
      "Object recognition for robots across several sensor modalities. CNN and LSTM encoders process each modality, and their features are weighted and squeezed into one joint representation before classification.",
  },
  {
    title: "Automated Spell Checking",
    kind: "Research project",
    art: "spell",
    color: "#ffd98e",
    description:
      "Context-aware spelling correction. Norvig’s edit-distance approach proposes candidate words, and a hidden Markov model picks the candidate that best fits the surrounding words.",
  },
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
      "I’m Sachin Sharma, an AI solutions architect and CTO. I’m CTO at AskCodi and MakersClaw, and was CTO at Papersafe through its acquisition in 2026. Before that I delivered enterprise lending software for banks, did ML research, and earned my MSc in AI.",
      "I own architecture and technical execution: system design, multi-provider AI platforms, agents and retrieval, cloud infrastructure on AWS and GKE, and the evaluations and observability that keep it reliable. I lead and mentor engineers, and work directly with clients and stakeholders to turn requirements into production systems.",
    ],
    facts: ["CTO · AskCodi & MakersClaw", "MSc AI, Universität Hamburg", "From the Himalayas, hence @himalayansailor"],
  },
  process: {
    title: "How I Work",
    paragraphs: [
      "I start from the architecture: requirements, constraints and failure modes first, then the system design that fits them. From there I lead delivery end to end, through development, deployment and the observability that follows.",
      "For AI products that means agents with deterministic evaluations, retrieval that cites its sources, low-confidence results routed to people, and infrastructure that scales with real usage. I stay hands-on, so the decisions I make as CTO are ones I can build myself.",
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
  { id: "l", letter: "L", caption: "Case Studies", face: "#ffc3a0", base: "#d96c44", x: 292, y: 139, href: "#case-studies" },
  { id: "i", letter: "I", caption: "GitHub", face: "#c6d7ff", base: "#5a78c9", x: 438, y: 139, href: LINKS.github, external: true },
  { id: "o3", letter: "O", caption: "Contact Me", face: "#d9f28f", base: "#7aa52d", x: 584, y: 139, href: CONTACT_URL, external: true },
  { id: "enter", letter: "↵", caption: "Let’s Talk", face: "#ffe446", base: "#eab800", x: 657, y: 0, w: 218, h: 300, href: CONTACT_URL, external: true, enter: true },
];

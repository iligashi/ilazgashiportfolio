export const profile = {
  name: "Ilaz Gashi",
  role: "Full-stack Engineer",
  location: "Prishtina, Kosovo",
  timezone: "Europe/Belgrade",
  email: "ilazgashi258@gmail.com",
  phone: "+383 49 732 127",
  phoneHref: "tel:+38349732127",
  github: "https://github.com/iligashi",
  linkedin: "https://www.linkedin.com/in/ilaz-gashi-a2b868259",
  site: "https://ilazgashi.vercel.app",
}

export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const

export const stackMarquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Socket.IO",
  "Redux Toolkit",
  "React Query",
  "Tailwind CSS",
  "Jest",
  "Docker",
  "GitHub Actions",
  "Vercel",
]

export interface Role {
  title: string
  company: string
  location: string
  period: string
  summary: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: "Co-founder & Full-stack Developer",
    company: "Nexora Agency LLC",
    location: "Prishtina",
    period: "Present",
    summary: "Own client products end to end, from scoping to production.",
    points: [
      "Turn business goals into technical scope, priorities and delivery plans with clients.",
      "Design application architecture, data models and APIs, and build the interfaces on top of them.",
      "Plan where AI-assisted automation fits into client workflows.",
    ],
  },
  {
    title: "Freelance Full-stack Developer",
    company: "Independent",
    location: "Remote · international clients",
    period: "2023 — Present",
    summary: "Web products across commerce, hospitality, healthcare and events.",
    points: [
      "Built and launched client sites including the Fluks Dekor store (flux-dekor.com) and Hotel Nobel (hotelnobel-ks.com).",
      "Built across the stack: responsive UIs, REST APIs, auth and data-backed admin tools.",
    ],
  },
  {
    title: "AI Developer & Junior General Tech Engineer",
    company: "Digital School / Shkolla Digjitale",
    location: "Prishtina",
    period: "Nov 2024 — Present",
    summary: "Prototype AI automation for internal workflows and keep classroom tech running.",
    points: [
      "Find repetitive operational tasks and build AI-enabled automation for them.",
      "Support the rollout and day-to-day running of the school's digital platforms.",
    ],
  },
  {
    title: "BSc Computer Science and Engineering",
    company: "UBT — University for Business and Technology",
    location: "Prishtina",
    period: "2022 — 2025",
    summary: "Algorithms, data structures, databases and software engineering.",
    points: ["Capstone and team projects built in Java, Python and modern web stacks."],
  },
]

export interface Capability {
  title: string
  description: string
  tools: string[]
  proof: string
}

export const capabilities: Capability[] = [
  {
    title: "Product frontends",
    description: "Typed React and Next.js apps with server state, routing and accessible, responsive UI.",
    tools: ["React", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "Tailwind CSS"],
    proof: "Role-based dashboards for 5 user types in the Real Estate Marketplace",
  },
  {
    title: "APIs & data",
    description: "REST APIs with validation, auth and data models designed around how the product is used.",
    tools: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Mongoose", "JWT"],
    proof: "13 route modules over 17 data models, with a geospatial location index",
  },
  {
    title: "Real-time",
    description: "WebSocket features that share the same auth and access rules as the REST API.",
    tools: ["Socket.IO", "Presence", "Notifications"],
    proof: "Live chat with typing indicators, read receipts and online status",
  },
  {
    title: "Security",
    description: "Secure defaults from day one rather than patched in later.",
    tools: ["httpOnly cookies", "CSRF", "Rate limiting", "Input sanitising", "Helmet"],
    proof: "Dedicated security test suite in the marketplace API",
  },
  {
    title: "Testing & delivery",
    description: "Automated tests, CI on every push and reproducible environments.",
    tools: ["Jest", "Supertest", "GitHub Actions", "Docker", "Vercel", "Render"],
    proof: "10 API test suites running against in-memory MongoDB in CI",
  },
]

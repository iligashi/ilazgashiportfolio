export type ProjectCategory = "Full-stack" | "E-commerce" | "Frontend" | "Dashboard"

export interface Project {
  slug: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  github: string
  demo?: string
  image: string
  featured?: boolean
  caseStudy?: {
    context: string
    scope: string[]
    decisions: string[]
    outcomeTitle: string
    outcome: string
  }
}

export const projects: Project[] = [
  {
    slug: "fluks-dekor",
    title: "Fluks Dekor",
    description:
      "A commerce experience for a Kosovo furniture and decor retailer, with product discovery and the tools to manage orders.",
    category: "E-commerce",
    tags: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/iligashi/MoblieriaDardania",
    demo: "https://flux-dekor.com/",
    image: "/dlux.png",
    featured: true,
    caseStudy: {
      context:
        "A growing catalog needs to make browsing and buying straightforward for customers, while giving the business a practical way to keep products and orders up to date.",
      scope: [
        "Built a full-stack commerce experience for furniture, decorations, and tools.",
        "Implemented product management, shopping cart, wishlist, and order tracking.",
        "Organized the catalog into sale, new-arrival, and best-seller collections.",
      ],
      decisions: [
        "Connected a React storefront to a Node/Express backend and PostgreSQL data.",
        "Designed the customer shopping flow and operational admin tools as parts of one product.",
      ],
      outcomeTitle: "Commerce and operations in one flow",
      outcome:
        "The result brings product discovery, purchasing, and order management together, with delivery information visible as part of the customer experience.",
    },
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "A collaborative workspace that brings team tasks, Kanban boards, discussion, and attachments into one workflow.",
    category: "Full-stack",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com/iligashi/Task-Manager.git",
    image: "/task-management-kanban.png",
    featured: true,
    caseStudy: {
      context:
        "Team work gets fragmented when planning, progress updates, and project conversations live in separate places.",
      scope: [
        "Created shared workspaces and Kanban boards for organizing team work.",
        "Added task details, comments, and file attachments to keep context alongside the work.",
      ],
      decisions: [
        "Used a board-based view to make status and next actions easy to scan.",
        "Kept collaboration features attached to tasks so discussions stay connected to their context.",
      ],
      outcomeTitle: "Shared context for team work",
      outcome:
        "The application gives teams a single place to plan work, follow progress, and exchange task-specific context.",
    },
  },
  {
    slug: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    description:
      "A property marketplace with role-based accounts, searchable listings, and real-time messaging between users.",
    category: "Full-stack",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/iligashi/realestate",
    image: "/modern-ecommerce-dashboard.png",
    featured: true,
    caseStudy: {
      context:
        "Property seekers need to find relevant listings and contact the right people without losing the conversation in a disconnected workflow.",
      scope: [
        "Built property listings and search for browsing available homes.",
        "Added role-based accounts for distinct user permissions.",
        "Implemented real-time messaging to support conversations around listings.",
      ],
      decisions: [
        "Combined listing discovery and messaging in one application flow.",
        "Used Socket.IO for real-time communication and MongoDB for application data.",
      ],
      outcomeTitle: "From discovery to conversation",
      outcome:
        "The marketplace connects property discovery with direct communication, supporting the core journey from browsing to inquiry.",
    },
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A location-based forecast with interactive visualizations that make weather data easier to scan.",
    category: "Dashboard",
    tags: ["React", "TypeScript", "Tailwind CSS", "API"],
    github: "https://github.com/iligashi/WeatherDashboard.git",
    demo: "https://weatherdashboard-navy.vercel.app/",
    image: "/weather-dashboard-interface.png",
  },
  {
    slug: "poliklinika",
    title: "Poliklinika Website",
    description: "A healthcare website to explore medical services, find doctors, and book appointments.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/iligashi/Poliklinika.git",
    demo: "https://poliklinikaa.netlify.app/",
    image: "/poliklinika.png",
  },
  {
    slug: "programuesi-i-veturave",
    title: "Programuesi i Veturave",
    description: "A responsive web presence for a vehicle programming and customization service.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/iligashi/Programusi-i-Veturave-.git",
    demo: "https://programuesiiveturave.netlify.app/",
    image: "/programuesi.png",
  },
  {
    slug: "nobel-venues",
    title: "Nobel Venues",
    description: "A refined landing page showcasing event spaces and services for a premium venue business.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/iligashi/Nobel",
    demo: "https://nobelvenues.netlify.app/",
    image: "/nobel.png",
  },
  {
    slug: "74-lounge-bar",
    title: "74 Lounge Bar",
    description:
      "A hospitality platform combining online ordering, table reservations, real-time messaging, and admin tools.",
    category: "Full-stack",
    tags: ["Next.js", "Express", "SQL"],
    github: "https://github.com/iligashi/74-lounge-bar",
    demo: "https://74loungebar.netlify.app/",
    image: "/74.png",
  },
]

export type ProjectCategory = "Full-stack" | "E-commerce" | "Frontend" | "Dashboard"

export interface Project {
  slug: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  github: string
  demo?: string
  image?: string
  /** Generated cover art for projects without a public demo to screenshot */
  illustration?: "kanban"
  gallery?: Array<{ src: string; caption: string }>
  highlights?: string[]
  featured?: boolean
  caseStudy?: {
    context: string
    cardChallenge: string
    cardContribution: string
    scope: string[]
    decisions: string[]
    outcomeTitle: string
    outcome: string
    cardOutcome: string
  }
}

export const projects: Project[] = [
  {
    slug: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    description:
      "A production-deployed property marketplace for buyers, sellers, renters, agents and admins, with listings, viewings, rental applications and real-time messaging.",
    category: "Full-stack",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO", "Jest", "Docker"],
    github: "https://github.com/iligashi/realestate",
    demo: "https://realestate-orpin-eight-16.vercel.app",
    image: "/realestate-home.png",
    gallery: [
      { src: "/realestate-properties.png", caption: "Property search with type, price, city and bedroom filters" },
      { src: "/realestate-property-detail.png", caption: "Listing detail with viewing requests and owner contact" },
      {
        src: "/realestate-seller-dashboard.png",
        caption: "Seller dashboard with per-listing views, saves and inquiries",
      },
      { src: "/realestate-admin-dashboard.png", caption: "Admin moderation for users, listings and reports" },
    ],
    highlights: ["5 user roles", "Real-time messaging", "Jest + Supertest API tests", "CI, Docker, deployed"],
    featured: true,
    caseStudy: {
      context:
        "A property marketplace has to serve people with very different goals: buyers and renters searching, sellers and agents managing listings, and admins keeping the platform trustworthy. Each of them needs its own tools without the product splitting into separate apps.",
      cardChallenge:
        "Five kinds of users, one marketplace: each needs its own tools, and every listing and conversation has to stay trustworthy.",
      cardContribution:
        "Designed and built the whole product: the React client, the Express and Socket.IO API, the MongoDB data model, tests, CI and deployment.",
      scope: [
        "Five roles (buyer, seller, renter, agent, admin) with role-specific dashboards and role-based route protection on the client and the API.",
        "Sale and rental listings with photos, filters and a multi-step listing wizard, plus admin review before a listing goes live.",
        "Socket.IO messaging with typing indicators, read receipts, online status and live notifications.",
        "Rental applications, viewing scheduling and open houses, a wishlist, property comparison and a mortgage calculator.",
        "Seller analytics (views, saves, inquiries per listing) and admin moderation of users, listings and reports.",
      ],
      decisions: [
        "Session tokens live in an httpOnly, Secure cookie so page JavaScript can never read them; cookie-authenticated writes require an X-Requested-With header as CSRF protection.",
        "All input is stripped of MongoDB operators, search patterns are escaped, page sizes are capped, and login, registration and contact are rate-limited.",
        "The same JWT and role middleware protects both the REST API and the WebSocket server, so real-time features follow the same access rules as everything else.",
        "API behaviour is covered by Jest and Supertest against an in-memory MongoDB, run in GitHub Actions on every push.",
        "Shipped with Docker Compose for local setup and deployed with the frontend on Vercel, the API on Render and data on MongoDB Atlas.",
      ],
      outcomeTitle: "A complete, deployed marketplace",
      outcome:
        "The platform is live with seeded demo accounts for every role, so the whole journey can be tried end to end: from searching and saving a property, to messaging the owner and booking a viewing, to an admin approving the listing.",
      cardOutcome: "Live in production with tested, documented APIs and a security model built in from the start.",
    },
  },
  {
    slug: "fluks-dekor",
    title: "Fluks Dekor",
    description:
      "A commerce experience for a Kosovo furniture and decor retailer, with product discovery and the tools to manage orders.",
    category: "E-commerce",
    tags: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/iligashi/flux-dekor",
    demo: "https://flux-dekor.com/",
    image: "/work/fluks.png",
    featured: true,
    caseStudy: {
      context:
        "A growing catalog needs to make browsing and buying straightforward for customers, while giving the business a practical way to keep products and orders up to date.",
      cardChallenge: "Customers need an easy route from a large product catalog to an order.",
      cardContribution: "Built the storefront and the supporting product, cart, wishlist, and order-management flows.",
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
      cardOutcome: "Connected product discovery, purchasing, and order management in one commerce experience.",
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
    illustration: "kanban",
    featured: true,
    caseStudy: {
      context:
        "Team work gets fragmented when planning, progress updates, and project conversations live in separate places.",
      cardChallenge: "Tasks, status updates, and team discussion often lose their shared context.",
      cardContribution: "Built shared workspaces, Kanban boards, task details, comments, and attachments.",
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
      cardOutcome: "Brought planning, progress updates, and task conversations into one shared workspace.",
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
    image: "/work/weather.png",
  },
  {
    slug: "poliklinika",
    title: "Poliklinika Website",
    description: "A healthcare website to explore medical services, find doctors, and book appointments.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/iligashi/Poliklinika.git",
    demo: "https://poliklinikaa.netlify.app/",
    image: "/work/poliklinika.png",
  },
  {
    slug: "programuesi-i-veturave",
    title: "Programuesi i Veturave",
    description: "A responsive web presence for a vehicle programming and customization service.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/iligashi/programuesi-i-veturave",
    demo: "https://programuesiiveturave.netlify.app/",
    image: "/work/programuesi.png",
  },
  {
    slug: "nobel-venues",
    title: "Hotel Nobel",
    description:
      "The live website for Hotel Nobel, a luxury wedding and event venue in Drenas, Kosovo: three halls, menus, a gallery and reservations.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/iligashi/Nobel",
    demo: "https://hotelnobel-ks.com/",
    image: "/work/nobel.jpg",
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
    image: "/work/lounge74.png",
  },
]

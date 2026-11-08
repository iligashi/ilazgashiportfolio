"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/lib/projects"
import { Reveal, SectionLabel, SplitWords, ease } from "@/components/motion/primitives"
import { BrowserFrame } from "@/components/site/browser-frame"
import { ArchitectureDiagram } from "@/components/site/architecture"
import { Counter } from "@/components/site/counter"

const project = projects.find((p) => p.slug === "real-estate-marketplace")!

type Chapter = {
  id: string
  kicker: string
  title: string
  body: string
  points: string[]
  image?: string
  url: string
}

const chapters: Chapter[] = [
  {
    id: "discover",
    kicker: "Discovery",
    title: "Search that respects how people actually look for homes.",
    body: "Sale and rental listings with filters for type, price, city and bedrooms, backed by escaped search patterns and capped page sizes on the API.",
    points: ["Filterable listings", "Wishlist & comparison", "Mortgage calculator"],
    image: "/realestate-properties.png",
    url: "realestate-orpin-eight-16.vercel.app/properties",
  },
  {
    id: "connect",
    kicker: "Real-time",
    title: "From a listing to a conversation in one click.",
    body: "Socket.IO messaging with typing indicators, read receipts, online status and live notifications. It goes through the same JWT and role middleware as the REST API.",
    points: ["Typing & read receipts", "Viewing requests", "Rental applications"],
    image: "/realestate-property-detail.png",
    url: "realestate-orpin-eight-16.vercel.app/properties/:id",
  },
  {
    id: "sell",
    kicker: "Role-based tools",
    title: "Five roles, each with a dashboard built for its job.",
    body: "Buyers, sellers, renters, agents and admins get their own routes and tools. Sellers see views, saves and inquiries per listing and run open houses.",
    points: ["Buyer · Seller · Renter", "Agent · Admin", "Per-listing analytics"],
    image: "/realestate-seller-dashboard.png",
    url: "realestate-orpin-eight-16.vercel.app/seller",
  },
  {
    id: "moderate",
    kicker: "Trust",
    title: "Nothing goes live until an admin has reviewed it.",
    body: "New listings are held for review. Users can report listings, people or messages, and admins have tools to manage users, approve listings and schedule announcements.",
    points: ["Listing review", "Reports queue", "Platform settings"],
    image: "/realestate-admin-dashboard.png",
    url: "realestate-orpin-eight-16.vercel.app/admin",
  },
  {
    id: "engineer",
    kicker: "Under the hood",
    title: "Secure by default, tested on every push.",
    body: "httpOnly session cookies, CSRF protection, MongoDB operator stripping, rate limiting and upload type checks. Jest and Supertest suites run in GitHub Actions; Docker Compose for local; Vercel, Render and Atlas in production.",
    points: ["Security test suite", "CI on every push", "Dockerised"],
    url: "architecture.md",
  },
]

const stats = [
  { value: 5, label: "user roles with RBAC" },
  { value: 17, label: "data models" },
  { value: 13, label: "API route modules" },
  { value: 10, label: "API test suites" },
]

function ChapterVisual({ chapter }: { chapter: Chapter }) {
  return (
    <BrowserFrame url={chapter.url}>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        {chapter.image ? (
          <Image
            src={chapter.image}
            alt={`${project.title}: ${chapter.kicker}`}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover object-top"
          />
        ) : (
          <ArchitectureDiagram />
        )}
      </div>
    </BrowserFrame>
  )
}

export function Flagship() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="relative px-4 pt-32 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="01">Flagship build</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
            <SplitWords text="Real Estate" />
            <br />
            <span className="font-serif font-normal text-accent italic">
              <SplitWords text="Marketplace" delay={0.15} />
            </span>
          </h2>
          <Reveal delay={0.2}>
            <p className="text-lg leading-relaxed text-muted">
              A production-deployed marketplace where buyers, sellers, renters and agents list, discover and discuss
              properties in real time. I designed and built all of it: client, API, data model, tests, CI and
              deployment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-ink"
              >
                Open live demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm transition-colors hover:border-foreground"
              >
                <Github className="h-4 w-4" /> Source
              </a>
              <Link
                href={`/projects/${project.slug}`}
                className="group inline-flex items-center gap-2 px-2 py-2.5 text-sm text-accent"
              >
                Full case study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-y border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`px-2 py-8 md:px-6 ${i > 0 ? "md:border-l md:border-line" : ""} ${i % 2 === 1 ? "border-l border-line md:border-l" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <dd className="text-5xl font-semibold tracking-tight md:text-6xl">
                <Counter to={s.value} />
              </dd>
              <dt className="mt-2 font-mono text-xs tracking-[0.14em] text-muted uppercase">{s.label}</dt>
            </Reveal>
          ))}
        </dl>

        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_1.25fr] lg:gap-20 [&>*]:min-w-0">
          <div>
            {chapters.map((chapter, i) => (
              <div
                key={chapter.id}
                ref={(el) => {
                  refs.current[i] = el
                }}
                data-index={i}
                className="flex min-h-[70vh] flex-col justify-center py-10 lg:min-h-[85vh]"
              >
                <motion.div
                  animate={{ opacity: active === i ? 1 : 0.35 }}
                  transition={{ duration: 0.5 }}
                  className="max-lg:!opacity-100"
                >
                  <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">
                    <span>0{i + 1}</span>
                    <span className="h-px w-6 bg-accent/50" />
                    {chapter.kicker}
                  </p>
                  <h3 className="mt-5 text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-4xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-muted">{chapter.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {chapter.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="mt-10 lg:hidden">
                  <ChapterVisual chapter={chapter} />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-210px)]">
              <div className="relative">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={chapters[active].id}
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 0.97 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <ChapterVisual chapter={chapters[active]} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-6 flex items-center gap-2" aria-hidden="true">
                {chapters.map((c, i) => (
                  <motion.span
                    key={c.id}
                    className="h-1 rounded-full bg-line-strong"
                    animate={{
                      width: active === i ? 40 : 12,
                      backgroundColor: active === i ? "var(--accent)" : "var(--line-strong)",
                    }}
                    transition={{ duration: 0.4, ease }}
                  />
                ))}
                <span className="ml-auto font-mono text-xs text-muted">
                  0{active + 1} / 0{chapters.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { ArrowUpRight, Github } from "lucide-react"
import { projects, type Project } from "@/lib/projects"
import { Reveal, SectionLabel, SplitWords, spotlightHandler } from "@/components/motion/primitives"
import { KanbanArt } from "@/components/site/kanban-art"

const order = ["fluks-dekor", "nobel-venues", "74-lounge-bar", "weather-dashboard", "task-manager"]
const layout: Record<string, string> = {
  "fluks-dekor": "md:col-span-2 md:row-span-2",
  "nobel-venues": "",
  "74-lounge-bar": "",
  "weather-dashboard": "md:col-span-2",
  "task-manager": "",
}

function Cover({ project, large }: { project: Project; large: boolean }) {
  if (project.illustration === "kanban") return <KanbanArt />
  if (!project.image) return null
  return (
    <Image
      src={project.image}
      alt={`${project.title} home page`}
      fill
      sizes={large ? "(max-width: 768px) 100vw, 760px" : "(max-width: 768px) 100vw, 380px"}
      className={`object-cover ${large ? "object-left-top" : "object-top"} transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]`}
    />
  )
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 200, damping: 20 })
  const large = layout[project.slug]?.includes("row-span-2") ?? false
  const wide = !large && (layout[project.slug]?.includes("col-span-2") ?? false)
  const primaryHref = project.caseStudy ? `/projects/${project.slug}` : (project.demo ?? project.github)
  const external = !project.caseStudy

  return (
    <Reveal delay={(index % 3) * 0.08} className={`[perspective:1200px] ${layout[project.slug] ?? ""}`}>
      <motion.article
        ref={ref}
        style={{ rotateX, rotateY }}
        onMouseMove={(e) => {
          spotlightHandler(e)
          const r = e.currentTarget.getBoundingClientRect()
          mx.set((e.clientX - r.left) / r.width)
          my.set((e.clientY - r.top) / r.height)
        }}
        onMouseLeave={() => {
          mx.set(0.5)
          my.set(0.5)
        }}
        className="spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong"
      >
        <div className={`relative overflow-hidden border-b border-line ${large ? "aspect-[16/11] md:aspect-auto md:flex-1" : wide ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[16/10]"}`}>
          <Cover project={project} large={large} />
        </div>
        <div className="flex flex-col gap-3 p-5 md:p-6">
          <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span>{project.category}</span>
            {project.demo && (
              <span className="flex items-center gap-1.5 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live
              </span>
            )}
          </div>
          <h3 className={`font-semibold tracking-tight ${large ? "text-3xl" : "text-xl"}`}>
            <Link
              href={primaryHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-1 flex items-center justify-between gap-4">
            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-subtle">
              {project.tags.slice(0, 4).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="relative z-10 flex shrink-0 items-center gap-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-surface-2 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-ink">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function WorkGrid() {
  const list = order.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean) as Project[]
  return (
    <section className="px-4 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="02">More work</SectionLabel>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            <SplitWords text="More products," />{" "}
            <span className="font-serif font-normal italic text-muted">
              <SplitWords text="built and shipped." delay={0.2} />
            </span>
          </h2>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Commerce, hospitality, events and team tools. Screenshots are taken from the live sites.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid auto-rows-auto gap-5 md:grid-cols-3">
          {list.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <a
            href="https://github.com/iligashi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" /> More projects on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { projects, type Project, type ProjectCategory } from "@/lib/projects"

const filters: Array<"All work" | ProjectCategory> = [
  "All work",
  "Full-stack",
  "E-commerce",
  "Frontend",
  "Dashboard",
]

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/10 md:grid-cols-[1.25fr_0.75fr]">
      <div className="relative min-h-72 overflow-hidden bg-muted md:min-h-[520px] lg:min-h-[600px]">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
        />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-background/85 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur">
          Flagship case study
        </span>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{project.category}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">{project.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{project.description}</p>

        {project.caseStudy && (
          <div className="mt-7 space-y-4 border-t border-border pt-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">The challenge</p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{project.caseStudy.cardChallenge}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">My contribution</p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{project.caseStudy.cardContribution}</p>
            </div>
            <div className="border-l-2 border-accent/60 pl-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Outcome</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.caseStudy.cardOutcome}</p>
            </div>
          </div>
        )}

        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Live site <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Source <Github className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border/80 bg-card/60 transition-colors hover:border-accent/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex h-full flex-col p-5 md:p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{project.category}</p>
        <h4 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.caseStudy && (
          <div className="mt-5 space-y-3 border-t border-border pt-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Challenge</p>
              <p className="mt-1 text-sm leading-relaxed">{project.caseStudy.cardChallenge}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Contribution</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.caseStudy.cardContribution}</p>
            </div>
            <p className="border-l-2 border-accent/50 pl-3 text-sm leading-relaxed text-muted-foreground">
              {project.caseStudy.cardOutcome}
            </p>
          </div>
        )}

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-secondary/70 px-3 py-1 text-xs text-secondary-foreground">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Read case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Live site <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Source <Github className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All work")
  const [showAllProjects, setShowAllProjects] = useState(false)
  const visibleProjects =
    activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter)
  const featuredProjects = visibleProjects.filter((project) => project.featured)
  const otherProjects = visibleProjects.filter((project) => !project.featured)
  const curatedProjects = activeFilter !== "All work" || showAllProjects ? otherProjects : []
  const displayedProjectCount = featuredProjects.length + curatedProjects.length

  return (
    <section id="projects" className="px-4 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">Selected work</span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs text-muted-foreground">01 — 03</span>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-accent">A focused selection</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Work with a <span className="text-accent">purpose.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Three end-to-end case studies: the challenge, my contribution, and the product decisions behind each one.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeFilter === filter
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
          <span className="sr-only" aria-live="polite">
            Showing {displayedProjectCount} projects
          </span>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <FeaturedProject project={featuredProjects[0]} />
            {featuredProjects.length > 1 && (
              <div className="mt-12">
                <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Supporting case studies
                </h3>
                <div className="grid gap-5 md:grid-cols-2">
                  {featuredProjects.slice(1).map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {curatedProjects.length > 0 && (
          <div className="border-t border-border pt-10">
            {featuredProjects.length > 0 && (
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                More projects
              </h3>
            )}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {curatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}

        {activeFilter === "All work" && otherProjects.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((showAll) => !showAll)}
              aria-expanded={showAllProjects}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {showAllProjects ? "Show selected work only" : `Explore ${otherProjects.length} more projects`}
              <ArrowDown
                className={`h-4 w-4 transition-transform ${showAllProjects ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { projects, type Project, type ProjectCategory } from "@/lib/projects"

const filters: Array<"All work" | ProjectCategory> = [
  "All work",
  "Full-stack",
  "E-commerce",
  "Frontend",
  "Dashboard",
]

function ProjectCard({ project, featured, lead = false }: { project: Project; featured: boolean; lead?: boolean }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border bg-card transition-colors hover:border-accent ${
        featured ? "border-accent/25" : "border-border"
      } ${lead ? "lg:col-span-2" : ""}`}
    >
      <div className={`relative overflow-hidden bg-muted ${lead ? "aspect-[16/8]" : "aspect-video"}`}>
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes={lead ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-background/80 px-3 py-1 font-mono text-xs text-foreground backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="space-y-4 p-5 md:p-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
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
  const visibleProjects =
    activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter)
  const featuredProjects = visibleProjects.filter((project) => project.featured)
  const otherProjects = visibleProjects.filter((project) => !project.featured)

  return (
    <section id="projects" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">Selected work</span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs text-muted-foreground">01 — 08</span>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-accent">A few things I&apos;ve worked on</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Work with a <span className="text-accent">purpose.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Product work is more than a stack. These projects show the problem, the decisions, and the experience I
            focused on building.
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
            Showing {visibleProjects.length} projects
          </span>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-14">
            <h3 className="mb-5 text-xl font-semibold">Featured case studies</h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} featured lead={index === 0} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && <h3 className="mb-5 text-xl font-semibold">More projects</h3>}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} featured={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

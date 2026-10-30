import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug && item.caseStudy)

  if (!project) {
    return { title: "Project not found" }
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Ilaz Gashi`,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug && item.caseStudy)

  if (!project?.caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen px-4 pb-24 pt-32">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to selected work
        </Link>

        <header className="mt-12 max-w-3xl">
          <p className="font-mono text-sm text-accent">{project.category} · Case study</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">{project.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit md:sticky md:top-28">
            <p className="font-mono text-sm text-accent">Project links</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Live project <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Source code <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>

          <div className="space-y-12">
            <section>
              <p className="font-mono text-sm text-accent">01 / The context</p>
              <h2 className="mt-3 text-2xl font-semibold">The problem to solve</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.caseStudy.context}</p>
            </section>

            <section>
              <p className="font-mono text-sm text-accent">02 / My contribution</p>
              <h2 className="mt-3 text-2xl font-semibold">What I built</h2>
              <ul className="mt-4 space-y-3">
                {project.caseStudy.scope.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="font-mono text-sm text-accent">03 / The thinking</p>
              <h2 className="mt-3 text-2xl font-semibold">Product and engineering decisions</h2>
              <ul className="mt-4 space-y-3">
                {project.caseStudy.decisions.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
              <p className="font-mono text-sm text-accent">04 / The result</p>
              <h2 className="mt-3 text-2xl font-semibold">{project.caseStudy.outcomeTitle}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.caseStudy.outcome}</p>
            </section>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Explore more projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  )
}

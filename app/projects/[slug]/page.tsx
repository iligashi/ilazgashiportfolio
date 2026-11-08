import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/lib/projects"
import { Navigation } from "@/components/site/navigation"
import { Reveal, SplitWords } from "@/components/motion/primitives"
import { BrowserFrame } from "@/components/site/browser-frame"
import { KanbanArt } from "@/components/site/kanban-art"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

const caseStudies = projects.filter((p) => p.caseStudy)

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = caseStudies.find((item) => item.slug === slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Case study`,
    description: project.description,
    openGraph: { title: `${project.title} — Case study · Ilaz Gashi`, description: project.description },
  }
}

function hostOf(url?: string) {
  if (!url) return "github.com"
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = caseStudies.find((item) => item.slug === slug)
  if (!project?.caseStudy) notFound()

  const cs = project.caseStudy
  const index = caseStudies.indexOf(project)
  const next = caseStudies[(index + 1) % caseStudies.length]

  const sections = [
    { n: "01", label: "Context", title: "The problem", body: [cs.context] },
    { n: "02", label: "Scope", title: "What I built", body: cs.scope },
    { n: "03", label: "Engineering", title: "Decisions and trade-offs", body: cs.decisions },
  ]

  return (
    <>
      <Navigation />
      <main className="px-4 pb-24 pt-36">
        <article className="mx-auto max-w-6xl">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" /> All work
          </Link>

          <header className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {project.category} · Case study
              </p>
              <h1 className="mt-5 text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                <SplitWords text={project.title} animateOnMount delay={0.1} />
              </h1>
            </div>
            <Reveal>
              <p className="text-lg leading-relaxed text-muted">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm transition-colors hover:border-foreground"
                >
                  <Github className="h-4 w-4" /> Source code
                </a>
              </div>
            </Reveal>
          </header>

          <Reveal className="mt-14" y={60}>
            <BrowserFrame url={hostOf(project.demo)}>
              <div className="relative aspect-[16/10]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1152px"
                    className="object-cover object-top"
                  />
                ) : (
                  <KanbanArt />
                )}
              </div>
            </BrowserFrame>
          </Reveal>

          <dl className="mt-10 grid gap-6 border-y border-line py-8 md:grid-cols-3">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Role</dt>
              <dd className="mt-2">Design, full-stack build, deployment</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Stack</dt>
              <dd className="mt-2">{project.tags.join(" · ")}</dd>
            </div>
            {project.highlights ? (
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Highlights</dt>
                <dd className="mt-2">{project.highlights.join(" · ")}</dd>
              </div>
            ) : (
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Status</dt>
                <dd className="mt-2">{project.demo ? "Live" : "Source available"}</dd>
              </div>
            )}
          </dl>

          <div className="mt-20 space-y-20">
            {sections.map((s) => (
              <section key={s.n} className="grid gap-6 md:grid-cols-[0.6fr_1.4fr]">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {s.n} / {s.label}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">{s.title}</h2>
                </Reveal>
                {s.body.length === 1 ? (
                  <Reveal delay={0.1}>
                    <p className="text-xl leading-relaxed text-muted">{s.body[0]}</p>
                  </Reveal>
                ) : (
                  <ol className="divide-y divide-line border-y border-line">
                    {s.body.map((item, i) => (
                      <Reveal key={item} delay={i * 0.05}>
                        <li className="grid grid-cols-[auto_1fr] gap-5 py-5">
                          <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                          <span className="leading-relaxed text-foreground/90">{item}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ol>
                )}
              </section>
            ))}
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <section className="mt-24">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">04 / Screens</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Inside the product</h2>
              </Reveal>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {project.gallery.map((shot, i) => (
                  <Reveal key={shot.src} delay={(i % 2) * 0.1}>
                    <figure className="group">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
                        <Image
                          src={shot.src}
                          alt={shot.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 560px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          <Reveal className="mt-24">
            <section className="relative overflow-hidden rounded-3xl border border-accent/30 bg-accent-soft p-8 md:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Outcome</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{cs.outcomeTitle}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{cs.outcome}</p>
            </section>
          </Reveal>

          {next && next.slug !== project.slug && (
            <Link
              href={`/projects/${next.slug}`}
              className="group mt-24 flex items-end justify-between gap-6 border-t border-line pt-10"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Next case study</p>
                <p className="mt-3 text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.04em] transition-colors group-hover:text-accent">
                  {next.title}
                </p>
              </div>
              <span className="mb-3 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                <ArrowRight className="h-5 w-5 transition-transform group-hover:-rotate-45" />
              </span>
            </Link>
          )}
        </article>
      </main>
    </>
  )
}

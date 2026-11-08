"use client"

import { ArrowUpRight, Github, Linkedin, Phone } from "lucide-react"
import { profile } from "@/lib/site"
import { Magnetic, Reveal, SectionLabel, SplitWords } from "@/components/motion/primitives"
import { CopyEmail } from "@/components/site/hero"

const links = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: profile.phone, href: profile.phoneHref, icon: Phone },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 pt-32 pb-10 md:pt-44">
      <div
        aria-hidden="true"
        className="bg-grid mask-radial pointer-events-none absolute inset-x-0 bottom-0 h-[600px] opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="06">Contact</SectionLabel>
        </Reveal>

        <h2 className="mt-10 text-[clamp(3rem,11vw,10rem)] leading-[0.9] font-semibold tracking-[-0.06em]">
          <SplitWords text="Let's build" />
          <br />
          <span className="font-serif font-normal text-accent italic">
            <SplitWords text="something real." delay={0.15} />
          </span>
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <Reveal>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              I&apos;m looking for a full-stack role on a team that ships. Hiring, or have a product that needs
              building? Email is the fastest way to reach me.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${profile.email}?subject=Hello%20Ilaz`}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-ink transition-shadow hover:shadow-[0_0_50px_-6px_var(--accent)]"
                >
                  Start a conversation
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <CopyEmail />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="divide-y divide-line border-y border-line">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between py-4 text-lg transition-colors hover:text-accent"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                      {label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <footer className="mt-32 flex flex-col gap-3 border-t border-line pt-6 font-mono text-xs text-subtle md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Ilaz Gashi</span>
          <span>Built with Next.js, TypeScript, Tailwind and Motion · Deployed on Vercel</span>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}

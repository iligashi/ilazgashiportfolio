"use client"

import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative flex min-h-[88vh] items-center overflow-hidden px-4 pb-20 pt-32">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-end gap-14 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="max-w-4xl">
            <p className="mb-8 flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-semibold text-foreground">Ilaz Gashi</span>
              <span aria-hidden="true">·</span>
              Product-minded full-stack developer · Prishtina, Kosovo
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              I build digital products that make{" "}
              <span className="text-accent">complex work feel simple.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              From the first product question to the final interface, I turn real needs into clear, reliable web
              experiences—with thoughtful UX and maintainable engineering.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" className="gap-2 font-semibold" onClick={scrollToProjects}>
                Explore selected work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                Let&apos;s talk
              </Button>
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/iligashi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ilaz Gashi on GitHub"
                className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/ilaz-gashi-a2b868259"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ilaz Gashi on LinkedIn"
                className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:ilazgashi258@gmail.com"
                aria-label="Email Ilaz Gashi"
                className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">How I think about the work</p>
            <ul className="mt-5 divide-y divide-border">
              <li className="py-4">
                <p className="font-medium">Start with the user</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Understand the need before choosing the feature.</p>
              </li>
              <li className="py-4">
                <p className="font-medium">Make complexity feel clear</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Build focused flows and interfaces people can trust.</p>
              </li>
              <li className="py-4">
                <p className="font-medium">Leave room to grow</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Prefer maintainable foundations over clever shortcuts.</p>
              </li>
            </ul>
          </aside>
        </div>

        <button
          type="button"
          onClick={scrollToProjects}
          aria-label="Scroll to selected work"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full p-3 text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

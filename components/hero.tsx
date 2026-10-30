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
    <section id="hero" className="relative flex min-h-[90svh] items-center overflow-hidden px-4 pb-20 pt-32">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <div>
            <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Ilaz Gashi</span>
              <span aria-hidden="true" className="text-border">/</span>
              Product-minded full-stack developer
              <span aria-hidden="true" className="text-border">/</span>
              Prishtina, Kosovo
            </p>
            <p className="mb-9 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Available for product-focused frontend and full-stack roles
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              I build digital products that make{" "}
              <span className="text-accent">complex work feel simple.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I connect product needs to clear user flows, considered interfaces, and dependable full-stack foundations.
              The result: useful experiences that make sense to use and remain practical to evolve.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" className="gap-2 font-semibold" onClick={scrollToProjects}>
                View selected work <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

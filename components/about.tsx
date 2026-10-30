"use client"

import Image from "next/image"
import { ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const principles = [
  {
    number: "01",
    title: "Start with the constraint",
    description: "Clarify who needs the product, what they are trying to do, and where the current flow gets in the way.",
  },
  {
    number: "02",
    title: "Choose the useful trade-off",
    description: "Prioritize the clearest useful workflow, then choose an implementation that fits its real needs.",
  },
  {
    number: "03",
    title: "Leave room for change",
    description: "Keep the work understandable and the foundations practical to maintain as needs evolve.",
  },
]

export function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="px-4 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">Product-minded engineering</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl border border-accent/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/ili1.png"
                alt="Ilaz Gashi"
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-xl border border-border bg-card px-5 py-4 shadow-xl">
              <p className="font-mono text-xs text-muted-foreground">Based in</p>
              <p className="mt-1 font-semibold">Prishtina, Kosovo</p>
            </div>
          </div>

          <div>
            <p className="font-mono text-sm text-accent">People, product needs, and engineering constraints</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Clear for the person using it. Thought through for the people building on it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a full-stack developer and Junior General Tech Engineer at Digital School. My work spans
              client-facing websites, commerce, and database-backed products—connecting the experience people use
              with the systems a business needs to run it.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I start by getting clear on the user and the task, then shape a focused flow and an implementation that
              fits. React, Next.js, TypeScript, and Node.js are the tools I use to turn that thinking into maintainable
              web experiences.
            </p>
            <Button className="mt-7 gap-2" onClick={scrollToContact}>
              Get in touch <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-accent">How I make product decisions</p>
              <h3 className="mt-2 text-2xl font-semibold">Start with the need. Make the trade-off deliberately.</h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              I align the user need, product scope, and engineering effort before choosing how to build.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.number} className="rounded-2xl border border-border bg-card/60 p-6">
                <span className="font-mono text-sm text-accent">{principle.number}</span>
                <h4 className="mt-5 text-lg font-semibold">{principle.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

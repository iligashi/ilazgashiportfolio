"use client"

import Image from "next/image"
import { ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description: "Get clear on who the product serves and where the current experience falls short.",
  },
  {
    number: "02",
    title: "Shape the experience",
    description: "Turn ambiguous requirements into a focused flow, useful interface, and workable technical plan.",
  },
  {
    number: "03",
    title: "Build for the next change",
    description: "Deliver in small, understandable pieces that are easier to maintain and extend.",
  },
]

export function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">A little about me</span>
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
            <p className="font-mono text-sm text-accent">Product thinking meets practical engineering</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              I care about what we build—and how it holds up.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Junior General Tech Engineer at Digital School and a full-stack developer. My work spans
              responsive client websites, commerce, and database-backed applications. I enjoy taking a rough idea,
              finding the real user need, and shaping it into an experience that feels straightforward to use and
              straightforward to maintain.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My technical work centers on React, Next.js, TypeScript, and Node.js. Alongside software projects, my
              day-to-day technical support experience has taught me to listen carefully, troubleshoot methodically,
              and make technology work for the people using it.
            </p>
            <Button className="mt-7 gap-2" onClick={scrollToContact}>
              Get in touch <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-accent">My approach</p>
              <h3 className="mt-2 text-2xl font-semibold">A thoughtful path from problem to product.</h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Good engineering starts with the right question, then keeps the user and the next iteration in view.
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

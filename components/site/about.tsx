"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Reveal, SectionLabel } from "@/components/motion/primitives"

const principles = [
  {
    title: "Ship the whole slice",
    body: "Schema, API, UI and deployment for each feature, so it works end to end before I polish it.",
  },
  {
    title: "Secure by default",
    body: "Auth, validation, rate limits and sanitising go in at the start, with tests that keep them in place.",
  },
  {
    title: "Automate the boring parts",
    body: "CI, Docker and seed data, so anyone can clone the repo and see it running in minutes.",
  },
]

const statement =
  "I care about the parts of a product nobody screenshots: the data model that still makes sense in a year, the permission check on the socket event, and the test that fails before a user notices."

export function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] })
  const words = statement.split(" ")

  return (
    <section id="about" className="px-4 pt-32 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03">About</SectionLabel>
        </Reveal>

        <p
          ref={ref}
          className="mt-10 max-w-5xl text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium leading-[1.15] tracking-[-0.03em]"
        >
          {words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>

        <div className="mt-24 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-accent via-accent/70 to-surface-2">
              <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
              <Image
                src="/portrait.png"
                alt="Portrait of Ilaz Gashi"
                fill
                sizes="384px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="absolute -bottom-4 -right-3 rotate-[-4deg] rounded-xl border border-line-strong bg-background px-4 py-3 font-mono text-xs shadow-2xl">
              <span className="text-accent">●</span> Prishtina, Kosovo · CET
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-muted">
                I&apos;m a full-stack engineer and co-founder of{" "}
                <span className="text-foreground">Nexora Agency</span>, where I take client products from scoping to
                production. Before and alongside that, I&apos;ve freelanced for international clients and build AI-enabled
                automation at <span className="text-foreground">Digital School</span>. I studied Computer Science and
                Engineering at UBT.
              </p>
            </Reveal>
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <li className="group grid grid-cols-[auto_1fr] gap-x-6 py-6">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <div>
                      <h3 className="text-lg font-medium transition-transform duration-500 group-hover:translate-x-1">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block pr-[0.25em]">
      {children}
    </motion.span>
  )
}

"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"
import { experience } from "@/lib/site"
import { Reveal, SectionLabel, SplitWords } from "@/components/motion/primitives"

export function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="experience" className="px-4 pt-32 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="04">Experience</SectionLabel>
        </Reveal>
        <h2 className="mt-8 text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
          <SplitWords text="Where I've" />{" "}
          <span className="font-serif font-normal italic text-accent">
            <SplitWords text="been building." delay={0.15} />
          </span>
        </h2>

        <ol ref={ref} className="relative mt-16 md:ml-[12rem]">
          <span aria-hidden="true" className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-line" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px origin-top bg-accent"
          />
          {experience.map((role, i) => (
            <li key={role.title} className="relative pb-16 pl-8 last:pb-0 md:pl-12">
              <motion.span
                aria-hidden="true"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-30% 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full border-2 border-background bg-accent"
              />
              <Reveal>
                <p className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.1em] text-muted md:absolute md:-left-[12rem] md:top-1.5 md:w-40 md:text-right">
                  {role.period}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight md:mt-0">{role.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  <span className="text-foreground">{role.company}</span> · {role.location}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-foreground/90">{role.summary}</p>
                <ul className="mt-3 max-w-2xl space-y-2">
                  {role.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

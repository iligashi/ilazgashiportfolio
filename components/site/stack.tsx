"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Plus } from "lucide-react"
import { capabilities } from "@/lib/site"
import { Reveal, SectionLabel, SplitWords, ease } from "@/components/motion/primitives"

export function Stack() {
  const [open, setOpen] = useState(0)

  return (
    <section id="stack" className="px-4 pt-32 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="05">Stack</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            <SplitWords text="What I bring" />{" "}
            <span className="font-serif font-normal italic text-accent">
              <SplitWords text="to a team." delay={0.15} />
            </span>
          </h2>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Capabilities, not a list of logos. Each one points to where you can see it in my code.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-line">
          {capabilities.map((cap, i) => {
            const isOpen = open === i
            return (
              <Reveal key={cap.title} delay={i * 0.05}>
                <li className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-6 py-7 text-left"
                  >
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    <span
                      className={`flex-1 text-2xl font-medium tracking-tight transition-colors md:text-4xl ${
                        isOpen ? "text-foreground" : "text-muted group-hover:text-foreground"
                      }`}
                    >
                      {cap.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease }}
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border ${
                        isOpen ? "border-accent bg-accent text-accent-ink" : "border-line-strong"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 pl-10 md:grid-cols-[1.2fr_1fr] md:pl-14">
                          <div>
                            <p className="leading-relaxed text-muted">{cap.description}</p>
                            <p className="mt-4 flex gap-3 text-sm">
                              <span className="font-mono text-xs uppercase tracking-wider text-accent">Proof</span>
                              <span className="text-foreground/90">{cap.proof}</span>
                            </p>
                          </div>
                          <ul className="flex flex-wrap content-start gap-2">
                            {cap.tools.map((tool, t) => (
                              <motion.li
                                key={tool}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + t * 0.04 }}
                                className="rounded-full border border-line-strong bg-surface px-3 py-1.5 font-mono text-xs"
                              >
                                {tool}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

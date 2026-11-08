"use client"

import { motion } from "motion/react"

/**
 * Generated cover art for the Task Manager project (no public demo to screenshot).
 * An abstract, animated Kanban board — clearly an illustration, not a product screenshot.
 */
export function KanbanArt() {
  const columns = [
    { title: "To do", cards: [3, 2, 4] },
    { title: "In progress", cards: [2, 3] },
    { title: "Done", cards: [4, 2, 3] },
  ]
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-surface p-6">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30 mask-radial" />
      <div className="relative grid w-full max-w-md grid-cols-3 gap-3" aria-hidden="true">
        {columns.map((col, c) => (
          <div key={col.title} className="rounded-xl border border-line bg-background/60 p-2.5">
            <div className="mb-2.5 flex items-center gap-1.5 px-1">
              <span className={`h-1.5 w-1.5 rounded-full ${c === 2 ? "bg-accent" : "bg-line-strong"}`} />
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted">{col.title}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((lines, i) => (
                <motion.div
                  key={i}
                  animate={c === 1 && i === 0 ? { x: [0, 8, 0], rotate: [0, 2, 0] } : undefined}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-lg border border-line bg-surface-2 p-2"
                >
                  {Array.from({ length: lines }).map((_, l) => (
                    <div
                      key={l}
                      className="mb-1 h-1 rounded-full bg-line-strong last:mb-0"
                      style={{ width: `${90 - l * 18}%` }}
                    />
                  ))}
                  <div className="mt-2 flex items-center justify-between">
                    <span className="h-3 w-3 rounded-full bg-line-strong" />
                    {c === 2 && <span className="h-1 w-5 rounded-full bg-accent/70" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-wider text-subtle">
        Illustration
      </span>
    </div>
  )
}

"use client"

import { motion } from "motion/react"

/** Hand-drawn system diagram of the Real Estate Marketplace, with animated request flows. */
export function ArchitectureDiagram() {
  const node = "fill-[var(--surface-2)] stroke-[var(--line-strong)]"
  const label = "fill-[var(--foreground)] text-[18px] font-semibold"
  const sub = "fill-[var(--muted)] font-mono text-[12.5px]"
  const flow = "stroke-[var(--accent)] animate-dash"

  const boxes = [
    { x: 24, y: 150, w: 150, h: 80, t: "React SPA", s: "Redux · Query" },
    { x: 250, y: 70, w: 160, h: 70, t: "Express REST", s: "/api · validated" },
    { x: 250, y: 240, w: 160, h: 70, t: "Socket.IO", s: "chat · presence" },
    { x: 486, y: 150, w: 150, h: 80, t: "JWT + RBAC", s: "shared guard" },
    { x: 486, y: 20, w: 150, h: 60, t: "Rate limits", s: "CSRF · sanitise" },
    { x: 486, y: 300, w: 150, h: 60, t: "Cloudinary", s: "uploads" },
    { x: 712, y: 150, w: 130, h: 80, t: "MongoDB", s: "17 models" },
  ]

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-surface p-4">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40 mask-radial" />
      <svg
        viewBox="0 0 866 380"
        className="relative h-auto w-full"
        role="img"
        aria-label="Architecture: React client talks to an Express REST API and a Socket.IO server; both use shared JWT and role middleware, then MongoDB. Uploads go to Cloudinary."
      >
        <g fill="none" strokeWidth="1.5" strokeDasharray="6 6">
          <path className={flow} d="M174 175 C 210 175, 215 105, 250 105" />
          <path className={flow} d="M174 205 C 210 205, 215 275, 250 275" />
          <path className={flow} d="M410 105 C 450 105, 450 180, 486 180" />
          <path className={flow} d="M410 275 C 450 275, 450 200, 486 200" />
          <path className={flow} d="M410 95 C 445 95, 455 50, 486 50" />
          <path className={flow} d="M410 115 C 450 130, 455 320, 486 330" />
          <path className={flow} d="M636 190 L 712 190" />
        </g>
        {boxes.map((b, i) => (
          <motion.g
            key={b.t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          >
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="12" className={node} strokeWidth="1" />
            <text x={b.x + 16} y={b.y + b.h / 2 - 2} className={label}>
              {b.t}
            </text>
            <text x={b.x + 16} y={b.y + b.h / 2 + 18} className={sub}>
              {b.s}
            </text>
          </motion.g>
        ))}
        <circle cx="174" cy="190" r="4" className="fill-[var(--accent)]">
          <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="712" cy="190" r="4" className="fill-[var(--accent)]">
          <animate attributeName="r" values="3;6;3" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

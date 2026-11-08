"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "motion/react"

export function Counter({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = Math.round(v).toString()
      },
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {to}
    </span>
  )
}

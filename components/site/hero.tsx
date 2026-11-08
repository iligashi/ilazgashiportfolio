"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowDownRight, Check, Copy } from "lucide-react"
import { profile } from "@/lib/site"
import { Magnetic, SplitWords, ease } from "@/components/motion/primitives"
import { BrowserFrame } from "@/components/site/browser-frame"

function LocalTime() {
  const [time, setTime] = useState<string>("")
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: profile.timezone })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])
  return <span suppressHydrationWarning>{time || "--:--"}</span>
}

export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(profile.email)
          setCopied(true)
          setTimeout(() => setCopied(false), 1800)
        } catch {
          window.location.href = `mailto:${profile.email}`
        }
      }}
      className={`group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm text-foreground transition-colors hover:border-foreground ${className}`}
    >
      <span className="relative grid h-4 w-4 place-items-center">
        <motion.span animate={{ scale: copied ? 0 : 1, opacity: copied ? 0 : 1 }} className="absolute">
          <Copy className="h-4 w-4" />
        </motion.span>
        <motion.span initial={false} animate={{ scale: copied ? 1 : 0, opacity: copied ? 1 : 0 }} className="absolute text-accent">
          <Check className="h-4 w-4" />
        </motion.span>
      </span>
      <span aria-live="polite">{copied ? "Copied to clipboard" : profile.email}</span>
    </button>
  )
}

const chips = [
  { label: "Socket.IO live chat", dot: true, className: "left-[-4%] top-[18%]", depth: -60 },
  { label: "10 API test suites in CI", className: "right-[-3%] top-[8%]", depth: -110 },
  { label: "5 roles · RBAC", className: "right-[6%] bottom-[14%]", depth: -40 },
]

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ["start end", "center center"] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [28, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1])
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.7])
  const chipY = [
    useTransform(scrollYProgress, [0, 1], [0, chips[0].depth]),
    useTransform(scrollYProgress, [0, 1], [0, chips[1].depth]),
    useTransform(scrollYProgress, [0, 1], [0, chips[2].depth]),
  ]

  return (
    <section id="top" className="relative overflow-hidden pt-36 md:pt-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/60 py-1.5 pl-2 pr-4 text-xs text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to full-stack roles · remote or Prishtina
        </motion.div>

        <h1 className="text-[clamp(2.75rem,8.5vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          <SplitWords text="Full-stack engineer" animateOnMount delay={0.4} />
          <br />
          <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.03em] text-accent">
            <SplitWords text="who ships the whole product." animateOnMount delay={0.65} />
          </span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.1 }}
            className="max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            I&apos;m <span className="text-foreground">Ilaz Gashi</span>. I build complete web products: React and Next.js
            interfaces, Node APIs, PostgreSQL and MongoDB data, real-time features, and the tests and CI that keep them
            shipping.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.25 }}
            className="flex flex-wrap items-center gap-3 md:justify-end"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-shadow hover:shadow-[0_0_40px_-6px_var(--accent)]"
              >
                See the flagship build
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-45deg]" />
              </a>
            </Magnetic>
            <CopyEmail />
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-14 grid grid-cols-2 gap-y-4 border-t border-line pt-6 font-mono text-xs md:grid-cols-4"
        >
          {[
            ["Based in", profile.location],
            ["Local time", <LocalTime key="t" />],
            ["Currently", "Nexora Agency"],
            ["Focus", "TypeScript · Node · SQL"],
          ].map(([k, v], i) => (
            <div key={i}>
              <dt className="uppercase tracking-[0.18em] text-subtle">{k}</dt>
              <dd className="mt-1.5 text-foreground">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div ref={visualRef} className="relative mx-auto mt-20 max-w-6xl px-4 pb-10 [perspective:1400px] md:mt-24">
        <motion.div
          style={{ rotateX, scale, transformOrigin: "50% 0%" }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.3 }}
          className="relative"
        >
          <motion.div
            aria-hidden="true"
            style={{ opacity: glow }}
            className="absolute -inset-x-10 -bottom-10 top-10 -z-10 rounded-[40px] bg-accent/25 blur-[90px]"
          />
          <a href="#work" aria-label="Jump to the Real Estate Marketplace case study">
            <BrowserFrame url="realestate-orpin-eight-16.vercel.app">
              <Image
                src="/realestate-home.png"
                alt="Real Estate Marketplace home page with property search"
                width={1440}
                height={900}
                priority
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="h-auto w-full"
              />
            </BrowserFrame>
          </a>
          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              style={{ y: chipY[i] }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: 1.8 + i * 0.15 }}
              className={`absolute hidden items-center gap-2 rounded-full border border-line-strong bg-background/80 px-4 py-2 font-mono text-xs shadow-xl backdrop-blur-md md:flex ${chip.className}`}
            >
              {chip.dot && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
              {chip.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

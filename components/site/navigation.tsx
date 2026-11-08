"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { navItems, profile } from "@/lib/site"
import { ease } from "@/components/motion/primitives"

export function Navigation() {
  const [active, setActive] = useState<string>("")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border py-2 pl-5 pr-2 transition-all duration-500 ${
            scrolled ? "border-line-strong bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl" : "border-transparent"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2.5" aria-label={`${profile.name}, home`}>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent font-mono text-[11px] font-bold text-accent-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              IG
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:inline">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`/#${item.id}`}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm transition-colors ${
                    active === item.id ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2 ring-1 ring-line-strong"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="group hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-ink sm:inline-flex"
            >
              Hire me
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line-strong md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-surface px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease }}
                >
                  <a
                    href={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2 text-5xl font-medium tracking-tight"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={`mailto:${profile.email}`} className="font-mono text-sm text-muted">
              {profile.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

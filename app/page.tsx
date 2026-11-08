import { Navigation } from "@/components/site/navigation"
import { Hero } from "@/components/site/hero"
import { StackMarquee } from "@/components/site/marquee"
import { Flagship } from "@/components/site/flagship"
import { WorkGrid } from "@/components/site/work-grid"
import { About } from "@/components/site/about"
import { Experience } from "@/components/site/experience"
import { Stack } from "@/components/site/stack"
import { Contact } from "@/components/site/contact"

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to work
      </a>
      <Navigation />
      <main>
        <Hero />
        <div className="mt-16">
          <StackMarquee />
        </div>
        <Flagship />
        <WorkGrid />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </>
  )
}

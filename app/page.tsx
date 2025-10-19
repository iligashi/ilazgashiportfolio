import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

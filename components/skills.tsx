"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Wrench, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "MongoDB", "SQL", "PostgreSQL", "REST APIs", "Express.js"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "npm", "Webpack", "Responsive Design"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication", "Teamwork", "Leadership", "Time Management", "Problem Solving", "Decision Making"],
  },
]

export function Skills() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index))
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="skills" className="py-20 lg:py-32 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-accent">{"<skills>"}</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`border-border hover:border-accent transition-all duration-500 group ${
                  visibleCards.has(index) ? "animate-slide-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-accent transition-colors duration-300">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 text-sm rounded-md bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default hover:scale-110 hover:-translate-y-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="flex items-center gap-4 mt-12">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-sm text-accent">{"</skills>"}</span>
        </div>
      </div>
    </section>
  )
}

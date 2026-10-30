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
  return (
    <section id="skills" className="bg-card/20 px-4 py-28 lg:py-40">
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
                className="group border-border/80 bg-card/60 transition-colors duration-300 hover:border-accent/50"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="rounded-lg border border-border bg-background/50 p-2 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="cursor-default rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
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

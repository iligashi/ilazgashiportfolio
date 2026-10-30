"use client"

import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    type: "work",
    title: "Junior General Tech Engineer",
    company: "Digital School / Shkolla Digjitale",
    location: "Prishtine",
    period: "November 2024 - Present",
    description: [
      "Maintain and optimize classroom technology infrastructure including computers, networks, and digital learning platforms",
      "Support educators and students with technical issues and troubleshoot software problems",
      "Collaborate on implementing new tech solutions to improve the learning experience",
      "Manage basic IT administrative tasks and ensure smooth operation of digital tools",
    ],
  },
]

const education = [
  {
    type: "education",
    title: "Computer Science and Engineering",
    company: "UBT - University for Business and Technology",
    location: "Prishtine",
    period: "October 2022 - June 2025",
    description: [
      "Studied core areas including programming, algorithms, data structures, databases, and software engineering",
      "Gained hands-on experience through practical labs, group projects, and real-world applications",
      "Worked with modern technologies such as Java, Python, and web development tools",
      "Completed capstone project focused on solving real-world problems using software engineering principles",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 py-28 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-accent">{"<experience>"}</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Experience & <span className="text-accent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            My professional journey and academic background in technology
          </p>
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="group border-border/80 bg-card/60 transition-colors duration-300 hover:border-accent/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      {" • "}
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-accent mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="group border-border/80 bg-card/60 transition-colors duration-300 hover:border-accent/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">{edu.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{edu.period}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{edu.company}</span>
                      {" • "}
                      {edu.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-accent mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-sm text-accent">{"</experience>"}</span>
        </div>
      </div>
    </section>
  )
}

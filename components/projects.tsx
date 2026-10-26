"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Real Estate Marketplace",
    description:
      "Full-stack property marketplace with role-based accounts, property listings, search, and real-time messaging.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/iligashi/realestate",
    demo: "",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Task Manager",
    description: "Collaborative task manager with team workspaces, Kanban boards, tasks, comments, and file attachments.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com/iligashi/Task-Manager.git",
    demo: "",
    image: "/task-management-kanban.png",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and interactive data visualizations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "API"],
    github: "https://github.com/iligashi/WeatherDashboard.git",
    demo: "https://weatherdashboard-navy.vercel.app/",
    image: "/weather-dashboard-interface.png",
  },
  {
    title: "Poliklinika Website",
    description: "Book appointments, explore medical services, and connect with trusted doctors at Poliklinikaa",
    tags: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/iligashi/Poliklinika.git",
    demo: "https://poliklinikaa.netlify.app/",
    image: "/poliklinika.png",
  },
  {
    title: "Programuesi i Veturave",
    description: "A responsive site for Programuesi i Veturave, a vehicle programming and customization service.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", ],
    github: "https://github.com/iligashi/Programusi-i-Veturave-.git",
    demo: "https://programuesiiveturave.netlify.app/",
    image: "/programuesi.png",
  },
  {
    title: "Fluks Dekor",
    description: "A full-stack e-commerce platform selling furniture, decorations, and tools across Kosovo. Features product management with an admin panel, shopping cart, wishlist, order tracking, sale/new/best-seller sections, and fast 24-48h delivery.",
    tags: ["React.js", "Node/Express.js", "Tailwind CSS", "PostgreSQL", "Godaddy"],
    github: "https://github.com/iligashi/MoblieriaDardania",
    demo: "https://flux-dekor.com/",
    image: "/dlux.png",
  },
  {
    title: "Nobel Venues",
    description: "A sleek landing page for Nobel Venues, a luxury event hosting company. Showcasing elegant venue spaces, event services, and a refined user experience designed to attract premium clientele.",
    tags: ["React.js", "Tailwind CSS"],
    github: "https://github.com/iligashi/Nobel",
    demo: "https://nobelvenues.netlify.app/",
    image: "/nobel.png",
  },
  {
    title: "74 Lounge Bar",
    description: "A full-stack system for 74 Lounge Bar featuring an online ordering system, real-time messaging, table reservation, and a comprehensive admin panel to manage all operations seamlessly.",
    tags: ["Next.js", "Node/Express.js", "SQL", "Railway"],
    github: "https://github.com/iligashi/74-lounge-bar",
    demo: "https://74loungebar.netlify.app/",
    image: "/74.png",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section id="projects" className="py-20 lg:py-32 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-accent">{"<projects>"}</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A collection of my recent work showcasing full-stack development skills and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`group overflow-hidden border-border hover:border-accent transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 ${
                visibleCards.has(index) ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className={`border-accent/50 hover:bg-accent hover:text-accent-foreground bg-transparent transition-all duration-300 hover:scale-105 ${project.demo ? "flex-1" : "w-full"}`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className={`bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-105 ${project.github ? "flex-1" : "w-full"}`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-12">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-sm text-accent">{"</projects>"}</span>
        </div>
      </div>
    </section>
  )
}

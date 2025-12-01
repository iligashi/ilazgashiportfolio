"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, product management, and user authentication.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    github: "https://github.com/iligashi/realestate",
    demo: "https://github.com/iligashi/realestate",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/iligashi/Task-Manager.git",
    demo: "https://github.com/iligashi/Task-Manager.git",
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
    title: "Social Media Analytics",
    description: "Analytics dashboard for tracking social media metrics with real-time data visualization.",
    tags: ["Next.js", "Chart.js", "MongoDB", "REST API"],
    github: "#",
    demo: "#",
    image: "/analytics-dashboard-charts.png",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for portfolio websites with drag-and-drop interface.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/iligashi/Portfolio-CMS.git",
    demo: "portfoliocms-ili.vercel.app",
    image: "/cms-content-editor.png",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness tracking app with workout plans and progress monitoring.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "#",
    demo: "#",
    image: "/fitness-tracker-mobile-app.jpg",
  },
  {
    title: "Portfolio ",
    description: "A modern, responsive portfolio built by Ilaz Gashi, showcasing expertise in full-stack web development using React, Next.js, TypeScript, and MongoDB. Designed with clean UI/UX principles",
    tags: ["Next.js", "TypeScript", "Tailwind CSS",],
    github: "https://github.com/iligashi/ilazgashiportfolio.git",
    demo: "https://ilazgashi.vercel.app/",
    image: "/portfolio.png",
  },
  {
    title: "Poliklinika Website",
    description: "Book appointments, explore medical services, and connect with trusted doctors at Poliklinikaa",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/iligashi/Poliklinika.git",
    demo: "https://poliklinikaa.netlify.app/ ",
    image: "/poliklinika.png",
  },
  {
    title: "Programuesi i Veturave",
    description: "Programuesi i Veturave program your car with our advanced vehicle programming services. From diagnostics to customizations, we enhance your driving experience.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", ],
    github: "https://github.com/iligashi/Programusi-i-Veturave-.git",
    demo: "https://programuesiiveturave.netlify.app/ ",
    image: "/programuesi.png",
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/50 hover:bg-accent hover:text-accent-foreground bg-transparent transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
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

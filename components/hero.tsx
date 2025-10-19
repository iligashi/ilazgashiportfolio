"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => setShowTypewriter(true), 800)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <div className={`flex items-center gap-4 ${mounted ? "animate-scale-in" : "opacity-0"}`}>
            <span className="font-mono text-sm text-muted-foreground">01</span>
            <div className="h-px w-12 bg-accent animate-glow" />
          </div>

          <div className={`space-y-4 ${mounted ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-muted-foreground font-mono">{"<"}</span>
              Hello, I'm <span className="text-accent animate-glow">Ilaz Gashi</span>
              <span className="text-muted-foreground font-mono">{" />"}</span>
            </h1>
          </div>

          <div
            className={`flex items-center gap-4 ${mounted ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="font-mono text-sm text-muted-foreground">02</span>
            <div className="h-px w-12 bg-accent animate-glow" />
          </div>

          <div className="space-y-4 min-h-[200px] flex flex-col items-center justify-center">
            {showTypewriter && (
              <>
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance typewriter inline-block border-accent">
                  <span className="text-muted-foreground font-mono">{"<"}</span>I{" "}
                  <span className="text-accent">build</span> and <span className="text-accent">design</span>
                  <span className="text-muted-foreground font-mono">{" />"}</span>
                </p>
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance typewriter-line-2 inline-block border-accent">
                  <span className="text-muted-foreground font-mono">{"<"}</span>
                  modern web applications
                  <span className="text-muted-foreground font-mono">{" />"}</span>
                </p>
              </>
            )}
          </div>

          <div
            className={`flex items-center gap-4 ${mounted ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <span className="font-mono text-sm text-muted-foreground">03</span>
            <div className="h-px w-12 bg-accent animate-glow" />
          </div>

          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl text-balance ${mounted ? "animate-rotate-in" : "opacity-0"}`}
            style={{ animationDelay: "5s" }}
          >
            Full-stack developer specializing in <span className="text-accent font-semibold">React</span>,{" "}
            <span className="text-accent font-semibold">TypeScript</span>, and{" "}
            <span className="text-accent font-semibold">Next.js</span>. Passionate about creating clean, responsive, and
            user-friendly web experiences.
          </p>

          <div
            className={`flex flex-wrap items-center justify-center gap-4 mt-4 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "5.5s" }}
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-smooth hover-lift hover-glow"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent transition-smooth hover-lift"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>

          <div className={`flex items-center gap-4 mt-8 ${mounted ? "opacity-100" : "opacity-0"}`}>
            <a
              href="https://github.com/iligashi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-accent hover:text-accent-foreground transition-smooth hover:scale-110 hover-glow animate-fade-in-up"
              style={{ animationDelay: "6s" }}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ilaz-gashi-a2b868259"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-accent hover:text-accent-foreground transition-smooth hover:scale-110 hover-glow animate-fade-in-up"
              style={{ animationDelay: "6.2s" }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ilazgashi258@gmail.com"
              className="p-3 rounded-lg bg-card hover:bg-accent hover:text-accent-foreground transition-smooth hover:scale-110 hover-glow animate-fade-in-up"
              style={{ animationDelay: "6.4s" }}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToProjects}
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${mounted ? "opacity-100" : "opacity-0"} transition-smooth hover:scale-125`}
            style={{ animationDelay: "6.5s" }}
          >
            <ArrowDown className="w-6 h-6 text-accent" />
          </button>
        </div>
      </div>
    </section>
  )
}

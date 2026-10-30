"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
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
    <section id="contact" className="py-20 lg:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-accent">{"<contact>"}</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Let&apos;s build something <span className="text-accent">useful.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have a product idea, a web experience to improve, or a team looking for a thoughtful engineer? Tell me what
            you&apos;re working on and let&apos;s start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card
            ref={(el) => {
              cardRefs.current[0] = el
            }}
            className={`border-border hover:border-accent transition-all duration-500 group hover:shadow-lg hover:shadow-accent/20 ${
              visibleCards.has(0) ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "0s" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>For product ideas and collaboration</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:ilazgashi258@gmail.com"
                className="text-accent hover:underline font-mono text-sm transition-all duration-300 hover:text-accent/80"
              >
                ilazgashi258@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card
            ref={(el) => {
              cardRefs.current[1] = el
            }}
            className={`border-border hover:border-accent transition-all duration-500 group hover:shadow-lg hover:shadow-accent/20 ${
              visibleCards.has(1) ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                  <CardDescription>Give me a call</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+38349732127"
                className="text-accent hover:underline font-mono text-sm transition-all duration-300 hover:text-accent/80"
              >
                +383 49 732 127
              </a>
            </CardContent>
          </Card>

          <Card
            ref={(el) => {
              cardRefs.current[2] = el
            }}
            className={`border-border hover:border-accent transition-all duration-500 group hover:shadow-lg hover:shadow-accent/20 ${
              visibleCards.has(2) ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Location</CardTitle>
                  <CardDescription>Where I'm based</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Prishtina, Kosovo
              </p>
            </CardContent>
          </Card>

          <Card
            ref={(el) => {
              cardRefs.current[3] = el
            }}
            className={`border-border hover:border-accent transition-all duration-500 group hover:shadow-lg hover:shadow-accent/20 ${
              visibleCards.has(3) ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Social</CardTitle>
                  <CardDescription>Connect with me</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <a
                  href="https://github.com/iligashi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ilaz-gashi-a2b868259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            asChild
          >
            <a href="mailto:ilazgashi258@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-sm text-accent">{"</contact>"}</span>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-accent">Next.js</span>, <span className="text-accent">TypeScript</span>,
            and <span className="text-accent">Tailwind CSS</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Ilaz Gashi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

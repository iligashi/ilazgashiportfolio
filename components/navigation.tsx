"use client"

import { useState, useEffect } from "react"
import { Home, Briefcase, Code2, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-mono text-lg lg:text-xl font-bold text-accent hover:text-accent/80 transition-colors"
            >
              {"<IG />"}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 text-2xl text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="w-6 h-6" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-3 text-2xl text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code2 className="w-6 h-6" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="flex items-center gap-3 text-2xl text-muted-foreground hover:text-foreground transition-colors"
            >
              <Briefcase className="w-6 h-6" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-3 text-2xl text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

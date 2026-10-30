"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/project-modal"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
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
        aria-label="Primary navigation"
        className="fixed left-1/2 top-3 z-50 w-full max-w-7xl -translate-x-1/2 px-4"
      >
        <div
          className={`rounded-full border px-5 py-3 transition-colors duration-300 md:px-7 ${
            isScrolled
              ? "border-border/80 bg-background/90 shadow-md backdrop-blur-xl"
              : "border-transparent bg-background/30 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              aria-label="Ilaz Gashi — home"
              className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
            >
              {"<IG/>"}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Contact
              </button>
              <Button
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="rounded-full px-5"
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls={isMobileMenuOpen ? "mobile-navigation" : undefined}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

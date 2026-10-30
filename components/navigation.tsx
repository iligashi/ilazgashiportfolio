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
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 transition-all duration-300">
        <div className={`${isScrolled ? "bg-card rounded-full shadow-2xl border border-border" : "bg-transparent rounded-none shadow-none border-none"} px-6 lg:px-8 py-4 transition-all duration-300`}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg lg:text-xl font-bold text-foreground hover:text-accent transition-colors tracking-tight"
            >
              {"<IG/>"}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                Contact
              </button>
              <Button
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6"
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

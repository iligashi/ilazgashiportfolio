"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function About() {
  const skills = [
    "React",
    "Next.js", 
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "Bootstrap"
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 lg:py-32 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-10 lg:space-y-10">
            {/* Who I Am Section */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                Who I Am
              </h3>
              <div className="w-16 h-1 bg-accent mb-6 rounded-full group-hover:w-24 transition-all duration-300" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I'm Ilaz Gashi, a passionate Junior General Tech Engineer transitioning into full-stack web development. I specialize in building clean, efficient, and responsive web applications using modern technologies like React, Next.js, TypeScript, and Node.js. With a strong foundation in both frontend and backend development, I strive to turn complex ideas into seamless digital experiences that users love.
              </p>
            </div>

            {/* My Expertise Section */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                My Expertise
              </h3>
              <div className="w-16 h-1 bg-accent mb-6 rounded-full group-hover:w-24 transition-all duration-300" />
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-border hover:border-accent cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Center - Image (Mobile) */}
          <div className="flex items-center justify-center my-12 lg:hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
            </div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/ili1.png"
                alt="Ilaz Gashi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Center - Image (Desktop) */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl" />
            </div>
            <div className="relative w-96 h-96 rounded-full overflow-hidden">
              <Image
                src="/ili1.png"
                alt="Ilaz Gashi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* My Approach Section */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                My Approach
              </h3>
              <div className="w-16 h-1 bg-accent mb-6 rounded-full group-hover:w-24 transition-all duration-300" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I believe in learning through building — solving real-world problems with creativity and precision. Every project is an opportunity to grow, collaborate, and create value. My focus is on developing scalable, maintainable, and user-centered solutions that not only meet but exceed expectations.
              </p>
            </div>

            {/* Let's Work Together Section */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                Let's Work Together
              </h3>
              <div className="w-16 h-1 bg-accent mb-6 rounded-full group-hover:w-24 transition-all duration-300" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                Whether you're looking to build a new app, improve an existing project, or bring your ideas to life on the web, I'm here to help make it happen. Let's collaborate and turn your vision into reality.
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

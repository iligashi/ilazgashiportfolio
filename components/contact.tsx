import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">Start a conversation</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-10 rounded-2xl border border-border bg-card/60 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Available for product-focused frontend and full-stack roles
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Let&apos;s build something <span className="text-accent">useful.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m looking for product work where thoughtful UX and solid engineering matter. If you&apos;re
              building a web product or improving an existing experience, I&apos;d like to hear about it.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:ilazgashi258@gmail.com">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <a
              href="mailto:ilazgashi258@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ilazgashi258@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-b border-border py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              Prishtina, Kosovo
            </span>
            <a
              href="tel:+38349732127"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              +383 49 732 127
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/iligashi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ilaz Gashi on GitHub"
              className="rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/ilaz-gashi-a2b868259"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ilaz Gashi on LinkedIn"
              className="rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <footer className="flex flex-col gap-2 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Designed and built by Ilaz Gashi.</p>
          <p>© {new Date().getFullYear()} Ilaz Gashi</p>
        </footer>
      </div>
    </section>
  )
}

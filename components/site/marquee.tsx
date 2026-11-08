import { stackMarquee } from "@/lib/site"

export function StackMarquee() {
  const items = [...stackMarquee, ...stackMarquee]
  return (
    <div className="relative overflow-hidden border-y border-line py-6 mask-fade-x" aria-label="Technologies I work with">
      <ul className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= stackMarquee.length}
            className="flex items-center gap-12 whitespace-nowrap text-2xl font-medium tracking-tight text-subtle transition-colors hover:text-foreground md:text-3xl"
          >
            {item}
            <span className="text-accent" aria-hidden="true">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

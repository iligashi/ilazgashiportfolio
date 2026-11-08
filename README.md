## Ilaz Gashi — Portfolio

Personal site for Ilaz Gashi, full-stack engineer. Live at [ilazgashi.vercel.app](https://ilazgashi.vercel.app).

The page leads with the **Real Estate Marketplace** as a flagship case study, told as a scroll-driven story with
real product screenshots and an animated architecture diagram. After it come a grid of other shipped work,
experience, capabilities and contact. Every project image is a screenshot of the live site. The Task Manager has no
public demo, so it uses generated cover art that is clearly labelled as an illustration.

### Stack

- Next.js 15 (App Router, static generation) and React 19
- Tailwind CSS v4 with design tokens in `app/globals.css`
- [Motion](https://motion.dev) for scroll-linked and entrance animations, respecting `prefers-reduced-motion`
- Geist Sans/Mono and Instrument Serif
- A generated Open Graph image (`app/opengraph-image.tsx`)

### Structure

| Path | Purpose |
|---|---|
| `lib/site.ts` | Profile, experience, capabilities and stack content |
| `lib/projects.ts` | Projects and case-study content |
| `components/site/*` | Page sections (hero, flagship, work grid, about, experience, stack, contact) |
| `components/motion/primitives.tsx` | Reusable animation primitives (Reveal, SplitWords, Magnetic, spotlight) |
| `app/projects/[slug]` | Case-study pages |

### Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Run `pnpm build` for a production build and `pnpm typecheck`
for a type check.

import Link from "next/link"

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 text-6xl font-semibold tracking-[-0.04em] md:text-8xl">
          Nothing <span className="font-serif font-normal italic text-accent">here.</span>
        </h1>
        <Link href="/" className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
          Back home
        </Link>
      </div>
    </main>
  )
}

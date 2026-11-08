import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-sm flex-1 items-center justify-center gap-1.5 rounded-md bg-background/60 px-3 py-1 font-mono text-[11px] text-muted">
          <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 fill-current" aria-hidden="true">
            <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5H6V4.5a2 2 0 1 1 4 0V6Z" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
        <span className="w-12" aria-hidden="true" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

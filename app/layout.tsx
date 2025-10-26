import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"
import "@fontsource/roboto-mono/400.css"
import "@fontsource/roboto-mono/700.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ilaz Gashi - Full-Stack Developer",
  description:
    "Portfolio of Ilaz Gashi - Junior General Tech Engineer specializing in React, TypeScript, Next.js, and modern web development",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased" style={{ fontFamily: '"Roboto", "Roboto Mono", sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Poppins, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ilaz Gashi - Full-Stack Developer",
  description:
    "Portfolio of Ilaz Gashi - Junior General Tech Engineer specializing in React, TypeScript, Next.js, and modern web development",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

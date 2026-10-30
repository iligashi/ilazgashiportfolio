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
  title: {
    default: "Ilaz Gashi — Product-minded Full-stack Developer",
    template: "%s | Ilaz Gashi",
  },
  description:
    "Ilaz Gashi is a product-minded full-stack developer in Prishtina, Kosovo, building thoughtful web experiences with React, Next.js, TypeScript, and Node.js.",
  openGraph: {
    title: "Ilaz Gashi — Product-minded Full-stack Developer",
    description:
      "Thoughtful product experiences, practical engineering, and selected web projects by Ilaz Gashi.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/fav.png",
  },
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

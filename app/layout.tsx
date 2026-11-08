import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/site/providers"
import { profile } from "@/lib/site"
import "./globals.css"

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const description =
  "Ilaz Gashi is a full-stack engineer in Prishtina, Kosovo, building complete web products with TypeScript, React, Next.js, Node.js, PostgreSQL and MongoDB."

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: "Ilaz Gashi — Full-stack Engineer",
    template: "%s · Ilaz Gashi",
  },
  description,
  openGraph: {
    title: "Ilaz Gashi — Full-stack Engineer",
    description,
    url: profile.site,
    siteName: "Ilaz Gashi",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "Ilaz Gashi — Full-stack Engineer", description },
  icons: { icon: "/fav.png" },
}

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}>
      <body className="grain font-sans">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}

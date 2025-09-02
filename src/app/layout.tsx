import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Visual Kreasi - Creative Studio",
  description:
    "A small team with mighty impact. We are a group of passionate creatives mastering the art of digital alchemy.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  )
}

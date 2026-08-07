import React from "react"
import { Analytics } from "@vercel/analytics/next"
import { MobileNav } from "@/components/mobile-nav"
import "./globals.css"

export const metadata = {
  metadataBase: new URL("https://thesecondhomehostel.com"),
  title: "The Second Home Hostel | Student Hostel Near UVAS",
  description:
    "A safe, comfortable, and affordable hostel in Gunj Bakhsh, near UVAS. Furnished two-seater and three-seater rooms, attached washrooms, and a student-friendly environment. Book directly on WhatsApp.",
  keywords: [
    "The Second Home Hostel",
    "hostel near UVAS",
    "Gunj Bakhsh hostel",
    "student hostel Lahore",
    "affordable hostel Lahore",
  ],
  authors: [{ name: "The Second Home Hostel" }],
  openGraph: {
    title: "The Second Home Hostel | Premium Student Hostel Near UVAS",
    description:
      "Safe, comfortable, and affordable rooms in Gunj Bakhsh, near UVAS. Book your room directly on WhatsApp.",
    type: "website",
    url: "https://thesecondhomehostel.com",
    siteName: "The Second Home Hostel",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Second Home Hostel | Student Hostel Near UVAS",
    description:
      "Safe, comfortable, and affordable rooms in Gunj Bakhsh, near UVAS. Book your room directly on WhatsApp.",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        <MobileNav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

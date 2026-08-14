import React from "react"
import { Analytics } from "@vercel/analytics/next"
import { MobileNav } from "@/components/mobile-nav"
import "./globals.css"

export const metadata = {
  metadataBase: new URL("https://thesecondhomehostel.com"),
  title: "The Second Home Boys Hostel | Student Hostel Near UVAS Lahore",
  description:
    "A safe, comfortable, and affordable boys hostel in Gunj Baksh Town, Lahore near UVAS. Furnished two-seater and three-seater rooms, high-speed Wi-Fi, and a student-friendly environment. Book directly on WhatsApp or Call +923032518181.",
  keywords: [
    "The Second Home Boys Hostel",
    "hostel near UVAS Lahore",
    "Gunj Baksh Town Lahore hostel",
    "student hostel Lahore",
    "affordable boys hostel Lahore",
  ],
  authors: [{ name: "The Second Home Boys Hostel" }],
  openGraph: {
    title: "The Second Home Boys Hostel | Premium Student Hostel Near UVAS Lahore",
    description:
      "Safe, comfortable, and affordable rooms in Gunj Baksh Town, Lahore near UVAS. Book your room directly on WhatsApp or call +923032518181.",
    type: "website",
    url: "https://thesecondhomehostel.com",
    siteName: "The Second Home Boys Hostel",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Second Home Boys Hostel | Student Hostel Near UVAS Lahore",
    description:
      "Safe, comfortable, and affordable rooms in Gunj Baksh Town, Lahore near UVAS. Book your room directly on WhatsApp or call +923032518181.",
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

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, MessageCircle } from "lucide-react"
import { site, navLinks } from "@/lib/site-config"

const NAV_STYLE = {
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  background: "rgba(245,244,240,0.92)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)",
}

function NavItem({ link, pathname, onClick, className }) {
  const isHome = pathname === "/"
  const isHash = link.href.startsWith("#")

  if (isHash) {
    if (isHome) {
      return (
        <a
          href={link.href}
          className={className}
          onClick={(e) => {
            e.preventDefault()
            onClick?.()
            const id = link.href.slice(1)
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          {link.label}
        </a>
      )
    } else {
      return (
        <Link href={`/${link.href}`} className={className} onClick={onClick}>
          {link.label}
        </Link>
      )
    }
  }

  if (link.href === "/" && isHome) {
    return (
      <a
        href="/"
        className={className}
        onClick={(e) => {
          e.preventDefault()
          onClick?.()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {link.label}
    </Link>
  )
}

export function MobileNav() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [open, setOpen] = useState(false)

  // Auto-close menu when navigating pages
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const close = () => setOpen(false)

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl">
        {/* Main Bar */}
        <nav
          className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-black/[0.08]"
          style={NAV_STYLE}
        >
          {/* Logo */}
          {isHome ? (
            <a
              href="/"
              className="text-xs sm:text-sm tracking-wide text-black font-bold uppercase shrink-0 flex items-center gap-1.5"
              onClick={(e) => {
                e.preventDefault()
                close()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse inline-block" />
              <span className="truncate max-w-[200px] sm:max-w-none">{site.name}</span>
            </a>
          ) : (
            <Link
              href="/"
              onClick={close}
              className="text-xs sm:text-sm tracking-wide text-black font-bold uppercase shrink-0 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse inline-block" />
              <span className="truncate max-w-[200px] sm:max-w-none">{site.name}</span>
            </Link>
          )}

          {/* Desktop Navigation Links */}
          <div
            className="hidden md:flex items-center gap-6"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {navLinks.map((l) => (
              <NavItem
                key={l.label}
                link={l}
                pathname={pathname}
                className="text-[12px] font-medium text-black/70 hover:text-black transition-colors duration-200 tracking-wide"
              />
            ))}
          </div>

          {/* Desktop Actions (Call + WhatsApp) */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`tel:${site.phoneRaw}`}
              className="text-[11px] font-semibold px-3.5 py-2 rounded-xl border border-black/10 text-black/80 bg-white/80 hover:bg-white hover:border-black/25 transition-all duration-200 tracking-wide flex items-center gap-1.5 shrink-0"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold px-4 py-2 rounded-xl border border-emerald-600/30 text-emerald-700 bg-emerald-50/90 hover:bg-emerald-100 hover:text-emerald-800 transition-all duration-200 tracking-wide flex items-center gap-1.5 shrink-0"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              BOOK ON WHATSAPP
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`tel:${site.phoneRaw}`}
              className="p-2 rounded-xl bg-black/[0.04] text-black hover:bg-black/[0.08] transition-colors"
              aria-label="Call hostel"
            >
              <Phone className="w-4 h-4 text-amber-600" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-xl hover:bg-black/[0.04] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-[1.5px] bg-black/80 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-[1.5px] bg-black/80 transition-all duration-300"
                style={{
                  width: "18px",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block h-[1.5px] bg-black/80 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        <div
          className="md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: open ? "420px" : "0px",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <div
            className="rounded-2xl border border-black/[0.08] px-3 py-3 flex flex-col gap-1 shadow-xl"
            style={NAV_STYLE}
          >
            {navLinks.map((l) => (
              <NavItem
                key={l.label}
                link={l}
                pathname={pathname}
                onClick={close}
                className="px-4 py-2.5 text-sm font-medium text-black/75 hover:text-black hover:bg-black/[0.04] rounded-xl transition-colors tracking-wide"
              />
            ))}
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-black/[0.06]">
              <a
                href={`tel:${site.phoneRaw}`}
                onClick={close}
                className="px-3 py-2.5 text-xs font-semibold text-black bg-white border border-black/10 rounded-xl transition-colors tracking-wide text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                Call {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappLinkWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="px-3 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-xl transition-colors tracking-wide text-center border border-emerald-600/20 flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { MapPin, Phone, MessageCircle, Home, ShieldAlert, HelpCircle, FileText, ArrowRight } from "lucide-react"
import { site, navLinks, footerImportantLinks } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-[#faf9f6]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 text-amber-700">
                <Home className="h-4 w-4" />
              </span>
              <span className="font-display text-lg font-semibold text-[#111]">{site.name}</span>
            </Link>
            <p className="text-sm text-black/60 leading-relaxed max-w-sm">
              {site.description}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-black/50 font-medium">
              <MapPin className="h-3.5 w-3.5 text-amber-600 shrink-0" />
              <span>Gunj Baksh Town, Lahore — Near UVAS, GCU &amp; UOE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#111]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-black/65 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links (Hostel Rules, FAQ, Privacy Policy) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#111]">
              Important Links
            </h4>
            <ul className="space-y-2.5">
              {footerImportantLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-black/65 hover:text-black hover:font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#111]">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-black/65">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-600 shrink-0" />
                <a
                  href="https://maps.google.com/?q=40+Rattigan+Road+Gunj+Baksh+Town+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  {site.location.line1}
                  <br />
                  {site.location.line2}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-600 shrink-0" />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-black transition-colors font-medium">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <a
                  href={site.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors font-medium"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 pt-6">
          <p className="text-xs text-black/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-black/50">
            <Link href="/hostel-rules" className="hover:text-black transition-colors">
              Hostel Rules
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-black transition-colors">
              FAQ
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

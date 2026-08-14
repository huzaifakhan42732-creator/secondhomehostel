import { MapPin, Phone, MessageCircle, Clock, Sparkles, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { PrismBackground } from "@/components/prism-background"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "Contact Us | The Second Home Boys Hostel Lahore",
  description:
    "Get in touch with The Second Home Boys Hostel in Gunj Baksh Town, Lahore near UVAS. Call +923032518181 or message us on WhatsApp to book your room.",
}

const details = [
  {
    icon: MapPin,
    label: "Hostel Location",
    value: `${site.location.line1}, ${site.location.line2}`,
    href: "https://maps.google.com/?q=40+Rattigan+Road+Gunj+Baksh+Town+Lahore",
    color: "#f59e0b",
    bg: "#fef3c7",
  },
  {
    icon: Phone,
    label: "Phone / Call",
    value: site.phoneDisplay,
    href: `tel:${site.phoneRaw}`,
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Booking",
    value: site.phoneDisplay,
    href: site.whatsappLinkWithMessage,
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    icon: Clock,
    label: "Resident Assistance",
    value: "Open 24/7 for resident support & calls in Lahore",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-white text-[#111] min-h-screen font-sans antialiased">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <PrismBackground />

        {/* Soft overlay */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,252,248,0.90) 50%, rgba(255,255,255,0.95) 100%)",
          }}
        />

        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5" />
              Contact Us • Lahore
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-[#111]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              Let's get you
              <br className="hidden sm:block" />{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                moved in
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
              Have a question about room availability, pricing, or scheduling a visit to {site.name} in Gunj Baksh Town, Lahore? Reach out to us — we usually reply within minutes on WhatsApp or phone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT CARD ─────────────────────────────────────────────────── */}
      <section className="relative pb-28 overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #10b981, transparent 70%)", filter: "blur(80px)" }}
        />

        <div className="mx-auto max-w-3xl px-4 relative z-10">
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-white border border-black/[0.08] shadow-2xl shadow-black/[0.05] overflow-hidden">
              {/* Card header */}
              <div className="px-8 sm:px-12 pt-10 pb-8 border-b border-black/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/50">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-black/45 uppercase tracking-widest">Reach out to</p>
                    <h2
                      className="text-xl sm:text-2xl font-bold text-[#111]"
                      style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                    >
                      {site.name}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="px-8 sm:px-12 py-8 grid sm:grid-cols-2 gap-4">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="group flex items-start gap-4 rounded-2xl p-5 border border-black/[0.06] bg-[#fafaf8] hover:border-black/[0.14] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: d.bg }}
                    >
                      <d.icon className="h-5 w-5" style={{ color: d.color }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-black/40">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-[#111] hover:text-amber-600 transition-colors mt-1 block"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-[#111] mt-1">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="px-8 sm:px-12 pb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-[#111] text-sm border border-black/[0.12] bg-white hover:bg-[#fafaf8] hover:border-black/25 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 active:scale-[0.97]"
                >
                  <Phone className="h-4 w-4 text-amber-600" />
                  Call {site.phoneDisplay}
                </a>
                <a
                  href={site.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Footnote */}
          <Reveal delay={0.3}>
            <p className="mt-8 text-center text-xs text-black/40 leading-relaxed">
              {site.location.full} · Typically responds within 5 minutes
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

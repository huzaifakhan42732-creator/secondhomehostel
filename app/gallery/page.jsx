import { Camera, Sparkles, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { HostelGallery } from "@/components/hostel-gallery"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "Photo Gallery | The Second Home Boys Hostel Lahore",
  description:
    "View authentic photos of The Second Home Boys Hostel in Gunj Baksh Town, Lahore near UVAS — including our office, furnished rooms, beds, mattresses, galleries, kitchen, newspaper area, washing machine, and clean washrooms.",
}

export default function GalleryPage() {
  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <AmbientBackground />

        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 bg-amber-100/70 border border-amber-300/80 px-4 py-1.5 rounded-full">
              <Camera className="h-3.5 w-3.5 text-amber-600" />
              Photo Gallery • Lahore
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-[#111]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              Take a look inside
              <br className="hidden sm:block" />{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                your next home
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-black/65 max-w-2xl mx-auto leading-relaxed">
              Explore authentic photos of our facilities at {site.name} on Rattigan Road, Gunj Baksh Town, Lahore — walking distance from UVAS, GCU, and UOE.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── MAIN GALLERY SECTION ─────────────────────────────────────────── */}
      <section className="relative pb-24 sm:pb-32">
        <HostelGallery />
      </section>

      {/* ── VISIT & CONTACT BANNER ───────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Schedule A Physical Visit
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111] mt-3">
              Want to see the rooms in person?
            </h3>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">
              We are open for visits every day in Gunj Baksh Town, Lahore. Call or message us to coordinate your visit or ask about current bed availability.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-black/70 justify-center md:justify-start">
              <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
              <span>40-Rattigan Road, Gunj Baksh Town, Lahore (Near UVAS)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border border-black/15 bg-[#fafaf8] text-[#111] text-sm font-semibold hover:bg-white hover:border-black/30 transition-all"
            >
              <Phone className="h-4 w-4 text-amber-600" />
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

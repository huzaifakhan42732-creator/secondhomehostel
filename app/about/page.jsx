import {
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Wallet,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Home,
  Wifi,
  BedDouble,
  Star,
  Heart,
  Sparkles,
  Droplets,
  Zap,
  BookOpen,
  Phone,
} from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { PrismBackground } from "@/components/prism-background"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "About Us | The Second Home Boys Hostel Lahore",
  description:
    "Learn about The Second Home Boys Hostel — a safe, affordable, and comfortable boys hostel for students and professionals near UVAS, GCU & UOE in Gunj Baksh Town, Lahore.",
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "24/7 Security & Safe Environment",
    text: "Round-the-clock security and CCTV monitoring with attentive management, so residents and their families have total peace of mind.",
    color: "#10b981",
  },
  {
    icon: GraduationCap,
    title: "Built for Students",
    text: "Quiet, study-friendly environment with dedicated desks and a peaceful routine that respects the academic demands of UVAS, GCU & UOE Lahore students.",
    color: "#f59e0b",
  },
  {
    icon: BedDouble,
    title: "Comfortable Furnished Rooms",
    text: "Fully furnished 2-Seater (with attached bathroom) and 3-Seater (with common bathroom) rooms equipped with quality bedding and wardrobes.",
    color: "#8b5cf6",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi & Utilities",
    text: "Fast, reliable Wi-Fi throughout all rooms along with uninterrupted water supply, backup electricity, and hot water geyser in winters.",
    color: "#3b82f6",
  },
  {
    icon: Wallet,
    title: "Affordable & Honest Pricing",
    text: "Transparent monthly packages starting from affordable rates, with a 100% refundable security deposit and zero hidden fees.",
    color: "#ec4899",
  },
  {
    icon: MapPin,
    title: "Prime Location in Gunj Baksh Town, Lahore",
    text: "Situated on Rattigan Road in Gunj Baksh Town, Lahore, right next to UVAS, GCU & UOE — minutes from campus, markets, and public transport.",
    color: "#f59e0b",
  },
]

const stats = [
  { value: "2", label: "Room Types (2 & 3 Seater)" },
  { value: "3+", label: "Campuses in Lahore" },
  { value: "24/7", label: "Security & Support" },
  { value: "UVAS · GCU · UOE", label: "Walking Distance" },
]

export default function AboutPage() {
  return (
    <div className="bg-white text-[#111] min-h-screen font-sans antialiased">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <PrismBackground />

        {/* Soft prism shimmer layer */}
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
              About {site.name} • Lahore
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-[#111]" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
              More than a place to stay —
              <br className="hidden sm:block" />
              {" "}it's{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                home
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-black/65 leading-relaxed max-w-2xl mx-auto">
              {site.name} was built around a simple idea: moving away from
              home shouldn't mean giving up comfort, safety, or community. We
              provide clean, well-furnished rooms in Gunj Baksh Town, Lahore,
              conveniently located near UVAS, GCU, and UOE — for students
              and working professionals who want a dependable place to live
              without stretching their budget.
            </p>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#111]" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs text-black/45 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STORY & VALUES ────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#fafaf8] overflow-hidden border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal direction="right">
              <div className="sticky top-32">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Why Choose Us</span>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111]" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                  Designed around the way students actually live in Lahore.
                </h2>
                <p className="mt-6 text-black/60 leading-relaxed">
                  From the moment you move into {site.name}, everything is designed to make daily student life easier — furnished rooms ready from day one, choice of attached bathroom (2-seater) or common bathroom (3-seater), high-speed Wi-Fi, 24/7 Security, and a quiet, study-focused atmosphere in Gunj Baksh Town, Lahore.
                </p>
                <p className="mt-4 text-black/60 leading-relaxed">
                  Our management is attentive and approachable, ensuring quick resolution of any maintenance or housekeeping needs. It's this dedication that makes us a trusted boys hostel for students attending UVAS, GCU, and UOE Lahore.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={site.whatsappLinkWithMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book on WhatsApp
                  </a>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/10 bg-white text-black text-sm font-semibold hover:bg-black/[0.03] transition-all"
                  >
                    <Phone className="h-4 w-4 text-amber-600" />
                    Call {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>

            <RevealGroup className="grid sm:grid-cols-2 gap-4" stagger={0.07}>
              {pillars.map((p) => (
                <RevealItem key={p.title}>
                  <div className="group p-6 h-full rounded-2xl bg-white border border-black/[0.07] hover:border-black/[0.18] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${p.color}15` }}
                    >
                      <p.icon className="h-5 w-5" style={{ color: p.color }} />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111]">{p.title}</h3>
                    <p className="text-xs text-black/55 mt-2 leading-relaxed">{p.text}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
    </div>
  )
}

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
  Sofa,
  Bath,
  Sun,
  Key,
} from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { PrismBackground } from "@/components/prism-background"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "About Us",
  description:
    "Learn about The Second Home Hostel — a safe, affordable, and comfortable hostel for students and professionals near UVAS, Gunj Bakhsh.",
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "Secure premises with attentive, on-site management so residents can live worry-free, day and night.",
    color: "#10b981",
  },
  {
    icon: GraduationCap,
    title: "Built for Students",
    text: "Quiet, study-friendly rooms and a routine that respects the demands of university life near UVAS.",
    color: "#f59e0b",
  },
  {
    icon: Briefcase,
    title: "Working Professionals Welcome",
    text: "A comfortable base for young professionals who need reliable, low-maintenance living close to the city.",
    color: "#8b5cf6",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    text: "Transparent, honest pricing with no hidden charges — quality living that respects your budget.",
    color: "#3b82f6",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Atmosphere",
    text: "A warm, community-first culture where residents genuinely feel at home, not just housed.",
    color: "#ec4899",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    text: "Situated in Gunj Bakhsh, right next to UVAS — minutes from campus, markets, and transport.",
    color: "#f59e0b",
  },
]

const stats = [
  { value: "2+", label: "Room Types" },
  { value: "Rs.6k", label: "Starting Price" },
  { value: "24/7", label: "Support" },
  { value: "UVAS", label: "Nearest Campus" },
]

export default function AboutPage() {
  return (
    <div className="bg-white text-[#111] min-h-screen font-sans antialiased">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
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
              About {site.shortName}
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
            <p className="mt-6 text-lg text-black/55 leading-relaxed max-w-2xl mx-auto">
              {site.name} was built around a simple idea: moving away from
              home shouldn't mean giving up comfort, safety, or community. We
              provide clean, well-furnished rooms in Gunj Bakhsh, right next
              to UVAS, for students and working professionals who want a
              dependable place to live without stretching their budget.
            </p>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#111]" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs text-black/40 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#fafaf8] overflow-hidden">
        {/* Prismatic accent blobs — white-safe */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #10b981, transparent 70%)", filter: "blur(60px)" }}
        />

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal direction="right">
              <div className="sticky top-32">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Our Story</span>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111]" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                  Designed around the way you actually live.
                </h2>
                <p className="mt-6 text-black/55 leading-relaxed">
                  From the moment you move in, everything at{" "}
                  {site.shortName} is designed to make daily life easier —
                  furnished rooms ready from day one, attached washrooms,
                  reliable utilities, and a study-friendly atmosphere that
                  respects your time and focus.
                </p>
                <p className="mt-4 text-black/55 leading-relaxed">
                  Our management team is present and approachable, so any
                  concern — big or small — is handled quickly. It's this
                  attention to detail that turns a hostel into a home.
                </p>
                <a
                  href={site.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
              </div>
            </Reveal>

            <RevealGroup className="grid sm:grid-cols-2 gap-4" stagger={0.07}>
              {pillars.map((p) => (
                <RevealItem key={p.title}>
                  <div className="group p-6 h-full rounded-2xl bg-white border border-black/[0.07] hover:border-black/[0.15] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${p.color}15` }}
                    >
                      <p.icon className="h-5 w-5" style={{ color: p.color }} />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111]">{p.title}</h3>
                    <p className="text-xs text-black/50 mt-2 leading-relaxed">{p.text}</p>
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

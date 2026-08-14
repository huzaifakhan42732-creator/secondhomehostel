import {
  ShieldAlert,
  Clock,
  Luggage,
  Sparkles,
  Ban,
  AlertTriangle,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Info,
} from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "Hostel Rules & Regulations | The Second Home Boys Hostel Lahore",
  description:
    "Official hostel rules, entry timings (5:00 AM - 11:00 PM), discipline, hygiene standards, and safety regulations for residents of The Second Home Boys Hostel in Gunj Baksh Town, Lahore.",
}

const rulesList = [
  {
    num: "01",
    icon: Luggage,
    title: "Luggage & Belongings Inspection",
    desc: "All luggage and personal belongings must be checked by the hostel staff at the time of entry.",
    color: "#f59e0b",
  },
  {
    num: "02",
    icon: Clock,
    title: "Entry Timings & Punctuality",
    desc: (
      <>
        Punctuality is mandatory. Normal hostel entry timings are from{" "}
        <strong className="text-foreground font-semibold">5:00 AM to 11:00 PM</strong>.
      </>
    ),
    color: "#3b82f6",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Late Entry Protocol",
    desc: (
      <>
        Entry after <strong className="text-foreground font-semibold">11:00 PM</strong> is allowed only with a valid and reasonable reason.
      </>
    ),
    color: "#8b5cf6",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Cleanliness & Room Hygiene",
    desc: "Every resident is responsible for maintaining cleanliness and hygiene in the hostel and their room.",
    color: "#10b981",
  },
  {
    num: "05",
    icon: Ban,
    title: "Substance & Drug Prohibition",
    desc: "The use, possession, or consumption of drugs, intoxicants, or any other illegal substances is strictly prohibited on the hostel premises.",
    color: "#ef4444",
  },
]

export default function HostelRulesPage() {
  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <AmbientBackground />

        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 bg-amber-100/80 border border-amber-300/80 px-4 py-1.5 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
              Resident Guidelines • Lahore
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-[#111]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              Hostel{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Rules
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-black/65 max-w-2xl mx-auto leading-relaxed">
              To ensure a safe, peaceful, and respectful living environment for all residents at {site.name} in Gunj Baksh Town, Lahore, all residents are required to observe the following rules.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── RULES LIST ───────────────────────────────────────────────────── */}
      <section className="relative pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-4">
            {rulesList.map((rule, i) => {
              const Icon = rule.icon
              return (
                <Reveal key={rule.num} delay={i * 0.08}>
                  <div className="group rounded-2xl bg-white border border-black/[0.08] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-black/[0.18] transition-all duration-300 flex items-start gap-4 sm:gap-6">
                    <div
                      className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{ background: `${rule.color}15` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: rule.color }} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-black/40">
                          Rule {rule.num}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-[#111] mb-2">
                        {rule.title}
                      </h2>
                      <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* ── PROMINENT SAFETY & WEAPON PROHIBITION NOTE ─────────────────── */}
          <Reveal delay={0.3}>
            <div className="mt-8 rounded-3xl bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border-2 border-red-500/40 p-6 sm:p-9 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 pointer-events-none opacity-10">
                <AlertTriangle className="w-48 h-48 text-red-600" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-red-600 text-white shrink-0 shadow-md">
                  <AlertTriangle className="h-7 w-7 animate-pulse" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-red-600 text-white shadow-xs">
                      CRITICAL SAFETY POLICY
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-red-950 leading-tight">
                    ⚠️ NOTE: Strict Weapon &amp; Arms Prohibition
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-red-900/90 leading-relaxed font-medium">
                    Bringing or keeping <strong className="text-red-950 font-bold underline decoration-red-500 underline-offset-2">ANY KIND OF WEAPON, ARMS, OR DANGEROUS OBJECT</strong> inside the hostel premises is <strong className="text-red-950 font-bold uppercase">STRICTLY PROHIBITED</strong>.
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-red-800/80 leading-relaxed">
                    Violation of this rule will result in immediate cancellation of hostel admission, forfeiture of deposit, and necessary legal reporting without exception.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ASSISTANCE & CONTACT SECTION ─────────────────────────────────── */}
      <section className="pb-24 sm:pb-32 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Need Clarification?
            </span>
            <h4 className="text-xl font-bold text-[#111] mt-1">
              Have questions regarding hostel policies?
            </h4>
            <p className="text-xs sm:text-sm text-black/60 mt-1">
              Management is available 24/7 on WhatsApp and phone for resident support.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex-1 sm:flex-none text-center px-5 py-3 rounded-xl border border-black/15 bg-[#fafaf8] text-xs font-semibold text-black hover:bg-white transition-all"
            >
              <Phone className="w-3.5 h-3.5 inline mr-1.5 text-amber-600" />
              Call Management
            </a>
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 inline mr-1.5" />
              WhatsApp Help
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

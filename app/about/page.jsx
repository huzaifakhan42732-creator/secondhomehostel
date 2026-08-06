import { ShieldCheck, GraduationCap, Briefcase, Wallet, HeartHandshake, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
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
  },
  {
    icon: GraduationCap,
    title: "Built for Students",
    text: "Quiet, study-friendly rooms and a routine that respects the demands of university life near UVAS.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals Welcome",
    text: "A comfortable base for young professionals who need reliable, low-maintenance living close to the city.",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    text: "Transparent, honest pricing with no hidden charges — quality living that respects your budget.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Atmosphere",
    text: "A warm, community-first culture where residents genuinely feel at home, not just housed.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    text: "Situated in Gunj Bakhsh, right next to UVAS — minutes from campus, markets, and transport.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <AmbientBackground />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About {site.shortName}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold mt-4 leading-tight">
              More than a place to stay —
              <br className="hidden sm:block" /> it's{" "}
              <span className="text-gradient-gold">home</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {site.name} was built around a simple idea: moving away from
              home shouldn't mean giving up comfort, safety, or community. We
              provide clean, well-furnished rooms in Gunj Bakhsh, right next
              to UVAS, for students and working professionals who want a
              dependable place to live without stretching their budget.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal direction="right">
              <div className="sticky top-32">
                <h2 className="font-display text-3xl font-semibold leading-tight">
                  Designed around the way you actually live.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  From the moment you move in, everything at{" "}
                  {site.shortName} is designed to make daily life easier —
                  furnished rooms ready from day one, attached washrooms,
                  reliable utilities, and a study-friendly atmosphere that
                  respects your time and focus.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our management team is present and approachable, so any
                  concern — big or small — is handled quickly. It's this
                  attention to detail that turns a hostel into a home.
                </p>
              </div>
            </Reveal>

            <RevealGroup className="grid sm:grid-cols-2 gap-4" stagger={0.08}>
              {pillars.map((p) => (
                <RevealItem key={p.title}>
                  <Card className="p-6 h-full hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                    <p.icon className="h-6 w-6 text-primary mb-4" />
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {p.text}
                    </p>
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
    </>
  )
}

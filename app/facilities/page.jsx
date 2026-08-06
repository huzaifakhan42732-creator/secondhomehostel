import {
  Wifi,
  Bath,
  Sofa,
  BookOpen,
  Zap,
  Droplets,
  Sparkles,
  BedDouble,
  Shirt,
  ShieldCheck,
  MapPin,
  GraduationCap,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { facilities } from "@/lib/site-config"

export const metadata = {
  title: "Facilities",
  description:
    "See everything included at The Second Home Hostel — WiFi, attached washrooms, furnished rooms, study environment, security, and more.",
}

const icons = [
  Wifi,
  Bath,
  Sofa,
  BookOpen,
  Zap,
  Droplets,
  Sparkles,
  BedDouble,
  Shirt,
  ShieldCheck,
  MapPin,
  GraduationCap,
]

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <AmbientBackground />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Facilities
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold mt-4 leading-tight">
              Everything you need,
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-gold">nothing you don't</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Every facility at {" "}
              The Second Home Hostel is chosen with one goal — making daily
              life simpler, safer, and more comfortable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-6xl px-4">
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.05}>
            {facilities.map((f, i) => {
              const Icon = icons[i % icons.length]
              return (
                <RevealItem key={f.title}>
                  <Card className="p-7 h-full group hover:border-primary/40 hover:-translate-y-1.5 hover:bg-white/[0.03] transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold mt-5">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {f.description}
                    </p>
                  </Card>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>
    </>
  )
}

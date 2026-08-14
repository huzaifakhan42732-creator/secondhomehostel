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
  Utensils,
  Camera,
  Coffee,
  Refrigerator,
  Flame,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { facilities, site } from "@/lib/site-config"

export const metadata = {
  title: "Facilities | The Second Home Boys Hostel Lahore",
  description:
    "See all facilities included at The Second Home Boys Hostel in Gunj Baksh Town, Lahore — high-speed Wi-Fi, 24/7 Security, attached and common bathrooms, regular housekeeping, and more.",
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
  Utensils,
  Camera,
  Shirt,
  Droplets,
  Sparkles,
  Coffee,
  Flame,
]

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <AmbientBackground />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Hostel Facilities • Lahore
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
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every facility at {site.name} in Gunj Baksh Town, Lahore is chosen with one goal — making daily student life simpler, safer, and more comfortable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="mx-auto max-w-6xl px-4">
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.04}>
            {facilities.map((f, i) => {
              const Icon = icons[i % icons.length]
              return (
                <RevealItem key={f.title}>
                  <Card className="p-7 h-full group hover:border-primary/40 hover:-translate-y-1.5 hover:bg-card/90 transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold mt-5 text-foreground">{f.title}</h3>
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

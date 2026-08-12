import { BedDouble, MessageCircle, ShieldAlert, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { site, rooms, securityFee } from "@/lib/site-config"

export const metadata = {
  title: "Rooms & Accommodation",
  description:
    "Explore furnished two-seater and three-seater rooms at The Second Home Hostel — ideally located near UVAS, GCU, and UOE. A safe, comfortable, and student-friendly hostel in Gunj Bakhsh.",
}

export default function RoomsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <AmbientBackground />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Rooms &amp; Accommodation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold mt-4 leading-tight">
              Choose the room that
              <br className="hidden sm:block" /> fits your{" "}
              <span className="text-gradient-gold">lifestyle</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Every room is fully furnished, cleaned regularly, and ready to
              move into — no surprises, no hidden costs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <Reveal key={room.id} delay={i * 0.12}>
                <Card className="p-8 sm:p-10 h-full flex flex-col hover:border-primary/40 transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <BedDouble className="h-7 w-7" />
                    </div>
                    <span className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
                      {room.occupancy}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl font-semibold mt-6">{room.name}</h2>

                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                    {room.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    as="a"
                    href={site.whatsappLinkWithMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    className="mt-8 w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book This Room
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-8 flex flex-col sm:flex-row items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Compulsory Security Fee
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {securityFee.note} This applies to all residents regardless
                  of room type and is collected separately from the monthly
                  rent.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

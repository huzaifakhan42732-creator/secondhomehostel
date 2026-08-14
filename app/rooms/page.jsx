import { BedDouble, MessageCircle, ShieldAlert, CheckCircle2, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { site, rooms, securityFee } from "@/lib/site-config"

export const metadata = {
  title: "Rooms & Accommodation | The Second Home Boys Hostel Lahore",
  description:
    "Explore furnished two-seater and three-seater rooms at The Second Home Boys Hostel — ideally located near UVAS, GCU, and UOE. A safe, comfortable, and student-friendly boys hostel in Gunj Baksh Town, Lahore.",
}

export default function RoomsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <AmbientBackground />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Rooms &amp; Accommodation • Lahore
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
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every room at {site.name} in Gunj Baksh Town, Lahore is fully furnished, equipped with high-speed Wi-Fi, cleaned regularly, and ready to move in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <Reveal key={room.id} delay={i * 0.12}>
                <Card className="overflow-hidden h-full flex flex-col hover:border-primary/40 transition-all duration-300 group bg-card/70">
                  {/* Room Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-black/10">
                    <img
                      src={room.image}
                      alt={`${room.name} at ${site.name} Lahore`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                        {room.occupancy}
                      </span>
                      <span className="rounded-full bg-primary/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {room.bathroom}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white">
                      {room.pricingNote}
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                          {room.name}
                        </h2>
                      </div>

                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {room.description}
                      </p>

                      <div className="mt-6 pt-5 border-t border-border">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-3">
                          Room Facilities &amp; Amenities:
                        </span>
                        <ul className="space-y-2.5">
                          {room.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <Button
                        as="a"
                        href={`tel:${site.phoneRaw}`}
                        variant="outline"
                        className="w-full text-xs"
                      >
                        <Phone className="h-4 w-4 text-primary" />
                        Call ({site.phoneDisplay})
                      </Button>
                      <Button
                        as="a"
                        href={site.whatsappLinkWithMessage}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="whatsapp"
                        className="w-full text-xs"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Inquire on WhatsApp
                      </Button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Refundable Security Deposit Card */}
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-primary/40 bg-primary/10 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary shrink-0">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                    Compulsory Hostel Policy
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Refundable Security Deposit
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {securityFee.note} This one-time fee is collected from all residents upon check-in to safeguard hostel property and is <strong>100% refunded</strong> upon check-out as per hostel terms.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <Button
                  as="a"
                  href={`tel:${site.phoneRaw}`}
                  variant="outline"
                  size="sm"
                  className="flex-1 md:flex-none"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </Button>
                <Button
                  as="a"
                  href={site.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="sm"
                  className="flex-1 md:flex-none"
                >
                  <MessageCircle className="h-4 w-4" />
                  Inquire on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

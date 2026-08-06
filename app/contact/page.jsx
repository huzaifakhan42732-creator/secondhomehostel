import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with The Second Home Hostel in Gunj Bakhsh, near UVAS. Call or message us on WhatsApp to book your room.",
}

const details = [
  {
    icon: MapPin,
    label: "Location",
    value: (
      <>
        {site.location.line1}
        <br />
        {site.location.line2}
      </>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phoneRaw}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsappLinkWithMessage,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open all day for calls & messages",
  },
]

export default function ContactPage() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden min-h-screen">
      <AmbientBackground />
      <div className="mx-auto max-w-4xl px-4">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact Us
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold mt-4 leading-tight">
            Let's get you
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-gold">moved in</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Have a question about availability, pricing, or a visit? Reach
            out — we usually reply within minutes on WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Card className="mt-16 p-8 sm:p-12 glass-strong">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl font-semibold">{site.name}</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl p-5 bg-white/[0.02] border border-border hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                as="a"
                href={site.whatsappLinkWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

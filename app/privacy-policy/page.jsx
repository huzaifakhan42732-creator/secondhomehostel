import { Reveal } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "Privacy Policy | The Second Home Boys Hostel Lahore",
  description: "Privacy Policy for The Second Home Boys Hostel in Gunj Baksh Town, Lahore.",
}

const sections = [
  {
    title: "1. Introduction",
    body: `This Privacy Policy explains how ${site.name} ("we", "us", "our") collects, uses, and protects information you share with us when you visit our website or contact us to inquire about or book a room in Gunj Baksh Town, Lahore near UVAS, GCU, and UOE.`,
  },
  {
    title: "2. Information We Collect",
    body: "When you reach out to us — for example, via direct phone call or WhatsApp — we may receive information you choose to share, such as your name, phone number, university affiliation, and any details related to your room inquiry. We do not collect online payments through this website, as all bookings and payments are arranged directly with management.",
  },
  {
    title: "3. How We Use Your Information",
    body: "Information shared with us is used solely to respond to your room inquiry, schedule a hostel visit in Lahore, verify room availability, and manage your accommodation if you choose to stay at The Second Home Boys Hostel. We never sell, rent, or share your contact information with third parties.",
  },
  {
    title: "4. WhatsApp & Phone Communication",
    body: "Our website links directly to WhatsApp and mobile dialer for booking convenience. Any conversation you have with us over WhatsApp is subject to WhatsApp's own privacy policy and terms of service.",
  },
  {
    title: "5. Security Deposit Policy",
    body: "The one-time compulsory security deposit is 100% refundable upon check-out as per hostel terms and conditions. Clear receipts are provided for all transactions.",
  },
  {
    title: "6. Data Protection",
    body: "We take reasonable measures to protect any contact information shared with our management team.",
  },
  {
    title: "7. Contact Us",
    body: `If you have any questions regarding this Privacy Policy or hostel guidelines, please contact us directly at ${site.phoneDisplay} or via WhatsApp.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <AmbientBackground />
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Hostel Guidelines &amp; Policy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-4">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">{site.name} • Gunj Baksh Town, Lahore</p>
        </Reveal>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div>
                <h2 className="text-lg font-semibold text-foreground">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

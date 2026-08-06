import { Reveal } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Second Home Hostel.",
}

const sections = [
  {
    title: "1. Introduction",
    body: `This Privacy Policy explains how ${site.name} ("we", "us", "our") collects, uses, and protects information you share with us when you visit our website or contact us to inquire about or book a room.`,
  },
  {
    title: "2. Information We Collect",
    body: "When you reach out to us — for example, via phone call or WhatsApp — we may receive information you choose to share, such as your name, phone number, and any details related to your room inquiry. We do not collect payment information through this website, as all bookings are arranged directly and confirmed offline.",
  },
  {
    title: "3. How We Use Your Information",
    body: "Information shared with us is used solely to respond to your inquiry, arrange a visit, confirm room availability, and manage your stay if you choose to book with us. We do not sell, rent, or share your information with third parties for marketing purposes.",
  },
  {
    title: "4. WhatsApp Communication",
    body: "Our website links directly to WhatsApp for booking convenience. Any conversation you have with us over WhatsApp is subject to WhatsApp's own privacy policy and terms of service, in addition to this policy.",
  },
  {
    title: "5. Cookies & Website Data",
    body: "This website may use basic, privacy-friendly analytics to understand overall visitor traffic and improve the browsing experience. We do not use this data to identify individual visitors.",
  },
  {
    title: "6. Data Security",
    body: "We take reasonable measures to protect any personal information shared with us. However, no method of transmission over the internet or mobile networks is completely secure.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices. Any updates will be posted on this page.",
  },
  {
    title: "8. Contact Us",
    body: `If you have any questions about this Privacy Policy, please contact us at ${site.phoneDisplay} or via WhatsApp.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <AmbientBackground />
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-4">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: August 2026</p>
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

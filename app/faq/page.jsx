"use client"

import React, { useState } from "react"
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { AmbientBackground } from "@/components/ambient-background"
import { site } from "@/lib/site-config"

const faqs = [
  {
    id: 1,
    q: "1. What is the monthly rent?",
    a: "Room rent depends on the room type and availability. Please contact us on WhatsApp for the latest rent and available rooms.",
    tag: "Rent & Rates",
  },
  {
    id: 2,
    q: "2. How much is the security deposit?",
    a: "A refundable security deposit is required at the time of admission. Please contact us on WhatsApp for the current security deposit amount and refund details.",
    tag: "Security Deposit",
  },
  {
    id: 3,
    q: "3. What facilities are available at the hostel?",
    a: "The hostel provides essential facilities including Wi-Fi, electricity, water, washing machine, refrigerator, drinking water, housekeeping, security, and other common facilities. Please contact management for complete details.",
    tag: "Facilities",
  },
  {
    id: 4,
    q: "4. What are the hostel entry timings?",
    a: (
      <>
        The normal hostel timings are{" "}
        <strong className="text-foreground font-semibold">5:00 AM to 11:00 PM</strong>. Entry after{" "}
        <strong className="text-foreground font-semibold">11:00 PM</strong> is possible with a valid and reasonable reason.
      </>
    ),
    tag: "Timings & Access",
  },
  {
    id: 5,
    q: "5. How can I book a room or check availability?",
    a: "You can contact us on WhatsApp to check room availability, rent, security deposit, and booking details. Our management team will guide you through the admission process.",
    tag: "Booking Process",
  },
]

export default function FAQPage() {
  // First item open by default for immediate engagement
  const [openItems, setOpenItems] = useState({ 1: true, 2: true })

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <AmbientBackground />

        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 bg-amber-100/80 border border-amber-300/80 px-4 py-1.5 rounded-full">
              <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
              Frequently Asked Questions • Lahore
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-[#111]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              Frequently Asked{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Questions
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-black/65 max-w-2xl mx-auto leading-relaxed">
              Find quick answers to common questions about rent, refundable security deposit, facilities, entry timings, and admission at {site.name} in Gunj Baksh Town, Lahore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EXPANDABLE ACCORDION LIST ────────────────────────────────────── */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = !!openItems[faq.id]
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                    isOpen
                      ? "border-amber-400/60 shadow-md ring-1 ring-amber-400/15"
                      : "border-black/[0.08] shadow-xs hover:border-black/[0.18]"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors hover:bg-black/[0.01]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-md mb-2">
                        {faq.tag}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-[#111] leading-snug">
                        {faq.q}
                      </h2>
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 transition-transform duration-300 mt-1 ${
                        isOpen ? "bg-amber-500 text-white rotate-180" : "bg-black/[0.05] text-black/60"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <div className="pt-2 border-t border-black/[0.06] text-sm sm:text-base text-black/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS BANNER ──────────────────────────────────── */}
      <section className="pb-24 sm:pb-32 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Direct Resident Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111] mt-3">
              Still have questions?
            </h3>
            <p className="text-sm text-black/60 mt-2 leading-relaxed">
              Our management team is here to assist you. Contact us anytime on WhatsApp or call us directly to check room availability or plan your visit in Gunj Baksh Town, Lahore.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Ask on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border border-black/15 bg-[#fafaf8] text-[#111] text-sm font-semibold hover:bg-white hover:border-black/30 transition-all"
            >
              <Phone className="h-4 w-4 text-amber-600" />
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

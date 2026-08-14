"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { MessageCircle, ArrowRight, ShieldCheck, Wifi, BedDouble, MapPin, Sparkles, Phone, CheckCircle2, HeartHandshake, Zap, Utensils, Droplets, BookOpen, Clock } from "lucide-react"
import { IntroAnimation, HERO_REVEAL_MS } from "@/components/intro-animation"
import { PixelIcon } from "@/components/pixel-icon"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { StackingAgentCards } from "@/components/stacking-agent-cards"
import { DevExSection } from "@/components/devex-section"
import { Footer } from "@/components/footer"
import { site, rooms, securityFee, facilities } from "@/lib/site-config"

// ─── Intersection Observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── Bento card ──────────────────────────────────────────────────────────────
function BentoCard({ children, className = "", delay = 0 }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-black/[0.08] bg-white overflow-hidden transition-all duration-700 hover:border-black/[0.18] hover:bg-[#fafaf8] shadow-sm hover:shadow-md ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background-color 0.3s ease`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.03), transparent 60%)",
        }}
      />
      {children}
    </div>
  )
}

// ─── Tag ─────────────────────────────────────────────────────────────────────
function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans font-semibold text-black/60 bg-black/[0.05]">
      {children}
    </span>
  )
}

const whyChoosePillars = [
  {
    icon: BedDouble,
    title: "Comfortable Student Accommodation",
    desc: "Thoughtfully furnished rooms with comfortable beds, study desks, and ample ventilation to help you rest and focus on studies.",
    color: "#f59e0b",
  },
  {
    icon: Sparkles,
    title: "Suitable Room Options",
    desc: "Choose between private 2-Seater rooms (with attached bathroom) or economical 3-Seater rooms (with common bathroom) to match your preferences.",
    color: "#3b82f6",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security & CCTV",
    desc: "Gated entry with 24/7 Security and round-the-clock CCTV surveillance, ensuring a safe, secure, and peaceful living environment.",
    color: "#10b981",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Reliable, high-speed Wi-Fi coverage across all rooms and floors for research, university portals, lectures, and online assignments.",
    color: "#8b5cf6",
  },
  {
    icon: MapPin,
    title: "Convenient Location in Lahore",
    desc: "Located on Rattigan Road in Gunj Baksh Town, Lahore — just walking distance from UVAS, GCU, and UOE campuses, with easy transit access.",
    color: "#ec4899",
  },
  {
    icon: Droplets,
    title: "Clean & Comfortable Environment",
    desc: "Daily professional housekeeping, spotless common areas, hot water geyser, filtered drinking water, and backup power arrangements.",
    color: "#06b6d4",
  },
]

// ─── Main page component ─────────────────────────────────────────────────────
export default function Page() {
  const [heroReady, setHeroReady] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  const handleIntroDone = useCallback(() => {
    setHeroReady(true)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), HERO_REVEAL_MS)
    return () => clearTimeout(t)
  }, [])

  const handleMouse = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      {/* INTRO ANIMATION */}
      <IntroAnimation onDone={handleIntroDone} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-end">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agentic-hero-9yW3wnTNMfn2U6lsVhTTZSJFEvAoSj.mp4"
          style={{
            transform: videoReady ? "scale(1.05)" : "scale(0.85)",
            transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Progressive blur + gradient overlay */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "75%",
            background:
              "linear-gradient(to top, #F5F4F0 0%, #F5F4F0 22%, rgba(245,244,240,0.92) 45%, rgba(245,244,240,0.6) 68%, rgba(245,244,240,0.15) 88%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "25%",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        <div className="h-28 sm:h-32" />

        {/* Hero Title & Actions */}
        <div className="relative z-30 flex flex-col px-6 md:px-12 pb-12 sm:pb-16 max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-black/80 w-fit shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            {site.name} • Gunj Baksh Town, Lahore
          </div>

          <h1
            className="font-light text-[#111] leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: "clamp(2.2rem, 6.2vw, 5.2rem)",
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(24px)",
              transform: heroReady ? "translateY(0px)" : "translateY(32px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 0ms, filter 1s cubic-bezier(0.16,1,0.3,1) 0ms, transform 1s cubic-bezier(0.16,1,0.3,1) 0ms",
            }}
          >
            A boys hostel that
            <br />
            actually feels like
            <br />
            your second home.
          </h1>

          <p className="text-sm md:text-base text-black/70 max-w-2xl mb-8 leading-relaxed">
            {site.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-black/15 bg-white/90 backdrop-blur-sm text-black font-semibold text-sm hover:bg-white hover:border-black/30 transition-all shadow-sm hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 text-amber-600" />
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-black/80 font-medium text-sm hover:text-black hover:underline transition-all"
            >
              View Room Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* University Location Chips */}
          <div className="flex flex-wrap gap-2.5 pt-6 border-t border-black/10">
            {[
              { label: "Walking Distance to UVAS Lahore" },
              { label: "Near GCU Lahore" },
              { label: "Near UOE" },
              { label: "Gunj Baksh Town, Lahore" },
            ].map((u, i) => (
              <div
                key={u.label}
                style={{
                  opacity: heroReady ? 1 : 0,
                  filter: heroReady ? "blur(0px)" : "blur(16px)",
                  transform: heroReady ? "translateY(0px)" : "translateY(20px)",
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms, filter 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms`,
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm text-xs font-medium text-black/75 shadow-xs"
              >
                <MapPin className="h-3 w-3 text-amber-600" />
                {u.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS & ACCOMMODATION BENTO */}
      <section id="rooms-section" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-full overflow-x-clip">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <PixelIcon type="platform" size={40} />
            <div className="mt-4">
              <Tag>ROOMS &amp; ACCOMMODATION</Tag>
            </div>
            <RevealText className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1]">
              {"Furnished student rooms\nfor focus, rest & comfort."}
            </RevealText>
          </div>

          <div className="grid grid-cols-12 gap-5" onMouseMove={handleMouse}>
            {/* Three Seater Room Bento */}
            <BentoCard className="col-span-12 md:col-span-6 flex flex-col justify-between" delay={0}>
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/5">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
                  alt="Three Seater Room at The Second Home Boys Hostel Lahore"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-black shadow-sm">
                    Three Seater Room
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white shadow-sm">
                    Common Bathroom
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-white">
                  Starting from Affordable Rates
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-light mb-3 text-[#111]">Three Seater Room</h3>
                  <p className="text-sm text-black/65 leading-relaxed mb-6">
                    A spacious shared room designed specifically for focus and comfort, making it ideal for university students who appreciate good company without giving up their personal study space. Enjoy a well-ventilated, fully furnished room with access to a clean common bathroom and all essential hostel amenities.
                  </p>
                  <div className="text-xs font-semibold text-black/45 uppercase tracking-wider mb-3">
                    Included Room Facilities:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-black/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Common Bathroom
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Well Furnished Interiors
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Comfortable Beds &amp; Mattresses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Dedicated Study Space
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      High-Speed Wi-Fi
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Storage Wardrobes
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.07] flex items-center justify-between">
                  <span className="text-xs font-medium text-black/50">3 Beds Capacity</span>
                  <a
                    href={site.whatsappLinkWithMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-600/20"
                  >
                    Inquire Rates on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </BentoCard>

            {/* Two Seater Room Bento */}
            <BentoCard className="col-span-12 md:col-span-6 flex flex-col justify-between" delay={100}>
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/5">
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
                  alt="Two Seater Room at The Second Home Boys Hostel Lahore"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-black shadow-sm">
                    Two Seater Room
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-sm">
                    Attached Bathroom
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-white">
                  Starting from Affordable Rates
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-light mb-3 text-[#111]">Two Seater Room</h3>
                  <p className="text-sm text-black/65 leading-relaxed mb-6">
                    A quieter, more private setup for students and young professionals who prefer a peaceful environment with just one roommate. Features fully furnished interiors, an attached bathroom, comfortable bedding, and dedicated storage to give you a restful and productive living experience.
                  </p>
                  <div className="text-xs font-semibold text-black/45 uppercase tracking-wider mb-3">
                    Included Room Facilities:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-black/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Attached Bathroom
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Well Furnished Interiors
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Comfortable Beds &amp; Mattresses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Quiet Study Atmosphere
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      High-Speed Wi-Fi
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      24/7 Security
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.07] flex items-center justify-between">
                  <span className="text-xs font-medium text-black/50">2 Beds Capacity</span>
                  <a
                    href={site.whatsappLinkWithMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-600/20"
                  >
                    Inquire Rates on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </BentoCard>

            {/* Refundable Security Deposit Banner */}
            <BentoCard className="col-span-12 p-6 sm:p-8 bg-gradient-to-r from-emerald-50/80 to-amber-50/50 border-emerald-600/30 shadow-sm" delay={200}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300/60">
                      OFFICIAL POLICY: REFUNDABLE SECURITY DEPOSIT
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-emerald-950">
                    Refundable Security Deposit
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900/80 mt-2 max-w-3xl leading-relaxed">
                    A one-time, compulsory security deposit is collected from all residents upon check-in to safeguard hostel facilities. This deposit is <strong>100% refundable</strong> at the time of check-out as per hostel terms.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="px-4 py-2.5 rounded-xl border border-emerald-800/20 bg-white text-emerald-900 text-xs font-semibold hover:bg-emerald-50 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    Call {site.phoneDisplay}
                  </a>
                  <a
                    href={site.whatsappLinkWithMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-sm flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-y border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <Tag>WHY CHOOSE US</Tag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111] mt-4 mb-5" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
              Why students choose The Second Home Boys Hostel
            </h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              We provide clean, safe, and dependable housing in Gunj Baksh Town, Lahore near UVAS, GCU, and UOE — giving students and young working professionals a comfortable environment to excel in their academic and professional goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="p-6 sm:p-7 rounded-2xl border border-black/[0.07] bg-[#fafaf8] hover:border-black/[0.18] hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${p.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: p.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#111] mb-2.5">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-black/60 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-[#faf9f6] border border-black/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111]">Visit Us in Gunj Baksh Town, Lahore</h4>
                <p className="text-xs sm:text-sm text-black/60 mt-0.5">
                  40-Rattigan Road, Gunj Baksh Town, Lahore — Walking distance from UVAS, GCU &amp; UOE.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex-1 md:flex-none text-center px-5 py-3 rounded-xl border border-black/15 bg-white text-xs font-semibold text-black hover:bg-black/[0.03] transition-all"
              >
                Call {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappLinkWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none text-center px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-sm"
              >
                Schedule Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3D STACKING CARDS */}
      <section id="rooms" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#efece6]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <PixelIcon type="agents" size={40} />
            <div className="mt-4">
              <Tag>ROOM TYPES &amp; DETAILS</Tag>
            </div>
            <RevealText className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
              {"Explore rooms, facilities & refundable deposit."}
            </RevealText>
          </div>

          <StackingAgentCards />
        </div>
      </section>

      {/* FACILITIES & ADMISSION GUIDE */}
      <section id="facilities-section" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-full overflow-x-clip">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <PixelIcon type="workflow" size={40} />
            <div className="mt-4">
              <Tag>HOSTEL FACILITIES &amp; LIVING</Tag>
            </div>
            <RevealText className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              {"All facilities included\nfor seamless living."}
            </RevealText>
          </div>

          <DevExSection />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

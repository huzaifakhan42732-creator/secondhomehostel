"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { MessageCircle, ArrowRight, ShieldCheck, Wifi, BedDouble, MapPin, Sparkles, Phone } from "lucide-react"
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
      className={`group relative rounded-2xl border border-black/[0.07] bg-white overflow-hidden transition-all duration-700 hover:border-black/[0.15] hover:bg-[#fafaf8] ${className}`}
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
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/50 bg-black/[0.04]">
      {children}
    </span>
  )
}

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
      <section className="relative h-screen overflow-hidden">
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
            height: "65%",
            background:
              "linear-gradient(to top, #F5F4F0 0%, #F5F4F0 18%, rgba(245,244,240,0.85) 35%, rgba(245,244,240,0.5) 55%, rgba(245,244,240,0.15) 75%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "20%",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        <div className="h-20" />

        {/* Hero Title & Metrics */}
        <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col px-6 md:px-12 pb-12" style={{ maxWidth: "min(56rem, 90vw)" }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-black/70 w-fit">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            Now Accepting New Residents Near UVAS
          </div>

          <h1
            className="font-light text-[#111] leading-[1.0] tracking-tight mb-8"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: "clamp(2rem, 6.5vw, 5.5rem)",
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(24px)",
              transform: heroReady ? "translateY(0px)" : "translateY(32px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 0ms, filter 1s cubic-bezier(0.16,1,0.3,1) 0ms, transform 1s cubic-bezier(0.16,1,0.3,1) 0ms",
            }}
          >
            A hostel that
            <br />
            actually feels like
            <br />
            your second home.
          </h1>

          <p className="text-sm md:text-base text-black/60 max-w-xl mb-8 leading-relaxed">
            {site.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Book Now on WhatsApp
            </a>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-black/15 bg-white/80 backdrop-blur-sm text-black/80 font-medium text-sm hover:bg-white hover:border-black/30 transition-all"
            >
              View Rooms &amp; Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 sm:gap-12 pt-6 border-t border-black/10">
            {[
              { value: "Rs. 7,500", label: "Three Seater / Mo" },
              { value: "Rs. 6,000", label: "Two Seater / Mo" },
              { value: "Rs. 5,000", label: "Compulsory Deposit" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  opacity: heroReady ? 1 : 0,
                  filter: heroReady ? "blur(0px)" : "blur(16px)",
                  transform: heroReady ? "translateY(0px)" : "translateY(20px)",
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms, filter 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms`,
                }}
              >
                <div
                  className="text-2xl sm:text-3xl text-[#111] font-light tracking-tight"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-black/40 tracking-widest uppercase mt-1"
                  style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS & ACCOMMODATION BENTO */}
      <section id="platform" className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-20 max-w-full overflow-x-clip">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="platform" size={40} />
            <div className="mt-4">
              <Tag>ROOMS &amp; ACCOMMODATION</Tag>
            </div>
            <RevealText className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              {"Everything you need\nfor comfortable student living."}
            </RevealText>
          </div>

          <div className="grid grid-cols-12 gap-4" onMouseMove={handleMouse}>
            {/* Three Seater */}
            <BentoCard className="col-span-12 md:col-span-6 p-5 sm:p-8 flex flex-col justify-between" delay={0}>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <Tag>THREE SEATER ROOM</Tag>
                  <span className="text-xl sm:text-2xl font-light text-emerald-700 font-mono">
                    Rs. 7,500 <span className="text-xs text-black/40">/ Month</span>
                  </span>
                </div>
                <h3 className="text-2xl font-light mb-3">Three Seater Room</h3>
                <p className="text-sm text-black/55 leading-relaxed mb-6">
                  Spacious shared room designed for focus and comfort, ideal for students who want good company without giving up personal space.
                </p>
                <ul className="space-y-2.5 text-xs text-black/70">
                  <li className="flex items-center gap-2">✓ Well Furnished Interiors</li>
                  <li className="flex items-center gap-2">✓ Attached Washroom</li>
                  <li className="flex items-center gap-2">✓ Comfortable Beds</li>
                  <li className="flex items-center gap-2">✓ Dedicated Study Environment</li>
                  <li className="flex items-center gap-2">✓ Storage Space &amp; Ventilation</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-xs text-black/40">3 Beds Capacity</span>
                <a
                  href={site.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  Book Three Seater <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </BentoCard>

            {/* Two Seater */}
            <BentoCard className="col-span-12 md:col-span-6 p-5 sm:p-8 flex flex-col justify-between" delay={100}>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <Tag>TWO SEATER ROOM</Tag>
                  <span className="text-xl sm:text-2xl font-light text-emerald-700 font-mono">
                    Rs. 6,000 <span className="text-xs text-black/40">/ Month</span>
                  </span>
                </div>
                <h3 className="text-2xl font-light mb-3">Two Seater Room</h3>
                <p className="text-sm text-black/55 leading-relaxed mb-6">
                  A quieter, more private setup for those who prefer a peaceful room with just one roommate — without stretching the budget.
                </p>
                <ul className="space-y-2.5 text-xs text-black/70">
                  <li className="flex items-center gap-2">✓ Well Furnished Interiors</li>
                  <li className="flex items-center gap-2">✓ Attached Washroom</li>
                  <li className="flex items-center gap-2">✓ Comfortable Beds</li>
                  <li className="flex items-center gap-2">✓ Peaceful Environment</li>
                  <li className="flex items-center gap-2">✓ Storage Space</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-xs text-black/40">2 Beds Capacity</span>
                <a
                  href={site.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  Book Two Seater <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </BentoCard>

            {/* Security Deposit Banner */}
            <BentoCard className="col-span-12 p-5 sm:p-6 bg-emerald-50/50 border-emerald-600/20" delay={200}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800 break-words">
                      IMPORTANT NOTICE: SECURITY DEPOSIT
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-light text-emerald-950">
                    Compulsory Security Fee: <span className="font-semibold">Rs. 5,000</span>
                  </h4>
                  <p className="text-xs text-emerald-800/70 mt-1">
                    Security Fee is compulsory for all residents upon check-in and is fully refundable upon check-out.
                  </p>
                </div>
                <a
                  href={site.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors shrink-0"
                >
                  Inquire Security Terms
                </a>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* 3D STACKING CARDS */}
      <section id="rooms" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#efece6]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <PixelIcon type="agents" size={40} />
            <div className="mt-4">
              <Tag>ROOM TYPES &amp; DETAILS</Tag>
            </div>
            <RevealText className="mt-5 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
              {"Explore rooms & compulsory deposit."}
            </RevealText>
          </div>

          <StackingAgentCards />
        </div>
      </section>

      {/* FACILITIES & STEPS */}
      <section id="workflow" className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-20 max-w-full overflow-x-clip">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="workflow" size={40} />
            <div className="mt-4">
              <Tag>HOSTEL FACILITIES</Tag>
            </div>
            <RevealText className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
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

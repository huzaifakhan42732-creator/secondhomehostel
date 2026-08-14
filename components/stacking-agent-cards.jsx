"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Phone } from "lucide-react"
import { site } from "@/lib/site-config"

const CARDS = [
  {
    label: "ROOM TYPE 1",
    title: "Three Seater Room",
    desc: "A spacious shared room designed specifically for focus and comfort, making it ideal for university students who appreciate good company without giving up their personal study space. Enjoy a well-ventilated, fully furnished room with access to a clean common bathroom and all essential hostel amenities.",
    stats: [
      { v: "3 Beds", l: "Occupancy" },
      { v: "Common", l: "Bathroom" },
      { v: "Furnished", l: "Move-in Ready" },
      { v: "Wi-Fi", l: "High-Speed" },
    ],
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
    action: "Inquire 3-Seater Rates",
  },
  {
    label: "ROOM TYPE 2",
    title: "Two Seater Room",
    desc: "A quieter, more private setup for students and young professionals who prefer a peaceful environment with just one roommate. Features fully furnished interiors, an attached bathroom, comfortable bedding, and dedicated storage to give you a restful and productive living experience.",
    stats: [
      { v: "2 Beds", l: "Occupancy" },
      { v: "Attached", l: "Bathroom" },
      { v: "Quiet", l: "Study Space" },
      { v: "24/7", l: "Security" },
    ],
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    action: "Inquire 2-Seater Rates",
  },
  {
    label: "SECURITY POLICY",
    title: "Refundable Security Deposit",
    desc: "A one-time, compulsory security deposit collected upon check-in to secure your booking. This amount is 100% refundable upon check-out as per hostel terms, ensuring a safe and transparent process for all students.",
    stats: [
      { v: "100%", l: "Refundable" },
      { v: "One-Time", l: "Upon Check-in" },
      { v: "Compulsory", l: "All Residents" },
    ],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    action: "Inquire Security Terms",
  },
  {
    label: "PRIME LOCATION",
    title: "Gunj Baksh Town, Lahore — Near UVAS, GCU & UOE",
    desc: "Located on Rattigan Road in Gunj Baksh Town, Lahore — just minutes walking distance from UVAS, GCU, and UOE campuses. Surrounded by student dining spots, markets, stationary shops, and accessible public transportation.",
    stats: [
      { v: "24/7", l: "Security" },
      { v: "Wi-Fi", l: "High-Speed Internet" },
      { v: "Walking", l: "Distance to Campuses" },
    ],
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    action: "Get Directions & Visit",
  },
]

const STICKY_TOP = 80
const STICKY_STEP = 24
const SCALE_STEP = 0.03
const OFFSET_STEP = 12

function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/60 bg-black/[0.05] font-semibold">
      {children}
    </span>
  )
}

export function StackingAgentCards() {
  const cardRefs = useRef([])
  const [depth, setDepth] = useState(CARDS.map(() => 0))

  useEffect(() => {
    function onScroll() {
      const nextDepth = CARDS.map((_, i) => {
        let count = 0
        for (let j = i + 1; j < CARDS.length; j++) {
          const el = cardRefs.current[j]
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP
          if (rect.top <= stickyTopJ + 2) count++
        }
        return count
      })
      setDepth(nextDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {CARDS.map((card, i) => {
        const d = depth[i]
        const scale = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP

        return (
          <div
            key={card.label}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className="sticky mb-4"
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange: "transform",
              }}
            >
              <div className="group relative bg-[#faf9f7] rounded-2xl border border-black/[0.08] shadow-md overflow-hidden">
                {/* MOBILE: image top, fades out at bottom */}
                {card.img && (
                  <div className="relative w-full h-52 pointer-events-none md:hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 95%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 95%)",
                      }}
                    />
                  </div>
                )}

                {/* DESKTOP: image right, fades out at left */}
                {card.img && (
                  <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 pointer-events-none">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to right, #faf9f7 0%, rgba(250,249,247,0.85) 15%, transparent 60%)",
                      }}
                    />
                  </div>
                )}

                {/* Text content */}
                <div
                  className="relative z-10 p-6 sm:p-8"
                  style={{ maxWidth: card.img ? undefined : "100%" }}
                >
                  <div className="md:max-w-[58%]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <Tag>{card.label}</Tag>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light mb-3 text-[#111]">{card.title}</h3>
                    <p className="text-sm text-black/65 leading-relaxed mb-6">{card.desc}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/[0.07] md:max-w-[58%]">
                    <div className="flex flex-wrap gap-5 sm:gap-7">
                      {card.stats.map((s) => (
                        <div key={s.l}>
                          <div className="text-lg sm:text-xl font-medium text-[#111]">{s.v}</div>
                          <div className="text-[10px] sm:text-[11px] text-black/45 tracking-wider uppercase mt-0.5">{s.l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${site.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/10 bg-white text-xs font-semibold text-black/80 hover:bg-black/[0.04] transition-all"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-600" />
                        Call
                      </a>
                      <a
                        href={site.whatsappLinkWithMessage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

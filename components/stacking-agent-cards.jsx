"use client"

import { useEffect, useRef, useState } from "react"
import { site } from "@/lib/site-config"

const CARDS = [
  {
    label: "ROOM TYPE 1",
    title: "Three Seater Room",
    price: "Rs. 7,500 / Month",
    desc: "A spacious shared room designed for focus and comfort, ideal for students who want good company without giving up their personal space.",
    stats: [
      { v: "3 Beds", l: "Occupancy" },
      { v: "Attached", l: "Private Washroom" },
      { v: "Furnished", l: "Move-in Ready" },
    ],
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "ROOM TYPE 2",
    title: "Two Seater Room",
    price: "Rs. 6,000 / Month",
    desc: "A quieter, more private setup for those who prefer a peaceful room with just one roommate — without stretching the budget.",
    stats: [
      { v: "2 Beds", l: "Occupancy" },
      { v: "Attached", l: "Washroom" },
      { v: "Quiet", l: "Study Environment" },
    ],
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "IMPORTANT NOTICE",
    title: "Compulsory Security Fee",
    price: "Rs. 5,000 One-Time",
    desc: "A compulsory one-time security deposit collected upon check-in. Fully refundable upon check-out as per hostel terms.",
    stats: [
      { v: "One-Time", l: "Refundable Fee" },
      { v: "Mandatory", l: "All Residents" },
    ],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "PRIME LOCATION",
    title: "Near UVAS & Gunj Bakhsh",
    price: "Walking Distance",
    desc: "Located in Gunj Bakhsh right next to UVAS campus, markets, transportation, and dining spots.",
    stats: [
      { v: "24/7", l: "Safe Premises" },
      { v: "WiFi", l: "High-Speed Internet" },
    ],
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
  },
]

const STICKY_TOP = 80
const STICKY_STEP = 24
const SCALE_STEP = 0.03
const OFFSET_STEP = 12

function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/50 bg-black/[0.04]">
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
              <div className="group relative bg-[#faf9f7] rounded-2xl border border-black/[0.07] overflow-hidden cursor-pointer">
                {/* ── MOBILE: image top, fades out at bottom ── */}
                {card.img && (
                  <div className="relative w-full h-52 pointer-events-none md:hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      }}
                    />
                  </div>
                )}

                {/* ── DESKTOP: image right, fades out at left (absolute) ── */}
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
                        background: "linear-gradient(to right, #faf9f7 0%, transparent 55%)",
                      }}
                    />
                  </div>
                )}

                {/* Text content */}
                <div
                  className="relative z-10 p-6 sm:p-8"
                  style={{ maxWidth: card.img ? undefined : "100%" }}
                >
                  <div className="md:max-w-[60%]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                      <Tag>{card.label}</Tag>
                      <span className="text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        {card.price}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light mb-3 text-[#111]">{card.title}</h3>
                    <p className="text-sm text-black/45 leading-relaxed mb-8">{card.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-black/[0.06]">
                    {card.stats.map((s) => (
                      <div key={s.l}>
                        <div className="text-2xl font-light text-[#111]">{s.v}</div>
                        <div className="text-[11px] text-black/35 tracking-widest uppercase mt-0.5">{s.l}</div>
                      </div>
                    ))}
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

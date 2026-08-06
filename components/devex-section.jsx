"use client"

import { useState } from "react"
import { site } from "@/lib/site-config"

const STEPS = [
  {
    num: "01",
    title: "Select Room",
    desc: "Choose between Two Seater or Three Seater",
    file: "rooms-config.jsx",
    lang: "javascript",
    code: [
      { type: "comment", text: "// Available Room Types at The Second Home Hostel" },
      { type: "keyword", text: "const", after: " threeSeater ", keyword2: "=", keyword3: " { ", fn: "Price", args: "'Rs. 7,500 / Month'" },
      { type: "keyword", text: "const", after: " twoSeater ", keyword2: "=", keyword3: " { ", fn: "Price", args: "'Rs. 6,000 / Month'" },
      { type: "gap" },
      { type: "output", text: "✓ Both room types fully furnished" },
      { type: "output", text: "✓ Attached washrooms in every room" },
      { type: "output", text: "✓ Study friendly & ventilated" },
    ],
  },
  {
    num: "02",
    title: "Security Fee",
    desc: "Refundable deposit upon check-in",
    file: "security-deposit.jsx",
    lang: "javascript",
    code: [
      { type: "comment", text: "// Security Deposit Policy" },
      { type: "keyword", text: "const", after: " deposit ", keyword2: "=", keyword3: " 'Rs. 5,000' ", fn: "Mandatory", args: "true" },
      { type: "gap" },
      { type: "output", text: "✓ One-time refundable security deposit" },
      { type: "output", text: "✓ Compulsory for all new residents" },
    ],
  },
  {
    num: "03",
    title: "Check Facilities",
    desc: "All-inclusive student amenities",
    file: "facilities-list.jsx",
    lang: "javascript",
    code: [
      { type: "comment", text: "// Included Amenities" },
      { type: "success", text: "✓ High-Speed WiFi" },
      { type: "success", text: "✓ 24/7 Electricity & Water" },
      { type: "success", text: "✓ Cleaning & Housekeeping" },
      { type: "success", text: "✓ Prime Location Near UVAS" },
    ],
  },
  {
    num: "04",
    title: "Instant Booking",
    desc: "Direct contact via WhatsApp",
    file: "whatsapp-booking.jsx",
    lang: "javascript",
    code: [
      { type: "comment", text: "# Connect directly on WhatsApp" },
      { type: "command", text: "Call or Message 0303 2518181" },
      { type: "gap" },
      { type: "success", text: "✓ Fast responses within minutes" },
      { type: "url", text: "  → https://wa.me/923032518181" },
    ],
  },
]

function CodeLine({ line }) {
  if (line.type === "gap") return <div className="h-3" />
  if (line.type === "comment") return <div className="text-[#9ca3af]">{line.text}</div>
  if (line.type === "output") return <div className="text-[#6b7280]">{line.text}</div>
  if (line.type === "success") return <div className="text-[#16a34a]">{line.text}</div>
  if (line.type === "url") return <div className="text-[#2563eb] underline">{line.text}</div>
  if (line.type === "command") return (
    <div>
      <span className="text-[#16a34a]">$ </span>
      <span className="text-[#111]">{line.text}</span>
    </div>
  )
  if (line.type === "plain") return <div className="text-[#111]">{line.text}</div>
  if (line.type === "prop") return (
    <div>
      <span className="text-[#2563eb]">{line.key}</span>
      <span className="text-[#111]">: </span>
      <span className="text-[#16a34a]">{line.val}</span>
    </div>
  )
  if (line.type === "keyword") return (
    <div>
      <span className="text-[#2563eb]">{line.keyword}</span>
      <span className="text-[#111]">{line.after}</span>
      <span className="text-[#2563eb]">{line.keyword2}</span>
      {line.keyword3 && <span className="text-[#2563eb]">{line.keyword3}</span>}
      {line.fn && <span className="text-[#d97706]">{line.fn}</span>}
      {line.args && <span className="text-[#111]">{line.args}</span>}
      {line.string && <span className="text-[#16a34a]">{line.string}</span>}
    </div>
  )
  return null
}

export function DevExSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="rounded-2xl border border-black/[0.07] bg-[#faf9f7] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left column: Step selection tabs */}
        <div className="lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r border-black/[0.07] flex flex-col justify-between">
          <div className="space-y-3">
            {STEPS.map((step, i) => {
              const isActive = activeStep === i
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white border border-black/10 shadow-sm"
                      : "hover:bg-black/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-semibold ${
                        isActive ? "text-emerald-600" : "text-black/30"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <div className="text-base font-medium text-[#111]">{step.title}</div>
                      <div className="text-xs text-black/45 mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.06]">
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Book Room on WhatsApp
            </a>
          </div>
        </div>

        {/* Right column: Interactive preview window */}
        <div className="lg:col-span-7 bg-[#f5f4f0] p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="text-xs font-mono text-black/50 ml-2">
                  {STEPS[activeStep].file}
                </span>
              </div>
              <span className="text-[11px] font-mono text-black/40 uppercase">
                {STEPS[activeStep].lang}
              </span>
            </div>

            <div className="font-mono text-xs leading-relaxed space-y-1 overflow-x-auto max-w-full">
              {STEPS[activeStep].code.map((line, idx) => (
                <CodeLine key={idx} line={line} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

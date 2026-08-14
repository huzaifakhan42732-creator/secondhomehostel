"use client"

import { useState } from "react"
import { BedDouble, ShieldCheck, Wifi, CheckCircle2, MessageCircle, Phone, Sparkles, MapPin, Coffee, Bath } from "lucide-react"
import { site } from "@/lib/site-config"

const STEPS = [
  {
    num: "01",
    title: "Select Room Option",
    desc: "Choose between Two Seater or Three Seater",
    icon: BedDouble,
    badge: "Room Types",
    content: {
      headline: "Comfortable Furnished Student Rooms in Lahore",
      subheading: "Designed for academic focus, privacy, and community.",
      highlights: [
        {
          title: "Three Seater Room (Starting from Affordable Rates)",
          points: [
            "Clean Common Bathroom access",
            "Fully furnished with comfortable beds & mattresses",
            "Dedicated study desks & personal storage",
            "High-Speed Wi-Fi & good natural ventilation",
          ],
        },
        {
          title: "Two Seater Room (Starting from Affordable Rates)",
          points: [
            "Private Attached Bathroom",
            "Quiet and peaceful study atmosphere",
            "Spacious personal wardrobes & comfortable bedding",
            "High-Speed Wi-Fi & 24/7 Security",
          ],
        },
      ],
    },
  },
  {
    num: "02",
    title: "Refundable Security Deposit",
    desc: "One-time compulsory deposit upon check-in",
    icon: ShieldCheck,
    badge: "Security Policy",
    content: {
      headline: "100% Refundable Security Deposit",
      subheading: "A straightforward, transparent policy for all residents.",
      highlights: [
        {
          title: "Deposit Terms & Highlights",
          points: [
            "Compulsory one-time deposit upon check-in",
            "Fully refundable at the time of check-out as per hostel terms",
            "Guarantees room reservation and safe asset usage",
            "Official receipt provided immediately upon payment",
          ],
        },
      ],
    },
  },
  {
    num: "03",
    title: "Hostel Facilities",
    desc: "All-inclusive amenities for daily comfort",
    icon: Wifi,
    badge: "Included Amenities",
    content: {
      headline: "Complete Amenities Included",
      subheading: "Everything a student needs under one roof in Gunj Baksh Town, Lahore.",
      highlights: [
        {
          title: "Key Included Facilities",
          points: [
            "High-Speed Wi-Fi for study & assignments",
            "24/7 Electricity & uninterrupted water supply",
            "CCTV Surveillance & 24/7 Security",
            "Regular Housekeeping & spotless cleaning",
            "Equipped Kitchen for fresh home-cooked meals",
            "Hot Water Geyser & shared Refrigerator",
            "Filtered pure drinking water & Laundry facility",
          ],
        },
      ],
    },
  },
  {
    num: "04",
    title: "Instant Booking & Visit",
    desc: "Direct contact via WhatsApp or Phone",
    icon: MessageCircle,
    badge: "Fast Admission",
    content: {
      headline: "Simple & Direct Admission Process",
      subheading: "Get in touch with hostel management in minutes.",
      highlights: [
        {
          title: "How to Book Your Bed",
          points: [
            "Contact us on WhatsApp or Call +923032518181",
            "Confirm current bed availability for your chosen room type",
            "Schedule a physical visit to 40-Rattigan Road, Gunj Baksh Town, Lahore",
            "Submit your CNIC/Student ID copy and complete check-in",
          ],
        },
      ],
    },
  },
]

export function DevExSection() {
  const [activeStep, setActiveStep] = useState(0)
  const current = STEPS[activeStep]

  return (
    <div className="rounded-2xl border border-black/[0.08] bg-[#faf9f7] shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left column: Step selection tabs */}
        <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-black/[0.08] flex flex-col justify-between bg-white">
          <div className="space-y-3">
            <div className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-4">
              Hostel Living &amp; Admission Steps
            </div>
            {STEPS.map((step, i) => {
              const isActive = activeStep === i
              const Icon = step.icon
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-amber-50/70 border border-amber-300/80 shadow-sm ring-1 ring-amber-400/20"
                      : "hover:bg-black/[0.03] border border-transparent"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl shrink-0 transition-colors ${
                        isActive
                          ? "bg-amber-500 text-white"
                          : "bg-black/[0.05] text-black/60"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold ${
                            isActive ? "text-amber-700" : "text-black/40"
                          }`}
                        >
                          Step {step.num}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-[#111] mt-0.5">{step.title}</div>
                      <div className="text-xs text-black/55 mt-0.5 leading-snug">{step.desc}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-col gap-2.5">
            <a
              href={site.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all shadow-md gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center w-full py-2.5 px-6 rounded-xl border border-black/10 bg-white text-black/80 font-semibold text-xs hover:bg-black/[0.03] transition-all gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              Call Management ({site.phoneDisplay})
            </a>
          </div>
        </div>

        {/* Right column: Rich informative content view */}
        <div className="lg:col-span-7 bg-[#f7f6f2] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.07] mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/80 text-amber-900 border border-amber-200">
                <Sparkles className="w-3 h-3 text-amber-600" />
                {current.badge}
              </span>
              <span className="text-xs text-black/45 font-medium">
                {site.name} • Lahore
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#111] mb-2">
              {current.content.headline}
            </h3>
            <p className="text-sm text-black/65 mb-6 leading-relaxed">
              {current.content.subheading}
            </p>

            <div className="space-y-4">
              {current.content.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm"
                >
                  <h4 className="text-sm font-bold text-[#111] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    {h.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {h.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/75">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-black/50">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              Gunj Baksh Town, Lahore (Near UVAS)
            </span>
            <span className="font-semibold text-emerald-700">
              Direct Phone &amp; WhatsApp Support
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare } from "lucide-react"

// Hostel inquiries & resident log data
const ALL_PRS = [
  { id: 145, title: "Room Inquiry: Two Seater Availability", agent: "Guest Visitor", status: "review", comments: 2, additions: 1, deletions: 0, branch: "gunj-baksh-town/uvas-lahore", time: "Just now" },
  { id: 144, title: "Check-in Confirmation: Three Seater Room", agent: "Resident Student", status: "review", comments: 1, additions: 1, deletions: 0, branch: "room-204", time: "1m ago" },
  { id: 143, title: "Refundable Security Deposit Verified", agent: "Hostel Admin", status: "merged", comments: 4, additions: 1, deletions: 0, branch: "deposit-confirmed", time: "1m ago" },
  { id: 142, title: "Wi-Fi & Study Room Maintenance Check", agent: "Maintenance Team", status: "merged", comments: 3, additions: 12, deletions: 1, branch: "facility/wifi", time: "2m ago" },
  { id: 141, title: "WhatsApp Booking Request: UVAS Lahore Student", agent: "WhatsApp Direct", status: "approved", comments: 1, additions: 1, deletions: 0, branch: "wa.me/923032518181", time: "8m ago" },
  { id: 140, title: "Room Inspection & Housekeeping Complete", agent: "Housekeeping", status: "review", comments: 5, additions: 6, deletions: 2, branch: "clean/floor-1", time: "22m ago" },
  { id: 139, title: "New Resident Onboarding & Inventory Handover", agent: "Management", status: "merged", comments: 7, additions: 15, deletions: 3, branch: "onboard/resident", time: "1h ago" },
]

const ALL_REVIEW_FILES = [
  { file: "Two Seater Room (Attached Bath)", pct: 100 },
  { file: "Three Seater Room (Common Bath)", pct: 100 },
  { file: "Refundable Security Deposit", pct: 100 },
  { file: "High-Speed Wi-Fi Facilities", pct: 100 },
  { file: "Gunj Baksh Town, Lahore Location", pct: 100 },
]

const ALL_REVIEW_LINES = [
  { type: "code", text: 'Three Seater Room: Starting from Affordable Monthly Rates (Common Bathroom)' },
  { type: "comment", text: "Verified: Three-seater includes clean common bathroom access", author: "Student Inquiry" },
  { type: "code", text: 'Refundable Security Deposit: Compulsory, One-time (100% Refundable)' },
  { type: "approve", text: "Confirmed — All rooms fully furnished near UVAS in Gunj Baksh Town, Lahore", author: "Hostel Admin" },
  { type: "code", text: 'Phone Contact: +923032518181' },
  { type: "approve", text: "Prime location verified — Walking distance to campus", author: "UVAS Resident" },
]

export function AgentInterface() {
  const [tab, setTab] = useState("activity")

  return (
    <div className="rounded-2xl border border-black/[0.07] bg-white/80 backdrop-blur-md overflow-hidden shadow-xl">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-pixel text-xs tracking-widest text-black/70 uppercase">
            HOSTEL LIVE STATUS BOARD
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTab("activity")}
            className={`px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all ${
              tab === "activity"
                ? "bg-black text-white"
                : "text-black/60 hover:text-black hover:bg-black/[0.04]"
            }`}
          >
            Inquiries
          </button>
          <button
            onClick={() => setTab("review")}
            className={`px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all ${
              tab === "review"
                ? "bg-black text-white"
                : "text-black/60 hover:text-black hover:bg-black/[0.04]"
            }`}
          >
            Room Facts
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {tab === "activity" ? (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">
              Recent Inquiries &amp; Status Updates
            </div>
            {ALL_PRS.map((pr) => (
              <div
                key={pr.id}
                className="flex items-center justify-between p-3.5 rounded-xl border border-black/[0.05] bg-[#fafaf8] hover:border-black/15 transition-all"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-black/90">{pr.title}</div>
                    <div className="text-xs text-black/40 mt-0.5">
                      {pr.agent} • {pr.branch}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-black/40 font-mono">{pr.time}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">
                Verified Room Specifications
              </div>
              <div className="space-y-3">
                {ALL_REVIEW_FILES.map((f) => (
                  <div key={f.file} className="p-4 rounded-xl border border-black/[0.05] bg-[#fafaf8]">
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>{f.file}</span>
                      <span className="text-emerald-700 font-semibold">{f.pct}% Readiness</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-black/5 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${f.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">
                Official Hostel Guidelines
              </div>
              <div className="space-y-3 font-mono text-xs">
                {ALL_REVIEW_LINES.map((line, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      line.type === "approve"
                        ? "bg-emerald-50/60 border-emerald-200 text-emerald-900"
                        : line.type === "comment"
                        ? "bg-amber-50/60 border-amber-200 text-amber-900"
                        : "bg-black/[0.02] border-black/[0.04] text-black/80"
                    }`}
                  >
                    <div>{line.text}</div>
                    {line.author && (
                      <div className="text-[10px] opacity-60 mt-1 text-right">— {line.author}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { GitPullRequest, MessageSquare, CheckCircle2, Clock, AlertCircle, Zap, GitCommit, Eye, Terminal } from "lucide-react"

// Hostel inquiries & resident log data
const ALL_PRS = [
  { id: 145, title: "Room Inquiry: Three Seater Availability", agent: "Guest Visitor", status: "review", comments: 2, additions: 1, deletions: 0, branch: "gunj-bakhsh/uvas", time: "Just now" },
  { id: 144, title: "Check-in Confirmation: Two Seater Room", agent: "Resident Student", status: "review", comments: 1, additions: 1, deletions: 0, branch: "room-204", time: "1m ago" },
  { id: 143, title: "Security Fee Verified: Rs. 5,000", agent: "Hostel Admin", status: "merged", comments: 4, additions: 1, deletions: 0, branch: "deposit-confirmed", time: "1m ago" },
  { id: 142, title: "WiFi & Study Room Maintenance Check", agent: "Maintenance Team", status: "merged", comments: 3, additions: 12, deletions: 1, branch: "facility/wifi", time: "2m ago" },
  { id: 141, title: "WhatsApp Booking Request: UVAS Student", agent: "WhatsApp Direct", status: "approved", comments: 1, additions: 1, deletions: 0, branch: "wa.me/923032518181", time: "8m ago" },
  { id: 140, title: "Room Inspection & Housekeeping Complete", agent: "Housekeeping", status: "review", comments: 5, additions: 6, deletions: 2, branch: "clean/floor-1", time: "22m ago" },
  { id: 139, title: "New Resident Onboarding & Inventory Handover", agent: "Management", status: "merged", comments: 7, additions: 15, deletions: 3, branch: "onboard/resident", time: "1h ago" },
]

const ALL_REVIEW_FILES = [
  { file: "three-seater-room.jsx", pct: 85 },
  { file: "two-seater-room.jsx", pct: 90 },
  { file: "security-deposit.jsx", pct: 100 },
  { file: "wifi-facilities.jsx", pct: 95 },
  { file: "uvas-location-map.jsx", pct: 100 },
]

const ALL_REVIEW_LINES = [
  { type: "code", text: 'const rent = "Rs. 7,500 / Month"' },
  { type: "comment", text: "Is attached washroom included in three-seater?", author: "Student Inquiry" },
  { type: "code", text: 'const securityFee = "Rs. 5,000 (Compulsory, One-time)"' },
  { type: "approve", text: "Confirmed — All rooms fully furnished near UVAS", author: "Hostel Admin" },
  { type: "code", text: 'export const bookingLink = "https://wa.me/923032518181"' },
  { type: "change", text: "Add pre-filled message for quick booking response", author: "Management" },
  { type: "code", text: 'const location = "Gunj Bakhsh, Near UVAS, Lahore"' },
  { type: "approve", text: "Prime location verified — 2 mins walk to campus", author: "UVAS Resident" },
]

const COMMITS = [
  { hash: "a3f8c21", msg: "feat: add WhatsApp instant booking CTA", time: "Just now" },
  { hash: "b7d2e09", msg: "update: Three Seater Room Rs. 7,500 / month", time: "4m ago" },
  { hash: "c9a1f34", msg: "update: Two Seater Room Rs. 6,000 / month", time: "12m ago" },
  { hash: "d4e6b78", msg: "notice: compulsory security deposit Rs. 5,000", time: "31m ago" },
  { hash: "e2c9d56", msg: "facility: 24/7 electricity, high-speed WiFi, water supply", time: "1h ago" },
]

function MiniBarGraph({ seed }) {
  const canvasRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const N = 20
    barsRef.current = Array.from({ length: N }, (_, i) => 0.2 + 0.8 * Math.abs(Math.sin((i + seed) * 1.3)))

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    let active = true
    const draw = () => {
      if (!active) return
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      canvas.width = W * devicePixelRatio
      canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)

      ctx.clearRect(0, 0, W, H)
      const barW = (W - (N - 1) * 3) / N

      barsRef.current.forEach((val, i) => {
        barsRef.current[i] += (Math.random() - 0.5) * 0.08
        barsRef.current[i] = Math.max(0.1, Math.min(1, barsRef.current[i]))
        const barH = barsRef.current[i] * H
        ctx.fillStyle = "rgba(0,0,0,0.12)"
        ctx.fillRect(i * (barW + 3), H - barH, barW, barH)
      })

      requestAnimationFrame(draw)
    }

    const rafId = requestAnimationFrame(draw)
    return () => {
      active = false
      cancelAnimationFrame(rafId)
    }
  }, [seed])

  return <canvas ref={canvasRef} className="w-full h-12" />
}

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <div className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">
                Recent Inquiries & Status Updates
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

            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">
                  Live Activity Intensity
                </div>
                <div className="p-4 rounded-xl border border-black/[0.05] bg-[#fafaf8]">
                  <MiniBarGraph seed={42} />
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">
                  Management Logs
                </div>
                <div className="space-y-2">
                  {COMMITS.map((c) => (
                    <div key={c.hash} className="p-3 rounded-lg bg-black/[0.02] border border-black/[0.04]">
                      <div className="text-xs font-mono font-medium text-black/80">{c.msg}</div>
                      <div className="flex justify-between items-center text-[10px] text-black/40 mt-1">
                        <span>{c.hash}</span>
                        <span>{c.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

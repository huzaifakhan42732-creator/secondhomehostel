"use client"

import { useEffect, useState, useRef } from "react"

const INQUIRY_TYPES = [
  "Inquiry: Three Seater Room Price",
  "Checking: Two Seater Availability",
  "Verification: Security Deposit Rs. 5,000",
  "Location: UVAS Campus Walking Time",
  "Amenity Check: High-Speed WiFi Speed",
  "Confirming: Attached Washroom Facilities",
  "Student Inquiry: Study Environment Quiet Hours",
  "WhatsApp Direct: Room Visit Schedule",
  "Resident Request: Laundry & Housekeeping",
  "Availability: Upcoming Month Vacancy",
]

const RESIDENT_TYPES = [
  "UVAS Student", "Working Professional", "New Applicant", "Resident Bed 3",
  "Hostel Management", "Resident Room 2"
]

const REGIONS = ["Gunj Bakhsh", "Near UVAS", "Floor 1", "Floor 2", "Main Desk"]
const STATUSES = [
  { label: "available", color: "#16a34a" },
  { label: "available", color: "#16a34a" },
  { label: "checking",  color: "#d97706" },
  { label: "confirmed", color: "#2563eb" },
]

function randomRow(key) {
  return {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    name: RESIDENT_TYPES[Math.floor(Math.random() * RESIDENT_TYPES.length)],
    task: INQUIRY_TYPES[Math.floor(Math.random() * INQUIRY_TYPES.length)],
    region: REGIONS[Math.floor(Math.random() * REGIONS.length)],
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    progress: Math.floor(Math.random() * 85 + 10),
    elapsed: `${Math.floor(Math.random() * 5 + 1)}m ago`,
    key,
  }
}

export function LiveAgentCounter() {
  const [count, setCount] = useState(2)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + (Math.random() > 0.5 ? 1 : 0))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="font-mono font-semibold text-[#111]">
      {count.toLocaleString()} Beds Left
    </span>
  )
}

export function LiveAgentFeed() {
  const [rows, setRows] = useState(() => Array.from({ length: 5 }, (_, i) => randomRow(i)))
  const nextKey = useRef(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setRows((prev) => {
        const updated = [randomRow(nextKey.current++), ...prev.slice(0, 4)]
        return updated
      })
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-black/[0.06] bg-[#fafaf8] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono text-xs font-semibold tracking-wider text-black/70 uppercase">
            Live Hostel Room Inquiries
          </span>
        </div>
        <span className="text-xs text-black/40 font-mono">Updated real-time</span>
      </div>

      <div className="divide-y divide-black/[0.04]">
        {rows.map((row) => (
          <div
            key={row.key}
            className="px-6 py-3.5 flex items-center justify-between hover:bg-[#fafaf8] transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-black/40">#{row.id}</span>
              <div>
                <div className="text-xs font-medium text-black/90">{row.task}</div>
                <div className="text-[11px] text-black/40 mt-0.5">
                  {row.name} • {row.region}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span
                className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${row.status.color}15`,
                  color: row.status.color,
                }}
              >
                {row.status.label}
              </span>
              <span className="text-xs font-mono text-black/40">{row.elapsed}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

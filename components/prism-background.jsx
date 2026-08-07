"use client"

import {
  Home,
  Wifi,
  BedDouble,
  ShieldCheck,
  MapPin,
  Star,
  Heart,
  Sparkles,
  GraduationCap,
  Droplets,
  Zap,
  BookOpen,
  Sofa,
  Bath,
  Coffee,
  Sun,
  Moon,
  Key,
  Lock,
  Users,
} from "lucide-react"

const ICONS = [
  Home, Wifi, BedDouble, ShieldCheck, MapPin, Star, Heart, Sparkles,
  GraduationCap, Droplets, Zap, BookOpen, Sofa, Bath, Coffee, Sun, Moon, Key, Lock, Users,
]

const PARTICLES = Array.from({ length: 28 }, (_, i) => {
  const Icon = ICONS[i % ICONS.length]
  const size = 14 + (i % 5) * 6
  const left = (i * 17 + 3) % 97
  const top = (i * 13 + 7) % 95
  const duration = 6 + (i % 7) * 2
  const delay = -(i * 1.3) % duration
  const opacity = 0.04 + (i % 4) * 0.025
  const driftX = (i % 3 === 0 ? 1 : -1) * (8 + (i % 5) * 4)
  const driftY = (i % 2 === 0 ? -1 : 1) * (6 + (i % 4) * 5)
  const rotate = (i % 2 === 0 ? 1 : -1) * (8 + (i % 5) * 5)
  return { Icon, size, left, top, duration, delay, opacity, driftX, driftY, rotate, i }
})

export function PrismBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden -z-10 pointer-events-none"
      aria-hidden="true"
    >
      {/* Subtle prismatic gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(251,191,36,0.07) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(167,243,208,0.08) 0%, transparent 55%), " +
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(196,181,253,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Floating Lucide icons */}
      {PARTICLES.map(({ Icon, size, left, top, duration, delay, opacity, driftX, driftY, rotate, i }) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            opacity,
            animation: `prism-float-${i % 4} ${duration}s ease-in-out ${delay}s infinite`,
            "--drift-x": `${driftX}px`,
            "--drift-y": `${driftY}px`,
            "--rotate": `${rotate}deg`,
            color: ["#f59e0b", "#10b981", "#8b5cf6", "#3b82f6", "#ec4899"][i % 5],
          }}
        >
          <Icon style={{ width: size, height: size }} strokeWidth={1.2} />
        </div>
      ))}

      {/* Soft bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, white, transparent)",
        }}
      />
    </div>
  )
}

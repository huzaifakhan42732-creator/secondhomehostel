"use client"

import React, { useState, useEffect, useCallback } from "react"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  MapPin,
  Camera,
  Layers,
  ArrowRight,
} from "lucide-react"
import { site, galleryItems, galleryCategories } from "@/lib/site-config"

export function HostelGallery() {
  const [selectedCat, setSelectedCat] = useState("all")
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)
  const [isZoomed, setIsZoomed] = useState(false)

  // Filtered items (preserving exact sequence 1..8 when 'all' is selected)
  const items = selectedCat === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCat)

  // Open Lightbox
  const openLightbox = (index) => {
    setActivePhotoIndex(index)
    setIsZoomed(false)
  }

  // Close Lightbox
  const closeLightbox = () => {
    setActivePhotoIndex(null)
    setIsZoomed(false)
  }

  // Navigation inside Lightbox
  const showPrev = useCallback(() => {
    if (activePhotoIndex === null) return
    setIsZoomed(false)
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))
  }, [activePhotoIndex, items.length])

  const showNext = useCallback(() => {
    if (activePhotoIndex === null) return
    setIsZoomed(false)
    setActivePhotoIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))
  }, [activePhotoIndex, items.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activePhotoIndex, showPrev, showNext])

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activePhotoIndex])

  const activePhoto = activePhotoIndex !== null ? items[activePhotoIndex] : null

  return (
    <div className="w-full">
      {/* ── Category Filter Tabs ────────────────────────────────────────── */}
      <div className="flex items-center justify-center mb-10 overflow-x-auto py-2 px-4 no-scrollbar">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/[0.04] border border-black/[0.06] backdrop-blur-md">
          {galleryCategories.map((cat) => {
            const isActive = selectedCat === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat.id)
                  setActivePhotoIndex(null)
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : "text-black/60 hover:text-black hover:bg-black/[0.04]"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Sequence Notice Bar ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 text-xs mb-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-medium">
            Real photos of <strong>{site.name}</strong> premises in Gunj Baksh Town, Lahore.
          </span>
        </div>
        <span className="text-[11px] text-amber-800 font-semibold hidden sm:inline-block">
          8 Key Facilities
        </span>
      </div>

      {/* ── Responsive Gallery Grid (Strict sequence 1..8) ─────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative flex flex-col rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-black/[0.2] transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
          >
            {/* Image Container with Hover Effects */}
            <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-black/5">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark subtle gradient for readable badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Sequence Badge (e.g. 01. Office) */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-black shadow-md backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                {item.badge}
              </div>

              {/* View Full Photo Action Overlay */}
              <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Image Title on Bottom Overlay */}
              <div className="absolute bottom-3.5 inset-x-3.5 text-white">
                <h3 className="font-semibold text-base sm:text-lg leading-snug drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                {item.highlights.slice(0, 3).map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/[0.04] text-black/70"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── LIGHTBOX MODAL ──────────────────────────────────────────────── */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl text-white animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500 text-black">
                {activePhoto.badge}
              </span>
              <span className="text-sm font-medium text-white/80 hidden sm:inline-block">
                {activePhoto.title}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs text-white/50 font-mono mr-2">
                {activePhotoIndex + 1} / {items.length}
              </span>
              <button
                onClick={() => setIsZoomed((z) => !z)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Stage View */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-3 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div
              className={`relative max-w-full max-h-full flex items-center justify-center transition-all duration-300 ${
                isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed((z) => !z)}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[62vh] sm:max-h-[70vh] max-w-[90vw] sm:max-w-[80vw] object-contain rounded-xl shadow-2xl transition-transform duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-3 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Details Bar & CTAs */}
          <div className="border-t border-white/10 bg-black/60 px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-base font-bold text-white">{activePhoto.title}</h4>
              <p className="text-xs text-white/70 mt-1 max-w-2xl leading-relaxed">
                {activePhoto.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call ({site.phoneDisplay})
              </a>
              <a
                href={site.whatsappLinkWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-semibold text-white transition-colors shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Book on WhatsApp
              </a>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="hidden sm:flex items-center justify-center gap-2 py-3 px-4 bg-black/80 border-t border-white/5 overflow-x-auto">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePhotoIndex(idx)
                  setIsZoomed(false)
                }}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  activePhotoIndex === idx
                    ? "border-amber-400 scale-105 opacity-100"
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

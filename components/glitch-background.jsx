"use client"

import { useRef, useEffect } from "react"

// ─── Charcoal Diamond Prism Background ──────────────────────────────────────
// Renders animated diamond/crystal facets on a dark charcoal canvas.
// Each "diamond" is drawn as a faceted polygon with light-refraction shimmer.
// No external assets required — pure Canvas 2D.

const CHARCOAL = {
  bg: "#1a1a1e",           // near-black charcoal base
  bg2: "#111113",          // deeper shadow for gradient
  facet: [
    "rgba(255,255,255,0.03)",  // very dark face
    "rgba(255,255,255,0.07)",  // mid face
    "rgba(255,255,255,0.12)",  // light face
    "rgba(255,255,255,0.18)",  // bright face
    "rgba(180,190,220,0.06)",  // cool blue-grey face
    "rgba(220,200,160,0.05)",  // warm gold face (prism split)
  ],
  edge: "rgba(255,255,255,0.22)",  // facet edge highlight
  shimmer: [
    "rgba(150,200,255,0.15)",  // ice blue
    "rgba(200,160,255,0.12)",  // lavender
    "rgba(255,220,120,0.10)",  // gold
    "rgba(120,255,200,0.10)",  // mint
  ],
}

function createDiamond(W, H) {
  const size = 40 + Math.random() * 100
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    size,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.004,
    driftX: (Math.random() - 0.5) * 0.25,
    driftY: (Math.random() - 0.5) * 0.18 - 0.05,  // slight upward drift
    opacity: 0.2 + Math.random() * 0.6,
    shimmerPhase: Math.random() * Math.PI * 2,
    shimmerSpeed: 0.3 + Math.random() * 0.8,
    facetSeed: Math.floor(Math.random() * 6),
    type: Math.random() > 0.5 ? "diamond" : "prism",  // diamond or elongated prism
  }
}

function drawDiamond(ctx, d, t) {
  const { x, y, size, rotation, opacity, shimmerPhase, shimmerSpeed, facetSeed, type } = d

  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.globalAlpha = opacity

  const shimmer = (Math.sin(t * shimmerSpeed + shimmerPhase) + 1) / 2  // 0..1

  if (type === "diamond") {
    // Classic 4-point diamond: top, right, bottom, left
    const tw = size * 0.55   // half-width
    const th = size * 0.85   // half-height

    // Back face (full outline)
    ctx.beginPath()
    ctx.moveTo(0, -th)
    ctx.lineTo(tw, 0)
    ctx.lineTo(0, th)
    ctx.lineTo(-tw, 0)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[facetSeed % CHARCOAL.facet.length]
    ctx.fill()

    // Upper-left facet
    ctx.beginPath()
    ctx.moveTo(0, -th)
    ctx.lineTo(0, -th * 0.15)
    ctx.lineTo(-tw, 0)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[2]
    ctx.fill()

    // Upper-right facet (brighter)
    ctx.beginPath()
    ctx.moveTo(0, -th)
    ctx.lineTo(0, -th * 0.15)
    ctx.lineTo(tw, 0)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[3]
    ctx.fill()

    // Lower-left facet
    ctx.beginPath()
    ctx.moveTo(-tw, 0)
    ctx.lineTo(0, -th * 0.15)
    ctx.lineTo(0, th)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[1]
    ctx.fill()

    // Lower-right facet
    ctx.beginPath()
    ctx.moveTo(tw, 0)
    ctx.lineTo(0, -th * 0.15)
    ctx.lineTo(0, th)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[0]
    ctx.fill()

    // Shimmer highlight — top-right edge
    const shimmerCol = CHARCOAL.shimmer[Math.floor(shimmerPhase * 2) % CHARCOAL.shimmer.length]
    ctx.globalAlpha = opacity * shimmer * 0.9
    ctx.beginPath()
    ctx.moveTo(0, -th)
    ctx.lineTo(tw, 0)
    ctx.lineTo(0, -th * 0.15)
    ctx.closePath()
    ctx.fillStyle = shimmerCol
    ctx.fill()

    // Edge highlight lines
    ctx.globalAlpha = opacity * 0.5
    ctx.strokeStyle = CHARCOAL.edge
    ctx.lineWidth = 0.6
    ctx.beginPath()
    ctx.moveTo(0, -th)
    ctx.lineTo(tw, 0)
    ctx.lineTo(0, th)
    ctx.lineTo(-tw, 0)
    ctx.closePath()
    ctx.moveTo(0, -th)
    ctx.lineTo(0, -th * 0.15)
    ctx.moveTo(-tw, 0)
    ctx.lineTo(0, -th * 0.15)
    ctx.moveTo(tw, 0)
    ctx.lineTo(0, -th * 0.15)
    ctx.moveTo(0, -th * 0.15)
    ctx.lineTo(0, th)
    ctx.stroke()

  } else {
    // Elongated hexagonal prism (tall crystal shard)
    const pw = size * 0.35
    const ph = size * 1.1
    const pt = size * 0.3   // pointed top cap height

    // Main body rectangle
    ctx.beginPath()
    ctx.moveTo(-pw, -ph + pt)
    ctx.lineTo(pw, -ph + pt)
    ctx.lineTo(pw, ph * 0.6)
    ctx.lineTo(-pw, ph * 0.6)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[(facetSeed + 1) % CHARCOAL.facet.length]
    ctx.fill()

    // Left face (darker)
    ctx.beginPath()
    ctx.moveTo(-pw, -ph + pt)
    ctx.lineTo(-pw * 1.6, -ph + pt + pt * 0.5)
    ctx.lineTo(-pw * 1.6, ph * 0.6 + pt * 0.3)
    ctx.lineTo(-pw, ph * 0.6)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[0]
    ctx.fill()

    // Right face (lighter)
    ctx.beginPath()
    ctx.moveTo(pw, -ph + pt)
    ctx.lineTo(pw * 1.6, -ph + pt + pt * 0.5)
    ctx.lineTo(pw * 1.6, ph * 0.6 + pt * 0.3)
    ctx.lineTo(pw, ph * 0.6)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[3]
    ctx.fill()

    // Top faceted cap
    ctx.beginPath()
    ctx.moveTo(0, -ph)
    ctx.lineTo(pw, -ph + pt)
    ctx.lineTo(0, -ph + pt * 0.5)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[4]
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, -ph)
    ctx.lineTo(-pw, -ph + pt)
    ctx.lineTo(0, -ph + pt * 0.5)
    ctx.closePath()
    ctx.fillStyle = CHARCOAL.facet[5]
    ctx.fill()

    // Shimmer streak on front face
    const shimmerCol2 = CHARCOAL.shimmer[(Math.floor(shimmerPhase) + 1) % CHARCOAL.shimmer.length]
    ctx.globalAlpha = opacity * shimmer * 0.7
    const grd = ctx.createLinearGradient(-pw, -ph, pw, ph * 0.4)
    grd.addColorStop(0, shimmerCol2)
    grd.addColorStop(0.5, "transparent")
    grd.addColorStop(1, "transparent")
    ctx.fillStyle = grd
    ctx.beginPath()
    ctx.rect(-pw, -ph + pt, pw * 2, (ph * 0.6 - (-ph + pt)))
    ctx.fill()

    // Outline
    ctx.globalAlpha = opacity * 0.4
    ctx.strokeStyle = CHARCOAL.edge
    ctx.lineWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(0, -ph)
    ctx.lineTo(pw, -ph + pt)
    ctx.lineTo(pw * 1.6, -ph + pt + pt * 0.5)
    ctx.lineTo(pw * 1.6, ph * 0.6 + pt * 0.3)
    ctx.lineTo(pw, ph * 0.6)
    ctx.lineTo(-pw, ph * 0.6)
    ctx.lineTo(-pw * 1.6, ph * 0.6 + pt * 0.3)
    ctx.lineTo(-pw * 1.6, -ph + pt + pt * 0.5)
    ctx.lineTo(-pw, -ph + pt)
    ctx.closePath()
    ctx.stroke()
  }

  ctx.restore()
}

// Scattered tiny sparkle points
function drawSparkle(ctx, sx, sy, r, alpha) {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.fillStyle = "rgba(255,255,255,0.9)"
  ctx.shadowColor = "rgba(200,220,255,0.8)"
  ctx.shadowBlur = 6
  ctx.beginPath()
  ctx.arc(sx, sy, r, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

export function GlitchBackground({ isHovered = false }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({
    diamonds: [],
    sparkles: [],
    animId: null,
    t: 0,
    W: 0,
    H: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    const state = stateRef.current

    function resize() {
      const dpr = window.devicePixelRatio || 1
      state.W = canvas.offsetWidth
      state.H = canvas.offsetHeight
      canvas.width = state.W * dpr
      canvas.height = state.H * dpr
      ctx.scale(dpr, dpr)
      init()
    }

    function init() {
      const { W, H } = state
      const count = Math.floor((W * H) / 28000)  // density
      state.diamonds = Array.from({ length: Math.max(8, count) }, () => createDiamond(W, H))
      state.sparkles = Array.from({ length: 25 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.2,
        driftX: (Math.random() - 0.5) * 0.3,
        driftY: -0.05 - Math.random() * 0.15,
      }))
    }

    function draw(timestamp) {
      const { W, H } = state
      state.t = timestamp / 1000

      // Background gradient — deep charcoal
      ctx.clearRect(0, 0, W, H)
      const bg = ctx.createRadialGradient(W * 0.5, H * 0.35, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.75)
      bg.addColorStop(0, "#232328")
      bg.addColorStop(0.6, "#18181c")
      bg.addColorStop(1, "#0e0e11")
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Subtle vignette
      const vg = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.55)
      vg.addColorStop(0, "transparent")
      vg.addColorStop(1, "rgba(0,0,0,0.45)")
      ctx.fillStyle = vg
      ctx.fillRect(0, 0, W, H)

      // Draw diamonds
      for (const d of state.diamonds) {
        d.x += d.driftX
        d.y += d.driftY
        d.rotation += d.rotSpeed

        // Wrap around edges
        if (d.y < -d.size * 2) d.y = H + d.size
        if (d.y > H + d.size * 2) d.y = -d.size
        if (d.x < -d.size * 2) d.x = W + d.size
        if (d.x > W + d.size * 2) d.x = -d.size

        drawDiamond(ctx, d, state.t)
      }

      // Draw sparkles
      for (const s of state.sparkles) {
        s.x += s.driftX
        s.y += s.driftY
        s.phase += s.speed * 0.016
        if (s.y < -10) { s.y = H + 10; s.x = Math.random() * W }

        const alpha = ((Math.sin(s.phase) + 1) / 2) * 0.7
        if (alpha > 0.05) drawSparkle(ctx, s.x, s.y, s.r, alpha)
      }

      // Hover: brighten center
      if (isHovered) {
        const hg = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, W * 0.4)
        hg.addColorStop(0, "rgba(200,220,255,0.04)")
        hg.addColorStop(1, "transparent")
        ctx.fillStyle = hg
        ctx.fillRect(0, 0, W, H)
      }

      state.animId = requestAnimationFrame(draw)
    }

    resize()
    state.animId = requestAnimationFrame(draw)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(state.animId)
      ro.disconnect()
    }
  }, [isHovered])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden="true"
      />
    </div>
  )
}

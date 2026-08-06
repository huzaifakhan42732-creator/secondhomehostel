"use client"

import { useEffect, useRef } from "react"

function drawPlatform(ctx, W, t) {
  const cx = W / 2, cy = W / 2
  const r = W * 0.36
  const ps = W / 12

  const pulse = 0.6 + 0.4 * Math.sin(t * 0.003)
  ctx.fillStyle = `rgba(0,0,0,${pulse})`
  const cs = ps * 1.4
  ctx.fillRect(cx - cs / 2, cy - cs / 2, cs, cs)

  const nodeCount = 6
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2 + t * 0.0015
    const nx = cx + Math.cos(angle) * r
    const ny = cy + Math.sin(angle) * r
    const opacity = 0.3 + 0.5 * ((Math.sin(angle * 2 + t * 0.002) + 1) / 2)
    ctx.fillStyle = `rgba(0,0,0,${opacity})`
    ctx.fillRect(Math.round(nx / ps) * ps - ps / 2, Math.round(ny / ps) * ps - ps / 2, ps, ps)

    const steps = 5
    for (let s = 1; s < steps; s++) {
      const lx = cx + (nx - cx) * (s / steps)
      const ly = cy + (ny - cy) * (s / steps)
      const lo = (0.06 + 0.1 * (s / steps)) * pulse
      ctx.fillStyle = `rgba(0,0,0,${lo})`
      ctx.fillRect(Math.round(lx / ps) * ps, Math.round(ly / ps) * ps, ps * 0.7, ps * 0.7)
    }
  }
}

const AGENT_FRAMES = [
  [
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,0,0,1,1,0],
    [0,1,1,0,0,1,1,0],
    [0,0,1,0,0,1,0,0],
    [0,1,1,0,0,1,1,0],
  ],
  [
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,0,0,0,1,1,0],
    [1,1,0,0,0,0,1,0],
    [1,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,1],
  ],
]

function drawAgents(ctx, W, t) {
  const frameIdx = Math.floor(t * 0.004) % AGENT_FRAMES.length
  const frame = AGENT_FRAMES[frameIdx]
  const ps = W / 10
  const offX = ps
  const offY = ps

  for (let r = 0; r < frame.length; r++) {
    for (let c = 0; c < frame[r].length; c++) {
      if (frame[r][c]) {
        const flicker = 0.65 + 0.35 * Math.sin(t * 0.005 + r + c)
        ctx.fillStyle = `rgba(0,0,0,${flicker})`
        ctx.fillRect(offX + c * ps, offY + r * ps, ps, ps)
      }
    }
  }
}

function drawWorkflow(ctx, W, t) {
  const ps = W / 12
  const flowT = (t * 0.003) % 1
  for (let i = 0; i < 12; i++) {
    const pulse = Math.sin((i / 12) * Math.PI * 2 - flowT * Math.PI * 2)
    const op = Math.max(0.08, 0.15 + 0.6 * pulse)
    ctx.fillStyle = `rgba(0,0,0,${op})`
    ctx.fillRect(i * ps, (5 + Math.floor(pulse * 2)) * ps, ps, ps)
  }
}

function drawIntegrations(ctx, W, t) {
  const ps = W / 12
  const rot = t * 0.002
  for (let x = 2; x < 10; x += 3) {
    for (let y = 2; y < 10; y += 3) {
      const op = 0.2 + 0.7 * Math.abs(Math.sin(rot + x + y))
      ctx.fillStyle = `rgba(0,0,0,${op})`
      ctx.fillRect(x * ps, y * ps, ps * 2, ps * 2)
    }
  }
}

function drawPricing(ctx, W, t) {
  const ps = W / 12
  for (let col = 0; col < 3; col++) {
    const height = Math.floor(4 + 5 * Math.abs(Math.sin(t * 0.002 + col)))
    for (let row = 0; row < height; row++) {
      const op = 0.3 + 0.6 * (row / 9)
      ctx.fillStyle = `rgba(0,0,0,${op})`
      ctx.fillRect((2 + col * 3) * ps, (10 - row) * ps, ps * 2, ps)
    }
  }
}

export function PixelIcon({ type, size = 40 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let active = true

    const draw = (t) => {
      if (!active) return
      canvas.width = size * devicePixelRatio
      canvas.height = size * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      ctx.clearRect(0, 0, size, size)

      if (type === "platform") drawPlatform(ctx, size, t)
      else if (type === "agents") drawAgents(ctx, size, t)
      else if (type === "workflow") drawWorkflow(ctx, size, t)
      else if (type === "integrations") drawIntegrations(ctx, size, t)
      else if (type === "pricing") drawPricing(ctx, size, t)

      requestAnimationFrame(draw)
    }

    const rafId = requestAnimationFrame(draw)
    return () => {
      active = false
      cancelAnimationFrame(rafId)
    }
  }, [type, size])

  return <canvas ref={canvasRef} style={{ width: size, height: size }} />
}

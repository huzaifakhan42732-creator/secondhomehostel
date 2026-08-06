"use client"

import { useEffect, useRef, useState } from "react"

export function RevealText({
  children,
  className = "",
  as: Tag = "h2",
  stagger = 80,
  duration = 700,
  delay = 0,
  threshold = 0.2,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const parts = children.split(/(\n)/g)
  const words = []
  let wordIndex = 0
  parts.forEach((part) => {
    if (part === "\n") {
      words.push({ word: "\n", index: wordIndex++ })
    } else {
      part.split(" ").forEach((w, i, arr) => {
        if (w) words.push({ word: i < arr.length - 1 ? w + "\u00A0" : w, index: wordIndex++ })
      })
    }
  })

  let wordCount = 0

  return (
    <Tag ref={ref} className={className}>
      {words.map((item, idx) => {
        if (item.word === "\n") return <br key={idx} />
        const wIdx = wordCount++
        const wordDelay = delay + wIdx * stagger

        return (
          <span
            key={idx}
            className="inline-block transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(12px)",
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: `${wordDelay}ms`,
              transitionDuration: `${duration}ms`,
            }}
          >
            {item.word}
          </span>
        )
      })}
    </Tag>
  )
}

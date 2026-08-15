"use client"

import { useEffect, useState } from "react"

const WORDS = ["THE", "SECOND", "HOME", "BOYS", "HOSTEL"]
const FULL_STRING = "THE SECOND HOME BOYS HOSTEL"
const LETTERS = FULL_STRING.split("")

const LETTER_IN_STAGGER = 45
const LETTER_IN_DUR = 500
const HOLD_DURATION = 200
const LETTERS_IN_TOTAL = LETTER_IN_STAGGER * (LETTERS.length - 1) + LETTER_IN_DUR + HOLD_DURATION

const LETTER_OUT_STAGGER = 30
const LETTER_OUT_DUR = 350
const LETTERS_OUT_TOTAL = LETTER_OUT_STAGGER * (LETTERS.length - 1) + LETTER_OUT_DUR

const CURTAIN_DELAY = LETTERS_IN_TOTAL + 80
const CURTAIN_DURATION = 1000
const ANIM_TOTAL = CURTAIN_DELAY + LETTERS_OUT_TOTAL + 1000

export const INTRO_DURATION_MS = CURTAIN_DELAY + CURTAIN_DURATION
export const HERO_REVEAL_MS = CURTAIN_DELAY + CURTAIN_DURATION - 150

export function IntroAnimation({ onDone }) {
  const [phase, setPhase] = useState("idle")
  const [curtainUp, setCurtainUp] = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("in"), 80)
    const t1 = setTimeout(() => setPhase("out"), LETTERS_IN_TOTAL)
    const t2 = setTimeout(() => setCurtainUp(true), CURTAIN_DELAY)
    const t3 = setTimeout(() => onDone(), HERO_REVEAL_MS)
    const t4 = setTimeout(() => setPhase("done"), ANIM_TOTAL)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [onDone])

  if (phase === "done") return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden max-w-full" aria-hidden="true">
      {/* Gradient curtain */}
      <div
        className="absolute inset-x-0 top-0 bg-[#faf9f6]"
        style={{
          bottom: curtainUp ? "100%" : "0%",
          transition: curtainUp ? "bottom 1.0s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
        }}
      >
        {/* Soft golden ambient radial shine matching the warm prism theme */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: phase === "in" ? 1 : 0,
            transition: "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)",
            background:
              "radial-gradient(ellipse 75% 55% at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(251, 191, 36, 0.05) 50%, rgba(250, 249, 246, 0) 85%)",
          }}
        />
      </div>

      {/* Letters reveal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 gap-y-2 max-w-5xl">
          {WORDS.map((word, wordIdx) => {
            const startOffset = WORDS.slice(0, wordIdx).reduce((acc, w) => acc + w.length + 1, 0)
            return (
              <div key={word} className="flex" style={{ gap: "0.04em" }}>
                {word.split("").map((letter, letterIdx) => {
                  const globalIdx = startOffset + letterIdx
                  const inDelay = globalIdx * LETTER_IN_STAGGER
                  const outDelay = globalIdx * LETTER_OUT_STAGGER

                  const isIdle = phase === "idle"
                  const isIn = phase === "in"
                  const isOut = phase === "out"

                  const opacity = isIdle ? 0 : isIn ? 1 : 0
                  const translateY = isIdle ? 36 : isIn ? 0 : -16
                  const scale = isIdle ? 0.94 : isIn ? 1 : 0.98

                  const filter = isIdle
                    ? "blur(28px)"
                    : isIn
                    ? "blur(0px) drop-shadow(0 2px 4px rgba(180, 83, 9, 0.30)) drop-shadow(0 8px 18px rgba(245, 158, 11, 0.20)) drop-shadow(0 16px 30px rgba(217, 119, 6, 0.10))"
                    : "blur(20px)"

                  const transition = isOut
                    ? `opacity ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
                       filter  ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
                       transform ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms`
                    : isIn
                    ? `opacity ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                       filter  ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                       transform ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms`
                    : "none"

                  return (
                    <span
                      key={letterIdx}
                      className="font-sans font-extrabold leading-none select-none text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider inline-block"
                      style={{
                        opacity,
                        filter,
                        transform: `translateY(${translateY}px) scale(${scale})`,
                        transition,
                        willChange: "opacity, filter, transform",
                        background:
                          "linear-gradient(135deg, #fffbeb 0%, #fde68a 15%, #f59e0b 40%, #d97706 70%, #b45309 88%, #78350f 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {letter}
                    </span>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function AnimatedLogo() {
  const iaRef = useRef<HTMLSpanElement>(null)
  const [displayText, setDisplayText] = useState("IA")
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    const animateIA = () => {
      // Start flip animation after 5 seconds
      setTimeout(() => {
        // Start flip animation
        setIsFlipping(true)

        // Change text to "AI" halfway through the flip
        setTimeout(() => {
          setDisplayText("AI")

          // Hold "AI" for 4 seconds before flipping back
          setTimeout(() => {
            // Flip back to "IA"
            setIsFlipping(true)

            // Change text back to "IA" halfway through the flip back
            setTimeout(() => {
              setDisplayText("IA")
              setIsFlipping(false)

              // Wait 5 seconds before starting the next animation cycle
              setTimeout(animateIA, 5000)
            }, 150)
          }, 4000) // Hold "AI" for 4 seconds
        }, 150)
      }, 5000) // Wait 5 seconds before starting animation
    }

    // Start the animation cycle
    animateIA()

    // No cleanup needed since we removed the glitch animation
  }, [])

  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-10 flex items-center">
        <span className="text-blue-600 font-bold text-2xl">TechFin</span>
        <span ref={iaRef} className={`text-red-600 font-bold text-2xl relative ${isFlipping ? "animate-flip" : ""}`}>
          {displayText}
        </span>
      </div>
    </Link>
  )
}


"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function Cursor() {
  const [mounted, setMounted] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  // Only show on desktop
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
     return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-primary/50 bg-primary/20 backdrop-blur-[1px] md:block mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  )
}

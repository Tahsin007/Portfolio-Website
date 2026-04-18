"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function Cursor() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
    () => {
    setMounted(true); // Set mounted to true once on client-side mount
  }, []); // Empty dependency array ensures it runs only once

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    if (mounted) { // Only add event listener if mounted
      window.addEventListener("mousemove", moveCursor)
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY, mounted]) // Add mounted to dependencies

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
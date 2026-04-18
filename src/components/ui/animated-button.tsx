"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

interface AnimatedButtonProps {
  href: string
  children: ReactNode
  delay?: number
}

export function AnimatedButton({ href, children, delay = 0.8 }: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Link
        href={href}
        className="group inline-flex items-center justify-center rounded-full border-2 border-foreground/80 bg-transparent px-10 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-lg"
      >
        {children}
        <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

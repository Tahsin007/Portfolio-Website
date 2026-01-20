"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-8"
      >
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Available for new projects
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 pb-2">
          Full service <span className="italic">Development Team</span><br />
          For Non-Technical Founders
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          Get a dedicated team of experts to build your digital presence. 
          We specialize in premium web design and development.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
          >
            Start your project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View Work
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

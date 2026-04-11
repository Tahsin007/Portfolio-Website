"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroV2() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/5 blur-[150px] rounded-full opacity-60 pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 space-y-10 max-w-5xl"
      >
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
          <span className="font-serif">Let&apos;s </span>
          <span className="relative inline-block font-serif">
            design
            {/* Hand-drawn circle SVG accent */}
            <motion.svg
              viewBox="0 0 200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -inset-x-[18%] -inset-y-[20%] w-[136%] h-[140%] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.path
                d="M 30 38 C 30 18, 60 6, 100 6 C 140 6, 175 16, 178 36 C 181 56, 148 74, 100 75 C 52 76, 18 62, 20 42 C 22 28, 48 18, 80 16"
                stroke="#C9963B"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.75"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
              />
              {/* Second subtle pass for organic feel */}
              <motion.path
                d="M 78 16 C 120 12, 168 20, 174 40 C 178 54, 155 68, 120 72"
                stroke="#C9963B"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.0, delay: 2.0, ease: "easeInOut" }}
              />
            </motion.svg>
          </span>
          <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl"> a website that</span>
          <br />
          <motion.span 
            className="italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 dark:from-rose-300 dark:via-pink-400 dark:to-rose-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            does the hard work for you.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p 
          className="mx-auto max-w-2xl text-sm sm:text-base uppercase tracking-[0.2em] font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Providing{" "}
          <span className="text-rose-500 dark:text-rose-400 font-semibold">
            premium web design & development
          </span>{" "}
          <br className="hidden sm:block" />
          services to startups and founders worldwide
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full border-2 border-foreground/80 bg-transparent px-10 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-lg"
          >
            Web Design Services
            <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <MapPin className="h-3.5 w-3.5 text-rose-500 dark:text-rose-400" />
          <span>Working from London, UK & New York City, NY</span>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 rounded-full bg-rose-400/30"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-3 h-3 rounded-full bg-pink-400/20"
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  )
}

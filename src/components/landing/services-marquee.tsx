"use client"

import { motion } from "framer-motion"

const services = [
  "Squarespace",
  "Shopify",
  "Wix",
  "Webflow",
  "Framer",
  "Next.js",
  "React",
  "Design",
  "Development",
  "Squarespace",
  "Shopify",
  "Wix",
  "Webflow",
  "Framer",
]

export function ServicesMarquee() {
  return (
    <div className="relative flex w-full overflow-hidden border-y border-white/5 bg-white/5 py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        <div className="flex gap-16 px-8">
          {services.map((service, i) => (
            <span
              key={i}
              className="text-2xl font-semibold text-muted-foreground/50 transition-colors hover:text-foreground cursor-default uppercase tracking-widest"
            >
              {service}
            </span>
          ))}
        </div>
         <div className="flex gap-16 px-8">
          {services.map((service, i) => (
            <span
              key={`${i}-clone`}
              className="text-2xl font-semibold text-muted-foreground/50 transition-colors hover:text-foreground cursor-default uppercase tracking-widest"
            >
              {service}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

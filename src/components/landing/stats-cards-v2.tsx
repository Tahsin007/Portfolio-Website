"use client"

import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"
import { useRef, useEffect, useState } from "react"

interface StatCardProps {
  value: string
  suffix?: string
  icon?: React.ReactNode
  title: string
  subtitle: string
  delay: number
}

function AnimatedNumber({ target, duration = 2, delay = 0 }: { target: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      let start = 0
      const increment = target / (duration * 60) // 60fps
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, target, duration, delay])

  return <span ref={ref}>{count}</span>
}

function StatCard({ value, suffix, icon, title, subtitle, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center text-center space-y-3 p-8 md:p-10 rounded-3xl border border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Value */}
      <div className="relative flex items-baseline gap-1">
        <span className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter font-serif">
          {value}
        </span>
        {suffix && (
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-muted-foreground">
            {suffix}
          </span>
        )}
        {icon && (
          <span className="ml-1">
            {icon}
          </span>
        )}
      </div>

      {/* Labels */}
      <div className="relative space-y-1">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
          {title}
        </p>
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </motion.div>
  )
}

const stats = [
  {
    value: "500",
    suffix: "+",
    title: "Websites Built",
    subtitle: "& Customised",
    delay: 0,
  },
  {
    value: "5",
    suffix: "",
    icon: <Star className="h-8 w-8 sm:h-10 sm:w-10 fill-yellow-400 text-yellow-400" />,
    title: "Unanimous 5/5 Rating",
    subtitle: "On Google Business",
    delay: 0.1,
  },
  {
    value: "2005",
    suffix: "",
    title: "Building Websites",
    subtitle: "Professionally For 20+ Years",
    delay: 0.2,
  },
  {
    value: "8",
    suffix: "",
    title: "Years",
    subtitle: "Specialising Exclusively",
    delay: 0.3,
  },
]

export function StatsCardsV2() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full border border-border/40 bg-muted/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Track Record
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              icon={stat.icon}
              title={stat.title}
              subtitle={stat.subtitle}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Bottom decorative divider */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

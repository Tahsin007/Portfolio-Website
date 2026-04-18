"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { SectionBadge } from "../ui/section-badge"

interface StatCardProps {
  value: string
  suffix?: string
  icon?: React.ReactNode
  title: string
  subtitle: string
  delay: number
}

function StatCard({ value, suffix, icon, title, subtitle, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center justify-center text-center space-y-3 p-8 md:p-10 rounded-[2.5rem] border border-foreground/10 bg-background/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgb(225,29,72,0.1)]"
    >
      {/* Animated Glowing Background Blobs */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-rose-500/10 dark:bg-rose-500/10 blur-[60px] group-hover:bg-rose-500/20 group-hover:scale-125 transition-all duration-700 ease-out z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-pink-500/10 dark:bg-pink-500/10 blur-[60px] group-hover:bg-pink-500/20 group-hover:scale-125 transition-all duration-700 ease-out z-0 pointer-events-none" />
      
      {/* Decorative line at the bottom */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center z-10 pointer-events-none" />

      {/* Value */}
      <div className="relative z-10 flex items-baseline gap-1">
        <span className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter font-serif group-hover:text-rose-500 transition-colors duration-300">
          {value}
        </span>
        {suffix && (
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-muted-foreground group-hover:text-rose-400 transition-colors duration-300">
            {suffix}
          </span>
        )}
        {icon && (
          <span className="ml-2 z-10 transition-transform duration-500 group-hover:scale-110">
            {icon}
          </span>
        )}
      </div>

      {/* Labels */}
      <div className="relative z-10 space-y-1">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] group-hover:text-foreground transition-colors duration-300">
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
          <SectionBadge title="Track Record"></SectionBadge>
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

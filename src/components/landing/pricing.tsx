"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Gem, ArrowRight } from "lucide-react"
import Link from "next/link"

const options = [
  {
    id: 1,
    name: "Basic",
    price: "$395",
    period: "flat fee",
    description: "Perfect for small businesses starting out or needing a simple web presence.",
    features: [
      "Squarespace 7.1 Template Setup",
      "Up to 5 Pages (Home, About, Services, etc.)",
      "Mobile-Responsive Design",
      "Basic On-Page SEO",
      "Contact Form Integration",
      "1 Round of Revisions"
    ],
    cta: "Start Basic",
    recommended: false,
    icon: Zap,
  },
  {
    id: 2,
    name: "Standard",
    price: "$695",
    period: "flat fee",
    description: "Ideal for growing businesses needing a custom and engaging experience.",
    features: [
      "Custom Squarespace Design (No templates)",
      "Up to 10 Pages",
      "Advanced Interactions & Animations",
      "Advanced SEO Optimization Setup",
      "E-commerce (Up to 10 Products) or Blog",
      "3 Rounds of Revisions",
      "1-Hour Training Call"
    ],
    cta: "Start Standard",
    recommended: true,
    icon: Star,
  },
  {
    id: 3,
    name: "Premium",
    price: "$1,295",
    period: "flat fee",
    description: "For established brands seeking a robust and completely unique platform.",
    features: [
      "Fully Custom & Tailored Design",
      "Unlimited initial pages setup",
      "Complex Custom Code Integrations",
      "Full E-commerce Setup (Unlimited Products)",
      "Copywriting & Content Strategy",
      "Unlimited Revisions",
      "3-Months Priority Support"
    ],
    cta: "Start Premium",
    recommended: false,
    icon: Gem,
  },
]

export function Pricing() {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.03
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-500 dark:text-rose-400">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            <span className="font-serif">Transparent </span>
            <span className="font-serif italic font-medium">investment.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Choose the package that perfectly fits your business needs. Regardless of where you start, you're getting premier Squarespace expertise.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`group relative flex flex-col rounded-[2.5rem] border ${option.recommended ? 'border-rose-500/50 bg-background/80' : 'border-foreground/10 bg-background/60'} p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgb(225,29,72,0.1)]`}
              >
                {/* Animated Glowing Background Blobs */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-rose-500/10 dark:bg-rose-500/10 blur-[80px] group-hover:bg-rose-500/20 group-hover:scale-125 transition-all duration-700 ease-out z-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-pink-500/10 dark:bg-pink-500/10 blur-[80px] group-hover:bg-pink-500/20 group-hover:scale-125 transition-all duration-700 ease-out z-0 pointer-events-none" />

                {/* Top Header */}
                <div className="relative z-10 mb-8 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold tracking-wide shadow-sm transition-colors ${option.recommended ? 'border-rose-500/30 bg-rose-500/10 text-rose-500 dark:text-rose-400' : 'border-foreground/10 bg-foreground/5 text-foreground group-hover:bg-foreground/10'}`}>
                      {option.recommended ? (
                        <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                      ) : (
                        <span className="flex h-2 w-2 rounded-full bg-foreground/30" />
                      )}
                      {option.name}
                    </span>

                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 ${option.recommended ? 'border-rose-500/30 bg-background/80 text-rose-500 group-hover:shadow-rose-500/20' : 'border-foreground/10 bg-background/80 text-foreground group-hover:border-rose-500/30 group-hover:text-rose-500'}`}>
                      <Icon className="h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm min-h-[40px]">
                    {option.description}
                  </p>
                </div>

                {/* Price */}
                <div className="relative z-10 mb-8 flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold tracking-tighter font-serif group-hover:text-rose-500 transition-colors duration-300">
                    {option.price}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-muted-foreground">
                    / {option.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="relative z-10 mb-10 space-y-4 flex-1">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                        <Check className="h-3 w-3 flex-shrink-0" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="relative z-10 mt-auto">
                  <Link
                    href="/contact"
                    className={`group/btn flex h-14 w-full items-center justify-center rounded-full border-2 text-xs sm:text-sm tracking-[0.1em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${option.recommended ? 'border-rose-500 bg-rose-500 text-white hover:bg-transparent hover:text-rose-500' : 'border-foreground/80 bg-transparent text-foreground hover:bg-foreground hover:text-background'}`}
                  >
                    {option.cta}
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative line at the bottom */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center z-10 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

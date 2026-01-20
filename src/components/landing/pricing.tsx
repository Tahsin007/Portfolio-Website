"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const options = [
  {
    id: 1,
    name: "Two Week Sprint",
    price: "$12,995",
    period: "/flat fee",
    description: "Fast-track your dev projects without compromising quality.",
    features: [
      "You're hiring a six-person, well oiled machine",
      "24 years of combined experience",
      "Proven track record (164 projects done)",
      "No meetings needed",
      "Single investment, multiple rewards",
    ],
    cta: "Get Started",
  },
  {
    id: 2,
    name: "Monthly Subscription",
    price: "$19,995",
    period: "/monthly",
    description: "Fast-track your dev projects without compromising quality.",
    features: [
        "You're hiring a six-person, well oiled machine",
        "24 years of combined experience",
        "Proven track record (164 projects done)",
        "We can meet sometimes",
        "6 senior designers for the price of 1",
    ],
    cta: "Get Going",
  },
]

export function Pricing() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
         <div className="grid gap-8 lg:grid-cols-2">
            {options.map((option, index) => (
                <motion.div
                    key={option.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10"
                >
                    <div className="mb-8">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
                            Option {option.id}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{option.name}</h3>
                        <p className="text-muted-foreground">{option.description}</p>
                    </div>

                    <div className="mb-8 flex items-baseline">
                         <span className="text-5xl font-bold tracking-tight">{option.price}</span>
                         <span className="ml-2 text-muted-foreground">{option.period}</span>
                    </div>

                    <ul className="mb-10 space-y-4 flex-1">
                        {option.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                <Check className="h-5 w-5 shrink-0 text-muted-foreground/50" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/contact"
                        className="flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/5 font-medium transition-colors hover:bg-white/10 hover:scale-105"
                    >
                        {option.cta}
                    </Link>
                </motion.div>
            ))}
         </div>
      </div>
    </section>
  )
}

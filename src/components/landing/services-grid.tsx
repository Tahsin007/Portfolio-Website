"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    description: "We build robust, scalable web applications tailored to your business needs, using the latest technologies.",
    slug: "web-apps",
  },
  {
    title: "iOS Applications",
    description: "Native iOS applications that provide seamless user experiences and integrate perfectly with the Apple ecosystem.",
    slug: "ios-apps",
  },
  {
    title: "Landing Pages & Websites",
    description: "High-converting landing pages and stunning websites that tell your brand story and drive results.",
    slug: "landing-pages",
  },
  {
    title: "QA Testing",
    description: "Comprehensive quality assurance testing to ensure your software is bug-free and reliable before launch.",
    slug: "qa-testing",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
         <div className="grid gap-6 md:grid-cols-2">
           {services.map((service, index) => (
             <motion.div
               key={service.slug}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
               viewport={{ once: true }}
               className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10 hover:border-white/20"
             >
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                         <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-foreground">
                            <Check className="h-5 w-5" />
                        </div>
                        {index === 1 && (
                            <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground hover:bg-white/5 cursor-pointer">
                                View Examples &rarr;
                            </div>
                        )}
                    </div>
                
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    
                    <div className="space-y-4 text-muted-foreground">
                        <p>{service.description}</p>
                        <p>Before we embark on this journey it&apos;s mandatory that we get to know each other first.</p>
                         <p>We&apos;ll talk about our projects, ideas and strategies and ultimately see if we are the right fit.</p>
                    </div>
                </div>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  )
}

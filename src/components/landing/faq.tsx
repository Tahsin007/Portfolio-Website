"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { SectionBadge } from "../ui/section-badge"

const faqs = [
  {
    question: "What do you specialize in?",
    answer: "We specialize in designing and developing custom Squarespace websites that are visually stunning, easy to manage, and optimized for conversions.",
  },
  {
    question: "How much does a new Squarespace website cost?",
    answer: "Our pricing depends on the scope of the project, including the number of pages, custom features, and design complexity. Contact us for a custom quote tailored to your specific needs.",
  },
  {
    question: "Do you offer ongoing support after the site is launched?",
    answer: "Yes! We offer monthly maintenance packages to ensure your Squarespace site stays updated, secure, and running smoothly. We're here for any future updates or tweaks.",
  },
  {
    question: "How long does it take to build a Squarespace website?",
    answer: "A typical project takes anywhere from 2 to 4 weeks depending on the complexity, design requirements, and how quickly we receive feedback and content from your end.",
  },
  {
    question: "Will my site be mobile-friendly and responsive?",
    answer: "Absolutely. Every Squarespace website we design is fully responsive, ensuring it looks and performs flawlessly across all devices—from desktop to mobile.",
  },
  {
    question: "Can you help with Squarespace SEO?",
    answer: "Yes, we implement Squarespace SEO best practices from the start, including optimizing page titles, meta descriptions, image alt text, and site structure to improve your search rankings.",
  },
  {
    question: "Do you migrate existing websites to Squarespace?",
    answer: "Yes, we can seamlessly migrate your current website from WordPress, Wix, or other platforms to Squarespace, preserving your content and SEO equity where possible.",
  },
  {
    question: "Can I update the website myself once it's finished?",
    answer: "Yes! The beauty of Squarespace is its user-friendly interface. We provide a handover training session so you'll feel completely confident updating text, images, and managing your site.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl space-y-16">
         <div className="text-center space-y-4">
             <SectionBadge title="FAQ"></SectionBadge>
             <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Questions Answered</h2>
             <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                 If you don&apos;t see your question answered here it goes without saying, reach out.
             </p>
         </div>

         <div className="grid gap-4 md:grid-cols-2">
             {faqs.map((faq, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="h-fit rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-white/20"
                 >
                     <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex w-full items-center justify-between p-6 text-left"
                     >
                         <span className="text-lg font-medium pr-8">{faq.question}</span>
                         <Plus className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"}`} />
                     </button>
                     <AnimatePresence>
                         {openIndex === index && (
                             <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                             >
                                 <div className="px-6 pb-6 text-muted-foreground">
                                     {faq.answer}
                                 </div>
                             </motion.div>
                         )}
                     </AnimatePresence>
                 </motion.div>
             ))}
         </div>
      </div>
    </section>
  )
}

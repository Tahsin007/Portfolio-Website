"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including Web Design, Web Development (Next.js, React), Mobile App Development (iOS), and QA Testing.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both fixed-price sprints for specific deliverables and monthly subscription models for ongoing development and design support. See our pricing section for details.",
  },
  {
    question: "How much experience does your team have?",
    answer: "Our core team has a combined experience of over 24 years in the industry, having delivered 164+ successful projects.",
  },
  {
    question: "How do you communicate progress during a project?",
    answer: "We believe in transparency. You'll get daily updates and we use tools like Slack or Discord for real-time communication, plus weekly sync calls.",
  },
  {
    question: "Can you handle tight deadlines?",
    answer: "Yes, our 'Two Week Sprint' option is specifically designed for rapid delivery without compromising on quality.",
  },
  {
    question: "Can you work remotely with clients?",
    answer: "Absolutely. We are a fully remote team and have successfully collaborated with clients from all over the globe.",
  },
   {
    question: "What industries do you work with?",
    answer: "We work with startups, fintech, e-commerce, and SaaS companies. However, we are adaptable to almost any industry.",
  },
  {
    question: "What makes your team unique?",
    answer: "We are a full-service team for non-technical founders. We don't just write code; we partner with you to build a product that sells.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl space-y-16">
         <div className="text-center space-y-4">
             <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                FAQ
             </div>
             <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Questions Answered</h2>
             <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                 If you don't see your question answered here it goes without saying, reach out.
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

"use client"

import { motion } from "framer-motion"

const phases = [
  {
    id: 1,
    title: "Pre Flight Inspection",
    description: "Before we embark on this journey it's mandatory that we get to know each other first. We'll talk about our projects, ideas and strategies and ultimately see if we are the right fit.",
  },
  {
    id: 2,
    title: "Ready for liftoff",
    description: "You were delighted to see that we're cool like that. We gave you options that fit the aesthetics and the budget you are working with. At this point we both agree it's time for us to start the journey and liftoff.",
  },
  {
    id: 3,
    title: "Flying high",
    description: "Depending on the project scope, these flights can get loooong, sometimes lasting for months. That's why we'll make sure to storm you with updates every day and answer all the questions your curious mind comes up with.",
  },
  {
    id: 4,
    title: "Course correction",
    description: "This is something we don't do very often but it happens. And when it does, we will do our best to figure it out and turn the project in another direction. That's why we'll once again present you with multiple options.",
  },
]

export function Process() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-4xl space-y-16">
         <div className="text-center space-y-4">
             <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Process
             </div>
             <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Seriously, this is how it goes.</h2>
             <p className="text-lg text-muted-foreground">
                 Here's what you can expect if you choose to work with us.<br/>
                 Everything starts with a quick intro call and it goes from there.
             </p>
         </div>

         <div className="space-y-8">
             {phases.map((phase, index) => (
                 <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10"
                 >
                     <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
                        Phase {phase.id}
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">
                         {phase.description}
                     </p>
                 </motion.div>
             ))}
         </div>
      </div>
    </section>
  )
}

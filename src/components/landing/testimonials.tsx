"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Mark Wheels",
    quote: "Exceptional creativity and expertise—this dev team consistently delivers top-notch results with impeccable attention to detail.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Stephen Cheers",
    quote: "This product dev team exceeded our expectations, blending innovation and precision to create mindblowingly complex products fast.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Tristan Reals",
    quote: "Outstanding service and remarkable talent—this team brings ideas to life with unparalleled quality and professionalism.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl space-y-16">
         <div className="text-center space-y-4">
             <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Testimonials
             </div>
             <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Real Humans, Realest Words</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                 Warning! These folks are our long time supporters and they say nice things about us all the time, here are some of them.
             </p>
         </div>

         <div className="grid gap-8 md:grid-cols-3">
             {testimonials.map((t, index) => (
                 <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6"
                 >
                     <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted/20">
                         <Image 
                            src={t.image}
                            alt={t.name}
                            fill
                            className="object-cover"
                         />
                     </div>
                     <div className="space-y-4 flex-1">
                         <h3 className="text-xl font-bold">{t.name}</h3>
                         <p className="text-muted-foreground">"{t.quote}"</p>
                     </div>
                     <button className="w-full rounded-full border border-white/10 bg-white/5 py-3 text-sm font-medium transition-colors hover:bg-white/10">
                        Find him on X
                     </button>
                 </motion.div>
             ))}
         </div>
      </div>
    </section>
  )
}

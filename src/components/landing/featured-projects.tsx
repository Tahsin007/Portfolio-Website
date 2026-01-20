"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

// In a real app, these would come from a CMS or content file
const projects = [
  {
    id: 1,
    title: "QuantumLeap Technologies",
    description: "A pioneer in quantum computing solutions aimed for a complete overhaul.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tags: ["Development", "Web Design"],
    slug: "quantum-leap",
  },
  {
    id: 2,
    title: "EcoFusion Energy",
    description: "Leading innovator in sustainable energy solutions making renewable energy accessible.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Branding", "Framer"],
    slug: "ecofusion",
  },
   {
    id: 3,
    title: "Novus Banking",
    description: "Next-gen fintech app interface design and development.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    tags: ["App Design", "Development"],
    slug: "novus-banking",
  },
   {
    id: 4,
    title: "Artisan Coffee",
    description: "E-commerce platform for premium coffee roasters.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1471&auto=format&fit=crop",
    tags: ["Shopify", "Design"],
    slug: "artisan-coffee",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Actual Case Studies</h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Don't take our word for it, see it for yourself. <br />
            Here are some of the biggest projects we delivered this year.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col space-y-3"
            >
              <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-xl border border-white/10 bg-muted/20">
                 <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>
              </Link>
              
              <div className="space-y-1.5 px-1">
                 <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Link href={`/projects/${project.slug}`} className="rounded-full border border-white/10 p-1.5 transition-colors hover:bg-white/10">
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                 </div>
                 <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                 <div className="flex gap-2 pt-1">
                   {project.tags.map(tag => (
                     <span key={tag} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                       {tag}
                     </span>
                   ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
            <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105">
                View All Projects
            </Link>
        </div>
      </div>
    </section>
  )
}

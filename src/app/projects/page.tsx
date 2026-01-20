"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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
    image: "https://images.unsplash.com/photo-1545437766-23579ea370bf?q=80&w=2670&auto=format&fit=crop",
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

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="space-y-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">All Projects</h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A selection of our best work. We craft digital experiences that drive results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group flex flex-col space-y-4"
            >
              <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-2xl border border-white/10 bg-muted/20">
                 <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>
              </Link>
              
              <div className="space-y-2">
                 <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <Link href={`/projects/${project.slug}`} className="rounded-full border border-white/10 p-2 transition-colors hover:bg-white/10">
                        <ArrowUpRight className="h-5 w-5" />
                    </Link>
                 </div>
                 <p className="text-muted-foreground">{project.description}</p>
                 <div className="flex gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                       {tag}
                     </span>
                   ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

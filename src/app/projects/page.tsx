"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projectsData } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))]
  
  const filteredProjects = projectsData.filter(p => activeCategory === "All" || p.category === activeCategory)

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="space-y-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-[1.1]">
              <span className="font-serif">Featured </span>
              <span className="font-serif italic font-medium text-rose-500">work.</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
              A curated selection of my best web design and development projects. I craft digital experiences that drive real results.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-rose-500 border-rose-500 text-white shadow-[0_0_15px_rgb(225,29,72,0.3)]" 
                    : "bg-transparent border-white/10 text-muted-foreground hover:border-rose-500/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
             <AnimatePresence mode="popLayout">
               {filteredProjects.map((project) => (
                 <motion.div
                   layout
                   key={project.id}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className="group flex flex-col h-full rounded-[2.5rem] border border-white/10 bg-background/60 p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/30 hover:shadow-[0_8px_40px_rgb(225,29,72,0.1)]"
                 >
                    <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-2xl border border-white/5 bg-black/50 mb-6 relative aspect-[4/3]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute top-4 right-4 inline-flex items-center rounded-full border border-white/20 bg-background/50 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-white shadow-sm uppercase tracking-widest">
                          {project.category}
                        </div>
                    </Link>
                    
                    <div className="flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold tracking-tight group-hover:text-rose-500 transition-colors duration-300">{project.title}</h3>
                            <Link href={`/projects/${project.slug}`} className="rounded-full border border-white/10 p-2 transition-all group-hover:bg-rose-500/20 group-hover:border-rose-500/30 group-hover:-translate-y-1 shrink-0 ml-4">
                                <ArrowUpRight className="h-4 w-4 text-foreground group-hover:text-rose-500" />
                            </Link>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag: string) => (
                            <span key={tag} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                    </div>
                 </motion.div>
               ))}
             </AnimatePresence>
             
             {filteredProjects.length === 0 && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-20 border border-white/10 bg-white/5 rounded-3xl">
                  <p className="text-muted-foreground">No projects found for this category.</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

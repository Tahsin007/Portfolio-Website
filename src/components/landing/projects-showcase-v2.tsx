"use client"

import { motion, useMotionValue, animate } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRef, useState, useEffect, useCallback } from "react"

const projects = [
  {
    id: 1,
    title: "QuantumLeap Technologies",
    description: "A pioneer in quantum computing solutions aimed for a complete overhaul of their digital presence.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tags: ["Development", "Web Design"],
    slug: "quantum-leap",
  },
  {
    id: 2,
    title: "EcoFusion Energy",
    description: "Leading innovator in sustainable energy solutions making renewable energy accessible to all.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Branding", "Framer"],
    slug: "ecofusion",
  },
  {
    id: 3,
    title: "Novus Banking",
    description: "Next-gen fintech app interface design and development for modern banking solutions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    tags: ["App Design", "Development"],
    slug: "novus-banking",
  },
  {
    id: 4,
    title: "Artisan Coffee",
    description: "E-commerce platform for premium coffee roasters with a focus on storytelling.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1471&auto=format&fit=crop",
    tags: ["Shopify", "Design"],
    slug: "artisan-coffee",
  },
  {
    id: 5,
    title: "Urban Spaces Architecture",
    description: "Portfolio website for a modern architecture firm showcasing their best residential projects.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
    tags: ["Portfolio", "Next.js"],
    slug: "urban-spaces",
  },
]

const CARD_WIDTH = 380
const CARD_GAP = 24

export function ProjectsShowcaseV2() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const x = useMotionValue(0)
  const totalCards = projects.length

  // Safely detect viewport on client side
  useEffect(() => {
    const updateVisible = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3)
    }
    updateVisible()
    window.addEventListener("resize", updateVisible)
    return () => window.removeEventListener("resize", updateVisible)
  }, [])

  const maxIndex = Math.max(0, totalCards - visibleCards)

  const scrollTo = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(clampedIndex)
    animate(x, -clampedIndex * (CARD_WIDTH + CARD_GAP), {
      type: "spring",
      stiffness: 300,
      damping: 30,
    })
  }, [maxIndex, x])

  const handlePrev = () => {
    scrollTo(currentIndex - 1)
  }

  const handleNext = () => {
    scrollTo(currentIndex + 1)
  }

  // Handle drag end
  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = CARD_WIDTH / 4

    if (info.offset.x < -threshold || info.velocity.x < -500) {
      scrollTo(currentIndex + 1)
    } else if (info.offset.x > threshold || info.velocity.x > 500) {
      scrollTo(currentIndex - 1)
    } else {
      scrollTo(currentIndex)
    }
  }

  return (
    <section className="py-24 px-4 md:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            A selection of our recent work across different industries and platforms.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative" ref={containerRef}>
          {/* Gradient masks for edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Cards Track */}
          <div className="overflow-hidden mx-auto" style={{ maxWidth: `${visibleCards * CARD_WIDTH + (visibleCards - 1) * CARD_GAP}px` }}>
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              style={{ x, gap: `${CARD_GAP}px` }}
              drag="x"
              dragConstraints={{
                left: -(maxIndex * (CARD_WIDTH + CARD_GAP)),
                right: 0,
              }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative flex-shrink-0"
                  style={{ width: `${CARD_WIDTH}px` }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/projects/${project.slug}`} className="block" draggable={false}>
                    <div className="overflow-hidden rounded-2xl border border-border/40 bg-card transition-all duration-500 hover:border-border/80 hover:shadow-2xl hover:shadow-primary/5">
                      {/* Browser Chrome mockup */}
                      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/30 bg-muted/30">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        <div className="ml-3 flex-1 h-5 rounded-full bg-muted/50 max-w-[200px]" />
                      </div>
                      {/* Project Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </Link>

                  {/* Card Info */}
                  <div className="mt-4 space-y-1.5 px-1">
                    <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-2 pt-1">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/50 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background/80 backdrop-blur text-foreground transition-all duration-300 hover:bg-muted hover:border-border hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'w-8 bg-foreground' 
                      : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background/80 backdrop-blur text-foreground transition-all duration-300 hover:bg-muted hover:border-border hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next project"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

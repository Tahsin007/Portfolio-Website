"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useRef, useCallback } from "react" // Added useCallback
import { ArrowLeft, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Employee Solutions",
    image: "images/ai-employee-solutions.webp",
    slug: "ai-employee-solutions",
  },
  {
    id: 2,
    title: "Monarch Inspection",
    image: "images/monarch-inspection.webp",
    slug: "monarch-inspection",
  },
  {
    id: 3,
    title: "Luminous Jewel",
    image: "images/luminous-jewel.webp",
    slug: "luminous-jewel",
  },
  {
    id: 4,
    title: "The Real Pizza Face",
    image: "images/the-real-pizza-face.webp",
    slug: "the-real-pizza-face",
  },
  {
    id: 5,
    title: "Beginner's Mind Coaching",
    image: "images/beginners-mind-coaching.webp",
    slug: "beginners-mind-coaching",
  },
  {
    id: 6,
    title: "Bow Wow Vows",
    image: "images/bow-wow-vows.webp",
    slug: "bow-wow-vows",
  },
  {
    id: 7,
    title: "Coach Dave",
    image: "images/coach-dave.webp",
    slug: "coach-dave",
  },
  {
    id: 8,
    title: "Tristone Commercial",
    image: "images/tristone-commercial.webp",
    slug: "tristone-commercial",
  }
]

const BUFFER_SIZE = 3; // Number of projects to duplicate at each end

export const ProjectsShowcaseV3 = () => {
  const [currentIndex, setCurrentIndex] = useState(BUFFER_SIZE);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Create an extended list of projects for infinite scrolling
  const infiniteProjects = [
    ...projects.slice(-BUFFER_SIZE), // Last few projects
    ...projects, // Original projects
    ...projects.slice(0, BUFFER_SIZE), // First few projects
  ];
  
  // Dimensions
  const INACTIVE_CARD_WIDTH = 300
  const INACTIVE_CARD_HEIGHT = 450
  const ACTIVE_CARD_WIDTH = 450
  const ACTIVE_CARD_HEIGHT = 650
  const GAP = 32

  // Update container width for precise centering
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const getCardWidth = useCallback((index: number) => { // Moved and memoized getCardWidth
    return index === currentIndex ? ACTIVE_CARD_WIDTH : INACTIVE_CARD_WIDTH;
  }, [currentIndex, ACTIVE_CARD_WIDTH, INACTIVE_CARD_WIDTH]); // Removed INACTIVE_CARD_HEIGHT

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1)); // Increment without modulo for infinite scroll
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Snapping logic for infinite scroll
  useEffect(() => {
    let newIndex = currentIndex;
    let shouldSnap = false;

    if (currentIndex >= infiniteProjects.length - BUFFER_SIZE) {
      // If we're in the "cloned first projects" section, snap back to the real first projects
      newIndex = BUFFER_SIZE + (currentIndex - (infiniteProjects.length - BUFFER_SIZE));
      shouldSnap = true;
    } else if (currentIndex < BUFFER_SIZE) {
      // If we're in the "cloned last projects" section, snap back to the real last projects
      newIndex = infiniteProjects.length - (2 * BUFFER_SIZE) + currentIndex;
      shouldSnap = true;
    }

    if (shouldSnap) {
      // Calculate the xOffset for the newIndex immediately
      const targetXOffset = (containerWidth / 2) - (
        infiniteProjects.slice(0, newIndex).reduce((acc, _, i) => acc + getCardWidth(i) + GAP, 0) + 
        getCardWidth(newIndex) / 2
      );
      controls.set({ x: targetXOffset }); // Instantly set the position
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, infiniteProjects.length, controls, containerWidth, GAP, ACTIVE_CARD_WIDTH, INACTIVE_CARD_WIDTH, getCardWidth, infiniteProjects]); // Added getCardWidth and infiniteProjects to dependencies

  // Calculate track x-offset
  const xOffset = containerWidth > 0 
    ? (containerWidth / 2) - (
        infiniteProjects.slice(0, currentIndex).reduce((acc, _, i) => acc + getCardWidth(i) + GAP, 0) + 
        getCardWidth(currentIndex) / 2
      )
    : 0

  return (
    <section className="py-24 bg-background overflow-hidden flex flex-col items-center select-none">
      <div className="mx-auto max-w-7xl px-4 md:px-6 mb-16 text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
          Our Best Work
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg mx-auto">
          Take a look at the stunning web experiences we&apos;ve built.
        </p>
      </div>


      <div 
        ref={containerRef}
        className="w-full relative h-[700px] flex items-center"
      >
        <motion.div 
          className="flex items-center"
          animate={{ x: xOffset }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          style={{ gap: GAP }}
        >
          {infiniteProjects.map((project, index) => {
            const isActive = index === currentIndex

            return (
              <motion.div
                key={`${project.id}-${index}`} // Use index in key for duplicates
                className="relative shrink-0 rounded-2xl overflow-hidden border border-border/40 bg-card cursor-pointer"
                animate={{
                  width: isActive ? ACTIVE_CARD_WIDTH : INACTIVE_CARD_WIDTH,
                  height: isActive ? ACTIVE_CARD_HEIGHT : INACTIVE_CARD_HEIGHT,
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.95
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Browser Chrome Mockup */}
                <div 
                  className="flex items-center gap-1.5 px-4 py-3 bg-[#e5e5e5] dark:bg-[#2d2d2d] border-b border-black/10 dark:border-white/10"
                >
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  {isActive && (
                    <div className="ml-4 flex-1 flex justify-center opacity-0 animate-fade-in">
                      <div className="h-4 w-1/2 rounded-full bg-black/10 dark:bg-white/10" />
                    </div>
                  )}
                </div>

                {/* Project Image */}
                <div className="relative w-full h-[calc(100%-40px)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                  
                  {/* Overlay Gradient (fade out if active) */}
                  <motion.div 
                    className="absolute inset-0 bg-black/50 pointer-events-none"
                    animate={{ opacity: isActive ? 0 : 0.3 }}
                  />

                  {/* Title overlay when active */}
                  <motion.div 
                    className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Manual Controls */}
      <div className="flex items-center gap-6 mt-12">
        <button
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background hover:bg-muted transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {projects.map((_, idx) => ( // Use original projects for pagination dots
            <button
              key={idx}
              onClick={() => setCurrentIndex(BUFFER_SIZE + idx)} // Map to the real index in infiniteProjects
              className={`h-2 rounded-full transition-all ${
                (idx === (currentIndex - BUFFER_SIZE)) ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background hover:bg-muted transition-colors"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
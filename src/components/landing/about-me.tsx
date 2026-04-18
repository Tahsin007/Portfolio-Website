"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Coffee, Plane, Book, Heart, Camera, Gamepad2 } from "lucide-react"
import { AnimatedButton } from "../ui/animated-button"

export function AboutMe() {
  return (
    <section className="relative py-24 px-4 md:px-6 overflow-hidden bg-[#FAFAFA] dark:bg-background/50">
      
      {/* Playful scattered icon background mimicking the snapshot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Coffee className="absolute top-[10%] left-[5%] h-16 w-16 text-muted-foreground/[0.04] dark:text-white/[0.02] rotate-12" />
        <Plane className="absolute top-[15%] right-[10%] h-20 w-20 text-muted-foreground/[0.04] dark:text-white/[0.02] -rotate-12" />
        <Book className="absolute bottom-[20%] left-[8%] h-16 w-16 text-muted-foreground/[0.04] dark:text-white/[0.02] rotate-45" />
        <Heart className="absolute bottom-[15%] right-[12%] h-14 w-14 text-muted-foreground/[0.04] dark:text-white/[0.02] -rotate-12" />
        <Camera className="absolute top-[45%] right-[15%] h-12 w-12 text-foreground/[0.03] rotate-12" />
        <Gamepad2 className="absolute top-[50%] left-[12%] h-16 w-16 text-foreground/[0.03] -rotate-12" />
        <svg
          className="absolute top-[30%] left-[45%] h-14 w-14 text-muted-foreground/[0.04] dark:text-white/[0.02] rotate-[30deg]"
          fill="currentColor" viewBox="0 0 24 24"
        >
          <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z"/>
        </svg>
      </div>
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Tilted frame mimicking snapshot */}
            <div className="relative aspect-[4/5] w-full rounded-[1%] border-[3px] border-zinc-900 dark:border-zinc-700 bg-muted overflow-hidden shadow-2xl transition-transform hover:rotate-0 duration-500">
               {/* Replace src with your actual image path when available */}
              <Image 
                src="/images/tahsin.jpg" 
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>
            
            {/* A subtle drop shadow to make the tilt pop */}
            <div className="absolute -inset-4 z-[-1] rounded-3xl bg-black/5 dark:bg-white/5 blur-2xl top-[10%]"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-6"
          >
            {/* Badges / Logos */}
            <div className="flex flex-wrap items-center gap-6 mb-2">
              {/* Squarespace Circle Gold Member */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
                  <svg viewBox="0 0 100 100" className="h-6 w-6 text-zinc-900 dark:text-zinc-100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 8C26.8 8 8 26.8 8 50C8 73.2 26.8 92 50 92C73.2 92 92 73.2 92 50C92 26.8 73.2 8 50 8ZM50 80C33.4 80 20 66.6 20 50C20 33.4 33.4 20 50 20C66.6 20 80 33.4 80 50C80 66.6 66.6 80 50 80Z" fill="currentColor"/>
                    <path d="M42 34L34 42L58 66L66 58L42 34Z" fill="currentColor"/>
                    <path d="M42 66L66 42L58 34L34 58L42 66Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold leading-tight uppercase tracking-wider text-muted-foreground">Squarespace</span>
                  <span className="text-xs sm:text-sm font-bold leading-tight text-foreground">Circle Gold Member</span>
                </div>
              </div>

              {/* Fiverr Level 2 Seller */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
                  <svg viewBox="0 0 100 100" className="h-7 w-7 text-[#1DBF73]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M85 20H65V15C65 12.2 62.8 10 60 10H40C37.2 10 35 12.2 35 15V20H15C12.2 20 10 22.2 10 25V85C10 87.8 12.2 90 15 90H85C87.8 90 90 87.8 90 85V25C90 22.2 87.8 20 85 20ZM45 20V18H55V20H45ZM80 80H20V30H80V80Z"/>
                    <circle cx="28" cy="45" r="7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold leading-tight uppercase tracking-wider text-muted-foreground">Fiverr Pro</span>
                  <span className="text-xs sm:text-sm font-bold leading-tight text-[#1DBF73]">Level 2 Seller</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground">
                Hey, I&apos;m Tahsin.
              </h2>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400">
                Squarespace Website Designer
              </h3>
            </div>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium">
              <p>
                I&apos;ve been a professional web designer since the early 2010s, and started specializing in 
                Squarespace website design shortly after. Today, I&apos;m a recognized Squarespace Expert and I split my life 
                between different timezones but work with businesses worldwide, from LA, to London, to Sydney, and back again.
              </p>
              <p>
                I&apos;m a visual thinker with an entrepreneurial soul, a bookworm, history nerd, lifelong learner, 
                and self-care devotee. I love watching documentaries and sci-fi movies, staying active, 
                spending time outdoors, and reading endlessly.
              </p>
            </div>

            <div className="pt-4">
              <AnimatedButton href="/about" delay={0.4}>
                Get To Know Me
              </AnimatedButton>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

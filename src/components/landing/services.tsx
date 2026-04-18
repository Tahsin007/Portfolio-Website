"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatedButton } from "../ui/animated-button"
import { 
  ArrowUpRight, 
  Monitor, 
  LayoutTemplate, 
  Settings, 
  GraduationCap, 
  LineChart 
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    id: 1,
    title: "Upgrade your site to 7.1",
    description:
      "No need to purchase a plugin yourself! Take advantage of my purchased tool to facilitate moving your content from Squarespace 7.0 to Squarespace 7.1",
    icon: ArrowUpRight,
  },
  {
    id: 2,
    title: "Custom Squarespace Websites",
    description:
      "I build custom Squarespace websites for small businesses, entrepreneurs, and creatives. My goal is to create a website that is not only visually stunning but also highly functional.",
    icon: Monitor,
  },
  {
    id: 3,
    title: "Squarespace Website Redesign",
    description:
      "I offer professional redesign services to help you create a website that perfectly aligns with your brand's evolution and provides an exceptional user experience.",
    icon: LayoutTemplate,
  },
  {
    id: 4,
    title: "Squarespace Maintenance",
    description:
      "Keep your website up-to-date and running smoothly. I offer ongoing maintenance services so you can focus on your business with complete peace of mind.",
    icon: Settings,
  },
  {
    id: 5,
    title: "Squarespace Training",
    description:
      "Empower yourself. I provide dedicated training sessions to help you learn how to confidently manage and update your website without needing a developer.",
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "Squarespace SEO",
    description:
      "Improve your website's visibility. My technical and on-page SEO services will help your site rank higher in search engines, driving more organic traffic.",
    icon: LineChart,
  }
]

export function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]

      gsap.set(cards, { opacity: 0, y: 100, scale: 0.95 })
      gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 })

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
      })

      const vh = window.innerHeight * 0.75

      cards.forEach((card, i) => {
        if (i === 0) return

        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: `top+=${(i - 1) * vh} top`,
          end: `top+=${i * vh} top`,
          onEnter: () => {
            gsap.to(cards[i - 1], { opacity: 0, y: -80, scale: 0.95, duration: 0.5, ease: "power2.inOut" })
            gsap.fromTo(card, { opacity: 0, y: 100, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)", delay: 0.1 })
          },
          onLeaveBack: () => {
            gsap.to(card, { opacity: 0, y: 100, scale: 0.95, duration: 0.5, ease: "power2.inOut" })
            gsap.fromTo(cards[i - 1], { opacity: 0, y: -80, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)", delay: 0.1 })
          },
        })
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} style={{ height: `${phases.length * 75}vh` }}>
      <div
        ref={stickyRef}
        className="h-screen w-full flex items-center px-6 md:px-12 lg:px-20 overflow-hidden relative"
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none -z-10"
          style={{
            backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.03
          }}
        />

        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — completely static */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-500 dark:text-rose-400">
              Our Services
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                <span className="font-serif">Here&apos;s what </span>
                <br className="hidden md:block" />
                <span className="font-serif italic font-medium">we offer.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Here&apos;s what you can expect if you choose to work with us.
                Everything starts with a quick intro call and it goes from there.
              </p>
            </div>

            <AnimatedButton href="/contact">Get In Touch</AnimatedButton>
          </div>

          {/* RIGHT — stacked cards, only one visible at a time */}
          <div className="relative w-full z-10 h-[400px] sm:h-[450px]">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.id}
                  ref={(el) => { cardsRef.current[index] = el }}
                  className="absolute inset-0 w-full rounded-[2.5rem] border border-foreground/10 bg-background/60 p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-xl overflow-hidden group flex flex-col justify-between"
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Animated Glowing Background Blobs */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-rose-500/10 dark:bg-rose-500/10 blur-[80px] group-hover:bg-rose-500/20 group-hover:scale-125 transition-all duration-700 ease-out" />
                  <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-pink-500/10 dark:bg-pink-500/10 blur-[80px] group-hover:bg-pink-500/20 group-hover:scale-125 transition-all duration-700 ease-out" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-semibold tracking-wide text-foreground shadow-sm transition-colors group-hover:bg-foreground/10">
                        <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                        Phase {String(phase.id).padStart(2, "0")}
                      </span>
                      
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-background/80 shadow-sm backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-rose-500/30 group-hover:shadow-rose-500/20">
                        <Icon className="h-6 w-6 text-foreground group-hover:text-rose-500 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight group-hover:text-rose-500 transition-colors duration-300">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {phase.description}
                    </p>
                  </div>

                  {/* Decorative line at the bottom */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Users, 
  Rocket, 
  MessageCircle, 
  Map
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    id: 1,
    title: "Pre Flight Inspection",
    description:
      "Before we embark on this journey it's mandatory that we get to know each other first. We'll talk about our projects, ideas and strategies and ultimately see if we are the right fit.",
    icon: Users,
  },
  {
    id: 2,
    title: "Ready for liftoff",
    description:
      "You were delighted to see that we're cool like that. We gave you options that fit the aesthetics and the budget you are working with. At this point we both agree it's time for us to start the journey and liftoff.",
    icon: Rocket,
  },
  {
    id: 3,
    title: "Flying high",
    description:
      "Depending on the project scope, these flights can get loooong, sometimes lasting for months. That's why we'll make sure to storm you with updates every day and answer all the questions your curious mind comes up with.",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Course correction",
    description:
      "This is something we don't do very often but it happens. And when it does, we will do our best to figure it out and turn the project in another direction. That's why we'll once again present you with multiple options.",
    icon: Map,
  },
]

export function Process() {
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
              Process
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                <span className="font-serif">Seriously, this is </span>
                <br className="hidden md:block" />
                <span className="font-serif italic font-medium">how it goes.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Here's what you can expect if you choose to work with us.
                Everything starts with a quick intro call and it goes from there.
              </p>
            </div>
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
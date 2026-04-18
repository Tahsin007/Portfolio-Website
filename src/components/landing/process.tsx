"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    id: 1,
    title: "Pre Flight Inspection",
    description:
      "Before we embark on this journey it's mandatory that we get to know each other first. We'll talk about our projects, ideas and strategies and ultimately see if we are the right fit.",
  },
  {
    id: 2,
    title: "Ready for liftoff",
    description:
      "You were delighted to see that we're cool like that. We gave you options that fit the aesthetics and the budget you are working with. At this point we both agree it's time for us to start the journey and liftoff.",
  },
  {
    id: 3,
    title: "Flying high",
    description:
      "Depending on the project scope, these flights can get loooong, sometimes lasting for months. That's why we'll make sure to storm you with updates every day and answer all the questions your curious mind comes up with.",
  },
  {
    id: 4,
    title: "Course correction",
    description:
      "This is something we don't do very often but it happens. And when it does, we will do our best to figure it out and turn the project in another direction. That's why we'll once again present you with multiple options.",
  },
]

export function Process() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]

    gsap.set(cards, { opacity: 0, y: 80 })
    gsap.set(cards[0], { opacity: 1, y: 0 })

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: stickyRef.current,
      pinSpacing: false,
    })

    // ✅ Use pixel-based offsets so each card fires every 1 viewport height
    const vh = window.innerHeight * 0.75

    cards.forEach((card, i) => {
      if (i === 0) return

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: `top+=${(i - 1) * vh} top`,  // fires immediately on each vh scroll
        end: `top+=${i * vh} top`,
        onEnter: () => {
          gsap.to(cards[i - 1], { opacity: 0, y: -60, duration: 0.4, ease: "power2.in" })
          gsap.fromTo(card, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.1 })
        },
        onLeaveBack: () => {
          gsap.to(card, { opacity: 0, y: 80, duration: 0.4, ease: "power2.in" })
          gsap.fromTo(cards[i - 1], { opacity: 0, y: -60 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.1 })
        },
      })
    })
  }, wrapperRef)

  return () => ctx.revert()
}, [])

  return (
    // Outer wrapper: tall enough to scroll through all phases
    // 100vh per phase gives comfortable scroll room
// 1 extra vh for the initial view + 1 per transition
      <div ref={wrapperRef} style={{ height: `${phases.length * 75}vh` }}>
      {/* Sticky panel: pinned at top, 100vh tall */}
      <div
        ref={stickyRef}
        className="h-screen w-full flex items-center px-6 md:px-12 lg:px-20"
      >
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — completely static */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Process
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Seriously, this is how it goes.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here's what you can expect if you choose to work with us.
              Everything starts with a quick intro call and it goes from there.
            </p>

            {/* Phase progress indicators */}
            <div className="space-y-3 pt-2">
              {phases.map((phase, i) => (
                <div
                  key={phase.id}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 bg-white/25"
                  />
                  {phase.title}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — stacked cards, only one visible at a time */}
          <div className="relative" style={{ height: "360px" }}>
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => { cardsRef.current[index] = el }}
                className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10"
              >
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
                  Phase {String(phase.id).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
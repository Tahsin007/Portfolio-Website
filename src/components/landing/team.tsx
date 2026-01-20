"use client"

import Image from "next/image"

export function Team() {
    return (
        <section className="py-24 px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
            <div className="flex flex-wrap justify-center gap-4">
                 {[...Array(6)].map((_, i) => (
                     <div key={i} className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-background ring-2 ring-white/10">
                        <Image
                            src={`https://ui-avatars.com/api/?name=Team+${i+1}&background=random`}
                            alt="Team member"
                            fill
                        />
                     </div>
                 ))}
            </div>
        </section>
    )
}

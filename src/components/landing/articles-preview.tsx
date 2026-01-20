"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ArticlesPreview() {
  return (
    <section className="py-24 px-4 md:px-6 border-t border-white/5">
         <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Latest Thinking</h2>
                <p className="text-lg text-muted-foreground">Insights and updates from the team.</p>
            </div>
            <Link href="/articles" className="group flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                View all articles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
         </div>

         <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
             {[1, 2, 3].map((i) => (
                 <Link key={i} href="/articles" className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10">
                    <div className="text-sm text-muted-foreground mb-4">Jan {10 + i}, 2024</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-white/20 underline-offset-4">Article Title Placeholder {i}</h3>
                    <p className="text-muted-foreground line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                 </Link>
             ))}
         </div>
    </section>
  )
}

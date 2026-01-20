"use client"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "10 Tips for High Converting Landing Pages",
    date: "Jan 12, 2024",
    excerpt: "Learn the secrets behind landing pages that actually convert visitors into customers.",
    slug: "landing-page-tips",
  },
   {
    id: 2,
    title: "Why We Switched to Tailwind CSS v4",
    date: "Feb 05, 2024",
    excerpt: "A deep dive into our decision making process and the benefits we've seen so far.",
    slug: "tailwind-v4",
  },
   {
    id: 3,
    title: "The Future of Web Design in 2026",
    date: "Mar 20, 2024",
    excerpt: "Predictions for the next wave of design trends.",
    slug: "future-web-design",
  },
]

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
       <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Articles</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts on design, development, and the future of the web.
          </p>
        </div>

        <div className="grid gap-8">
            {articles.map((article) => (
                <Link key={article.id} href="#" className="group block space-y-3 rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10 hover:border-white/10">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        <span className="opacity-0 transition-opacity group-hover:opacity-100">Read Article &rarr;</span>
                    </div>
                    <h2 className="text-2xl font-bold transition-colors group-hover:text-primary">{article.title}</h2>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                </Link>
            ))}
        </div>
       </div>
    </div>
  )
}

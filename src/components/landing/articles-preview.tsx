"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { SectionBadge } from "../ui/section-badge"
import { motion, AnimatePresence } from "framer-motion"

export function ArticlesPreview() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch up to 12 latest blogs to allow categorization preview
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(12))
        const querySnapshot = await getDocs(q)
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setBlogs(blogsData)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Extract unique categories from loaded blogs
  const categories = ["All", ...Array.from(new Set(blogs.map(b => b.category).filter(Boolean)))]

  // Filter blogs based on selected category and limit display to 6
  const filteredBlogs = blogs.filter(b => activeCategory === "All" || b.category === activeCategory).slice(0, 6)

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-6 max-w-2xl">
          <SectionBadge title="Blogs" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            <span className="font-serif">Our latest </span>
            <span className="font-serif italic font-medium">insights.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thoughts, news, and strategies on web design, development, and building successful digital products.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-rose-500" />
          </div>
        ) : blogs.length > 0 ? (
          <>
            {/* Category Filter Tabs */}
            {categories.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat as string}
                    onClick={() => setActiveCategory(cat as string)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeCategory === cat 
                        ? "bg-rose-500 border-rose-500 text-white shadow-[0_0_15px_rgb(225,29,72,0.3)]" 
                        : "bg-transparent border-white/10 text-muted-foreground hover:border-rose-500/50 hover:text-foreground"
                    }`}
                  >
                    {cat as string}
                  </button>
                ))}
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredBlogs.map((blog, index) => {
                  const formattedDate = blog.createdAt?.toDate 
                    ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(blog.createdAt.toDate())
                    : "Recently published";

                  return (
                    <motion.div
                      key={blog.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-full"
                    >
                      <Link 
                        href={`/blog/${blog.id}`} 
                        className="group relative flex flex-col h-full rounded-[2.5rem] border border-foreground/10 bg-background/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgb(225,29,72,0.1)] hover:border-rose-500/30"
                      >
                        {blog.imageUrl && (
                          <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                            {blog.category && (
                              <div className="absolute top-6 right-6 inline-flex items-center rounded-full border border-white/20 bg-background/50 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-sm">
                                {blog.category}
                              </div>
                            )}
                          </div>
                        )}
                        <div className="flex flex-col flex-grow p-8 sm:p-10 z-10 relative">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold tracking-wide text-rose-500">
                              {formattedDate}
                            </div>
                            {!blog.imageUrl && blog.category && (
                               <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-2 py-0.5 text-[10px] font-semibold text-rose-500 tracking-wider uppercase">
                                 {blog.category}
                               </div>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-rose-500 transition-colors duration-300">
                            {blog.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                            {blog.excerpt || (typeof blog.content === 'string' ? blog.content.substring(0, 100) + '...' : '')}
                          </p>
                          
                          <div className="mt-auto flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground group-hover:text-rose-500 transition-colors">
                            Read more
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {filteredBlogs.length === 0 && (
                <div className="col-span-3 text-center py-20 border border-white/10 bg-white/5 rounded-3xl">
                  <p className="text-muted-foreground">No blogs found for this category.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20 border border-white/10 bg-white/5 rounded-3xl">
            <p className="text-muted-foreground">No blogs published yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

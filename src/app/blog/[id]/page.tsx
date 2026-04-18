"use client"

import { useEffect, useState, use } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function BlogPostPage(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params)
  
  const [blog, setBlog] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", params.id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() })
        } else {
          setError(true)
        }
      } catch (err) {
        console.error("Error fetching blog:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-rose-500" />
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link href="/" className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    )
  }

  const formattedDate = blog.createdAt?.toDate 
    ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(blog.createdAt.toDate())
    : "Recently published";

  return (
    <article className="min-h-screen py-32 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-rose-500 font-medium">{formattedDate}</div>
            {blog.category && (
              <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-rose-500">
                {blog.category}
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">{blog.title}</h1>
          {blog.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium">{blog.excerpt}</p>
          )}

          {blog.imageUrl && (
            <div className="w-full h-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mt-12 bg-black/50 border border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-rose max-w-none">
          {/* Simple way to preserve whitespace line breaks in simple text without a markdown parser */}
          {blog.content.split('\n').map((paragraph: string, i: number) => (
            paragraph.trim() ? <p key={i} className="mb-6 text-lg leading-relaxed text-muted-foreground">{paragraph}</p> : <br key={i} />
          ))}
        </div>
      </div>
    </article>
  )
}

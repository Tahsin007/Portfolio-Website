"use client"

import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Loader2, Image as ImageIcon } from "lucide-react"

export default function AddBlogPage() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Web Design")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("") // Just a string for the image link
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        category,
        excerpt,
        content,
        imageUrl: imageUrl.trim() || null, // Stores the pasted string directly (or null if empty)
        createdAt: serverTimestamp(),
      })
      
      setMessage({ type: "success", text: "Blog posted successfully!" })
      setTitle("")
      setCategory("Web Design")
      setExcerpt("")
      setContent("")
      setImageUrl("")
    } catch (error: any) {
      console.error("Error adding document: ", error)
      setMessage({ type: "error", text: error.message || "Failed to post blog" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-24 px-4 md:px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Add New Blog</h1>
      
      {message && (
        <div className={`p-4 mb-6 rounded-lg ${message.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Simple Link Input for Image */}
        <div className="space-y-4">
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium mb-2">Cover Image URL</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ImageIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-3 outline-none focus:border-rose-500/50 transition-colors"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Paste a public link from Unsplash, Imgur, or any website.</p>
          </div>

          {/* Quick Preview of the pasted image */}
          {imageUrl && (
            <div className="relative w-full h-64 md:h-80 rounded-xl border border-white/10 overflow-hidden bg-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={imageUrl} 
                alt="Preview" 
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiIC8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNzcxYjMiIGR5PSIuM2VtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBmYWlsZWQgdG8gbG9hZC4gQ2hlY2sgdGhlIFVSTAo8L3RleHQ+PC9zdmc+';
                }}
                className="w-full h-full object-cover" 
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none focus:border-rose-500/50 transition-colors"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
            <input
              id="category"
              type="text"
              required
              list="categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none focus:border-rose-500/50 transition-colors"
              placeholder="e.g., Web Design"
            />
            <datalist id="categories">
              <option value="Web Design" />
              <option value="Web Development" />
              <option value="SEO" />
              <option value="Business" />
              <option value="Marketing" />
            </datalist>
          </div>
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium mb-2">Excerpt (Short Summary)</label>
          <textarea
            id="excerpt"
            required
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none focus:border-rose-500/50 transition-colors h-24 resize-none"
            placeholder="Brief introduction displayed on the card"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">Content</label>
          <textarea
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none focus:border-rose-500/50 transition-colors h-64 resize-y"
            placeholder="Main blog content..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center min-w-[150px] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Post Blog"}
        </button>
      </form>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, Loader2, Globe, DollarSign, Calendar } from "lucide-react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("https://formsubmit.co/ajax/tahsinahmed.iit@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: data.name,
          Email: data.email,
          "Website URL": data.website || "Not provided",
          "Service Required": data.service,
          "Budget Range": data.budget,
          "Timeline": data.timeline,
          Message: data.message,
          _subject: `New Squarespace Project Inquiry from ${data.name}`
        })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError("Failed to send your inquiry. Please try again or email directly.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try emailing directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-500">
                Get in Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                <span className="font-serif">Ready to elevate </span>
                <br />
                <span className="font-serif italic font-medium">your brand?</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Whether you need a brand new Squarespace site or a powerful redesign, I'm here to bring your vision to life. Fill out the form to get started.
              </p>
            </div>

            <div className="space-y-8 bg-background/60 border border-white/5 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
              <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-500/20 bg-rose-500/5 group-hover:bg-rose-500/20 transition-colors">
                  <Mail className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email Me</div>
                  <a href="mailto:tahsinahmed.iit@gmail.com" className="font-medium hover:text-rose-500 transition-colors">tahsinahmed.iit@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-500/20 bg-rose-500/5 group-hover:bg-rose-500/20 transition-colors">
                   <Phone className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                   <div className="text-sm text-muted-foreground mb-1">Call Me</div>
                   <span className="font-medium">Available upon request</span>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-500/20 bg-rose-500/5 group-hover:bg-rose-500/20 transition-colors">
                   <MapPin className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                   <div className="text-sm text-muted-foreground mb-1">Location</div>
                   <span className="font-medium">Serving Worldwide Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - The Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] border border-white/10 bg-background/60 p-8 sm:p-12 backdrop-blur-xl shadow-[0_8px_40px_rgb(0,0,0,0.12)]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/20 flex items-center justify-center rounded-full mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Inquiry Received!</h3>
                  <p className="text-muted-foreground text-lg max-w-sm mb-8">
                    Thank you for reaching out. I'll review your project details and get back to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-rose-500 font-semibold hover:text-rose-400 transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Full Name *</label>
                      <input id="name" name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-rose-500/50 focus:bg-white/10 focus:outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Email Address *</label>
                      <input id="email" name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-rose-500/50 focus:bg-white/10 focus:outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                     <div className="space-y-3">
                      <label htmlFor="website" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Current Website
                      </label>
                      <input id="website" name="website" type="url" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-rose-500/50 focus:bg-white/10 focus:outline-none transition-all" placeholder="https:// (optional)" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="service" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Service Required *</label>
                      <select id="service" name="service" required className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-foreground focus:border-rose-500/50 focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-black text-white/50">Select a service...</option>
                        <option value="Complete Website Build" className="bg-black">Complete Website Build</option>
                        <option value="Website Redesign" className="bg-black">Website Redesign</option>
                        <option value="E-commerce Store" className="bg-black">E-commerce Store</option>
                        <option value="SEO Optimization" className="bg-black">SEO Optimization</option>
                        <option value="Maintenance / Hourly" className="bg-black">Maintenance / Hourly Support</option>
                        <option value="Other" className="bg-black">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                     <div className="space-y-3">
                      <label htmlFor="budget" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
                        <DollarSign className="w-4 h-4" /> Estimated Budget
                      </label>
                      <select id="budget" name="budget" required className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-foreground focus:border-rose-500/50 focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-black text-white/50">Select your budget...</option>
                        <option value="Under $1,000" className="bg-black">Under $1,000</option>
                        <option value="$1,000 - $3,000" className="bg-black">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000" className="bg-black">$3,000 - $5,000</option>
                        <option value="$5,000+" className="bg-black">$5,000+</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="timeline" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Ideal Timeline
                      </label>
                      <select id="timeline" name="timeline" required className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-foreground focus:border-rose-500/50 focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-black text-white/50">Select timeframe...</option>
                        <option value="As soon as possible" className="bg-black">As soon as possible</option>
                        <option value="1 - 2 Months" className="bg-black">1 - 2 Months</option>
                        <option value="3+ Months" className="bg-black">3+ Months</option>
                        <option value="Just Exploring" className="bg-black">Just exploring right now</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                      <label htmlFor="message" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Project Details *</label>
                      <textarea id="message" name="message" required rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-rose-500/50 focus:bg-white/10 focus:outline-none transition-all resize-y" placeholder="Tell me a bit about your business, your goals, and what you're hoping to achieve with this website..." />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-rose-500 py-4 font-semibold text-white hover:bg-rose-600 transition-all shadow-[0_0_20px_rgb(225,29,72,0.3)] hover:shadow-[0_0_30px_rgb(225,29,72,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group scale-100 active:scale-[0.98]"
                  >
                      {loading ? (
                        <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                        <>Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                      )}
                  </button>
                  <input type="hidden" name="_captcha" value="false" />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

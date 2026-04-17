"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's Work Together</h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5" />
              <span>hello@highflyer.com</span>
            </div>
            <div className="flex items-center gap-4">
               <Phone className="h-5 w-5" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-4">
               <MapPin className="h-5 w-5" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <form 
            action="https://formsubmit.co/tahsinahmed.iit@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            {/* Honeypot for spam protection */}
            <input type="text" name="_honey" className="hidden" />
            
            {/* Disable Captcha to minimalize friction (optional) */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Success Page Configuration (optional - defaults to FormSubmit success page) */}
            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  id="name" 
                  name="name" 
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                  placeholder="Tell us about your project..." 
                />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

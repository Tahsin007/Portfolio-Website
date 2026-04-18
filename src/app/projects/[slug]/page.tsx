import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projectsData } from "@/lib/projects-data"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug }  = await params
  
  const project = projectsData.find(p => p.slug === slug)

  if (!project) return notFound()

  return (
    <article className="min-h-screen pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 uppercase tracking-widest font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>

        {/* Hero Section */}
        <header className="mb-16 md:mb-24">
           <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-500 mb-6">
              {project.category}
           </div>
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">{project.title}</h1>
           <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12 font-medium">
             {project.description}
           </p>

           <div className="w-full relative aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-black/50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
           </div>
        </header>

        {/* Details Grid */}
        <div className="grid gap-12 lg:grid-cols-12 mb-24">
            
            {/* Meta Info */}
            <div className="lg:col-span-4 space-y-8">
               <div className="p-8 rounded-3xl border border-white/10 bg-background/60 backdrop-blur-xl shadow-xl space-y-8">
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-2 font-semibold">Client</h4>
                    <p className="text-lg font-medium">{project.client}</p>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-2 font-semibold">Role</h4>
                    <p className="text-lg font-medium">{project.role}</p>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-2 font-semibold">Year</h4>
                    <p className="text-lg font-medium">{project.year}</p>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div>
                     <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-3 font-semibold">Services</h4>
                     <div className="flex flex-wrap gap-2">
                         {project.tags.map(tag => (
                            <span key={tag} className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs text-rose-500 font-semibold tracking-wide flex-shrink-0">
                                {tag}
                            </span>
                         ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Content Text */}
            <div className="lg:col-span-8 space-y-12 lg:pl-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight flex items-center gap-4">
                       <span className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center text-sm shrink-0">1</span> 
                       The Challenge
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
                
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight flex items-center gap-4">
                       <span className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center text-sm shrink-0">2</span> 
                       The Solution
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
            </div>
        </div>

        {/* Call to action */}
        <div className="w-full text-center py-24 border-t border-white/10">
           <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to build something similar?</h2>
           <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 font-semibold text-white transition-all hover:bg-rose-600 hover:scale-105 shadow-[0_0_20px_rgb(225,29,72,0.3)] hover:shadow-[0_0_30px_rgb(225,29,72,0.5)]">
               Start a project <ArrowUpRight className="w-5 h-5" />
           </Link>
        </div>

      </div>
    </article>
  )
}

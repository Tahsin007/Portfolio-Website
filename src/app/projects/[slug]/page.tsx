import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  // In a real app, fetch data based on slug
  const { slug }  = await params
  
  // Dummy data lookup
  const project = {
    title: slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: "This project represents a complete digital transformation. We focused on creating a user-centric experience that drives engagement and conversion.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    challenge: "The main challenge was to integrate legacy systems with modern frontend technologies while maintaining high performance.",
    solution: "We utilized Next.js for server-side rendering and Framer Motion for seamless transitions, resulting in a 40% increase in user retention.",
    year: "2024",
    role: "Design & Development",
    client: "Tech Corp",
  }

  if (!slug) return notFound()

  return (
    <article className="container mx-auto px-4 py-24 animate-in fade-in duration-700">
      <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
          <div className="flex flex-wrap gap-8 text-sm text-muted-foreground border-y border-white/10 py-6">
            <div>
              <span className="block font-medium text-foreground">Client</span>
              {project.client}
            </div>
             <div>
              <span className="block font-medium text-foreground">Role</span>
              {project.role}
            </div>
             <div>
              <span className="block font-medium text-foreground">Year</span>
              {project.year}
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>{project.description}</p>
            <div>
                <h3 className="text-foreground font-semibold mb-2">The Challenge</h3>
                <p>{project.challenge}</p>
            </div>
            <div>
                <h3 className="text-foreground font-semibold mb-2">The Solution</h3>
                <p>{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
            <div className="relative aspect-square w-full ml-auto overflow-hidden rounded-2xl border border-white/10 bg-muted/20">
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                />
            </div>
        </div>
      </div>

       <div className="mt-24 space-y-8">
            <h3 className="text-2xl font-bold">Project Gallery</h3>
             <div className="grid gap-4 md:grid-cols-2">
                 <div className="relative aspect-video rounded-xl overflow-hidden bg-muted/10">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Image 1</div>
                 </div>
                 <div className="relative aspect-video rounded-xl overflow-hidden bg-muted/10">
                     <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Image 2</div>
                 </div>
             </div>
       </div>

    </article>
  )
}

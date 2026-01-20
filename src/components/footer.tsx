"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-semibold text-lg">
              Highflyer
            </Link>
            <p className="text-sm text-muted-foreground">
              Full service design and development team for startups and founders.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-medium">Navigation</h3>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground">
              Articles
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
             <h3 className="font-medium">Socials</h3>
             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
               Twitter / X
             </Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
               Instagram
             </Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
               LinkedIn
             </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Highflyer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

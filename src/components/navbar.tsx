"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname() || "/"

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-2 rounded-full border border-border/40 bg-background/80 p-2 backdrop-blur-md shadow-sm transition-all hover:bg-background/90 hover:border-border/60 hover:shadow-md">
        <Link 
          href="/" 
          className="group flex items-center gap-2 px-4 py-2 font-medium text-foreground transition-colors"
        >
          <span>Highflyer</span>
        </Link>
        
        <div className="h-6 w-px bg-border/50" />
        
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path)
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={cn(
                    "relative block px-4 py-2 text-sm transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full bg-muted -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="h-6 w-px bg-border/50" />

        <div className="flex items-center gap-1 pl-1">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

import React from "react"

interface SectionBadgeProps {
  title: string;
}

export function SectionBadge({ title }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-500 dark:text-rose-400">
      {title}
    </div>
  )
}

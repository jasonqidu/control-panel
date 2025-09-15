"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function PageLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const search = useSearchParams()
  const [show, setShow] = useState(true)

  // Show skeleton for 2s on first mount and on every navigation
  useEffect(() => {
    // Never show skeleton on auth pages
    if (pathname?.startsWith("/auth")) {
      setShow(false)
      return
    }
    setShow(true)
    const t = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(t)
  }, [pathname, search?.toString()])

  if (show) return <SkeletonUI />
  return <>{children}</>
}

function SkeletonUI() {
  return (
    <div className="p-6 animate-pulse space-y-6">
      {/* title line */}
      <div className="h-8 w-1/3 rounded bg-muted" />

      {/* cards row */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-28 rounded bg-muted" />
        <div className="h-28 rounded bg-muted" />
        <div className="h-28 rounded bg-muted" />
      </div>

      {/* chart block */}
      <div className="h-48 w-full rounded bg-muted" />

      {/* table skeleton */}
      <div className="rounded border">
        <div className="h-10 bg-muted/60" />
        <div className="divide-y">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 bg-muted/30" />
          ))}
        </div>
      </div>
    </div>
  )
}

// src/app/auth/layout.tsx
import type { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted">
      {/* wider container so the two-column LoginForm can breathe */}
      <div className="w-full max-w-4xl px-6">{children}</div>
    </div>
  )
}

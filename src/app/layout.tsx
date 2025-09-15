// src/app/layout.tsx
import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Qidu.ai | Control Panel",
  description: "Qidu command center",
  icons: {
    icon: "/favicon.png", // 👈 apunta al archivo en /public
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type React from "react"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"

export const metadata = {
  title: "Analytics – Qidu Control Panel",
}

export default function AnalyticsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
        </div>
      </div>
    </div>
  )
}

import type React from "react"
import data from "@/data/dashboard.json"

import { SectionCards } from "@/components/section-cards"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* Métricas */}
          <SectionCards />

          {/* Gráfico */}
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>

          {/* Tabla de clientes */}
          <DataTable data={data.customers} />
        </div>
      </div>
    </div>
  )
}

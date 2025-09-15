import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

// Podés crear un data.json propio para customers en esta carpeta
import data from "./data.json"

export const metadata = {
  title: "Customers – Qidu Control Panel",
}

export default function CustomersPage() {
  return (
    <SidebarProvider
      style={
        {
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                {/* Solo tabla */}
                <DataTable
                  data={data.map((item) => ({
                    id: item.id,
                    header: item.name || "",
                    type: "",
                    status: item.status,
                    target: "",
                    limit: "",
                    reviewer: "",
                  }))}
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

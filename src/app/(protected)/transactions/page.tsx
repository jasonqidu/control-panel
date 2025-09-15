import type React from "react"
import { DataTable } from "@/components/data-table"

import data from "./data.json"

export const metadata = {
  title: "Transactions – Qidu Control Panel",
}

export default function TransactionsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <DataTable
              data={data.map((item) => ({
                id: item.id,
                header: item.transactionId || "",
                type: item.type || "",
                status: item.status || "",
                target: item.amount || "",
                limit: "",
                reviewer: "",
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { IconPhone, IconVoicemail, IconBrandWhatsapp, IconCheck, IconX } from "@tabler/icons-react"

type Customer = {
  id: number
  firstName: string
  lastName: string
  phone: string
  debt: number
  activity: {
    type: "call" | "payment"
    status?: "connected" | "voicemail"
    date: string
    source?: string
    amount?: number
  }[]
}

export function CustomerDrawer({ customer }: { customer: Customer }) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">View</Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-3xl p-6">
        <DrawerHeader className="pb-4">
          <DrawerTitle className="text-2xl font-semibold">
            {customer.firstName} {customer.lastName}
          </DrawerTitle>
          <DrawerDescription className="text-muted-foreground">
            Phone: {customer.phone}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-6 overflow-y-auto">
          {/* Debt */}
          <div>
            <h3 className="font-medium">Debt</h3>
            <p className="text-2xl font-semibold text-red-500">
              ${customer.debt.toLocaleString()}
            </p>
          </div>

          <Separator />

          {/* Activity History */}
          <div>
            <h3 className="font-medium mb-3">Activity History</h3>
            <div className="space-y-3">
              {customer.activity.map((a, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    {a.type === "call" ? (
                      a.status === "connected" ? (
                        <IconPhone className="text-green-500" />
                      ) : (
                        <IconVoicemail className="text-muted-foreground" />
                      )
                    ) : (
                      <IconCheck className="text-blue-500" />
                    )}
                    <div>
                      <p className="font-medium">
                        {a.type === "call"
                          ? a.status === "connected"
                            ? "Call connected"
                            : "Voicemail"
                          : `Payment received`}
                      </p>
                      <p className="text-xs text-muted-foreground">{a.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {a.type === "payment" && a.amount && (
                      <Badge variant="outline">${a.amount}</Badge>
                    )}
                    {a.source && (
                      <IconBrandWhatsapp className="text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

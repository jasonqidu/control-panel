"use client"

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import data from "@/data/dashboard.json"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  const metrics = data.metrics
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.id} className="@container/card">
          <CardHeader>
            <CardDescription>{metric.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              {metric.value}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                {metric.direction === "up" ? <IconTrendingUp /> : <IconTrendingDown />}
                {metric.trend}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {metric.description}{" "}
              {metric.direction === "up" ? (
                <IconTrendingUp className="size-4" />
              ) : (
                <IconTrendingDown className="size-4" />
              )}
            </div>
            <div className="text-muted-foreground">{metric.detail}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
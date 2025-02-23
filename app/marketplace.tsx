"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function MarketPlace() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Example Product Card */}
      <Card>
        <CardHeader>
          <Image
            src="/placeholder.svg"
            alt="Organic Rice"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <CardTitle>Organic Rice</CardTitle>
            <Badge variant="secondary">₹60/kg</Badge>
          </div>
          <CardDescription>Premium quality organic rice grown using traditional farming methods.</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Contact Seller</Button>
          <Button className="bg-green-600 hover:bg-green-700">Place Bid</Button>
        </CardFooter>
      </Card>

      {/* More product cards would go here */}
    </div>
  )
}


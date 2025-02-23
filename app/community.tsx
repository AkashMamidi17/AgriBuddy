"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Community() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Active Farmers</CardTitle>
          <CardDescription>Connect with farmers in your area</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg`} />
                    <AvatarFallback>FM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Local Farmer {i + 1}</p>
                    <p className="text-sm text-muted-foreground">Organic Farming Expert</p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Knowledge Hub</CardTitle>
          <CardDescription>Latest farming tips and techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="mb-4">
                <CardHeader>
                  <CardTitle className="text-lg">Farming Tip #{i + 1}</CardTitle>
                  <CardDescription>Learn about sustainable farming practices and increase your yield.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="text-green-600">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}


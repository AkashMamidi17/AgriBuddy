"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2 } from "lucide-react"

export function VideoFeed() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Your Farming Video</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="video">Video</Label>
            <Input id="video" type="file" accept="Video/*" onChange={handleFileSelect} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-green-600 hover:bg-green-700" disabled={!selectedFile}>
            Upload Video
          </Button>
        </CardFooter>
      </Card>

      {/* Example Video Post */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Farmer" />
            <AvatarFallback>FM</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">Organic Farming Techniques</CardTitle>
            <p className="text-sm text-muted-foreground">Posted by Local Farmer</p>
          </div>
        </CardHeader>
        <CardContent>
          <video className="w-full rounded-lg" controls poster="/placeholder.svg?height=400&width=600">
            <source src="/example-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="icon">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


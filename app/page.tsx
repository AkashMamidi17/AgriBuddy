"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, Upload, Users, Video } from "lucide-react"
import { VoiceAssistant } from "./voice-assistant"
import { VideoFeed } from "./video-feed"
import { Community } from "./community"
import { MarketPlace } from "./marketplace"

export default function Page() {
  const [isListening, setIsListening] = useState(false)

  return (
    <div className="min-h-screen bg-green-50">
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between h-16 px-4">
          <h1 className="text-2xl font-bold text-green-700">AgriBuddy</h1>
          <Button
            variant={isListening ? "destructive" : "default"}
            className="bg-green-600 hover:bg-green-700"
            onClick={() => setIsListening(!isListening)}
          >
            <Mic className="w-4 h-4 mr-2" />
            {isListening ? "Stop Listening" : "Start Voice Assistant"}
          </Button>
        </div>
      </header>

      <main className="container p-4 mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to AgriBuddy</CardTitle>
            <CardDescription>Your AI-powered farming assistant</CardDescription>
          </CardHeader>
          <CardContent>
            <VoiceAssistant isListening={isListening} />
          </CardContent>
        </Card>

        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="feed">
              <Video className="w-4 h-4 mr-2" />
              Video Feed
            </TabsTrigger>
            <TabsTrigger value="marketplace">
              <Upload className="w-4 h-4 mr-2" />
              Marketplace
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="w-4 h-4 mr-2" />
              Community
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed">
            <VideoFeed />
          </TabsContent>

          <TabsContent value="marketplace">
            <MarketPlace />
          </TabsContent>

          <TabsContent value="community">
            <Community />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


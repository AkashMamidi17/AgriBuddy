"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface VoiceAssistantProps {
  isListening: boolean
}

// Declare SpeechRecognition type
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
    SpeechSynthesisUtterance: any
    speechSynthesis: any
  }
}

export function VoiceAssistant({ isListening }: VoiceAssistantProps) {
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")

  useEffect(() => {
    if (!isListening) return

    let recognition: SpeechRecognition

    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = "te-IN" // Telugu language

      recognition.onresult = async (event) => {
        const current = event.resultIndex
        const transcriptText = event.results[current][0].transcript
        setTranscript(transcriptText)

        if (event.results[current].isFinal) {
          // Generate AI response using the AI SDK [^2][^vercel_knowledge_base]
          const { text } = await generateText({
            model: openai("gpt-4-turbo"),
            prompt: transcriptText,
            system:
              "You are a knowledgeable farming assistant. Provide helpful advice about farming techniques, weather, and crop management.",
          })
          setResponse(text)

          // Use speech synthesis to speak the response
          const speech = new SpeechSynthesisUtterance(text)
          speech.lang = "te-IN" // Telugu language
          window.speechSynthesis.speak(speech)
        }
      }

      recognition.start()
    }

    return () => {
      if (recognition) {
        recognition.stop()
      }
    }
  }, [isListening])

  return (
    <Card className="border-green-200">
      <CardContent className="p-4">
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          {transcript && (
            <div className="mb-4">
              <p className="font-semibold">You said:</p>
              <p className="text-muted-foreground">{transcript}</p>
            </div>
          )}
          {response && (
            <div>
              <p className="font-semibold">Assistant:</p>
              <p className="text-muted-foreground">{response}</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}


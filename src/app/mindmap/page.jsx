"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Lightbulb } from "lucide-react"
import { SUBJECT_OPTIONS } from "@/lib/mindmap-config"

export default function MindmapPage() {
  const [selectedSubject, setSelectedSubject] = useState("")
  const [timeDays, setTimeDays] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateMindmap = async () => {
    if (!selectedSubject || !timeDays) {
      alert("Please fill in all fields")
      return
    }

    setIsLoading(true)

    // Simulate API call or processing
    setTimeout(() => {
      console.log("[v0] Mind map created:", { subject: selectedSubject, days: timeDays })
      // TODO: Add actual mind map generation logic here
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Navigation */}
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Create Your Mind Map</h1>
            <p className="text-lg text-muted-foreground">
              Plan your syllabus preparation with our AI-powered mind map generator
            </p>
          </div>

          {/* Form Card */}
          <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg">
            <CardHeader className="space-y-2">
              <CardTitle>Syllabus Preparation Setup</CardTitle>
              <CardDescription>Select your subject and specify how many days you have to prepare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Subject Selection */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base font-medium">
                  Select Subject
                </Label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger id="subject" className="h-11 border-primary/30 bg-input/50">
                    <SelectValue placeholder="Choose a subject..." />
                  </SelectTrigger>
                  <SelectContent>
                    {SUBJECT_OPTIONS.map((subject) => (
                      <SelectItem key={subject.id} value={subject.id}>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{subject.icon}</span>
                          {subject.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">More subjects coming soon! You can add custom subjects.</p>
              </div>

              {/* Time Input */}
              <div className="space-y-2">
                <Label htmlFor="days" className="text-base font-medium">
                  Preparation Time (Days)
                </Label>
                <Input
                  id="days"
                  type="number"
                  placeholder="e.g., 30"
                  value={timeDays}
                  onChange={(e) => setTimeDays(e.target.value)}
                  className="h-11 border-primary/30 bg-input/50"
                  min="1"
                  max="365"
                />
                <p className="text-xs text-muted-foreground">Enter the number of days you have to prepare</p>
              </div>

              {/* Subject Info Display */}
              {selectedSubject && (
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Selected Subject: </span>
                    {SUBJECT_OPTIONS.find((s) => s.id === selectedSubject)?.name}
                  </p>
                  {timeDays && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-semibold text-foreground">Timeline: </span>
                      {timeDays} days
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateMindmap}
                  disabled={!selectedSubject || !timeDays || isLoading}
                  className="flex-1 h-11 bg-gradient-to-r from-primary to-accent"
                >
                  {isLoading ? "Creating..." : "Generate Mind Map"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedSubject("")
                    setTimeDays("")
                  }}
                  className="h-11 border-primary/30"
                >
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-border/40 bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-base">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>1. Select your subject from the dropdown</p>
                <p>2. Enter the number of days you have</p>
                <p>3. Click "Generate Mind Map" to create your personalized study plan</p>
              </CardContent>
            </Card>

            <Card className="border border-border/40 bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-base">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>✓ Be realistic about your timeline</p>
                <p>✓ Use the mind map to organize topics</p>
                <p>✓ Adjust your plan as needed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

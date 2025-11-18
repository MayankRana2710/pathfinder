"use client"
import { Label } from "@/components/ui/label";
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sparkles, Copy, Check } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import axios from "axios";

export default function MindmapPage() {
  const [selectedSubject, setSelectedSubject] = useState("")
  const [timeDays, setTimeDays] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [mindmapResponse, setMindmapResponse] = useState(null);

  const handleCreateMindmap = async () => {
    if (!selectedSubject || !timeDays) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/mindmapquery/format", {
        topics: selectedSubject,
        time: timeDays,
      });

      console.log("[v0] Mind map created:", res.data);

      // Save response to state to render in UI
      setMindmapResponse(res.data.content);

    } catch (error) {
      console.error("Mindmap generation failed:", error);
      alert("Error generating mindmap");
    } finally {
      setIsLoading(false);
    }
  };

  const SUBJECT_OPTIONS = [
    { id: 1, icon: "📊", name: "Data Structures & Algorithms" },
    { id: 2, icon: "🎨", name: "Web Development" },
    { id: 3, icon: "🛡️", name: "Cyber Security" },
    { id: 4, icon: "🧠", name: "Artificial Intelligence" },
    { id: 5, icon: "🤖", name: "Machine Learning" },
    { id: 6, icon: "💻", name: "Operating System" },
    { id: 7, icon: "🗄️", name: "DBMS" },
    { id: 8, icon: "🌐", name: "Computer Networks" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Navigation */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-transparent bg-gradient-to-r from-background via-primary/5 to-background/80 backdrop-blur-xl shadow-lg shadow-primary/10"
      >
        <div className="max-w-full mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Back Button */}
            <motion.div whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-primary hover:text-primary hover:bg-primary/15 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
            </motion.div>

            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex-1 flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40 flex items-center justify-center text-2xl shadow-lg shadow-primary/20">
                💡
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  Page Title
                </h1>
                <p className="text-xs text-muted-foreground">Personalized AI learning experience</p>
              </div>
            </motion.div>

            {/* Status Badge Removed */}
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </motion.div>
      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 py-12 md:py-20">
        <div className="space-y-8">
          {/* Form Card */}
          <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg p-5">
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
          <div>{mindmapResponse && (
            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg p-5">
              <CardHeader>
                <CardTitle>Generated Mind Map</CardTitle>
                <CardDescription>Your personalized study mind map:</CardDescription>
              </CardHeader>
              <CardContent className="text-lg text-muted-foreground">
                <pre className="whitespace-pre-wrap break-words">hello{JSON.stringify(mindmapResponse, null, 2)}</pre>
              </CardContent>
            </Card>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

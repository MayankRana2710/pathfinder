"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sparkles } from "lucide-react"
import { EMOTIONS_OPTIONS } from "@/lib/emotions-config"
import { motion } from "framer-motion"
import axios from "axios"


export default function DomainPage({ domain, topic }) {
    const [selectedEmotions, setSelectedEmotions] = useState([])
    const [shouldFetch, setShouldFetch] = useState(false)
    const [data,setData] = useState("")
    const handleEmotionClick = (emotionId) => {
        setSelectedEmotions((prev) => {
            if (prev.includes(emotionId)) {
                return prev.filter((id) => id !== emotionId)
            } else if (prev.length < 3) {
                return [...prev, emotionId]
            }
            return prev
        })
    }
    // const emotionList = selectedEmotions
    const handleAIOverview = () => {
        setShouldFetch(true);
    }
    useEffect(() => {
        if(!shouldFetch) return;
        const fetchData = async () => {
            try {
                const res = await axios.post("http://127.0.0.1:5000/api/aiquery/query", {
                    mood: selectedEmotions,
                    topics: topic,
                    field:domain,
                });
                console.log("Data received: ", res.data);
                setData(res.data.content);
            }
            catch (error) {
                console.error('❌ Axios error:', error.message);
                console.error('Response:', error.response?.data);
                console.error('Status:', error.response?.status);
            }
            finally{
                setShouldFetch(false)
            }  
        }
        fetchData();
    }, [shouldFetch])

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
            {/* Top Navigation */}
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
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                                    {domain}
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
            <div className="max-w-full mx-auto px-4 py-8 md:py-8">
                <div className="space-y-8">
                    {/* Emotion Selection Section */}
                    <Card className="border border-primary/80 bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden">

                        <CardContent className="space-y-6">

                            <CardHeader className="space-y-2 p-6 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 border-b border-primary/20">
                                <CardTitle className="flex items-center gap-2 text-primary">
                                    <Sparkles className="w-5 h-5" />
                                    How are you feeling today?
                                </CardTitle>
                                <CardDescription>
                                    Select emotions to personalize your learning path
                                </CardDescription>
                            </CardHeader>

                            {/* Emotion Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-5 pb-4">
                                {EMOTIONS_OPTIONS.map((emotion) => {
                                    const isSelected = selectedEmotions.includes(emotion.id)
                                    const isMaxed = selectedEmotions.length === 3 && !isSelected

                                    return (
                                        <button
                                            key={emotion.id}
                                            onClick={() => handleEmotionClick(emotion.id)}
                                            disabled={isMaxed}
                                            className={`p-4 rounded-lg border-8 transition-all duration-200 flex flex-col items-center gap-2 text-center ${isSelected
                                                ? `border-primary bg-primary/90 shadow-lg shadow-primary/60`
                                                : isMaxed
                                                    ? `border-border/30 opacity-50 cursor-not-allowed`
                                                    : `border-border/40 hover:border-primary/50 hover:bg-primary/5`
                                                }`}
                                            title={emotion.description}
                                        >
                                            <span className="text-3xl">{emotion.emoji}</span>
                                            <span className="text-xs font-medium">{emotion.name}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Selected emotions summary */}
                            {selectedEmotions.length > 0 && (
                                <div className="p-4 bg-accent/10 border border-accent/10 space-y-2">

                                    <div className="flex flex-wrap gap-2 justify-start items-center">
                                        <span className="text-sm font-medium text-foreground">Your emotional state:</span>
                                        {selectedEmotions.map((emotionId) => {
                                            const emotion = EMOTIONS_OPTIONS.find((e) => e.id === emotionId)
                                            return (
                                                <div
                                                    key={emotionId}
                                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm"
                                                >

                                                    <span>{emotion.emoji}</span>
                                                    <span>{emotion.name}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                            {selectedEmotions.length > 0 && (
                                <div className="max-w-full mx-auto flex items-center justify-center pb-4">
                                    <div className="gap-2 bg-primary rounded-2xl text-white hover:text-primary hover:bg-primary/10 p-3">
                                        <button
                                            onClick={handleAIOverview}
                                            disabled={shouldFetch}
                                        >
                                            Suggest Me
                                        </button>
                                    </div>
                                </div>
                            )
                            }
                            <div className="text-white text-2xl p-5">
                                {data}
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}

"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const CAPABILITIES = [
  {
    title: "Mood Detection",
    description: "Personalized study topics based on your current emotional state",
  },
  {
    title: "AI-Generated Paths",
    description: "Custom learning roadmaps crafted specifically for your goals",
  },
  {
    title: "Real-Time Progress",
    description: "Track improvements and insights as you learn",
  },
  {
    title: "Adaptive Suggestions",
    description: "Suggestions that evolve with your motivation and focus levels",
  },
]

export default function AICapabilitiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Pathfinder Understands You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI that adapts to your unique learning style and needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {CAPABILITIES.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/40 backdrop-blur-xl border-accent/30 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0"
                  >
                    <Check className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

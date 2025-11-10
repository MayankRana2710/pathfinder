"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function DemoPreviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience the Pathfinder Dashboard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our mood-aware AI creates personalized learning experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="relative overflow-hidden border-accent/30 bg-card/30 backdrop-blur-xl p-1">
            <div className="relative bg-gradient-to-b from-background/50 to-background rounded-lg p-8 md:p-12 min-h-96">
              {/* Mock Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Mood Selector */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30 text-center hover:border-primary/60 transition-colors"
                >
                  <div className="text-4xl mb-3">😊</div>
                  <h3 className="font-semibold mb-2">Current Mood</h3>
                  <p className="text-sm text-muted-foreground">Focused & Motivated</p>
                </motion.div>

                {/* Learning Path */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30 hover:border-primary/60 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="h-2 bg-accent rounded-full w-3/4"></div>
                    <div className="h-2 bg-accent/50 rounded-full w-1/2"></div>
                    <div className="h-2 bg-accent/30 rounded-full w-2/3"></div>
                  </div>
                  <h3 className="font-semibold mt-4 mb-1">Your Learning Path</h3>
                  <p className="text-sm text-muted-foreground">DSA → System Design</p>
                </motion.div>

                {/* Progress */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30 hover:border-primary/60 transition-colors"
                >
                  <div className="text-3xl font-bold text-primary mb-2">68%</div>
                  <h3 className="font-semibold mb-1">Week Progress</h3>
                  <p className="text-sm text-muted-foreground">2 more sessions to level up</p>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 pointer-events-none rounded-lg"
              />
            </div>

            {/* Border Glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(96, 165, 250, 0.3)",
                  "0 0 40px rgba(96, 165, 250, 0.6)",
                  "0 0 20px rgba(96, 165, 250, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 rounded-lg pointer-events-none"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

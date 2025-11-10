"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    title: "Focus Reinforcement",
    description:
      "Pathfinder keeps me focused on the right topics at the right time, eliminating distractions and maximizing learning efficiency.",
    author: "Alex Chen",
    role: "Computer Science Student",
  },
  {
    title: "Smarter Study Flow",
    description:
      "The AI adapts to my mood, suggesting topics that match my emotional state. I've never felt more motivated to study.",
    author: "Jordan Silva",
    role: "BTech Student",
  },
  {
    title: "Personalized Roadmaps",
    description:
      "Instead of following generic paths, Pathfinder creates learning journeys tailored to my pace and goals. Game changer!",
    author: "Sam Patel",
    role: "Self-Learner",
  },
]

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Pathfinder</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students transforming their learning journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(96, 165, 250, 0.15)" }} className="h-full">
                <Card className="h-full p-8 bg-card/40 backdrop-blur-xl border-accent/30 hover:border-primary/50 transition-all duration-300 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-foreground">{testimonial.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{testimonial.description}</p>

                  {/* Author */}
                  <div className="border-t border-accent/20 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

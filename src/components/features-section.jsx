"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const FEATURES = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    description: "Master DSA with AI-guided learning paths",
    icon: "📊",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Build beautiful UIs with expert guidance",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Create scalable server solutions",
    icon: "⚙️",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: 4,
    title: "Object Oriented Programming",
    description: "Learn OOPS concepts thoroughly",
    icon: "🏗️",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Operating Systems",
    description: "Understand OS fundamentals deeply",
    icon: "💻",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Database Management",
    description: "Design and manage databases efficiently",
    icon: "🗄️",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 7,
    title: "System Design",
    description: "Architect complex systems",
    icon: "🔗",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 8,
    title: "Computer Networks",
    description: "Master networking protocols",
    icon: "🌐",
    gradient: "from-cyan-500 to-blue-500",
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Smart Learning Across Every Domain</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore eight essential Computer Science domains with personalized AI guidance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <motion.div whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(96, 165, 250, 0.2)" }} className="h-full">
                <Card className="h-full p-6 bg-card/30 backdrop-blur-xl border-accent/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

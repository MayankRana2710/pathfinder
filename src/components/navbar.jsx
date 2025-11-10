"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/50 border-b border-accent/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pathfinder
          </span>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Mind Map", "Contact"].map((link) => (
            <motion.a
              key={link}
              whileHover={{ color: "#60a5fa" }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Get Started Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg hover:shadow-primary/50">
            Get Started
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  )
}

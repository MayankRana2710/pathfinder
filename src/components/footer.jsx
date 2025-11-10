"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const links = ["About", "GitHub", "Privacy Policy", "Contact"]

  return (
    <footer className="border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Branding */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pathfinder
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex gap-8 flex-wrap justify-center md:justify-end">
            {links.map((link) => (
              <motion.a
                key={link}
                whileHover={{ color: "#60a5fa", scale: 1.05 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Pathfinder. All rights reserved.</p>
            <p className="text-xs">Crafted with intelligence for student success</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

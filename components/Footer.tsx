'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>using Next.js, TypeScript & Tailwind CSS</span>
          </div>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs">
            © {currentYear} Harsukrit Pall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
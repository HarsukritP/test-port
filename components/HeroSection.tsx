'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'MongoDB',
    'Python',
    'AWS'
  ]

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-8">
              <Image
                src="https://www.pall.dev/Portrait.PNG"
                alt="Harry Pall Portrait"
                fill
                className="rounded-full object-cover border-4 border-white shadow-2xl"
                sizes="(max-width: 640px) 160px, 192px"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Harry Pall
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              Passionate about creating innovative web applications with modern technologies. 
              I specialize in building scalable, user-friendly solutions that make a difference.
              Always excited to tackle new challenges and learn cutting-edge technologies.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider font-medium">
              Technologies I Work With
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={scrollToProjects}
            >
              <ChevronDown className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
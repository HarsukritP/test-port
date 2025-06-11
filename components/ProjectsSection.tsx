'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Portfolio Analytics",
      description: "Full-stack application that analyzes portfolio performance using machine learning algorithms. Built with React, Python Flask, and TensorFlow for predictive insights and data visualization.",
      technologies: ["React", "Python", "TensorFlow", "Flask", "PostgreSQL", "D3.js"],
      liveUrl: "https://portfolio-analytics.pall.dev",
      githubUrl: "https://github.com/harrypall/portfolio-analytics",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: "Real-Time Collaboration Platform",
      description: "Scalable web application enabling teams to collaborate in real-time with live document editing, video calls, and project management. Features WebSocket connections and microservices architecture.",
      technologies: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Redis", "AWS"],
      liveUrl: "https://collab-platform.pall.dev",
      githubUrl: "https://github.com/harrypall/realtime-collab",
      gradient: "from-green-400 via-blue-500 to-purple-600"
    },
    {
      title: "Smart IoT Dashboard",
      description: "IoT device management system with real-time monitoring, automated alerts, and predictive maintenance. Integrates with various sensors and provides comprehensive analytics.",
      technologies: ["Vue.js", "Python", "MQTT", "InfluxDB", "Docker", "Kubernetes"],
      liveUrl: "https://iot-dashboard.pall.dev",
      githubUrl: "https://github.com/harrypall/iot-dashboard",
      gradient: "from-orange-400 via-red-500 to-pink-500"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of projects that showcase my technical skills and passion for creating innovative solutions
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
                {/* Floating shapes for visual interest */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
                <div className="absolute top-8 right-8 w-8 h-8 bg-white/20 rounded-full"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-300 group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors duration-300 group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/harrypall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
} 
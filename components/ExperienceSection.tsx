'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Code, Rocket } from 'lucide-react'

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Code,
      title: "Programming & Game Development Instructor",
      company: "Code Ninjas",
      period: "2023 - Present",
      description: "Worked with a team to teach game development, robotics, and programming fundamentals to over 200 students of various ages. Used proprietary platforms such as Unity, MakeCode, and VSCode to develop custom curriculum.",
      technologies: ["Unity", "MakeCode", "VSCode", "Game Development", "Robotics"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Financial Officer & Co-Founder",
      company: "WilderCare",
      period: "2022 - 2023",
      description: "Co-founded a non-profit organization supporting the Oakville Milton Humane Society. Spearheaded revenue generation through bracelet sales and React-based website development, resulting in 40% growth in online engagement and over $1,000 in donations.",
      technologies: ["React", "Social Media", "Financial Management", "Non-Profit"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Briefcase,
      title: "Programmer",
      company: "Orbit Robotics",
      period: "2021 - 2022",
      description: "Contributed to the team's success in the FIRST Robotics Competition at the regional level. Designed and optimized firmware using WPILib and Java, developing critical functions for motor and servo control with pneumatic systems integration.",
      technologies: ["WPILib", "Java", "GitHub", "Robotics", "Motor Control"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "Firmware Developer",
      company: "UW Orbital",
      period: "2023 - Present",
      description: "Played a critical role in developing systems for a nanosatellite project. Created reliable and efficient firmware to control and monitor satellite subsystems, wrote low-level drivers for sensors and actuators, and performed rigorous simulations to validate functionality under spaceflight conditions.",
      technologies: ["C++", "FreeRTOS", "Git", "I2C/SPI", "Embedded Systems"],
      gradient: "from-blue-500 to-purple-500"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey through robotics, aerospace, education, and non-profit work
            </p>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${experience.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <experience.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                            {experience.company}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {experience.period}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
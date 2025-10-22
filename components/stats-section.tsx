"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function ModernStatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const targetCount = 3700

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const increment = targetCount / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= targetCount) {
          setCount(targetCount)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, targetCount])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950">
      {/* Floating background lights */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="container px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 shadow-lg">
            <span className="text-cyan-400 font-medium tracking-wide">Nos Réalisations</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Plus de{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text tabular-nums">
              {count.toLocaleString()}
            </span>
            <br />
            projets réalisés
          </h2>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Rénovation complète, peinture ou énergétique… Impossible n'est pas français! 
            Nos équipes relèvent tous les défis pour transformer vos espaces.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

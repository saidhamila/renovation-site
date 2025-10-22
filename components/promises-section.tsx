"use client"

import React, { useState, useEffect, useRef } from "react"
import { Clock, Users, Shield, Award } from "lucide-react"
import { motion } from "framer-motion"

export function ModernPromisesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const promises = [
    {
      icon: Clock,
      title: "Estimation gratuite",
      description: "Devis détaillé gratuit, définition du temps et du budget",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Les meilleurs artisans",
      description: "Sélectionnés, contrôlés pour votre projet",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Simple et sécurisé",
      description: "Signature électronique et paiements sécurisés",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Award,
      title: "Une équipe d'experts",
      description: "Chez un interlocuteur privilégié",
      color: "from-cyan-600 to-blue-600"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950">
      {/* Subtle floating lights */}
      <div className="absolute top-[-50px] left-[-50px] w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Notre <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Promesse</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Un engagement qualité pour votre tranquillité d'esprit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="group relative cursor-pointer"
            >
              <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:scale-105 hover:shadow-cyan-500/50 transition-transform duration-500">
                {/* Gradient icon circle */}
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${promise.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <promise.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{promise.title}</h3>
                <p className="text-gray-300 leading-relaxed">{promise.description}</p>

                {/* Hover gradient glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${promise.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

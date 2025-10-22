"use client"

import { Home, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Home,
    title: "Un accompagnement serein pour vos travaux",
    description:
      "Un seul interlocuteur du début à la fin : simplicité, clarté et sérénité. Fini les imprévus et les pertes de temps !",
  },
  {
    icon: Zap,
    title: "La performance énergétique au cœur de chaque projet",
    description:
      "Nous optimisons le confort et les consommations de votre logement à chaque étape de la rénovation.",
  },
]

export function FeaturesSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.3 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-950 via-blue-950 to-purple-950 overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => {itemRefs.current[index] = el}}
              initial={{ opacity: 0, y: 30 }}
              animate={visibleItems[index] ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="relative group cursor-pointer"
            >
              {/* Glassmorphism Card */}
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:scale-105 hover:shadow-blue-500/50 transition-transform duration-500">
                <div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>

              {/* Subtle floating glow */}
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl opacity-50 animate-blob"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden"
    >
      {/* Animated glowing blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-80px] right-[-100px] w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm text-cyan-400 font-medium tracking-wide uppercase"
          >
            Une Équipe d'Experts à Vos Côtés
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg"
          >
            Vous êtes entre de bonnes mains
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-gray-200 text-lg md:text-xl leading-relaxed drop-shadow-sm"
          >
            Un projet réussi vous demande, certes un excellent artisan mais surtout un bon accompagnement. Chez Flash
            Services 78, l'humain, la proximité, l'écoute sont au cœur de nos priorités. Un problème ? Nos équipes sont
            là pour vous aider !
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl shadow-2xl hover:scale-105 transition-all duration-500">
                Demander mon devis →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

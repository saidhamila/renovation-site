"use client"

import React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Globe, Instagram, Linkedin } from "lucide-react"

export function ModernFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative min-h-[500px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400/20 rounded-lg transform rotate-45 animate-pulse" />
          <div className="absolute top-32 right-4 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-8 sm:left-32 w-12 h-6 sm:w-20 sm:h-8 bg-cyan-300/20 rounded-full transform -rotate-12" />
        </div>

        {/* Main content container */}
        <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[400px]">

            {/* Left section with contact info */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              {/* Name and title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 group text-center sm:text-left">
              
               
              </div>

              {/* Contact items */}
              <div className="ml-9 space-y-3 sm:space-y-4">
                {[
                  { icon: Mail, text: "sfs.78@outlook.fr" },
                  { icon: Phone, text: "06.10.17.11.05" },
                  { icon: Globe, text: "www.flashservices78.fr" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-5 group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg group-hover:shadow-cyan-500/50 flex-shrink-0">
                      <item.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300 text-center sm:text-left break-all sm:break-normal">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="ml-9 flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-5 group text-center sm:text-left">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white leading-tight group-hover:text-cyan-200 transition-colors duration-300 text-center sm:text-left break-all sm:break-normal">81 Rue de Silly</p>
                  <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white leading-tight group-hover:text-cyan-200 transition-colors duration-300 text-center sm:text-left break-all sm:break-normal">Boulogne-Billancourt 92100</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="ml-9 flex flex-col items-center sm:items-start space-y-4 pt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/flashservices78" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </a>
                  
                  <a 
                    href="https://www.tiktok.com/@flash.services78" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-800 shadow-lg hover:shadow-gray-500/50 hover:scale-110 transition-all duration-300"
                  >
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/company/flashservices78" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right section with map */}
            <div className="flex flex-col space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Notre Emplacement</h2>
                <p className="text-cyan-200 text-sm">81 Rue de Silly, Boulogne-Billancourt 92100</p>
              </div>
              
              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] border-4 border-cyan-500/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8!2d2.239!3d48.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67af3b3c3d3d3%3A0x0!2s81%20Rue%20de%20Silly%2C%2092100%20Boulogne-Billancourt!5e0!3m2!1sen!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flash Services 78 Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
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
      className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
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
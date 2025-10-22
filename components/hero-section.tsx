"use client"

import React, { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Star, Phone } from "lucide-react"
import { Hero3DScene } from "./Hero3DScene"
import { RobotSpline } from "./RobotSpline"
import Link from "next/link"
import TextType from "./TextType"

export function ModernHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Delay animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Image slider
  const images = [
    "/family-apartment-renovation-modern-interior-design.jpg",
    "/modern-kitchen-renovation-sleek-design-contemporar.jpg",
    "/modern-bathroom-renovation-with-italian-shower.jpg",
    "/family-house-renovation-complete-modern-extension.jpg",
    "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* 3D Background Layers */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20" />}>
          <Hero3DScene />
        </Suspense>
      </div>

      {/* Robot Spline Background */}
      <div className="absolute inset-0 opacity-30">
        <RobotSpline />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/60 z-10" />

      {/* SVG Wave Separator at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-auto overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block w-full h-auto fill-current"
          style={{ fill: "#0099ff", fillOpacity: "1" }}
        >
          <path d="M0,256L48,224C96,192,192,128,288,85.3C384,43,480,21,576,42.7C672,64,768,128,864,176C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 py-16 md:py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30">
                <span className="text-cyan-300 text-sm font-medium">Expert en Rénovation</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  <TextType
                    text={["Flash Services78"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Rénovation tous corps d'état - Votre partenaire de confiance pour transformer vos espaces avec expertise
                et innovation.
              </p>
            </div>

            {/* ✅ Updated Buttons with Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Devis Gratuit → /devis-travaux */}
              <Link href="/devis-travaux">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Devis Gratuit 24h
                </Button>
              </Link>

              {/* Nos Réalisations → /realisations */}
              <Link href="/realisations">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 hover:bg-white hover:text-slate-900 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Nos réalisations
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-medium">Excellent</span>
              </div>
              <div className="text-cyan-300">|</div>
              <div className="text-white">
                <span className="font-bold">3700+</span> projets réalisés
              </div>
            </div>
          </div>

          {/* Right column - Floating Image Card */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Glowing animated background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-blue-400/20 to-purple-400/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />

              {/* Image Slider Card */}
              <div
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 
                           shadow-2xl shadow-cyan-500/20 overflow-hidden transform transition-all duration-500 
                           group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-cyan-400/40"
              >
                {/* Slides container */}
                <div className="relative w-full h-[500px] overflow-hidden">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                      style={{
                        opacity: currentSlide === index ? 1 : 0,
                      }}
                    >
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-2xl shadow-lg shadow-black/30"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 
                             rounded-full z-10 hover:bg-black/70 transition"
                  aria-label="Previous Slide"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 
                             rounded-full z-10 hover:bg-black/70 transition"
                  aria-label="Next Slide"
                >
                  ›
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-cyan-400 scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

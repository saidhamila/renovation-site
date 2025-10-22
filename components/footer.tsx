"use client"

import React from "react"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px]">

            {/* Left section with enhanced logo */}
            <div className="flex flex-col items-center justify-center text-center lg:text-left space-y-6 lg:space-y-8">
              {/* Logo */}
              <div className="relative flex flex-col items-center space-y-4">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 relative flex items-center justify-center">
                  {/* Enhanced logo with 3D effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl" />

            <svg
  width="300"
  height="300"
  viewBox="0 0 300 300"
  className="relative w-full h-full"
>
  {/* Building with enhanced shadows */}
  <defs>
    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0891b2" />
      <stop offset="100%" stopColor="#0e7490" />
    </linearGradient>
  </defs>

  {/* Building body */}
  <rect x="50" y="150" width="200" height="100" fill="url(#buildingGrad)" rx="4" />
  <polygon points="40,150 95,80 150,150" fill="url(#buildingGrad)" />
  <polygon points="130,150 185,80 240,150" fill="url(#buildingGrad)" />

  {/* Windows with glow */}
  <rect x="80" y="180" width="26" height="70" fill="#38bdf8" rx="3" />
  <rect x="115" y="170" width="22" height="22" fill="#38bdf8" rx="3" />
  <rect x="145" y="170" width="22" height="22" fill="#38bdf8" rx="3" />
  <rect x="180" y="180" width="26" height="70" fill="#38bdf8" rx="3" />
</svg>


                  {/* Animated tools */}
                  <div className="absolute top-2 left-4 sm:top-4 sm:left-8 animate-pulse">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full" />
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">Flash Services 78</h1>
                  <p className="text-cyan-200 text-xs sm:text-sm font-bold tracking-widest uppercase">Rénovation Tous Corps d'État</p>
                </div>
              </div>
            </div>

            {/* Right section with contact info */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              {/* Name and title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 group text-center sm:text-left">
              
               
              </div>

              {/* Contact items */}
              <div className="space-y-3 sm:space-y-4">
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
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-5 group text-center sm:text-left">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white leading-tight group-hover:text-cyan-200 transition-colors duration-300 text-center sm:text-left break-all sm:break-normal">81 Rue de Silly</p>
                  <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white leading-tight group-hover:text-cyan-200 transition-colors duration-300 text-center sm:text-left break-all sm:break-normal">Boulogne-Billancourt 92100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

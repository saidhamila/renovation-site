"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Menu,
  Phone,
  Sparkles,
  Star,
  Zap,
  Leaf,
  Award,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsHeaderHidden(scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: "Nos réalisations",
      icon: Sparkles,
      href: "/realisations", // ✅ direct link (no children)
    },
    {
      name: "Nos expertises",
      icon: Award,
      children: [
        { name: "Toutes nos expertises 🧠", href: "/expertises" },
        { name: "Rénovation Appartement 🏢", href: "/renovation-appartement" },
        { name: "Rénovation Maison 🏡", href: "/renovation-maison" },
        { name: "Salle de bain 🛁", href: "/renovation-salle-de-bain" },
        { name: "Cuisine 🍽️", href: "/renovation-cuisine" },
      ],
    },
    {
      name: "Rénovation énergétique",
      icon: Zap,
      children: [
        { name: "Rénovation énergétique ⚡", href: "/renovation-energetique" },
        { name: "Guide isolation 📘", href: "/guide-isolation" },
        { name: "Systèmes de chauffage 🔥", href: "/guide-chauffage" },
        { name: "Devis travaux 🧾", href: "/devis-travaux" },
      ],
    },
    {
      name: "En savoir plus",
      icon: Leaf,
      children: [
        { name: "À propos 👥", href: "/a-propos" },
        { name: "Nos avis ⭐", href: "/nos-avis" },
        { name: "Manifesto 📋", href: "/manifesto" },
        { name: "Blog de la Squad 📝", href: "/blog" },
        { name: "Qui sommes-nous ? 💬", href: "/qui-sommes-nous" },
      ],
    },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 transition-transform duration-300 ${isHeaderHidden ? '-translate-y-full' : 'translate-y-0'}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/images/flash-services-logo.png"
                alt="Logo"
                className="h-31 w-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-white font-bold text-lg">Flash Services78</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) =>
              item.children ? (
                <DropdownMenu
                  key={item.name}
                  open={openMenus[item.name]}
                  onOpenChange={(open) =>
                    setOpenMenus(prev => ({
                      ...prev,
                      [item.name]: open
                    }))
                  }
                >
                  <DropdownMenuTrigger asChild>
                    <motion.div
                      className="relative group flex items-center space-x-2 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white rounded-2xl transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onMouseEnter={() => setOpenMenus(prev => ({ ...prev, [item.name]: true }))}
                      onMouseLeave={() => setOpenMenus(prev => ({ ...prev, [item.name]: false }))}
                    >
                      <item.icon className="h-5 w-5 text-cyan-300" />
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${openMenus[item.name] ? 'rotate-180' : ''}`} />
                    </motion.div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-80 mt-4 border-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-cyan-500/25 ring-1 ring-white/20 overflow-hidden animate-in slide-in-from-top-2 duration-300"
                    onMouseEnter={() => setOpenMenus(prev => ({ ...prev, [item.name]: true }))}
                    onMouseLeave={() => setOpenMenus(prev => ({ ...prev, [item.name]: false }))}
                  >
                    {/* Decorative top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative p-2">
                      {item.children.map((child, index) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            href={child.href}
                            className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-blue-500/15 hover:to-purple-500/20 text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2 relative overflow-hidden"
                            style={{
                              animationDelay: `${index * 50}ms`
                            }}
                          >
                            {/* Animated highlight */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                            <span className="text-base font-medium relative z-10 flex-1 group-hover:text-cyan-200 transition-colors duration-300">
                              {child.name}
                            </span>

                            {/* Trailing arrow */}
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-3 h-3 text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                              </svg>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>

                    {/* Bottom decorative element */}
                    <div className="px-4 pb-4">
                      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                // ✅ Direct link for Nos réalisations
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white rounded-2xl transition-all duration-300"
                  >
                    <item.icon className="h-5 w-5 text-cyan-300" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex"
            initial={{ scale: 0.8, opacity: 0, x: 40 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold text-base px-6 py-3 rounded-2xl shadow-lg shadow-cyan-500/30 flex items-center space-x-2 transition-all duration-300">
                <Phone className="h-5 w-5" />
                <span>Estimation gratuite</span>
                <Star className="h-4 w-4 text-yellow-300 animate-pulse" />
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} modal={false}>
              <SheetTrigger asChild>
                <motion.button
                  className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
                  whileTap={{ scale: 0.9 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[80%] bg-slate-900/90 border-l border-cyan-500/20 backdrop-blur-2xl"
              >
                <SheetHeader>
                  <SheetTitle className="flex justify-center py-4">
                    <img
                      src="/images/flash-services-logo.png"
                      alt="Logo"
                      className="h-65 w-auto object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                  {navigationItems.map((item) =>
                    item.children ? (
                      <details key={item.name} className="group">
                        <summary className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 cursor-pointer">
                          <span className="text-white font-semibold flex items-center space-x-2">
                            <item.icon className="h-5 w-5 text-cyan-400" />
                            <span>{item.name}</span>
                          </span>
                          <ChevronDown className="h-5 w-5 text-cyan-400 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-2 rounded-lg text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      // ✅ Direct mobile link for Nos réalisations
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white font-semibold flex items-center space-x-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5 text-cyan-400" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  )}

                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold py-3 rounded-2xl mt-6 flex items-center justify-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Estimation gratuite</span>
                      <Star className="h-4 w-4 text-yellow-300 animate-pulse" />
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Palette, Zap, Droplets, Shield, CheckCircle, ArrowRight, Clock, Euro, Users, Star } from "lucide-react"

export default function RenovationAppartement() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Home,
      title: "Rénovation Complète",
      description: "Transformation totale de votre appartement",
      features: ["Démolition", "Gros œuvre", "Second œuvre", "Finitions"],
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      icon: Palette,
      title: "Aménagement Intérieur",
      description: "Optimisation et décoration de vos espaces",
      features: ["Plans 3D", "Choix matériaux", "Mobilier sur mesure", "Décoration"],
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: Zap,
      title: "Électricité & Domotique",
      description: "Installation électrique moderne et connectée",
      features: ["Mise aux normes", "Domotique", "Éclairage LED", "Prises USB"],
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: Droplets,
      title: "Plomberie & Chauffage",
      description: "Systèmes de plomberie et chauffage performants",
      features: ["Canalisations", "Chauffage central", "Eau chaude", "VMC"],
      color: "bg-teal-500/20 text-teal-400",
    },
  ]

  const projects = [
    {
      title: "Appartement Haussmannien",
      description: "Rénovation complète 120m² - Paris 16ème",
      image: "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
      surface: "120m²",
      duration: "3 mois",
      budget: "80 000 - 120 000€",
      rating: 5,
    },
    {
      title: "Studio Moderne",
      description: "Optimisation d'espace 35m² - Boulogne",
      image: "/modern-studio-apartment-renovation-small-space-opt.jpg",
      surface: "35m²",
      duration: "1 mois",
      budget: "25 000 - 35 000€",
      rating: 4.5,
    },
    {
      title: "Appartement Familial",
      description: "Réaménagement 90m² - Neuilly",
      image: "/family-apartment-renovation-modern-interior-design.jpg",
      surface: "90m²",
      duration: "2 mois",
      budget: "60 000 - 90 000€",
      rating: 4,
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: "Garantie Décennale",
      description: "Tous nos travaux sont couverts par une garantie décennale",
    },
    {
      icon: Users,
      title: "Équipe Experte",
      description: "Artisans qualifiés et expérimentés dans la rénovation d'appartements",
    },
    {
      icon: Clock,
      title: "Respect des Délais",
      description: "Planning précis et respect des échéances convenues",
    },
    {
      icon: Euro,
      title: "Devis Transparent",
      description: "Prix fixe sans surprise, devis détaillé et transparent",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.3),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400/40 rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-20 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Badge variant="outline" className="mb-6 text-white border-white/20">
                <Home className="h-4 w-4 mr-2" />
                Rénovation Appartement
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Rénovez votre <span className="text-cyan-400">appartement</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                Transformation complète ou partielle, nous donnons vie à vos projets
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm">
                  Voir nos réalisations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nos <span className="text-cyan-400">Services</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une expertise complète pour tous vos projets de rénovation d'appartement
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-md" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nos <span className="text-cyan-400">Réalisations</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez nos plus belles rénovations d'appartements
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="relative overflow-hidden">
                    <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-slate-900">{project.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
                      <div className="text-center">
                        <div className="font-medium text-white">{project.surface}</div>
                        <div>Surface</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-white">{project.duration}</div>
                        <div>Durée</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-white">{project.budget}</div>
                        <div>Budget</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Pourquoi Nous <span className="text-cyan-400">Choisir</span> ?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Les avantages de faire appel à Flash Services 78</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                    <advantage.icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
              <h2 className="text-4xl font-bold mb-6">Transformons votre appartement ensemble</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href="/contact" className="flex items-center">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-white/5">
                  06.10.17.11.05
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Lightbulb, Thermometer, Clock, Euro, CheckCircle, ArrowRight, Palette } from "lucide-react"

export default function RenovationSalleDeBain() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Droplets,
      title: "Plomberie & Évacuation",
      description: "Installation complète de la plomberie, évacuations et arrivées d'eau",
      features: ["Canalisations neuves", "Évacuation optimisée", "Robinetterie haut de gamme"],
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: Lightbulb,
      title: "Éclairage & Électricité",
      description: "Système électrique aux normes avec éclairage design",
      features: ["Spots LED", "Prises étanches", "Éclairage d'ambiance"],
      color: "bg-yellow-500/20 text-yellow-400",
    },
    {
      icon: Thermometer,
      title: "Chauffage & Ventilation",
      description: "Solutions de chauffage et ventilation pour votre confort",
      features: ["Sèche-serviettes", "VMC performante", "Chauffage au sol"],
      color: "bg-red-500/20 text-red-400",
    },
    {
      icon: Palette,
      title: "Carrelage & Revêtements",
      description: "Pose de carrelage et revêtements muraux de qualité",
      features: ["Carrelage grand format", "Faïence design", "Étanchéité parfaite"],
      color: "bg-purple-500/20 text-purple-400",
    },
  ]

  const projects = [
    {
      title: "Salle de bain moderne",
      description: "Rénovation complète avec douche italienne",
      image: "/modern-bathroom-renovation-with-italian-shower.jpg",
      duration: "2 semaines",
      budget: "8 000 - 12 000€",
    },
    {
      title: "Salle de bain familiale",
      description: "Optimisation d'espace avec baignoire et douche",
      image: "/family-bathroom-with-bathtub-and-shower-renovation.jpg",
      duration: "3 semaines",
      budget: "10 000 - 15 000€",
    },
    {
      title: "Salle d'eau compacte",
      description: "Aménagement intelligent d'un petit espace",
      image: "/compact-bathroom-renovation-small-space-optimizati.jpg",
      duration: "1 semaine",
      budget: "5 000 - 8 000€",
    },
  ]

  const process = [
    { step: 1, title: "Diagnostic", description: "Évaluation de l'existant et de vos besoins" },
    { step: 2, title: "Conception", description: "Plans 3D et choix des matériaux" },
    { step: 3, title: "Démolition", description: "Dépose soignée de l'ancien équipement" },
    { step: 4, title: "Gros œuvre", description: "Plomberie, électricité, étanchéité" },
    { step: 5, title: "Finitions", description: "Carrelage, peinture, pose des équipements" },
    { step: 6, title: "Livraison", description: "Nettoyage et mise en service" },
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400/40 rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Badge variant="outline" className="mb-6 text-white border-white/20">
                <Droplets className="h-4 w-4 mr-2" />
                Rénovation Salle de Bain
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Transformez votre <span className="text-blue-400">salle de bain</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                De la conception à la réalisation, nous créons la salle de bain de vos rêves
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
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
              <h2 className="text-4xl font-bold mb-4">Nos <span className="text-blue-400">Services</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une expertise complète pour tous vos travaux de salle de bain
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-400/20 hover:-translate-y-2 transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
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
              <h2 className="text-4xl font-bold mb-4">Nos <span className="text-blue-400">Réalisations</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez quelques-unes de nos plus belles rénovations de salles de bain
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="relative overflow-hidden">
                    <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-blue-400" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <Euro className="h-4 w-4 mr-1 text-blue-400" />
                        {project.budget}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Notre <span className="text-blue-400">Processus</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">6 étapes pour une rénovation réussie</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
              <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre salle de bain ?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Contactez-nous pour un devis gratuit et personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
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
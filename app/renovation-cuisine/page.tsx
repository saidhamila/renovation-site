"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Lightbulb, Droplets, Wrench, CheckCircle, ArrowRight, Star } from "lucide-react"

export default function RenovationCuisine() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: ChefHat,
      title: "Conception Sur Mesure",
      description: "Design personnalisé selon vos besoins et votre espace",
      features: ["Plans 3D", "Ergonomie optimisée", "Style personnalisé", "Conseils déco"],
      color: "bg-orange-500/20 text-orange-400",
    },
    {
      icon: Wrench,
      title: "Installation Complète",
      description: "Pose de tous les éléments par nos artisans experts",
      features: ["Meubles de cuisine", "Électroménager", "Plan de travail", "Crédence"],
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      icon: Droplets,
      title: "Plomberie & Évacuation",
      description: "Installation des arrivées d'eau et évacuations",
      features: ["Évier et robinetterie", "Lave-vaisselle", "Évacuations", "Raccordements"],
      color: "bg-teal-500/20 text-teal-400",
    },
    {
      icon: Lightbulb,
      title: "Éclairage Design",
      description: "Solutions d'éclairage fonctionnel et décoratif",
      features: ["Spots LED", "Éclairage plan travail", "Ambiance", "Variateurs"],
      color: "bg-yellow-500/20 text-yellow-400",
    },
  ]

  const styles = [
    {
      title: "Cuisine Moderne",
      description: "Lignes épurées et matériaux contemporains",
      image: "/modern-kitchen-renovation-sleek-design-contemporar.jpg",
      features: ["Laque brillante", "Îlot central", "Électroménager intégré"],
      rating: 5,
    },
    {
      title: "Cuisine Classique",
      description: "Élégance intemporelle et matériaux nobles",
      image: "/classic-kitchen-renovation-traditional-elegant-des.jpg",
      features: ["Bois massif", "Moulures", "Poignées classiques"],
      rating: 5,
    },
    {
      title: "Cuisine Industrielle",
      description: "Style loft avec matériaux bruts",
      image: "/industrial-kitchen-renovation-loft-style-metal-woo.jpg",
      features: ["Métal et bois", "Briques apparentes", "Suspensions design"],
      rating: 5,
    },
  ]

  const process = [
    { step: 1, title: "Visite & Mesures", description: "Prise de mesures précises et analyse de l'existant" },
    { step: 2, title: "Conception 3D", description: "Plans détaillés et visualisation 3D de votre future cuisine" },
    { step: 3, title: "Choix Matériaux", description: "Sélection des matériaux, couleurs et équipements" },
    { step: 4, title: "Démontage", description: "Dépose soignée de l'ancienne cuisine" },
    { step: 5, title: "Installation", description: "Pose des meubles, électroménager et finitions" },
    { step: 6, title: "Finitions", description: "Réglages, nettoyage et mise en service" },
  ]

  const advantages = [
    {
      title: "Garantie Décennale",
      description: "Protection complète de vos travaux",
      icon: "🛡️",
    },
    {
      title: "Artisans Qualifiés",
      description: "Experts certifiés en cuisine",
      icon: "👨‍🔧",
    },
    {
      title: "Devis Transparent",
      description: "Prix fixe sans surprise",
      icon: "💰",
    },
    {
      title: "SAV Réactif",
      description: "Assistance après installation",
      icon: "🎯",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,146,60,0.3),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400/40 rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-6 h-6 bg-cyan-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-yellow-400/40 rotate-12 animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Badge variant="outline" className="mb-6 text-white border-white/20">
                <ChefHat className="h-4 w-4 mr-2" />
                Rénovation Cuisine
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Créez la <span className="text-orange-400">cuisine</span> de vos rêves
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                Conception, installation et finitions pour une cuisine sur mesure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
              <h2 className="text-4xl font-bold mb-4">Nos <span className="text-orange-400">Services</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                De la conception à l'installation, nous nous occupons de tout
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-orange-400/20 hover:-translate-y-2 transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-md" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
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

        {/* Styles Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Styles de <span className="text-orange-400">Cuisine</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Trouvez le style qui vous correspond</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {styles.map((style, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="relative overflow-hidden">
                    <Image src={style.image} alt={style.title} width={400} height={300} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-slate-900">{style.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{style.title}</h3>
                    <p className="text-gray-300 mb-4">{style.description}</p>
                    <ul className="space-y-2">
                      {style.features.map((feature, idx) => (
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

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Notre <span className="text-orange-400">Processus</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">6 étapes pour votre cuisine parfaite</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
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

        {/* Advantages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Pourquoi Nous <span className="text-orange-400">Choisir</span> ?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Les avantages Flash Services 78</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center group bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-5xl mb-4">{advantage.icon}</div>
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
              <h2 className="text-4xl font-bold mb-6">Prêt à rénover votre cuisine ?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Contactez-nous pour un devis gratuit et personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
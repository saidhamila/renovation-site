"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useParams } from "next/navigation"

interface Project {
  title: string
  location: string
  type: string
  duration: string
  image: string
  description: string
  slug: string
  details: {
    surface: string
    budget: string
    year: string
  }
  features: string[]
  gallery: string[]
}

const projectsData: Project[] = [
  {
    title: "Rénovation Appartement Haussmannien",
    location: "Paris 16ème",
    type: "Rénovation Complète",
    duration: "3 mois",
    image: "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
    description: "Rénovation complète d'un appartement de 120m² avec conservation des éléments d'époque. Un projet d'exception qui marie l'authenticité parisienne avec le confort moderne. Chaque détail a été pensé pour sublimer l'architecture haussmannienne tout en intégrant les technologies contemporaines.",
    slug: "renovation-appartement-haussmannien",
    details: {
      surface: "120 m²",
      budget: "80 000 €",
      year: "2024"
    },
    features: [
      "Conservation des moulures et parquets d'origine",
      "Rénovation complète de la cuisine et salles de bains",
      "Installation d'un système de chauffage moderne",
      "Mise aux normes électriques"
    ],
    gallery: [
      "/realisations/apartment-renovation-1/image-1.jpg",
      "/realisations/apartment-renovation-1/image-2.jpg",
      "/realisations/apartment-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Maison Contemporaine",
    location: "Boulogne-Billancourt",
    type: "Rénovation Énergétique",
    duration: "2 mois",
    image: "/modern-house-energy-renovation.jpg",
    description: "Amélioration des performances énergétiques avec isolation et nouveau système de chauffage. Un projet éco-responsable qui a permis de réduire significativement la consommation énergétique tout en améliorant le confort thermique.",
    slug: "maison-contemporaine",
    details: {
      surface: "150 m²",
      budget: "45 000 €",
      year: "2024"
    },
    features: [
      "Isolation thermique par l'extérieur",
      "Installation pompe à chaleur",
      "Remplacement menuiseries double vitrage",
      "Panneaux solaires photovoltaïques"
    ],
    gallery: [
      "/realisations/house-renovation-1/image-1.jpg",
      "/realisations/house-renovation-1/image-2.jpg",
      "/realisations/house-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Loft Industriel",
    location: "Issy-les-Moulineaux",
    type: "Aménagement",
    duration: "4 mois",
    image: "/industrial-loft-renovation.jpg",
    description: "Transformation d'un ancien atelier en loft moderne de 200m². Conservation de l'âme industrielle avec intégration d'éléments contemporains pour créer un espace de vie unique et fonctionnel.",
    slug: "loft-industriel",
    details: {
      surface: "200 m²",
      budget: "120 000 €",
      year: "2023"
    },
    features: [
      "Création d'une mezzanine",
      "Cuisine ouverte sur mesure",
      "Conservation des éléments industriels",
      "Verrière d'intérieur"
    ],
    gallery: [
      "/realisations/energy-renovation-1/image-1.jpg",
      "/realisations/energy-renovation-1/image-2.jpg",
      "/realisations/energy-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Villa Familiale",
    location: "Sèvres",
    type: "Extension",
    duration: "5 mois",
    image: "/family-house-extension-renovation.jpg",
    description: "Extension et rénovation d'une villa avec création d'une suite parentale. Agrandissement harmonieux respectant l'architecture existante tout en apportant luminosité et volume.",
    slug: "villa-familiale",
    details: {
      surface: "180 m²",
      budget: "95 000 €",
      year: "2023"
    },
    features: [
      "Extension de 40m²",
      "Suite parentale avec salle de bains",
      "Terrasse extérieure",
      "Réaménagement des espaces"
    ],
    gallery: [
      "/realisations/house-renovation-1/image-1.jpg",
      "/realisations/house-renovation-1/image-2.jpg",
      "/realisations/house-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Bureaux d'Entreprise",
    location: "Neuilly-sur-Seine",
    type: "Aménagement Professionnel",
    duration: "2 mois",
    image: "/modern-office-renovation.jpg",
    description: "Aménagement de bureaux modernes avec espaces collaboratifs. Création d'un environnement de travail stimulant favorisant la créativité et le bien-être des équipes.",
    slug: "bureaux-dentreprise",
    details: {
      surface: "300 m²",
      budget: "85 000 €",
      year: "2024"
    },
    features: [
      "Open space modulable",
      "Salles de réunion équipées",
      "Espace détente et cuisine",
      "Acoustique optimisée"
    ],
    gallery: [
      "/realisations/apartment-renovation-1/image-1.jpg",
      "/realisations/apartment-renovation-1/image-2.jpg",
      "/realisations/apartment-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Duplex Moderne",
    location: "Levallois-Perret",
    type: "Rénovation Complète",
    duration: "3 mois",
    image: "/modern-duplex-apartment-renovation.jpg",
    description: "Rénovation totale d'un duplex avec optimisation des espaces. Redistribution intelligente des volumes pour créer un habitat fonctionnel et élégant sur deux niveaux.",
    slug: "duplex-moderne",
    details: {
      surface: "110 m²",
      budget: "70 000 €",
      year: "2024"
    },
    features: [
      "Optimisation de l'escalier intérieur",
      "Cuisine américaine haut de gamme",
      "Dressing sur mesure",
      "Domotique complète"
    ],
    gallery: [
      "/realisations/bathroom-renovation-1/image-1.jpg",
      "/realisations/bathroom-renovation-1/image-2.jpg",
      "/realisations/bathroom-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Appartement Standing",
    location: "Paris 8ème",
    type: "Rénovation Luxe",
    duration: "4 mois",
    image: "/placeholder.svg",
    description: "Rénovation haut de gamme d'un appartement de prestige près des Champs-Élysées. Matériaux nobles et finitions exceptionnelles pour un résultat à la hauteur de ce quartier emblématique.",
    slug: "appartement-standing",
    details: {
      surface: "140 m²",
      budget: "110 000 €",
      year: "2024"
    },
    features: [
      "Parquet en chêne massif",
      "Marbre italien dans les salles d'eau",
      "Domotique haut de gamme",
      "Cave à vin intégrée"
    ],
    gallery: [
      "/realisations/apartment-renovation-1/image-1.jpg",
      "/realisations/apartment-renovation-1/image-2.jpg",
      "/realisations/apartment-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Maison de Ville",
    location: "Versailles",
    type: "Rénovation Complète",
    duration: "6 mois",
    image: "/placeholder.svg",
    description: "Restauration complète d'une maison de ville avec jardin et dépendances. Projet alliant respect du patrimoine et confort moderne pour une demeure familiale d'exception.",
    slug: "maison-de-ville",
    details: {
      surface: "220 m²",
      budget: "150 000 €",
      year: "2023"
    },
    features: [
      "Restauration des façades",
      "Aménagement du jardin paysager",
      "Transformation des dépendances",
      "Chauffage géothermique"
    ],
    gallery: [
      "/realisations/house-renovation-1/image-1.jpg",
      "/realisations/house-renovation-1/image-2.jpg",
      "/realisations/house-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Penthouse Parisien",
    location: "Paris 17ème",
    type: "Aménagement Luxe",
    duration: "5 mois",
    image: "/placeholder.svg",
    description: "Aménagement d'un penthouse avec terrasse panoramique et vue sur la Tour Eiffel. Espace de vie exceptionnel combinant luxe, design et vue imprenable sur Paris.",
    slug: "penthouse-parisien",
    details: {
      surface: "160 m²",
      budget: "130 000 €",
      year: "2024"
    },
    features: [
      "Terrasse de 80m² avec jacuzzi",
      "Baies vitrées panoramiques",
      "Cuisine professionnelle",
      "Home cinéma intégré"
    ],
    gallery: [
      "/realisations/apartment-renovation-1/image-1.jpg",
      "/realisations/apartment-renovation-1/image-2.jpg",
      "/realisations/apartment-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Studio Artistique",
    location: "Montmartre, Paris 18ème",
    type: "Transformation",
    duration: "3 mois",
    image: "/placeholder.svg",
    description: "Transformation d'un ancien atelier d'artiste en espace de vie moderne et lumineux. Conservation de l'esprit bohème avec des équipements contemporains pour un lieu unique.",
    slug: "studio-artistique",
    details: {
      surface: "85 m²",
      budget: "55 000 €",
      year: "2024"
    },
    features: [
      "Verrière d'artiste restaurée",
      "Hauteur sous plafond de 4m",
      "Mezzanine en métal et bois",
      "Éclairage LED sur rails"
    ],
    gallery: [
      "/realisations/energy-renovation-1/image-1.jpg",
      "/realisations/energy-renovation-1/image-2.jpg",
      "/realisations/energy-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Résidence Familiale",
    location: "Saint-Cloud",
    type: "Extension & Rénovation",
    duration: "7 mois",
    image: "/placeholder.svg",
    description: "Agrandissement et rénovation complète d'une résidence avec piscine et jardin paysager. Projet ambitieux créant une véritable oasis familiale aux portes de Paris.",
    slug: "residence-familiale",
    details: {
      surface: "250 m²",
      budget: "180 000 €",
      year: "2023"
    },
    features: [
      "Extension de 60m²",
      "Piscine chauffée 12x6m",
      "Pool house avec cuisine d'été",
      "Jardin paysager avec éclairage"
    ],
    gallery: [
      "/realisations/house-renovation-1/image-1.jpg",
      "/realisations/house-renovation-1/image-2.jpg",
      "/realisations/house-renovation-1/image-3.jpg"
    ]
  },
  {
    title: "Hôtel Particulier",
    location: "Paris 7ème",
    type: "Restauration Patrimoine",
    duration: "8 mois",
    image: "/placeholder.svg",
    description: "Restauration d'un hôtel particulier classé avec respect du patrimoine architectural. Travail minutieux alliant savoir-faire traditionnel et techniques modernes de conservation.",
    slug: "hotel-particulier",
    details: {
      surface: "320 m²",
      budget: "220 000 €",
      year: "2023"
    },
    features: [
      "Restauration des boiseries classées",
      "Réfection des parquets Versailles",
      "Modernisation discrète des équipements",
      "Mise aux normes patrimoine"
    ],
    gallery: [
      "/realisations/apartment-renovation-1/image-1.jpg",
      "/realisations/apartment-renovation-1/image-2.jpg",
      "/realisations/apartment-renovation-1/image-3.jpg"
    ]
  }
]

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params?.slug as string || 'renovation-appartement-haussmannien'
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const project = projectsData.find(p => p.slug === slug) || projectsData[0]

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setScrollProgress(currentProgress)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800/50 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          style={{
            top: '5%',
            left: '5%',
            animation: 'float 25s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          style={{
            bottom: '10%',
            right: '5%',
            animation: 'float 20s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            animation: 'float 30s ease-in-out infinite',
          }}
        />
      </div>

      {/* Mouse follower */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-30 blur-3xl transition-all duration-500 ease-out z-10"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-2000 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)',
              animation: 'float 15s ease-in-out infinite'
            }}></div>
          </div>
        </div>

        <div className={`relative z-20 container mx-auto px-4 text-center transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-5xl mx-auto space-y-8">
            <Badge className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white shadow-2xl shadow-cyan-500/50 animate-pulse mb-6">
              {project.type}
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-200 leading-tight mb-6">
              {project.title}
            </h1>

            <div className="flex items-center justify-center gap-4 text-cyan-200 text-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {project.location}
            </div>

            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-6 py-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>

            {/* Scroll indicator */}
            <div className="pt-12 animate-bounce">
              <svg className="w-8 h-8 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Surface", value: project.details.surface, icon: "📐" },
                { label: "Durée", value: project.duration, icon: "⏱️" },
                { label: "Budget", value: project.details.budget, icon: "💎" },
                { label: "Année", value: project.details.year, icon: "📅" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-300"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <p className="text-sm text-cyan-300 uppercase tracking-wider mb-2 font-semibold">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* About */}
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-2">
                  À Propos du Projet
                </h2>
                <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Caractéristiques</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <Card 
                    key={index}
                    className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden"
                  >
                    <CardContent className="p-6 relative">
                      {/* Animated shine */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-200 font-medium text-lg flex-1 pt-2">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Galerie Photos</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {project.gallery.map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer block"
                  >
                    <img
                      src={img}
                      alt={`${project.title} - Photo ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Zoom icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    {/* Border glow effect */}
                    <div className="absolute inset-0 border-4 border-cyan-500/0 group-hover:border-cyan-500/50 rounded-2xl transition-all duration-500"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative mt-24 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 animate-gradient"></div>
              <div className="relative bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl m-[2px] rounded-3xl p-12 md:p-16 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                  <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-200">
                    Un Projet Similaire en Tête ?
                  </h3>
                  <p className="text-xl text-gray-300">
                    Transformons ensemble votre vision en réalité exceptionnelle
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                    <Button 
                      size="lg" 
                      className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 border-0"
                    >
                      <span className="flex items-center gap-3">
                        Demander un Devis
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </Button>
                    
                    <Button 
                      size="lg"
                      className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-7 text-lg font-bold rounded-2xl border-2 border-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        Voir Tous les Projets
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  )
}

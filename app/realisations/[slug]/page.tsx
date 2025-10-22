"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useParams } from "next/navigation"

// Define the project data structure
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

// Hardcoded project data
const projectsData: Project[] = [
  {
    title: "Rénovation Appartement Haussmannien",
    location: "Paris 16ème",
    type: "Rénovation Complète",
    duration: "3 mois",
    image: "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
    description: "Rénovation complète d'un appartement de 120m² avec conservation des éléments d'époque.",
    slug: "renovation-appartement-complet-paris-75016",
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
    description: "Amélioration des performances énergétiques avec isolation et nouveau système de chauffage.",
    slug: "renovation-energetique-maison-boulogne-billancourt-92100",
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
    description: "Transformation d'un ancien atelier en loft moderne de 200m².",
    slug: "amenagement-loft-industriel-issy-les-moulineaux-92130",
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
    description: "Extension et rénovation d'une villa avec création d'une suite parentale.",
    slug: "extension-villa-familiale-sevres-92310",
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
    description: "Aménagement de bureaux modernes avec espaces collaboratifs.",
    slug: "amenagement-bureaux-entreprise-neuilly-sur-seine-92200",
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
    description: "Rénovation totale d'un duplex avec optimisation des espaces.",
    slug: "renovation-duplex-complet-levallois-perret-92300",
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
    title: "Construction Maisons Neuves",
    location: "Île-de-France",
    type: "Construction Neuve",
    duration: "Variable",
    image: "/placeholder.jpg",
    description: "Découvrez nos projets de construction de maisons neuves.",
    slug: "construction-maisons-neuves-france",
    details: {
      surface: "Variable",
      budget: "Sur devis",
      year: "2024"
    },
    features: [
      "Construction sur mesure",
      "Normes RT 2020",
      "Matériaux écologiques",
      "Garanties décennales"
    ],
    gallery: [
      "/realisations/energy-renovation-1/image-1.jpg",
      "/realisations/energy-renovation-1/image-2.jpg",
      "/realisations/energy-renovation-1/image-3.jpg"
    ]
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  // Slug mapping for backward compatibility
  const slugMapping: { [key: string]: string } = {
    'renovation-appartement-haussmannien': 'renovation-appartement-complet-paris-75016',
    'maison-contemporaine': 'renovation-energetique-maison-boulogne-billancourt-92100',
    'loft-industriel': 'amenagement-loft-industriel-issy-les-moulineaux-92130',
    'villa-familiale': 'extension-villa-familiale-sevres-92310',
    'bureaux-dentreprise': 'amenagement-bureaux-entreprise-neuilly-sur-seine-92200',
    'duplex-moderne': 'renovation-duplex-complet-levallois-perret-92300',
    'maisons': 'construction-maisons-neuves-france',
  }

  // Use mapped slug if old slug is used, otherwise use the original
  const actualSlug = slugMapping[slug] || slug

  const project = projectsData.find((p) => p.slug === actualSlug)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <main className="py-24 md:py-32 text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Projet non trouvé</h1>
            <p className="text-xl text-gray-600 mb-10">Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
            <Link href="/realisations">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Retour aux réalisations
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
          <div className="text-white max-w-4xl">
            <Badge className="mb-4 bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
              {project.type}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-200">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Surface</p>
              <p className="text-2xl font-bold text-gray-900">{project.details.surface}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Durée</p>
              <p className="text-2xl font-bold text-gray-900">{project.duration}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Budget</p>
              <p className="text-2xl font-bold text-gray-900">{project.details.budget}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Année</p>
              <p className="text-2xl font-bold text-gray-900">{project.details.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">À propos du projet</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
              {project.description}
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {project.features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-800 font-medium">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Gallery */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Galerie photos</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {project.gallery.map((img, index) => (
                  <Link key={index} href={img} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                      <img
                        src={img}
                        alt={`${project.title} - Photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Un projet similaire en tête ?</h3>
              <p className="text-lg mb-8 text-blue-100">Contactez-nous pour discuter de votre projet de rénovation</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 px-8 py-6 text-lg rounded-full transition-all duration-300">
                    Voir tous nos projets
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

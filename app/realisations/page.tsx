"use client"

import { Header } from "@/components/header"
import { ModernFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Helper function to generate slugs
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Trim hyphens from start
    .replace(/-+$/, '') // Trim hyphens from end
}

export default function RealisationsPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [headerVisible, setHeaderVisible] = useState(false)

  const projects = [
    {
      title: "Rénovation Appartement Haussmannien",
      location: "Paris 16ème",
      type: "Rénovation Complète",
      duration: "3 mois",
      image: "/haussmann-apartment-renovation-paris-luxury-interi.jpg",
      description: "Rénovation complète d'un appartement de 120m² avec conservation des éléments d'époque.",
      slug: generateSlug("Renovation Appartement Haussmannien"),
    },
    {
      title: "Maison Contemporaine",
      location: "Boulogne-Billancourt",
      type: "Rénovation Énergétique",
      duration: "2 mois",
      image: "/modern-house-energy-renovation.jpg",
      description: "Amélioration des performances énergétiques avec isolation et nouveau système de chauffage.",
      slug: generateSlug("Maison Contemporaine"),
    },
    {
      title: "Loft Industriel",
      location: "Issy-les-Moulineaux",
      type: "Aménagement",
      duration: "4 mois",
      image: "/industrial-loft-renovation.jpg",
      description: "Transformation d'un ancien atelier en loft moderne de 200m².",
      slug: generateSlug("Loft Industriel"),
    },
    {
      title: "Villa Familiale",
      location: "Sèvres",
      type: "Extension",
      duration: "5 mois",
      image: "/family-house-extension-renovation.jpg",
      description: "Extension et rénovation d'une villa avec création d'une suite parentale.",
      slug: generateSlug("Villa Familiale"),
    },
    {
      title: "Bureaux d'Entreprise",
      location: "Neuilly-sur-Seine",
      type: "Aménagement Professionnel",
      duration: "2 mois",
      image: "/modern-office-renovation.jpg",
      description: "Aménagement de bureaux modernes avec espaces collaboratifs.",
      slug: generateSlug("Bureaux d'Entreprise"),
    },
    {
      title: "Duplex Moderne",
      location: "Levallois-Perret",
      type: "Rénovation Complète",
      duration: "3 mois",
      image: "/modern-duplex-apartment-renovation.jpg",
      description: "Rénovation totale d'un duplex avec optimisation des espaces.",
      slug: generateSlug("Duplex Moderne"),
    },
  ]

  // Initialize visibleItems based on the number of projects
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(projects.length).fill(true))

  useEffect(() => {
    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    // Items observers
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      headerObserver.disconnect()
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" >
 
      <main>
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div
              ref={headerRef}
              className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-white">Nos Réalisations</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-white">
                Découvrez quelques-uns de nos projets récents qui témoignent de notre savoir-faire et de notre
                engagement qualité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link href={`/realisations/${project.slug}`} key={index}>
                  <Card
                    ref={(el) => { itemRefs.current[index] = el; }}
                    className={`overflow-hidden hover:shadow-lg transition-all duration-700 hover:scale-105 ${
                      visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary hover:text-white transition-colors duration-300"
                          >
                            {project.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{project.duration}</span>
                        </div>
                        <h3 className="text-xl font-semibold hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.location}</p>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Voir plus de réalisations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    
    </div>
  )
}

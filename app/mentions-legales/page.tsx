import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                Informations légales
              </Badge>
              <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Identification de l'entreprise</h2>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p>
                      <strong>Raison sociale :</strong> Flash Services 78
                    </p>
                    <p>
                      <strong>Forme juridique :</strong> Entreprise individuelle
                    </p>
                    <p>
                      <strong>Directeur général :</strong> Mkhinini Souheil
                    </p>
                    <p>
                      <strong>Adresse :</strong> 81 Rue de Silly, 92100 Boulogne-Billancourt
                    </p>
                    <p>
                      <strong>Téléphone :</strong> 06.10.17.11.05
                    </p>
                    <p>
                      <strong>Email :</strong> sfs.78@outlook.fr
                    </p>
                    <p>
                      <strong>Site web :</strong> www.flashservices78.fr
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Activité</h2>
                  <p>Flash Services 78 est spécialisée dans la rénovation tous corps d'état, incluant :</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Travaux d'isolation thermique et phonique</li>
                    <li>Plomberie et chauffage</li>
                    <li>Électricité générale</li>
                    <li>Peinture et revêtements</li>
                    <li>Carrelage et sols</li>
                    <li>Menuiserie</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Assurances</h2>
                  <p>
                    L'entreprise est couverte par une assurance responsabilité civile professionnelle et une assurance
                    décennale.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Hébergement du site</h2>
                  <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
                  <p>
                    L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de Flash
                    Services 78, sauf mention contraire. Toute reproduction, même partielle, est interdite sans
                    autorisation préalable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Protection des données personnelles</h2>
                  <p>
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des
                    données vous concernant. Pour exercer ces droits, contactez-nous à l'adresse : sfs.78@outlook.fr
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                  <p>
                    Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de
                    tracking ou publicitaire n'est utilisé.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

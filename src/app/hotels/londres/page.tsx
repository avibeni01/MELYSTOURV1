// src/app/hotels/londres/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe Londres 2025 : Savoy Claridges Connaught Ritz',
  description: 'Reservez les meilleurs hotels de luxe a Londres : The Savoy Tamise, Claridges Mayfair Art Deco, Connaught 2 etoiles Michelin, Ritz afternoon tea. 5 etoiles, elegance britannique, service majordome.',
  canonical: '/hotels/londres',
  keywords: [
    'hotel londres',
    'hotel luxe londres',
    'the savoy london',
    'claridges london',
    'the connaught',
    'ritz london',
    'hotel 5 etoiles londres',
    'hotel mayfair',
    'palace londres',
    'afternoon tea londres',
    'hotel tamise',
    'reservation hotel londres'
  ]
})

export default function LondresHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Londres', url: '/hotels/londres' },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les meilleurs hotels de luxe a Londres ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs palaces londoniens sont The Savoy sur la Tamise (palace historique Art Deco, American Bar legendaire), Claridges a Mayfair (Art Deco iconique, afternoon tea), The Connaught (restaurant Helene Darroze 2 etoiles Michelin, spa Aman exclusif), et Ritz London (afternoon tea dans Palm Court).'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel hotel londonien offre le meilleur afternoon tea ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le Ritz London offre l\'afternoon tea le plus celebre dans le Palm Court avec pianiste live. Claridges propose afternoon tea Art Deco elegant. The Savoy offre Thames Foyer afternoon tea avec vue jardin. Reservez 2-3 mois a l\'avance (tres demande).'
        }
      },
      {
        '@type': 'Question',
        name: 'Combien coute un hotel 5 etoiles a Londres ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les hotels 5 etoiles a Londres coutent entre 600€ et 1500€ par nuit. The Savoy 700-1400€, Claridges 800-1500€, The Connaught 700-1300€, Ritz London 700-1200€. Londres est une des capitales les plus cheres d\'Europe. Reservez 3 mois a l\'avance pour meilleurs tarifs.'
        }
      }
    ]
  }

  const hotels = [
    {
      id: 1,
      name: "The Savoy",
      stars: 5,
      description: "Palace légendaire sur la Tamise, Art Déco restauré, American Bar historique et piscine iconique.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Spa", "Piscine art déco", "American Bar", "Restaurants", "Butler"],
      highlights: [
        "Piscine art déco historique unique",
        "American Bar légendaire depuis 1893",
        "Emplacement privilégié sur la Tamise"
      ],
      location: "Strand, Covent Garden",
      priceRange: "700-1400€"
    },
    {
      id: 2,
      name: "Claridge's",
      stars: 5,
      description: "Icône Art Déco de Mayfair, élégance britannique légendaire, afternoon tea dans Foyer.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Spa", "Restaurant étoilé", "Bar", "Service majordome", "Conciergerie"],
      highlights: [
        "Art Déco emblématique années 1920-30",
        "Afternoon tea légendaire",
        "Quartier Mayfair prestigieux"
      ],
      location: "Mayfair, Brook Street",
      priceRange: "800-1500€"
    },
    {
      id: 3,
      name: "The Connaught",
      stars: 5,
      description: "Palace discret de Mayfair, restaurant Hélène Darroze 2 étoiles Michelin, spa Aman exclusif.",
      imageUrl: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800",
      amenities: ["Spa Aman", "2 étoiles Michelin", "Bar Coburg", "Butler", "Conciergerie"],
      highlights: [
        "Restaurant Hélène Darroze 2 étoiles Michelin",
        "Spa Aman exclusif (seul à Londres)",
        "Élégance discrète britannique"
      ],
      location: "Mayfair, Carlos Place",
      priceRange: "700-1300€"
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-blue-800"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Palaces de Luxe à <span className="text-yellow-300">Londres</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              The Savoy • Claridge's • The Connaught • Élégance britannique
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire-reservation" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <HotelBookingForm />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Londres : Capitale des Palaces Britanniques
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                <strong>Londres</strong>, ville royale et élégante, abrite des <strong>palaces historiques</strong>
                incarnant le <strong>luxe britannique</strong>. <strong>The Savoy</strong>, palace Art Déco sur la
                <strong> Tamise</strong>, éblouit avec son <strong>American Bar</strong> légendaire (cocktails depuis 1893)
                et sa <strong>piscine art déco historique</strong> restaurée. Son emplacement privilégié près de
                <strong> Covent Garden</strong> et <strong>West End</strong> en fait un incontournable.
              </p>

              <p className="mb-6">
                <strong>Claridge's</strong>, icône <strong>Art Déco</strong> de <strong>Mayfair</strong>, symbolise
                l'élégance britannique depuis 1812. Son <strong>afternoon tea</strong> dans le Foyer est une institution,
                son design années 1920-30 est classé. <strong>The Connaught</strong>, palace discret du même quartier,
                abrite le restaurant <strong>Hélène Darroze 2 étoiles Michelin</strong> et le seul
                <strong> spa Aman de Londres</strong>.
              </p>

              <p className="mb-6">
                Ces palaces combinent <strong>service majordome</strong>, <strong>afternoon tea cérémonial</strong>,
                <strong> restaurants étoilés</strong>, et proximité <strong>Buckingham Palace</strong>,
                <strong> Hyde Park</strong>, <strong>musées</strong> (British Museum, National Gallery),
                et <strong>shopping luxe</strong> (Bond Street, Harrods).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Palaces Londoniens Sélectionnés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={hotel.imageUrl}
                    alt={`Palace ${hotel.name} Londres - Luxe ${hotel.stars} etoiles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center bg-red-700 px-3 py-1 rounded-full">
                    <Star className="text-white mr-1 fill-white" size={16} />
                    <span className="font-bold text-white">{hotel.stars} ★</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 flex items-center text-sm mb-4">
                    <MapPin size={16} className="mr-2 text-red-700" />
                    {hotel.location}
                  </p>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {hotel.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Points forts :</h4>
                    <ul className="space-y-1">
                      {hotel.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <Sparkles size={14} className="text-red-700 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xl font-bold text-red-700 mb-4">
                    À partir de {hotel.priceRange}/nuit
                  </p>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg transition-colors font-medium"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Quartiers Prestigieux de Londres
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">👑 Mayfair - Luxe Absolu</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier le plus chic de Londres. Claridge's et The Connaught y sont situés.
                  <strong> Bond Street</strong> (shopping luxe), <strong>Hyde Park</strong> adjacent,
                  <strong> restaurants étoilés Michelin</strong>. Calme, résidentiel, élégance britannique.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🎭 Covent Garden & West End</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier des <strong>théâtres</strong> et <strong>Opéra Royal</strong>. The Savoy proche.
                  Shopping (Apple Market, boutiques créateurs), restaurants, vie culturelle intense.
                  <strong> Leicester Square</strong>, <strong>British Museum</strong> proximité.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏰 Belgravia & Knightsbridge</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier aristocratique près <strong>Buckingham Palace</strong>. <strong>Harrods</strong>,
                  <strong> Harvey Nichols</strong> (shopping luxe). Architecture georgienne élégante,
                  ambiance royale, calme résidentiel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Questions Fréquentes - Hôtels Londres
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                    {faq.name}
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vivez l'Élégance Britannique à Londres
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Palaces historiques • Afternoon tea • Service majordome • Restaurants étoilés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulaire-reservation"
              className="inline-block px-8 py-4 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Demander un devis
            </a>
            <Link
              href="/hotels"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Voir tous nos hôtels
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

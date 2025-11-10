// src/app/hotels/bangkok/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe Bangkok 2025 : Mandarin Oriental Peninsula Siam',
  description: 'Reservez les meilleurs hotels de luxe a Bangkok : Mandarin Oriental fleuve Chao Phraya, Peninsula spa, The Siam Art Deco. 5 etoiles, spas primes, temples, gastronomie thailandaise.',
  canonical: '/hotels/bangkok',
  keywords: [
    'hotel bangkok',
    'hotel luxe bangkok',
    'mandarin oriental bangkok',
    'peninsula bangkok',
    'the siam bangkok',
    'hotel 5 etoiles bangkok',
    'hotel fleuve chao phraya',
    'spa bangkok',
    'reservation hotel bangkok',
    'hotel silom bangkok',
    'hotel sukhumvit',
    'hotel riverside bangkok'
  ]
})

export default function BangkokHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Bangkok', url: '/hotels/bangkok' },
  ])

  // Review Schema
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Elynor Tours - Hotels Bangkok',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      reviewCount: '127'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Benjamin'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Chaque ete nous louons notre voiture avec l\'agence Elynor Tours. C\'est simple, rapide et a prix defiant toute concurrence.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Super !!! J\'ai fait appel a leurs services pour louer une voiture lors de ma derniere visite en Israel. Ce fut simple et agreable.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Patrice'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Top vraiment elle gere tout et toujours au meilleur prix !'
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les meilleurs hotels de luxe a Bangkok ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs hotels 5 etoiles a Bangkok sont le Mandarin Oriental sur le fleuve Chao Phraya (legende hoteliere depuis 1876), The Siam boutique hotel Art Deco avec collection d\'art asiatique, et le Peninsula Bangkok avec spa prime et restaurants etoiles. Tous offrent spas de classe mondiale et service thailandais exceptionnel.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel quartier choisir pour loger a Bangkok ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs quartiers luxe a Bangkok sont Riverside (Mandarin Oriental, Peninsula, vue fleuve Chao Phraya), Silom (business, vie nocturne, sky bars), et Sukhumvit (shopping, restaurants internationaux, BTS Skytrain). Riverside offre calme et charme, Silom dynamisme, Sukhumvit modernite.'
        }
      },
      {
        '@type': 'Question',
        name: 'Combien coute un hotel 5 etoiles a Bangkok ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les hotels 5 etoiles a Bangkok coutent entre 200€ et 800€ par nuit. Le Mandarin Oriental 400-800€, The Siam 500-900€ (boutique exclusif), Peninsula 300-600€, Four Seasons 350-700€. Bangkok offre excellent rapport qualite-prix comparé a autres capitales asiatiques. Reservez 2 mois a l\'avance.'
        }
      }
    ]
  }

  const hotels = [
    {
      id: 1,
      name: "Mandarin Oriental Bangkok",
      stars: 5,
      description: "Légende hôtelière sur le fleuve Chao Phraya depuis 1876. Écrivains célèbres (Somerset Maugham, Joseph Conrad) y séjournaient.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Spa primé", "Restaurants étoilés", "Suites coloniales", "Boat shuttle", "Butler"],
      highlights: [
        "Histoire littéraire légendaire depuis 1876",
        "Spa primé de renommée mondiale",
        "Suites des auteurs (Somerset Maugham Wing)"
      ],
      location: "Riverside, Chao Phraya",
      priceRange: "400-800€"
    },
    {
      id: 2,
      name: "The Siam Hotel",
      stars: 5,
      description: "Boutique hotel Art Déco au bord du fleuve, collection d'antiquités asiatiques et école de Muay Thai privée.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Spa", "Muay Thai", "Restaurant", "Cinéma privé", "Yacht"],
      highlights: [
        "Design Art Déco unique en Thaïlande",
        "Collection d'art asiatique exceptionnelle",
        "École de Muay Thai privée avec champion"
      ],
      location: "Riverside, Dusit",
      priceRange: "500-900€"
    },
    {
      id: 3,
      name: "The Peninsula Bangkok",
      stars: 5,
      description: "Luxe contemporain avec spa primé, restaurants étoilés et vue panoramique sur Chao Phraya.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Spa", "Piscines", "3 restaurants", "Boat shuttle", "Héliport"],
      highlights: [
        "Spa The Peninsula primé internationalement",
        "Vue panoramique fleuve Chao Phraya",
        "Service Peninsula légendaire"
      ],
      location: "Riverside, Khlong Toei",
      priceRange: "300-600€"
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={reviewSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Hôtels de Luxe à <span className="text-yellow-300">Bangkok</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Mandarin Oriental • Peninsula • The Siam • Fleuve Chao Phraya
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
              Bangkok : Capitale Asiatique du Luxe Hôtelier
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                <strong>Bangkok</strong>, mégalopole vibrante de Thaïlande, abrite des <strong>hôtels de luxe légendaires</strong>
                sur le <strong>fleuve Chao Phraya</strong>. Le <strong>Mandarin Oriental Bangkok</strong>, institution depuis 1876,
                accueillait les grands écrivains (Somerset Maugham, Joseph Conrad, Graham Greene) dans ses
                <strong> suites coloniales</strong>. Son <strong>spa primé mondialement</strong> et ses restaurants étoilés
                en font une référence absolue.
              </p>

              <p className="mb-6">
                <strong>The Siam Hotel</strong>, boutique hotel <strong>Art Déco</strong> unique, combine collection
                d'<strong>antiquités asiatiques</strong>, <strong>école de Muay Thai privée</strong> avec champion,
                et design raffiné. Le <strong>Peninsula Bangkok</strong> offre <strong>spa de classe mondiale</strong>,
                restaurants étoilés et <strong>boat shuttle</strong> pour traverser le fleuve.
              </p>

              <p className="mb-6">
                Ces palaces combinent <strong>spas thaïlandais authentiques</strong>, <strong>temples dorés</strong>
                (Grand Palais, Wat Pho, Wat Arun), <strong>marchés flottants</strong>, et <strong>gastronomie street food</strong>
                réputée. Bangkok offre un <strong>rapport qualité-prix exceptionnel</strong> comparé aux autres capitales
                (Tokyo, Paris, Dubai).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Hôtels 5 Étoiles Sélectionnés à Bangkok
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={hotel.imageUrl}
                    alt={`Hotel ${hotel.name} Bangkok - Luxe ${hotel.stars} etoiles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center bg-orange-400 px-3 py-1 rounded-full">
                    <Star className="text-white mr-1 fill-white" size={16} />
                    <span className="font-bold text-white">{hotel.stars} ★</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 flex items-center text-sm mb-4">
                    <MapPin size={16} className="mr-2 text-orange-500" />
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
                          <Sparkles size={14} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xl font-bold text-orange-600 mb-4">
                    À partir de {hotel.priceRange}/nuit
                  </p>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg transition-colors font-medium"
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
              Où Loger à Bangkok : Guide des Quartiers
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏞️ Riverside - Fleuve Chao Phraya</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier romantique le long du <strong>fleuve Chao Phraya</strong>. Mandarin Oriental, Peninsula,
                  et Shangri-La y sont situés. <strong>Boat shuttles</strong> pour visiter temples, vie locale sur l'eau.
                  Calme relatif malgré centre-ville. Vue couchers de soleil spectaculaires.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏢 Silom - Business & Sky Bars</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier d'affaires avec <strong>gratte-ciel</strong> et <strong>sky bars panoramiques</strong>
                  (Lebua, Sky Bar). Vie nocturne animée, <strong>marchés de nuit</strong> (Patpong), restaurants.
                  Métro BTS et MRT. Idéal business et nightlife.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🛍️ Sukhumvit - Shopping Moderne</h3>
                <p className="text-gray-700 leading-relaxed">
                  Artère moderne avec <strong>centres commerciaux luxe</strong> (Emporium, EmQuartier),
                  restaurants internationaux, vie nocturne. <strong>BTS Skytrain</strong> accès facile.
                  Quartier expatriés, cosmopolite, moderne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Nos Clients Témoignent
          </h2>
          <p className="text-center text-gray-600 mb-12">⭐⭐⭐⭐⭐ 5/5 - Basé sur 127+ avis Google</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold mr-4">
                  BL
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Benjamin</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Chaque été nous louons notre voiture avec l'agence Elynor Tours. C'est simple,
                rapide et à prix défiant toute concurrence."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold mr-4">
                  MD
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Super !!! J'ai fait appel à leurs services pour louer une voiture lors de ma
                dernière visite en Israel. Ce fut simple et agréable."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold mr-4">
                  PL
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Patrice</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Top vraiment elle gère tout et toujours au meilleur prix !"
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://g.co/kgs/X2iiAx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Voir tous nos avis Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Questions Fréquentes - Hôtels Bangkok
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Découvrez le Luxe Thaïlandais à Bangkok
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Spas authentiques • Temples dorés • Gastronomie street food • Rapport qualité-prix exceptionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulaire-reservation"
              className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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

// src/app/hotels/istanbul/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe Istanbul 2025 : Four Seasons Ciragan Palace Raffles',
  description: 'Reservez les meilleurs hotels de luxe a Istanbul : Four Seasons Sultanahmet entre Sainte-Sophie et Mosquee Bleue, Ciragan Palace Kempinski ancien palais ottoman Bosphore, Raffles Istanbul spa 3000m2. 5 etoiles, hammam, vue Bosphore.',
  canonical: '/hotels/istanbul',
  keywords: ['hotel istanbul', 'hotel luxe istanbul', 'four seasons sultanahmet', 'ciragan palace', 'raffles istanbul', 'hotel bosphore', 'palace ottoman istanbul']
})

export default function IstanbulHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Istanbul', url: '/hotels/istanbul' },
  ])

  // Review Schema
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Elynor Tours - Hotels Istanbul',
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

  const hotels = [
    { id: 1, name: "Four Seasons Sultanahmet", stars: 5, description: "Prison ottomane transformée en palace, entre Sainte-Sophie et Mosquée Bleue.", location: "Sultanahmet, Vieille Ville", priceRange: "500-900€" },
    { id: 2, name: "Çırağan Palace Kempinski", stars: 5, description: "Palace impérial ottoman sur le Bosphore, luxe oriental absolu.", location: "Bosphore, Beşiktaş", priceRange: "600-1200€" },
    { id: 3, name: "Raffles Istanbul", stars: 5, description: "Gratte-ciel luxueux avec vue Bosphore, spa de 3000m².", location: "Beşiktaş, Bosphore", priceRange: "450-800€" }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={reviewSchema} />
      <section className="relative h-[60vh] bg-gradient-to-r from-red-600 to-orange-600">
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hôtels de Luxe à <span className="text-yellow-300">Istanbul</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Four Seasons • Çırağan Palace • Raffles • Bosphore & Histoire
            </p>
          </div>
        </div>
      </section>
      <section id="formulaire-reservation" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4"><HotelBookingForm /></div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Istanbul : Pont Entre Orient et Occident</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6"><strong>Istanbul</strong>, ville entre deux continents, abrite des <strong>palaces ottomans spectaculaires</strong>. Le <strong>Four Seasons Sultanahmet</strong>, ancienne prison néo-classique transformée, se trouve entre <strong>Sainte-Sophie</strong> et <strong>Mosquée Bleue</strong>. Le <strong>Çırağan Palace Kempinski</strong>, ancien <strong>palais impérial ottoman</strong> sur le Bosphore, offre piscine infinity vue mer et service sultanesque.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nos Hôtels Sélectionnés à Istanbul</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 text-sm mb-4"><MapPin size={16} className="inline mr-2 text-red-600" />{hotel.location}</p>
                  <p className="text-gray-700 mb-4 text-sm">{hotel.description}</p>
                  <p className="text-xl font-bold text-red-600 mb-4">À partir de {hotel.priceRange}/nuit</p>
                  <Link href="/contact" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-medium">Demander un devis</Link>
                </div>
              </div>
            ))}
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

      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Découvrez Istanbul : Luxe Ottoman</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Palaces ottomans • Hammam • Vue Bosphore • Histoire millénaire</p>
          <a href="#formulaire-reservation" className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">Demander un devis</a>
        </div>
      </section>
    </>
  )
}

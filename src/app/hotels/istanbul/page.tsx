// src/app/hotels/istanbul/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin } from 'lucide-react'
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

  const hotels = [
    { id: 1, name: "Four Seasons Sultanahmet", stars: 5, description: "Prison ottomane transformée en palace, entre Sainte-Sophie et Mosquée Bleue.", location: "Sultanahmet, Vieille Ville", priceRange: "500-900€" },
    { id: 2, name: "Çırağan Palace Kempinski", stars: 5, description: "Palace impérial ottoman sur le Bosphore, luxe oriental absolu.", location: "Bosphore, Beşiktaş", priceRange: "600-1200€" },
    { id: 3, name: "Raffles Istanbul", stars: 5, description: "Gratte-ciel luxueux avec vue Bosphore, spa de 3000m².", location: "Beşiktaş, Bosphore", priceRange: "450-800€" }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
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

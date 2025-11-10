// src/app/hotels/new-york/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe New York 2025 : Plaza St Regis Peninsula Manhattan',
  description: 'Reservez les meilleurs hotels de luxe a New York : The Plaza 5th Avenue face Central Park, St Regis butler legendaire, Peninsula Manhattan rooftop bar. 5 etoiles, vue Empire State, service premium NYC.',
  canonical: '/hotels/new-york',
  keywords: ['hotel new york', 'hotel luxe new york', 'the plaza new york', 'st regis new york', 'peninsula new york', 'hotel 5th avenue', 'hotel central park', 'manhattan luxury hotel']
})

export default function NewYorkHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'New York', url: '/hotels/new-york' },
  ])

  const hotels = [
    { id: 1, name: "The Plaza Hotel", stars: 5, description: "Hôtel légendaire sur la 5ème Avenue, symbole du luxe new-yorkais depuis 1907.", location: "5th Avenue, Central Park South", priceRange: "800-1800€" },
    { id: 2, name: "The St. Regis New York", stars: 5, description: "Palace emblématique 5ème Avenue, luxe absolu et service butler personnalisé.", location: "5th Avenue, Midtown", priceRange: "900-2000€" },
    { id: 3, name: "The Peninsula New York", stars: 5, description: "Luxe asiatique raffiné au cœur de Manhattan, rooftop bar panoramique.", location: "5th Avenue, Midtown", priceRange: "700-1500€" }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-gray-800">
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hôtels de Luxe à <span className="text-yellow-300">New York</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              The Plaza • St. Regis • Peninsula • Luxe Manhattan
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
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">New York : Capitale Mondiale du Luxe</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6"><strong>New York</strong>, ville qui ne dort jamais, abrite des <strong>palaces iconiques</strong> sur la <strong>5ème Avenue</strong>. <strong>The Plaza Hotel</strong>, légende depuis 1907 face à <strong>Central Park</strong>, incarne le glamour new-yorkais. Le <strong>St. Regis</strong> offre <strong>service butler 24/7</strong> et <strong>Bar King Cole</strong> historique. Le <strong>Peninsula New York</strong> combine luxe asiatique et <strong>rooftop bar</strong> avec vue 360° sur Manhattan.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nos Hôtels Sélectionnés à New York</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 text-sm mb-4"><MapPin size={16} className="inline mr-2 text-blue-900" />{hotel.location}</p>
                  <p className="text-gray-700 mb-4 text-sm">{hotel.description}</p>
                  <p className="text-xl font-bold text-blue-900 mb-4">À partir de {hotel.priceRange}/nuit</p>
                  <Link href="/contact" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-lg transition-colors font-medium">Demander un devis</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vivez le Rêve New-Yorkais</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">5th Avenue • Central Park • Empire State • Broadway • Service butler</p>
          <a href="#formulaire-reservation" className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">Demander un devis</a>
        </div>
      </section>
    </>
  )
}

// src/app/hotels/netanya/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hotel, MapPin, Star, Waves, Check, Phone } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildHotelSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Netanya Front de Mer : Reservation Plage 2025',
  description: 'Reservez hotel Netanya au meilleur prix : front de mer Mediterranee, plages propres, alternative economique Tel Aviv. Hotels 3-4*, vue mer, parking. 30min Tel Aviv.',
  canonical: '/hotels/netanya',
  keywords: ['hotel netanya', 'hotel netanya front de mer', 'hotel netanya plage', 'hotel netanya israel', 'hotel netanya pas cher'],
  images: [{ url: '/images/og/hotels-netanya.jpg', width: 1200, height: 630, alt: 'Hotels Netanya Israel - Elynor Tours' }],
  alternates: { languages: buildI18nAlternates('/hotels/netanya') }
})

export default function NetanyaHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Netanya', url: '/hotels/netanya' },
  ])

  const hotelSchema = buildHotelSchema({
    name: 'Hotels Netanya',
    description: 'Hotels 3-4* Netanya front de mer Mediterranee',
    url: '/hotels/netanya',
    image: [],
    priceRange: '€€',
    address: { addressLocality: 'Netanya', addressCountry: 'IL' },
    starRating: 4,
    amenities: ['Vue mer', 'Plage', 'Parking', 'Wifi', 'Restaurant'],
    checkInTime: '15:00',
    checkOutTime: '11:00'
  })

  const hotels = [
    {name: "The Seasons Hotel Netanya", rating: "4.5/5", price: "180€", features: ["Front de mer premium, vue panoramique Mediterranee", "Chambres renovees modernes, balcons vue mer majoritaires", "Restaurant excellent, piscine rooftop, parking prive securise"], tags: ["Vue mer", "Rooftop piscine", "Restaurant", "Parking"]},
    {name: "Margoa Hotel Netanya", rating: "4.0/5", price: "120€", features: ["Centre-ville, 5min plages a pied, bon rapport qualite-prix", "Chambres propres confortables, wifi gratuit, climatisation", "Petit-dejeuner buffet inclus, personnel francophone disponible"], tags: ["Budget", "Central", "Petit-dej inclus", "Francophone"]},
    {name: "Island Hotel Netanya", rating: "4.0/5", price: "140€", features: ["Face plage, acces direct promenade falaises panoramique", "Chambres vue mer disponibles, moderne et propre", "Restaurant kasher, parking, proche centre commercial"], tags: ["Plage", "Vue mer", "Kasher", "Parking"]},
    {name: "Residence Hotel Netanya", rating: "4.0/5", price: "130€", features: ["Residence appart-hotel, cuisine equipee complete, familial", "Ideal sejours longs, balcons spacieux, lave-linge", "Proche plages et restaurants, quartier calme, economique"], tags: ["Appart-hotel", "Cuisine", "Famille", "Calme"]},
    {name: "Blue Bay Hotel Netanya", rating: "3.5/5", price: "90€", features: ["Budget tres economique, propre et fonctionnel", "Proche centre-ville et plages (10min marche), wifi gratuit", "Chambres simples climatisees, petit-dejeuner disponible"], tags: ["Economique", "Propre", "Centre", "Wifi"]},
    {name: "Galil Hotel Netanya", rating: "4.0/5", price: "110€", features: ["Hotel familial, atmosphere chaleureuse, excellent accueil", "Proche plages et marche local, parking gratuit", "Chambres renovees 2023, petit-dejeuner buffet, calme"], tags: ["Familial", "Parking gratuit", "Accueil", "Petit-dej"]}
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelSchema} />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] bg-gradient-to-r from-blue-500 to-cyan-500">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hotels a <span className="text-cyan-300">Netanya</span></h1>
              <p className="text-xl md:text-2xl text-white mb-8">Alternative economique Tel Aviv • Plages propres • 30min Tel Aviv</p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{name:'Hotels',url:'/hotels'},{name:'Netanya',url:'/hotels/netanya'}]} />

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Netanya : Alternative Economique a Tel Aviv</h2>
              <p className="text-lg text-gray-700 mb-4">Ville balneaire familiale sur la cote mediterraneenne, plages propres et calmes, celebre promenade des falaises panoramique. 30% moins cher que Tel Aviv, a seulement 30min en voiture du centre de Tel Aviv.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Waves className="mx-auto mb-4 text-blue-600" size={48} />
                  <h3 className="font-bold text-lg mb-2">Plages Familiales</h3>
                  <p className="text-sm text-gray-600">4 plages propres surveillees : Sironit, Poleg, Herzl, Kiryat Sanz</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
                  <h3 className="font-bold text-lg mb-2">Promenade Falaises</h3>
                  <p className="text-sm text-gray-600">5km promenade panoramique vue mer Mediterranee exceptionnelle</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Star className="mx-auto mb-4 text-blue-600" size={48} />
                  <h3 className="font-bold text-lg mb-2">Prix Attractifs</h3>
                  <p className="text-sm text-gray-600">30% moins cher que Tel Aviv, meme qualite hoteliere</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prix */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Prix Moyens Hotels Netanya (2025)</h2>
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <tr><th className="px-6 py-4 text-left">Categorie</th><th className="px-6 py-4 text-left">Prix/nuit</th><th className="px-6 py-4 text-left">Exemple</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-6 py-4 font-semibold">Confort 4*</td><td className="px-6 py-4 text-blue-600 font-bold">120-200€</td><td className="px-6 py-4 text-gray-600">Front de mer, vue mer, parking prive</td></tr>
                  <tr><td className="px-6 py-4 font-semibold">Standard 3*</td><td className="px-6 py-4 text-blue-600 font-bold">70-120€</td><td className="px-6 py-4 text-gray-600">Central, propre, services de base</td></tr>
                </tbody>
              </table>
              <p className="text-center mt-6 text-gray-700"><span className="font-semibold text-blue-600">Tarifs Elynor Tours:</span> Reductions exclusives 10-20% selon saison et duree sejour.</p>
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Nos Meilleurs Hotels Netanya</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((h,i)=>(
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-100">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{h.name}</h3>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">{h.rating}</span></div>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de {h.price}/nuit</p>
                      <ul className="space-y-2 mb-4">
                        {h.features.map((f,j)=><li key={j} className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {h.tags.map((t,j)=><span key={j} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{t}</span>)}
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Netanya ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><Star className="text-blue-500" size={32} /></div>
                  <h3 className="text-xl font-bold mb-2">Economique</h3>
                  <p className="text-gray-600">30% moins cher que Tel Aviv pour la meme qualite hoteliere. Ideal budget.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4"><Waves className="text-cyan-500" size={32} /></div>
                  <h3 className="text-xl font-bold mb-2">Plages Calmes</h3>
                  <p className="text-gray-600">Atmosphere familiale, plages propres moins bondees qu'a Tel Aviv.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="text-green-500" size={32} /></div>
                  <h3 className="text-xl font-bold mb-2">Bien Situe</h3>
                  <p className="text-gray-600">30min Tel Aviv, 45min Haifa, 1h Jerusalem. Base ideale circuits Israel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maillage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Completez votre sejour</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/hotels/tel-aviv" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"><h3 className="text-xl font-semibold mb-2 text-blue-600">Hotels Tel Aviv</h3><p className="text-gray-600 text-sm">Combinez Netanya + Tel Aviv (30min)</p></Link>
                <Link href="/plages/mediterranee" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"><h3 className="text-xl font-semibold mb-2 text-cyan-600">Plages Netanya</h3><p className="text-gray-600 text-sm">Guide 4 plages familiales propres</p></Link>
                <Link href="/location-voiture" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"><h3 className="text-xl font-semibold mb-2 text-orange-600">Location Voiture</h3><p className="text-gray-600 text-sm">Explorez la cote nord Israel</p></Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reservez votre hotel Netanya</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Economique • Plages propres • Calme familial • 30min Tel Aviv</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Demander un devis<Phone size={20} className="ml-2" /></Link>
              <Link href="/hotels" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Autres destinations</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

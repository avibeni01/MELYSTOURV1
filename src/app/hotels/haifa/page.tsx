// src/app/hotels/haifa/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hotel, MapPin, Star, Palmtree, Check, Phone } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildHotelSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Haifa Jardins Bahai : Reservation UNESCO 2025',
  description: 'Reservez hotel Haifa au meilleur prix : vue Jardins Bahai UNESCO, Mont Carmel, Colonie allemande. Hotels 3-5*, panorama exceptionnel, port croisiere. Business et tourisme.',
  canonical: '/hotels/haifa',
  keywords: ['hotel haifa', 'hotel haifa jardins bahai', 'hotel mont carmel haifa', 'hotel haifa colonie allemande', 'hotel haifa israel'],
  images: [{ url: '/images/og/hotels-haifa.jpg', width: 1200, height: 630, alt: 'Hotels Haifa Jardins Bahai - Elynor Tours' }],
  alternates: { languages: buildI18nAlternates('/hotels/haifa') }
})

export default function HaifaHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Haifa', url: '/hotels/haifa' },
  ])

  const hotelSchema = buildHotelSchema({
    name: 'Hotels Haifa',
    description: 'Hotels 3-5* Haifa vue Jardins Bahai UNESCO et Mont Carmel',
    url: '/hotels/haifa',
    image: [],
    priceRange: '€€-€€€',
    address: { addressLocality: 'Haifa', addressCountry: 'IL' },
    starRating: 4,
    amenities: ['Vue panoramique', 'Parking', 'Wifi', 'Restaurant', 'Business center'],
    checkInTime: '15:00',
    checkOutTime: '11:00'
  })

  const hotels = [
    {name: "Colony Hotel Haifa", rating: "4.5/5", price: "190€", features: ["Boutique hotel historique Colonie allemande Templers", "Architecture unique 19e siecle, charme authentique preserved", "Restaurant excellent, terrasse, parking, proche port"], tags: ["Boutique", "Historique", "Colonie allemande", "Charme"]},
    {name: "Crowne Plaza Haifa", rating: "4.0/5", price: "220€", features: ["Hotel business haut de gamme, vue mer panoramique", "Chambres modernes spacieuses, fitness complet, piscine", "Restaurant, business center, parking, proche technion"], tags: ["Business", "Vue mer", "Piscine", "Moderne"]},
    {name: "Dan Carmel Haifa", rating: "4.0/5", price: "200€", features: ["Mont Carmel sommet, vue panoramique exceptionnelle ville/mer", "Chaine Dan (qualite fiable), piscine exterieure, jardins", "Restaurant, spa, proche Jardins Bahai UNESCO (10min)"], tags: ["Vue panoramique", "Mont Carmel", "Piscine", "Jardins Bahai"]},
    {name: "Dan Panorama Haifa", rating: "4.0/5", price: "180€", features: ["Front de mer, vue baie Haifa, acces direct plage", "Chambres renovees, piscine, fitness, parking securise", "Restaurant kasher, proche port croisiere, bon rapport"], tags: ["Front de mer", "Plage", "Kasher", "Port proche"]},
    {name: "Villa Carmel Boutique Hotel", rating: "4.5/5", price: "150€", features: ["Boutique hotel intimiste Mont Carmel, atmosphere familiale", "Chambres design modernes, terrasse jardin zen calme", "Petit-dejeuner gastronomique, parking gratuit, excellent accueil"], tags: ["Boutique", "Design", "Calme", "Parking gratuit"]}
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelSchema} />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] bg-gradient-to-r from-green-600 to-teal-600">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hotels a <span className="text-teal-300">Haifa</span></h1>
              <p className="text-xl md:text-2xl text-white mb-8">Jardins Bahai UNESCO • Mont Carmel • Vue Panoramique • Port Croisiere</p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{name:'Hotels',url:'/hotels'},{name:'Haifa',url:'/hotels/haifa'}]} />

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Haifa : Ville des Jardins Bahai UNESCO</h2>
              <p className="text-lg text-gray-700 mb-4">Troisieme ville d'Israel, Haifa seduit par ses Jardins Bahai classes UNESCO, son Mont Carmel offrant des vues panoramiques exceptionnelles, et sa Colonie allemande historique (quartier Templers). Port de croisiere majeur Mediterranee.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <Palmtree className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="font-bold text-lg mb-2">Jardins Bahai UNESCO</h3>
                  <p className="text-sm text-gray-600">19 terrasses jardins suspendus, site religieux mondial bahai</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <MapPin className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="font-bold text-lg mb-2">Mont Carmel</h3>
                  <p className="text-sm text-gray-600">Vue panoramique 360° mer Mediterranee et ville etages</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Hotel className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="font-bold text-lg mb-2">Colonie Allemande</h3>
                  <p className="text-sm text-gray-600">Quartier historique Templers 19e, architecture unique, restaurants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prix */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Prix Moyens Hotels Haifa (2025)</h2>
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                  <tr><th className="px-6 py-4 text-left">Categorie</th><th className="px-6 py-4 text-left">Prix/nuit</th><th className="px-6 py-4 text-left">Exemple</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-6 py-4 font-semibold">Confort 4*</td><td className="px-6 py-4 text-green-600 font-bold">140-220€</td><td className="px-6 py-4 text-gray-600">Vue panoramique, business, parking</td></tr>
                  <tr><td className="px-6 py-4 font-semibold">Standard 3*</td><td className="px-6 py-4 text-green-600 font-bold">80-140€</td><td className="px-6 py-4 text-gray-600">Propre, central, services base</td></tr>
                </tbody>
              </table>
              <p className="text-center mt-6 text-gray-700"><span className="font-semibold text-green-600">Tarifs Elynor Tours:</span> Reductions exclusives 10-20% selon saison.</p>
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Nos Meilleurs Hotels Haifa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((h,i)=>(
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-100">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{h.name}</h3>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">{h.rating}</span></div>
                      </div>
                      <p className="text-2xl font-bold text-green-600 mb-4">A partir de {h.price}/nuit</p>
                      <ul className="space-y-2 mb-4">
                        {h.features.map((f,j)=><li key={j} className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {h.tags.map((t,j)=><span key={j} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{t}</span>)}
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sites */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Sites Touristiques Majeurs Haifa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="font-semibold text-xl mb-4 flex items-center"><Palmtree size={24} className="text-green-500 mr-3" />Jardins Bahai</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Site UNESCO mondial, 19 terrasses jardins suspendus spectaculaires</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Centre spirituel foi bahaie, tombeau Bab, architecture unique</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Entree gratuite, visites guidees anglais/hebreu disponibles</span></li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="font-semibold text-xl mb-4 flex items-center"><Hotel size={24} className="text-green-500 mr-3" />Colonie Allemande</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Quartier Templers historique 19e siecle, architecture preservee</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Restaurants excellents, cafes branches, galeries art</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Proche port croisiere, promenade Ben Gurion animee</span></li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="font-semibold text-xl mb-4 flex items-center"><MapPin size={24} className="text-green-500 mr-3" />Mont Carmel</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Sommet vue panoramique 360° exceptionnelle ville/mer</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Monastere Stella Maris, telepherique, parc national</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Randonnees nature, grottes Elijah prophete biblique</span></li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="font-semibold text-xl mb-4 flex items-center"><Star size={24} className="text-green-500 mr-3" />Autres Sites</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Musee national sciences technologie Madatech interactif</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Plages Haifa : Dado Beach, Quiet Beach, Bat Galim</span></li>
                    <li className="flex items-start"><Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Wadi Nisnas quartier arabe, marche local authentique</span></li>
                  </ul>
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
                <Link href="/hotels/tel-aviv" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"><h3 className="text-xl font-semibold mb-2 text-blue-600">Hotels Tel Aviv</h3><p className="text-gray-600 text-sm">Circuit Haifa + Tel Aviv (1h30)</p></Link>
                <Link href="/hotels/netanya" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"><h3 className="text-xl font-semibold mb-2 text-cyan-600">Hotels Netanya</h3><p className="text-gray-600 text-sm">Entre Haifa et Tel Aviv (30min)</p></Link>
                <Link href="/location-voiture" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"><h3 className="text-xl font-semibold mb-2 text-orange-600">Location Voiture</h3><p className="text-gray-600 text-sm">Explorez le nord Israel</p></Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reservez votre hotel Haifa</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Jardins Bahai UNESCO • Vue panoramique • Colonie allemande • Tarifs negocies</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Demander un devis<Phone size={20} className="ml-2" /></Link>
              <Link href="/hotels" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Autres destinations</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

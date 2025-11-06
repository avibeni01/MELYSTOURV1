// src/app/hotels/tel-aviv/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hotel, MapPin, Star, Wifi, Coffee, Waves, Check, Phone } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildHotelSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import HotelCard from '@/components/hotels/HotelCard'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Tel Aviv Front de Mer Rothschild : Reservation 2025',
  description: 'Reservez hotel Tel Aviv au meilleur prix : front de mer Gordon Beach, quartier Rothschild, centre-ville. Hotels 3-5*, piscine rooftop, petit-dejeuner inclus. Prix negocies exclusifs.',
  canonical: '/hotels/tel-aviv',
  keywords: [
    'hotel tel aviv',
    'hotel tel aviv front de mer',
    'hotel rothschild tel aviv',
    'hotel tel aviv plage',
    'hotel centre ville tel aviv',
    'reservation hotel tel aviv'
  ],
  images: [{
    url: '/images/og/hotels-tel-aviv.jpg',
    width: 1200,
    height: 630,
    alt: 'Hotels a Tel Aviv - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels/tel-aviv')
  }
})

export default function TelAvivHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Tel Aviv', url: '/hotels/tel-aviv' },
  ])

  const hotelSchema = buildHotelSchema({
    name: 'Hotels a Tel Aviv',
    description: 'Selection d\'hotels a Tel Aviv : front de mer, Rothschild, centre-ville',
    url: '/hotels/tel-aviv',
    image: [],
    priceRange: '€€-€€€€',
    address: {
      addressLocality: 'Tel Aviv',
      addressCountry: 'IL'
    },
    starRating: 4,
    amenities: ['Piscine rooftop', 'Wifi gratuit', 'Petit-dejeuner', 'Parking', 'Salle fitness', 'Restaurant'],
    checkInTime: '15:00',
    checkOutTime: '11:00'
  })

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelSchema} />

      <div className="min-h-screen">
        {/* Hero with Video Background */}
        <section className="relative h-[50vh] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/tel-aviv-poster.jpg"
          >
            <source src="/videos/Telaviv.mp4" type="video/mp4" />
            {/* Fallback pour navigateurs ne supportant pas la vidéo */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
          </video>

          {/* Dark Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Hotels a <span className="text-cyan-300">Tel Aviv</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                Front de mer • Rothschild • Centre-ville • Prix negocies
              </p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{ name: 'Hotels', url: '/hotels' }, { name: 'Tel Aviv', url: '/hotels/tel-aviv' }]} />

        {/* Quartiers principaux */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nos Quartiers Recommandes
                </h2>
                <p className="text-xl text-gray-600">
                  Choisissez le quartier ideal pour votre sejour
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Waves className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Front de Mer</h3>
                  <p className="text-gray-700 mb-4">
                    Hotels face aux plages de Tel Aviv (Gordon, Frishman, Hilton). Vue mer, acces direct plage.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Vue panoramique mer
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Acces direct plages
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Promenade Herbert Samuel
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Rothschild</h3>
                  <p className="text-gray-700 mb-4">
                    Boulevard mythique, architecture Bauhaus, cafes branches, vie culturelle animee.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Architecture unique
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Restaurants gastronomiques
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Proche plages (10min)
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    <Hotel className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Centre-Ville</h3>
                  <p className="text-gray-700 mb-4">
                    Quartier d'affaires, shopping Dizengoff, acces facile transports, tarifs attractifs.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Meilleur rapport qualite-prix
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Shopping Dizengoff Center
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Transports publics
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Equipements & Services Hotels
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Star size={20} className="text-blue-500 mr-2" />
                      Equipements Standard
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Piscine rooftop avec vue panoramique ville/mer</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Wifi haut debit gratuit dans toutes les chambres</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Petit-dejeuner buffet israelien (inclus/optionnel)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Salle de fitness 24/7, sauna, hammam</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Hotel size={20} className="text-blue-500 mr-2" />
                      Services Exclusifs
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Concierge francophone pour vos reservations</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Parking prive securise (supplement possible)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Restaurant kasher/non-kasher selon etablissement</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Navette aeroport Ben Gourion sur demande</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Elynor Tours */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Pourquoi reserver avec Elynor Tours ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tarifs Negocies</h3>
                  <p className="text-gray-600">
                    Acces a des tarifs exclusifs non disponibles sur les plateformes classiques
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Annulation Flexible</h3>
                  <p className="text-gray-600">
                    Conditions d'annulation avantageuses selon etablissement
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-purple-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                  <p className="text-gray-600">
                    Assistance francophone avant, pendant et apres votre sejour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prix moyens */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Prix Moyens des Hotels a Tel Aviv (2025)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg">
                  <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Categorie</th>
                      <th className="px-6 py-4 text-left">Prix par nuit</th>
                      <th className="px-6 py-4 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Luxe 5*</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">400-800€</td>
                      <td className="px-6 py-4 text-gray-600">Suites, front de mer premium, service exceptionnel</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Boutique 4*</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">200-400€</td>
                      <td className="px-6 py-4 text-gray-600">Hotels design, quartier Rothschild, rooftop</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Standard 3*</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">120-200€</td>
                      <td className="px-6 py-4 text-gray-600">Hotels propres, centre-ville, services de base</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-gray-700">
                <span className="font-semibold text-blue-600">Tarifs Elynor Tours:</span> Reductions exclusives 10-25% selon saison et duree sejour.
              </p>
            </div>
          </div>
        </section>

        {/* Selection hotels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Nos Meilleurs Hotels a Tel Aviv
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Selection exclusive des 15 meilleurs etablissements, notes par TripAdvisor
              </p>

              {/* Luxe 5* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Star className="text-yellow-500 mr-3" size={28} />
                  Hotels de Luxe 5* (400-800€/nuit)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <HotelCard
                    name="The Jaffa, a Luxury Collection Hotel"
                    slug="the-jaffa"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="450€"
                    location="Old Jaffa (Vieux Jaffa)"
                    features={[
                      "Architecture historique (ancien couvent francais 1865)",
                      "Vue mer Mediterranee depuis rooftop, piscine panoramique",
                      "2 restaurants gastronomiques, spa de luxe"
                    ]}
                    tags={["Wifi gratuit", "Piscine", "Spa", "Restaurant", "Parking"]}
                    imageCount={3}
                  />

                  {/* The Norman */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">The Norman Tel Aviv</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Boulevard Rothschild
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 420€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>2 batiments Bauhaus restaures, architecture classee UNESCO</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rooftop piscine, bibliotheque, service majordome</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Restaurant gastronomique, bar a cocktails</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Wifi gratuit</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Piscine rooftop</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Spa</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Restaurant</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* David Intercontinental */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">David Intercontinental Tel Aviv</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Front de mer (promenade Herbert Samuel)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 380€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Acces direct plage, vue mer panoramique</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Piscine exterieure, spa, fitness 24/7</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>3 restaurants, business center, salles conference</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Plage privee</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Spa</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Restaurants</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Setai Tel Aviv */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Setai Tel Aviv</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Jaffa (Vieux Port)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 480€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Design contemporain luxueux, suites spacieuses</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rooftop piscine infinity, vue mer et Vieux Jaffa</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Restaurant etoile, spa haut de gamme</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Piscine infinity</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Spa luxe</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Restaurant</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Concierge</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boutique 4* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Hotel className="text-purple-500 mr-3" size={28} />
                  Hotels Boutique 4* (200-400€/nuit)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 65 Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">65 Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Boulevard Rothschild
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 220€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Hotel boutique design, batiment Bauhaus renove</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Chambres modernes, rooftop avec vue Rothschild</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Petit-dejeuner gastronomique, cafe artisanal</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Wifi gratuit</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Rooftop</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Design</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Petit-dej</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Brown TLV */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Brown TLV Urban Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Boulevard Rothschild
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 240€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Hotel trendy, decor industriel chic, atmosphere jeune</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Bar-lounge populaire, happy hour quotidien</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>10min a pied des plages, velos gratuits</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Wifi gratuit</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Bar</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Velos</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Trendy</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Lighthouse Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Lighthouse Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Front de mer (plage Hilton)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 280€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Acces direct plage Hilton, vue mer exceptionnelle</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Design moderne, chambres spacieuses avec balcon</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Restaurant vue mer, rooftop bar, piscine</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Vue mer</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Plage</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Restaurant</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Alma Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Alma Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Centre-ville (Yehuda HaLevi)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 260€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Boutique hotel design, atmosphere intimiste</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Spa, hammam, salles massage, terrasse zen</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Proche Carmel Market, Rothschild, plages (10min)</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Spa</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Hammam</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Design</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Calme</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Cinema Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Cinema Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Dizengoff (quartier cinema)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 210€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Theme cinematographique unique, decor vintage annees 30</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rooftop bar tendance, projections films classiques</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Dizengoff Center, cafes branches, vie nocturne</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Thematique</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Rooftop bar</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Design vintage</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Trendy</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Market House Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Market House Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Marche Carmel
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 230€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Au coeur du marche Carmel, atmosphere locale authentique</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Design moderne, terrasse vue marche, restaurant local</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Experience gastronomique, acces plages 8min a pied</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Marche Carmel</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Restaurant</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Terrasse</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Authentique</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standard 3* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Coffee className="text-orange-500 mr-3" size={28} />
                  Hotels Standard 3* (120-200€/nuit)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dan Tel Aviv */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Dan Tel Aviv Hotel</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                          <Star className="text-yellow-600 mr-1" size={16} />
                          <span className="font-bold text-yellow-600">4.0/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Front de mer (plage Gordon)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 180€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Vue mer, acces direct plage Gordon Beach</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Piscine exterieure, salle fitness, business center</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Chaine Dan (qualite fiable), service efficace</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Vue mer</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Plage</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Wifi</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Carlton Tel Aviv */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Carlton Tel Aviv Hotel</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                          <Star className="text-yellow-600 mr-1" size={16} />
                          <span className="font-bold text-yellow-600">4.0/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Front de mer (promenade)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 190€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Emplacement premium front de mer, vue panoramique</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rooftop piscine, restaurant kasher, parking securise</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rapport qualite-prix excellent pour front de mer</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Rooftop piscine</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Kasher</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Parking</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Vue mer</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Melody Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Melody Hotel Tel Aviv</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                          <Star className="text-yellow-600 mr-1" size={16} />
                          <span className="font-bold text-yellow-600">4.0/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Centre-ville (Allenby)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 130€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Meilleur rapport qualite-prix Tel Aviv, propre et moderne</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>5min a pied plages, proche Carmel Market et Rothschild</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Petit-dejeuner buffet inclus, wifi gratuit, AC</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Budget</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Propre</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Central</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Petit-dej inclus</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>

                  {/* Port Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Port Hotel Tel Aviv</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                          <Star className="text-yellow-600 mr-1" size={16} />
                          <span className="font-bold text-yellow-600">4.0/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        Vieux Port (Tel Aviv Nord)
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 150€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Vieux Port renove, restaurants fruits de mer, vie nocturne</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Chambres avec balcon, decor nautique moderne</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Plage Hilton 5min, quartier residentiel calme</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Vieux Port</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Balcon</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Restaurants</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Calme</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info qualite */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Qualite Hoteliere Tel Aviv</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold text-blue-600 mb-2">18</p>
                    <p className="text-gray-700">Hotels notes 4.5/5 ou plus sur TripAdvisor</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-600 mb-2">4.2/5</p>
                    <p className="text-gray-700">Note moyenne generale (ville tres bien notee)</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-600 mb-2">Top 3</p>
                    <p className="text-gray-700">Points forts: Personnel francophone, proprete, emplacement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maillage interne */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Completez votre sejour</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/location-voiture/tel-aviv" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Location Voiture</h3>
                  <p className="text-gray-600 text-sm">Livraison gratuite a votre hotel</p>
                </Link>
                <Link href="/plages/mediterranee" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-600">Plages Tel Aviv</h3>
                  <p className="text-gray-600 text-sm">Guide des 20 plus belles plages</p>
                </Link>
                <Link href="/hotels/jerusalem" className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Hotels Jerusalem</h3>
                  <p className="text-gray-600 text-sm">Combinez Tel Aviv + Jerusalem</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reservez votre hotel a Tel Aviv
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Tarifs exclusifs • Meilleure selection • Assistance francophone
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Demander un devis
                <Phone size={20} className="ml-2" />
              </Link>
              <Link href="/hotels" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Autres destinations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

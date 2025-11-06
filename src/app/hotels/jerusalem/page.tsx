// src/app/hotels/jerusalem/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hotel, MapPin, Star, Coffee, Church, Check, Phone } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildHotelSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Jerusalem Vieille Ville Mamilla : Reservation 2025',
  description: 'Reservez hotel Jerusalem au meilleur prix : Vieille Ville, quartier juif, Mamilla, Jerusalem Est. Hotels 3-5* pres sites sacres. Parking, petit-dejeuner kasher. Prix negocies exclusifs.',
  canonical: '/hotels/jerusalem',
  keywords: [
    'hotel jerusalem',
    'hotel jerusalem vieille ville',
    'hotel mamilla jerusalem',
    'hotel quartier juif jerusalem',
    'hotel jerusalem est',
    'reservation hotel jerusalem'
  ],
  images: [{
    url: '/images/og/hotels-jerusalem.jpg',
    width: 1200,
    height: 630,
    alt: 'Hotels a Jerusalem - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels/jerusalem')
  }
})

export default function JerusalemHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Jerusalem', url: '/hotels/jerusalem' },
  ])

  const hotelSchema = buildHotelSchema({
    name: 'Hotels a Jerusalem',
    description: 'Selection d\'hotels a Jerusalem : Vieille Ville, Mamilla, quartiers modernes',
    url: '/hotels/jerusalem',
    image: [],
    priceRange: '€€-€€€€',
    address: {
      addressLocality: 'Jerusalem',
      addressCountry: 'IL'
    },
    starRating: 4,
    amenities: ['Parking', 'Wifi gratuit', 'Petit-dejeuner kasher', 'Restaurant', 'Terrasse vue Vieille Ville', 'Concierge'],
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
            poster="/images/jerusalem-poster.jpg"
          >
            <source src="/videos/Jerusalem.mp4" type="video/mp4" />
            {/* Fallback pour navigateurs ne supportant pas la vidéo */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600"></div>
          </video>

          {/* Dark Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Hotels a <span className="text-amber-300">Jerusalem</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                Vieille Ville • Mamilla • Quartiers modernes • Pres sites sacres
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Hotels', url: '/hotels' },
            { name: 'Jerusalem', url: '/hotels/jerusalem' }
          ]}
        />

        {/* Quartiers principaux */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nos Quartiers Recommandes
                </h2>
                <p className="text-xl text-gray-600">
                  Choisissez le quartier ideal pour votre pelerinage ou visite touristique
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                    <Church className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Vieille Ville & Quartier Juif</h3>
                  <p className="text-gray-700 mb-4">
                    Au coeur des sites sacres : Mur des Lamentations, Saint-Sepulcre, Dôme du Rocher.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Acces pieton sites sacres
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Atmosphere historique unique
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Vue remparts et coupoles
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Hotel className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Mamilla & Centre</h3>
                  <p className="text-gray-700 mb-4">
                    Quartier moderne haut de gamme, shopping Mamilla Mall, restaurants, proche Vieille Ville.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Hotels de luxe 5*
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Shopping & restaurants
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      10min a pied Vieille Ville
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Jerusalem Est</h3>
                  <p className="text-gray-700 mb-4">
                    Quartiers palestiniens, hotels familiaux, atmosphere authentique, tarifs competitifs.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Meilleur rapport qualite-prix
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Atmosphere locale authentique
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Proche Porte de Damas
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Equipements & Services Hotels
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Star size={20} className="text-amber-500 mr-2" />
                      Equipements Standard
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Terrasses avec vue Vieille Ville et coupoles dorees</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Petit-dejeuner kasher ou international selon hotel</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Parking prive securise (essentiel a Jerusalem)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Wifi gratuit haut debit dans les chambres</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Hotel size={20} className="text-amber-500 mr-2" />
                      Services Exclusifs
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Concierge pour visites guidees sites sacres</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Restaurant kasher certifie (hotels kasher)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Navette aeroport Ben Gourion et Tel Aviv</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Respect Shabbat (hotels religieux)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sites a proximite */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Sites Touristiques Majeurs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <Church size={24} className="text-amber-500 mr-3" />
                    Sites Religieux
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Mur des Lamentations (Kotel) - Site le plus sacre du judaisme</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Eglise du Saint-Sepulcre - Lieu crucifixion et resurrection</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Esplanade des Mosquees - Dôme du Rocher, Al-Aqsa</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Mont des Oliviers - Jardin de Gethsemane</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="font-semibold text-xl mb-4 flex items-center">
                    <MapPin size={24} className="text-blue-500 mr-3" />
                    Sites Culturels
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Musee d'Israel - Manuscrits de la Mer Morte</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Yad Vashem - Memorial de la Shoah</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Marche Mahane Yehuda - Souk local et restaurants</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Cite de David - Fouilles archeologiques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Elynor Tours */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Pourquoi reserver avec Elynor Tours ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-amber-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tarifs Negocies</h3>
                  <p className="text-gray-600">
                    Acces exclusif aux meilleurs hotels de Jerusalem a prix preferentiels
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expertise Locale</h3>
                  <p className="text-gray-600">
                    Conseils personnalises sur les quartiers et visites selon vos besoins
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                  <p className="text-gray-600">
                    Assistance francophone pendant tout votre sejour a Jerusalem
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
              <h2 className="text-3xl font-bold text-center mb-12">Prix Moyens des Hotels a Jerusalem (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg">
                  <thead className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Categorie</th>
                      <th className="px-6 py-4 text-left">Prix par nuit</th>
                      <th className="px-6 py-4 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Luxe 5* Mamilla</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">450-700€</td>
                      <td className="px-6 py-4 text-gray-600">Hotels de prestige, vue Vieille Ville, service exceptionnel</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Confort 4*</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">180-350€</td>
                      <td className="px-6 py-4 text-gray-600">Bon emplacement, parking, petit-dejeuner kasher</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Standard 3*</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">100-180€</td>
                      <td className="px-6 py-4 text-gray-600">Hotels propres, centre-ville, acces transports</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-gray-700"><span className="font-semibold text-amber-600">Tarifs Elynor Tours:</span> Reductions exclusives 10-25% selon saison et duree sejour.</p>
            </div>
          </div>
        </section>

        {/* Selection hotels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Nos Meilleurs Hotels a Jerusalem</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">Selection exclusive des 12 meilleurs etablissements, notes par TripAdvisor</p>

              {/* Luxe 5* Mamilla */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center"><Star className="text-yellow-500 mr-3" size={28} />Hotels de Luxe 5* Mamilla (450-700€/nuit)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Waldorf Astoria Jerusalem</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">4.5/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-amber-500" />Quartier Mamilla</p>
                      <p className="text-2xl font-bold text-amber-600 mb-4">A partir de 550€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Palace historique renove, luxe absolu, service majordome</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Vue panoramique Vieille Ville, 5min a pied Porte de Jaffa</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Spa luxe, piscine int erieure, restaurant gastronomique</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Spa</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Restaurant</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Parking</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">King David Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">4.5/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-amber-500" />King David Street</p>
                      <p className="text-2xl font-bold text-amber-600 mb-4">A partir de 520€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Hotel mythique (1931), a accueilli presid ents et stars</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Jardins magnifiques, vue Vieille Ville et Mont des Oliviers</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Piscine exterieure, tennis, spa, restaurants kasher</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Historique</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Kasher</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Jardins</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Mamilla Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">4.5/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-amber-500" />Mamilla Avenue (face Vieille Ville)</p>
                      <p className="text-2xl font-bold text-amber-600 mb-4">A partir de 480€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Design contemporain luxueux, rooftop piscine vue Vieille Ville</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Acces direct Mamilla Mall (shopping haut de gamme)</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Spa Akasha, bar lounge chic, 2 restaurants</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Rooftop piscine</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Spa</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Shopping</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Design</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">David Citadel Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">4.5/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-amber-500" />Mamilla (face remparts)</p>
                      <p className="text-2xl font-bold text-amber-600 mb-4">A partir de 500€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Vue imprenable remparts Vieille Ville et Tour de David</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>2 piscines (interieure/exterieure), spa complet, tennis</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Restaurants kasher, parking securise, concierge francophone</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">2 piscines</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Spa</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Kasher</span>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Vue remparts</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confort 4* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center"><Hotel className="text-blue-500 mr-3" size={28} />Hotels Confort 4* (180-350€/nuit)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">The Inbal Jerusalem Hotel</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full"><Star className="text-yellow-600 mr-1" size={16} /><span className="font-bold text-yellow-600">4.0/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-blue-500" />Liberty Bell Park</p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 280€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Hotel elegant, piscine exterieure chauffee, jardins</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>15min a pied Vieille Ville, parking gratuit, fitness</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Restaurant kasher, petit-dejeuner buffet excellent</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Parking gratuit</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Kasher</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Jardins</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Dan Panorama Jerusalem</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full"><Star className="text-yellow-600 mr-1" size={16} /><span className="font-bold text-yellow-600">4.0/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-blue-500" />Centre-ville (Keren Hayesod)</p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 220€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Chaine Dan (qualite fiable), piscine exterieure, fitness</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>20min a pied Vieille Ville, parking, navette gratuite sites</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Rapport qualite-prix excellent, chambres spacieuses</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Parking</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Navette</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Bon rapport</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Leonardo Plaza Hotel Jerusalem</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full"><Star className="text-yellow-600 mr-1" size={16} /><span className="font-bold text-yellow-600">4.0/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-blue-500" />King George Street</p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 200€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Emplacement central excellent, piscine rooftop vue Vieille Ville</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>15min a pied sites sacres, proche tramway, parking prive</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Restaurant kasher, spa, salles conference, business center</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Rooftop piscine</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Central</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Kasher</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Spa</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Arthur Hotel Jerusalem</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">4.5/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-blue-500" />Quartier Juif (Vieille Ville)</p>
                      <p className="text-2xl font-bold text-blue-600 mb-4">A partir de 320€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Au coeur Quartier Juif, 2min a pied Mur des Lamentations</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Boutique hotel design, terrasse vue coupoles dorees</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Atmosphere unique historique, respect Shabbat, kasher</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Vieille Ville</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Kotel 2min</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Kasher</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Design</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget 3* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center"><Coffee className="text-green-500 mr-3" size={28} />Hotels Budget 3* (100-180€/nuit)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Harmony Hotel Jerusalem</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">4.5/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-green-500" />Nahalat Shiva (centre-ville)</p>
                      <p className="text-2xl font-bold text-green-600 mb-4">A partir de 140€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Meilleur budget Jerusalem, design moderne, tres propre</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>10min a pied Vieille Ville, quartier Nahalat Shiva anime</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Petit-dejeuner inclus, wifi gratuit, personnel adorable</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Budget</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Central</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Petit-dej inclus</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Propre</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Prima Kings Hotel</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full"><Star className="text-yellow-600 mr-1" size={16} /><span className="font-bold text-yellow-600">4.0/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-green-500" />Centre-ville</p>
                      <p className="text-2xl font-bold text-green-600 mb-4">A partir de 120€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Tres bon rapport qualite-prix, chambres renovees recemment</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Proche tramway (acces Vieille Ville 10min), parking disponible</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Restaurant kasher, petit-dejeuner buffet, wifi gratuit</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Bon rapport</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Tramway</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Kasher</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Parking</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">Prima Park Hotel</h4>
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full"><Star className="text-yellow-600 mr-1" size={16} /><span className="font-bold text-yellow-600">4.0/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-green-500" />Centre-ville (Vilnay)</p>
                      <p className="text-2xl font-bold text-green-600 mb-4">A partir de 110€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Hotel economique propre, ideal familles budget serre</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Chambres simples mais confortables, AC, wifi gratuit</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Proche transports, 20min a pied Vieille Ville, calme</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Economique</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Propre</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Familles</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Calme</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-800">American Colony Hotel</h4>
                        <div className="flex items-center bg-green-100 px-3 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">4.5/5</span></div>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center"><MapPin size={16} className="mr-2 text-green-500" />Jerusalem-Est (quartier palestinien)</p>
                      <p className="text-2xl font-bold text-green-600 mb-4">A partir de 320€/nuit</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Hotel historique charme (1902), architecture ottomane unique</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Jardins luxuriants, piscine exterieure, atmosphere authentique</span></li>
                        <li className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Proche Porte de Damas, restaurant excellentissime, bar lounge</span></li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Historique</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Charme</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Piscine</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Jardins</span>
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maillage interne */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Completez votre sejour</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/location-voiture/jerusalem" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-amber-600">Location Voiture</h3>
                  <p className="text-gray-600 text-sm">Explorez Jerusalem et environs</p>
                </Link>
                <Link href="/plages/mer-morte" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-teal-600">Plages Mer Morte</h3>
                  <p className="text-gray-600 text-sm">45min depuis Jerusalem</p>
                </Link>
                <Link href="/hotels/tel-aviv" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Hotels Tel Aviv</h3>
                  <p className="text-gray-600 text-sm">Combinez Jerusalem + Tel Aviv</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reservez votre hotel a Jerusalem
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Tarifs exclusifs • Selection experte • Assistance francophone
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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

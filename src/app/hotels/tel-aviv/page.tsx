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
                  <h3 className="text-xl font-bold mb-2">Support du Dimanche au Vendredi</h3>
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
                  {/* The Norman */}
                  <HotelCard
                    name="The Norman Tel Aviv"
                    slug="the-norman"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="420€"
                    location="Boulevard Rothschild"
                    features={[
                      "2 batiments Bauhaus restaures, architecture classee UNESCO",
                      "Rooftop piscine, bibliotheque, service majordome",
                      "Restaurant gastronomique, bar a cocktails"
                    ]}
                    tags={["Wifi gratuit", "Piscine rooftop", "Spa", "Restaurant"]}
                    imageUrl="/images/hotels/tel-aviv/normand.webp"
                    externalUrl="https://www.thenorman.com/"
                  />

                  {/* Sheraton Grand */}
                  <HotelCard
                    name="Sheraton Grand Tel Aviv"
                    slug="sheraton"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="380€"
                    location="Front de mer (promenade Herbert Samuel)"
                    features={[
                      "Acces direct plage, vue mer panoramique",
                      "Piscine exterieure, spa, fitness 24/7",
                      "3 restaurants, business center, salles conference"
                    ]}
                    tags={["Plage privee", "Piscine", "Spa", "Restaurants"]}
                    imageUrl="/images/hotels/tel-aviv/sheraton.webp"
                    externalUrl="https://www.marriott.com/en-us/hotels/tlvsi-sheraton-grand-tel-aviv"
                  />

                  {/* Setai Tel Aviv */}
                  <HotelCard
                    name="Setai Tel Aviv"
                    slug="setai"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="480€"
                    location="Jaffa (Vieux Port)"
                    features={[
                      "Design contemporain luxueux, suites spacieuses",
                      "Rooftop piscine infinity, vue mer et Vieux Jaffa",
                      "Restaurant etoile, spa haut de gamme"
                    ]}
                    tags={["Piscine infinity", "Spa luxe", "Restaurant", "Concierge"]}
                    imageUrl="/images/hotels/tel-aviv/setaiTLV.webp"
                    externalUrl="https://thesetaihotels.com/"
                  />

                  {/* David Intercontinental */}
                  <HotelCard
                    name="David Intercontinental Tel Aviv"
                    slug="david-intercontinental"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="380€"
                    location="Front de mer (promenade Herbert Samuel)"
                    features={[
                      "Acces direct plage, vue mer panoramique",
                      "Piscine exterieure, spa, fitness 24/7",
                      "3 restaurants, business center, salles conference"
                    ]}
                    tags={["Plage privee", "Piscine", "Spa", "Restaurants"]}
                    imageUrl="/images/hotels/tel-aviv/intercontinental.webp"
                    externalUrl="https://www.ihg.com/intercontinental/hotels/gb/en/tel-aviv/tlvha/hoteldetail"
                  />

                  {/* Royal Beach */}
                  <HotelCard
                    name="Isrotel Royal Beach Tel Aviv"
                    slug="royal-beach"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="350€"
                    location="Front de mer"
                    features={[
                      "Acces direct a la plage, vue mer exceptionnelle",
                      "Piscine exterieure, spa wellness center",
                      "Restaurants kasher, salles evenements"
                    ]}
                    tags={["Plage privee", "Piscine", "Spa", "Kasher"]}
                    imageUrl="/images/hotels/tel-aviv/royalbeach.webp"
                    externalUrl="https://www.isrotel.co.il/isrotel-hotels/tel-aviv/%D7%A8%D7%95%D7%99%D7%90%D7%9C-%D7%91%D7%99%D7%A5-%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91/"
                  />

                  {/* Hilton Tel Aviv */}
                  <HotelCard
                    name="Hilton Tel Aviv"
                    slug="hilton"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="320€"
                    location="Plage de Tel Aviv"
                    features={[
                      "Localisation premium sur la plage",
                      "Piscine avec vue mer, centre fitness complet",
                      "Plusieurs restaurants, terrasses panoramiques"
                    ]}
                    tags={["Plage", "Piscine", "Fitness", "Restaurants"]}
                    imageUrl="/images/hotels/tel-aviv/HiltonTLV.webp"
                    externalUrl="https://www.hilton.com/en/hotels/tlvhitw-hilton-tel-aviv/"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Crowne Plaza Beach */}
                  <HotelCard
                    name="Crowne Plaza Tel Aviv Beach"
                    slug="crowne-plaza-beach"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="320€"
                    location="Front de mer - Gordon Beach"
                    features={[
                      "Accès direct plage Gordon, 246 chambres vue mer panoramique",
                      "2 piscines (extérieure chauffée + intérieure ouverte toute l'année)",
                      "Spa complet sauna hammam jacuzzi, restaurant Bellissima vue mer"
                    ]}
                    tags={["Piscine intérieure/extérieure", "Spa & Wellness", "3 Restaurants", "Plage privée", "WiFi gratuit"]}
                    imageUrl="/images/hotels/tel-aviv/crownetlvbeach.webp"
                    externalUrl="https://www.booking.com/hotel/il/crowne-plaza-tel-aviv.fr.html"
                  />

                
                  {/* David Kempinski */}
                  <HotelCard
                    name="The David Kempinski Tel Aviv"
                    slug="david-kempinski"
                    city="tel-aviv"
                    rating="4.5/5"
                    price="420€"
                    location="Front de mer - Frishman Beach"
                    features={[
                      "Ultra-luxe groupe Kempinski, service personnalisé d'exception",
                      "Piscine infinity rooftop, spa holistique soins signature",
                      "Restaurant gastronomique primé chef étoilé, plage privée cabanas luxe"
                    ]}
                    tags={["Piscine infinity", "Spa holistique", "Restaurant étoilé", "Plage privée", "Suites luxe"]}
                    imageUrl="/images/hotels/tel-aviv/kempinskitlv.webp"
                    externalUrl="https://www.booking.com/hotel/il/the-david-kempinski-tel-aviv-tel-aviv-yafo.fr.html"
                  />

                  {/* Carlton */}
                  <HotelCard
                    name="Carlton Tel Aviv Hotel"
                    slug="carlton"
                    city="tel-aviv"
                    rating="4.4/5"
                    price="340€"
                    location="Front de mer - Marina"
                    features={[
                      "Emplacement premium promenade maritime, proche Marina",
                      "Piscine rooftop vue panoramique mer et ville, bar piscine",
                      "Restaurant kasher, service Shabbat adapté, chambres rénovées balcon"
                    ]}
                    tags={["Rooftop piscine", "Restaurant kasher", "Vue mer/marina", "Bar piscine", "WiFi gratuit"]}
                    imageUrl="/images/hotels/tel-aviv/carltontlv.webp"
                    externalUrl="https://www.booking.com/hotel/il/carlton-tel-aviv.fr.html"
                  />

                  {/* Opera Tower */}
                  <HotelCard
                    name="Opera Tower Hotel by Herbert Samuel"
                    slug="opera-tower"
                    city="tel-aviv"
                    rating="4.3/5"
                    price="260€"
                    location="Front de mer - Opera Tower"
                    features={[
                      "Tour Opera emblématique, appartements-hôtel spacieux longue durée",
                      "Kitchenette équipée salon séparé, piscine extérieure terrasse panoramique",
                      "Restaurant Herbert Samuel rez-de-chaussée, face à la plage"
                    ]}
                    tags={["Appartements équipés", "Kitchenette", "Piscine panoramique", "Restaurant Herbert Samuel", "Longue durée"]}
                    imageUrl="/images/hotels/tel-aviv/herberttlv.webp"
                    externalUrl="https://www.booking.com/hotel/il/opera-tel-aviv-by-herbert-samuel.fr.html"
                  />

                  {/* Renaissance */}
                  <HotelCard
                    name="Renaissance Tel Aviv Hotel"
                    slug="renaissance"
                    city="tel-aviv"
                    rating="4.6/5"
                    price="350€"
                    location="Front de mer - Hayarkon"
                    features={[
                      "Plage privée exclusive architecture moderne, design contemporain",
                      "Piscine intérieure chauffée, centre fitness ultramoderne 24/7",
                      "Restaurant gastronomique, bar rooftop vue panoramique 360°"
                    ]}
                    tags={["Plage privée", "Piscine intérieure", "Rooftop bar", "Fitness 24/7", "Restaurant gastronomique"]}
                    imageUrl="/images/hotels/tel-aviv/renaissancetlv.webp"
                    externalUrl="https://www.booking.com/hotel/il/renaissance-tel-aviv.fr.html"
                  />

                  {/* Crowne Plaza City */}
                  <HotelCard
                    name="Crowne Plaza City Centre"
                    slug="crowne-plaza-city"
                    city="tel-aviv"
                    rating="4.2/5"
                    price="220€"
                    location="Centre-ville - Azrieli"
                    features={[
                      "Tours Azrieli centre d'affaires, vue panoramique ville",
                      "Centre de conférences high-tech 12 salles équipées",
                      "Navette gratuite vers plages, proche gare centrale Savidor"
                    ]}
                    tags={["Centre conférences", "Navette plage", "Tours Azrieli", "12 salles réunion", "WiFi haut débit"]}
                    imageUrl="/images/hotels/tel-aviv/croxncitytlv.webp"
                    externalUrl="https://www.booking.com/hotel/il/crowne-plaza-city-centre-tlv.fr.html"
                  />

                  {/* Isrotel Sea Tower */}
                  <HotelCard
                    name="Sea Tower - Isrotel"
                    slug="isrotel-sea-tower"
                    city="tel-aviv"
                    rating="4.3/5"
                    price="290€"
                    location="Front de mer - Hayarkon Nord"
                    features={[
                      "Tour moderne 19 étages, toutes chambres vue mer garantie",
                      "Grandes chambres familiales, restaurant kasher Mehadrin",
                      "Piscine couverte chauffée salle fitness sauna, proche port Tel Aviv"
                    ]}
                    tags={["Vue mer garantie", "Chambres familiales", "Kasher Mehadrin", "Piscine couverte", "Sauna"]}
                    imageUrl="/images/hotels/tel-aviv/SEATOWER.webp"
                    externalUrl="https://www.booking.com/hotel/il/isrotel-sea-tower-tel-aviv.fr.html"
                  />

                  {/* Dan Tel Aviv */}
                  <HotelCard
                    name="Dan Tel Aviv Hotel"
                    slug="dan-tel-aviv"
                    city="tel-aviv"
                    rating="4.4/5"
                    price="380€"
                    location="Front de mer - Hayarkon"
                    features={[
                      "Hôtel iconique 280 chambres vue mer spectaculaire, Leading Hotels",
                      "2 piscines (intérieure 28°C + extérieure eau salée) toute l'année",
                      "Spa Via LOMAH 4 salles massages couples, business lounge 18e étage"
                    ]}
                    tags={["2 Piscines", "Spa Via LOMAH", "Business lounge", "Restaurant vue mer", "Leading Hotels"]}
                    imageUrl="/images/hotels/tel-aviv/DANTLV.webp"
                    externalUrl="https://www.booking.com/hotel/il/dan-tel-aviv.fr.html"
                  />

                  {/* Dan Panorama */}
                  <HotelCard
                    name="Dan Panorama Tel Aviv"
                    slug="dan-panorama"
                    city="tel-aviv"
                    rating="4.3/5"
                    price="280€"
                    location="Neve Tzedek - Front de mer"
                    features={[
                      "480 chambres spacieuses vue mer, quartier Neve Tzedek charme",
                      "Piscine extérieure jacuzzi, Carmel Club Lounge 18e vue panoramique",
                      "Centre congrès complet, face plage proche Vieux Jaffa 10 min"
                    ]}
                    tags={["Piscine & Jacuzzi", "Club Lounge 18e", "Centre congrès", "Face plage", "Neve Tzedek"]}
                    imageUrl="/images/hotels/tel-aviv/DanPanoramaTLV.webp"
                    externalUrl="https://www.booking.com/hotel/il/dan-panorama-tel-aviv.fr.html"
                  />

                  {/* Grand Beach */}
                  <HotelCard
                    name="Grand Beach Hotel Tel Aviv"
                    slug="grand-beach"
                    city="tel-aviv"
                    rating="4.0/5"
                    price="200€"
                    location="Front de mer - Allenby"
                    features={[
                      "Rénové 2023 design contemporain frais, accès direct plage Bograshov",
                      "Rooftop bar trendy DJ piscine rooftop vue mer 360°",
                      "Restaurant méditerranéen moderne brunch week-end, proche Carmel Market"
                    ]}
                    tags={["Rénové 2023", "Plage incluse", "Rooftop bar & piscine", "Brunch week-end", "Design moderne"]}
                    imageUrl="/images/hotels/tel-aviv/grandbeach.webp"
                    externalUrl="https://www.booking.com/hotel/il/grand-beach-tel-aviv.fr.html"
                  />
                </div>
              </div>

              {/* Autres Hotels */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Coffee className="text-orange-500 mr-3" size={28} />
                  Autres Hotels a Tel Aviv
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {/* 65 Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">65 Hotel</h4>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={14} />
                          <span className="font-bold text-green-600 text-sm">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Boulevard Rothschild
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 220€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Boutique design Bauhaus</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rooftop vue Rothschild</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
                  </div>

                  {/* Brown TLV */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">Brown TLV Urban</h4>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={14} />
                          <span className="font-bold text-green-600 text-sm">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Boulevard Rothschild
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 240€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trendy, decor industriel</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Bar-lounge, velos gratuits</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
                  </div>

                  {/* Lighthouse Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">Lighthouse Hotel</h4>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={14} />
                          <span className="font-bold text-green-600 text-sm">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Front de mer (plage Hilton)
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 280€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Acces direct plage Hilton</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rooftop bar, piscine</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
                  </div>

                  {/* Alma Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">Alma Hotel</h4>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={14} />
                          <span className="font-bold text-green-600 text-sm">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Centre-ville (Yehuda HaLevi)
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 260€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Boutique design intimiste</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Spa, hammam, terrasse zen</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
                  </div>

                  {/* Cinema Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">Cinema Hotel</h4>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={14} />
                          <span className="font-bold text-green-600 text-sm">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Dizengoff (quartier cinema)
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 210€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Theme cinematographique unique</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rooftop bar tendance</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
                  </div>

                  {/* Market House Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">Market House Hotel</h4>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                          <Star className="text-green-600 mr-1" size={14} />
                          <span className="font-bold text-green-600 text-sm">4.5/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Marche Carmel
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 230€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Coeur du marche Carmel</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Terrasse vue marche</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
                  </div>

                  {/* Melody Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">Melody Hotel</h4>
                        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                          <Star className="text-yellow-600 mr-1" size={14} />
                          <span className="font-bold text-yellow-600 text-sm">4.0/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Centre-ville (Allenby)
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 130€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Meilleur rapport qualite-prix</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>5min plages, central</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
                  </div>

                  {/* Port Hotel */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-200">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-800">Port Hotel</h4>
                        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                          <Star className="text-yellow-600 mr-1" size={14} />
                          <span className="font-bold text-yellow-600 text-sm">4.0/5</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-blue-500" />
                        Vieux Port (Tel Aviv Nord)
                      </p>
                      <p className="text-xl font-bold text-blue-600 mb-3">A partir de 150€/nuit</p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Vieux Port renove</span>
                        </li>
                        <li className="flex items-start text-xs">
                          <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Balcon, decor nautique</span>
                        </li>
                      </ul>
                      <a href="#booking-form" className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                        Demander un devis
                      </a>
                    </div>
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
              <Link href="/hotels" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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

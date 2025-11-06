// src/app/location-voiture/tel-aviv/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Car, MapPin, Check, Phone, Clock, Shield, Star } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildCarRentalSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Location Voiture Tel Aviv Centre-Ville Livraison Hotel 2025',
  description: 'Louez voiture Tel Aviv avec livraison gratuite hotel, centre-ville, aeroport. Vehicules neufs economiques, SUV, luxe. Assurance incluse, GPS, assistance 24/7. Prix imbattables.',
  canonical: '/location-voiture/tel-aviv',
  keywords: [
    'location voiture tel aviv',
    'louer voiture tel aviv',
    'location auto tel aviv',
    'voiture tel aviv livraison hotel',
    'location voiture rothschild',
    'voiture tel aviv aeroport'
  ],
  images: [{
    url: '/images/og/location-voiture-tel-aviv.jpg',
    width: 1200,
    height: 630,
    alt: 'Location de voiture a Tel Aviv - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/location-voiture/tel-aviv')
  }
})

export default function TelAvivCarRentalPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Location de Voiture', url: '/location-voiture' },
    { name: 'Tel Aviv', url: '/location-voiture/tel-aviv' },
  ])

  const carRentalSchema = buildCarRentalSchema({
    name: 'Location de voiture a Tel Aviv',
    description: 'Service location voiture Tel Aviv avec livraison/retour gratuit hotel et centre-ville',
    brand: 'Elynor Tours',
    model: 'Tous vehicules disponibles',
    url: '/location-voiture/tel-aviv',
    price: {
      amount: 35,
      currency: 'EUR',
      pricePer: 'day'
    },
    seatingCapacity: 5,
    transmission: 'Automatic',
  })

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={carRentalSchema} />

      <div className="min-h-screen">
        {/* Hero */}
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
            <source src="/videos/Telavivhero.mp4" type="video/mp4" />
            {/* Fallback pour navigateurs ne supportant pas la vidéo */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600"></div>
          </video>

          {/* Dark Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Location de Voiture a <span className="text-blue-300">Tel Aviv</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Service de qualité • Tous véhicules • Assistance francophone
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Location Voiture', url: '/location-voiture' },
            { name: 'Tel Aviv', url: '/location-voiture/tel-aviv' }
          ]}
        />

        {/* Points forts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Assurances détaillées */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-12 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Shield className="text-blue-600 mr-3" size={28} />
                  Options d'Assurance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Assurance Franchise</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Protection de base avec franchise (environ 3000-5000 NIS selon véhicule)
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Moins cher à la location</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Franchise à votre charge en cas de dommages</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-300">
                    <h3 className="font-bold text-lg mb-3 text-blue-700">CDW/LDW</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Collision Damage Waiver - Franchise réduite (environ 1500-2000 NIS)
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Franchise réduite</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Bon compromis qualité/prix</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-400">
                    <h3 className="font-bold text-lg mb-3 text-green-700">Super Cover</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Protection maximale - Zéro franchise
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Aucune franchise</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Couverture complète</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Tranquillité maximale</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Agences et horaires */}
              <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-8 mb-12 border border-orange-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <MapPin className="text-orange-600 mr-3" size={28} />
                  Agences à Tel Aviv
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Agences disponibles</h3>
                    <p className="text-sm text-gray-600 mb-3">Toutes situées sur Hayarkon Street</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <Car size={16} className="text-blue-500 mr-2" />
                        <span>Avis</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-blue-500 mr-2" />
                        <span>Hertz</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-blue-500 mr-2" />
                        <span>Sixt</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-blue-500 mr-2" />
                        <span>Budget</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-blue-500 mr-2" />
                        <span>Europcar</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center">
                      <Clock size={20} className="text-orange-500 mr-2" />
                      Horaires d'ouverture
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <strong>En ville :</strong> Ouverture 9h - Fermeture 16h ou 17h selon agence
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <strong className="text-orange-700">Vendredi :</strong> Fermeture à 12h (avant Shabbat)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <strong>Samedi :</strong> Fermé (Shabbat)
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Pourquoi louer a Tel Aviv ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <MapPin size={20} className="text-blue-500 mr-2" />
                      Explorez Tel Aviv et ses environs
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Plages mediterraneennes (Gordon, Frishman, Hilton)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Jaffa, vieux port, marches Carmel et Levinsky</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Quartier Rothschild, Neve Tzedek, Florentin</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Musees (Palmach, Diaspora, Art de Tel Aviv)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Car size={20} className="text-blue-500 mr-2" />
                      Excursions depuis Tel Aviv
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Jerusalem (45min) - Sites historiques, Vieille Ville</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Haifa et Mont Carmel (1h15) - Jardins Bahai</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Cesaree et Netanya (40min) - Ruines romaines</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Mer Morte (1h30) - Plages therapeutiques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Informations Pratiques Tel Aviv
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Stationnement</h3>
                    <p className="text-gray-700 text-sm">
                      Zones bleues-blanches (payant 08h-19h sauf Shabbat). Parkings publics disponibles.
                      Application Pango recommandee pour parking mobile.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Circulation</h3>
                    <p className="text-gray-700 text-sm">
                      Trafic dense aux heures de pointe (07h-09h, 17h-19h). GPS recommande.
                      Peages sur autoroutes (Route 6 payante).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Distance Aeroport</h3>
                    <p className="text-gray-700 text-sm">
                      Aeroport Ben Gourion : 20-30min en voiture (Route 1 ou Route 20).
                      Possibilite retour voiture a l'aeroport.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Carburant</h3>
                    <p className="text-gray-700 text-sm">
                      Nombreuses stations-service. Prix affiches TTC.
                      Stations automatiques 24/7 (cartes bancaires acceptees).
                    </p>
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
              <h2 className="text-3xl font-bold text-center mb-12">Services Connexes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/hotels/tel-aviv" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Hotels Tel Aviv</h3>
                  <p className="text-gray-600 text-sm">Front de mer, Rothschild, centre-ville</p>
                </Link>
                <Link href="/plages/mediterranee" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-teal-600">Plages Tel Aviv</h3>
                  <p className="text-gray-600 text-sm">Gordon, Frishman, Hilton Beach</p>
                </Link>
                <Link href="/location-voiture/aeroport-ben-gourion" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">Location Aeroport</h3>
                  <p className="text-gray-600 text-sm">Retrait direct a l'arrivee</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reservez votre voiture a Tel Aviv
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Devis gratuit en 24h • Assistance francophone • Tous véhicules
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/location-voiture#formulaire-devis" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Demander un devis
                <Phone size={20} className="ml-2" />
              </Link>
              <Link href="/faq" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Questions frequentes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

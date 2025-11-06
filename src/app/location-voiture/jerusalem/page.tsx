// src/app/location-voiture/jerusalem/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Car, MapPin, Check, Phone, Clock, Shield, Star } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildCarRentalSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Location Voiture Jerusalem Vieille Ville Livraison Gratuite 2025',
  description: 'Louez voiture Jerusalem avec livraison gratuite hotel, Vieille Ville, quartiers modernes. Vehicules neufs tous modeles. Assurance complete, GPS, assistance francophone 24/7.',
  canonical: '/location-voiture/jerusalem',
  keywords: [
    'location voiture jerusalem',
    'louer voiture jerusalem',
    'location auto jerusalem',
    'voiture jerusalem livraison hotel',
    'location voiture vieille ville',
    'voiture jerusalem aeroport'
  ],
  images: [{
    url: '/images/og/location-voiture-jerusalem.jpg',
    width: 1200,
    height: 630,
    alt: 'Location de voiture a Jerusalem - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/location-voiture/jerusalem')
  }
})

export default function JerusalemCarRentalPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Location de Voiture', url: '/location-voiture' },
    { name: 'Jerusalem', url: '/location-voiture/jerusalem' },
  ])

  const carRentalSchema = buildCarRentalSchema({
    name: 'Location de voiture a Jerusalem',
    description: 'Service location voiture Jerusalem avec livraison/retour gratuit hotel et Vieille Ville',
    brand: 'Elynor Tours',
    model: 'Tous vehicules disponibles',
    url: '/location-voiture/jerusalem',
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
            poster="/images/jerusalem-poster.jpg"
          >
            <source src="/videos/kotel.mp4" type="video/mp4" />
            {/* Fallback pour navigateurs ne supportant pas la vidéo */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
          </video>

          {/* Dark Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Location de Voiture a <span className="text-purple-300">Jerusalem</span>
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
            { name: 'Jerusalem', url: '/location-voiture/jerusalem' }
          ]}
        />

        {/* Points forts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Assurances détaillées */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border border-purple-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Shield className="text-purple-600 mr-3" size={28} />
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
                  <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-300">
                    <h3 className="font-bold text-lg mb-3 text-purple-700">CDW/LDW</h3>
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
                  Agences à Jerusalem
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Quartier Romema</h3>
                    <p className="text-sm text-gray-600 mb-3">3 Louis Brandeis St</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <Car size={16} className="text-purple-500 mr-2" />
                        <span>Hertz</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-purple-500 mr-2" />
                        <span>Eldan</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-purple-500 mr-2" />
                        <span>Cal Auto</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">King David</h3>
                    <p className="text-sm text-gray-600 mb-3">19 King David St</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <Car size={16} className="text-purple-500 mr-2" />
                        <span>Avis</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-purple-500 mr-2" />
                        <span>Europcar</span>
                      </li>
                      <li className="flex items-center">
                        <Car size={16} className="text-purple-500 mr-2" />
                        <span>Dollar / Thrifty</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
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

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Pourquoi louer a Jerusalem ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <MapPin size={20} className="text-purple-500 mr-2" />
                      Explorez Jerusalem et sites sacres
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Vieille Ville (Mur des Lamentations, Saint-Sepulcre, Dôme du Rocher)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Mont des Oliviers, Jardin de Gethsemane, Tombeau de David</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Quartier Mamilla, Mahane Yehuda, Musee d'Israel</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Yad Vashem, Mont Herzl, Ein Kerem</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Car size={20} className="text-purple-500 mr-2" />
                      Excursions depuis Jerusalem
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Mer Morte (45min) - Plages Ein Bokek, Mineral Beach</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Tel Aviv (1h) - Plages mediterraneennes, vie nocturne</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Bethleem (20min) - Eglise de la Nativite</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Massada et Ein Gedi (1h30) - Forteresse, randonnees</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Informations Pratiques Jerusalem
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Stationnement</h3>
                    <p className="text-gray-700 text-sm">
                      Parkings payants dans le centre (zones bleues-blanches). Parking gratuit Shabbat.
                      Grands parkings pres Vieille Ville (Mamilla Mall, Jaffa Gate).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Circulation Shabbat</h3>
                    <p className="text-gray-700 text-sm">
                      Certaines routes fermees vendredi soir au samedi soir (quartiers ultra-orthodoxes).
                      Respecter les signalisations. GPS recommande pour itineraires alternatifs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Distance Aeroport</h3>
                    <p className="text-gray-700 text-sm">
                      Aeroport Ben Gourion : 45-60min en voiture (Route 1).
                      Possibilite retour voiture a l'aeroport ou Jerusalem centre.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Conseils Conduite</h3>
                    <p className="text-gray-700 text-sm">
                      Rues etroites Vieille Ville (pieton uniquement). Privilegier parkings exterieurs.
                      Circulation dense aux heures de pointe. Vigilance piétons et tramway.
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
                <Link href="/hotels/jerusalem" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Hotels Jerusalem</h3>
                  <p className="text-gray-600 text-sm">Vieille Ville, Mamilla, quartiers modernes</p>
                </Link>
                <Link href="/plages/mer-morte" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-teal-600">Plages Mer Morte</h3>
                  <p className="text-gray-600 text-sm">45min depuis Jerusalem</p>
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
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reservez votre voiture a Jerusalem
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Devis gratuit en 24h • Assistance francophone • Tous véhicules
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/location-voiture#formulaire-devis" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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

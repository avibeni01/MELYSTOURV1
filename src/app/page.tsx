import type { Metadata } from 'next'
import Link from 'next/link'
import { Car, Hotel, Umbrella, Phone, Star, Check, ArrowRight, Users, Shield, Clock } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildOrganizationSchema, buildWebSiteSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Elynor Tours : Location Voiture & Hotels Israel au Meilleur Prix',
  description: 'Elynor Tours, specialiste location de voiture et reservation d\'hotels en Israel depuis 2015. Tel Aviv, Jerusalem, Eilat. Meilleurs tarifs garantis, service premium 24/7.',
  canonical: '/',
  keywords: [
    'elynor tours',
    'location voiture israel',
    'hotel israel',
    'reservation voiture tel aviv',
    'location voiture aeroport ben gourion',
    'hotel jerusalem',
    'voyage israel',
    'tour operateur israel'
  ],
  images: [{
    url: '/og-default.jpg',
    width: 1200,
    height: 630,
    alt: 'Elynor Tours - Location de voiture et hotels en Israel'
  }],
  alternates: {
    languages: buildI18nAlternates('/')
  }
})

export default function Home() {
  // Organization Schema
  const organizationSchema = buildOrganizationSchema({
    name: 'Elynor Tours',
    description: 'Specialiste location de voiture et reservation d\'hotels en Israel',
    url: '/',
    logo: '/logo.png',
    contactPoint: {
      telephone: '+33-1-82-83-67-29',
      contactType: 'customer service',
      areaServed: ['IL', 'FR', 'EU'],
      availableLanguage: ['French', 'Hebrew', 'English']
    },
    sameAs: [
      'https://www.facebook.com/ElynorTours',
      'https://www.instagram.com/elynortours'
    ]
  })

  // WebSite Schema (for sitelinks search box)
  const websiteSchema = buildWebSiteSchema({
    name: 'Elynor Tours',
    url: '/',
    description: 'Location de voiture et hotels en Israel au meilleur prix'
  })

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      {/* Hero Section avec video de fond */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10"></div>

        {/* Image de fond (remplace par video si tu veux) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://elynortours.com/wp-content/uploads/2023/05/eleynor-tour-voyage-location.webp)' }}
        />

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Voyagez au meilleur prix avec{' '}
                <span className="text-orange-500">Elynor Tours</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Specialiste Location Voiture & Hotels depuis 2015
              </p>
              <p className="text-lg text-gray-200 mb-8">
                ElynorTours vous garantit les meilleurs tarifs hotels et location de voiture
                principalement en Europe mais aussi ailleurs dans le monde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/location-voiture"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Reserver une voiture
                  <Car className="ml-2" size={20} />
                </Link>
                <Link
                  href="/hotels"
                  className="inline-flex items-center justify-center px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Trouver un hotel
                  <Hotel className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de reservation - IFRAME VERCEL */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Reservation en ligne
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Reservez votre hotel ou location de voiture en quelques clics.
            </p>
          </div>

          {/* Iframe du formulaire Vercel avec HubSpot - Dimensions originales */}
          <div className="w-full max-w-[1280px] mx-auto">
            <iframe
              id="booking-iframe"
              src="https://elynor-location.vercel.app"
              title="Formulaire de reservation Elynor Tours - Hotel et Location Voiture"
              className="w-full border-0 transition-all duration-300 min-h-[750px] md:min-h-[450px]"
              loading="lazy"
              allow="clipboard-write"
            />
          </div>

          {/* Contenu SEO sous le formulaire - Design ameliore */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Car className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Location de voiture</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Tel Aviv, Jerusalem, Aeroport Ben Gourion</strong> - Nous comparons les prix afin de vous proposer la meilleure option.
                Vehicules recents, assurance complete incluse, ou assurance visa premier, aide et assistance en francais.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-xl shadow-lg border border-rose-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mr-4">
                  <Hotel className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Reservation d'hotel</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Meilleurs prix garantis</strong> - Que ca soit en Israel : Tel Aviv, Jerusalem, Eilat, Mer Morte. Ou n'importe ou ailleurs dans le monde.
                Hotels 3-5 etoiles, paiement securise, confirmation immediate, annulation flexible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cherchez, comparez, economisez
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-rose-600 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield size={48} />
              </div>
              <h3 className="text-xl font-bold">Confidentialite</h3>
            </div>

            <div className="bg-pink-500 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold">Serenite</h3>
            </div>

            <div className="bg-pink-500 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star size={48} />
              </div>
              <h3 className="text-xl font-bold">Sur mesure</h3>
            </div>

            <div className="bg-pink-500 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-bold">International</h3>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-orange-500 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Profitez de votre voyage</h3>
              <p className="text-lg">
                On s'occupe de negocier pour vous les meilleures offres de location voiture et reservation d'hotels
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#booking-iframe"
                className="bg-white text-orange-500 font-bold py-3 px-6 rounded hover:bg-gray-100 transition-colors whitespace-nowrap text-center"
              >
                DEMANDER UN DEVIS
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-bold py-3 px-6 rounded hover:bg-white hover:text-orange-500 transition-colors whitespace-nowrap text-center"
              >
                PRENDRE CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location de voiture */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Location de Voitures</h3>
              <p className="text-gray-600 mb-4">
                Nous sommes fiers d'offrir a nos clients une vaste gamme de vehicules neufs
                de haute qualite qui repondent a leurs besoins et a leur budget.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Vehicules recents et entretenus</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Assurance complete incluse</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Assistance 24/7</span>
                </li>
              </ul>
              <Link
                href="/location-voiture"
                className="text-orange-500 font-medium flex items-center hover:text-orange-600"
              >
                Voir nos offres <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>

            {/* Reservation d'hotels */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Hotel className="text-rose-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reservation d'Hotels</h3>
              <p className="text-gray-600 mb-4">
                Grace a notre vaste reseau d'hotels, nous sommes certains de pouvoir trouver
                l'hebergement ideal pour tous les gouts et toutes les preferences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Meilleurs prix garantis</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Large choix d'etablissements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Annulation flexible</span>
                </li>
              </ul>
              <Link
                href="/hotels"
                className="text-rose-500 font-medium flex items-center hover:text-rose-600"
              >
                Voir nos hotels <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>

            {/* Plages & Excursions */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Umbrella className="text-blue-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Plages & Excursions</h3>
              <p className="text-gray-600 mb-4">
                Decouvrez les plus belles plages d'Israel. Nous vous proposons des experiences
                uniques pour tous les gouts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Guides detailles des plages</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Conseils pratiques</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Informations d'acces</span>
                </li>
              </ul>
              <div className="space-y-2">
                <Link
                  href="/plages/mediterranee"
                  className="text-blue-500 font-medium flex items-center hover:text-blue-600"
                >
                  Plages Mediterranee <ArrowRight size={18} className="ml-1" />
                </Link>
                <Link
                  href="/plages/mer-morte"
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Plages Mer Morte <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Temoignages */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos clients temoignent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  BL
                </div>
                <div>
                  <h4 className="font-medium">Benjamin</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Chaque ete nous louons notre voiture avec l'agence Elynor Tours. C'est simple,
                rapide et a prix defiant toute concurrence."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  MD
                </div>
                <div>
                  <h4 className="font-medium">Michael</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Super !!! J'ai fait appel a leurs services pour louer une voiture lors de ma
                derniere visite en Israel. Ce fut simple et agreable."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  PL
                </div>
                <div>
                  <h4 className="font-medium">Patrice</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Top vraiment elle gere tout et toujours au meilleur prix !"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pret a commencer votre voyage ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous des maintenant pour beneficier de nos meilleurs tarifs et
            d'un service personnalise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+33182836729"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              +33 1 82 83 67 29
            </a>
            <a
              href="https://wa.me/972584140489"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

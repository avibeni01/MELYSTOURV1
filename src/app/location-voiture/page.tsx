// src/app/location-voiture/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, Shield, DollarSign, Car, FileText, CreditCard, AlertCircle, Phone as PhoneIcon, MapPin } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo'
import CarRentalForm from '@/components/forms/CarRentalForm'

export const metadata: Metadata = buildMetadata({
  title: 'Location Voiture Israel : Tel Aviv Jerusalem Eilat Prix 2025',
  description: 'Location voiture Israel aux meilleurs prix : aeroport Ben Gourion, Tel Aviv, Jerusalem, Eilat. Tous loueurs (Hertz, Avis, Sixt), assurance incluse, service 24/7, vehicules neufs.',
  canonical: '/location-voiture',
  keywords: [
    'location voiture israel',
    'location voiture tel aviv',
    'location voiture jerusalem',
    'location voiture eilat',
    'location voiture aeroport ben gourion',
    'hertz avis sixt israel',
    'location auto israel pas cher'
  ],
  images: [{
    url: '/images/og/location-voiture-israel.jpg',
    width: 1200,
    height: 630,
    alt: 'Location de voiture en Israel - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/location-voiture')
  }
})

export default function LocationVoiturePage() {
  // Breadcrumbs JSON-LD
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Location de Voiture', url: '/location-voiture' },
  ])

  // Schema ItemList (destinations location voiture)
  const destinationsSchema = buildItemListSchema([
    { name: 'Location Voiture Aeroport Ben Gourion', url: '/location-voiture/aeroport-ben-gourion', description: 'Prise en charge directe a l\'aeroport de Tel Aviv' },
    { name: 'Location Voiture Tel Aviv', url: '/location-voiture/tel-aviv', description: 'Agences en centre-ville et front de mer' },
    { name: 'Location Voiture Jerusalem', url: '/location-voiture/jerusalem', description: 'Bureaux pres de la Vieille Ville et quartiers modernes' },
  ], 'Destinations location de voiture en Israel')

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={destinationsSchema} />

      <div className="min-h-screen">
        {/* Hero Section with Video Background */}
        <section className="relative h-[50vh] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/car-rental-poster.jpg"
          >
            <source src="/videos/car-rental-hero.mp4" type="video/mp4" />
            {/* Fallback pour navigateurs ne supportant pas la vidéo */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600"></div>
          </video>

          {/* Dark Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Location de Voiture <span className="text-orange-300">Partout dans le Monde</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                Meilleurs prix garantis • Service 24/7 • Tous loueurs internationaux
              </p>
            </div>
          </div>
        </section>

        {/* Formulaire de réservation */}
        <section id="formulaire-devis" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <CarRentalForm />
          </div>
        </section>
        
        {/* Destinations principales */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nos Destinations de Location
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Retirez votre vehicule dans les principales villes et aeroports d'Israel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Aeroport Ben Gourion */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/destinations/ben-gurion-airport.webp)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Aeroport Ben Gourion
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Retirez votre voiture directement a l'arrivee dans les <strong>terminaux 1 et 3</strong>.
                    Tous les loueurs internationaux presents (Hertz, Avis, Budget, Europcar, Sixt).
                    Service disponible <strong>24h/24 et 7j/7</strong> pour s'adapter a tous les horaires de vol.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Disponible 24/7
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Tous terminaux (1 & 3)
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Prise en charge immediate
                    </li>
                  </ul>
                  <Link
                    href="/location-voiture/aeroport-ben-gourion"
                    className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors w-full justify-center mt-auto"
                  >
                    Voir les offres
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Tel Aviv */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/destinations/tel-aviv.jpg)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Tel Aviv
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Agences en centre-ville, pres du <strong>front de mer</strong> et du celebre
                    <strong> quartier Rothschild</strong>. Livraison possible directement a votre hotel.
                    Ideal pour decouvrir la ville blanche et profiter des plages mediterraneennes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Agences centre-ville
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Livraison hotel possible
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Parking gratuit inclus
                    </li>
                  </ul>
                  <Link
                    href="/location-voiture/tel-aviv"
                    className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full justify-center mt-auto"
                  >
                    Voir les offres
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Jerusalem */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/destinations/jerusalem.jpg)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Jerusalem
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bureaux principaux à <strong>Romema</strong> (centre commercial Rav Shefa Mall) et
                    <strong> King David Street</strong>, à deux pas du quartier Mamilla et de la Vieille Ville.
                    Idéal pour récupérer ou restituer votre voiture en plein centre.
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex flex-col text-sm text-gray-600">
                      <div className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <strong>Romema :</strong>&nbsp;3 Louis Brandeis St
                      </div>
                      <span className="mt-1 ml-6">Hertz, Eldan, Cal Auto</span>
                    </li>

                    <li className="flex flex-col text-sm text-gray-600">
                      <div className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <strong>King David :</strong>&nbsp;19 King David St
                      </div>
                      <span className="mt-1 ml-6">Avis, Europcar, Dollar / Thrifty</span>
                    </li>
                  </ul>

                  <Link
                    href="/location-voiture/jerusalem"
                    className="inline-flex items-center bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors w-full justify-center mt-auto"
                  >
                    Voir les offres
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Internationales */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Également Disponible dans le Reste du Monde
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profitez de nos services de location de voiture dans les principales destinations internationales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Paris */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-100 flex flex-col">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/destinations/paris.jpg)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Paris
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Retirez votre véhicule à l'<strong>aéroport Charles de Gaulle</strong>,
                    <strong> Orly</strong> ou en centre-ville. Idéal pour explorer la capitale
                    française et ses environs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Aéroports CDG & Orly
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Agences centre-ville
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Service en français
                    </li>
                  </ul>
                  <a
                    href="#formulaire-devis"
                    className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full justify-center mt-auto"
                  >
                    Demander un devis
                    <ArrowRight size={20} className="ml-2" />
                  </a>
                </div>
              </div>

              {/* New York */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-100 flex flex-col">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/destinations/new-york.jpg)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    New York
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Louez votre voiture à <strong>JFK</strong>, <strong>La Guardia</strong> ou
                    <strong> Newark</strong>. Parfait pour découvrir la Big Apple et la côte Est américaine.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Tous les aéroports NYC
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Manhattan locations
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      GPS inclus
                    </li>
                  </ul>
                  <a
                    href="#formulaire-devis"
                    className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors w-full justify-center mt-auto"
                  >
                    Demander un devis
                    <ArrowRight size={20} className="ml-2" />
                  </a>
                </div>
              </div>

              {/* Dubai */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-100 flex flex-col">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/destinations/dubai.jpg)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Dubai
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Récupérez votre véhicule à l'<strong>aéroport international de Dubai</strong>
                    ou dans les quartiers prestigieux de la ville. Véhicules premium disponibles.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Dubai International Airport
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Véhicules de luxe
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      Service multilingue
                    </li>
                  </ul>
                  <a
                    href="#formulaire-devis"
                    className="inline-flex items-center bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors w-full justify-center mt-auto"
                  >
                    Demander un devis
                    <ArrowRight size={20} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Note informative */}
            <div className="mt-12 max-w-4xl mx-auto bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700 text-center">
                <strong>Service personnalisé :</strong> Contactez-nous pour obtenir les meilleurs tarifs
                dans plus de 150 pays. Notre équipe négocie pour vous auprès des plus grands loueurs internationaux.
              </p>
            </div>
          </div>
        </section>

        {/* Avantages Elynor Tours */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pourquoi choisir Elynor Tours ?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Meilleurs Prix Garantis</h3>
                <p className="text-gray-600">
                  Comparaison de tous les loueurs pour vous offrir le tarif le plus competitif du marche
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Assurance Incluse</h3>
                <p className="text-gray-600">
                  Toutes nos locations incluent une assurance de base. Options zero franchise disponibles
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vehicules Neufs</h3>
                <p className="text-gray-600">
                  Flotte recente et bien entretenue. Toutes categories disponibles (economique, SUV, luxe)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guide de location */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* En-tête */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Guide de Location de Voiture en Israël
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tout ce qu'il faut savoir avant de louer votre véhicule
                </p>
              </div>

              {/* Documents nécessaires */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 border border-blue-100">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Documents Nécessaires
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Préparez ces documents pour récupérer votre véhicule en toute simplicité
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
                      <h4 className="font-semibold text-gray-800">Permis de conduire</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Permis valide (permis international recommandé mais pas obligatoire pour les séjours courts)
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
                      <h4 className="font-semibold text-gray-800">Pièce d'identité</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Carte d'identité valide ou passeport en cours de validité
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
                      <h4 className="font-semibold text-gray-800">Carte de crédit</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Au nom du conducteur principal pour le dépôt de garantie
                    </p>
                  </div>
                </div>
              </div>

              {/* Conditions de location */}
              <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-8 mb-8 border border-orange-100">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CreditCard className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Conditions de Location
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Critères requis pour louer un véhicule en Israël
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xl font-bold text-orange-600">18+</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Âge minimum</h4>
                        <p className="text-sm text-gray-600">
                          18 ans minimum requis. Des frais supplémentaires (jeune conducteur) peuvent s'appliquer pour les moins de 25 ans
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xl font-bold text-orange-600">1+</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Expérience de conduite</h4>
                        <p className="text-sm text-gray-600">
                          Minimum 1 an de permis chez la plupart des loueurs. Certains loueurs acceptent des 6 mois d'expérience !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note finale */}
              <div className="mt-8 bg-gradient-to-r from-orange-100 to-rose-100 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Service Personnalisé Elynor Tours</h4>
                    <p className="text-gray-700">
                      Notre équipe est à votre disposition pour vous conseiller et répondre à toutes vos questions concernant votre location de voiture en Israël. Nous vous aidons à choisir le véhicule adapté à vos besoins et vous accompagnons tout au long de votre séjour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'aide pour votre réservation ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#formulaire-devis"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Demander un devis
                <ArrowRight size={20} className="ml-2" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
              >
                Nous contacter
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

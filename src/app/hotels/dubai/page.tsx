// src/app/hotels/dubai/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe Dubai 2025 : Burj Al Arab Atlantis Armani Bulgari',
  description: 'Reservez les meilleurs hotels de luxe a Dubai : Burj Al Arab 7 etoiles, Atlantis The Palm parc aquatique, Armani Hotel Burj Khalifa, Bulgari Resort. Luxe extreme, plage privee, service butler.',
  canonical: '/hotels/dubai',
  keywords: [
    'hotel dubai',
    'hotel luxe dubai',
    'burj al arab dubai',
    'atlantis the palm dubai',
    'armani hotel dubai',
    'bulgari resort dubai',
    'hotel 7 etoiles dubai',
    'hotel burj khalifa',
    'hotel palm jumeirah',
    'hotel dubai plage',
    'reservation hotel dubai',
    'palace dubai',
    'hotel dubai marina',
    'resort dubai tout compris'
  ],
  images: [{
    url: '/images/og/hotels-dubai.jpg',
    width: 1200,
    height: 630,
    alt: 'Hotels de luxe Dubai - Burj Al Arab, Atlantis, Armani'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels/dubai')
  }
})

export default function DubaiHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Dubai', url: '/hotels/dubai' },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le meilleur hotel de luxe a Dubai ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le Burj Al Arab est considere comme l\'hotel le plus luxueux au monde avec son architecture iconique en forme de voile, service butler 24/7, suites duplex et restaurants sous-marins. L\'Atlantis The Palm est ideal pour familles avec Aquaventure Park et aquarium geant. L\'Armani Hotel dans Burj Khalifa offre design exclusif Giorgio Armani.'
        }
      },
      {
        '@type': 'Question',
        name: 'Combien coute une nuit au Burj Al Arab ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une nuit au Burj Al Arab coute entre 1500€ et 5000€ selon la categorie de suite et la saison. Les suites incluent butler personnel 24/7, acces plage privee, restaurants etoiles et transferts Rolls-Royce ou helicopter. Reservez 3-6 mois a l\'avance pour disponibilite.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quels hotels a Dubai ont un parc aquatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'Atlantis The Palm dispose d\'Aquaventure Waterpark, l\'un des plus grands parcs aquatiques du monde avec toboggans spectaculaires, plage privee et aquarium The Lost Chambers. L\'acces est inclus pour les clients de l\'hotel. Parfait pour familles.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel hotel choisir sur Palm Jumeirah ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sur Palm Jumeirah, l\'Atlantis The Palm est ideal pour familles (parc aquatique, animations), le Bulgari Resort Dubai pour couples luxe (ile privee, yacht club, spa italien), et le Jumeirah Zabeel Saray pour spa turc authentique. Tous offrent plages privees et vue Golfe Persique.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quelle est la meilleure periode pour visiter Dubai ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La meilleure periode est novembre a mars (20-30°C, temps ideal plage). Evitez juin-aout (40-50°C, tres chaud). Decembre-janvier est haute saison (plus cher). Avril-mai et septembre-octobre offrent bon compromis prix/meteo. Reservez hotels 2-3 mois a l\'avance.'
        }
      }
    ]
  }

  const dubaiHotels = [
    {
      id: 1,
      name: "Jumeirah Burj Al Arab",
      stars: 7,
      description: "L'hôtel le plus luxueux au monde, architecture iconique en forme de voile, service butler 24/7 et restaurants sous-marins.",
      imageUrl: "/images/hotels/Jumeirah Burj Al Arab Dubai.webp",
      amenities: ["Butler personnel", "Plage privée", "Restaurants étoilés", "Spa Talise", "Héliport"],
      highlights: [
        "Architecture iconique mondialement reconnue",
        "Service butler personnel 24/7",
        "Restaurants sous-marins et panoramiques"
      ],
      location: "Jumeirah Beach",
      priceRange: "1500-5000€"
    },
    {
      id: 2,
      name: "Atlantis The Palm",
      stars: 5,
      description: "Resort familial spectaculaire sur Palm Jumeirah avec Aquaventure Waterpark et aquarium géant The Lost Chambers.",
      imageUrl: "/images/hotels/Atlantis - The Palm.webp",
      amenities: ["Aquaventure Park", "Aquarium", "Plage privée", "20+ restaurants", "Kids club"],
      highlights: [
        "Parc aquatique Aquaventure inclus",
        "Aquarium The Lost Chambers avec 65000 poissons",
        "Plage privée 1km sur Palm Jumeirah"
      ],
      location: "Palm Jumeirah",
      priceRange: "500-1500€"
    },
    {
      id: 3,
      name: "Armani Hotel Dubai",
      stars: 5,
      description: "Dans Burj Khalifa (plus haute tour du monde), design Giorgio Armani minimaliste, vue panoramique record.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Burj Khalifa", "Spa Armani", "Restaurants", "Lounge", "Conciergerie"],
      highlights: [
        "Dans la tour la plus haute du monde (828m)",
        "Design Giorgio Armani exclusif",
        "Vue panoramique depuis Burj Khalifa"
      ],
      location: "Downtown Dubai, Burj Khalifa",
      priceRange: "600-1200€"
    },
    {
      id: 4,
      name: "Bulgari Resort Dubai",
      stars: 5,
      description: "Resort ultra-luxe sur île artificielle en forme d'hippocampe, design italien Bulgari, yacht club et marina privée.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Plage privée", "Yacht club", "Spa Bulgari", "Restaurants italiens", "Marina"],
      highlights: [
        "Île artificielle exclusive en forme d'hippocampe",
        "Design Bulgari italien sophistiqué",
        "Yacht club et marina privée"
      ],
      location: "Jumeira Bay Island",
      priceRange: "800-2000€"
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Hôtels de Luxe à <span className="text-yellow-200">Dubai</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Burj Al Arab 7★ • Atlantis The Palm • Armani • Bulgari • Luxe extrême
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire-reservation" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <HotelBookingForm />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Dubai : Capitale Mondiale du Luxe Hôtelier
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                <strong>Dubai</strong>, émirat des superlatifs, abrite certains des <strong>hôtels les plus luxueux au monde</strong>.
                Le <strong>Burj Al Arab</strong>, seul hôtel <strong>"7 étoiles"</strong> au monde, domine avec son architecture
                iconique en forme de voile et son <strong>service butler personnalisé 24/7</strong>. Chaque suite est un duplex
                avec vue sur le <strong>Golfe Persique</strong>, décoration en feuilles d'or, et accès à des restaurants sous-marins.
              </p>

              <p className="mb-6">
                L'<strong>Atlantis The Palm</strong>, complexe spectaculaire sur <strong>Palm Jumeirah</strong>, offre
                l'<strong>Aquaventure Waterpark</strong> (l'un des plus grands parcs aquatiques du monde) et
                l'<strong>aquarium The Lost Chambers</strong> avec 65 000 poissons. Idéal pour les familles luxe avec
                <strong> 20+ restaurants</strong>, plage privée d'1km et animations continues.
              </p>

              <p className="mb-6">
                L'<strong>Armani Hotel</strong> dans le <strong>Burj Khalifa</strong> (plus haute tour du monde, 828m)
                propose un design minimaliste signé <strong>Giorgio Armani</strong> avec vue vertigineuse sur Dubai.
                Le <strong>Bulgari Resort</strong> sur une <strong>île artificielle privée</strong> en forme d'hippocampe
                combine élégance italienne, yacht club et <strong>marina exclusive</strong>.
              </p>

              <p className="mb-6">
                Ces palaces offrent <strong>plages privées</strong>, <strong>spas de classe mondiale</strong>,
                <strong> restaurants étoilés</strong>, et expériences uniques : hélicoptère privé, shopping dans
                <strong> Dubai Mall</strong> (plus grand centre commercial du monde), ski indoor à <strong>Ski Dubai</strong>,
                ou safari dans le désert arabique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Hôtels de Luxe Exceptionnels à Dubai
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dubaiHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-72">
                  <Image
                    src={hotel.imageUrl}
                    alt={`Hotel ${hotel.name} Dubai - Luxe ${hotel.stars} etoiles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center bg-amber-400 px-3 py-1 rounded-full">
                    <Star className="text-gray-900 mr-1 fill-gray-900" size={16} />
                    <span className="font-bold text-gray-900">{hotel.stars} ★</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 flex items-center text-sm mb-4">
                    <MapPin size={16} className="mr-2 text-amber-500" />
                    {hotel.location}
                  </p>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {hotel.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Points forts :</h4>
                    <ul className="space-y-1">
                      {hotel.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <Sparkles size={14} className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Équipements :</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 4).map((amenity, i) => (
                        <span key={i} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xl font-bold text-amber-600 mb-4">
                    À partir de {hotel.priceRange}/nuit
                  </p>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition-colors font-medium"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Où Loger à Dubai : Les Meilleurs Quartiers
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏝️ Palm Jumeirah - Île Artificielle</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Île artificielle en forme de palmier</strong>, visible depuis l'espace. Abrite
                  l'<strong>Atlantis The Palm</strong>, <strong>Bulgari Resort</strong>, et hôtels luxe.
                  Idéal pour : plages privées, vie de resort, Aquaventure Park, restaurants vue mer.
                  <strong> Monorail</strong> pour Downtown Dubai.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏙️ Downtown Dubai - Burj Khalifa</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier du <strong>Burj Khalifa</strong> (828m, plus haute tour du monde) et
                  <strong> Dubai Mall</strong> (plus grand centre commercial). <strong>Armani Hotel</strong>
                  dans Burj Khalifa. Idéal pour : shopping luxe, fontaines spectaculaires, restaurants étoilés,
                  vie urbaine.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏖️ Jumeirah Beach - Front de Mer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Plage emblématique avec vue sur <strong>Burj Al Arab</strong> (voile iconique).
                  Quartier des <strong>hôtels 5-7 étoiles en bord de mer</strong>. Idéal pour : plage,
                  vue Burj Al Arab, <strong>Souk Madinat Jumeirah</strong>, ambiance resort.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🚢 Dubai Marina - Gratte-ciel Moderne</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier de <strong>gratte-ciel ultramodernes</strong> autour d'une marina artificielle.
                  Idéal pour : vie nocturne, <strong>restaurants internationaux</strong>, shopping Dubai Marina Mall,
                  promenades marina, proximité <strong>JBR Beach</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Questions Fréquentes - Hôtels Dubai
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                    {faq.name}
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Réservez votre Expérience Luxe à Dubai
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tarifs exclusifs négociés • Service VIP • Assistance francophone 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulaire-reservation"
              className="inline-block px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Demander un devis
            </a>
            <Link
              href="/hotels"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Voir tous nos hôtels
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

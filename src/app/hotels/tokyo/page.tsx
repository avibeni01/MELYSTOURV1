// src/app/hotels/tokyo/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Star, Wifi, Coffee, Utensils, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe Tokyo 2025 : Aman Park Hyatt Peninsula Japon',
  description: 'Reservez les meilleurs hotels de luxe a Tokyo : Aman Tokyo spa onsen, Park Hyatt New York Bar, Peninsula jardins imperiaux. 5 etoiles, vue Mont Fuji, service japonais d\'exception.',
  canonical: '/hotels/tokyo',
  keywords: [
    'hotel tokyo',
    'hotel luxe tokyo',
    'aman tokyo',
    'park hyatt tokyo',
    'peninsula tokyo',
    'hotel 5 etoiles tokyo',
    'hotel tokyo vue mont fuji',
    'ryokan luxe tokyo',
    'onsen hotel tokyo',
    'reservation hotel tokyo',
    'palace hotel tokyo',
    'hotel shibuya',
    'hotel shinjuku',
    'hotel ginza'
  ],
  images: [{
    url: '/images/og/hotels-tokyo.jpg',
    width: 1200,
    height: 630,
    alt: 'Hotels de luxe Tokyo - Aman, Park Hyatt, Peninsula'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels/tokyo')
  }
})

export default function TokyoHotelsPage() {
  // Breadcrumbs
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Tokyo', url: '/hotels/tokyo' },
  ])

  // Review Schema
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Elynor Tours - Hotels Tokyo',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      reviewCount: '127'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Benjamin'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Chaque ete nous louons notre voiture avec l\'agence Elynor Tours. C\'est simple, rapide et a prix defiant toute concurrence.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Super !!! J\'ai fait appel a leurs services pour louer une voiture lors de ma derniere visite en Israel. Ce fut simple et agreable.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Patrice'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Top vraiment elle gere tout et toujours au meilleur prix !'
      }
    ]
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les meilleurs hotels de luxe a Tokyo ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs hotels 5 etoiles a Tokyo sont l\'Aman Tokyo avec son spa onsen urbain au 33e etage, le Park Hyatt Tokyo rendu celebre par Lost in Translation avec le New York Bar legendaire, et le Peninsula Tokyo face aux jardins imperiaux avec service japonais d\'exception.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel hotel a Tokyo offre la meilleure vue sur le Mont Fuji ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le Park Hyatt Tokyo offre par temps clair une vue spectaculaire sur le Mont Fuji depuis ses etages superieurs (41e-52e etages). L\'Aman Tokyo au 33e etage offre egalement une vue panoramique a 360 degres sur Tokyo et parfois le Fuji.'
        }
      },
      {
        '@type': 'Question',
        name: 'Y a-t-il des hotels avec onsen (bains japonais) a Tokyo ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, l\'Aman Tokyo dispose d\'un spa avec onsen traditionnel urbain au 33e etage. Le Peninsula Tokyo offre egalement des bains japonais dans son spa. Ces etablissements combinent tradition onsen et luxe contemporain.'
        }
      },
      {
        '@type': 'Question',
        name: 'Dans quel quartier loger a Tokyo pour un sejour luxe ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs quartiers pour hotels de luxe a Tokyo sont : Marunouchi (Peninsula, vue jardins imperiaux), Shinjuku (Park Hyatt, gratte-ciel), et Otemachi (Aman Tokyo). Ces quartiers offrent acces facile metro, restaurants etoiles et shopping haut de gamme.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel est le prix moyen d\'un hotel 5 etoiles a Tokyo ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les hotels 5 etoiles a Tokyo coutent entre 600€ et 1500€ par nuit selon la saison. L\'Aman Tokyo est le plus exclusif (1000-1500€), le Park Hyatt 700-1200€, et le Peninsula 600-1000€. Reservez 2-3 mois a l\'avance pour meilleurs tarifs.'
        }
      }
    ]
  }

  const tokyoHotels = [
    {
      id: 1,
      name: "Aman Tokyo",
      stars: 5,
      description: "Sanctuaire zen dans la tour Otemachi, design minimaliste japonais luxueux avec spa onsen au 33e étage.",
      imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
      amenities: ["Spa onsen", "Piscine 33e étage", "Restaurant kaiseki", "Bibliothèque", "Yoga"],
      highlights: [
        "Design zen minimaliste authentique",
        "Vue panoramique 360° sur Tokyo",
        "Onsen traditionnel urbain au 33e étage"
      ],
      location: "Otemachi, Chiyoda",
      priceRange: "1000-1500€"
    },
    {
      id: 2,
      name: "Park Hyatt Tokyo",
      stars: 5,
      description: "Gratte-ciel iconique de Shinjuku (52 étages), New York Bar légendaire du film Lost in Translation.",
      imageUrl: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800",
      amenities: ["New York Bar", "Spa", "Piscine 47e étage", "Restaurant français", "Club Lounge"],
      highlights: [
        "New York Bar culte de Lost in Translation",
        "Vue Mont Fuji par temps clair",
        "Design contemporain raffiné"
      ],
      location: "Shinjuku, West Tower",
      priceRange: "700-1200€"
    },
    {
      id: 3,
      name: "The Peninsula Tokyo",
      stars: 5,
      description: "Luxe contemporain face aux jardins impériaux, service japonais d'exception et attention aux détails.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      amenities: ["Spa", "Piscine", "Restaurants étoilés", "Vue jardins impériaux", "Butler"],
      highlights: [
        "Vue privilégiée sur Palais Impérial",
        "Service japonais légendaire",
        "Spa avec bains japonais traditionnels"
      ],
      location: "Marunouchi, Chiyoda",
      priceRange: "600-1000€"
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={reviewSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Hôtels de Luxe à <span className="text-yellow-300">Tokyo</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Aman • Park Hyatt • Peninsula • Tradition et modernité japonaise
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de réservation */}
      <section id="formulaire-reservation" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <HotelBookingForm />
        </div>
      </section>

      {/* Introduction Tokyo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Pourquoi Choisir un Hôtel de Luxe à Tokyo ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                <strong>Tokyo</strong>, capitale futuriste du Japon, offre une expérience hôtelière unique mêlant
                <strong> tradition japonaise millénaire</strong> et <strong>modernité ultra-contemporaine</strong>.
                Les hôtels 5 étoiles de Tokyo se distinguent par leur <strong>service d'exception japonais</strong>
                (omotenashi), leur <strong>design zen minimaliste</strong>, et leurs <strong>vues spectaculaires</strong>
                sur la mégalopole et parfois le <strong>Mont Fuji</strong>.
              </p>

              <p className="mb-6">
                L'<strong>Aman Tokyo</strong>, sanctuaire urbain au 33e étage de la tour Otemachi, propose un
                <strong> spa onsen traditionnel</strong> avec vue panoramique à 360° sur Tokyo. Le
                <strong> Park Hyatt Tokyo</strong>, rendu célèbre par le film <em>Lost in Translation</em>,
                offre le légendaire <strong>New York Bar</strong> et une vue imprenable sur le Mont Fuji par temps clair.
                Le <strong>Peninsula Tokyo</strong> face aux <strong>jardins impériaux</strong> incarne l'excellence
                du service japonais avec attention aux moindres détails.
              </p>

              <p className="mb-6">
                Ces palaces combinent <strong>restaurants kaiseki étoilés</strong>, <strong>spas avec onsen</strong>,
                <strong> piscines en altitude</strong>, et technologies de pointe. Situés dans les quartiers prestigieux
                de <strong>Marunouchi</strong>, <strong>Shinjuku</strong> et <strong>Otemachi</strong>, ils offrent
                un accès privilégié aux <strong>temples</strong>, <strong>quartiers branchés</strong> (Shibuya, Ginza),
                et <strong>restaurants trois étoiles Michelin</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Hôtels 5 Étoiles Sélectionnés à Tokyo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tokyoHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={hotel.imageUrl}
                    alt={`Hotel ${hotel.name} Tokyo - Luxe ${hotel.stars} etoiles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center bg-yellow-400 px-3 py-1 rounded-full">
                    <Star className="text-gray-900 mr-1 fill-gray-900" size={16} />
                    <span className="font-bold text-gray-900">{hotel.stars} ★</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 flex items-center text-sm mb-4">
                    <MapPin size={16} className="mr-2 text-rose-500" />
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
                          <Sparkles size={14} className="text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Équipements :</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 4).map((amenity, i) => (
                        <span key={i} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xl font-bold text-rose-600 mb-4">
                    À partir de {hotel.priceRange}/nuit
                  </p>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg transition-colors font-medium"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide des Quartiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Où Loger à Tokyo : Guide des Quartiers
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏯 Marunouchi & Jardins Impériaux</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier d'affaires chic avec <strong>vue sur le Palais Impérial</strong>. Le <strong>Peninsula Tokyo</strong>
                  y est situé. Idéal pour : business, shopping haut de gamme, proximité gare de Tokyo.
                  Accès direct à <strong>Ginza</strong> (5 min).
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏙️ Shinjuku - Gratte-ciel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier des <strong>gratte-ciel spectaculaires</strong>. Le <strong>Park Hyatt Tokyo</strong>
                  domine au 52e étage avec le <strong>New York Bar</strong> culte. Idéal pour : vie nocturne,
                  restaurants, <strong>vue Mont Fuji</strong>, shopping (Shinjuku Station). Ambiance futuriste.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🗼 Otemachi - Business Zen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier business ultra-moderne. L'<strong>Aman Tokyo</strong> y propose un <strong>sanctuaire zen</strong>
                  au 33e étage avec <strong>onsen urbain</strong>. Idéal pour : calme absolu, spa de luxe,
                  vue panoramique 360°, proximité Tokyo Station.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🛍️ Ginza - Luxe et Shopping</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier du <strong>luxe et shopping haut de gamme</strong> (Chanel, Hermès, Dior).
                  Idéal pour : shopping de luxe, <strong>restaurants étoilés Michelin</strong>, théâtre Kabuki,
                  vie nocturne chic. Proche Marunouchi (10 min à pied).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Nos Clients Témoignent
          </h2>
          <p className="text-center text-gray-600 mb-12">⭐⭐⭐⭐⭐ 5/5 - Basé sur 127+ avis Google</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold mr-4">
                  BL
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Benjamin</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Chaque été nous louons notre voiture avec l'agence Elynor Tours. C'est simple,
                rapide et à prix défiant toute concurrence."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold mr-4">
                  MD
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Super !!! J'ai fait appel à leurs services pour louer une voiture lors de ma
                dernière visite en Israel. Ce fut simple et agréable."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold mr-4">
                  PL
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Patrice</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Top vraiment elle gère tout et toujours au meilleur prix !"
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://g.co/kgs/X2iiAx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Voir tous nos avis Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Questions Fréquentes - Hôtels Tokyo
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quels sont les meilleurs hôtels de luxe à Tokyo ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Les meilleurs hôtels 5 étoiles à Tokyo sont l'<strong>Aman Tokyo</strong> avec son spa onsen urbain au 33e étage,
                  le <strong>Park Hyatt Tokyo</strong> rendu célèbre par Lost in Translation avec le New York Bar légendaire,
                  et le <strong>Peninsula Tokyo</strong> face aux jardins impériaux avec service japonais d'exception.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quel hôtel à Tokyo offre la meilleure vue sur le Mont Fuji ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Le <strong>Park Hyatt Tokyo</strong> offre par temps clair une vue spectaculaire sur le Mont Fuji
                  depuis ses étages supérieurs (41e-52e étages). L'<strong>Aman Tokyo</strong> au 33e étage offre également
                  une vue panoramique à 360° sur Tokyo et parfois le Fuji.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Y a-t-il des hôtels avec onsen (bains japonais) à Tokyo ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Oui, l'<strong>Aman Tokyo</strong> dispose d'un spa avec <strong>onsen traditionnel urbain</strong> au 33e étage.
                  Le <strong>Peninsula Tokyo</strong> offre également des bains japonais dans son spa. Ces établissements
                  combinent tradition onsen et luxe contemporain.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Dans quel quartier loger à Tokyo pour un séjour luxe ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Les meilleurs quartiers pour hôtels de luxe à Tokyo sont : <strong>Marunouchi</strong> (Peninsula, vue jardins impériaux),
                  <strong>Shinjuku</strong> (Park Hyatt, gratte-ciel), et <strong>Otemachi</strong> (Aman Tokyo).
                  Ces quartiers offrent accès facile métro, restaurants étoilés et shopping haut de gamme.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quel est le prix moyen d'un hôtel 5 étoiles à Tokyo ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Les hôtels 5 étoiles à Tokyo coûtent entre <strong>600€ et 1500€ par nuit</strong> selon la saison.
                  L'Aman Tokyo est le plus exclusif (1000-1500€), le Park Hyatt 700-1200€, et le Peninsula 600-1000€.
                  Réservez <strong>2-3 mois à l'avance</strong> pour meilleurs tarifs.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Réserver votre Hôtel de Luxe à Tokyo ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laissez-nous vous trouver le palace idéal avec nos tarifs négociés exclusifs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulaire-reservation"
              className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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

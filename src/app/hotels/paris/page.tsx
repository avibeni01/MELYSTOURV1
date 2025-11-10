// src/app/hotels/paris/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe Paris 2025 : Bristol Plaza Athenee Ritz George V',
  description: 'Reservez les meilleurs palaces parisiens : Le Bristol 3 etoiles Michelin, Plaza Athenee avenue Montaigne, Ritz Place Vendome, Four Seasons George V. Luxe francais, vue Tour Eiffel, gastronomie.',
  canonical: '/hotels/paris',
  keywords: [
    'hotel paris',
    'palace paris',
    'hotel luxe paris',
    'le bristol paris',
    'plaza athenee paris',
    'ritz paris',
    'george v paris',
    'hotel 5 etoiles paris',
    'hotel paris centre',
    'hotel champs elysees',
    'hotel paris vue tour eiffel',
    'reservation hotel paris',
    'palace parisien',
    'hotel avenue montaigne'
  ],
  images: [{
    url: '/images/og/hotels-paris.jpg',
    width: 1200,
    height: 630,
    alt: 'Palaces parisiens - Le Bristol, Plaza Athenee, Ritz'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels/paris')
  }
})

export default function ParisHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Paris', url: '/hotels/paris' },
  ])

  // Review Schema
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Elynor Tours - Hotels Paris',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les meilleurs palaces parisiens ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs palaces parisiens sont Le Bristol avec son restaurant Epicure 3 etoiles Michelin et jardin francais, le Plaza Athenee sur l\'avenue Montaigne avec spa Dior exclusif, le Ritz Place Vendome institution historique depuis 1898, et le Four Seasons George V avec 3 restaurants etoiles Michelin.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel palace parisien a un restaurant 3 etoiles Michelin ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le Bristol Paris abrite le restaurant Epicure 3 etoiles Michelin du chef Eric Frechon. Le Four Seasons George V possede egalement 3 restaurants etoiles : Le Cinq (3 etoiles), L\'Orangerie (1 etoile) et Le George (1 etoile). Total de 5 etoiles Michelin sous un meme toit.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel hotel parisien offre la meilleure vue sur la Tour Eiffel ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le Shangri-La Paris (ancien palais du prince Roland Bonaparte) offre une vue exceptionnelle sur la Tour Eiffel depuis ses chambres et suites. Le Plaza Athenee propose egalement des suites avec vue Tour Eiffel. Le Peninsula Paris offre vue depuis son rooftop L\'Oiseau Blanc.'
        }
      },
      {
        '@type': 'Question',
        name: 'Combien coute une nuit dans un palace parisien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les palaces parisiens coutent entre 800€ et 3000€ par nuit selon categorie et saison. Le Bristol et Plaza Athenee : 900-2000€, le Ritz Paris 1000-2500€, le George V 1000-3000€. Suites imperiales peuvent depasser 10000€/nuit. Reservez 2-3 mois a l\'avance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quelle est la meilleure periode pour visiter Paris et profiter des palaces ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleures periodes sont avril-juin (printemps, 15-25°C) et septembre-octobre (automne, doux). Evitez juillet-aout (tourisme de masse, chaleur). Decembre est magique (marches de Noel, illuminations) mais plus cher. Janvier-fevrier offrent meilleurs tarifs palaces.'
        }
      }
    ]
  }

  const parisHotels = [
    {
      id: 1,
      name: "Le Bristol Paris",
      stars: 5,
      description: "Palace emblématique avec restaurant Epicure 3 étoiles Michelin (Eric Frechon), jardin français et piscine sur le toit.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Epicure 3★ Michelin", "Spa", "Jardin français", "Piscine rooftop", "Butler"],
      highlights: [
        "Restaurant Epicure 3 étoiles Michelin",
        "Jardin français unique en plein Paris",
        "Piscine sur le toit avec vue panoramique"
      ],
      location: "8e arr., Faubourg Saint-Honoré",
      priceRange: "900-2000€"
    },
    {
      id: 2,
      name: "Hôtel Plaza Athénée",
      stars: 5,
      description: "Palace légendaire avenue Montaigne, haute couture du luxe parisien avec spa Dior Institut exclusif.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["5 restaurants", "Spa Dior", "Cour intérieure", "Bar", "Conciergerie"],
      highlights: [
        "Spa Dior Institut exclusif mondialement unique",
        "Avenue Montaigne - cœur de la haute couture",
        "Cour parisienne iconique avec balcons fleuris"
      ],
      location: "8e arr., Avenue Montaigne",
      priceRange: "900-2000€"
    },
    {
      id: 3,
      name: "Ritz Paris",
      stars: 5,
      description: "Institution historique Place Vendôme depuis 1898, symbole du luxe français, Coco Chanel y vécut 37 ans.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Spa Chanel", "École Ritz Escoffier", "Bar Hemingway", "Jardin", "Piscine"],
      highlights: [
        "Symbole historique du luxe parisien depuis 1898",
        "Suite Coco Chanel (vécut 37 ans au Ritz)",
        "Bar Hemingway légendaire et École de cuisine"
      ],
      location: "1er arr., Place Vendôme",
      priceRange: "1000-2500€"
    },
    {
      id: 4,
      name: "Four Seasons George V",
      stars: 5,
      description: "Palace Art Déco avenue George V avec 5 étoiles Michelin réparties dans 3 restaurants dont Le Cinq 3★.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["3 restaurants étoilés", "Spa", "Cour fleurie", "Piscine", "Galerie d'art"],
      highlights: [
        "5 étoiles Michelin : Le Cinq (3★), L'Orangerie, Le George",
        "Compositions florales monumentales Jeff Leatham",
        "Art Déco années 1920 restauré"
      ],
      location: "8e arr., Avenue George V",
      priceRange: "1000-3000€"
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={reviewSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Palaces de Luxe à <span className="text-yellow-300">Paris</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Bristol • Plaza Athénée • Ritz • George V • Gastronomie étoilée
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
              Les Palaces Parisiens : Excellence à la Française
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                <strong>Paris</strong>, capitale mondiale du luxe, abrite les <strong>palaces les plus prestigieux</strong>
                au monde. Le <strong>Bristol Paris</strong>, palace emblématique du Faubourg Saint-Honoré, éblouit avec
                son restaurant <strong>Epicure 3 étoiles Michelin</strong> (chef Eric Frechon), son <strong>jardin français</strong>
                unique en plein Paris, et sa <strong>piscine sur le toit</strong> avec vue panoramique.
              </p>

              <p className="mb-6">
                Le <strong>Plaza Athénée</strong> sur la prestigieuse <strong>avenue Montaigne</strong> (cœur de la haute couture)
                incarne l'élégance parisienne avec son <strong>spa Dior Institut exclusif</strong> (seul au monde),
                sa cour intérieure iconique aux balcons fleuris de géraniums rouges, et ses <strong>5 restaurants</strong>
                dont le restaurant Alain Ducasse.
              </p>

              <p className="mb-6">
                Le <strong>Ritz Paris</strong> <strong>Place Vendôme</strong>, institution historique depuis 1898,
                est le symbole absolu du luxe français. <strong>Coco Chanel</strong> y vécut 37 ans dans sa suite.
                Le palace abrite le <strong>Bar Hemingway</strong> (Ernest Hemingway y était résident), le
                <strong> spa Chanel</strong>, et l'<strong>École Ritz Escoffier</strong> de cuisine gastronomique.
              </p>

              <p className="mb-6">
                Le <strong>Four Seasons George V</strong>, palace Art Déco avenue George V, détient le record de
                <strong> 5 étoiles Michelin</strong> sous un même toit : <strong>Le Cinq</strong> (3★),
                <strong> L'Orangerie</strong> (1★) et <strong>Le George</strong> (1★). Ses compositions florales
                monumentales signées <strong>Jeff Leatham</strong> sont légendaires.
              </p>

              <p className="mb-6">
                Ces palaces parisiens combinent <strong>gastronomie étoilée</strong>, <strong>spas luxueux</strong>
                (Dior, Chanel, Guerlain), <strong>service français d'exception</strong>, et emplacements privilégiés
                près des <strong>Champs-Élysées</strong>, <strong>avenue Montaigne</strong>, et <strong>Louvre</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Palaces Parisiens Sélectionnés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {parisHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-72">
                  <Image
                    src={hotel.imageUrl}
                    alt={`Palace ${hotel.name} Paris - Luxe ${hotel.stars} etoiles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center bg-blue-500 px-3 py-1 rounded-full">
                    <Star className="text-white mr-1 fill-white" size={16} />
                    <span className="font-bold text-white">{hotel.stars} ★ Palace</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 flex items-center text-sm mb-4">
                    <MapPin size={16} className="mr-2 text-blue-500" />
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
                          <Sparkles size={14} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Équipements :</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xl font-bold text-blue-600 mb-4">
                    À partir de {hotel.priceRange}/nuit
                  </p>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium"
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
              Quartiers Prestigieux de Paris
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">👑 8e arr. - Champs-Élysées & Triangle d'Or</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier le plus luxueux de Paris avec <strong>avenue Montaigne</strong> (haute couture),
                  <strong> Champs-Élysées</strong>, et <strong>Faubourg Saint-Honoré</strong>.
                  Le Bristol, Plaza Athénée et George V y sont situés. Shopping de luxe (Dior, Chanel, Louis Vuitton),
                  restaurants étoilés, <strong>Arc de Triomphe</strong>.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">💎 1er arr. - Louvre & Place Vendôme</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cœur historique de Paris. <strong>Place Vendôme</strong> (joaillerie de luxe) avec le Ritz Paris.
                  Proximité <strong>musée du Louvre</strong>, <strong>Tuileries</strong>, <strong>Opéra Garnier</strong>.
                  Quartier royal et élégant, shopping haute joaillerie (Cartier, Van Cleef & Arpels).
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🎨 6e arr. - Saint-Germain-des-Prés</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier intellectuel et artistique de la <strong>Rive Gauche</strong>. Cafés historiques
                  (Flore, Deux Magots), <strong>galeries d'art</strong>, <strong>librairies anciennes</strong>.
                  Ambiance bohème chic, proximité <strong>Luxembourg</strong>, shopping boutiques créateurs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🗼 7e arr. - Tour Eiffel & Invalides</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartier de la <strong>Tour Eiffel</strong>, <strong>Invalides</strong>, et <strong>musée d'Orsay</strong>.
                  Palaces avec vue Tour Eiffel (Shangri-La). Quartier résidentiel élégant, <strong>Champ de Mars</strong>,
                  restaurants gastronomiques, ambiance parisienne authentique.
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
              Questions Fréquentes - Palaces Paris
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                    {faq.name}
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.acceptedAnswer.text.replace(/etoiles/g, 'étoiles').replace(/egalement/g, 'également').replace(/possede/g, 'possède') }} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vivez l'Excellence des Palaces Parisiens
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Gastronomie étoilée • Spas de luxe • Service à la française • Tarifs négociés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulaire-reservation"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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

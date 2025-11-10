// src/app/blog/top-10-hotels-luxe-mer-morte/page.tsx
import type { Metadata } from 'next'
import { buildMetadata, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Sparkles, Calendar } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Top 10 Hotels Luxe Mer Morte 2025 : Spa Dead Sea Israel',
  description: 'Decouvrez les 10 meilleurs hotels spa a la Mer Morte : David Dead Sea Resort, Leonardo Club, Herods Dead Sea, Isrotel. Soins mineraux, boues therapeutiques, piscines salines. Guide complet 2025.',
  canonical: '/blog/top-10-hotels-luxe-mer-morte',
  keywords: [
    'hotel mer morte',
    'spa mer morte',
    'dead sea hotel',
    'hotel luxe mer morte',
    'david dead sea resort',
    'leonardo club dead sea',
    'herods dead sea',
    'hotel mer morte israel',
    'spa dead sea',
    'soins mer morte',
    'hotel spa israel',
    'mer morte all inclusive'
  ]
})

export default function Top10HotelsMerMortePage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Top 10 Hotels Luxe Mer Morte', url: '/blog/top-10-hotels-luxe-mer-morte' },
  ])

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Top 10 Hotels Luxe Mer Morte 2025 : Guide Complet Spa Dead Sea',
    description: 'Découvrez les 10 meilleurs hôtels spa à la Mer Morte avec soins minéraux, boues thérapeutiques et piscines salines.',
    author: {
      '@type': 'Organization',
      name: 'Elynor Tours'
    },
    datePublished: '2025-01-15',
    dateModified: '2025-01-15'
  }

  const hotels = [
    {
      rank: 1,
      name: "David Dead Sea Resort & Spa",
      stars: 5,
      description: "LE resort spa luxueux de référence à la Mer Morte. Spécialisé dans soins thérapeutiques aux minéraux.",
      imageUrl: "/images/hotels/mer-morte/david-dead-sea.webp",
      highlights: [
        "Spa thermal avec produits minéraux exclusifs de la Mer Morte",
        "Accès direct plage privée pour flotter dans l'eau hypersalée",
        "Traitements thérapeutiques psoriasis, arthrite, stress"
      ],
      price: "350-600€",
      why: "Le plus luxueux et spécialisé en soins thérapeutiques. Spa de classe mondiale avec dermatologues sur place."
    },
    {
      rank: 2,
      name: "Leonardo Club Dead Sea All-Inclusive",
      stars: 4,
      description: "Resort familial all-inclusive idéal pour découvrir la Mer Morte sans se ruiner. Excellent rapport qualité-prix.",
      imageUrl: "/images/hotels/mer-morte/leonardo-club-dead-sea.webp",
      highlights: [
        "Formule tout compris : repas, boissons, activités incluses",
        "Kids club avec animations pour enfants",
        "Spa avec soins aux boues et minéraux de la Mer Morte"
      ],
      price: "250-450€",
      why: "Meilleur rapport qualité-prix. Formule all-inclusive parfaite pour familles. Spa complet à tarif raisonnable."
    },
    {
      rank: 3,
      name: "Herods Dead Sea",
      stars: 5,
      description: "Palace luxueux avec architecture spectaculaire inspirée de Pétra. Piscines infinity vue mer.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      highlights: [
        "Architecture majestueuse inspirée de l'ancienne Pétra",
        "Piscines infinity avec vue panoramique Mer Morte",
        "Spa luxueux avec hammam et soins orientaux"
      ],
      price: "400-700€",
      why: "Le plus spectaculaire architecturalement. Service ultra-premium. Idéal pour lune de miel ou séjour romantique."
    },
    {
      rank: 4,
      name: "Isrotel Dead Sea Hotel",
      stars: 4,
      description: "Resort moderne avec excellent spa et formule demi-pension. Idéal pour cure bien-être.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      highlights: [
        "Spa avec piscines d'eau salée chauffées",
        "Programme cure bien-être avec suivi médical",
        "Buffet petit-déjeuner et dîner inclus"
      ],
      price: "280-500€",
      why: "Excellent pour cures bien-être longue durée. Spa médical professionnel. Chaîne Isrotel fiable."
    },
    {
      rank: 5,
      name: "Crowne Plaza Dead Sea",
      stars: 5,
      description: "Hôtel moderne avec spa complet et plage privée. Business et loisirs.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      highlights: [
        "Plage privée aménagée avec douches eau douce",
        "Spa complet avec sauna, hammam, jacuzzi",
        "Centre d'affaires pour séjours professionnels"
      ],
      price: "300-550€",
      why: "Polyvalent : parfait pour business et loisirs. Standard international Crowne Plaza. Moderne et confortable."
    },
    {
      rank: 6,
      name: "Lot Spa Hotel",
      stars: 4,
      description: "Spa hotel authentique avec soins thérapeutiques traditionnels. Ambiance familiale.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      highlights: [
        "Soins thérapeutiques traditionnels aux boues",
        "Piscines d'eau minérale chauffées toute l'année",
        "Ambiance familiale et chaleureuse"
      ],
      price: "200-400€",
      why: "Authentique et traditionnel. Prix abordables. Idéal pour cures prolongées sans luxe excessif."
    },
    {
      rank: 7,
      name: "Hod Hamidbar Resort & Spa",
      stars: 4,
      description: "Resort all-inclusive style oasis dans le désert. Piscines luxuriantes.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      highlights: [
        "Piscines avec végétation luxuriante (oasis)",
        "All-inclusive avec restaurants multiples",
        "Spa avec soins Dead Sea Premium"
      ],
      price: "280-480€",
      why: "Ambiance oasis unique. All-inclusive pratique. Piscines magnifiques dans cadre désertique."
    },
    {
      rank: 8,
      name: "Prima Oasis Dead Sea",
      stars: 4,
      description: "Hôtel confortable avec bon rapport qualité-prix. Idéal première découverte Mer Morte.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      highlights: [
        "Tarifs compétitifs pour découvrir la Mer Morte",
        "Spa basique mais efficace avec boues",
        "Proche de tous les hôtels (partage installations plage)"
      ],
      price: "180-350€",
      why: "Meilleur budget. Bon pour court séjour découverte. Permet de tester Mer Morte sans investissement majeur."
    },
    {
      rank: 9,
      name: "Daniel Dead Sea Hotel",
      stars: 3,
      description: "Hôtel économique pour budget serré. Spa simple mais fonctionnel.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      highlights: [
        "Prix très abordables",
        "Accès plage publique Mer Morte",
        "Spa basique avec piscine eau salée"
      ],
      price: "150-280€",
      why: "Le plus économique. Parfait pour backpackers ou budget limité. Permet quand même d'expérimenter Mer Morte."
    },
    {
      rank: 10,
      name: "Ein Bokek Resort Village",
      stars: 3,
      description: "Appartements et bungalows pour séjours prolongés. Idéal familles ou groupes.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      highlights: [
        "Appartements avec kitchenette pour longs séjours",
        "Idéal pour familles nombreuses ou groupes",
        "Accès plage publique Ein Bokek"
      ],
      price: "120-250€",
      why: "Flexibilité appartements. Économique pour longs séjours. Kitchenette pratique pour cuisiner."
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={article} />

      <article className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <Calendar size={16} />
              <span>15 janvier 2025</span>
              <span>•</span>
              <span>Guide Complet</span>
              <span>•</span>
              <span>12 min de lecture</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top 10 Meilleurs Hotels Luxe à la Mer Morte 2025
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Guide complet des meilleurs hôtels spa à la <strong>Mer Morte</strong>, point le plus bas de la planète (-430m).
              Découvrez nos recommandations pour profiter des <strong>soins thérapeutiques</strong>, <strong>boues curatives</strong>
              et <strong>eaux hypersalées</strong> dans le luxe.
            </p>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl mb-8">
              <Image
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200"
                alt="Mer Morte Israel - Hotels Spa Luxe"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi la Mer Morte est Unique au Monde ?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                La <strong>Mer Morte</strong>, située à <strong>-430 mètres sous le niveau de la mer</strong>
                (point le plus bas de la planète), est célèbre pour ses <strong>propriétés thérapeutiques uniques</strong>.
                Son eau contient <strong>33% de sel</strong> (10x plus que l'océan), permettant de
                <strong> flotter naturellement</strong> sans effort !
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Les <strong>minéraux de la Mer Morte</strong> (magnésium, potassium, calcium, brome) sont reconnus
                pour traiter <strong>psoriasis</strong>, <strong>arthrite</strong>, <strong>problèmes respiratoires</strong>,
                et <strong>stress</strong>. L'air enrichi en oxygène et les <strong>boues noires curatives</strong>
                complètent l'expérience thérapeutique.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Conseil d'Expert</h3>
                <p className="text-blue-800">
                  Réservez minimum <strong>3-4 nuits</strong> pour profiter pleinement des soins spa.
                  La meilleure période est <strong>mars-mai et septembre-novembre</strong> (climat idéal 25-30°C).
                  Évitez juillet-août (40-45°C).
                </p>
              </div>
            </div>
          </div>

          {/* Top 10 Hotels */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              🏆 Top 10 Hotels Spa Mer Morte
            </h2>

            <div className="space-y-12">
              {hotels.map((hotel) => (
                <div key={hotel.rank} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <Image
                        src={hotel.imageUrl}
                        alt={`${hotel.name} Mer Morte - Hotel Spa ${hotel.stars} etoiles`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                        #{hotel.rank}
                      </div>
                      <div className="absolute top-4 right-4 flex items-center bg-yellow-400 px-3 py-1 rounded-full">
                        <Star className="text-gray-900 mr-1 fill-gray-900" size={16} />
                        <span className="font-bold text-gray-900">{hotel.stars} ★</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {hotel.name}
                      </h3>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {hotel.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Sparkles size={18} className="text-blue-600 mr-2" />
                          Points forts
                        </h4>
                        <ul className="space-y-2">
                          {hotel.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start">
                              <span className="text-blue-600 mr-2">✓</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Pourquoi le choisir ?</h4>
                        <p className="text-sm text-gray-700 italic">
                          {hotel.why}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <p className="text-sm text-gray-600">À partir de</p>
                          <p className="text-2xl font-bold text-blue-600">{hotel.price}/nuit</p>
                        </div>

                        <Link
                          href="/contact"
                          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                        >
                          Réserver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guide Pratique */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Guide Pratique Mer Morte
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">🗓️ Quelle est la meilleure période ?</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li><strong>Mars-Mai</strong> : 20-30°C, idéal printemps, fleurs désert</li>
                <li><strong>Septembre-Novembre</strong> : 25-32°C, automne parfait</li>
                <li><strong>Décembre-Février</strong> : 15-20°C, doux mais baignade fraîche</li>
                <li><strong>Juin-Août</strong> : 35-45°C, très chaud, à éviter</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Budget Moyen par Nuit</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li><strong>Luxe</strong> (David Dead Sea, Herods) : 350-700€</li>
                <li><strong>Moyen-Haut</strong> (Leonardo Club, Isrotel) : 250-500€</li>
                <li><strong>Moyen</strong> (Prima, Lot) : 180-400€</li>
                <li><strong>Économique</strong> (Daniel, Ein Bokek) : 120-280€</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">🧴 Conseils pour Profiter des Soins</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li><strong>Boues noires</strong> : Appliquer 20-30 min, laisser sécher au soleil, rincer</li>
                <li><strong>Bain Mer Morte</strong> : Max 15-20 min (eau très salée fatigue)</li>
                <li><strong>Ne pas mouiller visage</strong> : Le sel brûle les yeux intensément</li>
                <li><strong>Douche après</strong> : Eau douce obligatoire pour enlever sel</li>
                <li><strong>Hydratation</strong> : Boire beaucoup d'eau (désert, évaporation)</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚗 Comment y Aller ?</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li><strong>Depuis Tel Aviv</strong> : 2h en voiture, autoroute 1 puis 90</li>
                <li><strong>Depuis Jérusalem</strong> : 1h en voiture, route 1 descente spectaculaire</li>
                <li><strong>Aéroport Ben Gourion</strong> : 1h45, location voiture recommandée</li>
                <li><strong>Transport public</strong> : Bus Egged lignes 421, 444 (3h depuis Jérusalem)</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Réservez votre Séjour Spa à la Mer Morte
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Tarifs négociés • Assistance francophone • Annulation flexible
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Demander un Devis Gratuit
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

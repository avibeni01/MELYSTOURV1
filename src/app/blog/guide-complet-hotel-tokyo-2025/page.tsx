// src/app/blog/guide-complet-hotel-tokyo-2025/page.tsx
import type { Metadata } from 'next'
import { buildMetadata, JsonLd } from '@/lib/seo'
import Link from 'next/link'
import { Star, MapPin, Calendar, DollarSign, Check, Sparkles } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Guide Complet Hotel Tokyo 2025 : Aman Park Hyatt Peninsula - Meilleurs Quartiers',
  description: 'Guide ultime hotels luxe Tokyo 2025 : Aman Tokyo onsen, Park Hyatt Lost in Translation, Peninsula jardins. Shinjuku, Marunouchi, Ginza. Prix, quartiers, meilleure periode.',
  canonical: '/blog/guide-complet-hotel-tokyo-2025',
  keywords: [
    'guide hotel tokyo',
    'hotel luxe tokyo 2025',
    'meilleur hotel tokyo',
    'quartier loger tokyo',
    'aman tokyo',
    'park hyatt tokyo',
    'peninsula tokyo',
    'onsen tokyo',
    'hotel shinjuku',
    'hotel shibuya',
    'prix hotel tokyo'
  ]
})

export default function GuideTokyoHotelPage() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Guide Complet Hotel Tokyo 2025 : Les Meilleurs Palaces et Quartiers',
    description: 'Guide ultime pour choisir votre hotel de luxe a Tokyo : Aman, Park Hyatt, Peninsula. Meilleurs quartiers, prix, onsen, vue Mont Fuji.',
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
    author: {
      '@type': 'Organization',
      name: 'Elynor Tours'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Elynor Tours',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png'
      }
    },
    image: '/images/blog/tokyo-hotels-guide.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': '/blog/guide-complet-hotel-tokyo-2025'
    }
  }

  const topHotels = [
    {
      rank: 1,
      name: "Aman Tokyo",
      rating: 5,
      price: "1000-1500€",
      quartier: "Otemachi",
      highlights: [
        "Spa onsen traditionnel au 33e étage",
        "Design zen minimaliste authentique",
        "Vue panoramique 360° sur Tokyo",
        "Restaurant kaiseki étoilé",
        "Piscine d'altitude avec vue"
      ],
      pourquoi: "Le sanctuaire zen ultime au cœur de Tokyo. L'Aman Tokyo offre une expérience authentiquement japonaise avec son onsen urbain unique, son design minimaliste épuré, et un service discret d'exception. Idéal pour ceux qui cherchent la sérénité absolue."
    },
    {
      rank: 2,
      name: "Park Hyatt Tokyo",
      rating: 5,
      price: "700-1200€",
      quartier: "Shinjuku",
      highlights: [
        "New York Bar culte (Lost in Translation)",
        "Vue Mont Fuji par temps clair",
        "52 étages au-dessus de la ville",
        "Design contemporain raffiné",
        "Piscine au 47e étage"
      ],
      pourquoi: "Icône cinématographique et architectural. Le Park Hyatt Tokyo est célèbre pour son apparition dans Lost in Translation et son légendaire New York Bar. Vue spectaculaire sur Tokyo et le Mont Fuji. Parfait pour les amateurs de design contemporain et de skyline urbain."
    },
    {
      rank: 3,
      name: "The Peninsula Tokyo",
      rating: 5,
      price: "600-1000€",
      quartier: "Marunouchi",
      highlights: [
        "Vue privilégiée Palais Impérial",
        "Service japonais légendaire (omotenashi)",
        "Spa avec bains japonais",
        "Restaurants étoilés Michelin",
        "Butler service personnalisé"
      ],
      pourquoi: "Excellence du service japonais face aux jardins impériaux. Le Peninsula Tokyo incarne l'hospitalité japonaise traditionnelle (omotenashi) avec une attention aux moindres détails. Emplacement premium dans le quartier d'affaires chic de Marunouchi."
    },
    {
      rank: 4,
      name: "The Ritz-Carlton Tokyo",
      rating: 5,
      price: "650-1100€",
      quartier: "Roppongi",
      highlights: [
        "Étages 45-53 de la Tokyo Midtown Tower",
        "Spa luxueux avec vue",
        "Bar à cocktails en altitude",
        "Proximité musées (Mori Art Museum)",
        "Vie nocturne Roppongi"
      ],
      pourquoi: "Luxe occidental dans les nuages. Le Ritz-Carlton Tokyo domine Roppongi du haut de ses 53 étages avec des vues époustouflantes, un spa de classe mondiale, et un accès direct aux musées et à la vie nocturne branchée de Roppongi."
    },
    {
      rank: 5,
      name: "Mandarin Oriental Tokyo",
      rating: 5,
      price: "600-950€",
      quartier: "Nihonbashi",
      highlights: [
        "Étages 30-38 avec vue panoramique",
        "Spa primé avec onsen",
        "Cuisine fusion asiatique",
        "Quartier historique Nihonbashi",
        "Proche Tokyo Station"
      ],
      pourquoi: "Fusion asiatique raffinée dans le quartier historique. Le Mandarin Oriental Tokyo combine luxe asiatique et modernité dans le quartier des marchands traditionnels de Nihonbashi, offrant un spa exceptionnel et une gastronomie fusion de haut niveau."
    }
  ]

  return (
    <>
      <JsonLd data={article} />

      <article className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📖 Guide Complet 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Guide Ultime Hotels de Luxe à Tokyo 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Aman Onsen • Park Hyatt Lost in Translation • Peninsula Omotenashi
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">🗼 Meilleurs Quartiers</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">💰 Budget & Prix</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">🌸 Saison Idéale</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">♨️ Onsen Luxe</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-rose-600">Tokyo</strong>, mégalopole futuriste et capitale du Japon,
                offre une expérience hôtelière unique au monde mêlant <strong>tradition millénaire japonaise</strong>
                et <strong>ultra-modernité</strong>. Choisir son hôtel à Tokyo n'est pas une décision anodine :
                le quartier, la vue, le type de service (occidental vs japonais), et les équipements (onsen,
                restaurants étoilés) transforment radicalement votre séjour.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dans ce <strong>guide complet 2025</strong>, nous vous révélons les <strong>meilleurs hôtels
                5 étoiles de Tokyo</strong>, des sanctuaires zen comme l'<strong>Aman Tokyo</strong> avec son
                onsen urbain au 33e étage, aux icônes cinématographiques comme le <strong>Park Hyatt Tokyo</strong>
                (Lost in Translation), en passant par le <strong>Peninsula Tokyo</strong> et son service japonais
                légendaire face au Palais Impérial.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nous décryptons également <strong>les meilleurs quartiers où loger</strong> (Shinjuku pour les
                gratte-ciel, Ginza pour le luxe, Shibuya pour l'énergie urbaine), <strong>la meilleure période</strong>
                pour réserver, <strong>les prix moyens</strong>, et nos <strong>conseils d'initiés</strong> pour
                profiter au maximum de votre séjour dans un palace tokyoïte.
              </p>
            </div>
          </div>
        </section>

        {/* Top 5 Hotels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              🏆 Top 5 Meilleurs Hotels de Luxe à Tokyo
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Sélection premium basée sur l'expérience client, le design, le service japonais,
              les équipements (onsen, restaurants étoilés), et le rapport qualité-prix.
            </p>

            <div className="max-w-6xl mx-auto space-y-8">
              {topHotels.map((hotel) => (
                <div key={hotel.rank} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-rose-500 to-pink-600 p-8 text-white flex flex-col justify-center items-center">
                      <div className="text-6xl font-bold mb-4">#{hotel.rank}</div>
                      <div className="flex mb-3">
                        {[...Array(hotel.rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-yellow-300 text-yellow-300" />
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-2">{hotel.name}</h3>
                      <div className="flex items-center text-white/90 mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span>{hotel.quartier}</span>
                      </div>
                      <div className="bg-white/20 px-4 py-2 rounded-lg font-bold">
                        {hotel.price}/nuit
                      </div>
                    </div>

                    <div className="md:w-2/3 p-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Sparkles className="text-rose-500 mr-2" size={20} />
                        Points Forts
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {hotel.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Star className="text-rose-500 mr-2" size={20} />
                        Pourquoi Choisir cet Hôtel ?
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {hotel.pourquoi}
                      </p>

                      <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Demander un Devis
                      </Link>
                    </div>
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
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                🗺️ Où Loger à Tokyo : Guide des Quartiers
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Choisir le bon quartier est crucial pour votre expérience tokyoïte
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">🏙️ Shinjuku - Gratte-ciel & Skyline</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Meilleur pour :</strong> Vue panoramique, vie nocturne, futurisme urbain
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Quartier des <strong>gratte-ciel spectaculaires</strong> où se trouve le mythique
                    <strong> Park Hyatt Tokyo</strong> (52 étages). Le <strong>New York Bar</strong> culte
                    de Lost in Translation y domine la ville avec vue sur le <strong>Mont Fuji</strong> par
                    temps clair. Ambiance futuriste, immenses centres commerciaux, restaurants sur 10 étages,
                    et vie nocturne intense (Golden Gai, Kabukicho).
                  </p>
                  <p className="text-gray-700"><strong>Hotels :</strong> Park Hyatt Tokyo, Hyatt Regency Tokyo</p>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-8 border-l-4 border-rose-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">🏯 Marunouchi - Business Chic & Palais Impérial</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Meilleur pour :</strong> Calme, culture, proximité palais, shopping luxe
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Quartier d'affaires élégant face au <strong>Palais Impérial</strong> et ses jardins zen.
                    Le <strong>Peninsula Tokyo</strong> y incarne le service japonais d'exception (omotenashi).
                    Atmosphère calme et raffinée, proche de <strong>Ginza</strong> (5 min à pied), gare de Tokyo
                    pour Shinkansen, et accès privilégié aux jardins impériaux pour jogging matinal.
                  </p>
                  <p className="text-gray-700"><strong>Hotels :</strong> The Peninsula Tokyo, Shangri-La Tokyo</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 border-l-4 border-purple-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">🗼 Otemachi - Sanctuaire Zen d'Altitude</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Meilleur pour :</strong> Sérénité absolue, spa onsen, design zen, vue 360°
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Quartier business ultra-moderne abritant le légendaire <strong>Aman Tokyo</strong>, sanctuaire
                    zen au 33e étage avec <strong>onsen traditionnel urbain</strong> unique à Tokyo. Design
                    minimaliste japonais épuré, vue panoramique à 360° sur la mégalopole, et calme absolu malgré
                    la localisation centrale. Idéal pour se ressourcer après l'intensité tokyoïte.
                  </p>
                  <p className="text-gray-700"><strong>Hotels :</strong> Aman Tokyo</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-8 border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">🛍️ Ginza - Luxe & Shopping Premium</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Meilleur pour :</strong> Shopping de luxe, restaurants étoilés, théâtre Kabuki
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Le <strong>quartier du luxe</strong> par excellence avec les boutiques des plus grandes
                    maisons (Chanel, Hermès, Dior, Louis Vuitton) et les <strong>restaurants étoilés Michelin</strong>
                    les plus prestigieux. Atmosphère élégante, théâtre Kabuki traditionnel, et vie nocturne chic.
                    Architecture mêlant tradition et futurisme (Ginza Six).
                  </p>
                  <p className="text-gray-700"><strong>Hotels :</strong> The Ritz-Carlton (proche), Palace Hotel Tokyo</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">🎌 Roppongi - Art, Musées & Vie Nocturne</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Meilleur pour :</strong> Culture contemporaine, musées, bars en altitude
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Quartier cosmopolite avec le <strong>Mori Art Museum</strong>, <strong>Tokyo Midtown</strong>,
                    et vie nocturne internationale. Le <strong>Ritz-Carlton Tokyo</strong> domine du haut de ses
                    53 étages avec vue spectaculaire. Idéal pour les amateurs d'art contemporain et de cocktails
                    en altitude avec skyline urbain.
                  </p>
                  <p className="text-gray-700"><strong>Hotels :</strong> The Ritz-Carlton Tokyo, Grand Hyatt Tokyo</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-8 border-l-4 border-pink-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">⚡ Shibuya - Énergie Urbaine & Jeunesse</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Meilleur pour :</strong> Énergie maximale, shopping tendance, culture pop
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Le <strong>carrefour le plus fréquenté du monde</strong> (Shibuya Crossing), épicentre de la
                    mode streetwear japonaise et de la culture pop. Ambiance électrique 24/7, magasins de mode
                    (Shibuya 109), et vie nocturne jeune. Moins d'hôtels ultra-luxe mais énergie incomparable.
                  </p>
                  <p className="text-gray-700"><strong>Hotels :</strong> Cerulean Tower Tokyu Hotel, Shibuya Stream Excel Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Pratique */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                💡 Guide Pratique : Budget, Saison & Conseils
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Budget */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <DollarSign className="text-rose-500 mr-3" size={28} />
                    💰 Budget & Prix
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Ultra-Luxe (1000-1500€)</h4>
                      <p className="text-gray-700 text-sm">Aman Tokyo, Four Seasons Otemachi - Onsen privé, service maximal</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Luxe Premium (700-1200€)</h4>
                      <p className="text-gray-700 text-sm">Park Hyatt, Ritz-Carlton - Vue spectaculaire, restaurants étoilés</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Luxe Accessible (600-1000€)</h4>
                      <p className="text-gray-700 text-sm">Peninsula, Mandarin Oriental - Excellent rapport qualité-prix</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg mt-6">
                      <p className="text-sm text-gray-700">
                        <strong>💡 Astuce :</strong> Réservez 2-3 mois à l'avance pour économiser 20-30%.
                        Évitez les cerisiers (avril) et Golden Week (début mai) où les prix doublent.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Meilleure Période */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Calendar className="text-rose-500 mr-3" size={28} />
                    🌸 Meilleure Période
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🌸 Mars-Avril (Cerisiers)</h4>
                      <p className="text-gray-700 text-sm">Magnifique mais bondé et cher. Réservez 6 mois à l'avance.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🍂 Octobre-Novembre (Automne)</h4>
                      <p className="text-gray-700 text-sm">Idéal ! Temps agréable, feuillages rouges, moins de touristes.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">☀️ Mai-Juin (Avant Été)</h4>
                      <p className="text-gray-700 text-sm">Bon compromis, températures douces, prix raisonnables.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">❄️ Décembre-Février (Hiver)</h4>
                      <p className="text-gray-700 text-sm">Froid mais clair, vue Mont Fuji optimale, prix bas.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg mt-6">
                      <p className="text-sm text-gray-700">
                        <strong>⚠️ À Éviter :</strong> Juillet-Août (chaleur humide intense) et Golden Week
                        (29 avril - 5 mai, tout est complet).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseils d'Initiés */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-xl p-8 shadow-lg mt-8">
                <h3 className="text-2xl font-bold mb-6">✨ Conseils d'Initiés</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Onsen Expérience :</strong> Choisissez l'Aman Tokyo pour vivre l'expérience
                    onsen traditionnelle en plein cœur de la mégalopole (rare à Tokyo).</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Vue Mont Fuji :</strong> Le Park Hyatt offre la meilleure vue sur le Fuji
                    depuis le New York Bar (allez-y au coucher du soleil, réservation obligatoire).</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Service Japonais :</strong> Le Peninsula Tokyo incarne le summum de l'hospitalité
                    japonaise (omotenashi). Anticipation de vos besoins avant même que vous les exprimiez.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Transport :</strong> Tous ces hôtels sont à 5-10 min à pied de stations de
                    métro majeures. Achetez une carte Suica/Pasmo dès l'arrivée.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Petit-déjeuner :</strong> Prenez le petit-déjeuner japonais kaiseki au moins
                    une fois (wagyu, poisson grillé, riz, miso). Expérience unique.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Club Lounge :</strong> Le surclassement Club Lounge vaut largement son prix
                    pour le petit-déjeuner, les collations toute la journée, et les cocktails du soir avec vue.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Réserver Votre Palace Tokyoïte ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Laissez nos experts vous trouver l'hôtel idéal avec nos tarifs négociés exclusifs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Demander un Devis Personnalisé
              </Link>
              <Link
                href="/hotels/tokyo"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Voir nos Hotels Tokyo
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

// src/app/blog/top-10-hotels-luxe-dubai-familles/page.tsx
import type { Metadata } from 'next'
import { buildMetadata, JsonLd } from '@/lib/seo'
import Link from 'next/link'
import { Star, MapPin, Users, Baby, Waves, Utensils, Check, Sparkles } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Top 10 Hotels Luxe Dubai Familles 2025 : Atlantis Jumeirah Beach Zabeel Saadiyat',
  description: 'Meilleurs hotels luxe Dubai pour familles 2025 : Atlantis The Palm aquaparc, Jumeirah Beach kids club, One&Only spa parents. Plages privees, activites enfants, suites familiales.',
  canonical: '/blog/top-10-hotels-luxe-dubai-familles',
  keywords: [
    'hotel dubai famille',
    'hotel luxe dubai enfants',
    'atlantis the palm',
    'jumeirah beach hotel',
    'one and only the palm',
    'hotel dubai kids club',
    'resort dubai famille',
    'plage privee dubai',
    'aquaparc dubai',
    'hotel dubai tout inclus'
  ]
})

export default function DubaiHotelsFamillesPage() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Top 10 Hotels Luxe Dubai Familles 2025 : Le Guide Complet',
    description: 'Découvrez les 10 meilleurs hotels de luxe a Dubai pour familles : Atlantis aquaparc, Jumeirah Beach kids club, One&Only spa. Plages privees, activites enfants.',
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
    image: '/images/blog/dubai-hotels-familles.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': '/blog/top-10-hotels-luxe-dubai-familles'
    }
  }

  const hotels = [
    {
      rank: 1,
      name: "Atlantis The Palm",
      rating: 5,
      price: "500-1200€",
      quartier: "Palm Jumeirah",
      familyScore: "10/10",
      highlights: [
        "Aquaventure Waterpark inclus (tobog 28m)",
        "Lost Chambers Aquarium avec 65000 poissons",
        "Kids Club primé Sinbad's avec pirates",
        "Plage privée 1km + piscines infinies",
        "Dolphin Bay - nager avec dauphins",
        "20 restaurants dont Nobu et Gordon Ramsay"
      ],
      ages: "0-18 ans",
      pourquoi: "Le resort familial ULTIME à Dubai. L'Atlantis est un parc d'attractions géant déguisé en hôtel 5 étoiles. Vos enfants ne voudront plus partir : aquaparc immense avec toboggans à sensation, aquarium spectaculaire, dauphins, plage infinie. Les parents profitent du spa ShuiQi pendant que les kids s'éclatent au club. Impossible de s'ennuyer."
    },
    {
      rank: 2,
      name: "Jumeirah Beach Hotel",
      rating: 5,
      price: "450-900€",
      quartier: "Jumeirah Beach",
      familyScore: "9.5/10",
      highlights: [
        "Accès GRATUIT Wild Wadi Waterpark",
        "Sinbad's Kids Club jusqu'à 12 ans",
        "Plage privée 800m sable blanc",
        "Vue Burj Al Arab iconique",
        "Piscines avec toboggans enfants",
        "Programme ados avec sports nautiques"
      ],
      ages: "0-18 ans",
      pourquoi: "Le meilleur rapport qualité-prix pour familles à Dubai. Accès illimité gratuit au Wild Wadi Waterpark (valeur 300€ économisée), vue imprenable sur le Burj Al Arab, plage parfaite, kids club exceptionnel. Plus abordable qu'Atlantis mais presque aussi complet. Idéal familles avec 2-3 enfants."
    },
    {
      rank: 3,
      name: "One&Only The Palm",
      rating: 5,
      price: "700-1500€",
      quartier: "Palm Jumeirah",
      familyScore: "9/10",
      highlights: [
        "KidsOnly club jusqu'à 11 ans (activités premium)",
        "Plage privée exclusive 400m",
        "Suites familiales spacieuses 80m²+",
        "Spa parent de classe mondiale",
        "Restaurants gastronomiques (Zest, Stay)",
        "Ambiance intimiste (90 chambres seulement)"
      ],
      ages: "4-16 ans",
      pourquoi: "Le luxe intimiste pour familles exigeantes. One&Only offre l'exclusivité d'un resort boutique avec un kids club premium où les enfants font de la cuisine, du cinéma, de l'art. Pendant ce temps, les parents se relaxent au spa de classe mondiale ou dans les restaurants gastronomiques. Moins 'parc d'attractions' qu'Atlantis, plus raffiné."
    },
    {
      rank: 4,
      name: "Jumeirah Zabeel Saray",
      rating: 5,
      price: "400-800€",
      quartier: "Palm Jumeirah",
      familyScore: "8.5/10",
      highlights: [
        "Sinbad's Kids Club thème pirates",
        "Plage privée Palm West Beach 2km",
        "Piscines multiples dont lagon enfants",
        "Architecture palais ottoman luxueuse",
        "Talise Spa (hammam turc traditionnel)",
        "16 restaurants et bars"
      ],
      ages: "2-12 ans",
      pourquoi: "Le palais ottoman familial sur la Palm. Architecture époustouflante inspirée de l'Empire Ottoman, plage immense de 2km, kids club thématique pirates, et spa turc authentique pour les parents. Prix plus accessible que Atlantis/One&Only mais service 5 étoiles identique. Parfait pour familles avec petits budgets."
    },
    {
      rank: 5,
      name: "The Ritz-Carlton Dubai",
      rating: 5,
      price: "400-750€",
      quartier: "JBR (Jumeirah Beach Residence)",
      familyScore: "8.5/10",
      highlights: [
        "Ritz Kids programme jusqu'à 12 ans",
        "Plage privée 300m avec sports nautiques",
        "Proximité The Walk JBR (restaurants, shopping)",
        "Piscines avec vue mer spectaculaire",
        "Suites familiales interconnectées",
        "Club Lounge avec snacks toute la journée"
      ],
      ages: "3-12 ans",
      pourquoi: "L'élégance Ritz-Carlton adaptée aux familles. Emplacement idéal à JBR avec accès direct à The Walk (restaurants, boutiques, animation), plage magnifique, kids club de qualité, et le service légendaire Ritz-Carlton. Les parents apprécient le Club Lounge avec cocktails et snacks continus. Moins 'resort' mais excellent emplacement urbain."
    },
    {
      rank: 6,
      name: "Le Royal Méridien Beach Resort & Spa",
      rating: 5,
      price: "350-650€",
      quartier: "Dubai Marina",
      familyScore: "8/10",
      highlights: [
        "Penguin Club pour enfants 4-12 ans",
        "Plage privée 1km avec palmiers",
        "5 piscines dont piscine enfants ludique",
        "Splash pad et aire de jeux",
        "Localisation Dubai Marina (restaurants)",
        "Excellent rapport qualité-prix"
      ],
      ages: "4-12 ans",
      pourquoi: "Le resort familial abordable avec grand espace. 1km de plage privée bordée de palmiers, 5 piscines dont une pour enfants avec jeux d'eau, kids club Penguin, et emplacement Marina Walk parfait pour dîner en famille. Prix très compétitif pour un vrai resort les pieds dans l'eau. Idéal familles nombreuses."
    },
    {
      rank: 7,
      name: "Waldorf Astoria Dubai Palm Jumeirah",
      rating: 5,
      price: "500-1000€",
      quartier: "Palm Jumeirah",
      familyScore: "8/10",
      highlights: [
        "Peacock Alley Kids Club artistique",
        "Plage privée exclusive 100m",
        "6 piscines dont piscine familiale",
        "Suites avec kitchenette pratiques",
        "Waldorf Astoria Spa luxueux",
        "Proximité Nakheel Mall"
      ],
      ages: "5-12 ans",
      pourquoi: "L'élégance Art Déco pour familles raffinées. Le Waldorf Astoria offre un cadre sophistiqué avec kids club axé sur l'art et la créativité, plusieurs piscines, et suites spacieuses avec kitchenette (pratique pour biberons/collations). Plus calme et intimiste que les méga-resorts, parfait pour familles cherchant la tranquillité."
    },
    {
      rank: 8,
      name: "Anantara The Palm Dubai Resort",
      rating: 5,
      price: "400-800€",
      quartier: "Palm Jumeirah",
      familyScore: "7.5/10",
      highlights: [
        "Dhoni Kids Club thème maritime",
        "Plage privée et lagune calme",
        "Overwater villas (première à Dubai!)",
        "Spa asiatique Anantara authentique",
        "Piscine infinie vue skyline",
        "Cours de cuisine thaï en famille"
      ],
      ages: "4-12 ans",
      pourquoi: "L'exotisme asiatique à Dubai pour familles. Anantara apporte l'élégance thaïlandaise à Palm Jumeirah avec ses villas overwater uniques à Dubai, son kids club maritime, et ses cours de cuisine thaï que toute la famille peut faire ensemble. Ambiance zen et dépaysante, idéale pour se déconnecter."
    },
    {
      rank: 9,
      name: "Fairmont The Palm",
      rating: 5,
      price: "350-700€",
      quartier: "Palm Jumeirah",
      familyScore: "7.5/10",
      highlights: [
        "Little Passport Kids Club éducatif",
        "Plage privée 400m sable blanc",
        "5 piscines avec lazy river",
        "Chambres avec balcons spacieux",
        "Willow Stream Spa relaxant",
        "Restaurants variés (libanais, italien, asiatique)"
      ],
      ages: "5-12 ans",
      pourquoi: "Le resort familial complet à prix raisonnable. Fairmont offre tout ce qu'il faut : belle plage, lazy river pour enfants, kids club éducatif, et chambres spacieuses avec balcons. Sans être spectaculaire comme Atlantis, il coche toutes les cases à un tarif accessible. Excellent choix pour premier séjour Dubai en famille."
    },
    {
      rank: 10,
      name: "Sofitel Dubai The Palm",
      rating: 5,
      price: "300-600€",
      quartier: "Palm Jumeirah",
      familyScore: "7/10",
      highlights: [
        "Club Millesim Kids programme français",
        "Plage privée 350m calme",
        "Piscines avec toboggan enfants",
        "Gastronomie française (Maui Beach)",
        "Polynesian Spa relaxant",
        "Meilleur prix Palm Jumeirah"
      ],
      ages: "4-12 ans",
      pourquoi: "L'élégance française accessible sur la Palm. Sofitel combine luxe à la française, kids club bilingue français-anglais (pratique pour familles françaises), et le meilleur rapport qualité-prix de Palm Jumeirah. Plage tranquille, piscine avec toboggan, et gastronomie française authentique. Parfait pour budgets maîtrisés sans compromis sur le luxe."
    }
  ]

  return (
    <>
      <JsonLd data={article} />

      <article className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                👨‍👩‍👧‍👦 Top 10 Hotels Familles 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meilleurs Hotels de Luxe à Dubai pour Familles
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Atlantis Aquaparc • Jumeirah Kids Club • One&Only Plages Privées
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">🏖️ Plages Privées</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">🎢 Aquaparcs</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">👶 Kids Clubs</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">💰 Tous Budgets</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-blue-600">Dubai</strong>, capitale du luxe familial, est LA destination
                idéale pour des vacances en famille inoubliables. Contrairement à ce qu'on pourrait penser,
                Dubai n'est pas seulement pour couples ou business : c'est un <strong>paradis pour enfants</strong>
                avec ses <strong>aquaparcs géants</strong>, <strong>plages infinies</strong>, <strong>kids clubs
                primés</strong>, et <strong>activités incroyables</strong> (dauphins, ski indoor, safaris désert).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dans ce <strong>guide complet 2025</strong>, nous avons sélectionné les <strong>10 meilleurs
                hôtels 5 étoiles à Dubai pour familles</strong>, du légendaire <strong>Atlantis The Palm</strong>
                avec son aquaparc Aquaventure et ses dauphins, au <strong>Jumeirah Beach Hotel</strong> avec accès
                gratuit au Wild Wadi Waterpark, en passant par le luxueux <strong>One&Only The Palm</strong> et
                son kids club premium.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Chaque hôtel a été évalué selon des <strong>critères familiaux stricts</strong> : qualité du
                kids club, taille de la plage privée, présence d'aquaparc/toboggans, activités pour tous âges,
                suites familiales spacieuses, et bien sûr le <strong>spa pour que les parents se ressourcent</strong>
                pendant que les enfants s'amusent. Nous couvrons <strong>tous les budgets</strong> de 300€ à 1500€/nuit.
              </p>
            </div>
          </div>
        </section>

        {/* Top 10 Hotels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              🏆 Top 10 Hotels Luxe Dubai pour Familles
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Classement basé sur : kids clubs, plages privées, aquaparcs, suites familiales,
              activités enfants, et satisfaction des familles voyageuses.
            </p>

            <div className="max-w-6xl mx-auto space-y-8">
              {hotels.map((hotel) => (
                <div key={hotel.rank} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-cyan-600 p-8 text-white">
                      <div className="text-center">
                        <div className="text-6xl font-bold mb-4">#{hotel.rank}</div>
                        <div className="flex justify-center mb-3">
                          {[...Array(hotel.rating)].map((_, i) => (
                            <Star key={i} size={20} className="fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{hotel.name}</h3>
                        <div className="flex items-center justify-center text-white/90 mb-3">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{hotel.quartier}</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-bold mb-4">
                          {hotel.price}/nuit
                        </div>
                        <div className="bg-green-400 text-green-900 px-4 py-2 rounded-lg font-bold flex items-center justify-center">
                          <Users size={18} className="mr-2" />
                          Score Famille: {hotel.familyScore}
                        </div>
                        <div className="mt-4 bg-white/10 px-3 py-2 rounded-lg text-sm flex items-center justify-center">
                          <Baby size={16} className="mr-2" />
                          Âges: {hotel.ages}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Sparkles className="text-blue-500 mr-2" size={20} />
                        Points Forts Familles
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
                        <Star className="text-blue-500 mr-2" size={20} />
                        Pourquoi Choisir cet Hôtel en Famille ?
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {hotel.pourquoi}
                      </p>

                      <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Demander un Devis Famille
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tableau Comparatif */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                📊 Tableau Comparatif Rapide
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg">
                  <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Hôtel</th>
                      <th className="px-6 py-4 text-center">Aquaparc</th>
                      <th className="px-6 py-4 text-center">Kids Club</th>
                      <th className="px-6 py-4 text-center">Plage</th>
                      <th className="px-6 py-4 text-center">Prix/Nuit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Atlantis The Palm</td>
                      <td className="px-6 py-4 text-center">✅ Inclus</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center">1km</td>
                      <td className="px-6 py-4 text-center">500-1200€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Jumeirah Beach Hotel</td>
                      <td className="px-6 py-4 text-center">✅ Wild Wadi Gratuit</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center">800m</td>
                      <td className="px-6 py-4 text-center">450-900€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">One&Only The Palm</td>
                      <td className="px-6 py-4 text-center">❌</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center">400m</td>
                      <td className="px-6 py-4 text-center">700-1500€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Zabeel Saray</td>
                      <td className="px-6 py-4 text-center">❌</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center">2km</td>
                      <td className="px-6 py-4 text-center">400-800€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Ritz-Carlton Dubai</td>
                      <td className="px-6 py-4 text-center">❌</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center">300m</td>
                      <td className="px-6 py-4 text-center">400-750€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Comment Choisir ?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Budget Max + Aquaparc obligatoire :</strong> Atlantis The Palm ou Jumeirah Beach Hotel</li>
                  <li><strong>Luxe intimiste + Kids club premium :</strong> One&Only The Palm</li>
                  <li><strong>Meilleur rapport qualité-prix :</strong> Jumeirah Beach Hotel (Wild Wadi gratuit!)</li>
                  <li><strong>Plus grande plage :</strong> Zabeel Saray (2km de sable blanc)</li>
                  <li><strong>Petit budget sans compromis :</strong> Sofitel The Palm (300-600€)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Pratique */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                💡 Guide Pratique Familles Dubai
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🗓️ Meilleure Période pour Familles</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Novembre-Mars (Idéal) :</strong> 25-30°C parfait pour plage. Haute saison, réservez 3 mois à l'avance.</li>
                    <li><strong>Avril-Mai (Bon) :</strong> 30-35°C chaud mais supportable. Prix intermédiaires.</li>
                    <li><strong>Juin-Septembre (À Éviter) :</strong> 40-50°C intenable pour enfants. Prix bas mais souffrance garantie.</li>
                    <li><strong>Vacances scolaires :</strong> Février (hiver), juillet-août (été si courage), octobre (Toussaint).</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">👶 Tranches d'Âge & Activités</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>0-3 ans (Bébés) :</strong> Plage calme, piscine pataugeoire, baby club. Choisir One&Only ou Waldorf Astoria.</li>
                    <li><strong>4-8 ans (Enfants) :</strong> Aquaparcs, kids clubs, dauphins. Atlantis ou Jumeirah Beach parfaits.</li>
                    <li><strong>9-12 ans (Pré-ados) :</strong> Toboggans extrêmes, sports nautiques, ski Dubai. Atlantis obligatoire.</li>
                    <li><strong>13-18 ans (Ados) :</strong> Kitesurf, jet-ski, Dubai Mall, IMG Worlds. Ritz-Carlton Dubai (JBR).</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Budget Famille Complet</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Hôtel (moyenne) :</strong> 500-800€/nuit pour suite familiale 4 personnes</li>
                    <li><strong>Restauration :</strong> 150-250€/jour (buffets hôtel + restaurants mall)</li>
                    <li><strong>Activités :</strong> 200-400€/séjour (aquaparcs, safaris, IMG Worlds, Ski Dubai)</li>
                    <li><strong>Vol :</strong> 300-600€/personne Paris-Dubai A/R selon saison</li>
                    <li><strong>Total 1 semaine famille 4 pers :</strong> 5000-8000€ (budget moyen)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">✨ Top 5 Activités Familles Dubai (Hors Hôtel)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>IMG Worlds of Adventure :</strong> Plus grand parc d'attractions indoor au monde (Marvel, Cartoon Network). 300 AED/adulte.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Ski Dubai :</strong> Ski et snowboard en plein désert + manchots. 200 AED/2h. Irréel.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Dubai Aquarium (Dubai Mall) :</strong> Tunnel sous-marin + cage avec requins. 150 AED/adulte.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Safari Désert :</strong> 4x4 dunes + dîner bédouin + spectacles. 250 AED/adulte. Magique au coucher de soleil.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Burj Khalifa (niveau 124+125) :</strong> Plus haute tour au monde 828m. Vue à 360°. 150 AED/adulte.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Conseils Pratiques Parents</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Crème solaire SPF 50+ obligatoire :</strong> Le soleil Dubai est violent même en hiver. Réappliquer toutes les 2h.</li>
                    <li><strong>Hydratation constante :</strong> 2L d'eau/jour minimum par enfant. Climat désertique très sec.</li>
                    <li><strong>Baby-sitting hôtel :</strong> Tous ces hôtels proposent service baby-sitting certifié (30-50 AED/heure).</li>
                    <li><strong>Poussette :</strong> Indispensable dans les malls (Dubai Mall = 5km!). Location disponible malls.</li>
                    <li><strong>Ramadan :</strong> Si séjour pendant Ramadan, impossible manger/boire dehors avant 19h. À éviter avec enfants.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Réserver vos Vacances Famille à Dubai ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nos experts familles vous trouvent l'hôtel idéal selon l'âge de vos enfants et votre budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Demander un Devis Famille
              </Link>
              <Link
                href="/hotels/dubai"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Voir nos Hotels Dubai
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

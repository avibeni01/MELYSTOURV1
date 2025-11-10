// src/app/blog/palaces-parisiens-lequel-choisir/page.tsx
import type { Metadata } from 'next'
import { buildMetadata, JsonLd } from '@/lib/seo'
import Link from 'next/link'
import { Star, MapPin, UtensilsCrossed, Sparkles, Check, Crown, Wine, Heart } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Palaces Parisiens : Lequel Choisir 2025 ? Ritz Plaza Athenee Bristol George V',
  description: 'Guide comparatif palaces Paris 2025 : Le Bristol Epicure 3*, Plaza Athenee Spa Dior, Ritz Place Vendome, George V 5* Michelin. Histoire, restaurants, spa, prix. Quel palace choisir selon profil.',
  canonical: '/blog/palaces-parisiens-lequel-choisir',
  keywords: [
    'palace parisien',
    'hotel luxe paris',
    'le bristol paris',
    'plaza athenee',
    'ritz paris',
    'four seasons george v',
    'restaurant 3 etoiles michelin paris',
    'spa dior paris',
    'palace avenue montaigne',
    'hotel champs elysees'
  ]
})

export default function PalacesPariensPage() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Palaces Parisiens : Lequel Choisir ? Guide Complet 2025',
    description: 'Guide comparatif complet des palaces parisiens : Le Bristol, Plaza Athenee, Ritz, George V. Restaurants etoiles, spa, histoire, et comment choisir selon votre profil.',
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
    image: '/images/blog/palaces-parisiens.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': '/blog/palaces-parisiens-lequel-choisir'
    }
  }

  const palaces = [
    {
      name: "Le Bristol Paris",
      adresse: "112 rue du Faubourg Saint-Honoré, 8e",
      rating: 5,
      prix: "900-2000€",
      michelin: "3 étoiles (Epicure)",
      annee: "1925",
      profil: "Gourmets & Amateurs d'Excellence Culinaire",
      couleur: "from-amber-500 to-orange-600",
      points: [
        "Restaurant Epicure 3 étoiles Michelin (Chef Eric Frechon)",
        "Jardin français unique en plein Paris (1200m²)",
        "Piscine sur le toit avec vue panoramique",
        "Service irréprochable récompensé Palace",
        "Spa Praesens avec soins sur-mesure",
        "114 SUITES (record Paris) avec décor 18ème"
      ],
      pourquoi: "LE palace des gastronomes. Le Bristol est une institution culinaire avec Epicure 3 étoiles Michelin où le Chef Eric Frechon sublime la cuisine française classique. Son jardin français secret (rarissime à Paris), sa piscine sur le toit, et son service d'une discrétion absolue en font le choix des connaisseurs qui fuient l'ostentation. Atmosphère familiale malgré le luxe extrême.",
      idealpour: "Gourmets, couples romantiques, familles aisées (jardin pour enfants), voyageurs d'affaires discrets.",
      iconic: "Le jardin français secret + Epicure 3* + Chat Fa-Raon"
    },
    {
      name: "Plaza Athénée",
      adresse: "25 avenue Montaigne, 8e",
      rating: 5,
      prix: "1000-2500€",
      michelin: "3 étoiles (Alain Ducasse)",
      annee: "1913",
      profil: "Fashion & Luxe Parisien Iconique",
      couleur: "from-rose-500 to-pink-600",
      points: [
        "Avenue Montaigne (Dior, Chanel, Vuitton)",
        "Restaurant Alain Ducasse 3 étoiles Michelin",
        "Spa Dior Institut exclusif (seul au monde)",
        "Façade iconique rouge écarlate + balcons fleuris",
        "Bar du Plaza & Cour Jardin glamour",
        "208 chambres dont 46 suites ultra-luxe"
      ],
      pourquoi: "L'ICÔNE de l'élégance parisienne. Le Plaza Athénée sur l'Avenue Montaigne est le QG de la haute couture et du luxe français. Sa façade rouge écarlate avec balcons fleuris est mondialement célèbre. Le Spa Dior Institut (unique au monde) attire les fashionistas, tandis qu'Alain Ducasse régale les gastronomes. Ambiance glamour, sophistiquée, parfois ostentatoire. Le palace le plus 'Parisien' dans l'imaginaire collectif.",
      idealpour: "Fashionistas, amateurs de haute couture, couples en lune de miel, clientèle internationale fortunée.",
      iconic: "Façade rouge + Avenue Montaigne + Spa Dior + Alain Ducasse 3*"
    },
    {
      name: "Ritz Paris",
      adresse: "15 Place Vendôme, 1er",
      rating: 5,
      prix: "1200-3000€",
      michelin: "2 étoiles (L'Espadon)",
      annee: "1898",
      profil: "Histoire & Prestige Intemporel",
      couleur: "from-yellow-600 to-amber-700",
      points: [
        "Place Vendôme mythique (joailliers de luxe)",
        "Hôtel de Coco Chanel, Hemingway, Proust",
        "Bar Hemingway légendaire (cocktails historiques)",
        "École Ritz Escoffier (cours de cuisine)",
        "Spa Chanel au sous-sol avec piscine",
        "142 chambres après rénovation 220M€ (2016)"
      ],
      pourquoi: "La LÉGENDE vivante. Le Ritz Paris Place Vendôme est plus qu'un hôtel : c'est un monument historique où Coco Chanel a vécu 37 ans, où Hemingway a 'libéré' le bar en 1944, où Proust écrivait. Après 4 ans de rénovation (220M€), il mêle patrimoine et modernité absolue. Le Bar Hemingway est un pèlerinage pour amateurs de cocktails. Clientèle royale, stars hollywoodiennes, milliardaires discrets. Le palace des amoureux d'Histoire avec grand H.",
      idealpour: "Amateurs d'histoire, nostalgiques du glamour 'Belle Époque', amateurs de cocktails (Bar Hemingway), couples anniversaire.",
      iconic: "Place Vendôme + Coco Chanel + Bar Hemingway + Suite Impériale 25000€/nuit"
    },
    {
      name: "Four Seasons George V",
      adresse: "31 avenue George V, 8e",
      rating: 5,
      prix: "1100-2800€",
      michelin: "5 étoiles au total (3 restaurants)",
      annee: "1928",
      profil: "Gastronomes Extrêmes & Amateurs d'Art",
      couleur: "from-blue-600 to-indigo-700",
      points: [
        "5 étoiles Michelin au TOTAL (record hôtel Europe)",
        "Le Cinq 3*, L'Orangerie 1*, Le George 1*",
        "Collection d'art 17e-18e siècles (10M€)",
        "Compositions florales Jeff Leatham légendaires",
        "Spa avec piscine marbre + soins Signature",
        "244 chambres dont 59 suites Art Déco"
      ],
      pourquoi: "Le TEMPLE de la gastronomie mondiale. Le George V détient le record absolu : 5 étoiles Michelin réparties sur 3 restaurants dans un même hôtel (unique en Europe). Le Cinq 3* de Christian Le Squer est dans le Top 50 mondial. La collection d'art privée, les compositions florales monumentales de Jeff Leatham, et le service Four Seasons (meilleur au monde selon Forbes) en font un palace total. Pour ceux qui veulent l'excellence absolue dans TOUS les domaines.",
      idealpour: "Gastronomes extrêmes, collectionneurs d'art, clientèle américaine et asiatique, 'foodies' avec budget illimité.",
      iconic: "5 étoiles Michelin + Jeff Leatham fleurs + Le Cinq 3* + Cour intérieure"
    },
    {
      name: "Le Meurice",
      adresse: "228 rue de Rivoli, 1er",
      rating: 5,
      prix: "900-2200€",
      michelin: "2 étoiles (Le Meurice Alain Ducasse)",
      annee: "1835",
      profil: "Art & Versailles à Paris",
      couleur: "from-purple-600 to-pink-600",
      points: [
        "Vue Jardin des Tuileries et Pyramide du Louvre",
        "Décor inspiré Château de Versailles (Salon Pompadour)",
        "Restaurant Alain Ducasse 2 étoiles Michelin",
        "Spa Valmont avec soins luxe suisse",
        "Salvador Dalí y résidait (suite thématique)",
        "160 chambres style Louis XVI"
      ],
      pourquoi: "Le Versailles parisien. Le Meurice face aux Tuileries transpose le faste de Versailles au cœur de Paris avec son décor Louis XVI époustouflant (Salon Pompadour, dorures, lustres). Vue privilégiée sur le Louvre, localisation imbattable rue de Rivoli, et restaurant Alain Ducasse 2*. Salvador Dalí en a fait sa résidence pendant 30 ans. Pour ceux qui veulent le Grand Siècle sans quitter Paris.",
      idealpour: "Amateurs d'art et de musées (Louvre à 2 min), fans du style Louis XVI/Versailles, clientèle internationale raffinée.",
      iconic: "Vue Tuileries + Décor Versailles + Salon Dalí + Le Meurice Alain Ducasse"
    },
    {
      name: "Hôtel de Crillon",
      adresse: "10 Place de la Concorde, 8e",
      rating: 5,
      prix: "1000-2500€",
      michelin: "1 étoile (L'Écrin)",
      annee: "1758 (monument historique)",
      profil: "Histoire Royale & Architecture 18ème",
      couleur: "from-gray-700 to-slate-800",
      points: [
        "Place de la Concorde (vue Obélisque, Tour Eiffel)",
        "Hôtel particulier 18ème (Monument Historique)",
        "Suites Marie-Antoinette & Les Grands Appartements",
        "Spa Sense by Crillon avec piscine",
        "Bar Les Ambassadeurs sous verrière",
        "124 chambres après rénovation 200M€ (2017)"
      ],
      pourquoi: "Le palace HISTORIQUE. Le Crillon est un véritable hôtel particulier du 18ème siècle (1758) classé Monument Historique sur la Place de la Concorde. Ses Grands Appartements (suites historiques) sont habités par l'Histoire : Marie-Antoinette y prenait ses cours de piano, le Traité Franco-Américain y fut signé (1778). Rénovation 200M€ récente qui respecte scrupuleusement le patrimoine. Pour amateurs d'architecture et d'histoire pure.",
      idealpour: "Amateurs d'histoire et d'architecture 18ème, clientèle VIP discrète, amoureux de la Place de la Concorde.",
      iconic: "Place de la Concorde + Monument Historique 1758 + Suite Marie-Antoinette + Les Grands Appartements"
    }
  ]

  return (
    <>
      <JsonLd data={article} />

      <article className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-amber-600 via-rose-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Crown className="inline mr-2" size={18} />
                Guide Palaces Parisiens 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Palaces Parisiens : Lequel Choisir ?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Bristol • Plaza Athénée • Ritz • George V • Meurice • Crillon
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">⭐ 18 Étoiles Michelin</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">🏰 Monuments Historiques</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">💎 Spa Dior & Chanel</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">🍷 Gastronomie Ultime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-rose-600">Paris</strong> abrite les <strong>palaces les plus prestigieux
                au monde</strong>. Mais face au <strong>Bristol</strong> et son Epicure 3 étoiles Michelin, au
                <strong> Plaza Athénée</strong> sur l'Avenue Montaigne, au mythique <strong>Ritz Place Vendôme</strong>,
                au <strong>George V</strong> et ses 5 étoiles Michelin au total, au <strong>Meurice</strong> façon
                Versailles, et au <strong>Crillon</strong> monument historique 18ème... comment choisir ?
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chaque palace parisien a sa <strong>personnalité unique</strong>, son <strong>histoire</strong>,
                sa <strong>clientèle</strong>, et ses <strong>points forts</strong> (gastronomie, spa, localisation,
                architecture). Certains sont ostentatoires (Plaza Athénée), d'autres discrets (Bristol). Certains
                sont des monuments historiques vivants (Ritz, Crillon), d'autres des temples de la gastronomie
                (George V avec 5 étoiles Michelin).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Dans ce <strong>guide complet 2025</strong>, nous décortiquons les <strong>6 palaces parisiens
                mythiques</strong>, leurs restaurants étoilés, leurs spas exclusifs (Dior, Chanel), leur histoire,
                et surtout : <strong>lequel choisir selon votre profil</strong> (gourmet, fashionista, amoureux
                d'histoire, amateur d'art, couple romantique). Budget, localisation, ambiance... tous les critères
                pour faire LE bon choix.
              </p>
            </div>
          </div>
        </section>

        {/* Comparatif Palaces */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              <Crown className="inline text-amber-600 mr-3" size={40} />
              Les 6 Palaces Parisiens Décryptés
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Analyse complète : histoire, gastronomie, spa, ambiance, clientèle, et profil idéal
            </p>

            <div className="max-w-6xl mx-auto space-y-8">
              {palaces.map((palace, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className={`bg-gradient-to-r ${palace.couleur} p-6 text-white`}>
                    <div className="flex flex-wrap items-center justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{palace.name}</h3>
                        <p className="text-white/90 text-sm flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {palace.adresse}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex mb-2">
                          {[...Array(palace.rating)].map((_, i) => (
                            <Star key={i} size={20} className="fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-xl">
                          {palace.prix}/nuit
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center">
                        <UtensilsCrossed size={16} className="mr-2" />
                        {palace.michelin}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        Depuis {palace.annee}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        {palace.profil}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Sparkles className={`mr-2 text-${palace.couleur.split('-')[1]}-600`} size={22} />
                        Points Forts
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {palace.points.map((point, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Heart className="text-rose-500 mr-2" size={20} />
                        Pourquoi Choisir ce Palace ?
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {palace.pourquoi}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <Crown className="text-amber-600 mr-2" size={18} />
                        Idéal Pour
                      </h4>
                      <p className="text-gray-700 text-sm">{palace.idealpour}</p>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl p-4 border-l-4 border-amber-500">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <Sparkles className="text-amber-600 mr-2" size={18} />
                        Signature Iconique
                      </h4>
                      <p className="text-gray-700 text-sm font-medium">{palace.iconic}</p>
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
                <table className="w-full bg-white rounded-xl shadow-lg text-sm">
                  <thead className="bg-gradient-to-r from-amber-600 to-rose-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Palace</th>
                      <th className="px-4 py-3 text-center">Michelin</th>
                      <th className="px-4 py-3 text-center">Spa</th>
                      <th className="px-4 py-3 text-center">Prix/Nuit</th>
                      <th className="px-4 py-3 text-left">Points Forts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Le Bristol</td>
                      <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                      <td className="px-4 py-3 text-center">Praesens</td>
                      <td className="px-4 py-3 text-center">900-2000€</td>
                      <td className="px-4 py-3 text-xs">Epicure 3* + Jardin français + 114 suites</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Plaza Athénée</td>
                      <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                      <td className="px-4 py-3 text-center">Dior</td>
                      <td className="px-4 py-3 text-center">1000-2500€</td>
                      <td className="px-4 py-3 text-xs">Avenue Montaigne + Spa Dior unique + Façade rouge</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Ritz Paris</td>
                      <td className="px-4 py-3 text-center">⭐⭐</td>
                      <td className="px-4 py-3 text-center">Chanel</td>
                      <td className="px-4 py-3 text-center">1200-3000€</td>
                      <td className="px-4 py-3 text-xs">Place Vendôme + Bar Hemingway + Histoire Coco Chanel</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">George V</td>
                      <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                      <td className="px-4 py-3 text-center">Four Seasons</td>
                      <td className="px-4 py-3 text-center">1100-2800€</td>
                      <td className="px-4 py-3 text-xs">5* Michelin total (record) + Fleurs Jeff Leatham</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Le Meurice</td>
                      <td className="px-4 py-3 text-center">⭐⭐</td>
                      <td className="px-4 py-3 text-center">Valmont</td>
                      <td className="px-4 py-3 text-center">900-2200€</td>
                      <td className="px-4 py-3 text-xs">Vue Tuileries + Décor Versailles + Salvador Dalí</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Crillon</td>
                      <td className="px-4 py-3 text-center">⭐</td>
                      <td className="px-4 py-3 text-center">Sense</td>
                      <td className="px-4 py-3 text-center">1000-2500€</td>
                      <td className="px-4 py-3 text-xs">Place Concorde + Monument 1758 + Marie-Antoinette</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Guide de Choix */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                🎯 Quel Palace Choisir selon Votre Profil ?
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <UtensilsCrossed className="text-amber-600 mr-3" size={28} />
                    Vous êtes Gourmet / Gastronome
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong className="text-amber-600">1er choix : Four Seasons George V</strong> - 5 étoiles Michelin
                    au total (Le Cinq 3*, L'Orangerie 1*, Le George 1*). Record absolu. Paradis des foodies.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-amber-600">2ème choix : Le Bristol</strong> - Epicure 3 étoiles Michelin
                    (Chef Eric Frechon). Cuisine française classique sublimée. Jardin français unique.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-rose-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <Sparkles className="text-rose-600 mr-3" size={28} />
                    Vous êtes Fashionista / Amateur de Luxe
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong className="text-rose-600">1er choix : Plaza Athénée</strong> - Avenue Montaigne (Dior, Chanel,
                    Vuitton), Spa Dior Institut unique au monde, façade rouge iconique. Le plus 'parisien' dans l'imaginaire.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-rose-600">2ème choix : Ritz Paris</strong> - Place Vendôme (joailliers), hôtel
                    de Coco Chanel pendant 37 ans, Spa Chanel. Luxe intemporel.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <Crown className="text-purple-600 mr-3" size={28} />
                    Vous êtes Passionné d'Histoire / Architecture
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong className="text-purple-600">1er choix : Ritz Paris</strong> - Coco Chanel (37 ans), Hemingway
                    (Bar), Proust. Monument historique vivant depuis 1898. Place Vendôme mythique.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-purple-600">2ème choix : Hôtel de Crillon</strong> - Hôtel particulier 1758
                    classé Monument Historique. Marie-Antoinette, Traité Franco-Américain. Place de la Concorde.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <Heart className="text-blue-600 mr-3" size={28} />
                    Vous êtes en Couple Romantique / Lune de Miel
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong className="text-blue-600">1er choix : Le Bristol</strong> - Jardin français secret, piscine
                    sur le toit, service discret, ambiance familiale. Le plus romantique et intime.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-blue-600">2ème choix : Plaza Athénée</strong> - Façade iconique, Cour Jardin,
                    balcons fleuris. Le palace de lune de miel par excellence.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <Wine className="text-green-600 mr-3" size={28} />
                    Vous cherchez le Meilleur Rapport Qualité-Prix
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong className="text-green-600">1er choix : Le Bristol</strong> - 900-2000€/nuit avec Epicure 3*,
                    jardin, piscine, 114 suites. Excellent rapport prestations/prix.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">2ème choix : Le Meurice</strong> - 900-2200€/nuit, vue Tuileries/Louvre,
                    décor Versailles, Alain Ducasse 2*. Moins cher que Ritz/George V mais service équivalent.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-indigo-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <MapPin className="text-indigo-600 mr-3" size={28} />
                    Vous privilégiez la Localisation / Musées
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong className="text-indigo-600">1er choix : Le Meurice</strong> - Face Jardin des Tuileries,
                    Louvre à 2 min à pied, Musée d'Orsay 10 min, Orangerie 5 min. Localisation imbattable pour culture.
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-indigo-600">2ème choix : Hôtel de Crillon</strong> - Place de la Concorde
                    (centre névralgique), vue Tour Eiffel, Champs-Élysées 5 min, Grand Palais proche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conseils Pratiques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                💡 Conseils Pratiques Palaces Parisiens
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🗓️ Quand Réserver ?</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Haute saison :</strong> Avril-juin, septembre-octobre (Fashion Week). Réservez 3 mois à l'avance.</li>
                    <li><strong>Moyenne saison :</strong> Juillet-août (chaleur), novembre-décembre (froid).</li>
                    <li><strong>Basse saison :</strong> Janvier-février (froid). Prix -30% mais Paris moins charmant.</li>
                    <li><strong>Astuce :</strong> Évitez Fashion Week Paris (2x/an) : prix +50%, tout complet.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Budget Complet</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Chambre supérieure :</strong> 900-1200€/nuit (minimum palace)</li>
                    <li><strong>Junior Suite :</strong> 1500-2000€/nuit (recommandé pour confort)</li>
                    <li><strong>Suite prestige :</strong> 2500-5000€/nuit (vue exceptionnelle)</li>
                    <li><strong>Restaurant étoilé :</strong> 200-400€/pers (menu dégustation + vins)</li>
                    <li><strong>Spa :</strong> 250-500€/soin signature (Dior, Chanel, Valmont)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Restaurants Étoilés</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Le Cinq (George V) 3⭐ :</strong> Cuisine française créative. Réservez 2 mois avant.</li>
                    <li><strong>Epicure (Bristol) 3⭐ :</strong> Classique revisité (Chef Eric Frechon). Jardin l'été.</li>
                    <li><strong>Alain Ducasse (Plaza) 3⭐ :</strong> Naturalité, poissons/légumes. Pas de viande.</li>
                    <li><strong>L'Espadon (Ritz) 2⭐ :</strong> Salle somptueuse, cuisine française tradition.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Expériences Uniques</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Bar Hemingway (Ritz) :</strong> Cocktails historiques dans le bar mythique. Réservation.</li>
                    <li><strong>Spa Dior (Plaza) :</strong> Seul spa Dior Institut au monde. Soins exclusifs.</li>
                    <li><strong>Piscine Bristol :</strong> Toit avec vue Paris. Mosaïques Odorico. Unique palace.</li>
                    <li><strong>Fleurs Jeff Leatham (George V) :</strong> Compositions florales monumentales à voir.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">🎁 Nos Recommandations Finales</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Meilleur Overall :</strong> Le Bristol (gastronomie + jardin + service + rapport qualité-prix)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Plus Iconique :</strong> Plaza Athénée (façade rouge + Avenue Montaigne + Spa Dior)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Plus Historique :</strong> Ritz Paris (Coco Chanel + Hemingway + Place Vendôme)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Gastronomie Extrême :</strong> Four Seasons George V (5 étoiles Michelin au total, record mondial)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Premier Séjour Palace :</strong> Le Meurice (localisation Tuileries + prix raisonnable + Alain Ducasse)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-amber-600 via-rose-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Réserver Votre Palace Parisien ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nos experts vous aident à choisir LE palace selon vos envies et négocient les meilleurs tarifs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Demander un Devis Palace
              </Link>
              <Link
                href="/hotels/paris"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Voir nos Hotels Paris
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

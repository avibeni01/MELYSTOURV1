// src/app/hotels/eilat/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hotel, MapPin, Star, Waves, Fish, Palmtree, Check, Phone, Sun, Coffee } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildHotelSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Eilat Mer Rouge All Inclusive : Reservation 2025',
  description: 'Reservez hotel Eilat Mer Rouge au meilleur prix : front de mer, tout compris, hotels familiaux. Plongee snorkeling, plages paradisiaques, vie nocturne. Hotels 3-5*, animation, kids club.',
  canonical: '/hotels/eilat',
  keywords: [
    'hotel eilat',
    'hotel eilat mer rouge',
    'hotel eilat all inclusive',
    'hotel eilat front de mer',
    'hotel eilat famille',
    'reservation hotel eilat'
  ],
  images: [{
    url: '/images/og/hotels-eilat.jpg',
    width: 1200,
    height: 630,
    alt: 'Hotels a Eilat Mer Rouge - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels/eilat')
  }
})

export default function EilatHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Eilat', url: '/hotels/eilat' },
  ])

  const hotelSchema = buildHotelSchema({
    name: 'Hotels a Eilat - Mer Rouge',
    description: 'Hotels 3-5* a Eilat : front de mer, tout compris, plongee et snorkeling',
    url: '/hotels/eilat',
    image: [],
    priceRange: '€€-€€€€',
    address: {
      addressLocality: 'Eilat',
      addressCountry: 'IL'
    },
    starRating: 4,
    amenities: ['Piscine', 'Plage privee', 'Centre plongee', 'All inclusive', 'Kids club', 'Wifi gratuit', 'Animation'],
    checkInTime: '15:00',
    checkOutTime: '11:00'
  })

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelSchema} />

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
            poster="/images/eilat-poster.jpg"
          >
            <source src="/videos/Eilat.mp4" type="video/mp4" />
            {/* Fallback pour navigateurs ne supportant pas la vidéo */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600"></div>
          </video>

          {/* Dark Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Hotels a <span className="text-orange-300">Eilat</span> - Mer Rouge
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                All Inclusive • Plongee • Front de mer • Vie nocturne animee
              </p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{ name: 'Hotels', url: '/hotels' }, { name: 'Eilat', url: '/hotels/eilat' }]} />

        {/* Types d'hotels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nos Categories d'Hotels a Eilat
                </h2>
                <p className="text-xl text-gray-600">
                  Choisissez le type d'hotel ideal pour vos vacances a la Mer Rouge
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                    <Star className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Hotels Luxe 5*</h3>
                  <p className="text-gray-700 mb-4">
                    Front de mer premium, plages privees, multiple piscines, spas, gastronomie, service exceptionnel.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Plages privees equipees
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Restaurants gastronomiques
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Spa & wellness centers
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Waves className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">All Inclusive</h3>
                  <p className="text-gray-700 mb-4">
                    Formules tout compris : repas, boissons, activites, animation, sports nautiques inclus.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Repas buffet illimites
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Boissons incluses (alcool local)
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Animation jour/nuit
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <Palmtree className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Hotels Famille</h3>
                  <p className="text-gray-700 mb-4">
                    Kids clubs, piscines enfants, animations, chambres familiales, menus enfants, baby-sitting.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Kids club 4-12 ans
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Piscines a toboggan
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Chambres communicantes
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Activites & Equipements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Fish size={20} className="text-red-500 mr-2" />
                      Sports Nautiques
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Plongee bouteille et snorkeling (recifs coralliens)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Jet-ski, parachute ascensionnel, banana boat</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Paddle, kayak, pedalos (inclus selon hotels)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Observatoire sous-marin (Coral Beach)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Sun size={20} className="text-red-500 mr-2" />
                      Loisirs & Entertainment
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Piscines multiples (interieures, exterieures, chauffees)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Animation journee/soiree (spectacles, musique live)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Vie nocturne animee (bars, clubs, promenade)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Excursions desert Negev, Petra Jordanie</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Eilat */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Pourquoi choisir Eilat ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="text-red-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Soleil Toute l'Annee</h3>
                  <p className="text-gray-600 text-center">
                    360 jours d'ensoleillement par an. Climat desert chaud. Baignade possible meme en hiver (eau 21°C)
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Fish className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Paradis Plongee</h3>
                  <p className="text-gray-600 text-center">
                    Recifs coralliens exceptionnels. Visibilite 20-40m. Poissons tropicaux, raies, tortues. Sites de plongee classe mondiaux
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-purple-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Zone Franche</h3>
                  <p className="text-gray-600 text-center">
                    Zone detaxee. Shopping electronique, cosmetiques. Aeroport Ramon (20min). Frontiere Jordanie (Petra 2h)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Elynor Tours */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Pourquoi reserver avec Elynor Tours ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-red-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Packages All Inclusive</h3>
                  <p className="text-gray-600">
                    Forfaits tout compris negocies avec supplements inclus (sports nautiques, excursions)
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Conseils Personnalises</h3>
                  <p className="text-gray-600">
                    Selection ideale selon vos priorites : plongee, famille, luxe, vie nocturne
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                  <p className="text-gray-600">
                    Assistance francophone pendant votre sejour balnéaire a Eilat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prix moyens */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Prix Moyens Hotels Eilat All Inclusive (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg">
                  <thead className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                    <tr><th className="px-6 py-4 text-left">Categorie</th><th className="px-6 py-4 text-left">Prix par nuit</th><th className="px-6 py-4 text-left">Exemple</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-semibold">Luxe 5* All Inclusive</td><td className="px-6 py-4 text-red-600 font-bold">350-600€</td><td className="px-6 py-4 text-gray-600">Plage privee, sports nautiques inclus, animation premium</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-semibold">Confort 4* All Inclusive</td><td className="px-6 py-4 text-red-600 font-bold">200-350€</td><td className="px-6 py-4 text-gray-600">Famille, kids club, piscines, buffet qualite</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-semibold">Budget 3* All Inclusive</td><td className="px-6 py-4 text-red-600 font-bold">120-200€</td><td className="px-6 py-4 text-gray-600">Formule economique, services de base</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-gray-700"><span className="font-semibold text-red-600">Tarifs Elynor Tours:</span> Packages all inclusive negocies incluant sports nautiques et excursions.</p>
            </div>
          </div>
        </section>

        {/* Selection hotels - Avec images */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Nos Meilleurs Hotels a Eilat</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">Selection exclusive des meilleurs etablissements avec images</p>

              {/* Luxe 5* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center"><Star className="text-yellow-500 mr-3" size={28} />Hotels Luxe 5* All Inclusive (350-600€/nuit)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {name: "Herods Palace Hotel & Spa Eilat", image: "/images/hotels/eilat/Herods Palace Hotels & Spa Eilat a Premium collection by Fattal Hotels1.webp", rating: "4.7/5", price: "500€", loc: "Front de mer premium", features: ["Palace luxueux architecture inspiree de Petra", "All Inclusive premium, service exceptionnel", "Plage privee, piscines multiples, spa luxe"], tags: ["Palace", "All Inclusive", "Plage privee", "Spa"]},
                    {name: "Queen of Sheba Eilat", image: "/images/hotels/eilat/Queen of Sheba Eilat1.webp", rating: "4.6/5", price: "480€", loc: "Lagoon Beach", features: ["Theme Reine de Saba spectaculaire", "Piscines exceptionnelles, spa egyptien", "All Inclusive premium, ambiance feerique"], tags: ["Thematique", "Spectaculaire", "Spa", "All Inclusive"]},
                    {name: "King Solomon by Isrotel Collection", image: "/images/hotels/eilat/King Solomon by Isrotel Collection1.webp", rating: "4.5/5", price: "450€", loc: "Front de mer", features: ["Design inspire du roi Salomon", "Service Isrotel excellence garantie", "Kids club, restaurants, piscines"], tags: ["Design unique", "Isrotel", "Famille", "Premium"]},
                    {name: "Isrotel Royal Garden", image: "/images/hotels/eilat/isrotel-royal-garden.webp", rating: "4.6/5", price: "470€", loc: "Front de mer Eilat", features: ["Jardins tropicaux luxuriants exceptionnels", "Suites spacieuses, atmosphere paisible", "Spa, restaurants, service personnalise"], tags: ["Jardins", "Suites", "Spa", "Luxe"]},
                    {name: "Dan Eilat Hotel", image: "/images/hotels/eilat/Dan Eilat Hotel.webp", rating: "4.5/5", price: "440€", loc: "Front de mer premium", features: ["Chaine Dan Hotels prestige garantie", "Plage privee exclusive, piscines", "Service d'exception, restaurants"], tags: ["Dan Hotels", "Plage privee", "Premium", "Prestige"]},
                    {name: "Royal Beach Eilat", image: "/images/hotels/eilat/Royal Beach.webp", rating: "4.5/5", price: "420€", loc: "Front de mer", features: ["All Inclusive luxe, front de mer", "Service premium, design contemporain", "Spa, piscines, restaurants gastronomiques"], tags: ["All Inclusive", "Luxe", "Front de mer", "Spa"]}
                  ].map((h, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-48 bg-gray-200">
                        <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                        <div className="absolute top-2 right-2 bg-green-100 px-3 py-1 rounded-full flex items-center">
                          <Star className="text-green-600 mr-1" size={16} />
                          <span className="font-bold text-green-600">{h.rating}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{h.name}</h4>
                        <p className="text-gray-600 mb-2 flex items-center text-sm"><MapPin size={14} className="mr-1 text-red-500" />{h.loc}</p>
                        <p className="text-xl font-bold text-red-600 mb-3">A partir de {h.price}/nuit</p>
                        <ul className="space-y-1 mb-3">
                          {h.features.map((f, j) => <li key={j} className="flex items-start text-xs"><Check size={14} className="text-green-500 mr-1 mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
                        </ul>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {h.tags.map((t, j) => <span key={j} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{t}</span>)}
                        </div>
                        <Link href="/contact" className="block w-full text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm">Demander un devis</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Famille 4* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center"><Palmtree className="text-blue-500 mr-3" size={28} />Hotels Famille 4* All Inclusive (200-350€/nuit)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {name: "Dan Panorama Eilat", image: "/images/hotels/eilat/Dan Panorama Eilat.webp", rating: "4.3/5", price: "300€", loc: "Front de mer", features: ["Hotel familial moderne vue mer", "Excellent rapport qualite-prix", "Kids club, piscine, plage proche"], tags: ["Famille", "Vue mer", "Dan Hotels", "Qualite"]},
                    {name: "Leonardo Plaza Hotel Eilat", image: "/images/hotels/eilat/Leonardo Plaza Hotel Eilat.webp", rating: "4.2/5", price: "280€", loc: "Golfe Eilat", features: ["Hotel moderne vue sur le golfe", "Chambres confortables, bon rapport qualite-prix", "Piscine, restaurant, centre fitness"], tags: ["Moderne", "Confort", "Economique", "Fitness"]},
                    {name: "Yam Suf by Isrotel Collection", image: "/images/hotels/eilat/Yam Suf by Isrotel Collection.webp", rating: "4.3/5", price: "310€", loc: "North Beach", features: ["All Inclusive famille Isrotel", "Kids club, animation, plage proche", "Sports nautiques, buffets varies"], tags: ["All Inclusive", "Isrotel", "Kids club", "Animation"]},
                    {name: "Lagoona by Isrotel Collection", image: "/images/hotels/eilat/Lagoona by Isrotel Collection.webp", rating: "4.4/5", price: "320€", loc: "Lagoon Beach", features: ["Lagune artificielle avec toboggans", "Paradis pour enfants, parc aquatique", "All Inclusive, kids club, restaurants"], tags: ["Lagune", "Toboggan", "Kids", "All Inclusive"]},
                    {name: "Agamim by Isrotel Collection", image: "/images/hotels/eilat/Agamim by Isrotel Collection.webp", rating: "4.3/5", price: "300€", loc: "Eilat", features: ["Piscines et lagunes artificielles", "Parfait familles, parc aquatique integre", "Animation, kids club, all inclusive"], tags: ["Piscines", "Famille", "Animation", "Aquatique"]},
                    {name: "U Splash Resort Eilat", image: "/images/hotels/eilat/U Splash Resort Eilat.webp", rating: "4.2/5", price: "290€", loc: "Eilat", features: ["Parc aquatique geant inclus", "Resort familial moderne fun", "All Inclusive, kids club, animation"], tags: ["Parc aquatique", "Fun", "All Inclusive", "Moderne"]},
                    {name: "Vert Hotel Eilat", image: "/images/hotels/eilat/Vert Hotel Eilat by AFI Hotels.webp", rating: "4.1/5", price: "260€", loc: "Mer Rouge", features: ["Hotel moderne ecologique design", "Piscine rooftop avec vue mer", "Restaurant, bar, approche verte"], tags: ["Ecologique", "Rooftop", "Design", "Vue mer"]},
                    {name: "Sport Hotel Eilat", image: "/images/hotels/eilat/sport club eilat.webp", rating: "3.9/5", price: "220€", loc: "Eilat", features: ["Hotel sportif installations completes", "Centre sportif, piscine, terrains", "Ideal sportifs, bon rapport qualite-prix"], tags: ["Sportif", "Economique", "Installations", "Actif"]},
                    {name: "Aira Boutique Hotel Eilat", image: "/images/hotels/eilat/aira.webp", rating: "4.2/5", price: "270€", loc: "Eilat", features: ["Hotel boutique design contemporain", "Ambiance intimiste, service personnalise", "Piscine, restaurant, bar"], tags: ["Boutique", "Design", "Intimiste", "Moderne"]}
                  ].map((h, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-48 bg-gray-200">
                        <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                        <div className="absolute top-2 right-2 bg-yellow-100 px-3 py-1 rounded-full flex items-center">
                          <Star className="text-yellow-600 mr-1" size={16} />
                          <span className="font-bold text-yellow-600">{h.rating}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{h.name}</h4>
                        <p className="text-gray-600 mb-2 flex items-center text-sm"><MapPin size={14} className="mr-1 text-blue-500" />{h.loc}</p>
                        <p className="text-xl font-bold text-blue-600 mb-3">A partir de {h.price}/nuit</p>
                        <ul className="space-y-1 mb-3">
                          {h.features.map((f, j) => <li key={j} className="flex items-start text-xs"><Check size={14} className="text-green-500 mr-1 mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
                        </ul>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {h.tags.map((t, j) => <span key={j} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{t}</span>)}
                        </div>
                        <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm">Demander un devis</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maillage interne */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Completez votre sejour</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/location-voiture" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">Location Voiture</h3>
                  <p className="text-gray-600 text-sm">Explorez le Negev et frontiere Jordanie</p>
                </Link>
                <Link href="/hotels/mer-morte" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-teal-600">Hotels Mer Morte</h3>
                  <p className="text-gray-600 text-sm">Combinez Eilat + Mer Morte</p>
                </Link>
                <Link href="/plages" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-600">Guide Plages Israel</h3>
                  <p className="text-gray-600 text-sm">Mer Rouge et Mediterranee</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reservez votre hotel a Eilat
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              All inclusive • Plongee • Plages paradisiaques • Tarifs negocies
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Demander un devis
                <Phone size={20} className="ml-2" />
              </Link>
              <Link href="/hotels" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Autres destinations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

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

        {/* Selection hotels - Format compact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Nos Meilleurs Hotels a Eilat</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">Selection exclusive des 12 meilleurs etablissements All Inclusive</p>

              {/* Luxe 5* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center"><Star className="text-yellow-500 mr-3" size={28} />Hotels Luxe 5* All Inclusive (350-600€/nuit)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {name: "Isrotel Royal Garden All Suites Hotel", rating: "4.5/5", price: "450€", loc: "Front de mer Eilat", features: ["Suites spacieuses, jardins tropicaux luxuriants", "All Inclusive premium : 7 restaurants, bars illimites", "Piscines multiples, spa, centre plongee, kids club"], tags: ["All Inclusive", "Spa", "7 restaurants", "Plongee"]},
                    {name: "Herods Boutique Eilat", rating: "4.5/5", price: "480€", loc: "Front de mer premium", features: ["Design contemporain luxueux, service exceptionnel", "Plage privee equipee, piscines infinity vue mer", "Spa de luxe, restaurants gastronomiques, nightclub"], tags: ["Design", "Plage privee", "Nightlife", "Spa luxe"]},
                    {name: "Orchid Hotel Eilat", rating: "4.5/5", price: "520€", loc: "Coral Beach (plongee)", features: ["Face recifs coralliens (plongee exceptionnelle)", "Theme thailandais unique, architecture exotique", "Spa asiatique, lagunes, restaurants fusion"], tags: ["Plongee", "Thematique", "Spa asiatique", "Luxe"]},
                    {name: "Leonardo Royal Resort Eilat", rating: "4.5/5", price: "420€", loc: "Lagoon Beach", features: ["All Inclusive complet, plage lagoon calme", "6 piscines dont toboggan geant, kids club excellent", "Animation professionnelle, sports nautiques inclus"], tags: ["6 piscines", "Toboggan", "Famille", "Sports inclus"]},
                    {name: "Queen of Sheba Eilat", rating: "4.5/5", price: "500€", loc: "Lagoon Beach", features: ["Theme Reine de Saba (decor pharaonique unique)", "Piscines spectaculaires, spa egyptien luxueux", "All Inclusive premium, ambiance feerique"], tags: ["Thematique", "Spectaculaire", "Spa", "Unique"]}
                  ].map((h, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-gray-800">{h.name}</h4>
                          <div className="flex items-center bg-green-100 px-2 py-1 rounded-full"><Star className="text-green-600 mr-1" size={14} /><span className="font-bold text-green-600 text-sm">{h.rating}</span></div>
                        </div>
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
                    {name: "Club Hotel Eilat", rating: "4.0/5", price: "280€", loc: "Front de mer central", features: ["Ideal familles, kids club 4-12 ans excellent", "All Inclusive complet, animation jour/nuit", "Piscines enfants, toboggan, plage privee"], tags: ["Famille", "Kids club", "Toboggan", "Animation"]},
                    {name: "Isrotel Yam Suf Hotel", rating: "4.0/5", price: "300€", loc: "North Beach", features: ["Chaine Isrotel (qualite garantie), All Inclusive", "Piscines avec vue mer, plage privee equipee", "Sports nautiques inclus, animation energique"], tags: ["All Inclusive", "Vue mer", "Sports inclus", "Qualite"]},
                    {name: "U Magic Palace Hotel", rating: "4.0/5", price: "260€", loc: "Lagoon Beach", features: ["Concept familial fun, theme parc aquatique", "Mega piscine toboggan, kids club, mini-golf", "All Inclusive, buffets varies, animation"], tags: ["Toboggan mega", "Kids", "Fun", "Buffets"]},
                    {name: "Dan Eilat Hotel", rating: "4.0/5", price: "320€", loc: "Front de mer premium", features: ["Chaine Dan (service fiable), front de mer", "Piscine rooftop vue mer, plage privee", "Demi-pension ou All Inclusive, qualite superieure"], tags: ["Dan Hotels", "Rooftop", "Plage", "Qualite"]},
                    {name: "Astral Nirvana Club Hotel", rating: "4.0/5", price: "240€", loc: "Coral Beach area", features: ["All Inclusive economique qualite correcte", "Piscines enfants, kids club, animation famille", "Proche Coral Beach (plongee 5min), calme"], tags: ["Economique", "Famille", "Coral Beach", "Calme"]}
                  ].map((h, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-gray-800">{h.name}</h4>
                          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full"><Star className="text-yellow-600 mr-1" size={14} /><span className="font-bold text-yellow-600 text-sm">{h.rating}</span></div>
                        </div>
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

              {/* Budget 3* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center"><Coffee className="text-green-500 mr-3" size={28} />Hotels Budget 3* (120-200€/nuit)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {name: "Astral Maris Hotel", rating: "4.0/5", price: "180€", loc: "Coral Beach", features: ["Meilleur rapport qualite-prix Eilat All Inclusive", "Proche Coral Beach (plongee exceptionnelle)", "Piscine, buffet correct, propre et fonctionnel"], tags: ["Budget", "Coral Beach", "All Inclusive", "Propre"]},
                    {name: "Nova Like Hotel Eilat", rating: "4.0/5", price: "150€", loc: "Centre-ville", features: ["Hotel moderne economique, chambres renovees", "Demi-pension ou petit-dejeuner, wifi gratuit", "Centre-ville anime, plages 5min a pied"], tags: ["Moderne", "Centre-ville", "Economique", "Plages proches"]}
                  ].map((h, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-gray-800">{h.name}</h4>
                          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full"><Star className="text-yellow-600 mr-1" size={14} /><span className="font-bold text-yellow-600 text-sm">{h.rating}</span></div>
                        </div>
                        <p className="text-gray-600 mb-2 flex items-center text-sm"><MapPin size={14} className="mr-1 text-green-500" />{h.loc}</p>
                        <p className="text-xl font-bold text-green-600 mb-3">A partir de {h.price}/nuit</p>
                        <ul className="space-y-1 mb-3">
                          {h.features.map((f, j) => <li key={j} className="flex items-start text-xs"><Check size={14} className="text-green-500 mr-1 mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
                        </ul>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {h.tags.map((t, j) => <span key={j} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{t}</span>)}
                        </div>
                        <Link href="/contact" className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">Demander un devis</Link>
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

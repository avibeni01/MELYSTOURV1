// src/app/hotels/mer-morte/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hotel, MapPin, Star, Sparkles, Waves, Check, Phone, Droplet } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildHotelSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Spa Mer Morte Ein Bokek : Wellness & Detente 2025',
  description: 'Reservez hotel spa Mer Morte au meilleur prix : Ein Bokek, Neve Zohar. Hotels 4-5* piscines minerales, soins therapeutiques, boue naturelle. Vue mer exceptionnelle, tout compris disponible.',
  canonical: '/hotels/mer-morte',
  keywords: [
    'hotel mer morte',
    'hotel spa mer morte',
    'hotel ein bokek',
    'hotel mer morte neve zohar',
    'spa mer morte israel',
    'hotel mer morte tout compris'
  ],
  images: [{
    url: '/images/og/hotels-mer-morte.jpg',
    width: 1200,
    height: 630,
    alt: 'Hotels Spa a la Mer Morte - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels/mer-morte')
  }
})

export default function MerMorteHotelsPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
    { name: 'Mer Morte', url: '/hotels/mer-morte' },
  ])

  const hotelSchema = buildHotelSchema({
    name: 'Hotels Spa a la Mer Morte',
    description: 'Hotels spa 4-5* a la Mer Morte avec piscines minerales et soins therapeutiques',
    url: '/hotels/mer-morte',
    image: [],
    priceRange: '€€€-€€€€',
    address: {
      addressLocality: 'Ein Bokek',
      addressRegion: 'Mer Morte',
      addressCountry: 'IL'
    },
    starRating: 5,
    amenities: ['Spa', 'Piscine minerale', 'Plage privee', 'Soins boue', 'Restaurant', 'Wifi gratuit', 'Parking'],
    checkInTime: '15:00',
    checkOutTime: '11:00'
  })

  const spaSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Spas de la Mer Morte',
    description: 'Centres de bien-être et spas therapeutiques a la Mer Morte',
    url: 'https://elynortours.com/hotels/mer-morte',
    priceRange: '€€€-€€€€',
    amenityFeature: [
      'Soins boue Mer Morte',
      'Massages therapeutiques',
      'Piscines minerales',
      'Bains sulfureux',
      'Enveloppements boue'
    ]
  }

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelSchema} />
      <JsonLd data={spaSchema} />

      <div className="min-h-screen">
        {/* Hero with Video Background */}
        <section className="relative h-[50vh] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/mer-morte-poster.jpg"
          >
            <source src="/videos/deadsea.mp4" type="video/mp4" />
            {/* Fallback pour navigateurs ne supportant pas la vidéo */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
          </video>

          {/* Dark Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Hotels Spa a la <span className="text-cyan-300">Mer Morte</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                Wellness • Soins therapeutiques • Piscines minerales • Vue exceptionnelle
              </p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{ name: 'Hotels', url: '/hotels' }, { name: 'Mer Morte', url: '/hotels/mer-morte' }]} />

        {/* Zones principales */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nos Destinations Mer Morte
                </h2>
                <p className="text-xl text-gray-600">
                  Choisissez votre oasis de bien-être au bord de la mer la plus salee du monde
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Ein Bokek</h3>
                  <p className="text-gray-700 mb-4">
                    Zone hoteliere principale avec les plus grands complexes spa 4-5*. Plages privees, centres wellness, restaurants.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Hotels de luxe 5*
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Centres spa ultra-modernes
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Plages privees amenagees
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Restaurants gastronomiques
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Waves className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Neve Zohar</h3>
                  <p className="text-gray-700 mb-4">
                    Zone residentielleSpa plus calme, hotels familiaux, atmosphere paisible, tarifs competitifs.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Meilleur rapport qualite-prix
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Atmosphere familiale
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Acces plages Ein Bokek (5min)
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Environnement calme
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Soins & Equipements Spa
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Droplet size={20} className="text-teal-500 mr-2" />
                      Soins Therapeutiques
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Enveloppements boue Mer Morte (mineraux naturels)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Massages therapeutiques (arthrite, psoriasis, rhumatismes)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Bains sulfureux et piscines minerales chauffees</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Soins visage produits cosmetiques Mer Morte</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <Star size={20} className="text-teal-500 mr-2" />
                      Equipements Hotels
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Piscines minerales interieures/exterieures 32-34°C</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Plages privees avec douches eau douce</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Restaurants kasher/international, bars, buffets</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Chambres vue mer, balcons, climatisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels selection */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Nos Meilleurs Hotels & Resorts Mer Morte</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {name: "Isrotel Dead Sea Resort & Spa", rating: "4.0/5", price: "380€", features: ["Resort luxe all inclusive, plage privee Mer Morte", "Spa complet : boue, soins mineraux, massages therapeutiques", "Piscines eau douce + minerale, restaurants kasher, animation"], tags: ["All Inclusive", "Spa luxe", "Plage privee", "Kasher"]},
                  {name: "David Dead Sea Resort & Spa", rating: "4.0/5", price: "320€", features: ["Resort & Spa elegant, plage privee equipee", "Centre spa therapeutique complet, piscines int/ext", "Restaurants varies, parking gratuit, navette Jerusalem"], tags: ["Spa therapeutique", "2 piscines", "Navette", "Parking gratuit"]},
                  {name: "Crowne Plaza Dead Sea", rating: "4.0/5", price: "280€", features: ["Chaine IHG (qualite fiable), plage privee Mer Morte", "Spa mineraux, piscine sulfureuse therapeutique unique", "Chambres vue mer, restaurants, proche Ein Bokek centre"], tags: ["IHG Hotels", "Piscine sulfureuse", "Vue mer", "Ein Bokek"]},
                  {name: "Leonardo Club Dead Sea", rating: "4.0/5", price: "260€", features: ["All Inclusive familial, kids club 4-12 ans, animation", "Plage privee, spa boue, piscines enfants/adultes separees", "Buffets varies, proche site UNESCO Masada et Ein Gedi"], tags: ["All Inclusive", "Famille", "Kids club", "Masada 20km"]},
                  {name: "Lot Spa Hotel", rating: "3.5/5", price: "200€", features: ["Spa economique qualite correcte, plage privee Mer Morte", "Soins boue minerale essentiels, piscine sulfureuse", "Chambres simples propres, demi-pension, wifi gratuit, calme"], tags: ["Budget", "Spa", "Demi-pension", "Calme"]}
                ].map((h, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-teal-100">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{h.name}</h3>
                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-full"><Star className="text-green-600 mr-1" size={16} /><span className="font-bold text-green-600">{h.rating}</span></div>
                      </div>
                      <p className="text-2xl font-bold text-teal-600 mb-4">A partir de {h.price}/nuit</p>
                      <ul className="space-y-2 mb-4">
                        {h.features.map((f, j) => <li key={j} className="flex items-start text-sm"><Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {h.tags.map((t, j) => <span key={j} className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">{t}</span>)}
                      </div>
                      <Link href="/contact" className="block w-full text-center bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold">Demander un devis</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefices Mer Morte */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Bienfaits Therapeutiques de la Mer Morte
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                Decouvrez les proprietes curatives uniques de la Mer Morte, reconnues scientifiquement pour leurs bienfaits sur la peau et la sante
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-teal-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Proprietes Minerales</h3>
                  <p className="text-gray-600 text-center">
                    10x plus salee que l'ocean. 21 mineraux (magnesium, calcium, potassium) aux vertus therapeutiques prouvees
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplet className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Soins Dermatologiques</h3>
                  <p className="text-gray-600 text-center">
                    Traitement naturel psoriasis, eczema, acne. Rayons UV filtres par couche atmospherique unique
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-purple-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Relaxation Profonde</h3>
                  <p className="text-gray-600 text-center">
                    Flottaison naturelle sans effort. Point le plus bas sur Terre (-430m). Air enrichi en oxygene
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/bienfaits-mer-morte"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
                >
                  En savoir plus sur les bienfaits therapeutiques
                  <Sparkles size={20} className="ml-2" />
                </Link>
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
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-teal-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Forfaits Spa Exclusifs</h3>
                  <p className="text-gray-600">
                    Packages spa negocies incluant soins, demi-pension, acces illimite aux piscines
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Meilleurs Tarifs</h3>
                  <p className="text-gray-600">
                    Tarifs preferentiels sur les hotels 5* non disponibles sur les plateformes grand public
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Conseil Personnalise</h3>
                  <p className="text-gray-600">
                    Selection du meilleur hotel selon vos besoins (relaxation, soins medicaux, famille)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maillage interne */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Completez votre sejour</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/bienfaits-mer-morte" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border-t-4 border-cyan-500">
                  <Sparkles className="text-cyan-500 mb-3" size={28} />
                  <h3 className="text-xl font-semibold mb-2 text-cyan-600">Bienfaits Therapeutiques</h3>
                  <p className="text-gray-600 text-sm">Guide complet des proprietes curatives</p>
                </Link>
                <Link href="/plages/mer-morte" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border-t-4 border-teal-500">
                  <Waves className="text-teal-500 mb-3" size={28} />
                  <h3 className="text-xl font-semibold mb-2 text-teal-600">Plages Mer Morte</h3>
                  <p className="text-gray-600 text-sm">Guide des 10+ plages publiques</p>
                </Link>
                <Link href="/hotels/jerusalem" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border-t-4 border-amber-500">
                  <Hotel className="text-amber-500 mb-3" size={28} />
                  <h3 className="text-xl font-semibold mb-2 text-amber-600">Hotels Jerusalem</h3>
                  <p className="text-gray-600 text-sm">45min depuis Mer Morte</p>
                </Link>
                <Link href="/location-voiture" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border-t-4 border-orange-500">
                  <MapPin className="text-orange-500 mb-3" size={28} />
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">Location Voiture</h3>
                  <p className="text-gray-600 text-sm">Acces facilite Mer Morte</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reservez votre hotel spa a la Mer Morte
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Forfaits spa exclusifs • Tarifs negocies • Conseil personnalise
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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

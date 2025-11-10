// src/app/blog/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildI18nAlternates } from '@/lib/seo'
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Blog Voyage & Hotels Luxe : Guides Tokyo Dubai Paris Mer Morte',
  description: 'Blog voyage Elynor Tours : guides hotels luxe Tokyo Dubai Paris, conseils familles, palaces parisiens, spa Mer Morte. Articles SEO 2000+ mots, photos, conseils d\'experts.',
  canonical: '/blog',
  keywords: [
    'blog voyage',
    'guide hotel luxe',
    'blog tokyo',
    'blog dubai',
    'blog paris',
    'conseils voyage',
    'palaces parisiens',
    'hotel famille dubai',
    'spa mer morte',
    'blog voyage israel'
  ]
})

const articles = [
  {
    slug: 'guide-complet-hotel-tokyo-2025',
    title: 'Guide Complet Hotel Tokyo 2025',
    excerpt: 'Guide ultime pour choisir votre hotel de luxe à Tokyo : Aman onsen, Park Hyatt Lost in Translation, Peninsula. Meilleurs quartiers, prix, conseils d\'initiés.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    date: '15 janvier 2025',
    readTime: '12 min',
    category: 'Guides Hotels',
    location: '🇯🇵 Tokyo',
    gradient: 'from-rose-600 to-pink-600'
  },
  {
    slug: 'top-10-hotels-luxe-dubai-familles',
    title: 'Top 10 Hotels Luxe Dubai Familles',
    excerpt: 'Meilleurs hotels familiaux Dubai 2025 : Atlantis aquaparc, Jumeirah Beach kids club, One&Only plages privées. Conseils âges, budget, activités enfants.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    date: '15 janvier 2025',
    readTime: '15 min',
    category: 'Guides Familles',
    location: '🇦🇪 Dubai',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    slug: 'palaces-parisiens-lequel-choisir',
    title: 'Palaces Parisiens : Lequel Choisir ?',
    excerpt: 'Guide comparatif palaces Paris : Bristol Epicure 3*, Plaza Athénée Spa Dior, Ritz Hemingway, George V 5* Michelin. Choisir selon votre profil.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    date: '15 janvier 2025',
    readTime: '18 min',
    category: 'Palaces',
    location: '🇫🇷 Paris',
    gradient: 'from-amber-600 to-rose-600'
  },
  {
    slug: 'top-10-hotels-luxe-mer-morte',
    title: 'Top 10 Hotels Luxe Mer Morte',
    excerpt: 'Top 10 hotels spa Mer Morte 2025 : David Dead Sea, Isrotel, Crowne Plaza. Soins boue, flottaison, plages privées. Prix, meilleure saison, conseils.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    date: '15 janvier 2025',
    readTime: '14 min',
    category: 'Spa & Bien-être',
    location: '🇮🇱 Mer Morte',
    gradient: 'from-teal-600 to-blue-600'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog Voyage & Hotels Luxe
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Guides experts, conseils d'initiés, et secrets des meilleurs hotels du monde
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🗼 Guides Destinations
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                👨‍👩‍👧‍👦 Conseils Familles
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                ⭐ Palaces & Luxe
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💎 Secrets d'Initiés
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${article.gradient} opacity-20`}></div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {article.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {article.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-rose-600 transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Lire l'article
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin de Conseils Personnalisés ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos experts voyage vous aident à choisir l'hotel idéal selon vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Demander un Devis
            </Link>
            <Link
              href="/hotels"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Voir tous nos Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Blog Voyage Elynor Tours : Guides Experts & Conseils d'Initiés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bienvenue sur le <strong>blog voyage Elynor Tours</strong>, votre source d'inspiration
              et de conseils d'experts pour organiser vos séjours dans les <strong>meilleurs hotels
              de luxe au monde</strong>. Depuis 2015, nous partageons notre expertise et nos secrets
              d'initiés pour vous aider à vivre des expériences hôtelières inoubliables.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos <strong>guides complets 2000+ mots</strong> couvrent les destinations les plus
              prisées : <strong>Tokyo</strong> et ses palaces zen avec onsen, <strong>Dubai</strong> et
              ses resorts familiaux avec aquaparcs, <strong>Paris</strong> et ses palaces mythiques
              étoilés Michelin, <strong>Mer Morte</strong> et ses spas thérapeutiques uniques au monde.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chaque article est rédigé par nos experts voyage, enrichi de <strong>conseils pratiques</strong>,
              <strong> budgets détaillés</strong>, <strong>meilleures périodes</strong>, et
              <strong> astuces d'initiés</strong> que vous ne trouverez nulle part ailleurs.
              Suivez notre blog pour ne rien manquer de l'actualité des hotels de luxe et des
              meilleures offres exclusives.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

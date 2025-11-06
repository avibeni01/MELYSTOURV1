// src/app/hotels/page.tsx
import type { Metadata } from 'next'
import HotelPromotionsPage from '@/components/plages/HotelPromotionsPage'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Israel : Reservation Tel Aviv Jerusalem Eilat 2025',
  description: 'Reservez votre hotel en Israel au meilleur prix : Tel Aviv bord de mer, Jerusalem vieille ville, Mer Morte spa, Eilat Mer Rouge. 3-5*, promos, annulation flexible.',
  canonical: '/hotels',
  keywords: [
    'hotel israel',
    'reservation hotel tel aviv',
    'hotel jerusalem',
    'hotel mer morte',
    'hotel eilat',
    'hotel luxe israel',
    'promotion hotel israel'
  ],
  images: [{
    url: '/images/og/hotels-israel.jpg',
    width: 1200,
    height: 630,
    alt: 'Reservation d\'hotels en Israel - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels')
  }
})

export default function HotelsPage() {
  // Breadcrumbs JSON-LD
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
  ])

  // Schema ItemList (destinations hotelieres)
  const hotelsListSchema = buildItemListSchema([
    { name: 'Hotels Tel Aviv', url: '/hotels/tel-aviv', description: 'Front de mer, Rothschild, centre-ville' },
    { name: 'Hotels Jerusalem', url: '/hotels/jerusalem', description: 'Quartier juif, centre, Est' },
    { name: 'Hotels Mer Morte', url: '/hotels/mer-morte', description: 'Spa, wellness, proprietes therapeutiques' },
    { name: 'Hotels Eilat', url: '/hotels/eilat', description: 'Mer Rouge, plongee, tout compris' },
  ], 'Destinations hotelieres en Israel')

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelsListSchema} />

      {/* Hero Section with Video Background */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hotel-poster.jpg"
        >
          <source src="/videos/Hotel-Hero.mp4" type="video/mp4" />
          {/* Fallback pour navigateurs ne supportant pas la vidéo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </video>

        {/* Dark Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Réservez votre <span className="text-red-300">Hôtel </span> Partout dans le Monde
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Meilleures offres • Annulation flexible • Service personnalisé
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de réservation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <HotelBookingForm />
        </div>
      </section>

      <HotelPromotionsPage />
    </>
  )
}

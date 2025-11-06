// src/app/location-voiture/aeroport-ben-gourion/page.tsx
import type { Metadata } from 'next'
import AirportCarRental from '@/components/plages/AirportCarRental'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildCarRentalSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Location Voiture Aeroport Ben Gourion Tel Aviv | Guide 2025',
  description: 'Louez votre voiture a l\'arrivee a l\'aeroport Ben Gourion. Tous les loueurs (Hertz, Avis, Sixt), emplacements terminaux, tarifs. Reservation rapide, vehicules neufs.',
  canonical: '/location-voiture/aeroport-ben-gourion',
  keywords: [
    'location voiture aeroport ben gourion',
    'location voiture tel aviv aeroport',
    'louer voiture aeroport israel',
    'hertz aeroport ben gourion',
    'avis budget aeroport tel aviv',
    'sixt europcar aeroport israel'
  ],
  images: [{
    url: '/images/og/airport-car-rental.jpg',
    width: 1200,
    height: 630,
    alt: 'Location de voiture a l\'aeroport Ben Gourion - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/location-voiture/aeroport-ben-gourion')
  }
})

export default function AeroportBenGourionCarRentalPage() {
  // Breadcrumbs JSON-LD
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Location de Voiture', url: '/location-voiture' },
    { name: 'Aeroport Ben Gourion', url: '/location-voiture/aeroport-ben-gourion' },
  ])

  // Schema Car Rental (exemple generique)
  const carRentalSchema = buildCarRentalSchema({
    name: 'Location de voiture a l\'aeroport Ben Gourion',
    description: 'Service de location de voiture disponible directement a l\'aeroport Ben Gourion de Tel Aviv avec tous les loueurs internationaux',
    brand: 'Elynor Tours',
    model: 'Tous vehicules',
    url: '/location-voiture/aeroport-ben-gourion',
    price: {
      amount: 30,
      currency: 'EUR',
      pricePer: 'day'
    },
    seatingCapacity: 5,
    transmission: 'Automatic',
  })

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={carRentalSchema} />
      <AirportCarRental />
    </>
  )
}

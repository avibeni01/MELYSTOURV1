// src/app/plages/mer-morte/page.tsx
import type { Metadata } from 'next'
import DeadSeaHero from '@/components/plages/DeadSeaHero'
import DeadSeaIntroduction from '@/components/plages/DeadSeaIntroduction'
import DeadSeaBeachesSection from '@/components/plages/DeadSeaBeachesSection'
import DeadSeaReligiousBeachesSection from '@/components/plages/DeadSeaReligiousBeachesSection'
import DeadSeaSafetySection from '@/components/plages/DeadSeaSafetySection'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildTouristAttractionSchema, buildItemListSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Top 10 Plages Mer Morte Israel : Ein Bokek Kalia 2025',
  description: 'Guide complet 10+ plages Mer Morte Israel : Ein Bokek, Mineral Beach, Kalia, Neve Midbar. Proprietes therapeutiques, conseils flottaison, douches, acces, tarifs. Experience unique.',
  canonical: '/plages/mer-morte',
  keywords: [
    'plages mer morte',
    'plages mer morte israel',
    'ein bokek plage',
    'mineral beach mer morte',
    'kalia beach',
    'plage mer morte gratuite'
  ],
  images: [{
    url: '/images/og/plages-mer-morte.jpg',
    width: 1200,
    height: 630,
    alt: 'Plages de la Mer Morte - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/plages/mer-morte')
  }
})

export default function MerMorteBeachesPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Plages', url: '/plages' },
    { name: 'Mer Morte', url: '/plages/mer-morte' },
  ])

  const attractionSchema = buildTouristAttractionSchema({
    name: 'Plages de la Mer Morte',
    description: 'Plus de 10 plages a la Mer Morte offrant une experience de flottaison unique et des bienfaits therapeutiques',
    url: '/plages/mer-morte',
    image: [],
    address: {
      addressLocality: 'Ein Bokek',
      addressRegion: 'Mer Morte',
      addressCountry: 'IL'
    },
    isAccessibleForFree: false
  })

  const beachesListSchema = buildItemListSchema([
    { name: 'Ein Bokek Beach', url: '/plages/mer-morte', description: 'Plage principale de la zone hoteliere avec equipements complets' },
    { name: 'Mineral Beach', url: '/plages/mer-morte', description: 'Plage therapeutique avec boue naturelle et bains sulfureux' },
    { name: 'Kalia Beach', url: '/plages/mer-morte', description: 'Plage nord proche Jerusalem avec piscines et restaurants' },
    { name: 'Ein Gedi Beach', url: '/plages/mer-morte', description: 'Plage nature pres de la reserve naturelle Ein Gedi' },
    { name: 'Neve Midbar Beach', url: '/plages/mer-morte', description: 'Plage gratuite accessible au public' },
  ], 'Principales plages de la Mer Morte')

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={attractionSchema} />
      <JsonLd data={beachesListSchema} />

      <div className="min-h-screen">
        <DeadSeaHero />
        <DeadSeaIntroduction />
        <DeadSeaBeachesSection />
        <DeadSeaReligiousBeachesSection />
        <DeadSeaSafetySection />
      </div>
    </>
  )
}

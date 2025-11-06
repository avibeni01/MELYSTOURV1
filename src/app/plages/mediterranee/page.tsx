// src/app/plages/mediterranee/page.tsx
import type { Metadata } from 'next'
import MediterraneanHero from '@/components/plages/MediterraneanHero'
import MediterraneanIntroduction from '@/components/plages/MediterraneanIntroduction'
import MediterraneanBeachesSection from '@/components/plages/MediterraneanBeachesSection'
import MediterraneanReligiousBeachesSection from '@/components/plages/MediterraneanReligiousBeachesSection'
import MediterraneanSafetySection from '@/components/plages/MediterraneanSafetySection'
import MediterraneanTransportSection from '@/components/plages/MediterraneanTransportSection'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildTouristAttractionSchema, buildItemListSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Top 20 Plages Mediterranee Israel : Tel Aviv Herzliya 2025',
  description: 'Guide des 20 plus belles plages mediterraneennes Israel : Gordon Beach, Herzliya, Acadia, plages separees. Acces, horaires, infos pratiques, conseils securite voyage.',
  canonical: '/plages/mediterranee',
  keywords: [
    'plages mediterranee israel',
    'plages tel aviv',
    'gordon beach',
    'frishman beach',
    'plages herzliya',
    'plages haifa',
    'plages netanya',
    'plages separees israel',
    'baignade mediterranee israel'
  ],
  images: [{
    url: '/images/og/plages-mediterranee.jpg',
    width: 1200,
    height: 630,
    alt: 'Les plus belles plages de la Mediterranee en Israel - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/plages/mediterranee')
  }
})

export default function PlagesMediterraneePage() {
  // Breadcrumbs JSON-LD
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Plages', url: '/plages' },
    { name: 'Mediterranee', url: '/plages/mediterranee' },
  ])

  // Schema TouristAttraction (exemple Gordon Beach)
  const gordonBeachSchema = buildTouristAttractionSchema({
    name: 'Gordon Beach Tel Aviv',
    description: 'L\'une des plages les plus populaires de Tel Aviv avec une ambiance animee, terrains de beach-volley et nombreux bars/restaurants.',
    image: ['/images/plages/gordon-beach.jpg'],
    url: '/plages/mediterranee',
    address: {
      addressLocality: 'Tel Aviv',
      addressRegion: 'District de Tel Aviv',
      addressCountry: 'IL'
    },
    isAccessibleForFree: true,
    publicAccess: true,
    touristType: ['Families', 'Young adults', 'Beach lovers']
  })

  // Schema ItemList (liste des 20 plages)
  const beachesListSchema = buildItemListSchema([
    { name: 'Gordon Beach', url: '/plages/mediterranee', description: 'Plage populaire de Tel Aviv' },
    { name: 'Frishman Beach', url: '/plages/mediterranee', description: 'Plage familiale Tel Aviv' },
    { name: 'Herzliya Pituach', url: '/plages/mediterranee', description: 'Plage premium Herzliya' },
    { name: 'Acadia Beach', url: '/plages/mediterranee', description: 'Plage tranquille Herzliya' },
  ], 'Les 20 plus belles plages de la Mediterranee israelienne')

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={gordonBeachSchema} />
      <JsonLd data={beachesListSchema} />

      <div className="min-h-screen">
        <MediterraneanHero />
        <MediterraneanIntroduction />
        <MediterraneanBeachesSection />
        <MediterraneanReligiousBeachesSection />
        <MediterraneanSafetySection />
        <MediterraneanTransportSection />
      </div>
    </>
  )
}

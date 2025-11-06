import type { Metadata } from 'next'
import FAQ from '@/components/plages/FAQ'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'FAQ Location Voiture Israel : Assurance Permis Documents 2025',
  description: 'Reponses a vos questions location voiture Israel : assurances, permis international, documents requis, assistance Yedidim, Shabbat, carte Visa Premier. Guide complet.',
  canonical: '/faq',
  keywords: [
    'faq location voiture israel',
    'questions frequentes elynor tours',
    'assurance voiture israel',
    'permis international israel',
    'location voiture tel aviv',
    'location voiture jerusalem',
    'assistance routiere israel',
    'yedidim assistance',
    'shabbat location voiture',
    'carte visa premier israel'
  ],
  images: [{
    url: '/images/og/faq-elynor-tours.jpg',
    width: 1200,
    height: 630,
    alt: 'FAQ Location Voiture Israel - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/faq')
  }
})

export default function FAQPage() {
  // Breadcrumbs JSON-LD
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ])

  // FAQ Schema
  const faqSchema = buildFAQSchema([
    {
      question: 'Comment puis-je reserver une voiture de location ?',
      answer: 'Pour reserver votre voiture, contactez-nous via WhatsApp au +972-58-414-0489, par mail a contact@elynortours.com ou appelez le +33-1-82-83-67-29. Notre equipe vous repondra rapidement avec un devis personnalise.'
    },
    {
      question: 'Quels documents sont necessaires pour louer une voiture en Israel ?',
      answer: 'Vous devez presenter un passeport valide, un permis de conduire valide depuis plus de 2 ans, et une carte de credit internationale au nom du conducteur principal.'
    },
    {
      question: 'Ai-je besoin d\'un permis international pour conduire en Israel ?',
      answer: 'Non, un permis de conduire francais valide est suffisant pour conduire en Israel. Le permis international n\'est pas obligatoire.'
    },
    {
      question: 'Quelle assurance est incluse dans la location ?',
      answer: 'Toutes nos locations incluent une assurance de base (CDW/LDW). Des assurances complementaires zero franchise sont disponibles pour une protection totale.'
    },
    {
      question: 'Puis-je louer une voiture pendant Shabbat ?',
      answer: 'Oui, vous pouvez louer une voiture pendant Shabbat. Cependant, certains bureaux de location peuvent etre fermes. Contactez-nous pour organiser votre prise en charge.'
    }
  ])

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <FAQ />
    </>
  )
}

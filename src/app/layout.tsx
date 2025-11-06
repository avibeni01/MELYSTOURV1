import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { organizationSchema, websiteSchema } from '@/lib/constants/structured-data'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Détection du mode staging pour noindex
const isStaging = process.env.NEXT_PUBLIC_NOINDEX === 'true'

export const metadata: Metadata = {
  metadataBase: new URL('https://elynortours.com'),

  title: {
    default: 'Elynor Tours : Location Voiture & Hôtels en Israël',
    template: '%s - Elynor Tours'
  },

  description: 'Location de voiture et réservation d\'hôtels en Israël au meilleur prix. Service francophone, assistance 24/7. Spécialiste voyage depuis 2015.',

  keywords: [
    'location voiture israël',
    'hotel israël',
    'voyage israël',
    'tel aviv',
    'jerusalem',
    'location voiture tel aviv',
    'hotel mer morte',
    'location voiture aéroport ben gourion',
    'plages israël'
  ],

  authors: [{ name: 'Elynor Tours' }],
  creator: 'Elynor Tours',
  publisher: 'Elynor Tours',

  robots: isStaging ? {
    index: false,
    follow: false,
  } : {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://elynortours.com',
    siteName: 'Elynor Tours',
    title: 'Elynor Tours : Location Voiture & Hôtels en Israël',
    description: 'Location de voiture et réservation d\'hôtels en Israël au meilleur prix. Service francophone depuis 2015.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Elynor Tours - Location de voiture et hôtels en Israël',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@ElynorTours',
    creator: '@ElynorTours',
    title: 'Elynor Tours : Location Voiture & Hôtels en Israël',
    description: 'Location de voiture et réservation d\'hôtels en Israël au meilleur prix.',
    images: ['/og-default.jpg'],
  },

  alternates: {
    canonical: 'https://elynortours.com',
    languages: {
      'fr': 'https://elynortours.com',
      // Prêt pour EN/HE plus tard :
      // 'en': 'https://elynortours.com/en',
      // 'he': 'https://elynortours.com/he',
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* JSON-LD globaux : Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema])
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
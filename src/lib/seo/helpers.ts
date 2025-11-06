/**
 * Helpers SEO pour Next.js App Router (Elynor Tours)
 * Utilise les Metadata API de Next.js 15
 */

import type { Metadata } from 'next'

/**
 * Construit l'URL absolue à partir d'un chemin relatif
 * @param path - Chemin relatif (ex: "/hotels/tel-aviv")
 * @returns URL absolue complète
 */
export function absoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elynortours.com'
  // Nettoyer les doubles slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

/**
 * Interface pour buildMetadata (facilite l'usage)
 */
export interface BuildMetadataParams {
  /** Title de la page (50-60 caractères recommandés) */
  title: string
  /** Meta description (150-160 caractères recommandés) */
  description: string
  /** Chemin canonique (ex: "/hotels/tel-aviv") */
  canonical?: string
  /** Keywords (optionnel, peu utilisé par Google mais utile pour autres moteurs) */
  keywords?: string[]
  /** Images OpenGraph (si non fourni, utilise image par défaut) */
  images?: { url: string; width?: number; height?: number; alt?: string }[]
  /** Forcer noindex (utile pour pages de test) */
  noindex?: boolean
  /** Alternates pour i18n (ex: { en: "/en/hotels/tel-aviv", he: "/he/.../" }) */
  alternates?: {
    languages?: Record<string, string>
  }
  /** Type OpenGraph (default: "website") */
  type?: 'website' | 'article'
  /** Locale OpenGraph (default: "fr_FR") */
  locale?: string
  /** Auteur (pour articles de blog) */
  author?: string
}

/**
 * Construit l'objet Metadata optimisé pour Next.js App Router
 * À utiliser dans page.tsx : export const metadata = buildMetadata({...})
 */
export function buildMetadata(params: BuildMetadataParams): Metadata {
  const {
    title,
    description,
    canonical,
    keywords = [],
    images,
    noindex = false,
    alternates,
    type = 'website',
    locale = 'fr_FR',
    author,
  } = params

  // Détection du mode staging via env var
  const isStaging = process.env.NEXT_PUBLIC_NOINDEX === 'true'
  const shouldNoindex = noindex || isStaging

  // Image par défaut si non fournie
  const defaultImage = {
    url: absoluteUrl('/og-default.jpg'),
    width: 1200,
    height: 630,
    alt: 'Elynor Tours - Location de voiture et hôtels en Israël',
  }

  const ogImages = images || [defaultImage]

  // Construction des metadata Next.js
  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: 'Elynor Tours' }],
    creator: 'Elynor Tours',
    publisher: 'Elynor Tours',

    // Robots
    robots: shouldNoindex
      ? {
          index: false,
          follow: false,
        }
      : {
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

    // OpenGraph
    openGraph: {
      title,
      description,
      type,
      locale,
      url: canonical ? absoluteUrl(canonical) : undefined,
      siteName: 'Elynor Tours',
      images: ogImages.map((img) => ({
        url: img.url.startsWith('http') ? img.url : absoluteUrl(img.url),
        width: img.width || 1200,
        height: img.height || 630,
        alt: img.alt || title,
      })),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@ElynorTours',
      images: ogImages.map((img) =>
        img.url.startsWith('http') ? img.url : absoluteUrl(img.url)
      ),
    },

    // Alternates (canonical + hreflang)
    alternates: {
      canonical: canonical ? absoluteUrl(canonical) : undefined,
      languages: alternates?.languages || undefined,
    },
  }

  return metadata
}

/**
 * Génère les alternates pour i18n (hreflang)
 * @param path - Chemin de base (ex: "/hotels/tel-aviv")
 * @returns Object avec fr, en, he
 */
export function buildI18nAlternates(path: string): Record<string, string> {
  // Pour l'instant, FR uniquement (prêt pour EN/HE plus tard)
  return {
    fr: absoluteUrl(path),
    // Décommenter quand les traductions seront prêtes :
    // en: absoluteUrl(`/en${path}`),
    // he: absoluteUrl(`/he${path}`),
  }
}

/**
 * Valide la longueur du title (SEO best practice)
 * @param title - Title à valider
 * @returns true si entre 50-60 caractères, false sinon
 */
export function validateTitleLength(title: string): boolean {
  const length = title.length
  return length >= 50 && length <= 60
}

/**
 * Valide la longueur de la meta description (SEO best practice)
 * @param description - Description à valider
 * @returns true si entre 150-160 caractères, false sinon
 */
export function validateDescriptionLength(description: string): boolean {
  const length = description.length
  return length >= 150 && length <= 160
}

/**
 * Tronque le title à 60 caractères max (en cas de dépassement)
 * @param title - Title à tronquer
 * @returns Title tronqué avec "..." si nécessaire
 */
export function truncateTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title
  return title.slice(0, maxLength - 3) + '...'
}

/**
 * Tronque la description à 160 caractères max
 * @param description - Description à tronquer
 * @returns Description tronquée avec "..." si nécessaire
 */
export function truncateDescription(
  description: string,
  maxLength: number = 160
): string {
  if (description.length <= maxLength) return description
  return description.slice(0, maxLength - 3) + '...'
}

/**
 * Nettoie une URL de ses paramètres UTM/session pour canonique
 * @param url - URL à nettoyer
 * @returns URL sans params
 */
export function cleanUrlForCanonical(url: string): string {
  try {
    const urlObj = new URL(url, absoluteUrl('/'))
    // Retirer tous les query params (UTM, session, etc.)
    return urlObj.pathname
  } catch {
    return url
  }
}

/**
 * Génère un slug SEO-friendly à partir d'un texte
 * @param text - Texte à transformer
 * @returns Slug en minuscules, sans accents, avec tirets
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Décompose les accents
    .replace(/[\u0300-\u036f]/g, '') // Retire les accents
    .replace(/[^\w\s-]/g, '') // Retire caractères spéciaux
    .replace(/\s+/g, '-') // Espaces -> tirets
    .replace(/-+/g, '-') // Double tirets -> simple
    .trim()
}

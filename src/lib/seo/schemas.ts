/**
 * Builders pour schemas JSON-LD (Schema.org)
 * Elynor Tours - Next.js App Router
 */

import { absoluteUrl } from './helpers'

/**
 * Interface pour Breadcrumb Item
 */
export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Génère un schema BreadcrumbList
 * @param items - Liste des éléments du fil d'Ariane
 * @returns Schema BreadcrumbList
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}

/**
 * Interface pour Hotel
 */
export interface HotelSchemaParams {
  name: string
  description: string
  image: string[]
  address: {
    streetAddress?: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  telephone?: string
  email?: string
  url: string
  priceRange?: string
  starRating?: number
  amenities?: string[]
  checkInTime?: string // Format "14:00"
  checkOutTime?: string // Format "11:00"
}

/**
 * Génère un schema Hotel
 * @param params - Paramètres de l'hôtel
 * @returns Schema Hotel
 */
export function buildHotelSchema(params: HotelSchemaParams) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: params.name,
    description: params.description,
    image: params.image.map((img) =>
      img.startsWith('http') ? img : absoluteUrl(img)
    ),
    address: {
      '@type': 'PostalAddress',
      ...params.address,
    },
    url: absoluteUrl(params.url),
  }

  if (params.geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: params.geo.latitude,
      longitude: params.geo.longitude,
    }
  }

  if (params.telephone) schema.telephone = params.telephone
  if (params.email) schema.email = params.email
  if (params.priceRange) schema.priceRange = params.priceRange

  if (params.starRating) {
    schema.starRating = {
      '@type': 'Rating',
      ratingValue: params.starRating,
      bestRating: 5,
    }
  }

  if (params.amenities && params.amenities.length > 0) {
    schema.amenityFeature = params.amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
    }))
  }

  if (params.checkInTime) schema.checkinTime = params.checkInTime
  if (params.checkOutTime) schema.checkoutTime = params.checkOutTime

  return schema
}

/**
 * Interface pour Car Rental
 */
export interface CarRentalSchemaParams {
  name: string
  description: string
  brand: string
  model: string
  image?: string[]
  url: string
  price?: {
    amount: number
    currency: string
    pricePer: 'day' | 'week' | 'month'
  }
  fuelType?: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid'
  seatingCapacity?: number
  transmission?: 'Manual' | 'Automatic'
  vehicleCategory?:
    | 'Economy'
    | 'Compact'
    | 'Standard'
    | 'SUV'
    | 'Luxury'
    | 'Van'
    | 'Minivan'
}

/**
 * Génère un schema Car avec RentAction
 * @param params - Paramètres de la voiture
 * @returns Schema Car avec RentAction
 */
export function buildCarRentalSchema(params: CarRentalSchemaParams) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: `${params.brand} ${params.model}`,
    description: params.description,
    brand: {
      '@type': 'Brand',
      name: params.brand,
    },
    model: params.model,
    url: absoluteUrl(params.url),
  }

  if (params.image && params.image.length > 0) {
    schema.image = params.image.map((img) =>
      img.startsWith('http') ? img : absoluteUrl(img)
    )
  }

  if (params.fuelType) schema.fuelType = params.fuelType
  if (params.seatingCapacity)
    schema.vehicleSeatingCapacity = params.seatingCapacity
  if (params.transmission)
    schema.vehicleTransmission = params.transmission === 'Automatic' ? 'http://schema.org/AutomaticTransmission' : 'http://schema.org/ManualTransmission'
  if (params.vehicleCategory) schema.category = params.vehicleCategory

  // Ajouter RentAction si prix fourni
  if (params.price) {
    schema.potentialAction = {
      '@type': 'RentAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: absoluteUrl(params.url),
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: params.price.amount,
        priceCurrency: params.price.currency,
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: 1,
          unitText: params.price.pricePer === 'day' ? 'DAY' : params.price.pricePer === 'week' ? 'WEEK' : 'MONTH',
        },
      },
    }
  }

  return schema
}

/**
 * Interface pour FAQ
 */
export interface FAQItem {
  question: string
  answer: string
}

/**
 * Génère un schema FAQPage
 * @param faqs - Liste des questions/réponses
 * @returns Schema FAQPage
 */
export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Interface pour Organization
 */
export interface OrganizationSchemaParams {
  name: string
  description: string
  url: string
  logo?: string
  telephone?: string
  email?: string
  contactPoint?: {
    telephone: string
    contactType: string
    areaServed?: string[]
    availableLanguage?: string[]
  }
  sameAs?: string[]
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
}

/**
 * Génère un schema Organization
 * @param params - Paramètres de l'organisation
 * @returns Schema Organization
 */
export function buildOrganizationSchema(params: OrganizationSchemaParams) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.url),
  }

  if (params.logo) {
    schema.logo = params.logo.startsWith('http')
      ? params.logo
      : absoluteUrl(params.logo)
  }

  if (params.telephone) schema.telephone = params.telephone
  if (params.email) schema.email = params.email

  if (params.contactPoint) {
    schema.contactPoint = {
      '@type': 'ContactPoint',
      ...params.contactPoint,
    }
  }

  if (params.sameAs && params.sameAs.length > 0) {
    schema.sameAs = params.sameAs
  }

  if (params.address) {
    schema.address = {
      '@type': 'PostalAddress',
      ...params.address,
    }
  }

  return schema
}

/**
 * Interface pour WebSite (site principal avec SearchAction)
 */
export interface WebSiteSchemaParams {
  name: string
  url: string
  description?: string
  potentialAction?: {
    searchUrl: string // Ex: "https://elynortours.com/recherche?q={search_term_string}"
  }
}

/**
 * Génère un schema WebSite avec SearchAction
 * @param params - Paramètres du site
 * @returns Schema WebSite
 */
export function buildWebSiteSchema(params: WebSiteSchemaParams) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: params.name,
    url: absoluteUrl(params.url),
  }

  if (params.description) schema.description = params.description

  if (params.potentialAction) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: params.potentialAction.searchUrl,
      },
      'query-input': 'required name=search_term_string',
    }
  }

  return schema
}

/**
 * Interface pour TouristAttraction (plages)
 */
export interface TouristAttractionParams {
  name: string
  description: string
  image: string[]
  url: string
  address: {
    addressLocality: string
    addressRegion?: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  isAccessibleForFree?: boolean
  publicAccess?: boolean
  touristType?: string[]
}

/**
 * Génère un schema TouristAttraction (pour les plages)
 * @param params - Paramètres de l'attraction touristique
 * @returns Schema TouristAttraction
 */
export function buildTouristAttractionSchema(params: TouristAttractionParams) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: params.name,
    description: params.description,
    image: params.image.map((img) =>
      img.startsWith('http') ? img : absoluteUrl(img)
    ),
    url: absoluteUrl(params.url),
    address: {
      '@type': 'PostalAddress',
      ...params.address,
    },
  }

  if (params.geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: params.geo.latitude,
      longitude: params.geo.longitude,
    }
  }

  if (params.isAccessibleForFree !== undefined)
    schema.isAccessibleForFree = params.isAccessibleForFree
  if (params.publicAccess !== undefined) schema.publicAccess = params.publicAccess
  if (params.touristType && params.touristType.length > 0)
    schema.touristType = params.touristType

  return schema
}

/**
 * Génère un schema ContactPage
 * @param url - URL de la page contact
 * @returns Schema ContactPage
 */
export function buildContactPageSchema(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: absoluteUrl(url),
    name: 'Contact Elynor Tours',
    description:
      'Contactez Elynor Tours pour vos réservations de voiture et d\'hôtel en Israël',
  }
}

/**
 * Interface pour ItemList (listes de produits/services)
 */
export interface ItemListItem {
  name: string
  url: string
  image?: string
  description?: string
}

/**
 * Génère un schema ItemList (pour listes hôtels/voitures/plages)
 * @param items - Liste des items
 * @param listName - Nom de la liste
 * @returns Schema ItemList
 */
export function buildItemListSchema(items: ItemListItem[], listName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => {
      const element: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.url),
      }
      if (item.image)
        element.image = item.image.startsWith('http')
          ? item.image
          : absoluteUrl(item.image)
      if (item.description) element.description = item.description
      return element
    }),
  }
}

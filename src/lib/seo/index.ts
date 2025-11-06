/**
 * Export centralisé de tous les helpers SEO
 * Usage : import { buildMetadata, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
 */

// Helpers
export {
  absoluteUrl,
  buildMetadata,
  buildI18nAlternates,
  validateTitleLength,
  validateDescriptionLength,
  truncateTitle,
  truncateDescription,
  cleanUrlForCanonical,
  generateSlug,
  type BuildMetadataParams,
} from './helpers'

// Composant JsonLd
export { JsonLd, JsonLdMultiple } from './JsonLd'

// Schemas JSON-LD
export {
  buildBreadcrumbSchema,
  buildHotelSchema,
  buildCarRentalSchema,
  buildFAQSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildTouristAttractionSchema,
  buildContactPageSchema,
  buildItemListSchema,
  type BreadcrumbItem,
  type HotelSchemaParams,
  type CarRentalSchemaParams,
  type FAQItem,
  type OrganizationSchemaParams,
  type WebSiteSchemaParams,
  type TouristAttractionParams,
  type ItemListItem,
} from './schemas'

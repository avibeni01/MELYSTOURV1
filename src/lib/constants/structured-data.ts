/**
 * Schemas JSON-LD globaux pour Elynor Tours
 * Utilisés dans layout.tsx
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Elynor Tours",
  "alternateName": "ElynorTours",
  "url": "https://elynortours.com",
  "logo": "https://elynortours.com/logo.png",
  "image": "https://elynortours.com/og-default.jpg",
  "description": "Agence de voyage spécialisée dans la location de voiture et réservation d'hôtel en Israël. Service francophone depuis 2015, meilleurs prix garantis.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tel Aviv",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.0853,
    "longitude": 34.7818
  },
  "telephone": ["+33182836729", "+972584140489"],
  "email": "contact@elynortours.com",
  "sameAs": [
    "https://www.facebook.com/ElynorTours",
    "https://www.instagram.com/elynor.tours",
    "https://twitter.com/ElynorTours"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de voyage",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Location de voiture",
          "description": "Location de voiture partout en Israël"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réservation d'hôtel",
          "description": "Réservation d'hôtel aux meilleurs prix"
        }
      }
    ]
  }
}

/**
 * Schema WebSite avec SearchAction (pour la homepage)
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Elynor Tours",
  "alternateName": "ElynorTours",
  "url": "https://elynortours.com",
  "description": "Location de voiture et réservation d'hôtels en Israël au meilleur prix",
  "publisher": {
    "@id": "https://elynortours.com/#organization"
  },
  "inLanguage": "fr-FR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://elynortours.com/recherche?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
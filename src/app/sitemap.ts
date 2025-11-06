import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elynortours.com'
  const lastModified = new Date()

  return [
    // Page d'accueil
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },

    // Location de voiture - pages principales
    {
      url: `${baseUrl}/location-voiture`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/location-voiture/aeroport-ben-gourion`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/location-voiture/tel-aviv`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-voiture/jerusalem`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Hôtels - pages principales
    {
      url: `${baseUrl}/hotels`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hotels/tel-aviv`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hotels/jerusalem`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hotels/eilat`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hotels/mer-morte`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Plages - pages principales
    {
      url: `${baseUrl}/plages`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/plages/mediterranee`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/plages/mer-morte`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Nouvelles pages location voiture par ville
    {
      url: `${baseUrl}/location-voiture/eilat`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-voiture/haifa`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Guide pratique
    {
      url: `${baseUrl}/guides/conduire-israel`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Plages - Eilat
    {
      url: `${baseUrl}/plages/eilat`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Pages secondaires
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
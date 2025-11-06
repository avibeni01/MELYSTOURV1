/**
 * Composant JsonLd pour injecter des données structurées JSON-LD
 * Compatible Next.js App Router (Server Components)
 */

import React from 'react'

interface JsonLdProps {
  /** L'objet JSON-LD à injecter (sera stringifié) */
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Composant pour injecter du JSON-LD dans le <head>
 * Usage : <JsonLd data={organizationSchema} />
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0), // Minifié (null, 0)
      }}
    />
  )
}

/**
 * Version pour multiple JSON-LD dans une seule balise script
 * Usage : <JsonLdMultiple data={[schema1, schema2, schema3]} />
 */
export function JsonLdMultiple({ data }: { data: Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  )
}

export default JsonLd

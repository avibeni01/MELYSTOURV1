// src/app/blog/layout.tsx
import { ReactNode } from 'react'
import Link from 'next/link'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="text-2xl font-bold hover:underline">
            📝 Blog Elynor Tours
          </Link>
          <p className="text-white/90 mt-2">Guides, conseils et actualités voyage</p>
        </div>
      </div>

      {/* Content */}
      <main>{children}</main>

      {/* Blog Footer CTA */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à Réserver votre Séjour ?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez nos experts pour un devis personnalisé
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
          >
            Demander un Devis
          </Link>
        </div>
      </section>
    </div>
  )
}

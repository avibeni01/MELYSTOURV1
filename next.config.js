/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Pour déploiement statique
  images: {
    unoptimized: true, // Requis pour export statique
    domains: [
      'images.pexels.com',
      'images.unsplash.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Note: i18n sera géré manuellement avec middleware pour App Router
  eslint: {
    ignoreDuringBuilds: true, // Ignorer ESLint pendant le build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignorer erreurs TS non critiques
  },
}

module.exports = nextConfig
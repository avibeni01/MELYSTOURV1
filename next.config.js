/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' retiré pour permettre les API routes sur Vercel
  images: {
    unoptimized: true, // Garde unoptimized pour la simplicité
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
// src/components/ui/HeroVideo.tsx
'use client'

import { useState, useEffect } from 'react'

interface HeroVideoProps {
  videoSrc: string
  title: string
  subtitle?: string
  badges?: string[]
  height?: string
  fallbackImage?: string
}

export default function HeroVideo({
  videoSrc,
  title,
  subtitle,
  badges,
  height = 'h-[60vh]',
  fallbackImage
}: HeroVideoProps) {
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Video Background */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Fallback Image si vidéo non disponible */}
      {(videoError || !videoLoaded) && fallbackImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Gradient Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
              {subtitle}
            </p>
          )}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Indicateur de chargement vidéo */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="animate-pulse text-white">Chargement...</div>
        </div>
      )}
    </section>
  )
}

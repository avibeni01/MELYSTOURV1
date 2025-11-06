'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Check, ChevronLeft, ChevronRight } from 'lucide-react'

interface HotelCardProps {
  name: string
  slug: string
  city: string
  rating: string
  price: string
  location: string
  features: string[]
  tags?: string[]
  imageCount?: number
}

export default function HotelCard({
  name,
  slug,
  city,
  rating,
  price,
  location,
  features,
  tags = [],
  imageCount = 3
}: HotelCardProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imageCount)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      {/* Image Carousel */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={`/images/hotels/${city}/${slug}/${currentImage + 1}.jpg`}
          alt={`${name} - Image ${currentImage + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Navigation buttons */}
        {imageCount > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Image précédente"
            >
              <ChevronLeft size={20} className="text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Image suivante"
            >
              <ChevronRight size={20} className="text-gray-800" />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {Array.from({ length: imageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentImage ? 'bg-white w-4' : 'bg-white/60'
                  }`}
                  aria-label={`Aller à l'image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Rating badge */}
        <div className="absolute top-3 right-3 flex items-center bg-green-100 px-3 py-1 rounded-full">
          <Star className="text-green-600 mr-1 fill-green-600" size={16} />
          <span className="font-bold text-green-600">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h4 className="text-xl font-bold text-gray-800 mb-2">{name}</h4>
          <p className="text-gray-600 flex items-center text-sm">
            <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
            {location}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <p className="text-2xl font-bold text-blue-600 mb-4">À partir de {price}/nuit</p>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start text-sm">
              <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  )
}

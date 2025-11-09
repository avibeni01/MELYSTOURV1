"use client"

import React from 'react';
import { MapPin, Star, Wifi, Coffee, Waves, Check, Phone, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Types pour les hôtels
interface Hotel {
  id: number;
  name: string;
  location: string;
  country: string;
  stars: number;
  description: string;
  imageUrl: string;
  amenities: string[];
  highlights: string[];
  detailPageUrl?: string; // URL vers la page détaillée si elle existe
}

interface HotelsShowcaseProps {
  title: string;
  subtitle?: string;
  hotels: Hotel[];
}

const HotelsShowcase: React.FC<HotelsShowcaseProps> = ({ title, subtitle, hotels }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600">
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Badge étoiles */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-md">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  {/* Badge pays */}
                  <div className="absolute bottom-3 left-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                    {hotel.country}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin size={16} className="text-orange-500 mr-1" />
                      {hotel.location}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {hotel.description}
                    </p>
                  </div>

                  {/* Points forts */}
                  {hotel.highlights && hotel.highlights.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Points forts:</p>
                      <ul className="space-y-1">
                        {hotel.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Équipements */}
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Équipements:</p>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => (
                        <span
                          key={index}
                          className="inline-block bg-orange-50 text-orange-700 border border-orange-200 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 4 && (
                        <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                          +{hotel.amenities.length - 4} autres
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bouton CTA */}
                  <div className="mt-auto">
                    {hotel.detailPageUrl ? (
                      <Link
                        href={hotel.detailPageUrl}
                        className="block w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-center py-2.5 rounded-lg transition-all text-sm font-semibold shadow-md hover:shadow-lg"
                      >
                        Découvrir cet hôtel
                        <ArrowRight className="inline-block ml-1" size={16} />
                      </Link>
                    ) : (
                      <a
                        href="/hotels#formulaire-reservation"
                        className="block w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-center py-2.5 rounded-lg transition-all text-sm font-semibold shadow-md hover:shadow-lg"
                      >
                        Demander un devis
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsShowcase;

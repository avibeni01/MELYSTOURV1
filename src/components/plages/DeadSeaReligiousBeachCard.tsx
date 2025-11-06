'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Users, AlertCircle } from 'lucide-react';
import { ReligiousBeach } from '@/types/deadSeaBeach';

interface ReligiousBeachCardProps {
  beach: ReligiousBeach;
}

const DeadSeaReligiousBeachCard: React.FC<ReligiousBeachCardProps> = ({ beach }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % beach.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? beach.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-pink-100">
      {/* Carrousel d'Images */}
      <div className="relative h-64">
        <img
          src={beach.images[currentImageIndex]}
          alt={`${beach.name} - Elynor Tours - ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Flèches de Navigation */}
        {beach.images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
              onClick={prevImage}
              aria-label="Image précédente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
              onClick={nextImage}
              aria-label="Image suivante"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Compteur d'Images */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
              {currentImageIndex + 1}/{beach.images.length}
            </div>
          </>
        )}

        {/* Badge Plage Religieuse */}
        <div className="absolute top-2 left-2 bg-pink-600 text-white px-3 py-1 rounded-md text-xs font-medium">
          Plage Séparée
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h2>
        <p className="text-sm text-gray-500 mb-3" lang="he" dir="rtl">{beach.hebrewName}</p>

        <p className="text-sm text-gray-700 mb-4">{beach.description}</p>

        {/* Localisation */}
        <div className="flex items-start text-gray-600 mb-4">
          <MapPin size={18} className="mr-2 flex-shrink-0 text-pink-500 mt-0.5" aria-hidden="true" />
          <span className="text-sm">{beach.location.address}</span>
        </div>

        {/* Horaires de Séparation */}
        <div className="bg-pink-50 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <Calendar size={18} className="mr-2 text-pink-600" />
            <h3 className="text-sm font-semibold text-gray-800">Horaires de Séparation</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <Users size={16} className="mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Hommes:</span>
                <p className="text-gray-600">{beach.separationSchedule.men}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users size={16} className="mr-2 text-pink-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">Femmes:</span>
                <p className="text-gray-600">{beach.separationSchedule.women}</p>
              </div>
            </div>
            {beach.separationSchedule.notes && (
              <p className="text-xs text-gray-500 italic mt-2">{beach.separationSchedule.notes}</p>
            )}
          </div>
        </div>

        {/* Code Vestimentaire */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Code vestimentaire:</h3>
          <p className="text-sm text-gray-600">{beach.dressCode}</p>
        </div>

        {/* Installations Spéciales */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Installations spéciales:</h3>
          <ul className="space-y-1">
            {beach.specialFacilities.map((facility, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-pink-500 mr-2">•</span>
                {facility}
              </li>
            ))}
          </ul>
        </div>

        {/* Règles Spéciales */}
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
          <div className="flex items-center mb-2">
            <AlertCircle size={18} className="mr-2 text-orange-600" />
            <h3 className="text-sm font-semibold text-gray-800">Règles importantes:</h3>
          </div>
          <ul className="space-y-1">
            {beach.specialRules.map((rule, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-orange-500 mr-2">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton Google Maps */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${beach.location.latitude},${beach.location.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-pink-500 text-white text-center py-2 rounded-md hover:bg-pink-600 transition-colors mt-4"
        >
          Voir sur Google Maps
        </a>
      </div>
    </article>
  );
};

export default DeadSeaReligiousBeachCard;

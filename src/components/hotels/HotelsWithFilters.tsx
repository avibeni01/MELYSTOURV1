'use client'

import { useState, useMemo } from 'react'
import { Search, MapPin, Star, Globe2, Filter, X } from 'lucide-react'
import HotelsShowcase from './HotelsShowcase'

interface Hotel {
  id: number
  name: string
  location: string
  country: string
  stars: number
  description: string
  imageUrl: string
  amenities: string[]
  highlights: string[]
  detailPageUrl?: string
}

interface HotelsWithFiltersProps {
  hotelsIsrael: Hotel[]
  hotelsWorld: Hotel[]
}

export default function HotelsWithFilters({ hotelsIsrael, hotelsWorld }: HotelsWithFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<string>('all')
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [selectedStars, setSelectedStars] = useState<number>(0)
  const [showFilters, setShowFilters] = useState(false)

  // Combiner tous les hôtels
  const allHotels = useMemo(() => [...hotelsIsrael, ...hotelsWorld], [hotelsIsrael, hotelsWorld])

  // Extraire les pays uniques
  const countries = useMemo(() => {
    const uniqueCountries = Array.from(new Set(allHotels.map(h => h.country)))
    return uniqueCountries.sort()
  }, [allHotels])

  // Extraire les villes en fonction du pays sélectionné
  const cities = useMemo(() => {
    const filteredHotels = selectedCountry === 'all'
      ? allHotels
      : allHotels.filter(h => h.country === selectedCountry)

    const uniqueCities = Array.from(new Set(filteredHotels.map(h => h.location)))
    return uniqueCities.sort()
  }, [allHotels, selectedCountry])

  // Filtrer les hôtels
  const filteredHotels = useMemo(() => {
    let filtered = allHotels

    // Filtre par recherche
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(h =>
        h.name.toLowerCase().includes(search) ||
        h.location.toLowerCase().includes(search) ||
        h.country.toLowerCase().includes(search) ||
        h.description.toLowerCase().includes(search)
      )
    }

    // Filtre par pays
    if (selectedCountry !== 'all') {
      filtered = filtered.filter(h => h.country === selectedCountry)
    }

    // Filtre par ville
    if (selectedCity !== 'all') {
      filtered = filtered.filter(h => h.location === selectedCity)
    }

    // Filtre par étoiles
    if (selectedStars > 0) {
      filtered = filtered.filter(h => h.stars === selectedStars)
    }

    return filtered
  }, [allHotels, searchTerm, selectedCountry, selectedCity, selectedStars])

  // Séparer les hôtels filtrés par catégorie
  const filteredIsrael = useMemo(() =>
    filteredHotels.filter(h => h.country === 'Israël'),
    [filteredHotels]
  )

  const filteredWorld = useMemo(() =>
    filteredHotels.filter(h => h.country !== 'Israël'),
    [filteredHotels]
  )

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSearchTerm('')
    setSelectedCountry('all')
    setSelectedCity('all')
    setSelectedStars(0)
  }

  const hasActiveFilters = searchTerm || selectedCountry !== 'all' || selectedCity !== 'all' || selectedStars > 0

  return (
    <div className="space-y-8">
      {/* Barre de filtres */}
      <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 z-10">
        {/* Barre de recherche principale */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un hôtel, ville, pays..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Filter size={20} />
            Filtres {hasActiveFilters && `(${Object.values({searchTerm, selectedCountry, selectedCity, selectedStars}).filter(v => v && v !== 'all' && v !== 0).length})`}
          </button>
        </div>

        {/* Filtres avancés */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            {/* Filtre par pays */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Globe2 size={16} />
                Pays
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value)
                  setSelectedCity('all') // Reset city when country changes
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tous les pays ({countries.length})</option>
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country} ({allHotels.filter(h => h.country === country).length})
                  </option>
                ))}
              </select>
            </div>

            {/* Filtre par ville */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <MapPin size={16} />
                Ville
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={selectedCountry === 'all'}
              >
                <option value="all">Toutes les villes ({cities.length})</option>
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city} ({allHotels.filter(h => h.location === city && (selectedCountry === 'all' || h.country === selectedCountry)).length})
                  </option>
                ))}
              </select>
            </div>

            {/* Filtre par étoiles */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Star size={16} />
                Catégorie
              </label>
              <select
                value={selectedStars}
                onChange={(e) => setSelectedStars(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={0}>Toutes catégories</option>
                <option value={5}>5 étoiles ⭐⭐⭐⭐⭐</option>
                <option value={4}>4 étoiles ⭐⭐⭐⭐</option>
                <option value={3}>3 étoiles ⭐⭐⭐</option>
              </select>
            </div>

            {/* Bouton reset */}
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                disabled={!hasActiveFilters}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <X size={16} />
                Réinitialiser
              </button>
            </div>
          </div>
        )}

        {/* Résultats */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span className="font-semibold">
            {filteredHotels.length} hôtel{filteredHotels.length > 1 ? 's' : ''} trouvé{filteredHotels.length > 1 ? 's' : ''}
            {hasActiveFilters && ` (sur ${allHotels.length} total)`}
          </span>
          {hasActiveFilters && (
            <span className="text-blue-600">Filtres actifs</span>
          )}
        </div>
      </div>

      {/* Affichage des résultats */}
      {filteredHotels.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={48} className="text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Aucun hôtel trouvé</h3>
          <p className="text-gray-600 mb-6">
            Essayez de modifier vos critères de recherche ou réinitialisez les filtres
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <>
          {/* Hôtels en Israël */}
          {filteredIsrael.length > 0 && (
            <HotelsShowcase
              title="Nos Hôtels en Israël"
              subtitle={`${filteredIsrael.length} établissement${filteredIsrael.length > 1 ? 's' : ''} d'exception à travers Israël`}
              hotels={filteredIsrael}
            />
          )}

          {/* Hôtels dans le monde */}
          {filteredWorld.length > 0 && (
            <div className="bg-gray-50">
              <HotelsShowcase
                title="Hôtels d'Exception à Travers le Monde"
                subtitle={`${filteredWorld.length} établissement${filteredWorld.length > 1 ? 's' : ''} premium dans le monde`}
                hotels={filteredWorld}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

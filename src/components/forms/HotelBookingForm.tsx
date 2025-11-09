'use client'

import React, { useState, useEffect } from 'react'
import DateRangePickerCustom from '../DateRangePickerCustom'
import type { DateRange } from 'react-day-picker'
import {
  Hotel, Search, Users, Star, ArrowRight, ArrowLeft,
  Phone, Mail, MessageSquare, Check, Plus, Minus
} from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'

// Validation téléphone et email
const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(?:\+|00)?[0-9\s()\-]{10,}$/;
  return phoneRegex.test(phone);
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Fonction utilitaire pour le suivi des événements Facebook Pixel
const trackFbEvent = (eventName: string, params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

declare global {
  interface Window {
    fbq: any;
    google: any;
  }
}

export default function HotelBookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hotelName, setHotelName] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  // États pour l'hôtel
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showOccupants, setShowOccupants] = useState(false);
  const [occupants, setOccupants] = useState({
    rooms: 1,
    adults: 2,
    children: 0,
    babies: 0,
    childrenAges: [] as number[]
  });
  const [selectedOptions, setSelectedOptions] = useState({
    pool: false,
    breakfast: false,
    nearBeach: false,
    specificHotel: null as boolean | null
  });

  // États pour le contact
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });

  // Effect pour Google Maps
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (typeof window !== 'undefined' && !document.querySelector('script[src*="maps.googleapis.com"]')) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_KEY'}&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    };

    const initializeAutocomplete = () => {
      if (typeof window !== 'undefined') {
        const input = document.getElementById('destination') as HTMLInputElement;
        if (input && window.google && window.google.maps && window.google.maps.places) {
          const autocomplete = new window.google.maps.places.Autocomplete(input);
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place) {
              if (place.name) {
                setDestination(place.name);
              } else if (place.formatted_address) {
                setDestination(place.formatted_address);
              }
            }
          });
        }
      }
    };

    loadGoogleMapsScript();

    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.google) {
        initializeAutocomplete();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Effect pour responsive
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Gestion des occupants
  const handleOccupantChange = (type: 'rooms' | 'adults' | 'children' | 'babies', increment: number) => {
    setOccupants(prev => {
      const newValue = Math.max(0, prev[type] + increment);

      if (type === 'children') {
        const ages = [...prev.childrenAges];
        if (increment > 0) {
          ages.push(2);
        } else if (increment < 0 && ages.length > 0) {
          ages.pop();
        }
        return { ...prev, [type]: newValue, childrenAges: ages };
      }

      if (type === 'rooms' || type === 'adults') {
        return { ...prev, [type]: Math.max(1, newValue) };
      }

      return { ...prev, [type]: newValue };
    });
  };

  const getOccupantsSummary = () => {
    const adultText = `${occupants.adults} adulte${occupants.adults > 1 ? 's' : ''}`;
    const childText = `${occupants.children} enfant${occupants.children > 1 ? 's' : ''}`;
    const babyText = `${occupants.babies} bébé${occupants.babies > 1 ? 's' : ''}`;
    const roomText = `${occupants.rooms} chambre${occupants.rooms > 1 ? 's' : ''}`;

    return isMobileView
      ? `${roomText}, ${adultText}\n${childText}, ${babyText}`
      : `${roomText}, ${adultText}, ${childText}, ${babyText}`;
  };

  // Validations
  const validateStep1 = () => {
    return destination && dateRange.from && dateRange.to;
  };

  const validateFinalStep = () =>
    !!formData.firstName &&
    !!formData.lastName &&
    isValidEmail(formData.email) &&
    isValidPhoneNumber(formData.phone);

  const showErrors = () => {
    if (!formData.firstName || !formData.lastName) {
      toast.error('Veuillez remplir vos nom et prénom');
      return false;
    }
    if (!formData.email || !isValidEmail(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return false;
    }
    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      toast.error('Veuillez entrer un numéro de téléphone valide');
      return false;
    }
    return true;
  };

  const handleFieldBlur = (
    field: 'firstName' | 'lastName' | 'email' | 'phone'
  ) => {
    switch (field) {
      case 'firstName':
      case 'lastName':
        if (!formData.firstName || !formData.lastName) {
          toast.error('Veuillez remplir vos nom et prénom');
        }
        break;
      case 'email':
        if (!formData.email || !isValidEmail(formData.email)) {
          toast.error('Veuillez entrer une adresse email valide');
        }
        break;
      case 'phone':
        if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
          toast.error('Veuillez entrer un numéro de téléphone valide');
        }
        break;
      default:
        break;
    }
  };

  // Navigation
  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      trackFbEvent('InitiateCheckout', { content_category: 'hotel' });
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // WhatsApp message generation
  const generateWhatsAppMessage = () => {
    const fromDate = dateRange.from ? new Date(dateRange.from).toLocaleDateString('fr-FR') : '';
    const toDate = dateRange.to ? new Date(dateRange.to).toLocaleDateString('fr-FR') : '';

    let message = `Réservation Hôtel:\n
Destination: ${destination}\n
Dates: ${fromDate} - ${toDate}\n
Occupants: ${getOccupantsSummary().replace(/\n/g, ', ')}\n
Étoiles: ${rating}⭐\n
Options:\n
- Piscine: ${selectedOptions.pool ? 'Oui' : 'Non'}\n
- Petit-déjeuner: ${selectedOptions.breakfast ? 'Oui' : 'Non'}\n
- Proche de la mer: ${selectedOptions.nearBeach ? 'Oui' : 'Non'}\n
Hôtel particulier: ${hotelName ? hotelName : 'Non spécifié'}\n`;

    message += `\nContact:\n
Nom: ${formData.firstName} ${formData.lastName}\n
Email: ${formData.email}\n
Téléphone: ${formData.phone}`;

    if (formData.notes) {
      message += `\nNotes: ${formData.notes}`;
    }

    return message;
  };

  // WhatsApp submission
  const handleOpenWhatsApp = async () => {
    if (!showErrors()) return;

    if (isSubmitting) {
      toast("Soumission en cours...", {
        icon: '🔄'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate WhatsApp message and URL
      const message = generateWhatsAppMessage();
      const phoneNumber = "972584140489";
      const encodedMessage = encodeURIComponent(message);

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const whatsappUrl = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

      // Track Facebook event
      try {
        trackFbEvent('Purchase', {
          content_category: 'hotel',
          value: 1,
          currency: 'EUR'
        });
      } catch (error) {
        console.error('Facebook tracking failed:', error);
      }

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Update UI state
      setCurrentStep(1);
      setFormSubmitted(true);
      setWhatsappLink(whatsappUrl);

      toast.success("WhatsApp a été ouvert pour finaliser votre demande !");

    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render contact form
  const renderContactInfoStep = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Prénom *"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          onBlur={() => handleFieldBlur('firstName')}
          required
        />
        <input
          type="text"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Nom *"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          onBlur={() => handleFieldBlur('lastName')}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            onBlur={() => handleFieldBlur('email')}
            required
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="tel"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Téléphone *"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            onBlur={() => handleFieldBlur('phone')}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
          <textarea
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Notes ou remarques (facultatif)"
            rows={4}
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>
      </div>
    </>
  );

  // Main render logic
  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <>
          {/* Section Destination / Dates / Occupants */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-6">
            {/* Destination */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              <input
                id="destination"
                type="text"
                placeholder="Destination (ville, hôtel...)"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>

            {/* Dates */}
            <DateRangePickerCustom
              value={dateRange}
              onChange={(range: DateRange) => setDateRange(range)}
              placeholder="Sélectionnez vos dates"
            />

            {/* Occupants */}
            <div className="relative flex-1">
              <div
                className="flex items-center justify-between p-3 border rounded-lg cursor-pointer min-h-[3rem] md:min-h-0"
                onClick={() => setShowOccupants(!showOccupants)}
                aria-expanded={showOccupants}
              >
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-gray-400 flex-shrink-0" />
                  <span className="truncate">{getOccupantsSummary()}</span>
                </div>
                <span className="text-gray-400 ml-2">{showOccupants ? '▲' : '▼'}</span>
              </div>
              {showOccupants && (
                <div className="absolute top-full left-0 right-0 bg-white border rounded-lg mt-1 p-4 shadow-lg z-20">
                  <div className="space-y-3">
                    {/* Chambres */}
                    <div className="flex items-center justify-between">
                      <span>Chambres</span>
                      <div className="flex items-center gap-2">
                        <button type="button" className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50" onClick={() => handleOccupantChange('rooms', -1)} disabled={occupants.rooms <= 1}><Minus size={16} /></button>
                        <span className="w-8 text-center font-medium">{occupants.rooms}</span>
                        <button type="button" className="p-2 border rounded hover:bg-gray-100" onClick={() => handleOccupantChange('rooms', 1)}><Plus size={16} /></button>
                      </div>
                    </div>
                    {/* Adultes */}
                    <div className="flex items-center justify-between">
                      <span>Adultes (18+)</span>
                      <div className="flex items-center gap-2">
                        <button type="button" className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50" onClick={() => handleOccupantChange('adults', -1)} disabled={occupants.adults <= 1}><Minus size={16} /></button>
                        <span className="w-8 text-center font-medium">{occupants.adults}</span>
                        <button type="button" className="p-2 border rounded hover:bg-gray-100" onClick={() => handleOccupantChange('adults', 1)}><Plus size={16} /></button>
                      </div>
                    </div>
                    {/* Enfants */}
                    <div className="flex items-center justify-between">
                      <span>Enfants (2-17)</span>
                      <div className="flex items-center gap-2">
                        <button type="button" className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50" onClick={() => handleOccupantChange('children', -1)} disabled={occupants.children <= 0}><Minus size={16} /></button>
                        <span className="w-8 text-center font-medium">{occupants.children}</span>
                        <button type="button" className="p-2 border rounded hover:bg-gray-100" onClick={() => handleOccupantChange('children', 1)}><Plus size={16} /></button>
                      </div>
                    </div>
                    {/* Bébés */}
                    <div className="flex items-center justify-between">
                      <span>Bébés (0-2)</span>
                      <div className="flex items-center gap-2">
                        <button type="button" className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50" onClick={() => handleOccupantChange('babies', -1)} disabled={occupants.babies <= 0}><Minus size={16} /></button>
                        <span className="w-8 text-center font-medium">{occupants.babies}</span>
                        <button type="button" className="p-2 border rounded hover:bg-gray-100" onClick={() => handleOccupantChange('babies', 1)}><Plus size={16} /></button>
                      </div>
                    </div>
                    {/* Ages Enfants */}
                    {occupants.children > 0 && (
                      <div className="space-y-2 pt-2 border-t mt-3">
                        <p className="text-sm font-medium">Âge des enfants (2-17 ans)</p>
                        <div className="grid grid-cols-2 gap-2">
                          {occupants.childrenAges.map((age, index) => (
                            <select key={index} className="p-2 border rounded text-sm" value={age}
                              onChange={(e) => {
                                const newAges = [...occupants.childrenAges];
                                newAges[index] = parseInt(e.target.value);
                                setOccupants(prev => ({ ...prev, childrenAges: newAges }));
                              }}>
                              {Array.from({ length: 16 }, (_, i) => i + 2).map(a => (
                                <option key={a} value={a}>{a} ans</option>
                              ))}
                            </select>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <button type="button" onClick={() => setShowOccupants(false)} className="mt-3 text-orange-600 text-sm w-full text-center">Terminé</button>
                </div>
              )}
            </div>
          </div>

          {/* Section Options Hôtel */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Étoiles */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre d'étoiles</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24}
                    className={`cursor-pointer transition-colors ${star <= (hoverRating || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-gray-400'}`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            {/* Checkbox Options */}
            <div className="md:col-span-2">
              <p className="text-sm font-medium text-gray-700 mb-1">Options de l'hôtel</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={selectedOptions.pool} onChange={(e) => setSelectedOptions(prev => ({ ...prev, pool: e.target.checked }))} className="rounded text-orange-600 focus:ring-orange-500" />
                  <span>Piscine</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={selectedOptions.breakfast} onChange={(e) => setSelectedOptions(prev => ({ ...prev, breakfast: e.target.checked }))} className="rounded text-orange-600 focus:ring-orange-500" />
                  <span>Petit-déjeuner</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={selectedOptions.nearBeach} onChange={(e) => setSelectedOptions(prev => ({ ...prev, nearBeach: e.target.checked }))} className="rounded text-orange-600 focus:ring-orange-500" />
                  <span>Proche de la mer</span>
                </label>
              </div>
            </div>
            {/* Specific Hotel */}
            <div className="md:col-span-1">
              <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700 mb-1">Hôtel en particulier ?</label>
              <input id="hotelName" type="text" placeholder="Nom de l'hôtel (facultatif)"
                className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
              />
            </div>
          </div>
        </>
      );
    } else if (currentStep === 2) {
      return renderContactInfoStep();
    }
    return null;
  };

  // Determine Button States
  const maxSteps = 2;
  const canGoNext = currentStep === 1 && validateStep1();
  const isFinalStep = currentStep === 2;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Toaster position="top-center" />

      {/* En-tête */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Hotel size={32} className="text-orange-500" />
          Réservation Hôtel
        </h2>
        <p className="text-gray-600">Trouvez votre hébergement idéal en quelques clics</p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Étape {currentStep} sur {maxSteps}
          </span>
          <span className="text-sm text-gray-500">
            {currentStep === 1 ? 'Informations de séjour' : 'Vos coordonnées'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / maxSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Message de succès avec bouton WhatsApp */}
      {formSubmitted && (
        <div className="mb-6 p-6 bg-green-50 border border-green-200 text-green-800 rounded-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold">Merci ! Votre demande a été envoyée.</h3>
          </div>
          <p className="text-sm mb-4">Nous vous contacterons bientôt pour finaliser votre réservation.</p>

          {/* Bouton WhatsApp */}
          <div className="mb-4">
            <p className="mb-3 text-sm">Cliquez sur le bouton ci-dessous pour ouvrir WhatsApp et confirmer votre demande :</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ouvrir WhatsApp
            </a>
          </div>

          {/* Bouton pour recommencer */}
          <button
            onClick={() => {
              setFormSubmitted(false);
              setCurrentStep(1);
              setWhatsappLink('');
            }}
            className="text-sm text-orange-600 underline hover:text-orange-700"
          >
            Faire une nouvelle demande
          </button>
        </div>
      )}

      {!formSubmitted && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {/* Contenu de l'étape */}
          <form onSubmit={(e) => e.preventDefault()}>
            {renderStepContent()}

            {/* Boutons de Navigation / Soumission */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              {/* Bouton Précédent */}
              <button
                type="button"
                onClick={handlePreviousStep}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-all ${currentStep > 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                disabled={currentStep <= 1}
              >
                <ArrowLeft size={16} />
                Précédent
              </button>

              {/* Bouton Suivant / Soumettre */}
              {isFinalStep ? (
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                  disabled={!validateFinalStep() || isSubmitting}
                  onClick={handleOpenWhatsApp}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {isSubmitting ? 'Ouverture de WhatsApp...' : 'Envoyer la demande'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                  disabled={!canGoNext || isSubmitting}
                >
                  Suivant
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Informations de contact en bas */}
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Des questions ? Contactez-nous directement :</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href="tel:+972584140489" className="flex items-center gap-1 text-orange-600 hover:text-orange-700">
            <Phone size={16} />
            +972 58 414 0489
          </a>
          <a href="mailto:contact@elynortours.com" className="flex items-center gap-1 text-orange-600 hover:text-orange-700">
            <Mail size={16} />
            contact@elynortours.com
          </a>
        </div>
      </div>
    </div>
  );
}

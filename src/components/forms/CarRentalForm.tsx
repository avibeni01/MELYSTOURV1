'use client'

import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import DateRangePickerCustom from '../DateRangePickerCustom'
import type { DateRange } from 'react-day-picker'
import Slider from 'react-slick'
import {
  Car, Clock, ArrowRight, ArrowLeft,
  Phone, Mail, MessageSquare, Check
} from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Import des données JSON
import rawCountries from '@/data/countries.json'
import rawStations from '@/data/stations.json'
import rawVehicles from '@/data/vehicules.json'

// --- Types ---
interface Country {
  code: string;
  name: string;
}

interface Station {
  id: string;
  label: string;
  isAirport: boolean;
}

interface Vehicle {
  name: string;
  image: string;
}

// --- Helpers pour traiter les données ---
const COUNTRIES: Country[] = (rawCountries as any[])
  .filter(c => c.Item1 && c.Item1.split(';')[0].length === 2)
  .map(({ Item1, Item2 }) => ({
    code: Item1.split(';')[0],
    name: Item2.trim(),
  }));

const getStations = (countryName: string): Station[] =>
  (rawStations as Record<string, any>)[countryName]?.data
    ?.filter((s: any) => s.Item1)
    .map((s: any) => ({
      id: s.Item1,
      label: formatStationName(s.Item2),
      isAirport: s.Item2.startsWith('red_'),
    })) ?? [];

const VEHICLES: Vehicle[] = (rawVehicles as any[]).map((v: any) => ({
  name: (v['Nom du véhicule'] as string).trim(),
  image: v['Image URL'],
}));

// Composants Slider personnalisés
const PrevArrow = ({ onClick }: { onClick?: (e: React.MouseEvent) => void }) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      onClick?.(e);
    }}
    className="slick-prev z-30 absolute left-1 md:left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center"
    aria-label="Précédent"
  >
    <div className="text-black text-3xl leading-none bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white">
      ‹
    </div>
  </button>
);

const NextArrow = ({ onClick }: { onClick?: (e: React.MouseEvent) => void }) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      onClick?.(e);
    }}
    className="slick-next z-30 absolute right-1 md:right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center"
    aria-label="Suivant"
  >
    <div className="text-black text-3xl leading-none bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white">
      ›
    </div>
  </button>
);

// Configuration Slider
const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        dots: false,
        swipe: true,
        touchMove: true
      }
    }
  ]
};

// Utilitaires
const formatStationName = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.startsWith("red_")) {
    let cleaned = lower.slice(4);
    cleaned = cleaned.replace(/\b(airport|apt|ap)\b/gi, "");
    cleaned = cleaned.replace(/\s+/g, " ").trim();
    return `aéroport de ${cleaned}`;
  }
  return name;
};

const generateTimeOptions = () => {
  const times = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h.toString().padStart(2, '0');
      const minute = m.toString().padStart(2, '0');
      times.push(`${hour}:${minute}`);
    }
  }
  return times;
};

const timeOptions = generateTimeOptions();

// Validation téléphone et email
const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(?:\+|00)?[0-9\s()\-]{10,}$/;
  return phoneRegex.test(phone);
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Options pays pour le select
const countryOptions = COUNTRIES
  .map(country => ({ value: country.code, label: country.name }))
  .sort((a, b) => {
    const preferred = ['Israel', 'France', 'États-Unis'];
    const aIsPreferred = preferred.includes(a.label);
    const bIsPreferred = preferred.includes(b.label);
    if (aIsPreferred && !bIsPreferred) return -1;
    if (!aIsPreferred && bIsPreferred) return 1;
    return a.label.localeCompare(b.label);
  });

// Filtrage pays personnalisé
const filterCountryOptions = (option: { label: string; value: string }, inputValue: string) => {
  const lowerInput = inputValue.toLowerCase();
  const lowerLabel = option.label.toLowerCase();

  if (lowerLabel.startsWith(lowerInput)) return true;
  if (lowerLabel === 'israel' && lowerInput === 'il') return true;
  if (lowerLabel === 'france' && lowerInput === 'fr') return true;
  if (lowerLabel === 'états-unis' && lowerInput === 'us') return true;

  return false;
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
  }
}

export default function CarRentalForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    country: '',
    station: '',
    pickupDate: '',
    pickupTime: '09:00',
    returnDate: '',
    returnTime: '09:00',
    driverAge: '25+',
    hasVisa: false,
    shabbatRestriction: false,
    promoCode: '',
  });

  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });

  // Filtrage des stations
  const selectedCountry = COUNTRIES.find(country => country.code === formData.country);
  const stationsToDisplay = selectedCountry ? getStations(selectedCountry.name) : [];

  // Validations
  const validateStep1 = () => {
    return formData.country && formData.station && formData.pickupDate && formData.returnDate && formData.pickupTime && formData.returnTime && formData.driverAge;
  };

  const validateStep2Car = () => {
    return selectedVehicle !== null;
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
      trackFbEvent('InitiateCheckout', { content_category: 'car' });
    } else if (currentStep === 2 && validateStep2Car()) {
      setCurrentStep(3);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // WhatsApp message generation
  const generateWhatsAppMessage = () => {
    const selectedStationObject = stationsToDisplay.find(s => s.id === formData.station);
    const stationName = selectedStationObject ? selectedStationObject.label : formData.station;

    let message = `Location Voiture:\n
Pays: ${selectedCountry?.name || formData.country}\n
Station: ${stationName}\n
Dates: Du ${formData.pickupDate} ${formData.pickupTime} au ${formData.returnDate} ${formData.returnTime}\n
Âge conducteur: ${formData.driverAge}\n
Visa Premier: ${formData.hasVisa ? 'Oui' : 'Non'}\n
Roulez vous le chabat : ${formData.shabbatRestriction ? 'Non' : 'Oui'}\n`;

    if (selectedVehicle) {
      message += `\nVéhicule sélectionné: ${selectedVehicle.name}\n`;
    }
    if (formData.promoCode) {
      message += `Code promo: ${formData.promoCode}\n`;
    }

    message += `\nContact:\n
Nom: ${formData.firstName} ${formData.lastName}\n
Email: ${formData.email}\n
Téléphone: ${formData.phone}`;

    if (formData.notes) {
      message += `\nNotes: ${formData.notes}`;
    }

    return message;
  };

  // Helper function to convert French date format (dd/mm/yyyy) to yyyy-mm-dd
  const convertDateToISO = (frenchDate: string): string | null => {
    if (!frenchDate) return null;
    try {
      const parts = frenchDate.split('/'); // [dd, mm, yyyy]
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      }
    } catch (error) {
      console.error('Error converting date:', frenchDate, error);
    }
    return null;
  };

  // Helper function to convert driver age to number for HubSpot
  const convertAgeToNumber = (age: string): number | null => {
    if (!age) return null;
    if (age === '25+') return 25;
    const numAge = parseInt(age, 10);
    return isNaN(numAge) ? null : numAge;
  };

  // Helper function to map country name to HubSpot nationality value
  const mapCountryToNationality = (countryName: string | undefined): string => {
    if (!countryName) return 'Francais';

    const countryLower = countryName.toLowerCase();

    if (countryLower.includes('israel')) return 'Israelien';
    if (countryLower.includes('franc') || countryLower.includes('france')) return 'Francais';
    if (countryLower.includes('états-unis') || countryLower.includes('america') || countryLower.includes('usa')) return 'Americain';

    // Default to Francais if country not recognized
    return 'Francais';
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
      // 1. Create contact in HubSpot
      console.log('[CarRentalForm] Creating contact in HubSpot...');
      const contactResponse = await fetch('/api/createContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          preferences_client: formData.notes || '',
          le_v_hicule_ne_roule_pas_le_chabat: formData.shabbatRestriction,
          avez_vous_une_visa_premi_re_: formData.hasVisa,
          age: convertAgeToNumber(formData.driverAge),
          nationalite: mapCountryToNationality(selectedCountry?.name),
        }),
      });

      if (!contactResponse.ok) {
        const errorData = await contactResponse.json();
        console.error('[CarRentalForm] Error creating contact:', errorData);
        toast.error('Erreur lors de la création du contact HubSpot');
        return;
      }

      const contactData = await contactResponse.json();
      console.log('[CarRentalForm] Contact created:', contactData.contactId);

      // 2. Create deal in HubSpot
      console.log('[CarRentalForm] Creating deal in HubSpot...');
      const selectedStationObject = stationsToDisplay.find(s => s.id === formData.station);
      const stationName = selectedStationObject ? selectedStationObject.label : formData.station;

      const dealResponse = await fetch('/api/createDeal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactId: contactData.contactId,
          firstName: formData.firstName,
          lastName: formData.lastName,
          activeTab: 'car',
          selectedVehicle: selectedVehicle,
          stationName: stationName,
          pickupTime: formData.pickupTime,
          returnTime: formData.returnTime,
          driverAge: formData.driverAge,
          hasVisa: formData.hasVisa,
          shomer_shabbat: formData.shabbatRestriction,
          check_in_date_str: convertDateToISO(formData.pickupDate),
          check_out_date_str: convertDateToISO(formData.returnDate),
        }),
      });

      if (!dealResponse.ok) {
        const errorData = await dealResponse.json();
        console.error('[CarRentalForm] Error creating deal:', errorData);
        toast.error('Erreur lors de la création du deal HubSpot');
        return;
      }

      const dealData = await dealResponse.json();
      console.log('[CarRentalForm] Deal created:', dealData.dealId);

      // 3. Generate WhatsApp message and URL
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
          content_category: 'car',
          value: 1,
          currency: 'EUR'
        });
      } catch (error) {
        console.error('Facebook tracking failed:', error);
      }

      // 4. Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // 5. Update UI state
      setCurrentStep(1);
      setFormSubmitted(true);
      setWhatsappLink(whatsappUrl);

      toast.success("Contact et deal créés dans HubSpot ! WhatsApp ouvert.");

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
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Prénom *"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          onBlur={() => handleFieldBlur('firstName')}
          required
        />
        <input
          type="text"
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Notes ou remarques (facultatif)"
            rows={4}
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>
      </div>
    </>
  );

  // Render vehicle selection
  const renderVehicleSelection = () => (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-6 text-center">Sélectionnez votre véhicule</h3>
      <Slider {...sliderSettings}>
        {VEHICLES.map((vehicle, index) => (
          <div key={index} className="px-2">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                selectedVehicle?.name === vehicle.name
                  ? 'border-orange-500 ring-2 ring-orange-300 bg-orange-50'
                  : 'border-gray-300 hover:border-gray-400 hover:shadow-sm'
              }`}
              onClick={() => {
                setSelectedVehicle(vehicle);
                trackFbEvent('AddToCart', {
                  content_name: vehicle.name,
                  content_category: 'car'
                });
              }}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-32 object-contain mb-2 rounded"
              />
              <p className="text-center font-medium text-sm">{vehicle.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

  // Main render logic
  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <>
          {/* Ligne Pays/Station/Dates/Heures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3 md:gap-4 mb-6 items-end">
            {/* Pays */}
            <div className="sm:col-span-1 md:col-span-1">
              <Select
                inputId="country-select"
                options={countryOptions}
                value={countryOptions.find(option => option.value === formData.country) || null}
                onChange={(selectedOption) => {
                  setFormData({ ...formData, country: selectedOption ? selectedOption.value : '', station: '' });
                }}
                placeholder="Pays *"
                isSearchable
                filterOption={filterCountryOptions}
                noOptionsMessage={() => 'Aucun pays trouvé'}
                className="react-select-container text-sm md:text-base"
                classNamePrefix="react-select"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    minHeight: '48px',
                    borderColor: state.isFocused ? '#f97316' : '#000',
                    borderWidth: '1px',
                    borderRadius: '0.5rem',
                    boxShadow: state.isFocused ? '0 0 0 2px rgba(249, 115, 22, 0.5)' : 'none',
                    '&:hover': {
                      borderColor: state.isFocused ? '#f97316' : '#000',
                    }
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#6b7280',
                  }),
                  input: (provided) => ({
                    ...provided,
                    margin: '0px',
                    padding: '0px',
                  }),
                  valueContainer: (provided) => ({
                    ...provided,
                    padding: '0 8px'
                  }),
                  singleValue: (provided) => ({
                     ...provided,
                     color: 'inherit'
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999
                  }),
                }}
                required
              />
            </div>
            {/* Station */}
            <div className="sm:col-span-1 md:col-span-2">
              <Select
                inputId="station-select"
                options={stationsToDisplay.map(station => ({
                  value: station.id,
                  label: station.label,
                  isAirport: station.isAirport
                }))}
                value={stationsToDisplay.map(station => ({
                  value: station.id,
                  label: station.label,
                  isAirport: station.isAirport
                })).find(option => option.value === formData.station) || null}
                onChange={(selectedOption) => {
                  setFormData({ ...formData, station: selectedOption ? selectedOption.value : '' });
                }}
                placeholder="Station *"
                isDisabled={!formData.country}
                isSearchable
                noOptionsMessage={() => 'Aucune station trouvée'}
                className="react-select-container text-sm md:text-base"
                classNamePrefix="react-select"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    minHeight: '48px',
                    borderColor: state.isFocused ? '#f97316' : '#000',
                    borderWidth: '1px',
                    borderRadius: '0.5rem',
                    boxShadow: state.isFocused ? '0 0 0 2px rgba(249, 115, 22, 0.5)' : 'none',
                    '&:hover': { borderColor: state.isFocused ? '#f97316' : '#000' }
                  }),
                  placeholder: (provided) => ({ ...provided, color: '#6b7280' }),
                  input: (provided) => ({ ...provided, margin: '0px', padding: '0px' }),
                  valueContainer: (provided) => ({ ...provided, padding: '0 8px' }),
                  singleValue: (provided) => ({ ...provided, color: 'inherit' }),
                  option: (provided, state) => ({
                    ...provided,
                    color: state.data.isAirport ? '#DC2626' : 'inherit',
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999
                  }),
                }}
                required
              />
            </div>
            {/* Dates */}
            <div className="sm:col-span-2 md:col-span-2">
              <DateRangePickerCustom
                value={dateRange}
                onChange={(range: DateRange) => {
                  setDateRange(range);
                  if (range?.from && range?.to) {
                    setFormData({
                      ...formData,
                      pickupDate: range.from.toLocaleDateString('fr-FR'),
                      returnDate: range.to.toLocaleDateString('fr-FR')
                    });
                  } else {
                    setFormData({ ...formData, pickupDate: '', returnDate: '' });
                  }
                }}
                placeholder="Dates Prise/Retour *"
              />
            </div>
            {/* Wrapper for Time Pickers */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-row gap-2 md:gap-4">
              {/* Heure Départ */}
              <div className="relative flex-1">
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none" size={18} />
                 <select
                   id="pickupTime"
                   className="w-full pl-10 pr-4 py-3 border  rounded-lg text-sm md:text-base appearance-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                   value={formData.pickupTime}
                   onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                   required
                 >
                   <option value="">HH:MM *</option>
                   {timeOptions.map(time => (
                     <option key={time} value={time}>{time}</option>
                   ))}
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              {/* Heure Retour */}
              <div className="relative flex-1">
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none" size={18} />
                 <select
                   id="returnTime"
                   className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm md:text-base appearance-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                   value={formData.returnTime}
                   onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                   required
                 >
                   <option value="">HH:MM *</option>
                   {timeOptions.map(time => (
                     <option key={time} value={time}>{time}</option>
                   ))}
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ligne Options / Age / Promo */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-start">
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Question Visa avec logo */}
              <div className="col-span-1">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Avez-vous une Visa Première ? <span className="text-red-500">*</span>
                </p>
                <div className="flex gap-4 items-center">
                    <img src="/images/visa.svg" alt="Visa Premier" className="h-3.5 w-auto ml-2" />
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasVisa"
                      checked={formData.hasVisa === true}
                      onChange={() => setFormData({ ...formData, hasVisa: true })}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2">Oui</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasVisa"
                      checked={formData.hasVisa === false}
                      onChange={() => setFormData({ ...formData, hasVisa: false })}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2">Non</span>
                  </label>
                  
                </div>
              </div>

              {/* Question Shabbat */}
              <div className="col-span-1">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Roulez-vous pendant Chabbat ? <span className="text-red-500">*</span>
                </p>
                <div className="flex gap-4 items-center">
                    <img src="/images/chabbat.png" alt="Chabbat" className="h-8 w-auto ml-2" />
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shabbatRestriction"
                      checked={formData.shabbatRestriction === false}
                      onChange={() => setFormData({ ...formData, shabbatRestriction: false })}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2">Oui</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shabbatRestriction"
                      checked={formData.shabbatRestriction === true}
                      onChange={() => setFormData({ ...formData, shabbatRestriction: true })}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2">Non</span>
                  </label>
                  
                </div>
              </div>
            </div>

            {/* Age Conducteur and Promo Code */}
            <div className="flex flex-row gap-3 md:col-span-2">
              {/* Age Conducteur */}
              <div className="flex-1">
                <label htmlFor="driverAge" className="block text-sm font-medium text-gray-700 mb-1">Âge du conducteur *</label>
                <select id="driverAge" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={formData.driverAge}
                  onChange={(e) => setFormData({...formData, driverAge: e.target.value})} required>
                  <option value="">Âge conducteur*</option>
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i + 18} value={i + 18}>{i + 18} ans</option>
                  ))}
                  <option value="25+">25+ ans</option>
                </select>
              </div>
              {/* Code Promo */}
              <div className="flex-1">
                <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-1">Code promo</label>
                <input id="promoCode" type="text" placeholder="Code promo (facultatif)"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={formData.promoCode}
                  onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                 />
              </div>
            </div>
          </div>
        </>
      );
    } else if (currentStep === 2) {
      return renderVehicleSelection();
    } else if (currentStep === 3) {
      return renderContactInfoStep();
    }
    return null;
  };

  // Determine Button States
  const maxSteps = 3;
  const canGoNext = (currentStep === 1 && validateStep1()) ||
                    (currentStep === 2 && validateStep2Car());
  const isFinalStep = currentStep === 3;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Toaster position="top-center" />

      {/* En-tête */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Car size={32} className="text-orange-500" />
          Location de Voiture
        </h2>
        <p className="text-gray-600">Réservez votre véhicule en quelques clics</p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Étape {currentStep} sur {maxSteps}
          </span>
          <span className="text-sm text-gray-500">
            {currentStep === 1 ? 'Informations de location' : currentStep === 2 ? 'Choix du véhicule' : 'Vos coordonnées'}
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
                className={`flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all ${currentStep > 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
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

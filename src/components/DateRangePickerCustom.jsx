import React, { useState, useEffect } from 'react';

import { DayPicker } from 'react-day-picker';

import { fr } from 'date-fns/locale';

import { format } from 'date-fns';

import 'react-day-picker/dist/style.css';

import { Calendar } from 'lucide-react';

 

const DateRangePickerCustom = ({ value, onChange, placeholder = "Sélectionnez vos dates" }) => {

  const [isOpen, setIsOpen] = useState(false);

  const [range, setRange] = useState(value || { from: undefined, to: undefined });

  const [isMobile, setIsMobile] = useState(false);

 

  // Détection mobile pour l'adaptation

  useEffect(() => {

    const checkMobile = () => {

      setIsMobile(window.innerWidth < 768);

    };

 

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);

  }, []);

 

  const handleSelect = (selectedRange) => {

    setRange(selectedRange);

    if (selectedRange?.from && selectedRange?.to) {

      onChange?.(selectedRange);

    }

  };

 

  const displayValue = () => {

    if (range?.from && range?.to) {

      return `${format(range.from, 'dd/MM/yyyy')} - ${format(range.to, 'dd/MM/yyyy')}`;

    }

    if (range?.from) {

      return format(range.from, 'dd/MM/yyyy');

    }

    return placeholder;

  };

 

  return (

    <div className="relative flex-1">

      {/* Input avec icône */}

      <div className="relative">

        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={20} />

        <input

          type="text"

          readOnly

          value={displayValue()}

          onClick={() => setIsOpen(!isOpen)}

          placeholder={placeholder}

          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer bg-white"

        />

      </div>

 

      {/* Calendrier dropdown */}

      {isOpen && (

        <>

          {/* Overlay pour fermer en cliquant dehors */}

          <div

            className="fixed inset-0 z-20"

            onClick={() => setIsOpen(false)}

          />

 

          {/* Calendrier */}

          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-30 p-4 max-w-[95vw] overflow-hidden">

            <DayPicker

              mode="range"

              selected={range}

              onSelect={handleSelect}

              locale={fr}

              numberOfMonths={isMobile ? 1 : 2}

              disabled={{ before: new Date() }}

              classNames={{

                // Layout principal

                months: "flex gap-4 sm:gap-6 flex-col sm:flex-row",

                month: "space-y-4",

 

                // Container du mois avec navigation - STYLES CORRIGÉS

                caption: "flex justify-center items-center relative pt-1 pb-2 min-h-[2.5rem]",

                caption_label: "text-base sm:text-lg font-semibold text-gray-900 text-center capitalize mx-auto",

 

                // Navigation - STYLES CORRIGÉS (flèches positionnées en haut)

                nav: "flex items-center justify-between absolute top-0 left-0 right-0 px-2 sm:px-4 h-10",

                nav_button: "h-8 w-8 bg-transparent hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center p-0 z-10",

                nav_button_previous: "order-1", // Flèche gauche à gauche

                nav_button_next: "order-3", // Flèche droite à droite

 

                // Table et cellules

                table: "w-full border-collapse",

                head_row: "flex",

                head_cell: "text-gray-500 rounded-md w-8 sm:w-9 font-normal text-xs uppercase",

                row: "flex w-full mt-1 sm:mt-2",

                cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",

 

                // Jours

                day: "h-8 w-8 sm:h-9 sm:w-9 p-0 font-normal aria-selected:opacity-100 rounded transition-all duration-200 hover:scale-105",

                day_selected: "bg-orange-500 text-white hover:bg-orange-600 font-semibold",

                day_today: "bg-gray-100 text-gray-900 font-semibold",

                day_outside: "text-gray-300 opacity-50",

                day_disabled: "text-gray-300 opacity-40 cursor-not-allowed hover:bg-transparent line-through",

                day_range_middle: "bg-orange-100 text-orange-900",

                day_range_start: "rounded-r-none",

                day_range_end: "rounded-l-none",

                day_hidden: "invisible",

              }}

              modifiersStyles={{

                // Styles supplémentaires pour le range

                range_start: {

                  backgroundColor: '#f97316',

                  color: 'white',

                  borderTopRightRadius: 0,

                  borderBottomRightRadius: 0

                },

                range_end: {

                  backgroundColor: '#f97316',

                  color: 'white',

                  borderTopLeftRadius: 0,

                  borderBottomLeftRadius: 0

                },

                range_middle: {

                  backgroundColor: '#fed7aa',

                  color: '#9a3412',

                  borderRadius: 0

                }

              }}

            />

 

            {/* Boutons */}

            <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-200">

              <button

                type="button"

                onClick={() => setIsOpen(false)}

                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"

              >

                Annuler

              </button>

              <button

                type="button"

                onClick={() => {

                  if (range?.from && range?.to) {

                    onChange?.(range);

                    setIsOpen(false);

                  }

                }}

                disabled={!range?.from || !range?.to}

                className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"

              >

                Valider

              </button>

            </div>

          </div>

        </>

      )}

    </div>

  );

};

 

export default DateRangePickerCustom;
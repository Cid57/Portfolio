'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

type DateRange = {
  arrival: string;
  departure: string;
};

export default function DateRangePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({
    arrival: '',
    departure: ''
  });

  const formatDate = (date: string) => {
    if (!date) return '';
    return format(new Date(date), 'd MMM', { locale: fr });
  };

  const displayValue = dateRange.arrival && dateRange.departure
    ? `${formatDate(dateRange.arrival)} - ${formatDate(dateRange.departure)}`
    : 'Sélectionner les dates';

  return (
    <div className="relative">
      {/* Boutons de date */}
      <div className="flex items-center space-x-2">
        <div className="relative">
          <div className="text-xs text-white/60 mb-1">Arrivée</div>
          <input
            type="date"
            value={dateRange.arrival}
            onChange={(e) => setDateRange(prev => ({ ...prev, arrival: e.target.value }))}
            className="
              appearance-none bg-transparent border-none
              text-white text-sm focus:outline-none
              cursor-pointer w-24
              [&::-webkit-calendar-picker-indicator]:bg-none
              [&::-webkit-calendar-picker-indicator]:appearance-none
            "
          />
        </div>

        <div className="relative">
          <div className="text-xs text-white/60 mb-1">Départ</div>
          <input
            type="date"
            value={dateRange.departure}
            onChange={(e) => setDateRange(prev => ({ ...prev, departure: e.target.value }))}
            className="
              appearance-none bg-transparent border-none
              text-white text-sm focus:outline-none
              cursor-pointer w-24
              [&::-webkit-calendar-picker-indicator]:bg-none
              [&::-webkit-calendar-picker-indicator]:appearance-none
            "
          />
        </div>
      </div>

      {/* Calendrier flottant */}
      {showPicker && (
        <div className="
          absolute top-full left-1/2 -translate-x-1/2 mt-2
          bg-black/95 backdrop-blur-md rounded-lg
          border border-white/10 shadow-xl
          p-4 w-[300px]
        ">
          {/* Contenu du calendrier */}
        </div>
      )}
    </div>
  );
}

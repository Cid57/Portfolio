'use client';

import { useState } from 'react';
import { Popover } from '@headlessui/react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';

const VILLES_CORSE = [
  'Ajaccio',
  'Porto-Vecchio',
  'Bonifacio',
  'Bastia',
  'Calvi',
  "L'Île-Rousse",
];

export default function SearchBar() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [showDestinations, setShowDestinations] = useState(false);

  const filteredCities = VILLES_CORSE.filter(city =>
    city.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearch = () => {
    console.log({
      destination,
      dates: {
        start: startDate,
        end: endDate
      },
      guests
    });
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Destination Input */}
      <div className="relative">
        <label className="block text-white/90 text-sm font-medium mb-2">
          Destination
        </label>
        <div className="relative">
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onFocus={() => setShowDestinations(true)}
            placeholder="Où souhaitez-vous aller ?"
            className="w-full h-12 pl-10 pr-4 text-white placeholder-white/50
                     bg-white/10 border border-white/20 rounded-xl
                     focus:outline-none focus:border-white/40
                     transition duration-200"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Dropdown for cities */}
        {showDestinations && destination && (
          <div className="absolute z-10 w-full mt-2 py-2
                        bg-black/80 backdrop-blur-md rounded-xl
                        border border-white/20 shadow-xl
                        max-h-60 overflow-auto">
            {filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => {
                  setDestination(city);
                  setShowDestinations(false);
                }}
                className="w-full px-4 py-3 text-left text-sm text-white
                         hover:bg-white/10 transition duration-200"
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Date Range */}
      <div>
        <label className="block text-white/90 text-sm font-medium mb-2">
          Dates
        </label>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  if (date && (!endDate || date > endDate)) {
                    setEndDate(null);
                  }
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                locale={fr}
                placeholderText="Arrivée"
                dateFormat="dd/MM/yyyy"
                className="w-full h-12 pl-10 pr-4 text-white placeholder-white/50
                         bg-white/10 border border-white/20 rounded-xl
                         focus:outline-none focus:border-white/40
                         transition duration-200"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <ReactDatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate || new Date()}
                locale={fr}
                placeholderText="Départ"
                dateFormat="dd/MM/yyyy"
                disabled={!startDate}
                className="w-full h-12 pl-10 pr-4 text-white placeholder-white/50
                         bg-white/10 border border-white/20 rounded-xl
                         focus:outline-none focus:border-white/40
                         transition duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Guests Counter */}
      <div>
        <label className="block text-white/90 text-sm font-medium mb-2">
          Voyageurs
        </label>
        <div className="h-12 px-4 flex items-center justify-between
                      bg-white/10 border border-white/20 rounded-xl">
          <button
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="w-8 h-8 flex items-center justify-center
                     text-white text-lg font-light
                     hover:bg-white/10 rounded-lg transition duration-200"
            type="button"
          >
            −
          </button>
          <span className="text-white">
            {guests} {guests > 1 ? 'voyageurs' : 'voyageur'}
          </span>
          <button
            onClick={() => setGuests(guests + 1)}
            className="w-8 h-8 flex items-center justify-center
                     text-white text-lg font-light
                     hover:bg-white/10 rounded-lg transition duration-200"
            type="button"
          >
            +
          </button>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="h-12 mt-2 flex items-center justify-center gap-2
                 bg-white text-black font-medium rounded-xl
                 hover:bg-white/90 transition duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span>Rechercher</span>
      </button>
    </div>
  );
}

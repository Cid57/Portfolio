'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isScrolled ? 'bg-luxury-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}
      `}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-playfair text-luxury-cream whitespace-nowrap">
            Corsica Luxury Rentals
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/villas" className="text-luxury-cream hover:text-luxury-gold transition-colors">
              Nos Villas
            </Link>
            <Link href="/services" className="text-luxury-cream hover:text-luxury-gold transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-luxury-cream hover:text-luxury-gold transition-colors">
              À Propos
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          <button 
            className="md:hidden text-luxury-cream p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Menu Mobile */}
      <div className={`
        md:hidden 
        fixed top-[72px] left-0 w-full 
        bg-luxury-black/95 backdrop-blur-md
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        <div className="p-4 space-y-4">
          <Link 
            href="/villas" 
            className="block px-4 py-2 text-luxury-cream hover:text-luxury-gold transition-colors"
          >
            Nos Villas
          </Link>
          <Link 
            href="/services" 
            className="block px-4 py-2 text-luxury-cream hover:text-luxury-gold transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className="block px-4 py-2 text-luxury-cream hover:text-luxury-gold transition-colors"
          >
            À Propos
          </Link>
          <Link 
            href="/contact" 
            className="block px-4 py-2 text-luxury-cream hover:text-luxury-gold transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { Sparkles, Menu, X, Calendar, Download, Star } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenExportModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with signature Star-L emblem */}
          <a href="#" className="flex items-center gap-1 group">
            <div className="relative flex items-center justify-center mr-1">
              {/* Golden Yellow Star Accent */}
              <Star 
                className="w-4 h-4 text-[#FFD166] fill-[#FFD166] absolute -top-1 -left-2 transform -rotate-12 group-hover:scale-125 transition-transform" 
              />
              {/* Stylized L */}
              <span className="font-serif italic font-black text-3xl text-[#111827] tracking-tighter">
                L
              </span>
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-[#111827] group-hover:text-black transition-colors">
              LOCGICIAN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors"
            >
              Loc Services
            </a>
            <a 
              href="#gallery" 
              className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors"
            >
              Crown Gallery
            </a>
            <a 
              href="#community" 
              className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors"
            >
              Good Loc Day
            </a>
            <a 
              href="#contact" 
              className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Standalone HTML Export Modal Trigger */}
            <button
              onClick={onOpenExportModal}
              title="View & Download Standalone Single-File HTML"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#374151] hover:text-[#111827] bg-gray-100 hover:bg-gray-200 rounded-full transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span className="hidden xl:inline">Standalone</span> HTML
            </button>

            {/* Primary CTA: Book Crown Magic */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFD166] text-[#111827] font-bold text-xs uppercase tracking-wider hover:bg-[#ffc63a] hover:shadow-md active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#111827]" />
              Book Crown Magic
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full bg-[#FFD166] text-[#111827] font-bold text-xs uppercase tracking-wider"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-black py-1"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-black py-1"
          >
            Loc Services
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-black py-1"
          >
            Crown Gallery
          </a>
          <a
            href="#community"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-black py-1"
          >
            Good Loc Day
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-black py-1"
          >
            Contact & Studio
          </a>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FFD166] text-[#111827] font-bold text-sm uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              Book Crown Magic
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-xs"
            >
              <Download className="w-4 h-4 text-[#E5A93C]" />
              Download Standalone Single HTML
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

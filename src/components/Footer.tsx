import React from 'react';
import { Star, Instagram, Youtube, Sparkles, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenExportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-1 group">
              <div className="relative flex items-center justify-center mr-1">
                <Star className="w-4 h-4 text-[#FFD166] fill-[#FFD166] absolute -top-1 -left-2 transform -rotate-12" />
                <span className="font-serif italic font-black text-3xl text-white tracking-tighter">
                  L
                </span>
              </div>
              <span className="font-heading font-black text-2xl tracking-tight text-white">
                LOCGICIAN
              </span>
            </a>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Master Loctician services specializing in tension-free installations, precision retwists, custom styling, and holistic loc care. Creating magic for loc'd crowns without a wand.
            </p>

            {/* Community Hashtags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['#locgician', '#goodlocday', '#crownmagic', '#tensionfreelocs', '#locjourney'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-[#FFD166]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#FFD166]">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Loctician</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Loc Services Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Crown Transformations</a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors">@goodlocday Sisterhood</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Studio Location & FAQs</a>
              </li>
            </ul>
          </div>

          {/* Loc Care Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#FFD166]">
              Crown Rituals
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>Starter Locs Geometric Grid</li>
              <li>Precision Palm Roll Retwist</li>
              <li>Signature Barrel Rolls & Updos</li>
              <li>Herbal Steam ACV Basin Detox</li>
              <li>Interlocking & Repair Services</li>
            </ul>
          </div>

          {/* Community & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#FFD166]">
              Connect With Tribe
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD166] text-white hover:text-[#111827] flex items-center justify-center transition-all"
                aria-label="Instagram @locgician"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD166] text-white hover:text-[#111827] flex items-center justify-center transition-all"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-[#FFD166] text-white hover:text-[#111827] text-xs font-bold transition-all"
              >
                @goodlocday
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-full bg-[#FFD166] text-[#111827] font-black text-xs uppercase tracking-wider hover:bg-[#ffc63a] transition-all"
              >
                Book Crown Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Locgician. All rights reserved. Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#FFD166] fill-[#FFD166] mx-0.5" />
            <span>for healthy crowns everywhere.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenExportModal}
              className="text-gray-400 hover:text-[#FFD166] transition-colors underline"
            >
              Get Standalone HTML File
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-[#111827] text-white">
      {/* Background ambient gold/yellow glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center pr-0 lg:pr-4">
            
            {/* Main Headline with exact styling from screenshot */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] tracking-tight uppercase mb-5">
              CREATING <span className="text-[#FFD166]">MAGIC</span> FOR{' '}
              <span className="text-[#FFD166]">LOC'D CROWNS</span> WITHOUT A WAND.
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8">
              Master Loctician services specializing in installations, retwists, styling, and
              healthy loc care. Join the community{' '}
              <a 
                href="#community" 
                className="text-[#FFD166] hover:underline font-semibold"
              >
                @goodlocday
              </a>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#FFD166] hover:bg-[#ffc63a] text-[#111827] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-[#FFD166]/20 active:scale-95 transition-all duration-200"
              >
                Book Appointment
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-gray-500 hover:border-[#FFD166] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
              >
                Explore Services
              </button>
            </div>

            {/* Status Badges: matching screenshot */}
            <div className="inline-flex items-center flex-wrap gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs font-semibold text-gray-200 w-fit">
              <span className="flex items-center gap-1.5">
                <span>🧙‍♂️</span>
                <span className="tracking-wide">MASTER LOCTICIAN</span>
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD166]">⭐</span>
                <span className="tracking-wide">241K+ COMMUNITY</span>
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD166]">✨</span>
                <span className="tracking-wide">#LOCGICIAN</span>
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Palm Foliage & Master Loctician styling */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
              
              {/* Image: Loctician styling locs outdoors in natural palm greenery */}
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1400&q=85"
                alt="Master Loctician meticulously styling healthy dreadlocks in lush palm sunlight"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />

              {/* Top floating experience pill */}
              <div className="absolute top-4 right-4 bg-[#111827]/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Tension-Free Mastery
                </span>
              </div>

              {/* Bottom Color Palette Showcase: Exact banner from screenshot */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center sm:justify-end">
                <div className="flex items-center gap-2 sm:gap-3 bg-black/75 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white/90">
                  {/* Warm Gold Accent */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#E5A93C] inline-block shadow-sm" />
                    <span>WARM GOLD ACCENT</span>
                  </div>
                  <span className="text-white/30">•</span>
                  {/* Off-White */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#F9FAFB] inline-block shadow-sm" />
                    <span>OFF-WHITE</span>
                  </div>
                  <span className="text-white/30">•</span>
                  {/* Charcoal Gray */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#374151] inline-block shadow-sm" />
                    <span>CHARCOAL GRAY</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

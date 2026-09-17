import React, { useState } from 'react';
import { Clock, Check, Sparkles, Flame, Droplets, ShieldCheck, ChevronRight } from 'lucide-react';
import { LOC_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { LocService, ServiceCategory } from '../types';

interface ServicesCatalogProps {
  onSelectServiceForBooking: (service: LocService) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = LOC_SERVICES.filter((svc) => {
    const matchesCategory = selectedCategory === 'all' || svc.category === selectedCategory;
    const matchesSearch = svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          svc.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-[#F9FAFB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD166]/20 border border-[#FFD166]/40 text-[#111827] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Master Loctician Menu</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#111827] tracking-tight uppercase">
            Loc Care Services & Crown Rituals
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Every session begins with an organic botanical wash, scalp assessment, and ends under the mist hood for sealed hydration. Zero wax, zero build-up.
          </p>
        </div>

        {/* Tabbed Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ServiceCategory)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#111827] text-[#FFD166] shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search & Filter bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services (e.g. retwist, detox, starter, interlocking)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-full border border-gray-300 focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/30 bg-white text-xs sm:text-sm text-[#111827] placeholder-gray-400 outline-none transition-all"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#FFD166] transition-all duration-200 flex flex-col justify-between relative group"
            >
              {service.isPopular && (
                <div className="absolute -top-3 right-6 bg-[#FFD166] text-[#111827] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-gray-100 text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                    {service.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-lg text-[#111827] group-hover:text-black transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {service.summary}
                </p>

                {/* What's included checklist */}
                <div className="space-y-1.5 pt-3 border-t border-gray-100 mb-6">
                  {service.included.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-4 h-4 rounded-full bg-[#FFD166]/20 text-[#111827] flex items-center justify-center text-[10px] shrink-0 font-bold">
                        ✓
                      </span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Booking CTA */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">Estimated Price</span>
                  <span className="font-heading font-black text-2xl text-[#111827]">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectServiceForBooking(service)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111827] group-hover:bg-[#FFD166] text-white group-hover:text-[#111827] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                >
                  <span>Book Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">No services found matching your query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-full bg-[#FFD166] text-xs font-bold text-[#111827]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

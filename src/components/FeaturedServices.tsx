import React from 'react';
import { Layers, Sparkles, Droplets, Crown, Scissors, ArrowUpRight } from 'lucide-react';
import { LocService } from '../types';

interface FeaturedServicesProps {
  onSelectServiceForBooking: (service: LocService) => void;
  onExploreFullMenu: () => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onSelectServiceForBooking,
  onExploreFullMenu,
}) => {
  const featured = [
    {
      id: 'starter-install',
      name: 'STARTER LOCS INSTALL',
      category: 'starter' as const,
      price: '$80.00',
      priceNumeric: 80,
      duration: '3.5 hrs',
      summary: 'Starter locs install with custom geometric diamond grid parting, organic tea rinse, and tension-free coils.',
      description: 'The sacred beginning of your loc journey with custom grid layout.',
      icon: <Layers className="w-5 h-5 text-[#111827]" />,
      included: ['Scalp analysis', 'Organic clarifying wash', 'Precision grid parting']
    },
    {
      id: 'retwist-style',
      name: 'RETWIST & STYLE',
      category: 'maintenance' as const,
      price: '$120.00',
      priceNumeric: 120,
      duration: '2.0 hrs',
      summary: 'Retwist & style with clean crisp parts, tension-free palm roll, and signature crown twists or barrel rolls.',
      description: 'Our most booked experience with plant-based locking gels.',
      icon: <Sparkles className="w-5 h-5 text-[#111827]" />,
      included: ['Dual organic wash', 'Tension-free palm-roll', 'Custom styling']
    },
    {
      id: 'loc-detox-treatment',
      name: 'LOC DETOX & TREATMENT',
      category: 'detox' as const,
      price: '$65.00',
      priceNumeric: 65,
      duration: '1.5 hrs',
      summary: 'Loc detox card treatment in natural herbal tea cleanse, mint scalp detox, and micro-mist moisture infusion.',
      description: 'Deep therapeutic basin detox removing lint and product residue.',
      icon: <Droplets className="w-5 h-5 text-[#111827]" />,
      included: ['ACV basin submersion', 'Buildup extraction', 'Herbal steam therapy']
    },
    {
      id: 'retwist-treatment-combo',
      name: 'RETWIST LOC & TREATMENT',
      category: 'maintenance' as const,
      price: '$145.00',
      priceNumeric: 145,
      duration: '3.0 hrs',
      summary: 'Loc detox and crown revival made of herbal infusions, steaming, styling, healthy scalp repair, and crown radiance.',
      description: 'The ultimate royal renewal combining detox bath and retwist.',
      icon: <Crown className="w-5 h-5 text-[#111827]" />,
      included: ['Detox basin soak', 'Herbal steam cap', 'Precision retwist & style']
    }
  ];

  return (
    <section className="py-12 bg-[#F9FAFB] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
              Featured Services
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Our most celebrated crown appointments booked weekly by the @goodlocday tribe.
            </p>
          </div>
          <button
            onClick={onExploreFullMenu}
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#E5A93C] transition-colors"
          >
            <span>See Complete Menu</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid - faithfully replicating the screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#FFD166] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD166] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {svc.icon}
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#111827] leading-tight pt-1">
                    {svc.name}
                  </h3>
                </div>

                {/* Summary Text matching screenshot */}
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {svc.summary}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-semibold block">Starting at</span>
                  <span className="font-heading font-extrabold text-xl text-[#111827]">
                    {svc.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectServiceForBooking({
                    id: svc.id,
                    name: svc.name,
                    category: svc.category,
                    price: svc.price,
                    priceNumeric: svc.priceNumeric,
                    duration: svc.duration,
                    summary: svc.summary,
                    description: svc.description,
                    iconType: 'sparkles',
                    included: svc.included
                  })}
                  className="px-3.5 py-1.5 rounded-lg bg-gray-100 group-hover:bg-[#FFD166] text-[#111827] text-xs font-bold transition-colors"
                >
                  Book Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

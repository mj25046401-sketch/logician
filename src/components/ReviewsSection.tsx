import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/galleryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F9FAFB] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-[#FFD166] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFD166] text-[#FFD166]" />
            ))}
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#111827] uppercase tracking-tight">
            Loved By 241K+ Loc Wearers Worldwide
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Real experiences from clients who retired tight, painful retwists and found peaceful crown magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FFD166]">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD166] text-[#FFD166]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    {rev.locJourney}
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#111827]">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-gray-400 font-medium">
                    {rev.handle}
                  </span>
                </div>

                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Crown
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

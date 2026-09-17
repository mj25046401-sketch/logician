import React, { useState } from 'react';
import { Sparkles, Eye, Instagram, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TRANSFORMATIONS, GALLERY_GRID } from '../data/galleryData';
import { TransformationItem } from '../types';

interface TransformationGalleryProps {
  onOpenBooking: () => void;
}

export const TransformationGallery: React.FC<TransformationGalleryProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'retwist' | 'styling' | 'starter'>('all');
  const [selectedTransformation, setSelectedTransformation] = useState<TransformationItem>(TRANSFORMATIONS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage for before/after split
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const filteredGrid = activeTab === 'all' 
    ? GALLERY_GRID 
    : GALLERY_GRID.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-16 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD166]/20 border border-[#FFD166]/40 text-[#111827] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Real Crown Magic</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight">
              Before & After Transformations
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-1 max-w-xl">
              Witness the power of tension-free technique, organic botanical nourishment, and mathematical parting precision.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#FFD166]/20 text-[#111827] text-xs font-bold transition-all border border-gray-200"
            >
              <Instagram className="w-4 h-4 text-[#111827]" />
              <span>@locgician</span>
            </a>
          </div>
        </div>

        {/* Interactive Before / After Split Slider Showcase */}
        <div className="mb-14 bg-[#111827] rounded-3xl p-6 lg:p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Slider visual */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/15 bg-stone-900 shadow-2xl">
                
                {/* AFTER Image (Full background) */}
                <img
                  src={selectedTransformation.afterImg}
                  alt={`After: ${selectedTransformation.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#FFD166] text-[#111827] text-xs font-black px-3 py-1 rounded-full shadow-md z-10 uppercase tracking-wider">
                  After Magic
                </span>

                {/* BEFORE Image (Clipped overlay) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedTransformation.beforeImg}
                    alt={`Before: ${selectedTransformation.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 uppercase tracking-wider">
                    Before Arrival
                  </span>
                </div>

                {/* Split line & handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-[#FFD166] shadow-[0_0_12px_#FFD166]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFD166] text-[#111827] font-black flex items-center justify-center text-xs shadow-lg border-2 border-white">
                    ↔
                  </div>
                </div>

                {/* Invisible input range for accessible touch & mouse dragging */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Drag to compare before and after transformation"
                />
              </div>

              {/* Helper caption */}
              <div className="mt-3 flex items-center justify-between text-xs text-gray-400 px-2">
                <span>◀ Drag slider or tap to reveal full transformation ▶</span>
                <span className="text-[#FFD166] font-semibold">{sliderPosition}% Split</span>
              </div>
            </div>

            {/* Transformation Story & Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#FFD166] text-xs font-semibold uppercase tracking-wider mb-3">
                  {selectedTransformation.locAge} • {selectedTransformation.category}
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
                  {selectedTransformation.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {selectedTransformation.story}
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFD166] uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Loctician Technique Note
                  </div>
                  <p className="text-xs text-gray-300 italic">
                    "{selectedTransformation.locticianNote}"
                  </p>
                </div>
              </div>

              {/* Transformation Quick Picker */}
              <div>
                <span className="text-xs text-gray-400 font-semibold block mb-2 uppercase tracking-wider">
                  Select Transformation Case:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {TRANSFORMATIONS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedTransformation(item);
                        setSliderPosition(50);
                      }}
                      className={`text-left p-2.5 rounded-xl text-xs transition-all border ${
                        selectedTransformation.id === item.id
                          ? 'bg-[#FFD166] text-[#111827] font-bold border-[#FFD166]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="block truncate">{item.title}</span>
                      <span className="text-[10px] opacity-75">{item.locAge}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-full bg-[#FFD166] text-[#111827] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffc63a] transition-all flex items-center justify-center gap-2"
              >
                <span>Book This Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

        {/* Gallery Grid Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Showcase' },
              { id: 'retwist', label: 'Retwist & Parts' },
              { id: 'styling', label: 'Sculpted Styles' },
              { id: 'starter', label: 'Starter Coils' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#111827] text-[#FFD166]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Showing {filteredGrid.length} curated crown sets
          </span>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredGrid.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-square cursor-pointer border border-gray-200 shadow-sm hover:shadow-lg transition-all"
              onClick={() => setZoomImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Eye className="w-4 h-4 text-white" />
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-sm text-white leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-300 mt-1">
                    <span>{item.tags}</span>
                    <span className="flex items-center gap-1 text-[#FFD166]">
                      <Heart className="w-3.5 h-3.5 fill-[#FFD166]" />
                      {item.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20">
            <img
              src={zoomImage}
              alt="Zoomed Loc Transformation"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2 hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

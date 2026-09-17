import React from 'react';
import { Sparkles, Users, Award, Heart, Shield, CheckCircle2, Instagram } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Master Loctician Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/5] bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80"
                alt="Locgician Master Loctician hands at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Overlay quote */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[#FFD166] text-3xl font-serif">“</span>
                <p className="font-heading font-medium text-sm sm:text-base leading-snug -mt-3 mb-2">
                  Locs aren't just a hairstyle—they are an antenna to your inner royalty. We treat every single part as sacred architecture.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-[#FFD166]" />
                  <span className="text-xs text-gray-300 font-bold uppercase tracking-wider">
                    The Locgician Master Manifesto
                  </span>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#111827] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-white/15 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FFD166] text-[#111827] flex items-center justify-center font-heading font-black text-xl">
                10+
              </div>
              <div>
                <p className="font-bold text-sm leading-tight text-[#FFD166]">Years of Mastery</p>
                <p className="text-xs text-gray-300">Tension-Free Loc Craft</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD166]/20 border border-[#FFD166]/40 text-[#111827] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>The Artisan Behind the Crown</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#111827] tracking-tight uppercase mb-6 leading-tight">
              Creating Magic For Loc'd Crowns <span className="text-[#E5A93C]">Without A Wand.</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>Locgician</strong>, we believe true loc magic comes from scientific scalp health, botanical nourishment, and ergonomic, tension-free parting geometry. You never have to suffer through painful, headache-inducing retwists to have clean, immaculate parts.
              </p>
              <p>
                Founded by Master Loctician artists, our studio was built on a simple promise: <strong>zero heavy petroleum waxes, zero suffocating gels, and zero thinning tension.</strong> Whether you are taking your first step with starter coils or celebrating a decade of mature dreadlocks, your crown is welcomed into a sanctuary of warmth and intention.
              </p>
            </div>

            {/* Core pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/30 text-[#111827] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Zero-Wax Guarantee</h4>
                  <p className="text-xs text-gray-500 mt-0.5">We use only water-soluble plant jellies and cold-pressed herbal elixirs that rinse clean.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/30 text-[#111827] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Follicle Protection</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Tension-free rolling preserves your edge hairline and prevents thinning at the roots.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/30 text-[#111827] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Hydration First</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Every appointment features therapeutic warm steam infusion for internal moisture retention.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFD166]/30 text-[#111827] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#111827]">Sanctuary Experience</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Aromatherapy, herbal teas, and soulful music create an uplifting self-care ritual.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#FFD166] text-[#111827] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffc63a] transition-all shadow-sm"
              >
                Experience The Magic
              </button>
            </div>

          </div>

        </div>

        {/* Sister Movement: Good Loc Day Spotlight */}
        <div id="community" className="rounded-3xl bg-[#111827] text-white p-8 lg:p-12 relative overflow-hidden shadow-2xl scroll-mt-24">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFD166] text-xs font-bold uppercase tracking-wider mb-4">
                <span>⭐</span>
                <span>The Global Sister Movement</span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mb-4">
                JOIN OVER 241,000+ SOULS AT <span className="text-[#FFD166]">@GOODLOCDAY</span>
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                <strong>Good Loc Day</strong> was born right here from our styling chair. What began as a daily affirmation to our clients has grown into a worldwide community of over 241K loc wearers sharing care tips, celebrating crown milestones, and wearing their natural heritage with unapologetic pride.
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 mb-6">
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-[#FFD166]">241K+</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">Global Members</div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-white">12,000+</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">Crowns Blessed</div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-[#FFD166]">5.0 ★</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">850+ Reviews</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFD166] text-[#111827] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffc63a] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Follow @goodlocday
                </a>
                <span className="text-xs text-gray-400 font-semibold">
                  Tag #Locgician & #GoodLocDay for daily reposts
                </span>
              </div>
            </div>

            {/* Right side: Community Grid Preview */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
                  alt="Loc community member"
                  className="rounded-2xl object-cover h-40 w-full border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=500&q=80"
                  alt="Loc community styling"
                  className="rounded-2xl object-cover h-48 w-full border border-white/10"
                />
              </div>
              <div className="space-y-3 pt-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                  alt="Loc journey transformation"
                  className="rounded-2xl object-cover h-48 w-full border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                  alt="Happy loc tribe client"
                  className="rounded-2xl object-cover h-40 w-full border border-white/10"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

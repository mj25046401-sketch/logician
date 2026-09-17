import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, ShieldAlert, CheckCircle2, ChevronDown, Calendar, Sparkles } from 'lucide-react';

interface StudioLocationProps {
  onOpenBooking: () => void;
}

export const StudioLocation: React.FC<StudioLocationProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const policies = [
    {
      question: 'How should I prepare my hair for my appointment?',
      answer: 'All services (unless specified as style-only) include our signature double organic wash and warm steam hydration. You do not need to wash beforehand. However, please remove prior extensions, braids, or tight rubber bands so we can begin on time.'
    },
    {
      question: 'What is your deposit and cancellation policy?',
      answer: 'A $30 non-refundable deposit is required to secure your appointment slot, which goes directly toward your service balance. Rescheduling is permitted up to 24 hours prior to appointment time with zero fee.'
    },
    {
      question: 'Do you work with sensitive scalps or thinning edges?',
      answer: 'Yes, absolutely! We specialize in tension-free palm rolling and medical-grade latch-hook repairs. We never pull or yank. Please let us know of any scalp tenderness or alopecia concerns during booking so we can tailor our herbal oil blend.'
    },
    {
      question: 'Can I bring a guest or children to the studio?',
      answer: 'To preserve our peaceful, aromatic sanctuary atmosphere and ensure focused artisan attention on each client, we ask that only the client receiving services attends the appointment.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD166]/20 border border-[#FFD166]/40 text-[#111827] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Sanctuary & Scheduling</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#111827] tracking-tight uppercase">
            Studio Location & Client Guide
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Located in the heart of Atlanta's historic arts district. A private, tranquil space designed for crown rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Location & Contact Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Studio Info Card */}
            <div className="bg-[#111827] text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD166]/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-heading font-extrabold text-2xl text-white mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]" />
                Locgician Crown Studio
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FFD166]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Studio Address</h4>
                    <p className="text-gray-300 mt-0.5 leading-relaxed">
                      450 Crown Magic Boulevard, Suite 204<br />
                      Historic Arts District • Atlanta, GA 30312
                    </p>
                    <p className="text-xs text-[#FFD166] mt-1 font-semibold">
                      ★ Free reserved client parking in rear lot
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FFD166]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Studio Hours</h4>
                    <div className="text-gray-300 mt-0.5 space-y-1 text-xs sm:text-sm">
                      <div className="flex justify-between gap-6">
                        <span>Tuesday – Friday:</span>
                        <span className="font-semibold text-white">9:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Saturday:</span>
                        <span className="font-semibold text-white">8:30 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-6 text-gray-400">
                        <span>Sunday & Monday:</span>
                        <span className="italic">Closed for Rest & Plant Formulation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FFD166]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Contact & Concierge</h4>
                    <p className="text-gray-300 text-xs sm:text-sm mt-0.5">
                      Call / Text: (404) 555-CROWN (2769)<br />
                      Email: magic@locgician.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Next Available Slot</span>
                  <span className="text-sm font-bold text-[#FFD166]">This Thursday at 11:00 AM</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 rounded-full bg-[#FFD166] text-[#111827] font-bold text-xs uppercase tracking-wider hover:bg-[#ffc63a] transition-all"
                >
                  Book In Studio
                </button>
              </div>

            </div>

            {/* Quick Policy Assurance Pill */}
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
              <p className="text-xs text-amber-900 leading-snug">
                <strong>Peace-of-Mind Guarantee:</strong> If you feel any excessive scalp tension during your service, notify your stylist immediately—we adjust tension free of charge.
              </p>
            </div>

          </div>

          {/* Right Column: Policies & Preparation Accordion */}
          <div className="lg:col-span-6">
            <h3 className="font-heading font-extrabold text-xl text-[#111827] mb-4">
              Client Etiquette & Preparation Policies
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-6">
              Please review our studio guidelines to ensure the most rejuvenating appointment experience for you and fellow clients.
            </p>

            <div className="space-y-3">
              {policies.map((p, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-[#F9FAFB]"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-heading font-bold text-sm text-[#111827] hover:text-[#E5A93C] transition-colors"
                    >
                      <span>{p.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#111827]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {p.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Testimonial Quote */}
            <div className="mt-8 p-5 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-1 text-[#FFD166] text-sm mb-2">
                ★ ★ ★ ★ ★
              </div>
              <p className="text-xs text-gray-700 italic leading-relaxed">
                "The studio is like an oasis. Smells like peppermint and lavender, zero waiting time, and my locs have never been healthier."
              </p>
              <span className="text-[11px] font-bold text-gray-900 mt-2 block">
                — Nia T., Client since 2021
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

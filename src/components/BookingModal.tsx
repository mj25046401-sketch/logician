import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Sparkles, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LOC_SERVICES } from '../data/servicesData';
import { LocService, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: LocService | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [step, setStep] = useState<'service' | 'datetime' | 'details' | 'confirmed'>('service');
  
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService ? initialService.id : LOC_SERVICES[1].id
  );

  const [date, setDate] = useState<string>('2026-09-22');
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM');
  const [locLength, setLocLength] = useState<'short' | 'medium' | 'long' | 'extra-long'>('medium');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['steam-boost']);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [bookingCode, setBookingCode] = useState<string>('');

  if (!isOpen) return null;

  const currentService = LOC_SERVICES.find((s) => s.id === selectedServiceId) || LOC_SERVICES[0];

  const addonsList = [
    { id: 'steam-boost', name: 'Thermal Botanical Steam Infusion', price: 25 },
    { id: 'acv-rinse', name: 'Raw Apple Cider Vinegar Basin Rinse', price: 20 },
    { id: 'rosemary-oil', name: 'Rosemary & Jojoba Hot Scalp Therapy', price: 15 },
    { id: 'gold-cuffs', name: 'Custom Royal Gold Loc Cuffs (Set of 6)', price: 12 },
  ];

  const addonsTotal = selectedAddons.reduce((acc, curr) => {
    const item = addonsList.find(a => a.id === curr);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalPrice = currentService.priceNumeric + addonsTotal;
  const depositAmount = 30; // $30 deposit
  const balanceDue = Math.max(0, totalPrice - depositAmount);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'CROWN-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setStep('confirmed');
  };

  const availableTimes = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM', '6:00 PM'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-[#111827] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#FFD166] text-[#111827] flex items-center justify-center font-black text-sm">
              👑
            </span>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white leading-tight">
                Book Your Crown Magic
              </h3>
              <p className="text-xs text-gray-400">
                Locgician Studio • Master Loctician Appointment
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stepper indicator */}
        {step !== 'confirmed' && (
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs font-semibold">
            <button
              onClick={() => setStep('service')}
              className={`flex items-center gap-1.5 ${
                step === 'service' ? 'text-[#111827] font-bold' : 'text-gray-400'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 'service' ? 'bg-[#111827] text-[#FFD166]' : 'bg-gray-200 text-gray-600'
              }`}>1</span>
              <span>Service</span>
            </button>
            <span className="text-gray-300">──</span>
            <button
              onClick={() => setStep('datetime')}
              className={`flex items-center gap-1.5 ${
                step === 'datetime' ? 'text-[#111827] font-bold' : 'text-gray-400'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 'datetime' ? 'bg-[#111827] text-[#FFD166]' : 'bg-gray-200 text-gray-600'
              }`}>2</span>
              <span>Date & Time</span>
            </button>
            <span className="text-gray-300">──</span>
            <button
              onClick={() => setStep('details')}
              className={`flex items-center gap-1.5 ${
                step === 'details' ? 'text-[#111827] font-bold' : 'text-gray-400'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 'details' ? 'bg-[#111827] text-[#FFD166]' : 'bg-gray-200 text-gray-600'
              }`}>3</span>
              <span>Client Details</span>
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-[#111827]">
          
          {/* STEP 1: Select Service & Add-ons */}
          {step === 'service' && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                  Choose Crown Service
                </label>
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {LOC_SERVICES.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedServiceId === s.id
                          ? 'border-[#111827] bg-[#FFD166]/15 ring-2 ring-[#FFD166]'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="pr-4">
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-sm text-[#111827]">
                            {s.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 font-semibold text-gray-600">
                            {s.duration}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                          {s.summary}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-heading font-extrabold text-base text-[#111827]">
                          {s.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                  Recommended Crown Add-Ons (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                          isChecked
                            ? 'border-[#E5A93C] bg-amber-50/50 text-[#111827] font-semibold'
                            : 'border-gray-200 bg-gray-50/50 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-[#FFD166] border-[#111827] text-[#111827]' : 'border-gray-300'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{addon.name}</span>
                        </div>
                        <span className="font-bold">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Price summary pill */}
              <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 block">Total Service Estimate</span>
                  <span className="font-heading font-black text-xl text-[#111827]">
                    ${totalPrice}.00
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">Deposit to hold slot</span>
                  <span className="text-sm font-bold text-emerald-700">${depositAmount}.00</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep('datetime')}
                  className="px-6 py-3 rounded-full bg-[#111827] text-white font-bold text-xs uppercase tracking-wider hover:bg-black flex items-center gap-2"
                >
                  <span>Select Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Date, Time & Loc Length */}
          {step === 'datetime' && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                  Select Appointment Date
                </label>
                <input
                  type="date"
                  value={date}
                  min="2026-09-18"
                  max="2026-10-31"
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-[#FFD166] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                  Available Studio Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableTimes.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                        timeSlot === slot
                          ? 'bg-[#111827] text-[#FFD166] border-[#111827] shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-700 mb-2">
                  Current Loc Length
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'short', label: 'Short (Neck/Ears)' },
                    { id: 'medium', label: 'Medium (Shoulders)' },
                    { id: 'long', label: 'Long (Mid-Back)' },
                    { id: 'extra-long', label: 'Extra Long (Waist+)' },
                  ].map((len) => (
                    <button
                      key={len.id}
                      type="button"
                      onClick={() => setLocLength(len.id as any)}
                      className={`p-2.5 rounded-xl text-xs text-center border transition-all ${
                        locLength === len.id
                          ? 'bg-[#FFD166] text-[#111827] font-bold border-[#FFD166]'
                          : 'bg-gray-50 text-gray-600 border-gray-200'
                      }`}
                    >
                      {len.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setStep('service')}
                  className="text-xs font-bold text-gray-500 hover:text-black"
                >
                  ← Back to Services
                </button>
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-6 py-3 rounded-full bg-[#111827] text-white font-bold text-xs uppercase tracking-wider hover:bg-black flex items-center gap-2"
                >
                  <span>Enter Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Client Details */}
          {step === 'details' && (
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Taylor"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FFD166] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Mobile Phone (For SMS reminders) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(404) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FFD166] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FFD166] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Stylist Notes or Scalp Concerns
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Sensitive scalp at temples, 68 locs total, wanting high barrel rolls for weekend wedding."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#FFD166] outline-none"
                />
              </div>

              {/* Order review summary box */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs space-y-1.5">
                <div className="flex justify-between font-bold text-gray-800">
                  <span>{currentService.name}</span>
                  <span>{currentService.price}</span>
                </div>
                <div className="text-gray-500">
                  Date & Time: <span className="font-semibold text-gray-800">{date} at {timeSlot}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="text-gray-500">
                    Add-ons: <span className="font-semibold text-gray-800">{selectedAddons.length} selected (+${addonsTotal})</span>
                  </div>
                )}
                <div className="pt-2 border-t border-gray-200 flex justify-between font-bold text-sm text-[#111827]">
                  <span>Total Investment:</span>
                  <span>${totalPrice}.00</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold text-xs">
                  <span>Deposit Due Now:</span>
                  <span>${depositAmount}.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep('datetime')}
                  className="text-xs font-bold text-gray-500 hover:text-black"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#FFD166] text-[#111827] font-black text-xs uppercase tracking-wider hover:bg-[#ffc63a] shadow-md active:scale-95 transition-all"
                >
                  Confirm & Reserve Appointment
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmed Crown Ticket */}
          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-black text-[#E5A93C] uppercase tracking-widest block mb-1">
                  Crown Reserved
                </span>
                <h3 className="font-heading font-black text-2xl text-[#111827]">
                  You're Booked For Crown Magic!
                </h3>
                <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
                  A confirmation SMS and calendar invite have been dispatched to {formData.phone || 'your phone'} and {formData.email || 'your email'}.
                </p>
              </div>

              {/* Digital Studio Ticket Card */}
              <div className="max-w-md mx-auto bg-[#111827] text-white p-6 rounded-3xl text-left border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD166]/15 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                  <span className="font-heading font-extrabold text-sm text-[#FFD166]">
                    LOCGICIAN STUDIO
                  </span>
                  <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-300">
                    {bookingCode}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Client:</span>
                    <span className="font-bold text-white">{formData.fullName || 'Royal Guest'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Service:</span>
                    <span className="font-bold text-[#FFD166]">{currentService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Appointment:</span>
                    <span className="font-bold text-white">{date} • {timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Studio:</span>
                    <span className="text-white">450 Crown Magic Blvd, Atlanta GA</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-xs font-semibold">
                  <span className="text-gray-400">Estimated Duration:</span>
                  <span className="text-[#FFD166]">{currentService.duration}</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-800 font-bold text-xs uppercase tracking-wider hover:bg-gray-200"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    alert(`Appointment ${bookingCode} details copied to clipboard!`);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#FFD166] text-[#111827] font-bold text-xs uppercase tracking-wider hover:bg-[#ffc63a]"
                >
                  Save Pass
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

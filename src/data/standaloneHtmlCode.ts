export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Locgician | Professional Loctician & Studio</title>
  <meta name="description" content="Master Loctician services specializing in loc installations, retwists, styling, and healthy loc care. Join the community @goodlocday.">
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'loc-yellow': '#FFD166',
            'loc-black': '#111827',
            'loc-gold': '#E5A93C',
            'loc-white': '#F9FAFB',
            'loc-charcoal': '#374151',
          },
          fontFamily: {
            heading: ['Syne', 'Outfit', 'sans-serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Google Fonts: Syne, Outfit, Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&family=Syne:wght@700;800;900&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4, .font-heading { font-family: 'Syne', sans-serif; }
  </style>
</head>
<body class="bg-[#F9FAFB] text-[#111827] antialiased selection:bg-[#FFD166] selection:text-[#111827]">

  <!-- Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Brand Logo: Star Emblem + L + LOCGICIAN -->
        <a href="#" class="flex items-center gap-1 group">
          <div class="relative flex items-center justify-center mr-1">
            <svg class="w-4 h-4 text-[#FFD166] fill-[#FFD166] absolute -top-1 -left-2 transform -rotate-12" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span class="font-serif italic font-black text-3xl text-[#111827] tracking-tighter">L</span>
          </div>
          <span class="font-heading font-extrabold text-2xl tracking-tight text-[#111827]">LOCGICIAN</span>
        </a>

        <!-- Nav Links -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#about" class="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors">About</a>
          <a href="#services" class="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors">Loc Services</a>
          <a href="#gallery" class="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors">Crown Gallery</a>
          <a href="#community" class="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors">Good Loc Day</a>
          <a href="#contact" class="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#374151] hover:text-[#111827] transition-colors">Contact</a>
        </nav>

        <!-- CTA -->
        <div class="flex items-center gap-3">
          <button onclick="openBookingModal()" class="px-6 py-2.5 rounded-full bg-[#FFD166] text-[#111827] font-bold text-xs uppercase tracking-wider hover:bg-[#ffc63a] transition-all shadow-sm">
            ✨ Book Crown Magic
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- Hero Section (Faithful to Screenshot) -->
  <section class="relative overflow-hidden bg-[#111827] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Hero Text -->
        <div class="lg:col-span-6 z-10">
          <h1 class="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] tracking-tight uppercase mb-5">
            CREATING <span class="text-[#FFD166]">MAGIC</span> FOR <span class="text-[#FFD166]">LOC'D CROWNS</span> WITHOUT A WAND.
          </h1>

          <p class="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Master Loctician services specializing in installations, retwists, styling, and healthy loc care. Join the community <a href="#community" class="text-[#FFD166] font-semibold hover:underline">@goodlocday</a>.
          </p>

          <div class="flex flex-wrap items-center gap-4 mb-8">
            <button onclick="openBookingModal()" class="px-7 py-3.5 rounded-full bg-[#FFD166] hover:bg-[#ffc63a] text-[#111827] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all">
              Book Appointment
            </button>
            <a href="#services" class="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-gray-500 hover:border-[#FFD166] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all">
              Explore Services
            </a>
          </div>

          <!-- Badges from Screenshot -->
          <div class="inline-flex items-center flex-wrap gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs font-semibold text-gray-200">
            <span>🧙‍♂️ MASTER LOCTICIAN</span>
            <span class="text-gray-400">•</span>
            <span>⭐ 241K+ COMMUNITY</span>
            <span class="text-gray-400">•</span>
            <span>✨ #LOCGICIAN</span>
          </div>
        </div>

        <!-- Right Hero Visual with Color Palette Badge -->
        <div class="lg:col-span-6 relative">
          <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] sm:aspect-[16/11]">
            <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1400&q=85" alt="Loctician styling healthy locs" class="w-full h-full object-cover">
            
            <!-- Bottom Color Swatches Bar -->
            <div class="absolute bottom-4 left-4 right-4 flex items-center justify-center sm:justify-end">
              <div class="flex items-center gap-2 sm:gap-3 bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white">
                <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#E5A93C] inline-block"></span><span>WARM GOLD ACCENT</span></div>
                <span class="text-white/40">•</span>
                <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#F9FAFB] inline-block"></span><span class="text-gray-200">OFF-WHITE</span></div>
                <span class="text-white/40">•</span>
                <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#374151] inline-block"></span><span class="text-gray-200">CHARCOAL GRAY</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Featured Services (Screenshot Replicated) -->
  <section class="py-12 bg-[#F9FAFB] border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827]">Featured Services</h2>
          <p class="text-gray-500 text-sm mt-1">Our most requested appointments booked weekly by the @goodlocday tribe.</p>
        </div>
        <a href="#services" class="text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#E5A93C]">See All Services →</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <!-- Card 1 -->
        <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-start gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-[#FFD166] flex items-center justify-center font-bold text-lg">🪮</div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#111827] pt-1">STARTER LOCS INSTALL</h3>
            </div>
            <p class="text-xs text-gray-600 leading-relaxed mb-4">Starter locs install with custom geometric diamond grid parting, organic tea rinse, and tension-free coils.</p>
          </div>
          <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span class="font-heading font-black text-xl text-[#111827]">$80.00</span>
            <button onclick="openBookingModal('Starter Locs Install', 80)" class="px-3.5 py-1.5 rounded-lg bg-[#FFD166] text-[#111827] text-xs font-bold">Book Now</button>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-start gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-[#FFD166] flex items-center justify-center font-bold text-lg">✨</div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#111827] pt-1">RETWIST & STYLE</h3>
            </div>
            <p class="text-xs text-gray-600 leading-relaxed mb-4">Retwist & style with clean crisp parts, tension-free palm roll, and signature crown twists or barrel rolls.</p>
          </div>
          <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span class="font-heading font-black text-xl text-[#111827]">$120.00</span>
            <button onclick="openBookingModal('Retwist & Style', 120)" class="px-3.5 py-1.5 rounded-lg bg-[#FFD166] text-[#111827] text-xs font-bold">Book Now</button>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-start gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-[#FFD166] flex items-center justify-center font-bold text-lg">🍃</div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#111827] pt-1">LOC DETOX & TREATMENT</h3>
            </div>
            <p class="text-xs text-gray-600 leading-relaxed mb-4">Loc detox card treatment in natural herbal tea cleanse, mint scalp detox, and micro-mist moisture infusion.</p>
          </div>
          <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span class="font-heading font-black text-xl text-[#111827]">$65.00</span>
            <button onclick="openBookingModal('Loc Detox & Treatment', 65)" class="px-3.5 py-1.5 rounded-lg bg-[#FFD166] text-[#111827] text-xs font-bold">Book Now</button>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-start gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-[#FFD166] flex items-center justify-center font-bold text-lg">👑</div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#111827] pt-1">RETWIST LOC & TREATMENT</h3>
            </div>
            <p class="text-xs text-gray-600 leading-relaxed mb-4">Loc detox and crown revival made of herbal infusions, steaming, styling, healthy scalp repair, and radiance.</p>
          </div>
          <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span class="font-heading font-black text-xl text-[#111827]">$145.00</span>
            <button onclick="openBookingModal('Retwist Loc & Treatment', 145)" class="px-3.5 py-1.5 rounded-lg bg-[#FFD166] text-[#111827] text-xs font-bold">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Crown Transformation Gallery with Interactive Split Slider -->
  <section id="gallery" class="py-16 bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
        <div>
          <span class="text-xs font-black text-[#E5A93C] uppercase tracking-widest block mb-1">✨ Real Crown Magic</span>
          <h2 class="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#111827]">Before & After Transformations</h2>
        </div>
        <a href="https://instagram.com" target="_blank" class="mt-3 md:mt-0 text-xs font-bold bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
          Instagram @locgician
        </a>
      </div>

      <!-- Split Slider Card -->
      <div class="bg-[#111827] text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7">
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/20">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" alt="After Retwist" class="absolute inset-0 w-full h-full object-cover">
              <div id="sliderBeforeContainer" class="absolute inset-0 overflow-hidden" style="width: 50%;">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Before Overgrowth" class="absolute inset-0 w-full h-full object-cover max-w-none" style="width: 100%; height: 100%;">
                <span class="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Before</span>
              </div>
              <span class="absolute top-4 right-4 bg-[#FFD166] text-[#111827] text-xs font-black px-3 py-1 rounded-full uppercase">After Magic</span>
              <input type="range" min="5" max="95" value="50" oninput="updateBeforeAfter(this.value)" class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20">
            </div>
            <p class="text-xs text-gray-400 text-center mt-2">◀ Drag or slide across image to reveal before & after transformation ▶</p>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-bold text-[#FFD166] uppercase tracking-wider">Case Study #402</span>
            <h3 class="font-heading font-extrabold text-2xl text-white">Crown Revival & Precision Retwist</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Arrived with 10 weeks of root fuzz and product buildup. Completed our signature ACV herbal basin wash, gentle rosemary steam cap, and clean diamond parting.
            </p>
            <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
              <strong>Loctician Note:</strong> Zero edge tension applied. Parting restored with clean geometric geometry.
            </div>
            <button onclick="openBookingModal('Crown Revival Retwist', 120)" class="w-full py-3 rounded-full bg-[#FFD166] text-[#111827] font-black text-xs uppercase tracking-wider">
              Book This Transformation
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- About & Good Loc Day Community -->
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl bg-[#111827] text-white p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7">
            <span class="text-xs font-bold text-[#FFD166] uppercase tracking-wider">⭐ Sister Movement</span>
            <h2 class="font-heading font-black text-3xl sm:text-4xl text-white mt-2 mb-4">
              JOIN OVER 241,000+ SOULS AT <span class="text-[#FFD166]">@GOODLOCDAY</span>
            </h2>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Good Loc Day began from our studio styling chair. What started as daily affirmations to our clients is now a global movement celebrating natural crown pride, zero-tension techniques, and botanical scalp wellness.
            </p>
            <div class="grid grid-cols-3 gap-4 py-4 border-y border-white/10 mb-6">
              <div><div class="font-heading font-black text-2xl text-[#FFD166]">241K+</div><div class="text-[10px] text-gray-400 uppercase">Community</div></div>
              <div><div class="font-heading font-black text-2xl text-white">12,000+</div><div class="text-[10px] text-gray-400 uppercase">Crowns Blessed</div></div>
              <div><div class="font-heading font-black text-2xl text-[#FFD166]">5.0 ★</div><div class="text-[10px] text-gray-400 uppercase">Verified Reviews</div></div>
            </div>
            <button onclick="openBookingModal()" class="px-6 py-3 rounded-full bg-[#FFD166] text-[#111827] font-bold text-xs uppercase tracking-wider">
              Book Crown Magic
            </button>
          </div>
          <div class="lg:col-span-5 grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=500&q=80" alt="Loc styling" class="rounded-2xl object-cover h-44 w-full">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80" alt="Loc retwist" class="rounded-2xl object-cover h-44 w-full">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Studio Location & Policy Section -->
  <section id="contact" class="py-16 bg-[#F9FAFB]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <!-- Studio Info -->
        <div class="bg-[#111827] text-white rounded-3xl p-8">
          <h3 class="font-heading font-black text-2xl text-white mb-4">Locgician Studio Sanctuary</h3>
          <p class="text-sm text-gray-300 leading-relaxed mb-6">
            450 Crown Magic Boulevard, Suite 204<br>
            Historic Arts District • Atlanta, GA 30312
          </p>
          <div class="space-y-2 text-xs text-gray-300 mb-6">
            <div><strong>Hours:</strong> Tuesday – Saturday: 9:00 AM – 7:00 PM</div>
            <div><strong>Phone / Text:</strong> (404) 555-CROWN (2769)</div>
            <div><strong>Email:</strong> magic@locgician.com</div>
          </div>
          <button onclick="openBookingModal()" class="w-full py-3 rounded-full bg-[#FFD166] text-[#111827] font-bold text-xs uppercase tracking-wider">
            Schedule Appointment
          </button>
        </div>

        <!-- Studio Policies -->
        <div class="bg-white rounded-3xl p-8 border border-gray-200">
          <h3 class="font-heading font-black text-xl text-[#111827] mb-4">Client Policies & Prep</h3>
          <div class="space-y-4 text-xs text-gray-600">
            <div>
              <strong class="text-gray-900 block mb-1">Double Wash Included:</strong>
              All retwist and starter services include our organic herbal wash and steam therapy. No need to wash prior to your visit.
            </div>
            <div>
              <strong class="text-gray-900 block mb-1">Deposit & Cancellation:</strong>
              A $30 non-refundable deposit applies toward your total balance. Free rescheduling with 24 hours notice.
            </div>
            <div>
              <strong class="text-gray-900 block mb-1">Tension-Free Guarantee:</strong>
              We do not believe in pain. If any section feels tight, our master stylists adjust it immediately on request.
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#111827] text-white py-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
      <div>
        <span class="font-heading font-black text-xl text-white">LOCGICIAN</span>
        <p class="text-xs text-gray-400 mt-1">Creating magic for loc'd crowns without a wand.</p>
      </div>
      <div class="text-xs text-gray-400">
        Instagram: <a href="https://instagram.com" class="text-[#FFD166]">@locgician</a> • <a href="https://instagram.com" class="text-[#FFD166]">@goodlocday</a> • #Locgician
      </div>
      <div class="text-xs text-gray-500">
        © 2026 Locgician. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- Interactive Booking Modal -->
  <div id="bookingModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 text-[#111827] relative shadow-2xl">
      <button onclick="closeBookingModal()" class="absolute top-4 right-4 text-gray-400 hover:text-black font-bold text-lg">✕</button>
      
      <div class="flex items-center gap-2 mb-4">
        <span class="w-8 h-8 rounded-full bg-[#FFD166] text-[#111827] flex items-center justify-center font-bold">👑</span>
        <h3 class="font-heading font-black text-xl">Book Crown Magic</h3>
      </div>

      <form onsubmit="handleBookingSubmit(event)" class="space-y-4 text-xs">
        <div>
          <label class="block font-bold mb-1">Select Service</label>
          <select id="modalServiceSelect" class="w-full p-2.5 rounded-xl border border-gray-300 font-semibold">
            <option value="Starter Locs Install|$80.00">Starter Locs Install - $80.00</option>
            <option value="Retwist & Style|$120.00" selected>Retwist & Style - $120.00</option>
            <option value="Loc Detox & Treatment|$65.00">Loc Detox & Treatment - $65.00</option>
            <option value="Retwist Loc & Treatment|$145.00">Retwist Loc & Treatment - $145.00</option>
          </select>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold mb-1">Preferred Date</label>
            <input type="date" value="2026-09-24" required class="w-full p-2.5 rounded-xl border border-gray-300">
          </div>
          <div>
            <label class="block font-bold mb-1">Time Slot</label>
            <select class="w-full p-2.5 rounded-xl border border-gray-300">
              <option>10:00 AM</option>
              <option>1:00 PM</option>
              <option>3:30 PM</option>
              <option>5:30 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block font-bold mb-1">Your Full Name</label>
          <input type="text" placeholder="e.g. Maya Robinson" required class="w-full p-2.5 rounded-xl border border-gray-300">
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold mb-1">Phone Number</label>
            <input type="tel" placeholder="(404) 555-0199" required class="w-full p-2.5 rounded-xl border border-gray-300">
          </div>
          <div>
            <label class="block font-bold mb-1">Email</label>
            <input type="email" placeholder="maya@example.com" required class="w-full p-2.5 rounded-xl border border-gray-300">
          </div>
        </div>

        <div class="p-3 bg-amber-50 rounded-xl text-amber-900 border border-amber-200">
          <strong>Deposit to lock slot:</strong> $30.00 (applied to final service balance).
        </div>

        <button type="submit" class="w-full py-3 rounded-full bg-[#FFD166] text-[#111827] font-black uppercase tracking-wider text-xs hover:bg-[#ffc63a]">
          Confirm Reservation
        </button>
      </form>
    </div>
  </div>

  <!-- Vanilla JavaScript for interactivity -->
  <script>
    function updateBeforeAfter(val) {
      document.getElementById('sliderBeforeContainer').style.width = val + '%';
    }

    function openBookingModal(serviceName, price) {
      const modal = document.getElementById('bookingModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (serviceName) {
        const select = document.getElementById('modalServiceSelect');
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }

    function closeBookingModal() {
      const modal = document.getElementById('bookingModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function handleBookingSubmit(e) {
      e.preventDefault();
      alert('✨ Crown Magic Booked! Check your SMS and email for confirmation details. See you at Locgician Studio!');
      closeBookingModal();
    }
  </script>
</body>
</html>
`;

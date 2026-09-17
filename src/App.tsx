/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';
import { ServicesCatalog } from './components/ServicesCatalog';
import { TransformationGallery } from './components/TransformationGallery';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { StudioLocation } from './components/StudioLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { LocService } from './types';
import { LOC_SERVICES } from './data/servicesData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<LocService | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleOpenBooking = (service?: LocService) => {
    setSelectedService(service || LOC_SERVICES[1]); // default to Retwist & Style
    setIsBookingOpen(true);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] flex flex-col selection:bg-[#FFD166] selection:text-[#111827]">
      
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section matching screenshot layout & brand elements */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleScrollToServices}
        />

        {/* 2. Featured Services (4 cards from screenshot) */}
        <FeaturedServices
          onSelectServiceForBooking={(service) => handleOpenBooking(service)}
          onExploreFullMenu={handleScrollToServices}
        />

        {/* 3. Crown Transformation Gallery with interactive Before/After split slider */}
        <TransformationGallery
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Complete Tabbed Services Catalog */}
        <ServicesCatalog
          onSelectServiceForBooking={(service) => handleOpenBooking(service)}
        />

        {/* 5. About Locgician & @goodlocday Community Sisterhood */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Verified Reviews & Client Love */}
        <ReviewsSection />

        {/* 7. Studio Location, Hours, Preparation Guide & Policies */}
        <StudioLocation
          onOpenBooking={() => handleOpenBooking()}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Interactive Booking Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      {/* Standalone HTML File Viewer & Downloader */}
      <StandaloneExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

    </div>
  );
}

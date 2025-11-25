"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TopServices } from "@/components/sections/TopServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEstimateClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Handle scroll navigation on page load
  useEffect(() => {
    // Check for query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');

    if (scrollTo === 'service-areas') {
      // Wait for page to fully render and all content to load
      const scrollToSection = () => {
        const serviceAreasSection = document.getElementById("service-areas");
        if (serviceAreasSection) {
          const headerOffset = 150; // Offset for sticky header + extra breathing room
          const elementPosition = serviceAreasSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Clean up URL
          window.history.replaceState({}, '', '/');
        }
      };

      // Try multiple times with increasing delays to ensure content is loaded
      setTimeout(scrollToSection, 300);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={handleEstimateClick} />

      <Hero onEstimateClick={handleEstimateClick} />
      <Reviews />

      {/* Visible Quote Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-emerald-50/30 to-green-50/50 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <ContactForm onSuccess={() => {}} />
          </div>
        </div>
      </section>

      <TrustBar />
      <TopServices />
      <WhyChooseUs />
      <ServiceAreas />
      <GalleryPreview />
      <FinalCTA onEstimateClick={handleEstimateClick} />

      <Footer />

      {/* Contact Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Get Your Free Estimate"
      >
        <ContactForm onSuccess={handleModalClose} />
      </Modal>
    </main>
  );
}

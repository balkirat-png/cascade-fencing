"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// All gallery images
const allImages = [
  { src: "/images/gallery/Photo/cedarwoodfence.JPG", category: "cedar", alt: "Cedar privacy fence installation" },
  { src: "/images/gallery/Photo/horizontalfence-1.JPG", category: "horizontal", alt: "Horizontal cedar fence" },
  { src: "/images/gallery/Photo/horizontalfence- 2.jpeg", category: "horizontal", alt: "Modern horizontal fence" },
  { src: "/images/gallery/Photo/horizontalfence- 3.JPG", category: "horizontal", alt: "Horizontal wood fence design" },
  { src: "/images/gallery/Photo/horizontalfence- 4.jpeg", category: "horizontal", alt: "Contemporary horizontal fence" },
  { src: "/images/gallery/Photo/pictureframe fence-1.jpeg", category: "picture-frame", alt: "Picture frame fence" },
  { src: "/images/gallery/Photo/pictureframe fence-2.JPG", category: "picture-frame", alt: "Picture frame style fence" },
  { src: "/images/gallery/Photo/pictureframe fence-3.JPG", category: "picture-frame", alt: "Decorative picture frame fence" },
  { src: "/images/gallery/Photo/pictureframe fence-4.JPG", category: "picture-frame", alt: "Picture frame fence installation" },
  { src: "/images/gallery/Photo/pictureframe fence-5.JPG", category: "picture-frame", alt: "Custom picture frame fence" },
  { src: "/images/gallery/Photo/pictureframe fence-6.JPG", category: "picture-frame", alt: "Picture frame fence design" },
  { src: "/images/gallery/Photo/pictureframe fence-7.jpeg", category: "picture-frame", alt: "Picture frame wood fence" },
  { src: "/images/gallery/Photo/solidboardfence-1.JPG", category: "solid-board", alt: "Solid board privacy fence" },
  { src: "/images/gallery/Photo/Hogwire fence-1.JPG", category: "hog-wire", alt: "Hog wire fence" },
  { src: "/images/gallery/Photo/Hogwire fence-2.JPG", category: "hog-wire", alt: "Hog wire panel fence" },
  { src: "/images/gallery/Photo/Hogwire fence-3.jpeg", category: "hog-wire", alt: "Rustic hog wire fence" },
  { src: "/images/gallery/Photo/custom fence-1.JPG", category: "custom", alt: "Custom fence design" },
  { src: "/images/gallery/Photo/custom fence-2.JPG", category: "custom", alt: "Custom wood fence" },
  { src: "/images/gallery/Photo/custom fence-3.JPG", category: "custom", alt: "Custom fence installation" },
  { src: "/images/gallery/Photo/custom fence-4.JPG", category: "custom", alt: "Unique custom fence" },
  { src: "/images/gallery/Photo/Hogwire fencegate-1.JPG", category: "gates", alt: "Hog wire gate" },
  { src: "/images/gallery/Photo/Hogwire fencegate-2.JPG", category: "gates", alt: "Custom gate installation" },
  { src: "/images/gallery/Photo/gaterepair-1.JPG", category: "gates", alt: "Gate repair service" },
  { src: "/images/gallery/Photo/double-gate repair.JPG", category: "gates", alt: "Double gate repair" },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "cedar", label: "Cedar Privacy" },
  { id: "horizontal", label: "Horizontal Fences" },
  { id: "picture-frame", label: "Picture Frame" },
  { id: "solid-board", label: "Solid Board" },
  { id: "hog-wire", label: "Hog Wire" },
  { id: "gates", label: "Custom Gates" },
  { id: "custom", label: "Custom Designs" },
];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleEstimateClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const filteredImages = selectedCategory === "all"
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={handleEstimateClick} />

      {/* Hero/Header Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Our Wood Fence Gallery
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Browse our completed projects throughout Pierce County. From cedar privacy fences to custom designs, see the quality craftsmanship we deliver.
            </p>
            <button
              onClick={handleEstimateClick}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
            >
              Get Your Free Estimate
            </button>
          </motion.div>
        </div>
      </section>

      {/* Filter/Category System */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-lg">
                      View Image
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us bring your vision to life with expert craftsmanship and premium materials. Get your free estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="/services/wood-fence-installation"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                View Installation Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-accent transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-accent transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[90vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[currentImageIndex]?.src}
                alt={filteredImages[currentImageIndex]?.alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Phone, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fenceTypes = [
  {
    name: "Cedar Privacy Fences",
    description: "Complete privacy and security for South Hill backyards. Our most popular choice.",
    image: "/images/gallery/Photo/cedarwoodfence.webp",
    link: "/fences/cedar-privacy-fence",
  },
  {
    name: "Solid Board Fences",
    description: "Maximum privacy with no gaps. Perfect for South Hill's residential neighborhoods.",
    image: "/images/gallery/Photo/solidboardfence-1.webp",
    link: "/fences/solid-board-fence",
  },
  {
    name: "Horizontal Cedar Fences",
    description: "Modern, contemporary style popular in South Hill's newer developments.",
    image: "/images/gallery/Photo/horizontalfence-1.webp",
    link: "/fences/horizontal-fence",
  },
  {
    name: "Picture Frame Fences",
    description: "Elegant decorative fencing that enhances your property's appeal.",
    image: "/images/gallery/Photo/pictureframe fence-1.webp",
    link: "/fences/picture-frame-fence",
  },
];

const benefits = [
  "Local, family-owned business serving South Hill for 20+ years",
  "Fast response time for South Hill residents",
  "Free estimates with no obligation",
  "Familiar with South Hill neighborhoods and property types",
  "Understanding of local regulations and requirements",
  "Premium cedar materials and expert craftsmanship",
];

const nearbyCities = [
  { name: "Puyallup", link: "/service-areas/puyallup" },
  { name: "Edgewood", link: "/service-areas/edgewood" },
  { name: "Sumner", link: "/service-areas/sumner" },
  { name: "Bonney Lake", link: "/service-areas/bonney-lake" },
];

const faqs = [
  {
    question: "Do you serve all of South Hill?",
    answer: "Yes, we serve all neighborhoods throughout South Hill including residential areas near the South Hill Mall and surrounding communities. We're familiar with the area and provide the same quality service to all South Hill residents.",
  },
  {
    question: "How quickly can you provide an estimate in South Hill?",
    answer: "We typically provide free estimates within 24-48 hours for South Hill homeowners. Call us at (253) 228-9101 or request an estimate online to schedule your consultation.",
  },
  {
    question: "What's the typical timeline for fence installation?",
    answer: "Most residential fence projects in South Hill take 1-3 days depending on size and complexity. We provide a detailed timeline during your estimate and work efficiently to minimize disruption to your property.",
  },
  {
    question: "Do you offer fence repair services in South Hill?",
    answer: "Absolutely. We provide comprehensive fence repair including post replacement, rail repairs, board replacement, leaning fence correction, and gate repairs. We respond quickly to keep your fence looking great and functioning properly.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {faq.question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function SouthHillPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEstimateClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={handleEstimateClick} />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="/images/gallery/Photo/pictureframe fence-3.webp"
            alt="Professional Fence Installation in South Hill"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Fence Installation South Hill
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8"
          >
            Expert wood fence installation and repair services for South Hill homeowners
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleEstimateClick}
              className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
            >
              Get Free Estimate
            </button>
            <a
              href="tel:+1-253-228-9101"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (253) 228-9101
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Cascade Fencing & Repair proudly serves South Hill homeowners with professional <strong>fence installation South Hill</strong> services. With over 20 years of experience, we specialize in <strong>wood fence installation South Hill</strong>, <strong>privacy fence South Hill</strong> designs, and <strong>wood fence repair South Hill</strong> for existing fences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Based in nearby Sumner, we understand the unique character of South Hill's established neighborhoods and newer developments. Whether you need a traditional cedar privacy fence for complete seclusion, a modern horizontal fence for contemporary appeal, or expert repair services, we deliver exceptional craftsmanship using premium cedar materials built to last for decades in the Pacific Northwest climate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Services in South Hill
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional fence installation and repair for South Hill properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wood Fence Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wood Fence Installation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert installation of cedar privacy fences, solid board fences, horizontal fences, picture frame fences, and custom designs. We provide free estimates, include removal of old fences, and use premium cedar materials for lasting beauty and durability.
              </p>
              <Link
                href="/services/wood-fence-installation"
                className="inline-block text-primary font-semibold hover:text-accent transition-colors"
              >
                Learn more about fence installation →
              </Link>
            </motion.div>

            {/* Wood Fence Repair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wood Fence Repair
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional fence repair services including post replacement, rail repairs, board replacement, leaning fence correction, gate repairs, and storm damage repairs. Quick response time and expert workmanship to restore your fence's integrity.
              </p>
              <Link
                href="/services/wood-fence-repair"
                className="inline-block text-primary font-semibold hover:text-accent transition-colors"
              >
                Learn more about fence repair →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why South Hill Homeowners Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why South Hill Homeowners Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Trusted local fence contractor serving the South Hill community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Fence Types in South Hill */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Popular Fence Types in South Hill
            </h2>
            <p className="text-lg text-gray-600">
              Fence styles South Hill homeowners love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fenceTypes.map((fence, index) => (
              <Link key={index} href={fence.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={fence.image}
                      alt={fence.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {fence.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {fence.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Fences We've Built Throughout Pierce County
            </h2>
            <p className="text-lg text-gray-600">
              Quality craftsmanship serving South Hill and surrounding areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              "/images/gallery/Photo/pictureframe fence-3.webp",
              "/images/gallery/Photo/cedarwoodfence.webp",
              "/images/gallery/Photo/solidboardfence-1.webp",
              "/images/gallery/Photo/horizontalfence-1.webp",
              "/images/gallery/Photo/pictureframe fence-5.webp",
              "/images/gallery/Photo/custom fence-4.webp",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Image
                  src={image}
                  alt={`Fence installation project ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Context */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Serving South Hill and Nearby Communities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition to South Hill, we proudly serve homeowners throughout Pierce County. Our local expertise and dedication to quality have made us the trusted choice for fence installation and repair across the region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {nearbyCities.map((city, index) => (
                <Link
                  key={index}
                  href={city.link}
                  className="inline-block bg-white px-6 py-3 rounded-lg font-semibold text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions from South Hill homeowners
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Transform Your South Hill Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free estimate today. Expert fence installation and repair serving South Hill with premium cedar materials and 20+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:+1-253-228-9101"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (253) 228-9101
              </a>
            </div>
          </motion.div>
        </div>
      </section>

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

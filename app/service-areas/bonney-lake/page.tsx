"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Phone, CheckCircle2, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = {
  installation: {
    title: "Wood Fence Installation",
    items: [
      "Cedar Privacy Fences (6ft & 8ft)",
      "Horizontal Cedar Fences",
      "Solid Board Fences",
      "Picture Frame Fences",
      "Hog Wire Fences",
      "Custom Fence Designs"
    ]
  },
  repair: {
    title: "Wood Fence Repair",
    items: [
      "Fence Post Replacement",
      "Rail & Board Repairs",
      "Leaning Fence Correction",
      "Gate Repairs & Rebuilds",
      "Storm Damage Repairs",
      "Full Section Replacement"
    ]
  }
};

const benefits = [
  "Local, family-owned business based in nearby Sumner",
  "Fast response time for Bonney Lake residents",
  "Free estimates with no obligation",
  "20+ years serving Pierce County homeowners",
  "Understanding of Bonney Lake properties and neighborhoods",
  "Premium cedar materials built to last decades",
  "60+ five-star reviews from satisfied customers",
  "Owner-led service (Rubin Singh personally oversees every project)"
];

const popularFences = [
  {
    name: "Cedar Privacy Fences",
    description: "The top choice for Bonney Lake homeowners seeking complete privacy and security for their backyards.",
    image: "/images/gallery/Photo/cedarwoodfence.webp",
    link: "/fences/cedar-privacy-fence"
  },
  {
    name: "Picture Frame Fences",
    description: "Elegant decorative style popular in Bonney Lake neighborhoods with upscale aesthetics.",
    image: "/images/gallery/Photo/pictureframe fence-1.webp",
    link: "/fences/picture-frame-fence"
  },
  {
    name: "Horizontal Fences",
    description: "Modern, contemporary design perfect for newer Bonney Lake homes and developments.",
    image: "/images/gallery/Photo/horizontalfence-1.webp",
    link: "/fences/horizontal-fence"
  },
  {
    name: "Hog Wire Fences",
    description: "Rustic modern aesthetic, ideal for larger Bonney Lake properties with scenic views.",
    image: "/images/gallery/Photo/Hogwire fence-1.webp",
    link: "/fences/hog-wire-fence"
  }
];

const galleryImages = [
  "/images/gallery/Photo/pictureframe fence-2.webp",
  "/images/gallery/Photo/cedarwoodfence.webp",
  "/images/gallery/Photo/horizontalfence- 3.webp",
  "/images/gallery/Photo/solidboardfence-1.webp",
  "/images/gallery/Photo/Hogwire fence-3.webp",
  "/images/gallery/Photo/custom fence-2.webp"
];

const nearbyCities = [
  { name: "Lake Tapps", link: "/service-areas/lake-tapps" },
  { name: "Sumner", link: "/service-areas/sumner" },
  { name: "Puyallup", link: "/service-areas/puyallup" },
  { name: "Auburn", link: "/service-areas/auburn" },
  { name: "Buckley", link: "/service-areas/buckley" }
];

const faqs = [
  {
    question: "Do you serve all of Bonney Lake, WA?",
    answer: "Yes! We serve the entire Bonney Lake area including all neighborhoods, developments, and surrounding communities. We're familiar with local property types and provide reliable service throughout the city."
  },
  {
    question: "How quickly can you provide an estimate in Bonney Lake?",
    answer: "We can usually provide an on-site estimate within 24-48 hours of your request. Based nearby in Sumner, we respond quickly to Bonney Lake homeowners' fence installation and repair needs."
  },
  {
    question: "What's the typical timeline for fence installation in Bonney Lake?",
    answer: "Most residential fence projects in Bonney Lake take 1-3 days depending on the size and complexity. We provide a clear timeline during your estimate and complete projects efficiently."
  },
  {
    question: "Do you handle permits if required in Bonney Lake?",
    answer: "Yes, we're familiar with Bonney Lake's local requirements and can guide you through the permit process. We'll let you know if permits are needed for your project and help ensure compliance."
  }
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

export default function BonneyLakePage() {
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
            src="/images/gallery/Photo/pictureframe fence-1.webp"
            alt="Wood Fence Installation in Bonney Lake, WA"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-white font-medium">Proudly Serving Bonney Lake, WA</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Wood Fence Installation in Bonney Lake, WA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8"
          >
            Professional fence contractor serving Bonney Lake with quality craftsmanship
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
              Cascade Fencing & Repair is proud to serve Bonney Lake homeowners with professional <strong>wood fence installation</strong> and <strong>fence repair services</strong>. Based in nearby Sumner, we've been providing expert craftsmanship to Bonney Lake and Pierce County for over 20 years. Our team understands the unique character of Bonney Lake properties, from lakeside homes to newer developments, and delivers fencing solutions that enhance both privacy and curb appeal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Whether you need a <strong>cedar privacy fence</strong> to create a backyard retreat, a decorative picture frame fence for your front yard, or expert <strong>fence repair</strong> to restore an existing fence, we bring quality materials, transparent pricing, and personalized service to every project. Our commitment to excellence has earned us 60+ five-star reviews from satisfied homeowners throughout Pierce County.
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
              Fence Services in Bonney Lake
            </h2>
            <p className="text-lg text-gray-600">
              Complete fence installation and repair services for Bonney Lake homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Installation Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {services.installation.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {services.installation.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/wood-fence-installation"
                className="inline-block text-primary font-semibold hover:text-accent transition-colors underline"
              >
                Learn more about installation services →
              </Link>
            </motion.div>

            {/* Repair Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {services.repair.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {services.repair.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/wood-fence-repair"
                className="inline-block text-primary font-semibold hover:text-accent transition-colors underline"
              >
                Learn more about repair services →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Why Bonney Lake Homeowners Choose Us
            </h2>
            <p className="text-lg text-white/90">
              Trusted local fence experts with a proven track record
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
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Fence Types */}
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
              Popular Fence Types in Bonney Lake
            </h2>
            <p className="text-lg text-gray-600">
              Fence styles that Bonney Lake homeowners love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularFences.map((fence, index) => (
              <Link
                key={index}
                href={fence.link}
              >
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
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {fence.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
              Fences We've Built in Pierce County
            </h2>
            <p className="text-lg text-gray-600">
              Quality craftsmanship serving Bonney Lake and surrounding communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {galleryImages.map((image, index) => (
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
                  alt={`Wood fence project ${index + 1} in Pierce County`}
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Serving Bonney Lake and Nearby Communities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition to Bonney Lake, we proudly serve homeowners throughout Pierce County. We also provide professional fence installation and repair services in neighboring communities including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((city, index) => (
                <Link
                  key={index}
                  href={city.link}
                  className="bg-gray-100 hover:bg-primary hover:text-white px-5 py-2 rounded-full font-medium transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
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
              Common questions from Bonney Lake homeowners
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
              Ready to Transform Your Bonney Lake Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free estimate today. Trusted fence contractor serving Bonney Lake with 20+ years of experience.
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

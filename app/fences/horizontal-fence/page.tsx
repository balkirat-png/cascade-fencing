"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Sparkles, Home, TrendingUp, Wind, Eye, Ruler, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Modern Contemporary Look",
    description: "Clean horizontal lines create a sleek, modern aesthetic that's perfect for new construction and contemporary homes.",
  },
  {
    icon: Home,
    title: "Architectural Appeal",
    description: "Horizontal fencing is the signature style for modern architecture, adding sophistication and curb appeal to any property.",
  },
  {
    icon: TrendingUp,
    title: "Increases Property Value",
    description: "A premium horizontal fence is a sought-after feature that significantly boosts your home's market value and appeal.",
  },
  {
    icon: Wind,
    title: "Better Air Flow",
    description: "Horizontal spacing options allow for controlled airflow while maintaining privacy - perfect for Pacific Northwest climate.",
  },
  {
    icon: Eye,
    title: "Flexible Privacy Options",
    description: "Choose tight spacing for full privacy or wider gaps for semi-privacy with maintained views and natural light.",
  },
  {
    icon: Ruler,
    title: "Versatile Design",
    description: "Works beautifully at any height - from 4ft property line fences to 6ft+ privacy installations.",
  },
];

const faqs = [
  {
    question: "What makes horizontal fences more expensive than traditional vertical fences?",
    answer: "Horizontal fences require more precision and labor to install correctly. Each board must be perfectly level, and the framework needs additional support to handle the lateral forces. We also use higher-grade materials to prevent warping. While the cost is typically 15-25% higher than vertical fencing, the modern aesthetic and architectural appeal make it a worthwhile investment for contemporary homes.",
  },
  {
    question: "Will horizontal fence boards warp over time?",
    answer: "When properly installed with quality materials, horizontal fences are very stable. We use premium Western Red Cedar that's naturally resistant to warping, and we install boards with proper spacing to allow for expansion and contraction. The key is using seasoned lumber and ensuring adequate structural support - which is exactly what we provide on every installation.",
  },
  {
    question: "Can horizontal fencing work on sloped property?",
    answer: "Yes! Horizontal fences actually work beautifully on slopes. We typically step the fence panels to follow the grade, maintaining the clean horizontal lines within each section. During your free estimate, we'll assess your property's slope and show you exactly how your horizontal fence will look.",
  },
  {
    question: "How do you space horizontal fence boards?",
    answer: "Board spacing depends on your privacy needs and aesthetic preference. For full privacy, we install boards with minimal gaps (typically 1/4 to 1/2 inch for expansion). For semi-privacy with airflow, we can space boards 1-2 inches apart. We'll discuss your preferences during the estimate and show you examples of different spacing options.",
  },
  {
    question: "What's the typical cost for horizontal fence installation?",
    answer: "Horizontal fence costs typically range from $40-$60 per linear foot, depending on height, board spacing, terrain, and whether old fence removal is needed. The best way to get an accurate price is through our free on-site estimate where we can assess your specific property and provide transparent pricing.",
  },
  {
    question: "How long does horizontal fence installation take?",
    answer: "Horizontal fence installation typically takes 2-4 days for a standard residential backyard (100-150 linear feet), slightly longer than vertical fencing due to the precision required. We'll provide a clear timeline during your estimate and ensure the work is completed with meticulous attention to detail.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/Photo/horizontalfence-1.webp",
    alt: "Modern horizontal cedar fence installation in Sumner, WA",
  },
  {
    src: "/images/gallery/Photo/horizontalfence- 2.webp",
    alt: "Contemporary horizontal fence with clean lines",
  },
  {
    src: "/images/gallery/Photo/horizontalfence- 3.webp",
    alt: "Horizontal cedar fence for modern home",
  },
  {
    src: "/images/gallery/Photo/horizontalfence- 4.webp",
    alt: "Professional horizontal fence installation Pierce County",
  },
];

export default function HorizontalFence() {
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/gallery/Photo/horizontalfence-1.webp"
            alt="Horizontal fence background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Modern Horizontal Fence Installation in Sumner, WA
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contemporary horizontal cedar fencing with clean lines and architectural appeal. Expert installation for modern homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (253) 228-9101
              </a>
            </div>
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Horizontal fences have become the defining feature of modern architecture and contemporary home design. With their clean, linear aesthetic and sophisticated appearance, horizontal fences are increasingly popular in new construction and home renovations throughout Sumner, Bonney Lake, and Pierce County. Unlike traditional vertical fencing, horizontal installations create visual width and a sense of openness while still providing excellent privacy and security.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Cascade Fencing & Repair, we specialize in precision horizontal fence installation using premium Western Red Cedar. Our expert craftsmen understand the structural requirements and aesthetic nuances that make horizontal fencing successful - from proper board spacing and support systems to ensuring every line is perfectly level. Whether you're building a modern new home or updating your property with contemporary style, we'll create a horizontal fence that's both stunning and structurally sound, built to last for decades in Pacific Northwest conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features & Benefits */}
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
              Why Choose a Horizontal Fence?
            </h2>
            <p className="text-lg text-gray-600">
              The benefits of modern horizontal fencing for contemporary homes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Horizontal Fence Design Options
            </h2>
            <p className="text-lg text-gray-600">
              Customize your horizontal fence to match your modern aesthetic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Board Spacing Styles</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Full Privacy (Tight Spacing)</h4>
                  <p className="text-gray-700">
                    Boards installed with minimal gaps (1/4 to 1/2 inch) for complete privacy while maintaining the clean horizontal aesthetic. Perfect for backyard privacy fences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Semi-Privacy (Open Spacing)</h4>
                  <p className="text-gray-700">
                    Boards spaced 1-2 inches apart to allow airflow and filtered views while still defining boundaries. Ideal for front yards and property line fences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mixed Spacing</h4>
                  <p className="text-gray-700">
                    Combination of tight and open spacing to create visual interest and custom privacy zones - perfect for unique architectural applications.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Options</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Heights Available</h4>
                  <p className="text-gray-700">
                    4ft, 5ft, 6ft, or custom heights to meet your privacy needs and architectural vision.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Board Widths</h4>
                  <p className="text-gray-700">
                    Choose from 4-inch, 6-inch, or 8-inch board widths to achieve your desired look and proportion.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Gate Designs</h4>
                  <p className="text-gray-700">
                    Custom horizontal gates with contemporary hardware that seamlessly match your fence design.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Finish Options</h4>
                  <p className="text-gray-700">
                    Natural cedar, stained, or painted finishes to complement your home's exterior color palette.
                  </p>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Horizontal Fence Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Modern horizontal fencing installations throughout Pierce County
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block text-primary font-semibold hover:text-accent transition-colors underline text-lg"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              When to Choose a Horizontal Fence
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Modern and contemporary homes</strong> where clean architectural lines and modern aesthetics are priorities
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>New construction projects</strong> where the fence is part of the overall architectural design vision
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Properties wanting to maximize visual width</strong> - horizontal lines make spaces appear wider and more expansive
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Homeowners seeking controlled airflow</strong> with flexible privacy options through board spacing variations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Premium properties</strong> where a high-end, sophisticated fence complements the home's value and style
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Anyone wanting to make a design statement</strong> with a fence that's both functional and architecturally striking
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials & Durability */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Premium Materials, Expert Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Western Red Cedar Excellence</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We exclusively use premium Western Red Cedar for horizontal fences because it's the ideal material for this application. Cedar's natural stability prevents warping and twisting - critical for maintaining those perfectly straight horizontal lines over time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cedar's natural resistance to rot, decay, and insects means your horizontal fence will maintain its structural integrity and beauty for decades. The tight, straight grain of quality cedar boards also makes them ideal for the precision required in horizontal fence installations.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Structural Engineering</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Horizontal fences require more sophisticated structural support than vertical fences. We use engineered framework with additional blocking and support to handle lateral forces and prevent sagging over time. Every board is installed perfectly level and properly spaced.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our posts are set deep in concrete with proper drainage, and we use only galvanized or stainless steel hardware. With proper installation and minimal maintenance, your horizontal cedar fence will remain straight, stable, and beautiful for 20-30+ years.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Transparent, Fair Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Horizontal fence pricing varies based on several factors including linear footage, height, board spacing, terrain complexity, and whether old fence removal is needed. Our typical horizontal fence installations range from $40-$60 per linear foot installed - reflecting the additional precision and materials required for this modern style.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The best way to get an accurate price for your specific project is through our free, no-obligation on-site estimate. We'll discuss your design vision, assess your property, and provide transparent pricing with no hidden fees. You'll know exactly what you're paying for and why.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8">
              Why Choose Cascade Fencing for Horizontal Fence Installation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2">Precision Craftsmanship</h3>
                <p className="text-white/90">
                  Horizontal fences require meticulous attention to detail and perfect leveling. Our expert team has the skills and experience to deliver flawless results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Structural Expertise</h3>
                <p className="text-white/90">
                  We understand the engineering required for horizontal fences to remain straight and stable for decades, using proper support systems and premium materials.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Modern Design Knowledge</h3>
                <p className="text-white/90">
                  We stay current with contemporary fencing trends and can help you design a horizontal fence that perfectly complements your modern home.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
                <p className="text-white/90">
                  Premium Western Red Cedar selected for stability and straightness - essential for maintaining clean horizontal lines over time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Serving All of Pierce County
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We install modern horizontal fences throughout Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, Edgewood, South Hill, Buckley, Enumclaw, Renton, Bellevue, Tacoma, and surrounding communities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/service-areas/sumner" className="text-primary hover:text-accent font-semibold underline">Sumner</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/bonney-lake" className="text-primary hover:text-accent font-semibold underline">Bonney Lake</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/puyallup" className="text-primary hover:text-accent font-semibold underline">Puyallup</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/lake-tapps" className="text-primary hover:text-accent font-semibold underline">Lake Tapps</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/auburn" className="text-primary hover:text-accent font-semibold underline">Auburn</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
              Ready for a Modern Horizontal Fence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free estimate and discover why homeowners throughout Pierce County trust Cascade Fencing for contemporary horizontal fence installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (253) 228-9101
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

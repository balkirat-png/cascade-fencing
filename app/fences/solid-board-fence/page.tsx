"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Shield, Lock, Wind, Eye, Ruler, Home, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lock,
    title: "Maximum Privacy",
    description: "Zero gaps between boards means absolutely no sight lines through your fence - complete visual privacy for your property.",
  },
  {
    icon: Shield,
    title: "Superior Security",
    description: "Solid construction with no gaps provides enhanced security, making it much more difficult to breach than other fence styles.",
  },
  {
    icon: Wind,
    title: "Excellent Wind Block",
    description: "The solid board design acts as a highly effective wind barrier, creating a more comfortable outdoor space even on breezy days.",
  },
  {
    icon: Eye,
    title: "Clean Modern Lines",
    description: "Simple, clean aesthetic with perfectly aligned vertical boards creates a contemporary look that complements any home style.",
  },
  {
    icon: Ruler,
    title: "Extremely Durable",
    description: "Solid board construction is inherently strong and stable, with boards tightly fitted for structural integrity that lasts decades.",
  },
  {
    icon: Home,
    title: "Increases Property Value",
    description: "A professionally installed solid board fence is a premium upgrade that enhances curb appeal and adds significant value to your home.",
  },
];

const faqs = [
  {
    question: "What's the difference between solid board and standard privacy fences?",
    answer: "Solid board fences feature boards placed edge-to-edge with zero gaps for maximum privacy and security. While standard privacy fences may have small gaps between boards, solid board construction ensures absolutely no sight lines through the fence. This also provides superior wind blocking and a more refined, upscale appearance.",
  },
  {
    question: "Will a solid board fence block too much airflow?",
    answer: "While solid board fences do block more wind than gapped designs, this is actually a benefit for most homeowners - creating a more comfortable outdoor space protected from breezes. In areas with extreme wind concerns, we can discuss alternative designs or strategic placement. For most residential properties, the wind-blocking capability is a major advantage.",
  },
  {
    question: "How tall should my solid board fence be?",
    answer: "The most common height for solid board privacy fences is 6 feet, which provides excellent privacy while meeting most local regulations without special permits. We also install 4ft, 5ft, and 8ft heights depending on your specific needs. During your free estimate, we'll discuss the ideal height for your property and verify local requirements.",
  },
  {
    question: "What type of cedar do you use for solid board fences?",
    answer: "We use premium Western Red Cedar for all our solid board fences. Cedar is ideal because it naturally resists rot, decay, and insects without chemical treatment. It's also dimensionally stable (won't warp easily) and ages beautifully. The natural oils in cedar make it perfect for our Pacific Northwest climate, ensuring your fence lasts 20-30+ years.",
  },
  {
    question: "Can solid board fences be installed on sloped ground?",
    answer: "Yes! We regularly install solid board fences on sloped properties. We can use either stepped panels (which create a stair-step appearance) or racked panels (which angle with the slope). During your free estimate, we'll assess your property's grade and recommend the best approach for both aesthetics and functionality.",
  },
  {
    question: "How long does a solid board fence installation take?",
    answer: "Most residential solid board fence installations take 1-3 days depending on the linear footage and site conditions. A typical backyard fence (100-150 linear feet) is usually completed in 1-2 days. We'll provide a specific timeline during your estimate and keep you informed throughout the installation process.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/Photo/solidboardfence-1.webp",
    alt: "Solid board cedar fence installation with zero gaps",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-2.webp",
    alt: "Professional solid board fence in Sumner WA",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-3.JPEG",
    alt: "Clean modern solid board fence design",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-4.JPEG",
    alt: "Solid board privacy fence Pierce County",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-5.webp",
    alt: "Maximum privacy solid cedar board fence",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-6.webp",
    alt: "Quality solid board fence installation by Cascade Fencing",
  },
  {
    src: "/images/gallery/Photo/cedarwoodfence.webp",
    alt: "Beautiful cedar solid board fence",
  },
  {
    src: "/images/gallery/Photo/5footfence-1.webp",
    alt: "5 foot solid board cedar fence residential",
  },
];

export default function SolidBoardFence() {
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
            src="/images/gallery/Photo/solidboardfence-1.webp"
            alt="Solid board fence background"
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
              Solid Board Fence Installation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Zero gaps, maximum privacy and security. Premium cedar solid board fences built to last by experienced craftsmen.
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
              When homeowners in Sumner, Bonney Lake, and throughout Pierce County want the absolute maximum in privacy, security, and wind protection, they choose solid board cedar fencing. Unlike standard privacy fences that may have small gaps between boards, solid board fences feature edge-to-edge board placement with zero gaps - ensuring absolutely no sight lines through your fence and superior structural integrity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Cascade Fencing & Repair, we specialize in building premium solid board fences that combine unmatched privacy with clean, modern aesthetics. With over 20 years of experience installing cedar fences throughout the Pacific Northwest, we understand the craftsmanship required to build a fence with perfectly aligned boards, proper drainage, and structural stability that stands strong for decades. Our solid board fences use premium Western Red Cedar known for its natural resistance to rot and insects, and we back every installation with our commitment to quality that's earned us 60+ five-star reviews from satisfied homeowners.
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
              Benefits of Solid Board Fencing
            </h2>
            <p className="text-lg text-gray-600">
              Why homeowners choose solid board construction
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

      {/* Design & Construction Details */}
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
              Solid Board Fence Design Options
            </h2>
            <p className="text-lg text-gray-600">
              Customization to match your property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Height Options</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">6-Foot Standard</h4>
                  <p className="text-gray-700">
                    The most popular choice for solid board fences, 6ft height provides excellent privacy and security while meeting most local regulations without special permits.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">4-5 Foot Options</h4>
                  <p className="text-gray-700">
                    Lower heights work well for front yards, side yards with visibility requirements, or when you want boundary definition without completely blocking views.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">8-Foot Privacy</h4>
                  <p className="text-gray-700">
                    Maximum privacy for properties backing onto busy streets or when you need enhanced security and sound blocking (check local regulations).
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Board Placement</h4>
                  <p className="text-gray-700">
                    Boards are placed edge-to-edge with precision spacing to ensure zero gaps while allowing for natural wood expansion and contraction.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Gate Systems</h4>
                  <p className="text-gray-700">
                    Single or double gates with heavy-duty hardware, matching the fence design perfectly. Available in various widths for foot traffic or vehicle access.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Post & Rail System</h4>
                  <p className="text-gray-700">
                    4x4 cedar posts set in concrete with sturdy 2x4 rails create an exceptionally strong framework for the solid board construction.
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
              Solid Board Fence Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Premium solid board fences we've installed throughout Pierce County
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
              When to Choose a Solid Board Fence
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Maximum privacy is the priority</strong> - when you absolutely don't want any sight lines through your fence
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Enhanced security is important</strong> - the solid construction is more difficult to breach and climb
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Wind protection is needed</strong> - properties in windy areas benefit from the solid wind barrier
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Noise reduction matters</strong> - homes near busy streets or commercial areas benefit from superior sound blocking
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Clean, modern aesthetic preferred</strong> - you want a contemporary look with perfectly aligned boards
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Premium quality desired</strong> - you're willing to invest in the highest quality privacy fence available
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
              Built with Premium Cedar for Lasting Quality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Western Red Cedar Excellence</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Every solid board fence we install uses premium Western Red Cedar - the gold standard for outdoor wood construction in the Pacific Northwest. Cedar's natural oils provide resistance to rot, decay, and insect damage, meaning your fence will maintain its structural integrity for 20-30+ years with minimal maintenance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unlike pressure-treated wood that can warp and twist, cedar is dimensionally stable and stays straight. The tight grain structure is perfect for solid board construction where board alignment is critical. Cedar also ages beautifully, developing a distinguished silver-gray patina, or you can maintain the original warm color with periodic sealing.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Installation Techniques</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A solid board fence is only as good as its installation. We set 4x4 posts in concrete at proper depths (minimum 2.5-3 feet) with precise spacing and alignment. Rails are attached with structural fasteners, and each board is individually placed to ensure consistent spacing that accounts for wood movement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All hardware is galvanized or stainless steel for corrosion resistance. We ensure proper drainage so water doesn't pool at the base of the fence. Every detail is carefully executed to create a fence that stays beautiful and structurally sound through decades of Pacific Northwest weather.
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
              Fair, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Solid board cedar fence pricing depends on several factors including linear footage, height (4ft, 6ft, or 8ft), terrain complexity, old fence removal needs, and any custom gate or design elements. Our solid board fences typically range from $34-$45 per linear foot installed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every property is unique, which is why we provide free on-site estimates. We'll assess your specific situation, discuss your preferences, and provide detailed pricing with absolutely no hidden fees. You'll know exactly what you're getting and what you're paying before any work begins.
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
              Why Choose Cascade Fencing for Solid Board Fences?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2">Precision Craftsmanship</h3>
                <p className="text-white/90">
                  20+ years of experience means we know how to install solid board fences with perfectly aligned boards and structural integrity that lasts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Materials Only</h3>
                <p className="text-white/90">
                  We use only high-grade Western Red Cedar and commercial-grade hardware - no shortcuts, no inferior materials.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Owner-Led Every Project</h3>
                <p className="text-white/90">
                  Rubin Singh personally oversees each installation to ensure our high standards are met on every fence we build.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-white/90">
                  60+ five-star reviews from homeowners who love their solid board fences and recommend us to their neighbors.
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
              Serving Pierce County & Surrounding Areas
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We install solid board fences throughout Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, and all surrounding communities.
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
              Ready for a Premium Solid Board Fence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free estimate today and discover why solid board fences are the ultimate choice for privacy and security.
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

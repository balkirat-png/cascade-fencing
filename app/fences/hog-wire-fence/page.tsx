"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Eye, Mountain, Dog, Home, Shield, Leaf, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Eye,
    title: "Maintains Views",
    description: "Wire panels preserve your sight lines and views while still defining property boundaries - perfect for scenic properties and hillsides.",
  },
  {
    icon: Mountain,
    title: "Rustic Modern Aesthetic",
    description: "Combines natural wood frames with industrial wire panels for a contemporary farmhouse or modern rustic look that's on-trend.",
  },
  {
    icon: Dog,
    title: "Pet Containment",
    description: "Tight wire mesh safely contains dogs and pets while allowing them to see out, reducing anxiety and fence-running behavior.",
  },
  {
    icon: Home,
    title: "Open, Airy Feel",
    description: "Provides security and boundaries without blocking light or creating a closed-in feeling - ideal for smaller yards.",
  },
  {
    icon: Shield,
    title: "Durable Construction",
    description: "Galvanized steel wire panels resist rust and corrosion, paired with sturdy cedar frames for long-lasting performance.",
  },
  {
    icon: Leaf,
    title: "Garden Friendly",
    description: "Allows sunlight through for plants and gardens along the fence line while providing climbing support for vines.",
  },
];

const faqs = [
  {
    question: "What exactly is a hog wire fence?",
    answer: "A hog wire fence (also called wire panel or hogwire fence) combines a wood frame structure with welded wire mesh panels. The wire panels are typically 4x4 inch openings made from galvanized steel wire. Originally used for livestock fencing, the style has been adapted for residential use and has become popular in modern rustic and farmhouse design. The result is a fence that's both functional and visually striking.",
  },
  {
    question: "Will a hog wire fence keep my dog contained?",
    answer: "Yes! Hog wire fencing is excellent for dog containment. The standard 4x4 inch wire spacing is small enough to prevent most dogs from squeezing through, and the welded wire mesh is strong enough to withstand jumping and pushing. The fact that dogs can see through the fence also reduces barrier frustration and fence-running behavior. We can install it at 4ft, 5ft, or 6ft height depending on your dog's size and jumping ability.",
  },
  {
    question: "Does hog wire fencing rust over time?",
    answer: "We use high-quality galvanized steel wire panels that are specifically designed to resist rust and corrosion. The galvanized coating protects the wire from Pacific Northwest moisture. While some natural patina may develop over many years (which actually adds to the rustic aesthetic), the wire maintains its structural integrity. Paired with rot-resistant cedar frames, your hog wire fence will last 20+ years.",
  },
  {
    question: "Can hog wire fences work on sloped properties?",
    answer: "Absolutely! Hog wire fences are actually ideal for slopes and hillsides. We can step the fence to follow the grade, or rack the wire panels at an angle to follow the natural slope. The flexibility of this style makes it perfect for challenging terrain. During your free estimate, we'll assess your property and show you the best approach.",
  },
  {
    question: "What's the typical cost for hog wire fence installation?",
    answer: "Hog wire fence costs typically range from $38-$55 per linear foot, depending on height, terrain, and whether old fence removal is needed. The wire panels and specialized installation affect pricing, but many homeowners find the unique aesthetic and functionality worth the investment. We'll provide transparent pricing during your free on-site estimate.",
  },
  {
    question: "How do you attach the wire panels to the wood frame?",
    answer: "We use professional-grade fence staples and/or screws with washers to securely attach the galvanized wire panels to the cedar frame. The panels are stretched tight and fastened at close intervals to prevent sagging. The wire is installed on the interior side of the fence for a clean appearance from the street. This method ensures a secure, long-lasting attachment that won't come loose over time.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/Photo/Hogwire fence-1.webp",
    alt: "Modern hog wire fence installation in Sumner, WA",
  },
  {
    src: "/images/gallery/Photo/Hogwire fence-2.webp",
    alt: "Hog wire fence with cedar frame for dog containment",
  },
  {
    src: "/images/gallery/Photo/Hogwire fence-3.webp",
    alt: "Rustic modern hogwire fence with views",
  },
  {
    src: "/images/gallery/Photo/Hogwire fencegate-1.webp",
    alt: "Custom hog wire fence gate with wire panel",
  },
  {
    src: "/images/gallery/Photo/Hogwire fencegate-2.webp",
    alt: "Hog wire gate installation Pierce County",
  },
];

export default function HogWireFence() {
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
            src="/images/gallery/Photo/Hogwire fence-1.webp"
            alt="Hog wire fence background"
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
              Hog Wire Fence Installation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rustic modern fencing that maintains views, contains pets, and creates a distinctive aesthetic. Expert wire panel fence installation.
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
              Hog wire fencing (also called wire panel or hogwire fencing) has become increasingly popular for homeowners throughout Sumner, Bonney Lake, and Pierce County who want something different from traditional solid wood fencing. This distinctive style combines sturdy cedar or wood frames with welded wire mesh panels, creating a fence that's both functional and architecturally interesting. The result is a rustic modern aesthetic that works beautifully with farmhouse, contemporary, and transitional home styles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Cascade Fencing & Repair, we specialize in professional hog wire fence installation using premium Western Red Cedar frames and high-quality galvanized wire panels. Unlike solid fencing, hog wire maintains your views and sight lines while still providing excellent pet containment and property definition. It's perfect for hillside properties, dog owners who want their pets to see out, or anyone seeking a more open feel without sacrificing security. We handle everything from design consultation to final installation, ensuring your hog wire fence is both beautiful and built to last for decades.
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
              Why Choose a Hog Wire Fence?
            </h2>
            <p className="text-lg text-gray-600">
              The unique benefits of wire panel fencing
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
              Hog Wire Fence Design Options
            </h2>
            <p className="text-lg text-gray-600">
              Customize your wire panel fence to match your property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frame Styles</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Traditional Post & Rail</h4>
                  <p className="text-gray-700">
                    Classic design with vertical posts and horizontal rails creating rectangular panels filled with wire mesh. Clean, timeless look that works with any home style.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Picture Frame Style</h4>
                  <p className="text-gray-700">
                    Wire panels bordered by wood trim on all four sides for an upscale, finished appearance. Premium option for enhanced curb appeal.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Rustic Split Rail</h4>
                  <p className="text-gray-700">
                    Combines split rail fence aesthetic with wire panels for a more casual, farm-style appearance perfect for larger properties.
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
                    4ft, 5ft, or 6ft heights depending on your needs for pet containment, privacy, and aesthetic preferences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Wire Panel Options</h4>
                  <p className="text-gray-700">
                    Standard 4x4 inch welded wire mesh, or smaller 2x4 inch spacing for containing smaller pets or added security.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Gate Designs</h4>
                  <p className="text-gray-700">
                    Custom gates with wire panels that match your fence, available in single or double configurations with quality hardware.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Finish Options</h4>
                  <p className="text-gray-700">
                    Natural cedar aging to silver-gray, stained wood frames, or painted finishes to match your home's exterior.
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
              Hog Wire Fence Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Wire panel fence installations throughout Pierce County
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
              When to Choose a Hog Wire Fence
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Dog owners</strong> who want secure containment while allowing their pets to see out and feel less confined
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Properties with scenic views</strong> where you want to maintain sight lines while defining boundaries
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Modern farmhouse or rustic contemporary homes</strong> seeking that distinctive rustic-industrial aesthetic
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Hillside and sloped properties</strong> where the flexible design adapts beautifully to changing terrain
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Gardens and growing areas</strong> where you need light penetration and support for climbing plants
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Anyone wanting something unique</strong> that stands out from traditional wood fencing while remaining functional
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
              Quality Materials Built to Last
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Cedar Frames</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We build all hog wire fence frames using premium Western Red Cedar for its natural resistance to rot, decay, and insects. Cedar's stability and durability make it ideal for the structural framework that supports the wire panels.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our cedar posts are set deep in concrete for maximum stability, and we use properly sized rails and blocking to prevent sagging. The wood frame is what gives your hog wire fence its long-term structural integrity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Galvanized Wire Panels</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use high-quality galvanized welded wire mesh that's specifically designed for long-term outdoor use. The galvanized coating protects against rust and corrosion, even in our wet Pacific Northwest climate.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The wire panels are properly stretched and securely fastened to prevent sagging. With proper installation and basic maintenance, your hog wire fence will maintain its appearance and functionality for 20+ years, combining the longevity of cedar with the durability of galvanized steel.
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
              Hog wire fence pricing varies based on linear footage, height, terrain complexity, whether old fence removal is needed, and your chosen design options. Our typical hog wire fence installations range from $38-$55 per linear foot installed, reflecting the cost of quality wire panels and the specialized labor required.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The best way to get an accurate price for your specific project is through our free, no-obligation on-site estimate. We'll discuss your needs, assess your property, and provide transparent pricing with no hidden fees. You'll know exactly what you're paying for and why.
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
              Why Choose Cascade Fencing for Hog Wire Fence Installation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2">Specialized Expertise</h3>
                <p className="text-white/90">
                  Hog wire fencing requires specific knowledge and techniques. We have the experience to properly install wire panels that remain tight and secure for years.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
                <p className="text-white/90">
                  Premium Western Red Cedar frames paired with high-quality galvanized wire panels designed for Pacific Northwest conditions and longevity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Design Consultation</h3>
                <p className="text-white/90">
                  We'll help you choose the right frame style, wire spacing, and height to achieve your functional and aesthetic goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-white/90">
                  60+ five-star Google reviews and 20+ years of experience installing beautiful, durable hog wire fences throughout Pierce County.
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
              We install hog wire fences throughout Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, Edgewood, South Hill, Buckley, Enumclaw, Renton, Bellevue, Tacoma, and surrounding communities.
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
              Ready for a Hog Wire Fence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free estimate and discover why homeowners throughout Pierce County trust Cascade Fencing for wire panel fence installation.
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

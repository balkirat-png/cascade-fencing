"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Phone, CheckCircle2, MapPin, Wrench, Hammer, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Local Expertise",
    description: "We know Enumclaw's unique terrain, weather patterns, and property characteristics intimately, ensuring fences built to withstand local conditions.",
  },
  {
    title: "Premium Cedar Materials",
    description: "All our fences use high-quality Western Red Cedar - naturally rot-resistant and perfect for the Pacific Northwest climate.",
  },
  {
    title: "Fast Response Times",
    description: "As a local contractor serving Enumclaw, we provide quick scheduling and responsive communication throughout your project.",
  },
  {
    title: "Owner-Led Service",
    description: "Rubin Singh personally oversees every Enumclaw project, ensuring accountability and craftsmanship on every installation.",
  },
  {
    title: "Complete Old Fence Removal",
    description: "Full removal of your existing fence is included in every installation - no hidden fees or extra charges.",
  },
  {
    title: "20+ Years Experience",
    description: "Two decades of fence installation and repair experience throughout Pierce County and surrounding areas.",
  },
];

const fenceTypes = [
  {
    name: "Cedar Privacy Fence",
    description: "6ft and 8ft privacy fences for complete backyard seclusion",
    link: "/fences/cedar-privacy-fence",
  },
  {
    name: "Picture Frame Fence",
    description: "Elegant decorative trim for upscale aesthetic appeal",
    link: "/fences/picture-frame-fence",
  },
  {
    name: "Horizontal Fence",
    description: "Modern contemporary design with clean horizontal lines",
    link: "/fences/horizontal-fence",
  },
  {
    name: "Hog Wire Fence",
    description: "Rustic modern style perfect for hillside properties",
    link: "/fences/hog-wire-fence",
  },
];

const faqs = [
  {
    question: "Do you provide free estimates in Enumclaw?",
    answer: "Yes! We provide completely free, no-obligation estimates for all fence installation and repair projects in Enumclaw. We'll visit your property, discuss your needs, and provide transparent pricing with no hidden fees.",
  },
  {
    question: "How long does fence installation take in Enumclaw?",
    answer: "Most residential fence installations in Enumclaw take 1-3 days depending on the size and complexity of your project. We'll provide a specific timeline during your free estimate based on your property's unique characteristics.",
  },
  {
    question: "Can you install fences on sloped Enumclaw properties?",
    answer: "Absolutely! Enumclaw has varied terrain, and we have extensive experience installing fences on slopes, hills, and challenging properties. We'll design a solution that works beautifully with your property's natural grade.",
  },
  {
    question: "What areas near Enumclaw do you serve?",
    answer: "In addition to Enumclaw, we serve Black Diamond, Bonney Lake, Buckley, Auburn, and all of Pierce and King County. We're proud to be your local fence contractor throughout the region.",
  },
];

const galleryImages = [
  "/images/gallery/Photo/cedarwoodfence.JPG",
  "/images/gallery/Photo/pictureframe fence-1.jpeg",
  "/images/gallery/Photo/horizontalfence-1.JPG",
  "/images/gallery/Photo/Hogwire fence-1.JPG",
  "/images/gallery/Photo/custom fence-1.JPG",
  "/images/gallery/Photo/solidboardfence-1.JPG",
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

export default function EnumclawPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="/images/gallery/Photo/cedarwoodfence.JPG"
            alt="Professional Fence Installation in Enumclaw, WA"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Fence Installation Enumclaw, WA
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Your trusted local fence contractor serving Enumclaw and surrounding communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (253) 228-9101
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Looking for professional <strong>fence installation Enumclaw</strong> homeowners trust? Cascade Fencing & Repair is your local <strong>fence contractor Enumclaw</strong> residents rely on for expert craftsmanship and reliable service. With over 20 years of experience specializing in <strong>wood fence installation Enumclaw</strong> and <strong>fence repair Enumclaw</strong> services, we've built a reputation for quality workmanship throughout the Enumclaw community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the foothills of Mount Rainier to the valley floor, we understand Enumclaw's unique terrain and property characteristics. Whether you need a cedar privacy fence for your backyard, a decorative picture frame fence that complements your home's architecture, or expert fence repair services, our owner-led team delivers personalized service and exceptional results on every project. We serve Enumclaw, Black Diamond, Buckley, Bonney Lake, and all surrounding areas with the same commitment to quality and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Our Services in Enumclaw
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive fence installation and repair services for Enumclaw homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Wood Fence Installation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Wood Fence Installation</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Professional installation of cedar privacy fences, picture frame fences, horizontal fences, and custom designs. We handle every aspect from old fence removal to final cleanup.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Premium Western Red Cedar materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Complete old fence removal included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Expert installation on any terrain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Custom designs and configurations</span>
                    </li>
                  </ul>
                  <Link
                    href="/services/wood-fence-installation"
                    className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    Learn More About Installation →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Wood Fence Repair */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Wood Fence Repair</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Expert repair services to extend your fence's life. From post replacement to gate repairs, we fix fences throughout Enumclaw quickly and professionally.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fence post replacement and reinforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Board and rail repairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Leaning fence correction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gate repair and replacement</span>
                    </li>
                  </ul>
                  <Link
                    href="/services/wood-fence-repair"
                    className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    Learn More About Repairs →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Enumclaw Homeowners Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Local expertise, premium materials, and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Fence Types */}
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
              Popular Fence Types in Enumclaw
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect fence style for your property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fenceTypes.map((fence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={fence.link}
                  className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {fence.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {fence.description}
                  </p>
                  <span className="text-primary font-semibold hover:text-accent transition-colors">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
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
              Our Work in Pierce County
            </h2>
            <p className="text-lg text-gray-600">
              See the quality craftsmanship we deliver to homeowners like you
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <MapPin className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Serving Enumclaw and Nearby Communities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition to Enumclaw, we proudly serve <Link href="/service-areas/bonney-lake" className="text-primary font-semibold hover:text-accent transition-colors">Bonney Lake</Link>, <Link href="/service-areas/auburn" className="text-primary font-semibold hover:text-accent transition-colors">Auburn</Link>, Black Diamond, Buckley, and all of Pierce and King County. As your local fence contractor, we're committed to delivering the same exceptional service and quality craftsmanship to every community we serve.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're in downtown Enumclaw or the surrounding rural areas, we understand local property characteristics, terrain challenges, and the fencing needs unique to our region. From Mount Rainier foothills to valley properties, we build fences that last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
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
              Common questions from Enumclaw homeowners
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
              Ready to Start Your Fence Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free estimate today. Professional fence installation and repair services serving Enumclaw with 20+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
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
        onClose={() => setIsModalOpen(false)}
        title="Get Your Free Estimate"
      >
        <ContactForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </main>
  );
}

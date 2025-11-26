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
    description: "Complete privacy for Edgewood properties. Perfect for families and pet owners.",
    image: "/images/gallery/Photo/cedarwoodfence.JPG",
    link: "/fences/cedar-privacy-fence",
  },
  {
    name: "Solid Board Fences",
    description: "Maximum privacy with no gaps. Clean, modern aesthetic for Edgewood homes.",
    image: "/images/gallery/Photo/solidboardfence-1.JPG",
    link: "/fences/solid-board-fence",
  },
  {
    name: "Picture Frame Fences",
    description: "Elegant decorative fencing that enhances your property's curb appeal.",
    image: "/images/gallery/Photo/pictureframe fence-1.jpeg",
    link: "/fences/picture-frame-fence",
  },
  {
    name: "Hog Wire Fences",
    description: "Rustic modern design ideal for Edgewood's semi-rural properties and hillsides.",
    image: "/images/gallery/Photo/Hogwire fence-1.JPG",
    link: "/fences/hog-wire-fence",
  },
];

const benefits = [
  "Local, family-owned business serving Edgewood for 20+ years",
  "Fast response time for Edgewood residents",
  "Free estimates with no obligation",
  "Experience with Edgewood's terrain and property types",
  "Understanding of local regulations and requirements",
  "Premium cedar materials and expert craftsmanship",
];

const nearbyCities = [
  { name: "Puyallup", link: "/service-areas/puyallup" },
  { name: "South Hill", link: "/service-areas/south-hill" },
  { name: "Sumner", link: "/service-areas/sumner" },
  { name: "Federal Way", link: "/service-areas/federal-way" },
];

const faqs = [
  {
    question: "Do you serve all of Edgewood?",
    answer: "Yes, we serve the entire Edgewood area including all neighborhoods and properties. As a local Pierce County business, we're familiar with the unique characteristics of Edgewood properties and terrain.",
  },
  {
    question: "How quickly can you provide an estimate in Edgewood?",
    answer: "We typically provide free estimates within 24-48 hours for Edgewood residents. Contact us at (253) 228-9101 or request an estimate online, and we'll schedule a convenient time to visit your property.",
  },
  {
    question: "Can you work on sloped Edgewood properties?",
    answer: "Absolutely. We have extensive experience installing fences on sloped and challenging terrain common in Edgewood. We'll design a solution that follows your property's natural contours while maintaining structural integrity.",
  },
  {
    question: "What fence repair services do you offer in Edgewood?",
    answer: "We provide comprehensive fence repair including post replacement, rail repairs, board replacement, leaning fence correction, gate repairs, and storm damage repairs. We respond quickly to keep your fence functional and attractive.",
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

export default function EdgewoodPage() {
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
            src="/images/gallery/Photo/pictureframe fence-2.JPG"
            alt="Professional Fence Installation in Edgewood, WA"
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
            Fence Installer Edgewood WA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8"
          >
            Expert wood fence installation and repair services for Edgewood homeowners
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleEstimateClick}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
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
              Cascade Fencing & Repair is your trusted <strong>fence installer Edgewood WA</strong>, serving local homeowners with professional craftsmanship and personalized service. With over 20 years of experience, we specialize in <strong>wood fence installation Edgewood WA</strong> and <strong>fence repair Edgewood WA</strong> for properties throughout this beautiful community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Based in nearby Sumner, we understand Edgewood's unique mix of residential neighborhoods and semi-rural properties. Whether you need a cedar privacy fence for your backyard, a modern horizontal fence for your new home, or expert fence repair services, we deliver quality workmanship using premium cedar materials built to withstand the Pacific Northwest climate.
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
              Our Services in Edgewood
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete fence installation and repair solutions for Edgewood properties
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
                Expert installation of cedar privacy fences, solid board fences, horizontal fences, picture frame fences, hog wire fences, and custom designs. We provide free estimates, include removal of old fences, and use premium cedar materials for lasting durability.
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
                Professional fence repair services including post replacement, rail repairs, board replacement, leaning fence correction, gate repairs, and storm damage repairs. Fast response time and quality workmanship to extend your fence's lifespan.
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

      {/* Why Edgewood Homeowners Choose Us */}
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
              Why Edgewood Homeowners Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Trusted local fence installer serving the Edgewood community
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

      {/* Popular Fence Types in Edgewood */}
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
              Popular Fence Types in Edgewood
            </h2>
            <p className="text-lg text-gray-600">
              Fence styles perfect for Edgewood properties
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
              Quality Work Throughout the Region
            </h2>
            <p className="text-lg text-gray-600">
              Professional fence installation serving Edgewood and Pierce County
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              "/images/gallery/Photo/pictureframe fence-2.JPG",
              "/images/gallery/Photo/solidboardfence-1.JPG",
              "/images/gallery/Photo/Hogwire fence-2.JPG",
              "/images/gallery/Photo/cedarwoodfence.JPG",
              "/images/gallery/Photo/horizontalfence- 2.jpeg",
              "/images/gallery/Photo/custom fence-3.JPG",
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
              Serving Edgewood and Nearby Communities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition to Edgewood, we proudly serve homeowners throughout Pierce County. Our local expertise and commitment to quality craftsmanship have made us the trusted choice for fence installation and repair across the region.
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
              Common questions from Edgewood homeowners
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
              Ready to Transform Your Edgewood Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free estimate today. Professional fence installer serving Edgewood with premium cedar materials and 20+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
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

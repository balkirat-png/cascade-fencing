"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Phone, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fenceTypes = [
  {
    name: "Cedar Privacy Fences",
    description: "Premium 6ft and 8ft cedar privacy fences. Our core service. Durable, natural beauty, and complete privacy for your backyard.",
    image: "/images/gallery/Photo/cedarwoodfence.JPG",
  },
  {
    name: "Picture Frame Fences",
    description: "Clean and decorative fencing style with framed boards. Elegant design that adds character to any property.",
    image: "/images/gallery/Photo/pictureframe fence-1.jpeg",
  },
  {
    name: "Solid Board Fences",
    description: "Complete privacy with no gaps. Tightly-fitted boards for maximum security and noise reduction.",
    image: "/images/gallery/Photo/solidboardfence-1.JPG",
  },
  {
    name: "Horizontal Cedar Fences",
    description: "Modern, contemporary horizontal designs. Popular for front yards and architectural homes.",
    image: "/images/gallery/Photo/horizontalfence-1.JPG",
  },
  {
    name: "Hog Wire Fences",
    description: "Rustic modern aesthetic with wire panels and wood frames. Great for hillside properties and pet containment.",
    image: "/images/gallery/Photo/Hogwire fence-1.JPG",
  },
  {
    name: "Custom Fence Designs",
    description: "Unique, one-of-a-kind fences tailored to your specific needs and aesthetic preferences.",
    image: "/images/gallery/Photo/custom fence-1.JPG",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Estimate & Consultation",
    description: "We visit your property, discuss your needs, and provide a detailed, transparent estimate with no obligation.",
  },
  {
    number: "02",
    title: "Material Selection & Design",
    description: "Choose your fence style, height, and materials. We guide you through options to match your vision and budget.",
  },
  {
    number: "03",
    title: "Full Removal of Old Fence",
    description: "Complete removal of existing fence included in our price. No hidden fees, no extra charges.",
  },
  {
    number: "04",
    title: "Professional Installation",
    description: "Expert craftsmanship with proper post depth, bracing, and alignment. Clean, straight lines every time.",
  },
  {
    number: "05",
    title: "Final Walkthrough & Cleanup",
    description: "We walk you through the completed project and leave your property clean and debris-free.",
  },
];

const benefits = [
  "Premium cedar materials that last decades",
  "Full removal of old fence included (no extra charge)",
  "Heavy-duty gate hardware and professional installation",
  "Clean, straight lines with structural integrity",
  "Proper post depth and bracing for stability",
  "20+ years of hands-on experience",
  "Owner-led service (Rubin Singh personally oversees every project)",
  "Transparent pricing with no hidden fees",
];

const faqs = [
  {
    question: "How long does fence installation take?",
    answer: "Most residential projects take 1-3 days depending on the size and complexity. We provide a clear timeline during your estimate.",
  },
  {
    question: "Do you remove old fence? Is it included in the price?",
    answer: "Yes! Full removal of your existing fence is included in our installation price at no extra charge. We handle everything from start to finish.",
  },
  {
    question: "What type of wood do you use?",
    answer: "We specialize in high-quality cedar wood, which is naturally rot-resistant, durable, and beautiful. Cedar is the premium choice for Pacific Northwest fencing.",
  },
  {
    question: "How deep are fence posts set?",
    answer: "We set all fence posts at least 2-3 feet deep (depending on fence height) in concrete for maximum stability and longevity.",
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes, we stand behind our craftsmanship. We warranty our installation workmanship and use premium materials built to last for decades.",
  },
  {
    question: "Can you work on sloped or challenging terrain?",
    answer: "Absolutely. We have 20+ years of experience working with hillsides, slopes, and challenging properties throughout Pierce County.",
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

export default function WoodFenceInstallation() {
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
            src="/images/gallery/Photo/cedarwoodfence.JPG"
            alt="Professional Wood Fence Installation in Sumner & Pierce County"
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
            Professional Wood Fence Installation in Sumner & Pierce County
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8"
          >
            Expert craftsmanship, premium cedar materials, and 20+ years of experience
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
              Welcome to Cascade Fencing & Repair, your trusted partner for professional <strong>wood fence installation near me</strong> in Sumner and throughout Pierce County. With over 20 years of hands-on experience, we specialize in <strong>cedar fence installation</strong>, <strong>privacy fence installation</strong>, and custom designs that transform your property. Whether you need a 6-foot or 8-foot <strong>cedar fence installation</strong>, we deliver exceptional craftsmanship using premium materials built to last decades. As a local, owner-led business, we personally oversee every project from consultation to completion, ensuring your complete satisfaction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              From traditional privacy fences to modern horizontal designs, we handle every aspect of your project including full removal of your existing fence at no additional cost. Our commitment to quality, transparent pricing, and personalized service has earned us 60+ five-star reviews from homeowners throughout Pierce County.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types of Fences We Install */}
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
              Types of Fences We Install
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From classic privacy fences to contemporary designs, we build fences that match your style and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fenceTypes.map((fence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={fence.image}
                    alt={fence.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {fence.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {fence.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
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
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-600">
              Professional, transparent, and stress-free from start to finish
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Installation Service */}
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
              Why Choose Our Installation Service
            </h2>
            <p className="text-lg text-white/90">
              Quality craftsmanship and customer satisfaction every time
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

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Serving Sumner and Surrounding Communities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We proudly provide professional wood fence installation services throughout <strong>Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, and surrounding Pierce County areas</strong>. As a local business, we understand the unique needs of Pacific Northwest homeowners and deliver reliable, high-quality service to our community.
            </p>
            <a
              href="/#service-areas"
              className="inline-block mt-6 text-primary font-semibold hover:text-accent transition-colors underline"
            >
              View all service areas →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Showcase */}
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
              Recent Installation Projects
            </h2>
            <p className="text-lg text-gray-600">
              See the quality craftsmanship we deliver to homeowners across Pierce County
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              "/images/gallery/Photo/cedarwoodfence.JPG",
              "/images/gallery/Photo/pictureframe fence-1.jpeg",
              "/images/gallery/Photo/solidboardfence-1.JPG",
              "/images/gallery/Photo/horizontalfence-1.JPG",
              "/images/gallery/Photo/Hogwire fence-1.JPG",
              "/images/gallery/Photo/custom fence-1.JPG",
              "/images/gallery/Photo/horizontalfence- 2.jpeg",
              "/images/gallery/Photo/custom fence-2.JPG",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Image
                  src={image}
                  alt={`Wood fence installation project ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/gallery"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              View Full Gallery
            </a>
          </div>
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
              Get answers to common questions about our fence installation service
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
              Ready for Your New Fence?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free estimate today. Expert installation, premium cedar materials, and 20+ years of experience serving Sumner and Pierce County.
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

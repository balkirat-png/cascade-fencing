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
    title: "Local Tacoma Expertise",
    description: "Deep knowledge of Tacoma neighborhoods, property types, and terrain. We understand what it takes to build fences that last in Pierce County.",
  },
  {
    title: "Premium Cedar Construction",
    description: "Western Red Cedar is naturally rot-resistant and perfect for Pacific Northwest weather. Beautiful, durable, and built to last decades.",
  },
  {
    title: "Comprehensive Service",
    description: "From complete old fence removal through final cleanup, we handle every aspect of your installation with professionalism and care.",
  },
  {
    title: "Experienced Craftsmanship",
    description: "20+ years of hands-on fence installation experience throughout Tacoma and Pierce County. Quality workmanship on every project.",
  },
  {
    title: "Owner Accountability",
    description: "Rubin Singh personally oversees every project. Direct communication with the owner ensures quality control and customer satisfaction.",
  },
  {
    title: "Fast, Reliable Service",
    description: "Quick response times, transparent communication, and efficient installation schedules. We respect your time and property.",
  },
];

const fenceTypes = [
  {
    name: "Cedar Privacy Fence",
    description: "6ft and 8ft privacy fences for complete backyard security",
    link: "/fences/cedar-privacy-fence",
  },
  {
    name: "Horizontal Fence",
    description: "Contemporary modern design with horizontal board style",
    link: "/fences/horizontal-fence",
  },
  {
    name: "Picture Frame Fence",
    description: "Decorative trim boards for elegant aesthetic appeal",
    link: "/fences/picture-frame-fence",
  },
  {
    name: "Solid Board Fence",
    description: "Maximum privacy with tightly-fitted construction",
    link: "/fences/solid-board-fence",
  },
];

const faqs = [
  {
    question: "Do you serve all Tacoma neighborhoods?",
    answer: "Yes! We provide fence installation and repair services throughout all Tacoma neighborhoods including North End, Proctor, Stadium District, Old Town, South Tacoma, Eastside, and West End. From waterfront properties to hillside homes, we have experience with Tacoma's diverse terrain and property types.",
  },
  {
    question: "Why is cedar the best choice for Tacoma fences?",
    answer: "Western Red Cedar is ideal for Tacoma's Pacific Northwest climate. Its natural oils resist rot, decay, and insects even in our wet weather. Cedar weathers beautifully, requires minimal maintenance, and lasts for decades. It's the premium choice for homeowners who want a fence that will stand the test of time in Tacoma's conditions.",
  },
  {
    question: "Can you install fences on sloped Tacoma properties?",
    answer: "Absolutely! Tacoma has varied topography with many hillside and sloped properties. We have extensive experience installing fences on challenging terrain, ensuring proper drainage, structural stability, and aesthetic appeal regardless of your property's grade.",
  },
  {
    question: "What other Pierce County areas do you serve?",
    answer: "In addition to Tacoma, we serve Puyallup, Lakewood, University Place, Fife, Federal Way, Bonney Lake, Sumner, and all of Pierce County. We're your local fence contractor throughout the South Sound region.",
  },
];

const galleryImages = [
  "/images/gallery/Photo/cedarwoodfence.JPG",
  "/images/gallery/Photo/horizontalfence-1.JPG",
  "/images/gallery/Photo/pictureframe fence-1.jpeg",
  "/images/gallery/Photo/solidboardfence-1.JPG",
  "/images/gallery/Photo/custom fence-1.JPG",
  "/images/gallery/Photo/Hogwire fence-1.JPG",
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

export default function TacomaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="/images/gallery/Photo/cedarwoodfence.JPG"
            alt="Professional Fence Installation in Tacoma, WA"
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
              Fence Installer Tacoma, WA
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Expert wood fence contractor serving Tacoma with quality craftsmanship and reliable service
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
              Searching for a reliable <strong>fence installer Tacoma WA</strong> homeowners trust? Cascade Fencing & Repair is your experienced <strong>wood fence contractor Tacoma WA</strong> residents depend on for professional <strong>wood fence installation Tacoma</strong> services. With over 20 years of hands-on experience throughout Tacoma and Pierce County, we specialize in premium cedar fence installations, expert repairs, and custom designs that enhance your property's value, privacy, and curb appeal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the North End to South Tacoma, Proctor to the Eastside, we've installed hundreds of beautiful cedar fences throughout Tacoma's diverse neighborhoods. Whether you need a privacy fence for your backyard, a contemporary horizontal design for modern appeal, or a decorative picture frame fence for HOA compliance, our owner-led team delivers exceptional results. We work exclusively with premium Western Red Cedar, handle complete old fence removal, and ensure every installation is built to withstand Tacoma's Pacific Northwest weather for decades. Serving Tacoma, Lakewood, University Place, Puyallup, and all of Pierce County.
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
              Our Services in Tacoma
            </h2>
            <p className="text-lg text-gray-600">
              Professional fence installation and repair throughout Tacoma and Pierce County
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
                    Expert installation of cedar privacy fences, horizontal designs, picture frame styles, and custom configurations. Built to last with premium materials and professional craftsmanship.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Premium Western Red Cedar materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">6ft and 8ft privacy fence options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Complete old fence removal included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Expert installation on all terrain types</span>
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
                    Professional fence repair services throughout Tacoma. From post replacement to gate repairs, we restore your fence's functionality and appearance with quality materials.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fence post replacement and stabilization</span>
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
                      <span className="text-gray-700">Gate repair and hardware replacement</span>
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
              Why Tacoma Homeowners Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Local expertise, quality materials, and reliable service
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
              Popular Fence Types in Tacoma
            </h2>
            <p className="text-lg text-gray-600">
              Quality fence designs for every Tacoma property
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
              Our Work Throughout Pierce County
            </h2>
            <p className="text-lg text-gray-600">
              Quality craftsmanship on every fence installation
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
                  alt={`Wood fence installation project ${index + 1}`}
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
              Serving Tacoma and Nearby Communities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition to Tacoma, we proudly serve <Link href="/service-areas/puyallup" className="text-primary font-semibold hover:text-accent transition-colors">Puyallup</Link>, Lakewood, University Place, Fife, <Link href="/service-areas/federal-way" className="text-primary font-semibold hover:text-accent transition-colors">Federal Way</Link>, <Link href="/service-areas/bonney-lake" className="text-primary font-semibold hover:text-accent transition-colors">Bonney Lake</Link>, Sumner, and all of Pierce County. As your trusted <strong>fence installer Tacoma WA</strong> homeowners recommend, we bring the same commitment to quality and professionalism to every community throughout the South Sound region.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From waterfront properties to hillside homes, urban neighborhoods to suburban developments, we understand Tacoma's diverse property characteristics and terrain challenges. Our 20+ years of local experience ensures your fence is built right the first time.
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
              Common questions from Tacoma homeowners
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
              Get your free estimate today. Expert wood fence installation serving Tacoma with premium cedar materials and 20+ years of experience.
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

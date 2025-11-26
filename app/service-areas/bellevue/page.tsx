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
    title: "Upscale Craftsmanship",
    description: "Bellevue properties deserve premium quality. We deliver meticulous attention to detail and superior craftsmanship that matches your home's value.",
  },
  {
    title: "HOA-Compliant Installations",
    description: "Experienced with Bellevue HOA requirements and aesthetic standards. We ensure your fence meets all neighborhood guidelines.",
  },
  {
    title: "Premium Cedar Materials",
    description: "Western Red Cedar is the finest choice for Pacific Northwest fencing - naturally rot-resistant, beautiful, and built to last decades.",
  },
  {
    title: "Property Value Enhancement",
    description: "Quality fencing significantly increases property value. Our expert installations are investments that enhance your home's appeal and resale potential.",
  },
  {
    title: "Terrain Expertise",
    description: "From waterfront properties to hillside estates, we have extensive experience installing fences on all Bellevue terrain types.",
  },
  {
    title: "Personalized Service",
    description: "Owner-led business means direct accountability. Rubin Singh personally oversees every project from estimate through completion.",
  },
];

const fenceTypes = [
  {
    name: "Picture Frame Fence",
    description: "Elegant decorative design perfect for upscale neighborhoods",
    link: "/fences/picture-frame-fence",
  },
  {
    name: "Cedar Privacy Fence",
    description: "Premium 6ft and 8ft privacy fences for complete seclusion",
    link: "/fences/cedar-privacy-fence",
  },
  {
    name: "Horizontal Fence",
    description: "Contemporary modern aesthetic with clean lines",
    link: "/fences/horizontal-fence",
  },
  {
    name: "Custom Fence Designs",
    description: "Unique installations tailored to your specific vision",
    link: "/fences/custom-fence-designs",
  },
];

const faqs = [
  {
    question: "Do you work with Bellevue HOA requirements?",
    answer: "Yes! We have extensive experience working with HOA guidelines throughout Bellevue neighborhoods. We'll help ensure your fence design meets all aesthetic and structural requirements, handling any necessary documentation or approvals as needed.",
  },
  {
    question: "What makes cedar the best choice for Bellevue properties?",
    answer: "Western Red Cedar is premium quality wood that complements Bellevue's upscale homes. Its natural rot resistance is perfect for our Pacific Northwest climate, it ages beautifully with minimal maintenance, and it provides superior longevity compared to other materials. Cedar's natural beauty and durability make it the ideal investment for high-value properties.",
  },
  {
    question: "Can you install fences on waterfront or hillside properties?",
    answer: "Absolutely! Bellevue has unique terrain including waterfront properties, hillsides, and varied topography. We have 20+ years of experience adapting installations to challenging sites while maintaining structural integrity and aesthetic appeal. We'll design the perfect solution for your property's specific characteristics.",
  },
  {
    question: "What areas near Bellevue do you serve?",
    answer: "In addition to Bellevue, we serve Kirkland, Redmond, Mercer Island, Newcastle, Issaquah, and all of King County. We're your trusted fence contractor throughout the greater Seattle area.",
  },
];

const galleryImages = [
  "/images/gallery/Photo/pictureframe fence-1.jpeg",
  "/images/gallery/Photo/horizontalfence-1.JPG",
  "/images/gallery/Photo/cedarwoodfence.JPG",
  "/images/gallery/Photo/custom fence-1.JPG",
  "/images/gallery/Photo/Hogwire fence-1.JPG",
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

export default function BellevuePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="/images/gallery/Photo/pictureframe fence-1.jpeg"
            alt="Premium Wood Fence Installation in Bellevue, WA"
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
              Wood Fence Installation Bellevue, WA
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Premium fence contractor serving Bellevue with expert craftsmanship and quality materials
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
              When Bellevue homeowners need expert <strong>wood fence installation Bellevue</strong> services, they turn to Cascade Fencing & Repair. As a trusted <strong>fence contractor Bellevue WA</strong> residents rely on, we specialize in premium cedar fence installations and professional <strong>privacy fence installation Bellevue</strong> services that complement your property's value and aesthetic. With over 20 years of experience serving Bellevue's upscale neighborhoods, we understand the importance of quality craftsmanship, HOA compliance, and attention to detail.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the Highlands to Somerset, Downtown Bellevue to West Bellevue, we've installed hundreds of beautiful fences throughout the city. Whether you need an elegant picture frame fence for your front yard, a privacy fence for backyard seclusion, or a contemporary horizontal design, our owner-led team delivers exceptional results. We work with premium Western Red Cedar materials, handle all aspects of installation including old fence removal, and ensure every project meets the high standards Bellevue homeowners expect. Serving Bellevue, Kirkland, Redmond, Mercer Island, and all of King County.
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
              Our Services in Bellevue
            </h2>
            <p className="text-lg text-gray-600">
              Premium fence installation and repair for Bellevue's finest properties
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
                    Expert installation of premium cedar fences including privacy fences, picture frame designs, horizontal contemporary styles, and custom configurations. Every installation built to match Bellevue's quality standards.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Premium Western Red Cedar materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">HOA-compliant designs and installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Complete old fence removal included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Expert installation on challenging terrain</span>
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
                    Professional fence repair services to restore and maintain your fence's beauty and functionality. Expert repairs with quality materials that match your existing fence perfectly.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Post replacement and structural repairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Board and rail replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Leaning fence correction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gate repair and hardware upgrades</span>
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
              Why Bellevue Homeowners Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Premium quality and exceptional service for upscale properties
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
              Popular Fence Types in Bellevue
            </h2>
            <p className="text-lg text-gray-600">
              Premium designs for upscale properties
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
              Our Work Throughout King County
            </h2>
            <p className="text-lg text-gray-600">
              Premium craftsmanship on every installation
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
              Serving Bellevue and Nearby Communities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In addition to Bellevue, we proudly serve Kirkland, <Link href="/service-areas/redmond" className="text-primary font-semibold hover:text-accent transition-colors">Redmond</Link>, Mercer Island, Newcastle, Issaquah, Sammamish, and all of King County. As a premier <strong>fence contractor Bellevue WA</strong> homeowners trust, we bring the same commitment to quality and professionalism to every community we serve.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're in a waterfront community, hillside estate, or urban neighborhood, we understand Bellevue's diverse property types and HOA requirements. Our expertise ensures your fence enhances your property while meeting all local standards and regulations.
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
              Common questions from Bellevue homeowners
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
              Ready to Enhance Your Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free estimate today. Premium wood fence installation serving Bellevue with expert craftsmanship and 20+ years of experience.
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

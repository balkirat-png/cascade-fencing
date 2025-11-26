"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Phone, CheckCircle2, MapPin } from "lucide-react";
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
  "Fast response time for Auburn residents",
  "Free estimates with no obligation",
  "20+ years serving Pierce County homeowners",
  "Understanding of local property types and regulations",
  "Quality materials and expert craftsmanship",
  "60+ five-star reviews from satisfied customers",
  "Owner-led service on every project"
];

const popularFences = [
  {
    name: "Cedar Privacy Fences",
    description: "Complete privacy and security for Auburn homes. Natural cedar beauty that lasts decades.",
    image: "/images/gallery/Photo/cedarwoodfence.JPG",
    link: "/fences/cedar-privacy-fence"
  },
  {
    name: "Solid Board Fences",
    description: "Maximum privacy with zero gaps - ideal for Auburn neighborhoods.",
    image: "/images/gallery/Photo/solidboardfence-1.JPG",
    link: "/fences/solid-board-fence"
  },
  {
    name: "Horizontal Fences",
    description: "Modern design perfect for contemporary Auburn homes.",
    image: "/images/gallery/Photo/horizontalfence-1.JPG",
    link: "/fences/horizontal-fence"
  },
  {
    name: "Custom Designs",
    description: "Unique fences tailored to your Auburn property's specific needs.",
    image: "/images/gallery/Photo/custom fence-1.JPG",
    link: "/fences/custom-fence-designs"
  }
];

const galleryImages = [
  "/images/gallery/Photo/cedarwoodfence.JPG",
  "/images/gallery/Photo/solidboardfence-2.jpg",
  "/images/gallery/Photo/horizontalfence- 3.JPG",
  "/images/gallery/Photo/pictureframe fence-4.JPG",
  "/images/gallery/Photo/Hogwire fence-2.JPG",
  "/images/gallery/Photo/custom fence-3.JPG"
];

const nearbyCities = [
  { name: "Kent", link: "/service-areas/kent" },
  { name: "Federal Way", link: "/service-areas/federal-way" },
  { name: "Sumner", link: "/service-areas/sumner" },
  { name: "Puyallup", link: "/service-areas/puyallup" },
  { name: "Edgewood", link: "/service-areas/edgewood" }
];

const faqs = [
  {
    question: "Do you serve all of Auburn, WA?",
    answer: "Yes! We serve the entire Auburn area including all neighborhoods and surrounding communities. Based in nearby Sumner, we can quickly respond to your fence installation or repair needs throughout Auburn."
  },
  {
    question: "How quickly can you provide an estimate in Auburn?",
    answer: "We typically provide on-site estimates within 24-48 hours for Auburn residents. We understand you want prompt, professional service, and being locally based allows us to respond quickly."
  },
  {
    question: "What's the typical timeline for fence installation in Auburn?",
    answer: "Most residential fence installations in Auburn take 1-3 days depending on the project size and complexity. A standard backyard fence (100-150 linear feet) is usually completed in 1-2 days. We'll provide a specific timeline during your free estimate."
  },
  {
    question: "Do you handle permits if required in Auburn?",
    answer: "Yes, we can assist with the permit process if your Auburn fence project requires one. We're familiar with local requirements and can help ensure your fence installation meets all city regulations."
  }
];

export default function Auburn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold text-lg">Auburn, WA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Fence Installation in Auburn, WA
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert wood fence installation and repair for Auburn homeowners. Quality cedar fencing backed by 20+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg">
                Get Free Estimate
              </button>
              <a href="tel:2532289101" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />(253) 228-9101
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cascade Fencing & Repair is proud to serve Auburn homeowners with professional wood fence installation and repair services. Located in nearby Sumner, we've been building quality cedar fences throughout Pierce County for over 20 years, earning the trust of hundreds of local families. Whether you need a new privacy fence installed, custom fence design, or repair work on your existing fence, our experienced team delivers the craftsmanship and customer service Auburn residents deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Our Services in Auburn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(services).map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Why Auburn Homeowners Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Fences */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Popular Fence Types in Auburn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularFences.map((fence, index) => (
              <Link key={index} href={fence.link} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image src={fence.image} alt={fence.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{fence.name}</h3>
                    <p className="text-sm text-gray-600">{fence.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Fences We've Built in Pierce County
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image src={image} alt="Fence installation example" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-block text-primary font-semibold hover:text-accent underline text-lg">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
            We Also Serve Nearby Communities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyCities.map((city, index) => (
              <Link key={index} href={city.link} className="text-primary hover:text-accent font-semibold underline">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Auburn Property?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free estimate today and discover why Auburn homeowners trust Cascade Fencing for quality fence installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsModalOpen(true)} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg">
              Get Free Estimate
            </button>
            <a href="tel:2532289101" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />(253) 228-9101
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Get Your Free Estimate">
        <ContactForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </main>
  );
}

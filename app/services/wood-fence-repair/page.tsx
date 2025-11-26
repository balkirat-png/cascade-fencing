"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Wrench, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Hammer, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const repairServices = [
  {
    icon: Hammer,
    title: "Fence Post Replacement",
    description: "Replace rotted, damaged, or leaning fence posts with properly set, pressure-treated posts for long-lasting stability.",
  },
  {
    icon: Wrench,
    title: "Rail Repairs",
    description: "Fix broken, sagging, or warped rails to restore your fence's structural integrity and appearance.",
  },
  {
    icon: Shield,
    title: "Board Replacement",
    description: "Replace damaged, warped, or missing fence boards with matching materials to maintain a uniform look.",
  },
  {
    icon: AlertTriangle,
    title: "Leaning Fence Correction",
    description: "Re-level and stabilize leaning fences by addressing post issues and reinforcing the structure.",
  },
  {
    icon: Wrench,
    title: "Gate Repairs & Rebuilds",
    description: "Fix sagging gates, replace hinges and latches, or completely rebuild gates for smooth operation.",
  },
  {
    icon: Shield,
    title: "Storm Damage Repairs",
    description: "Fast response to wind and weather damage. We repair or replace damaged sections quickly and professionally.",
  },
  {
    icon: Hammer,
    title: "Full Section Replacement",
    description: "When a section is beyond repair, we replace it entirely while matching your existing fence style and materials.",
  },
];

const repairSigns = [
  {
    title: "Leaning or Sagging Sections",
    description: "Fence panels tilting or pulling away from posts",
  },
  {
    title: "Rotten or Damaged Posts",
    description: "Posts showing decay, cracks, or structural weakness",
  },
  {
    title: "Broken, Warped, or Missing Boards",
    description: "Individual boards that are cracked, split, or fallen off",
  },
  {
    title: "Loose or Broken Rails",
    description: "Horizontal rails that are detached or damaged",
  },
  {
    title: "Gate Won't Close Properly",
    description: "Sagging gates or broken hinges and latches",
  },
  {
    title: "Storm or Wind Damage",
    description: "Sections knocked down or damaged by severe weather",
  },
  {
    title: "General Wear from Age/Weather",
    description: "Overall deterioration from years of exposure",
  },
  {
    title: "Pest or Rot Damage",
    description: "Damage from insects or wood decay",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Inspection & Assessment",
    description: "We thoroughly inspect your fence to identify all issues and determine the best repair approach.",
  },
  {
    number: "02",
    title: "Detailed Estimate",
    description: "Receive a transparent, itemized estimate with no hidden fees. We explain what needs repair and why.",
  },
  {
    number: "03",
    title: "Quality Repairs with Matching Materials",
    description: "Expert repairs using materials that match your existing fence for a seamless look.",
  },
  {
    number: "04",
    title: "Structural Reinforcement",
    description: "We don't just fix the surface—we address underlying structural issues for lasting results.",
  },
  {
    number: "05",
    title: "Final Inspection & Cleanup",
    description: "Walk-through to ensure your satisfaction and complete cleanup of all debris.",
  },
];

const benefits = [
  "Fast response times for urgent repairs",
  "Expert diagnosis of fence problems",
  "Ability to match existing fence styles and materials",
  "Structural reinforcement, not just cosmetic fixes",
  "Honest assessment: repair vs. replace guidance",
  "20+ years of hands-on repair experience",
  "Competitive, transparent pricing",
  "Owner-led service with personal accountability",
];

const faqs = [
  {
    question: "How much do fence repairs typically cost?",
    answer: "Repair costs vary based on the extent of damage and materials needed. Minor repairs like board replacement start around $150-300, while more extensive repairs like post replacement or full sections range from $500-1500. We provide free estimates so you know exact costs before we begin.",
  },
  {
    question: "Can you match my existing fence style and materials?",
    answer: "Yes! With 20+ years of experience, we're experts at matching existing fence styles, wood types, and stain colors. We'll ensure repairs blend seamlessly with your current fence.",
  },
  {
    question: "How long do fence repairs last?",
    answer: "When done properly with quality materials, fence repairs can last 10-20+ years. We address underlying structural issues to ensure long-lasting results, not just quick fixes.",
  },
  {
    question: "Do you repair all types of wood fences?",
    answer: "Yes, we repair all wood fence styles including cedar privacy fences, picture frame fences, horizontal fences, solid board fences, and custom designs.",
  },
  {
    question: "How quickly can you schedule fence repairs?",
    answer: "We typically schedule repairs within 3-7 days for non-emergency situations. For storm damage or urgent repairs, we can often respond within 24-48 hours.",
  },
  {
    question: "When should I repair vs. replace my fence?",
    answer: "If less than 30% of your fence is damaged and the structure is sound, repair is usually more cost-effective. If posts are severely rotted, most boards are damaged, or the fence is 20+ years old with multiple issues, replacement may be the better long-term investment. We'll provide an honest assessment.",
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

export default function WoodFenceRepair() {
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
            src="/images/gallery/Photo/gaterepair-1.JPG"
            alt="Professional Wood Fence Repair Services in Sumner, WA"
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
            Wood Fence Repair Services in Sumner, WA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8"
          >
            Expert repairs that extend your fence's life and save you money
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
              When you need professional <strong>wood fence repair near me</strong> in Sumner and Pierce County, Cascade Fencing & Repair delivers fast, reliable, and cost-effective solutions. With over 20 years of experience in <strong>cedar fence repair</strong>, <strong>leaning fence repair</strong>, and <strong>fence post repair</strong>, we specialize in extending the life of your fence through expert craftsmanship and quality materials. Whether you're dealing with storm damage, rotted posts, broken boards, or sagging gates, we provide honest assessments and lasting repairs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              As a trusted local <strong>fence repair company near me</strong>, we understand that timely repairs can save you thousands compared to full replacement. Our owner-led approach ensures personal attention to every project, from minor <strong>board replacement</strong> to complete section rebuilds. We match your existing fence style and materials for seamless results that look like new.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Repair Services We Offer */}
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
              Repair Services We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive fence repair solutions for every problem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signs You Need Fence Repair */}
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
              Signs You Need Fence Repair
            </h2>
            <p className="text-lg text-gray-600">
              Don't wait until small problems become expensive replacements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repairSigns.map((sign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{sign.title}</h3>
                  <p className="text-sm text-gray-600">{sign.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Before & After Results
            </h2>
            <p className="text-lg text-gray-600">
              See the quality difference our expert fence repairs make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/Photo/Repair1before.jpg"
                  alt="Before fence repair - damaged cedar fence needing professional repair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg z-10">
                  BEFORE
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-center">
                Damaged fence section requiring repair
              </p>
            </motion.div>

            {/* After Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/Photo/Repair1after.jpg"
                  alt="After professional fence repair by Cascade Fencing - fully restored cedar fence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg z-10">
                  AFTER
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-center">
                Professionally repaired and restored to like-new condition
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              Our expert repairs restore your fence's appearance and structural integrity, often saving you thousands compared to full replacement.
            </p>
            <button
              onClick={handleEstimateClick}
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Get Your Repair Estimate
            </button>
          </motion.div>
        </div>
      </section>

      {/* Our Repair Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Repair Process
            </h2>
            <p className="text-lg text-gray-600">
              Professional service from inspection to completion
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

      {/* Why Choose Us for Repairs */}
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
              Why Choose Us for Repairs
            </h2>
            <p className="text-lg text-white/90">
              Experience, expertise, and commitment to quality
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
              We provide fast, professional wood fence repair services throughout <strong>Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, and all of Pierce County</strong>. As a local business with 20+ years of experience, we understand the unique challenges of Pacific Northwest weather and deliver reliable repairs when you need them most.
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
              Get answers to common questions about fence repair
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
              Ready to Fix Your Fence?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free estimate today. Fast, professional repairs with 20+ years of experience serving Sumner and Pierce County.
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

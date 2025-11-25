"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, Clock, MapPin, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly will you respond to my estimate request?",
    answer: "We respond to all estimate requests within 24 hours on weekdays. You'll receive a confirmation email or call to schedule your free on-site consultation.",
  },
  {
    question: "Do you charge for estimates?",
    answer: "No! All estimates are completely free with no obligation. We'll visit your property, discuss your needs, and provide a detailed, transparent quote.",
  },
  {
    question: "What information do I need to provide for an accurate quote?",
    answer: "Photos of your property are helpful but not required. We'll need to know your fence type preference (privacy, horizontal, etc.), approximate length, and height. A site visit gives us the most accurate information.",
  },
  {
    question: "Can you provide a rough estimate over the phone?",
    answer: "We can provide a general price range based on your description, but accurate estimates require an on-site visit to assess terrain, access, and specific conditions.",
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
        className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="text-base font-semibold text-gray-900 pr-6">
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
        <p className="pb-4 text-gray-600 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSuccess = () => {
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 5000);
  };

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={() => {}} />

      {/* Hero/Header Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Get Your Free Fence Estimate
            </h1>
            <p className="text-xl text-white/90">
              24-hour response guarantee • No obligation • Transparent pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request Your Free Estimate
                </h2>
                {formSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <p className="text-green-800 font-semibold text-lg mb-2">
                      Thank you for contacting us!
                    </p>
                    <p className="text-green-700">
                      We'll respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <ContactForm onSuccess={handleFormSuccess} />
                )}
              </div>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Phone */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-primary" />
                  Phone
                </h3>
                <a
                  href="tel:+1-253-228-9101"
                  className="text-3xl font-bold text-primary hover:text-accent transition-colors block mb-2"
                >
                  (253) 228-9101
                </a>
                <p className="text-gray-600">Call for immediate assistance</p>
                <a
                  href="tel:+1-253-228-9101"
                  className="inline-block mt-3 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all duration-200 hover:scale-105"
                >
                  Call Now
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Email
                </h3>
                <a
                  href="mailto:cascadefencing3@gmail.com"
                  className="text-lg text-primary hover:text-accent transition-colors underline"
                >
                  cascadefencing3@gmail.com
                </a>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Saturday:</strong> 7am - 6pm</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Service Areas
                </h3>
                <p className="text-gray-700 mb-3">
                  Proudly serving Sumner and surrounding communities throughout Pierce County
                </p>
                <a
                  href="/#service-areas"
                  className="text-primary font-semibold hover:text-accent transition-colors underline"
                >
                  View all service areas →
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>Free, no-obligation estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>24-hour response time (weekdays)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>Professional consultation and assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>Transparent pricing with detailed breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>Flexible scheduling to fit your timeline</span>
                  </li>
                </ul>
              </div>

              {/* Alternative Contact */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Prefer to Text?
                </h3>
                <p className="text-gray-700 mb-3">
                  Send us a message at <strong>(253) 228-9101</strong> and we'll respond promptly.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/share/1CXdLhrpdc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors font-semibold"
                  >
                    Facebook →
                  </a>
                  <a
                    href="https://www.instagram.com/cascade_fencing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors font-semibold"
                  >
                    Instagram →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about estimates and our process
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Trust Indicators */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">60+</div>
              <div className="text-gray-600">Five-Star Reviews</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Local & Trusted</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

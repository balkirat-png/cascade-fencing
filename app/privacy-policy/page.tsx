"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";

export default function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={() => setIsModalOpen(true)} />

      {/* Hero/Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90">
              How we protect and use your information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Cascade Fencing and Repair (registered address: 160th Ave East, Sumner, WA 98390) is committed to protecting the privacy of visitors to our website and those who communicate with us electronically. This privacy policy explains how we collect, use, and protect your personal information.
              </p>
            </div>

            {/* Types of Information Collected */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Types of Information Collected</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                We may collect the following personal information when you interact with our website or contact us through social media:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Physical address</li>
                <li>Project details and service requirements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                This information is collected when you fill out contact forms on our website, request a free estimate, or communicate with us through email, phone, or social media channels.
              </p>
            </div>

            {/* How Information is Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">How Information is Used</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                <li>Respond to your inquiries and requests for information</li>
                <li>Provide free estimates for fence installation or repair services</li>
                <li>Communicate with you about your fence project</li>
                <li>Schedule appointments and coordinate service delivery</li>
                <li>Improve our services and customer experience</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                We will not use your personal information for any purpose other than those outlined in this policy without your explicit consent.
              </p>
            </div>

            {/* Disclosure of Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Disclosure of Information</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Information you provide will be stored securely by Cascade Fencing and Repair. We do not rent, sell, or share your personal information with third parties or non-affiliated companies. We use reasonable efforts to ensure that your information is not disclosed to unauthorized parties, except as required by law or legal process.
              </p>
            </div>

            {/* Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Security</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                While no method of transmission over the internet is completely secure, we implement strict procedures and security features to prevent unauthorized access to your information. Once we receive your information, we use appropriate security measures to protect it from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">User Rights (Subject Access Right)</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                You have the right to ensure that your personal data is being processed lawfully (Subject Access Right). You may request access to the personal information we hold about you by contacting us at{" "}
                <a href="mailto:cascadefencing3@gmail.com" className="text-primary hover:text-accent underline">
                  cascadefencing3@gmail.com
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Upon receiving a valid request, we will provide you with your personal data within statutory time frames. We may need to request further information from you to verify your identity before providing access to your personal information.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes to this privacy policy will be posted on this page, and we will notify users where appropriate. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                If you have any questions, comments, or requests regarding this privacy policy or how we handle your personal information, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">Cascade Fencing and Repair</p>
                <p className="text-gray-700">160th Ave East</p>
                <p className="text-gray-700 mb-3">Sumner, WA 98390</p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a href="mailto:cascadefencing3@gmail.com" className="text-primary hover:text-accent underline">
                    cascadefencing3@gmail.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Phone:{" "}
                  <a href="tel:2532289101" className="text-primary hover:text-accent underline">
                    (253) 228-9101
                  </a>
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-gray-600 text-base italic">
                Last updated: November 2024
              </p>
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

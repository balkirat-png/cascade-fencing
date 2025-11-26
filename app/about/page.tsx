"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Award, Heart, MessageCircle, DollarSign, Users, Home, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "We build fences to last decades, not just years. Every project receives the same meticulous attention to detail.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Honest estimates, clear timelines, and consistent updates. You'll always know what to expect.",
  },
  {
    icon: Heart,
    title: "Respect for Your Property",
    description: "Clean job sites, protected landscaping, and thorough cleanup. We treat your home like our own.",
  },
  {
    icon: DollarSign,
    title: "Fair, Competitive Pricing",
    description: "Transparent pricing with no hidden fees. You'll know exactly what you're paying for and why.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We're not satisfied until you're thrilled with the results.",
  },
  {
    icon: Home,
    title: "Community Focus",
    description: "As a local business, we invest in our community and build lasting relationships with our neighbors.",
  },
];

const credentials = [
  "20+ years in business",
  "60+ five-star Google reviews",
  "Residential fencing specialist",
  "Licensed and insured",
  "Owner-led service on every project",
  "Trusted by hundreds of Pierce County homeowners",
];

export default function About() {
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              About Cascade Fencing & Repair
            </h1>
            <p className="text-xl text-white/90">
              Building trust and quality fences in Pierce County for over 20 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/gallery/Photo/TeamAboutFirstPic.JPG"
                alt="Cascade Fencing team - Rubin Singh and Bal Singh on job site in Sumner, WA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* Owner Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
                Meet Rubin Singh, Owner & Lead Craftsman
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  With over 20 years of hands-on experience in wood fence construction and repair, I've dedicated my career to mastering the craft of building fences that stand the test of time. What started as a passion for working with wood and helping homeowners has grown into Cascade Fencing & Repair—a business built on integrity, quality, and personal service.
                </p>
                <p>
                  I believe that a fence is more than just a property boundary—it's an investment in your home, your privacy, and your peace of mind. That's why I personally oversee every project from consultation to completion, ensuring that every post is set properly, every board is aligned perfectly, and every customer is completely satisfied.
                </p>
                <p>
                  Having lived and worked in the Sumner and Pierce County area for years, I've developed deep connections with this community. Many of my customers become friends, and word-of-mouth referrals from satisfied homeowners are what fuel our growth. When you hire Cascade Fencing, you're not getting a faceless corporation—you're getting a local craftsman who takes pride in his work and stands behind every fence we build.
                </p>
                <p>
                  My commitment is simple: build fences the right way, use premium materials, communicate honestly, and treat every property with respect. This approach has earned us 60+ five-star reviews and the trust of hundreds of Pierce County families.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              Cascade Fencing & Repair was founded on a simple principle: quality over quantity. While many fencing companies focus on volume, rushing from job to job, we've always believed in taking the time to do things right. This philosophy has allowed us to build hundreds of beautiful, long-lasting fences while maintaining the personal touch that larger companies simply can't provide.
            </p>
            <p>
              Over the past two decades, we've specialized exclusively in residential wood fencing—cedar privacy fences, custom designs, horizontal fences, and everything in between. This focused expertise means we know wood fencing inside and out. We understand Pacific Northwest weather patterns, soil conditions, and building practices that ensure your fence will last for decades.
            </p>
            <p>
              Our reputation has been built one satisfied customer at a time, growing through word-of-mouth referrals and positive reviews. We've never relied on high-pressure sales tactics or gimmicks. Instead, we let our work speak for itself. When you see a beautifully crafted cedar fence in Sumner or surrounding areas, there's a good chance it's one of ours.
            </p>
            <p>
              Today, Cascade Fencing & Repair is proud to be one of Pierce County's most trusted names in residential fencing. We remain a small, owner-led business by choice—because that's what allows us to maintain our standards and provide the personalized service our customers deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Why Choose a Local Small Business?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              <strong>Owner-Led Service:</strong> When you work with Cascade Fencing, you work directly with Rubin Singh, the owner. No middlemen, no subcontractors, no surprises. I personally oversee every aspect of your project to ensure it meets my high standards.
            </p>
            <p>
              <strong>Personal Accountability:</strong> My name and reputation are on every fence we build. If there's ever an issue, you call me directly. This personal accountability means I'm invested in your complete satisfaction—not just completing a job and moving on.
            </p>
            <p>
              <strong>Deep Local Knowledge:</strong> Years of experience working specifically in Pierce County means I understand local building practices, weather challenges, and soil conditions. I know what works here and what doesn't.
            </p>
            <p>
              <strong>Direct Communication:</strong> You won't be passed between sales teams, project managers, and installation crews. From your first call to project completion, you'll work with the same trusted team who knows your project inside and out.
            </p>
            <p>
              <strong>Community Investment:</strong> As a local business, we're invested in the Sumner and Pierce County community. Your neighbors are our neighbors. Your satisfaction directly impacts our reputation and livelihood, which is why we go above and beyond on every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials & Recognition */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Credentials & Recognition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-gray-800 font-medium">{credential}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8">
              Our Commitment to You
            </h2>
            <div className="space-y-4 text-lg text-white/90 leading-relaxed">
              <p>
                ✓ Every fence built with premium cedar and quality materials
              </p>
              <p>
                ✓ Clean, professional job sites with respect for your property
              </p>
              <p>
                ✓ On-time service with clear, honest communication
              </p>
              <p>
                ✓ Customer satisfaction guaranteed on every project
              </p>
              <p>
                ✓ Long-term durability and craftsmanship you can count on
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Working Photo */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/Photo/TeamWorking.JPG"
                alt="Cascade Fencing & Repair team working on professional fence installation in Pierce County"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area & CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Serving Sumner & Pierce County
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're proud to serve homeowners throughout Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, and surrounding Pierce County communities.
            </p>
            <a
              href="/#service-areas"
              className="inline-block mb-12 text-primary font-semibold hover:text-accent transition-colors underline"
            >
              View all service areas →
            </a>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Work With a Trusted Local Contractor?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleEstimateClick}
                  className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  Get Free Estimate
                </button>
                <a
                  href="/services/wood-fence-installation"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  View Our Services
                </a>
              </div>
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

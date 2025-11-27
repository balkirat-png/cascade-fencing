"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Shield, Eye, Users, TrendingUp, Volume2, Ruler, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Eye,
    title: "Complete Privacy",
    description: "Solid board construction provides total privacy for your backyard, blocking all views from neighbors and passersby.",
  },
  {
    icon: Shield,
    title: "Security & Safety",
    description: "Standard 6ft height keeps children and pets safely contained while deterring unwanted visitors.",
  },
  {
    icon: TrendingUp,
    title: "Increases Property Value",
    description: "A quality cedar privacy fence is one of the best investments you can make, adding curb appeal and resale value.",
  },
  {
    icon: Volume2,
    title: "Noise Reduction",
    description: "Dense cedar boards help block street noise, creating a more peaceful outdoor environment for your family.",
  },
  {
    icon: Ruler,
    title: "Customizable Design",
    description: "Choose from various heights, decorative tops, and gate styles to match your home's aesthetic perfectly.",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "Perfect for families with children or pets who need a secure, private space to play and relax.",
  },
];

const faqs = [
  {
    question: "How tall can a cedar privacy fence be?",
    answer: "The standard height for residential privacy fences is 6 feet, which provides excellent privacy and security without requiring special permits in most areas. We can also build 4ft, 5ft, or 8ft fences depending on your specific needs and local regulations. We'll help you determine the best height for your property during the free estimate.",
  },
  {
    question: "What's the typical cost per linear foot for a cedar privacy fence?",
    answer: "Cedar fence pricing varies significantly based on style and complexity. Our cedar fences typically range from $34-$55 per linear foot installed, depending on the specific style (solid board, picture frame, custom designs), height, terrain, and whether old fence removal is needed. The best way to get an accurate price is through our free on-site estimate, where we can assess your specific property and provide transparent pricing with no hidden fees.",
  },
  {
    question: "How long does cedar privacy fence installation take?",
    answer: "Most residential cedar privacy fence installations take 1-3 days, depending on the linear footage and property conditions. A standard backyard fence (100-150 linear feet) typically takes 1-2 days. We'll provide a clear timeline during your estimate and keep you informed throughout the installation process.",
  },
  {
    question: "Does a cedar privacy fence require special maintenance?",
    answer: "One of the best things about cedar is its natural resistance to rot, decay, and insects - meaning minimal maintenance required. Cedar will naturally weather to a beautiful silver-gray over time, or you can apply a stain or sealant every 2-3 years to maintain the original color. We'll provide maintenance recommendations with your installation.",
  },
  {
    question: "Can a cedar privacy fence work on sloped property?",
    answer: "Yes! We regularly install privacy fences on sloped and uneven terrain. We can use stepped panels that follow the slope or racked panels that angle with the grade, depending on your preference and the severity of the slope. During your free estimate, we'll assess your property and recommend the best approach.",
  },
  {
    question: "What's the difference between solid board and picture frame privacy fences?",
    answer: "Solid board privacy fences have vertical boards attached directly to the rails for a clean, simple look. Picture frame fences add horizontal trim boards that create a 'framed' appearance on both sides - a more upscale aesthetic. Both provide the same privacy and durability, with picture frame style being a premium upgrade for enhanced curb appeal.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/Photo/cedarwoodfence.webp",
    alt: "Beautiful cedar privacy fence installation in Sumner, WA",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-1.webp",
    alt: "6 foot cedar privacy fence with solid board construction",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-2.webp",
    alt: "Cedar privacy fence installation in Pierce County",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-3.JPEG",
    alt: "Professional cedar fence installation by Cascade Fencing",
  },
  {
    src: "/images/gallery/Photo/5footfence-1.webp",
    alt: "5 foot cedar privacy fence for residential property",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-4.JPEG",
    alt: "Quality cedar privacy fence with clean lines",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-5.webp",
    alt: "Cedar privacy fence installation Bonney Lake WA",
  },
  {
    src: "/images/gallery/Photo/solidboardfence-6.webp",
    alt: "Complete backyard privacy fence cedar wood",
  },
];

export default function CedarPrivacyFence() {
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/gallery/Photo/cedarwoodfence.webp"
            alt="Cedar privacy fence background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Cedar Privacy Fence Installation in Sumner, WA
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Complete privacy, security, and lasting beauty for your home. Expert cedar fence installation backed by 20+ years of craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (253) 228-9101
              </a>
            </div>
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cedar privacy fences are the most popular choice for homeowners throughout Sumner, Bonney Lake, and Pierce County - and for good reason. When you want complete privacy, security for your family and pets, and a classic look that enhances your property value, nothing beats a professionally installed cedar privacy fence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Cascade Fencing & Repair, we specialize in building premium cedar privacy fences that stand the test of time. With over 20 years of experience and hundreds of satisfied customers, we understand exactly what it takes to build a fence that not only looks beautiful on day one, but continues to provide privacy, security, and structural integrity for decades. Our standard 6-foot privacy fences use premium Western Red Cedar, known for its natural resistance to rot and insects, ensuring your investment is protected. Whether you need a simple solid board fence or prefer the upscale picture frame style, we'll work with you to design and install the perfect privacy fence for your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features & Benefits */}
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
              Why Choose a Cedar Privacy Fence?
            </h2>
            <p className="text-lg text-gray-600">
              The benefits that make privacy fences the top choice for homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Customization Options
            </h2>
            <p className="text-lg text-gray-600">
              Design your perfect privacy fence to match your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fence Styles</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solid Board Privacy Fence</h4>
                  <p className="text-gray-700">
                    The classic choice - vertical boards attached directly to horizontal rails with no gaps for maximum privacy. Clean, simple, and timeless design that works with any home style.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Picture Frame Privacy Fence</h4>
                  <p className="text-gray-700">
                    An upscale variation featuring horizontal trim boards that create a decorative "framed" appearance on both sides. Perfect for neighborhoods with HOA requirements or when you want enhanced curb appeal.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Options</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Heights Available</h4>
                  <p className="text-gray-700">
                    4ft, 5ft, 6ft (standard), or 8ft heights to meet your specific privacy and security needs.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Gate Options</h4>
                  <p className="text-gray-700">
                    Single or double gates with heavy-duty hardware and decorative handles. Custom sizes available for vehicle access.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Decorative Tops</h4>
                  <p className="text-gray-700">
                    Add lattice tops, scalloped edges, or other decorative elements to create a unique look.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Cedar Privacy Fence Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Quality craftsmanship on display throughout Pierce County
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block text-primary font-semibold hover:text-accent transition-colors underline text-lg"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Is a Cedar Privacy Fence Right for You?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Families with children or pets</strong> who need a secure, enclosed space for safe outdoor play
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Homeowners wanting complete seclusion</strong> to enjoy their backyard without being visible to neighbors or street traffic
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Properties backing onto busy streets</strong> where noise reduction and visual privacy are important
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Hot tub or pool owners</strong> who want privacy for outdoor relaxation and entertaining
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Homeowners looking to increase property value</strong> with a high-quality, timeless improvement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Anyone who values their privacy</strong> and wants to create a peaceful backyard retreat
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials & Durability */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Premium Materials, Built to Last
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Western Red Cedar?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We exclusively use Western Red Cedar for our privacy fences because it's simply the best material for Pacific Northwest conditions. Cedar contains natural oils that make it resistant to rot, decay, and insect damage - meaning your fence will last for decades with minimal maintenance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cedar is also dimensionally stable, meaning it won't warp or twist like pressure-treated lumber. It's naturally beautiful, with a warm color that ages gracefully into an attractive silver-gray patina. And unlike synthetic materials, cedar is a renewable, environmentally friendly choice.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Longevity</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our privacy fences are built to withstand everything the Pacific Northwest can throw at them. We set posts in concrete at proper depths (minimum 2.5 feet for 6ft fences), ensuring stability even in heavy winds. All hardware is galvanized or stainless steel to prevent rust.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With proper installation and basic care, you can expect your cedar privacy fence to last 20-30 years or more. We stand behind our work with quality craftsmanship and attention to every detail - from proper post spacing to ensuring boards are perfectly aligned.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Transparent, Fair Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cedar fence pricing varies based on the specific style you choose, as well as factors like linear footage, height, terrain complexity, whether old fence removal is needed, and any customization options. Cedar fencing encompasses many styles - from solid board to picture frame to custom designs - so pricing can range widely from $34-$55 per linear foot installed depending on the complexity and style you select.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The best way to get an accurate price for your specific project is through our free, no-obligation on-site estimate. We'll assess your property, discuss your needs and preferences, and provide transparent pricing with no hidden fees. You'll know exactly what you're paying for and why.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8">
              Why Choose Cascade Fencing for Your Privacy Fence?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2">20+ Years of Experience</h3>
                <p className="text-white/90">
                  We've specialized in cedar fencing for over two decades, mastering the craft and building hundreds of privacy fences throughout Pierce County.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Cedar Materials</h3>
                <p className="text-white/90">
                  We use only high-quality Western Red Cedar, known for its durability, beauty, and natural resistance to rot and insects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Owner-Led Service</h3>
                <p className="text-white/90">
                  Every project is personally overseen by owner Rubin Singh, ensuring quality craftsmanship and attention to detail from start to finish.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                <p className="text-white/90">
                  60+ five-star Google reviews from happy homeowners who trust our work and recommend us to their neighbors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Serving All of Pierce County
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We install cedar privacy fences throughout Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, Edgewood, South Hill, Buckley, Enumclaw, Renton, Bellevue, Tacoma, and surrounding communities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/service-areas/sumner" className="text-primary hover:text-accent font-semibold underline">Sumner</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/bonney-lake" className="text-primary hover:text-accent font-semibold underline">Bonney Lake</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/puyallup" className="text-primary hover:text-accent font-semibold underline">Puyallup</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/lake-tapps" className="text-primary hover:text-accent font-semibold underline">Lake Tapps</Link>
              <span className="text-gray-400">•</span>
              <Link href="/service-areas/auburn" className="text-primary hover:text-accent font-semibold underline">Auburn</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
              Ready to Install Your Cedar Privacy Fence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free estimate and discover why hundreds of Pierce County homeowners trust Cascade Fencing for their privacy fence installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEstimateClick}
                className="bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:2532289101"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
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
        onClose={handleModalClose}
        title="Get Your Free Estimate"
      >
        <ContactForm onSuccess={handleModalClose} />
      </Modal>
    </main>
  );
}

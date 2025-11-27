"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Sparkles, Palette, Award, Users, MessageCircle, Ruler, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "One-of-a-Kind Designs",
    description: "Your vision brought to life - unique fence designs tailored specifically to your property, style, and functional needs.",
  },
  {
    icon: Palette,
    title: "Unlimited Creative Options",
    description: "Mix materials, styles, and design elements to create something truly distinctive that reflects your personal taste.",
  },
  {
    icon: Award,
    title: "Expert Design Consultation",
    description: "Work directly with experienced craftsmen who can translate your ideas into buildable, beautiful custom fence designs.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "We listen to your vision, offer professional guidance, and refine the design together until it's exactly right.",
  },
  {
    icon: MessageCircle,
    title: "Problem-Solving Expertise",
    description: "Challenging properties, unusual requirements, or special aesthetic goals - we love solving complex design challenges.",
  },
  {
    icon: Ruler,
    title: "Precision Craftsmanship",
    description: "Custom designs require expert execution - our 20+ years of experience ensures flawless installation of even the most complex projects.",
  },
];

const faqs = [
  {
    question: "What types of custom fence designs can you create?",
    answer: "The possibilities are virtually endless! We've designed and built custom decorative gates with intricate woodwork, mixed-material fences combining wood with metal or wire panels, unique height transitions for sloped properties, custom lattice and cutout patterns, arched or curved fence sections, and specialty gates for specific access needs. We can also combine different fence styles (like horizontal and vertical elements), create custom staining or painting patterns, and incorporate architectural elements that match your home. If you can envision it, we can likely build it.",
  },
  {
    question: "How does the custom design process work?",
    answer: "It starts with your free on-site estimate where we'll discuss your vision, needs, and property specifics. We'll listen to your ideas, show examples of past custom work, and offer professional suggestions based on our experience. From there, we'll develop a design proposal with sketches or descriptions, pricing, and timeline. Once you approve the design, we source materials and schedule installation. Throughout the process, you're involved and informed - it's truly collaborative.",
  },
  {
    question: "Are custom fence designs more expensive?",
    answer: "Custom fence pricing is highly variable and depends entirely on your specific design. It could range anywhere from our standard pricing ($34-$45/foot for basic custom modifications) to significantly higher for elaborate designs with specialty materials, intricate details, or unique construction requirements. During your free estimate, we'll provide transparent pricing for your specific custom design so you can make informed decisions about which elements fit your budget and vision.",
  },
  {
    question: "Can you match my home's existing architectural style?",
    answer: "Absolutely! One of the most common custom design requests is creating fencing that complements specific architectural styles - whether that's craftsman, modern, farmhouse, traditional, or contemporary. We study your home's details, colors, materials, and proportions to design a fence that looks like it was always part of the original plan. This attention to architectural harmony is what elevates a fence from functional to exceptional.",
  },
  {
    question: "What if I have a challenging property or unusual requirements?",
    answer: "We love challenges! Over 20+ years, we've solved countless unique fencing problems - steep slopes, wetlands, irregular property lines, historic home requirements, HOA restrictions, unique pet containment needs, accessibility requirements, and more. Challenging projects are where custom design really shines. We'll visit your property, assess the situation, and develop creative solutions that work both practically and aesthetically.",
  },
  {
    question: "How long does custom fence design and installation take?",
    answer: "Timeline depends on design complexity and materials sourcing. Simple custom elements might add only a day or two to a standard installation. More complex designs requiring special materials or intricate woodwork could take 1-2 weeks or more. During your estimate, we'll provide a realistic timeline based on your specific project. We never rush custom work - precision and quality are the priorities.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/Photo/custom fence-1.webp",
    alt: "Custom cedar fence design in Sumner, WA",
  },
  {
    src: "/images/gallery/Photo/custom fence-2.webp",
    alt: "Unique custom fence installation Pierce County",
  },
  {
    src: "/images/gallery/Photo/custom fence-3.webp",
    alt: "Custom wood fence with decorative elements",
  },
  {
    src: "/images/gallery/Photo/custom fence-4.webp",
    alt: "One-of-a-kind custom fence design",
  },
  {
    src: "/images/gallery/Photo/DoubleGate.webp",
    alt: "Custom double gate installation",
  },
  {
    src: "/images/gallery/Photo/PictureFrameGate.webp",
    alt: "Custom picture frame gate design",
  },
];

export default function CustomFenceDesigns() {
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
            src="/images/gallery/Photo/custom fence-1.webp"
            alt="Custom fence design background"
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
              Custom Fence Design & Installation in Sumner, WA
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Unique, one-of-a-kind fence designs crafted specifically for your property. Expert custom fence installation backed by 20+ years of craftsmanship.
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
              Not every property fits a standard fence design. Maybe you have a unique architectural style you want to complement, challenging terrain that requires creative solutions, or simply a vision for something distinctive that reflects your personal taste. That's where custom fence design comes in. At Cascade Fencing & Repair, we specialize in bringing homeowners' unique visions to life - creating one-of-a-kind fences that are both functionally excellent and aesthetically exceptional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 20 years of experience throughout Sumner, Bonney Lake, and Pierce County, we've designed and installed countless custom fences - from elaborate decorative gates and mixed-material designs to creative solutions for difficult properties. Our collaborative design process means you're involved every step of the way, and our expert craftsmanship ensures even the most complex designs are executed flawlessly. Whether you need a fence that matches your historic home's architecture, a unique gate design that makes a statement, or creative problem-solving for an unusual property challenge, we have the expertise to make it happen.
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
              Why Choose Custom Fence Design?
            </h2>
            <p className="text-lg text-gray-600">
              The benefits of working with experienced custom fence designers
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
              Custom Design Possibilities
            </h2>
            <p className="text-lg text-gray-600">
              Examples of custom elements we can incorporate into your fence design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Decorative Elements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Gates</h4>
                  <p className="text-gray-700">
                    Elaborate decorative gates with intricate woodwork, arched tops, custom hardware, and unique designs that make a statement.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Decorative Tops & Cutouts</h4>
                  <p className="text-gray-700">
                    Custom lattice patterns, scalloped edges, arched sections, geometric cutouts, or other decorative top treatments.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mixed Materials</h4>
                  <p className="text-gray-700">
                    Combine wood with metal accents, wire panels, glass inserts, or other materials for a distinctive multi-material aesthetic.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Functional Custom Solutions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Architectural Matching</h4>
                  <p className="text-gray-700">
                    Designs that complement your home's specific architectural style, color palette, and proportions for cohesive curb appeal.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Slope & Terrain Solutions</h4>
                  <p className="text-gray-700">
                    Creative stepped or racked designs for steep slopes, curved sections for irregular property lines, or multi-level transitions.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Height Variations</h4>
                  <p className="text-gray-700">
                    Strategic height transitions for privacy where needed while maintaining views elsewhere on your property.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Specialty Access</h4>
                  <p className="text-gray-700">
                    Custom gate sizes for vehicles, RVs, or equipment, or special access solutions for unique property needs.
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
              Custom Fence Design Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Unique custom fencing projects throughout Pierce County
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
              When to Choose Custom Fence Design
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Historic or architecturally distinctive homes</strong> where the fence needs to complement specific design elements and period details
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Challenging properties</strong> with steep slopes, irregular boundaries, or other unique terrain features requiring creative solutions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Homeowners with specific aesthetic visions</strong> who want something truly unique that reflects their personal style
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Properties with unusual requirements</strong> - special access needs, unique pet containment challenges, or specific HOA requirements
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>High-end properties</strong> where a custom-designed fence is an important architectural element and investment in curb appeal
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Anyone wanting to stand out</strong> with a fence that's a conversation piece and reflects exceptional craftsmanship
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
              Premium Materials, Expert Craftsmanship
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Materials Sourcing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Custom designs often require specialized or premium materials. We primarily work with Western Red Cedar for its beauty, stability, and durability, but we can source other materials as your design requires - specialty hardwoods, metal components, wire panels, decorative hardware, and more.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We have relationships with quality suppliers and can obtain materials that aren't typically available for standard fencing. Every material we use is selected for both its aesthetic contribution and long-term performance in Pacific Northwest conditions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Installation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Custom designs require expert execution. Our team has 20+ years of experience translating complex designs into flawlessly installed fences. We take the time to get every detail right - from proper structural support for elaborate gates to perfect alignment of decorative elements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Owner Rubin Singh personally oversees every custom project to ensure quality craftsmanship throughout. Your custom fence is built to last just as long as our standard installations - 20-30+ years - while delivering the unique aesthetic you envisioned.
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
              Transparent Custom Design Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Custom fence pricing is highly variable - truly dependent on your unique design vision. Simple custom modifications might stay close to our standard fence pricing ($34-$45 per linear foot), while elaborate custom designs with specialty materials, intricate details, curved sections, or unique architectural elements can range significantly higher. Every custom project is one-of-a-kind, which is why pricing must be customized too.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The best approach is to schedule a free on-site consultation where we'll discuss your vision and property specifics. We'll provide transparent, detailed pricing for your specific custom design with clear explanations of costs, so you can make informed decisions about which elements fit your budget. No hidden fees, no surprises - just honest pricing for exceptional custom craftsmanship.
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
                Call to Discuss Your Vision
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
              Why Choose Cascade Fencing for Custom Design?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2">20+ Years Design Experience</h3>
                <p className="text-white/90">
                  We've designed and built countless custom fences throughout Pierce County, giving us the expertise to handle any design challenge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaborative Process</h3>
                <p className="text-white/90">
                  We listen to your vision, offer professional guidance, and work with you to refine the design until it's exactly what you want.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Master Craftsmanship</h3>
                <p className="text-white/90">
                  Expert installation that brings even the most complex designs to life with precision and attention to every detail.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Problem-Solving Expertise</h3>
                <p className="text-white/90">
                  We love challenges and have the experience to find creative solutions for difficult properties and unusual requirements.
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
              We design and install custom fences throughout Sumner, Bonney Lake, Puyallup, Lake Tapps, Auburn, Kent, Federal Way, Edgewood, South Hill, Buckley, Enumclaw, Renton, Bellevue, Tacoma, and surrounding communities.
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
              Ready to Create Your Custom Fence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free design consultation and discover how we can bring your unique vision to life with expert craftsmanship.
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

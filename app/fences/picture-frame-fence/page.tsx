"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/ContactForm";
import { Crown, Eye, Home, TrendingUp, Palette, Shield, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Crown,
    title: "Upscale Aesthetic",
    description: "Decorative horizontal trim boards create an elegant 'framed' appearance that elevates your property's curb appeal significantly.",
  },
  {
    icon: Eye,
    title: "Beautiful on Both Sides",
    description: "Picture frame design looks equally attractive from inside and outside your property - perfect for neighbor-friendly installations.",
  },
  {
    icon: Home,
    title: "HOA Compliant",
    description: "The refined, symmetrical appearance often meets HOA requirements in neighborhoods with strict aesthetic standards.",
  },
  {
    icon: TrendingUp,
    title: "Premium Property Value",
    description: "The high-end appearance and craftsmanship make this a superior investment that adds notable resale value.",
  },
  {
    icon: Palette,
    title: "Architectural Enhancement",
    description: "The frame design complements various home styles from traditional to contemporary with sophisticated visual appeal.",
  },
  {
    icon: Shield,
    title: "Full Privacy & Security",
    description: "Despite the elegant appearance, you still get complete privacy and security with solid board construction.",
  },
];

const faqs = [
  {
    question: "What exactly is a picture frame fence?",
    answer: "A picture frame fence features vertical boards enclosed by horizontal trim boards (typically 1x6 or 1x4) that create a decorative 'frame' around each fence section. This creates panels that look polished and finished on both sides - like individual picture frames. It combines the complete privacy of a solid board fence with an upscale, architectural aesthetic.",
  },
  {
    question: "Is a picture frame fence more expensive than a standard privacy fence?",
    answer: "Yes, picture frame fences are a premium upgrade over standard solid board privacy fences, typically running $37-$47 per linear foot compared to $34-$45 for solid board fences. The additional cost covers the extra trim materials and the skilled labor required for the detailed framing construction. However, many homeowners find the enhanced curb appeal and elegant appearance well worth the investment, especially in HOA neighborhoods or upscale communities.",
  },
  {
    question: "How long does installation take for a picture frame fence?",
    answer: "Picture frame fences take slightly longer to install than standard privacy fences due to the precision required for trim board placement. A typical residential project (100-150 linear feet) takes 2-3 days. We'll provide a specific timeline during your free estimate based on your property's unique characteristics.",
  },
  {
    question: "Can picture frame fences be built on sloped property?",
    answer: "Absolutely! We regularly install picture frame fences on sloped terrain. The stepped or racked panels can still incorporate the picture frame design beautifully. The trim boards actually help define each panel section clearly even on varied topography. We'll assess your property's grade during the estimate and design the perfect solution.",
  },
  {
    question: "What cedar do you use for the frame trim?",
    answer: "We use the same premium Western Red Cedar for both the vertical boards and the frame trim. This ensures consistent color, grain pattern, and aging characteristics. The cedar's natural oils resist rot and insects, so your decorative trim boards will stay beautiful and structurally sound for decades.",
  },
  {
    question: "Does the picture frame design work with gates?",
    answer: "Yes! Picture frame gates are stunning and highly functional. We build custom gates with the same framed design to match your fence perfectly. The frame actually adds structural support to the gate while creating a cohesive, high-end appearance throughout your entire fence installation.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/Photo/pictureframe fence-1.jpeg",
    alt: "Picture frame cedar fence with decorative trim boards",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-2.JPG",
    alt: "Elegant picture frame fence installation Sumner WA",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-3.JPG",
    alt: "Picture frame privacy fence with professional craftsmanship",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-4.JPG",
    alt: "High-end picture frame fence design Pierce County",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-5.JPG",
    alt: "Picture frame cedar fence beautiful on both sides",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-6.JPG",
    alt: "Upscale picture frame fence with cedar trim",
  },
  {
    src: "/images/gallery/Photo/PictureFrameGate.jpeg",
    alt: "Picture frame fence gate with decorative frame trim",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-9.JPG",
    alt: "Picture frame style privacy fence installation",
  },
];

export default function PictureFrameFence() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onEstimateClick={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/gallery/Photo/pictureframe fence-1.jpeg" alt="Background" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Picture Frame Fence Installation in Sumner, WA
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Elegant decorative trim creates an upscale aesthetic. Premium privacy fencing that's beautiful on both sides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Get Free Estimate
              </button>
              <a href="tel:2532289101" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When homeowners in Sumner, Bonney Lake, and throughout Pierce County want a fence that combines complete privacy with exceptional elegance, they choose picture frame cedar fencing. This premium fence style features horizontal trim boards that create a decorative 'framed' appearance around each fence panel - transforming a functional privacy fence into an architectural feature that enhances your entire property.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Cascade Fencing & Repair, we've been installing picture frame fences for over 20 years, mastering the precision craftsmanship required to create perfectly aligned frames that look stunning from every angle. Unlike standard privacy fences, picture frame fences are beautiful on both sides, making them ideal for HOA communities and properties where appearance matters on all sides. Our picture frame fences combine premium Western Red Cedar construction with meticulous attention to detail, creating an upscale aesthetic that significantly increases your property value while providing the same privacy and security you expect from a quality cedar fence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Choose a Picture Frame Fence?
            </h2>
            <p className="text-lg text-gray-600">The premium benefits of decorative frame design</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">Customization Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frame Styles</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Classic Frame</h4>
                  <p className="text-gray-700">Standard 1x6 or 1x4 horizontal trim boards on both top and bottom create clean, symmetrical frames. Timeless and elegant.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Extended Frame</h4>
                  <p className="text-gray-700">Wider trim boards or additional decorative elements create a more pronounced frame effect for enhanced visual impact.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Decorative Caps</h4>
                  <p className="text-gray-700">Add post caps or finials to complement the picture frame design and create a truly custom upscale appearance.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Height & Configuration</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Standard 6-Foot</h4>
                  <p className="text-gray-700">Most popular height for residential privacy fences - balances privacy, appearance, and regulations perfectly.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Heights</h4>
                  <p className="text-gray-700">4ft, 5ft, or 8ft heights available to meet specific privacy needs or local requirements.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Matching Gates</h4>
                  <p className="text-gray-700">Picture frame gates with heavy-duty hardware create a cohesive, high-end look throughout your fence installation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Picture Frame Fence Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-block text-primary font-semibold hover:text-accent transition-colors underline text-lg">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
            When to Choose a Picture Frame Fence
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700"><strong>HOA compliance needed</strong> - many homeowner associations require attractive fencing on both sides</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700"><strong>Upscale neighborhoods</strong> - when your fence should match the premium quality of surrounding homes</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700"><strong>Property value focus</strong> - you want a fence that's truly an investment in curb appeal</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700"><strong>Neighbor-friendly boundaries</strong> - you want something beautiful from all sides, not just yours</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700"><strong>Architectural enhancement</strong> - your home's style deserves a fence with refined aesthetic details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
            Premium Materials & Expert Craftsmanship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Western Red Cedar Quality</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every component of your picture frame fence - from vertical boards to decorative trim - uses premium Western Red Cedar. This ensures consistent color, grain pattern, and aging characteristics that create a cohesive, high-end appearance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cedar's natural beauty and durability make it perfect for decorative fencing. It resists rot, decay, and insects naturally, while aging gracefully into an attractive silver-gray patina or maintaining its warm color with optional sealing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Installation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Picture frame fences require exceptional attention to detail. We carefully measure and cut each trim board to create perfectly symmetrical frames. Posts must be precisely spaced, rails perfectly level, and vertical boards uniformly aligned.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With 20+ years specializing in cedar fencing, we've mastered the techniques that create picture frame fences of superior quality - fences that look professionally crafted and remain structurally sound for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">Investment & Pricing</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture frame fences are a premium upgrade, typically ranging from $37-$47 per linear foot installed, depending on height, trim style, gate requirements, and site conditions. While this is slightly higher than standard solid board fencing due to the additional trim materials and labor, the exceptional curb appeal and property value increase make it a worthwhile investment for many homeowners.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Schedule your free estimate to get accurate pricing for your specific project. We'll discuss your design preferences and provide transparent pricing with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsModalOpen(true)} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg">Get Free Estimate</button>
            <a href="tel:2532289101" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />Call for Quote</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
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
            Ready for an Elegant Picture Frame Fence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free estimate today and discover the premium difference of picture frame fencing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsModalOpen(true)} className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark shadow-lg">Get Free Estimate</button>
            <a href="tel:2532289101" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />(253) 228-9101</a>
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

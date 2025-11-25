"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface HeroProps {
  onEstimateClick: () => void;
}

export function Hero({ onEstimateClick }: HeroProps) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/images/pictureframefencd\\ -forhomepageherosection.\\ .jpg)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-center text-white"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Expert Wood Fence Installation & Repair
          </h1>

          <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
            20+ years of craftsmanship serving Sumner and Pierce County
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onEstimateClick}
              className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Get Free Estimate
            </button>

            <a
              href="tel:+1-253-228-9101"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-semibold bg-white text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call (253) 228-9101
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

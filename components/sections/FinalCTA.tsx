"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface FinalCTAProps {
  onEstimateClick: () => void;
}

export function FinalCTA({ onEstimateClick }: FinalCTAProps) {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Get your free estimate today. Call us or fill out our quick form.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-253-228-9101"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-primary hover:bg-accent hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Call (253) 228-9101
            </a>

            <Button
              variant="primary"
              onClick={onEstimateClick}
              className="text-lg px-8 py-4 shadow-lg"
            >
              Get Free Estimate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

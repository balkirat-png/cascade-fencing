"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";

export function Reviews() {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadWidget) {
            setShouldLoadWidget(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadWidget]);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Trusted by Homeowners Across Pierce County
          </h2>
          <p className="text-lg text-gray-600">
            Over 60 five-star reviews from satisfied customers.
          </p>
        </motion.div>

        {/* Elfsight Reviews Widget */}
        <div className="flex justify-center" ref={widgetRef}>
          {shouldLoadWidget ? (
            <>
              <div className="elfsight-app-702b6d20-2705-4078-9e86-60c2b239dcfb" data-elfsight-app-lazy></div>
              <Script
                src="https://static.elfsight.com/platform/platform.js"
                strategy="afterInteractive"
              />
            </>
          ) : (
            <div className="h-96 flex items-center justify-center">
              <div className="text-gray-500">Loading reviews...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

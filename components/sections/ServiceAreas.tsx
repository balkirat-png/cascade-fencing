"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const serviceAreas = [
  "Sumner",
  "Bonney Lake",
  "Lake Tapps",
  "Puyallup",
  "Auburn",
  "Kent",
  "Edgewood",
  "South Hill",
  "Federal Way",
  "Buckley",
  "Enumclaw",
  "Renton",
  "Bellevue",
  "Tacoma",
];

export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Serving Sumner and Surrounding Communities
          </h2>
          <p className="text-lg text-gray-600">
            Cascade Fencing & Repair proudly serves homeowners throughout Pierce
            County and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {serviceAreas.map((city, index) => (
            <motion.a
              key={index}
              href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
              className="bg-white border-2 border-primary rounded-lg p-5 hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md block"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent group-hover:text-white flex-shrink-0 mt-1" />
                <span className="text-gray-900 group-hover:text-white font-semibold transition-colors">
                  {city}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

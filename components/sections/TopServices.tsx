"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cedar Wood Fence",
    description: "Premium cedar privacy fencing with natural weather resistance",
    image: "/images/gallery/Photo/cedarwoodfence.JPG",
    link: "/services/cedar-wood-fence",
  },
  {
    title: "Solidboard Fence",
    description: "Complete privacy with durable solid board construction",
    image: "/images/gallery/Photo/solidboardfence-1.JPG",
    link: "/services/solidboard-fence",
  },
  {
    title: "Picture Frame Fence",
    description: "Elegant design with decorative trim and clean lines",
    image: "/images/gallery/Photo/pictureframe fence-7.jpeg",
    link: "/services/picture-frame-fence",
  },
  {
    title: "Horizontal Fence",
    description: "Modern horizontal slat design for contemporary homes",
    image: "/images/gallery/Photo/horizontalfence-1.JPG",
    link: "/services/horizontal-fence",
  },
  {
    title: "Hog Wire Fence",
    description: "Industrial-style fencing with steel wire panels",
    image: "/images/gallery/Photo/Hogwire fence-1.JPG",
    link: "/services/hog-wire-fence",
  },
  {
    title: "Custom Fence Options",
    description: "Unique designs tailored to your specific needs",
    image: "/images/gallery/Photo/custom fence-1.JPG",
    link: "/services/custom-fence",
  },
];

export function TopServices() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Top Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden' as const
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-primary h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} installation by Cascade Fencing`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 flex-1 flex flex-col justify-end">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

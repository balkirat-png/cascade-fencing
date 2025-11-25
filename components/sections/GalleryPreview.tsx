"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const galleryImages = [
  {
    src: "/images/gallery/Photo/pictureframe fence-1.jpeg",
    alt: "Cedar picture frame fence installation in Sumner, WA",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-2.JPG",
    alt: "Custom picture frame fence in Pierce County",
  },
  {
    src: "/images/gallery/Photo/horizontalfence-1.JPG",
    alt: "Modern horizontal cedar fence design",
  },
  {
    src: "/images/gallery/Photo/Hogwire fence-1.JPG",
    alt: "Hog wire fence installation by Cascade Fencing",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-7.jpeg",
    alt: "Professional fence installation work",
  },
  {
    src: "/images/gallery/Photo/pictureframe fence-9.JPG",
    alt: "Cedar fence craftsmanship details",
  },
  {
    src: "/images/gallery/Photo/custom fence-1.JPG",
    alt: "Custom fence design in Sumner",
  },
  {
    src: "/images/gallery/Photo/Hogwire fence-2.JPG",
    alt: "Hog wire fence with gate installation",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            View Our Work
          </h2>
          <p className="text-lg text-gray-600">
            See the quality and craftsmanship in every fence we build.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative h-48 rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a href="/gallery">
            <Button variant="primary">View Full Gallery</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

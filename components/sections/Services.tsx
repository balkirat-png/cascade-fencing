"use client";

import Image from "next/image";
import { Hammer, Wrench, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Hammer,
    title: "Wood Fence Installation",
    description:
      "Custom cedar privacy fences, horizontal designs, picture frame fences, and full installation with removal of old fence included.",
    image: "/images/gallery/Photo/pictureframe fence-7.jpeg",
    link: "/services/wood-fence-installation",
  },
  {
    icon: Wrench,
    title: "Wood Fence Repair",
    description:
      "Post replacements, rail repairs, leaning fence correction, board replacement, and storm damage fixes.",
    image: "/images/gallery/Photo/pictureframe fence-1.jpeg",
    link: "/services/wood-fence-repair",
  },
  {
    icon: Sparkles,
    title: "Specialty Fencing",
    description:
      "Hog wire fences, board-on-board styles, horizontal cedar, and custom gate builds with heavy-duty hardware.",
    image: "/images/gallery/Photo/horizontalfence-1.JPG",
    link: "/services/specialty-fencing",
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Wood Fence Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white hover:translate-y-[-8px] transition-transform"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-serif font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Button variant="primary" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  User,
  TreePine,
  Trash2,
  DoorOpen,
  DollarSign,
  MapPin,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: User,
    title: "Owner-Led Craftsmanship",
    description: "20 years of hands-on experience by owner Rubin Singh",
  },
  {
    icon: TreePine,
    title: "Premium Cedar Materials",
    description:
      "High-quality cedar for durability and natural weather resistance",
  },
  {
    icon: Trash2,
    title: "Full Service Included",
    description: "Complete removal of old fence included with every installation",
  },
  {
    icon: DoorOpen,
    title: "Heavy-Duty Gates",
    description:
      "Custom gates with reinforced hinges and commercial-grade hardware",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Honest, competitive estimates with no hidden fees",
  },
  {
    icon: MapPin,
    title: "Local & Trusted",
    description: "Sumner small business with 60+ five-star reviews",
  },
  {
    icon: Sparkles,
    title: "Clean Job Sites",
    description: "Respect for your property with organized work areas",
  },
  {
    icon: MessageCircle,
    title: "Reliable Communication",
    description: "Fast response times and clear project updates",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-emerald-50/40 to-green-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Why Homeowners Choose Cascade Fencing & Repair
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted for quality, reliability, and professional service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

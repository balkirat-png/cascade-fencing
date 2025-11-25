"use client";

import { Award, Star, TreePine, DollarSign, Sparkles } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const stats = [
  {
    icon: Award,
    number: "20+",
    text: "Years Experience",
    subtitle: "Trusted by homeowners since 2004",
    color: "from-accent/20 to-primary/20",
    shadowColor: "shadow-accent/20",
    accentColor: "bg-accent/10",
  },
  {
    icon: Star,
    number: "60+",
    text: "Five-Star Reviews",
    subtitle: "Rated excellent by our clients",
    color: "from-yellow-500/20 to-accent/20",
    shadowColor: "shadow-yellow-500/20",
    accentColor: "bg-yellow-500/10",
  },
  {
    icon: TreePine,
    number: "100%",
    text: "Cedar Specialists",
    subtitle: "Premium wood craftsmanship",
    color: "from-primary/20 to-green-600/20",
    shadowColor: "shadow-primary/20",
    accentColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    number: "$0",
    text: "Free Estimates",
    subtitle: "No obligation, transparent pricing",
    color: "from-green-500/20 to-accent/20",
    shadowColor: "shadow-green-500/20",
    accentColor: "bg-green-500/10",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const iconControls = useAnimationControls();
  const Icon = stat.icon;

  const handleHoverStart = () => {
    setIsHovered(true);
    iconControls.start({
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.1, 1.1, 1.1, 1],
      transition: { duration: 0.5 },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="relative group"
    >
      {/* Subtle glow effect on hover */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
      />

      {/* Main card */}
      <div
        className={`relative h-full bg-gradient-to-br from-white to-white/80 backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-40">
          <div
            className={`absolute top-2 right-2 w-12 h-12 ${stat.accentColor} rounded-full blur-xl`}
          />
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col items-center text-center space-y-3">
          {/* Decorative top line */}
          <motion.div
            className={`w-10 h-0.5 bg-gradient-to-r ${stat.color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          />

          {/* Icon with animation */}
          <motion.div
            animate={iconControls}
            className={`relative p-3 ${stat.accentColor} rounded-xl backdrop-blur-sm border border-white/30 shadow-md`}
          >
            <Icon className="w-8 h-8 text-accent drop-shadow" strokeWidth={2.5} />

            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute -top-1 -right-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isHovered
                  ? {
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 1.2,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 0.3,
              }}
            >
              <Sparkles className="w-3 h-3 text-accent" fill="currentColor" />
            </motion.div>
          </motion.div>

          {/* Number */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 200,
            }}
          >
            <div
              className={`text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent`}
            >
              {stat.number}
            </div>
          </motion.div>

          {/* Main text */}
          <motion.h3
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
            className="text-lg md:text-xl font-bold text-gray-900 leading-tight"
          >
            {stat.text}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
            className="text-sm text-gray-600 leading-relaxed"
          >
            {stat.subtitle}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(53, 81, 59, 0.08) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(161, 137, 86, 0.08) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />

        {/* Fewer floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3"
          >
            <span className="text-accent font-bold text-lg md:text-xl uppercase tracking-wide">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Built on Trust & Quality
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

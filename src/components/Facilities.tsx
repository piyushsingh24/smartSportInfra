import { motion } from "framer-motion";
import { useState } from "react";

const timelineSteps = [
  "Consultancy",
  "Planning",
  "Designing",
  "Installation Services",
  "Maintenance",
];

export default function Facilities() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-orange-500">Journey</span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 -z-10"></div>

          {/* Vertical line (mobile) */}
          <div className="block md:hidden absolute left-1/2 top-0 h-full w-1 bg-gray-700 -z-10 transform -translate-x-1/2"></div>

          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-col items-center md:w-auto w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Animated Circle */}
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg ${
                  hovered === index
                    ? "bg-gradient-to-br from-orange-500 to-green-500 scale-110"
                    : "bg-gradient-to-br from-green-500 to-orange-500"
                } transition-all duration-300`}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-lg font-bold">{index + 1}</span>
              </motion.div>

              {/* Step Title */}
              <p className="text-sm font-medium text-center">{step}</p>

              {/* Connecting line for mobile */}
              {index < timelineSteps.length - 1 && (
                <div className="block md:hidden w-1 h-12 bg-gray-700 mx-auto mt-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

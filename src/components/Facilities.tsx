import { motion } from "framer-motion";
import { useState } from "react";

const timelineSteps = [
  "Consultancy",
  "Planning",
  "Designing",
  "Installation Services",
  "Maintenance",
];

const timelineDescriptions = [
  "The first step is understanding the client’s needs. Our experts evaluate the site, discuss goals, and suggest the most suitable solutions for sports facilities. This includes analyzing space, intended usage (e.g., professional sports vs recreational), budget constraints, and regulatory requirements.Outcome: A clear roadmap of what’s possible and recommended.",

  "After consultancy, we move to detailed project planning. This involves mapping layouts, choosing materials, estimating costs, and setting timelines. The goal is to optimize functionality, safety, and aesthetics. Planning ensures every step of the project is organized and predictable. Outcome: A detailed project blueprint ready for execution.",

  "In this stage, creative and technical design comes together. Our designers create visual and functional layouts, incorporating the chosen materials, equipment, and safety standards. This may include 3D visualizations, material samples, and workflow for installation. Outcome: A finalized design that balances performance, safety, and visual appeal.",

  "Once the design is approved, our professional installation team executes the plan. This includes laying artificial turf, installing sports flooring, setting up equipment, and ensuring proper drainage or safety features. Every step is done following international standards and quality checks. Outcome: A fully functional, safe, and high-quality sports facility.",

  "After installation, ongoing maintenance is crucial for longevity. We provide regular inspections, cleaning, minor repairs, and performance checks. Maintenance ensures the facility remains safe, durable, and visually appealing for years. Outcome: Long-lasting, reliable sports installations with minimal disruptions.",
];

export default function Facilities() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Our 
           <span className="text-orange-500"> Work</span>
        </h2>

        {/* Responsive Timeline Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-20 md:gap-0">
          {/* Desktop horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 -z-10"></div>

          {/* Mobile vertical line */}
          <div className="block md:hidden absolute left-1/2 top-0 h-full w-1 bg-gray-700 -z-10 transform -translate-x-1/2"></div>

          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full md:w-auto cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setHovered(hovered === index ? null : index)} // Mobile tap toggle
            >
              {/* Step Circle */}
              <motion.div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg ${
                  hovered === index
                    ? "bg-gradient-to-br from-orange-500 to-green-500"
                    : "bg-gradient-to-br from-green-500 to-orange-500"
                } transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.15 }}
              >
                <span className="text-lg font-bold">{index + 1}</span>
              </motion.div>

              <p className="text-sm font-medium text-center w-28">{step}</p>

              {/* Tooltip (Responsive Positioning) */}
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="
                    absolute 
                    md:top-20 
                    top-16     
                    w-72 p-3 
                    rounded-lg 
                    bg-gray-800 
                    shadow-xl 
                    text-sm 
                    text-gray-200 
                    border 
                    border-gray-700 
                    z-20 
                    text-center 
                    pointer-events-none
                  "
                >
                  {timelineDescriptions[index]}

                  {/* Tooltip Arrow */}
                  <div
                    className="absolute left-1/2 -top-2 transform -translate-x-1/2 
                                  w-3 h-3 bg-gray-800 rotate-45 border-l border-t border-gray-700"
                  ></div>
                </motion.div>
              )}

              {/* Vertical connecting line (mobile) */}
              {index < timelineSteps.length - 1 && (
                <div className="block md:hidden w-1 h-16 bg-gray-700 mx-auto mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

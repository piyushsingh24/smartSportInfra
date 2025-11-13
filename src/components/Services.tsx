import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const products = [
  {
    title: "Artificial Grass for Landscaping",
    description:
      "Durable, low-maintenance grass that stays lush and green all year round.",
  },
  {
    title: "Artificial Grass for Sports",
    description:
      "High-performance turf designed for professional sports environments.",
  },
  {
    title: "Acrylic Sports Flooring",
    description:
      "Smooth, weather-resistant surface ideal for tennis, basketball, and more.",
  },
  {
    title: "PU Sports Flooring",
    description:
      "Shock-absorbent flooring providing superior athlete comfort and traction.",
  },
  {
    title: "PVC Indoor Sports Flooring",
    description:
      "Durable and easy-to-maintain flooring for gyms and indoor arenas.",
  },
  {
    title: "Synthetic Interlocking PP Modular Flooring",
    description:
      "Quick-install modular tiles suitable for both indoor and outdoor sports.",
  },
  {
    title: "Athletic Tracks",
    description:
      "World-class tracks built for speed, safety, and durability.",
  },
  {
    title: "Stadium Seating and Modular Grandstands",
    description:
      "Customizable, sturdy seating systems for every size of event.",
  },
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleCardClick = (index) => {
    if (isMobile) {
      setFlipped((prev) => (prev === index ? null : index));
    }
  };

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Popup for mobile users */}
      {showPopup && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-5 py-2 rounded-full text-sm shadow-lg z-50 animate-bounce">
          Tap a card to view details
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-emerald-500">Products</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Premium-quality materials trusted by top institutions and global
            sports organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center perspective-1000">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="relative w-full h-48 cursor-pointer transform-style-preserve-3d transition-transform duration-500"
              style={{
                transform:
                  flipped === index
                    ? "rotateY(180deg)"
                    : isMobile
                    ? "rotateY(0deg)"
                    : undefined,
              }}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.transform = "rotateY(180deg)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.transform = "rotateY(0deg)";
              }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-2xl shadow-lg backface-hidden px-4">
                <p className="text-white font-semibold text-lg">
                  {product.title}
                </p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex items-center justify-center bg-emerald-600 text-white rounded-2xl shadow-lg backface-hidden px-4 rotate-y-180">
                <p className="text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

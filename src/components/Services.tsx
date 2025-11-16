import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

interface Product {
  title: string;
  description: string;
}

const products: Product[] = [
  {
    title: "Artificial Grass for Landscaping",
    description:
      "Our premium artificial landscaping grass is designed to transform any outdoor or indoor environment into a lush, vibrant, and maintenance-free green space. Crafted with advanced UV-resistant fibers, it maintains its natural color throughout the year without fading. Unlike natural grass, it requires no mowing, watering, or fertilizers, making it highly economical and environmentally friendly. Its soft and realistic texture provides a comfortable surface for children, pets, and family gatherings. Whether for home gardens, terraces, balconies, parks, corporate landscapes, hotels, or luxury villas, this artificial grass offers exceptional durability, drainage efficiency, and long-lasting aesthetic appeal.",
  },
  {
    title: "Artificial Grass for Sports",
    description:
      "Engineered specifically for professional and semi-professional sports applications, our artificial sports turf provides a consistent playing surface that enhances athlete performance while reducing injury risks. Built using multi-filament yarn with superior resilience, it withstands intense foot traffic and high-impact movements. The turf delivers optimal ball bounce, traction, and shock absorption—ideal for football, cricket, multi-purpose grounds, academies, and training complexes. Its drainage system ensures quick drying after rain, making the surface playable in all weather conditions. Designed to meet international sports standards, this turf ensures durability, safety, and top-tier performance for athletes.",
  },
  {
    title: "Acrylic Sports Flooring",
    description:
      "Acrylic sports flooring is a high-quality, cushioned, and weather-resistant surface preferred for multiple indoor and outdoor sports. Constructed using premium acrylic layers, it offers a smooth and non-slippery texture that boosts grip and stability for athletes. It is ideal for tennis, basketball, volleyball, badminton, skating areas, and multi-sport courts. The flooring is resistant to UV radiation, moisture, and heavy usage, ensuring long-term performance with minimal upkeep. Customizable colors and line-markings allow full personalization of court aesthetics. Its shock-absorbing properties help reduce injuries while maintaining consistent bounce and traction across the entire playing area.",
  },
  {
    title: "PU Sports Flooring",
    description:
      "PU (Polyurethane) sports flooring is one of the most advanced indoor sports surfaces, offering exceptional shock absorption, elasticity, and athlete comfort. Designed for high-performance environments such as indoor stadiums, gyms, multi-purpose halls, and fitness centers, PU flooring minimizes impact on joints and prevents fatigue during prolonged activity. Its multi-layered structure includes a cushioning base that ensures uniform thickness and optimal ball rebound. The seamless, anti-bacterial top layer provides excellent slip resistance and is easy to clean. Highly durable and resistant to wear, PU flooring is perfect for demanding sports like basketball, handball, futsal, volleyball, and indoor athletics.",
  },
  {
    title: "PVC Indoor Sports Flooring",
    description:
      "PVC indoor sports flooring is a versatile, flexible, and extremely durable flooring system used widely in sports complexes, gyms, academies, schools, and commercial indoor courts. Built with multi-layer vinyl construction, it offers excellent shock absorption, anti-slip protection, and sound insulation. This flooring is designed to handle heavy foot traffic and sports activities without losing its structural integrity. It provides a consistent playing experience with reliable grip and controlled slide behavior, making it suitable for badminton, table tennis, indoor football, aerobics, martial arts, and fitness zones. Easy to install and maintain, PVC flooring delivers long-lasting performance with minimal cost.",
  },
  {
    title: "Synthetic Interlocking PP Modular Flooring",
    description:
      "Synthetic interlocking PP (polypropylene) modular flooring is a high-performance, quick-install sports surface ideal for both outdoor and indoor use. The interlocking tiles snap together without the need for adhesives, making installation fast and cost-effective. Designed with built-in shock absorption, drainage channels, UV protection, and anti-slip patterns, this flooring is perfect for all weather conditions. It provides excellent traction and bounce, making it suitable for basketball, futsal, skating, multi-sport courts, events, and recreational areas. The modular design allows easy replacement of damaged tiles and complete customization of court layouts and colors, ensuring long-term flexibility and durability.",
  },
  {
    title: "Athletic Tracks",
    description:
      "Our world-class athletic tracks are engineered to deliver peak performance, maximum safety, and optimal longevity. Built using high-grade synthetic materials, these tracks provide excellent shock absorption, energy return, and traction for sprinters and long-distance runners alike. They minimize muscle fatigue and reduce injury risks by maintaining consistent elasticity and grip across the track surface. Ideal for schools, universities, stadiums, training academies, and professional events, our tracks are designed to withstand heavy usage and harsh weather. With customizable colors, lane markings, and thickness options, these tracks comply with international standards for competitive athletics.",
  },
  {
    title: "Stadium Seating and Modular Grandstands",
    description:
      "Our stadium seating and modular grandstands offer a reliable, safe, and comfortable seating experience for crowds of any size. Constructed with high-strength steel or aluminum frameworks, these seating systems are engineered to endure heavy loads, harsh weather, and frequent usage. They come with customizable layouts, seating capacities, color options, and premium seat styles—ranging from basic benches to cushioned foldable chairs. Ideal for schools, arenas, stadiums, public events, concerts, and sports tournaments, these modular systems are easy to install, expand, relocate, or dismantle. Safety features include anti-slip steps, guardrails, fire-resistant materials, and ergonomic seating arrangements that enhance viewer comfort and visibility.",
  },
];

interface ProductCardProps {
  product: Product;
  isMobile: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isMobile }) => {
  const [flipped, setFlipped] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (flipped && textRef.current && textRef.current.scrollHeight > textRef.current.clientHeight) {
      setShowScrollHint(true);
      const timer = setTimeout(() => setShowScrollHint(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [flipped]);

  const handleClick = () => {
    if (isMobile) setFlipped((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-64 cursor-pointer transition-transform duration-500"
      style={{
        transformStyle: "preserve-3d",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
      onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = "rotateY(180deg)")}
      onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = "rotateY(0deg)")}
      tabIndex={0} // focusable for accessibility
    >

      {/* Front */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-2xl shadow-lg"
        style={{ backfaceVisibility: "hidden" }}
      >
        <p className="text-white font-semibold text-lg">{product.title}</p>
      </div>

      {/* Back */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-600 text-white rounded-2xl shadow-lg p-4"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <div
          ref={textRef}
          className="overflow-y-auto max-h-full text-sm leading-relaxed scrollbar-hide w-full"
        >
          {product.description}
        </div>

        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-4 py-1 rounded-full text-xs text-white shadow-lg"
          >
            Scroll for more
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
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
            Premium-quality materials trusted by top institutions and global sports organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center perspective-1000">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* -------- TYPES -------- */
interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

// If already in another file, just import it
import products from "../data/product.js";

/* -------- COMPONENT -------- */
const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-emerald-500">Products</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            High-performance sports infrastructure solutions trusted worldwide.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: Product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavigate(product.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleNavigate(product.id)
              }
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${product.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-200">
                  {product.category}
                </p>

                <span className="mt-4 text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition">
                  Click to explore →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

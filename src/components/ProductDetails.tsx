import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProduct } from "../data/product.js";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = id ? getProduct(id) : null;

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
        <p className="text-lg text-red-400">Product not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-900 text-white">
      {/* Hero / Image Section */}
      <div
        className="h-[55vh] sm:h-[60vh] w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              {product.title}
            </h1>
            <p className="text-emerald-400 text-base sm:text-lg">
              {product.category}
            </p>
          </div>
        </div>

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate("/#back")}
          className="
            absolute top-16 left-4
            flex items-center gap-2
            px-4 py-2
            bg-black/60 hover:bg-black/80
            backdrop-blur
            rounded-xl
            text-sm font-medium
            transition
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-emerald-500">
          Product Overview
        </h2>

        <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line text-sm sm:text-base">
          {product.description}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Sports Director",
    company: "Delhi Public School, Gurgaon",
    text: "Smart Sports Infrastructure delivered an exceptional football and basketball facility for our campus. The quality of materials and finishing exceeded our expectations — truly world-class execution.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Project Engineer",
    company: "Kerala State Sports Council",
    text: "The entire team showed outstanding professionalism. From planning to installation, they handled everything with precision. Our new synthetic athletic track has become a landmark in the region.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Head Coach",
    company: "Ahmedabad Sports Academy",
    text: "We were impressed by their technical expertise and quick project turnaround. The synthetic turf field has significantly improved athlete performance and reduced maintenance costs.",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "Infrastructure Consultant",
    company: "Ministry of Youth Affairs & Sports",
    text: "Smart Sports Infrastructure has set a benchmark in the industry. Their adherence to international standards and timely project delivery make them one of the most reliable partners for large-scale sports projects.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Chairman",
    company: "Elite Fitness & Recreation Club, Lucknow",
    text: "From synthetic flooring to open-air gym setup, every detail was handled meticulously. Their dedication to quality and sustainability truly stands out in today’s market.",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear what our clients across India say about working with{" "}
            <span className="font-semibold text-orange-400">
              Smart Sports Infrastructure
            </span>
          </p>
        </motion.div>

        {/* Arrow Buttons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
          <button
            onClick={scrollLeft}
            className="bg-slate-700 hover:bg-orange-500 text-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex">
          <button
            onClick={scrollRight}
            className="bg-slate-700 hover:bg-orange-500 text-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable Testimonials */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[320px] md:min-w-[360px] bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 relative snap-center"
            >
              <div className="absolute top-6 right-6 text-orange-500/20">
                <Quote size={48} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-slate-700 pt-4">
                <h4 className="text-white font-bold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-orange-500 text-sm">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

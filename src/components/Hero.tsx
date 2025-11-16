import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const pic1 = new URL("../assets/Picture1.jpg", import.meta.url).href;
const pic2 = new URL("../assets/Picture2.jpg", import.meta.url).href;
const pic3 = new URL("../assets/Picture3.jpg", import.meta.url).href;
const pic4 = new URL("../assets/Picture4.jpg", import.meta.url).href;
const pic5 = new URL("../assets/Picture5.jpg", import.meta.url).href;
const pic6 = new URL("../assets/Picture6.jpg", import.meta.url).href;
const pic7 = new URL("../assets/Picture7.jpg", import.meta.url).href;
const pic8 = new URL("../assets/Picture8.jpg", import.meta.url).href;
const pic9 = new URL("../assets/Picture9.jpg", import.meta.url).href;
const pic10 = new URL("../assets/Picture10.png", import.meta.url).href;
const pic11 = new URL("../assets/Picture11.png", import.meta.url).href;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToUse, setImagesToUse] = useState<string[]>(() => [pic1, pic2, pic3]);
  const [visibleBg, setVisibleBg] = useState<string>(imagesToUse[0]);

  useEffect(() => {
    const remaining = [pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11];
    let i = 0;
    const adder = setInterval(() => {
      if (i >= remaining.length) {
        clearInterval(adder);
        return;
      }
      setImagesToUse((prev) => [...prev, remaining[i]]);
      i += 1;
    }, 2000);
    return () => clearInterval(adder);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesToUse.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagesToUse]);

  useEffect(() => {
    const nextUrl = imagesToUse[currentIndex] ?? imagesToUse[0];
    const img = new Image();
    img.src = nextUrl;
    img.onload = () => setVisibleBg(nextUrl);
    return () => {
      img.onload = null;
    };
  }, [currentIndex, imagesToUse]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${visibleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/60 via-gray-800/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Building </span>
          <span className="text-emerald-500">World-Class</span>
          <br />
          <span className="text-orange-500">Sports Playgrounds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8"
        >
          Transforming indoor & outdoor spaces into premium sports facilities for football,
          volleyball, badminton, jogging tracks, tennis courts, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            View Our Projects
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-orange-500 hover:bg-orange-500 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Scroll Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="text-emerald-500" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}

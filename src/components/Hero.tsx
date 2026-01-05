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
  const [imagesToUse, setImagesToUse] = useState<string[]>([pic1, pic2, pic3]);
  const [visibleBg, setVisibleBg] = useState(imagesToUse[0]);

  useEffect(() => {
    const remaining = [pic1, pic2 ,pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11];

    let i = 0;
    const adder = setInterval(() => {
      if (i >= remaining.length) return clearInterval(adder);
      setImagesToUse((prev) => [...prev, remaining[i++]]);
    }, 2000);
    return () => clearInterval(adder);
  }, []);

  useEffect(() => {
    if(window.location.href.endsWith("#back")){
      window.location.href = "#services"
    }
  });

  useEffect(() => {
    if(window.location.href.endsWith("#contactus")){
      window.location.href = "#contact"

    }
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesToUse.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagesToUse]);

  useEffect(() => {
    const next = imagesToUse[currentIndex] ?? imagesToUse[0];
    const img = new Image();
    img.src = next;
    img.onload = () => setVisibleBg(next);
  }, [currentIndex, imagesToUse]);

  return (
    <section
      id="home"
      className="
    relative w-full 
    min-h-[100svh] 
    flex items-center justify-center
    pt-24 sm:pt-28
    overflow-hidden
  "
      style={{
        backgroundImage: `url(${visibleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            xl:text-7xl 
            font-extrabold 
            leading-tight 
            mb-6
          "
        >
          <span className="text-white">Building </span>
          <span className="text-emerald-400">World-Class</span>
          <br />
          <span className="text-orange-400">Sports Playgrounds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-sm 
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            text-gray-200 
            max-w-3xl 
            mx-auto 
            mb-8
          "
        >
          Transforming indoor & outdoor spaces into premium sports facilities
          for football, volleyball, badminton, jogging tracks, tennis courts,
          and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="
              px-6 py-3 sm:px-8 sm:py-4 
              bg-emerald-500 hover:bg-emerald-600 
              text-white rounded-2xl font-semibold 
              transition transform hover:scale-105
              shadow-lg
            "
          >
            View Our Projects
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 sm:px-8 sm:py-4 
              border-2 border-orange-500 
              text-white rounded-2xl font-semibold 
              hover:bg-orange-500 transition transform hover:scale-105
            "
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-emerald-400" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}

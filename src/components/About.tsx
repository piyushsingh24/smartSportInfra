import { motion } from "framer-motion";
import { Target, Award, Users, Zap } from "lucide-react";
import "../index.css";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every project is executed with meticulous attention to detail and quality standards.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We deliver world-class sports facilities that exceed global expectations.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Building lasting relationships with clients through trust, transparency, and collaboration.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Using cutting-edge techniques, eco-friendly materials, and the latest global sports technologies.",
  },
];

const federationLogos = [
  "fifa.png",
  "fih.png",
  "itf.png",
  "bwf.png",
  "fiba.png",
  "ihf.png",
  "irb.png",
  "iaaf.png",
  "forbex.svg",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-500">SmartSportInfra</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Smart Sports Infrastructure was founded with the objective of
            developing sustainable, eco-friendly, and high-quality sports
            facilities. We offer
            <span className="text-emerald-400 font-semibold">
              {" "}
              turnkey solutions{" "}
            </span>
            for synthetic athletic tracks, football turfs, hockey fields, and
            multipurpose courts for tennis, volleyball, badminton, basketball,
            and more.
            <br />
            <br />
            Our products are certified by global sports bodies such as{" "}
            <span className="text-orange-400 font-medium">
              FIFA, FIH, ITF, BWF, FIBA, IHF, IRB, IAAF, FORBEX, CASALI, and BSW
            </span>
            , ensuring unmatched quality and durability for both indoor and
            outdoor facilities.
          </p>
        </motion.div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <value.icon className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* EXTENDED DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-gray-300 text-lg leading-relaxed max-w-5xl mx-auto"
        >
          <p className="mb-6">
            Our mission is to deliver premium quality sports infrastructure that
            inspires athletes and promotes a culture of sports excellence. With
            a team of experienced engineers and technical experts, we ensure
            precision, safety, and sustainability in every project we execute.
          </p>
          <p className="mb-6">
            We specialize in a variety of flooring and court systems, including:
            synthetic athletic tracks, artificial grass (Forbex), acrylic & PU
            sports flooring (Casali), modular interlocking tiles (Sport Court
            USA), and PVC flooring (Taraflex by Gerflor).
          </p>
          <p>
            Trusted by educational institutions, government bodies, defense
            establishments, and private academies across India — Smart Sports
            Infrastructure stands as a symbol of reliability, performance, and
            innovation.
          </p>
        </motion.div>

        {/* BUTTON */}
        {/* <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-orange-500 text-white rounded-2xl font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Explore Full About Page →
          </a>
        </div> */}
      </div>

      {/* AUTO-SCROLLING LOGOS SECTION */}
      <div className="bottom-0 left-0 right-0 py-10 bg-slate-900/70 mt-20 overflow-hidden">
  <div className="flex animate-scroll">
    {[...federationLogos, ...federationLogos].map((logo, i) => {
      const logoUrl = new URL(`../assets/logos/${logo}`, import.meta.url).href;
      return (
        <motion.img
          key={i}
          src={logoUrl}
          alt={logo.replace(".png", "")}
          className="h-16 mx-10 opacity-80 hover:opacity-100 transition-opacity duration-100"
          whileHover={{ scale: 1.1 }}
        />
      );
    })}
  </div>
</div>

    </section>
  );
}

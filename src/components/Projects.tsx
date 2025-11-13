import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const projects = [
  {
    title: "Synthetic PU Flooring",
    location: "Casali Sports ",
    date: "2024",
    client: "Certified by FIBA & BWF",
    area: "7,500+ Courts Worldwide",
    description:
      "A top-class seamless Polyurethane sports flooring system offering high energy return, shock absorption, and durability. Outperforms wood, vinyl, and linoleum flooring with over 20 years lifespan and EN 14904 certification.",
    image: new URL("../assets/Picture8.jpg", import.meta.url)
      .href,
  },
  {
    title: "Shooting Range Facility",
    location: "Pan-India Projects",
    date: "2024",
    client: "Shooting Academies & Institutions",
    area: "Indoor & Outdoor Ranges",
    description:
      "Turnkey shooting range solutions with bullet traps, electronic scoring targets, noise cancellation, and accessories. Designed to meet national and international standards for professional and educational use.",
    image: new URL("../assets/FacilitiesImage/Picture12.png", import.meta.url)
      .href,
  },
  {
    title: "Squash Court Construction",
    location: "Approved by WSF",
    date: "2023",
    client: "Sports Complexes & Clubs",
    area: "Standard Court Size",
    description:
      "High-impact, easy-maintenance squash courts with best-grade hard plaster ensuring uniform bounce and water-resistant flooring. Complies with EN 14904 and FIBA performance standards. Warranty: 3–8 years.",
    image: new URL("../assets/FacilitiesImage/Picture11.jpg", import.meta.url)
      .href,
  },
  {
    title: "IAAF Approved Synthetic Athletic Track",
    location: "Global Installations",
    date: "2023",
    client: "Regupol AG & Compact Systems",
    area: "400m Standard Track",
    description:
      "Regupol Tartan® synthetic tracks made per IAAF standards, offering balance of speed, non-slip surface, and shock absorption. Customizable in color, elasticity, and thickness. Preferred by world athletes like Usain Bolt.",
    image: new URL("../assets/FacilitiesImage/Picture3.png", import.meta.url)
      .href,
  },
  {
    title: "Synthetic Hockey Field",
    location: "FIH Approved ",
    date: "2023",
    client: "Forbex Turf Systems",
    area: "Standard Hockey Pitch",
    description:
      "FIH certified sand-based and water-based hockey turfs used in Youth Olympics and FIH tournaments. UV-protected polypropylene yarns ensure all-weather playability. Warranty: 3–7 years.",
    image: new URL("../assets/Picture5.jpg", import.meta.url)
      .href,
  },
  {
    title: "Synthetic Multi Sports Facility",
    location: "Educational & Institutional Projects",
    date: "2022",
    client: "Schools, Colleges & Private Academies",
    area: "Multi-sport Layouts",
    description:
      "Smart multi-sport flooring solutions integrating football, tennis, hockey, volleyball, and athletics. Available in artificial grass, PU, PVC, and modular tile systems with zero maintenance and high durability.",
    image: new URL("../assets/Picture2.jpg", import.meta.url)
      .href,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our premium sports facility developments and global installations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700 hover:border-orange-500 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-emerald-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-orange-500" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

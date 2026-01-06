import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8">
          
          {/* BRAND */}
          <div className="sm:col-span-2">
            <h3 className="text-sm md:text-2xl font-bold mb-3">
              <span className="text-emerald-500">Smart</span>
              <span className="text-orange-500">Sports</span>
              <span className="text-white">InfraStructure</span>
            </h3>

            <p className="text-gray-400 mb-5 leading-relaxed max-w-md text-sm sm:text-base">
              Building world-class sports playgrounds that inspire excellence
              and foster community engagement. Your vision, our expertise.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/9773911108"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} className="text-white" />
              </a>

              <a
                href="mailto:smartSportsinfrastructure@gmail.com"
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition"
                aria-label="Email"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Home", "About", "Services", "Projects"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-emerald-500 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Contact
            </h4>

            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex gap-3">
                <Mail size={18} className="text-emerald-500 mt-1 shrink-0" />
                <a
                  href="mailto:smartSportsinfrastructure@gmail.com"
                  className="text-gray-400 hover:text-emerald-500 break-all transition"
                >
                  smartSportsinfrastructure@gmail.com
                </a>
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <a
                  href="https://wa.me/9773911108"
                  className="text-gray-400 hover:text-emerald-500 transition"
                >
                  +91 9773911108
                </a>
              </li>

              <li className="text-gray-400 leading-relaxed">
                Vaishali Sector 5, Plot 609, Second Floor, Ghaziabad – 201010
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-4 text-center text-xs sm:text-sm text-gray-500">
          © {currentYear} SmartSportInfra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* ---------- BRAND INFO ---------- */}
          <div className="sm:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-emerald-500">Smart</span>
              <span className="text-orange-500">Sport</span>
              <span className="text-white">Infra</span>
            </h3>
            <p className="text-gray-400 mb-5 leading-relaxed max-w-md">
              Building world-class sports playgrounds that inspire excellence
              and foster community engagement. Your vision, our expertise.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/9773911108"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} className="text-white" />
              </a>

              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQZlggMHNwXtMCztVZGzFgVSTXxcxZRhCPTDccNQnwlkMdgRFdJXzdvkMlpWKslNSHXQjt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Gmail"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* ---------- QUICK LINKS ---------- */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Projects"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- CONTACT INFO ---------- */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:smartSportsinfrastructure@gmail.com"
                  className="text-gray-400 hover:text-emerald-500 transition-colors duration-200 break-all"
                >
                  smartSportsinfrastructure@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <a
                  href="https://wa.me/9773911108"
                  className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                >
                  +91 9773911108
                </a>
              </li>

              <li className="text-gray-400 leading-relaxed">
               Vaishali sector  5 plot 609 Second floor 
                Ghaziabad - 201010
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- BOTTOM TEXT ---------- */}
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} SmartSportInfra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

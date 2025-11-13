import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult("");

    // Read API key from Vite environment variable. Set VITE_WEB3FORMS_KEY in your local `.env`.
    // Example `.env` (not committed):
    // VITE_WEB3FORMS_KEY=your_real_key_here
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

    if (!ACCESS_KEY) {
      setResult(
        "Contact form is not configured: set VITE_WEB3FORMS_KEY in your local .env file."
      );
      setSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append("access_key", ACCESS_KEY);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const json = await res.json();
    if (json.success) {
      setResult("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setResult("Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your sports facility? Let's discuss your project.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* -------- LEFT SECTION: Contact Info -------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">
                    smartSportsinfrastructure@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+91 9773911108</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">
                    Vaishali sector 5, plot 609, Second floor
                  </p>
                  <p className="text-gray-400">GHAZIABAD - 201010</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-gradient-to-br from-emerald-500/10 to-orange-500/10 rounded-2xl border border-emerald-500/20">
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-400">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-400">
                Saturday & Tuesday: 10:00 AM - 4:00 PM
              </p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* -------- RIGHT SECTION: Form -------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-semibold mb-2"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="9999999999"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className={`w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                  submitting
                    ? "bg-slate-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-orange-500 hover:from-emerald-600 hover:to-orange-600 text-white"
                }`}
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </motion.button>

              {/* Result Message */}
              {result && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-semibold ${
                    result.includes("Thank")
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

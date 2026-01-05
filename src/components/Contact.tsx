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
    <section
      id="contact"
      className="relative bg-slate-900 py-12 sm:py-16 lg:py-20 w-full overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xl lg:max-w-2xl mx-auto">
            Ready to transform your sports facility? Let's discuss your project.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
          {/* LEFT: INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Contact Information
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm break-all">
                    smartSportsinfrastructure@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    +91 9773911108
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    Location
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Vaishali Sector 5, Plot 609
                    <br />
                    Second Floor, Ghaziabad – 201010
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-4 sm:p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-orange-500/10">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                Business Hours
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Mon – Fri: 9:00 AM – 6:00 PM
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Sat: 10:00 AM – 4:00 PM
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {[
                {
                  label: "Name",
                  id: "name",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  label: "Email",
                  id: "email",
                  type: "email",
                  placeholder: "your@email.com",
                },
                {
                  label: "Mobile",
                  id: "phone",
                  type: "text",
                  placeholder: "9999999999",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-white font-semibold mb-1 text-sm">
                    {field.label}
                  </label>
                  <input
                    {...field}
                    name={field.id}
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-1 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base bg-slate-800 border border-slate-700 rounded-xl text-white resize-none focus:border-emerald-500 focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                disabled={submitting}
                type="submit"
                className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition ${
                  submitting
                    ? "bg-slate-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-orange-500 hover:from-emerald-600 hover:to-orange-600"
                }`}
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>

              {result && (
                <p
                  className={`text-center text-xs sm:text-sm font-semibold ${
                    result.includes("Thank")
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

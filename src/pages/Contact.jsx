import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  User,
  Mail as MailIcon,
  MessageCircle
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("✅ Message sent! Thanks for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    alert("❌ Failed to send. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section
      className="
        min-h-screen py-24 px-6
        bg-gradient-to-br from-gray-50 via-white to-gray-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        transition-colors
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4
            bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600
            bg-clip-text text-transparent">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Let’s build something great together 🚀
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="
              p-8 rounded-3xl border backdrop-blur-xl shadow-xl
              bg-white/80 border-gray-200
              dark:bg-slate-900/60 dark:border-slate-700
              hover:-translate-y-1 transition
            ">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/20">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:manerameshwar909@gmail.com"
                    className="font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-500"
                  >
                    manerameshwar909@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="
              p-8 rounded-3xl border backdrop-blur-xl shadow-xl
              bg-white/80 border-gray-200
              dark:bg-slate-900/60 dark:border-slate-700
            ">
              <h3 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">
                Let’s Connect
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/rameshwar8767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl
                    hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/rameshwar-mane-8767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl
                    hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              p-8 rounded-3xl border backdrop-blur-xl shadow-xl
              bg-white/90 border-gray-200
              dark:bg-slate-900/70 dark:border-slate-700
            "
          >
            {[
              {
                label: "Full Name",
                icon: User,
                type: "text",
                key: "name",
                placeholder: "Your name"
              },
              {
                label: "Email",
                icon: MailIcon,
                type: "email",
                key: "email",
                placeholder: "your@email.com"
              }
            ].map(({ label, icon: Icon, type, key, placeholder }) => (
              <div key={key} className="mb-6">
                <label className="flex items-center gap-2 mb-2 text-sm font-semibold uppercase text-slate-600 dark:text-slate-300">
                  <Icon className="w-4 h-4" />
                  {label}
                </label>
                <input
                  type={type}
                  required
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  placeholder={placeholder}
                  className="
                    w-full px-5 py-4 rounded-2xl text-lg
                    bg-white/70 border border-gray-300
                    dark:bg-slate-800/50 dark:border-slate-700 dark:text-white
                    focus:ring-4 focus:ring-cyan-400/20 transition
                  "
                />
              </div>
            ))}

            {/* Message */}
            <div className="mb-8">
              <label className="flex items-center gap-2 mb-2 text-sm font-semibold uppercase text-slate-600 dark:text-slate-300">
                <MessageCircle className="w-4 h-4" />
                Message
              </label>
              <textarea
                rows="5"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                className="
                  w-full px-5 py-4 rounded-2xl text-lg
                  bg-white/70 border border-gray-300
                  dark:bg-slate-800/50 dark:border-slate-700 dark:text-white
                  focus:ring-4 focus:ring-cyan-400/20 transition
                "
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                w-full flex items-center justify-center gap-3
                px-8 py-5 rounded-3xl font-bold text-lg text-white
                bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600
                hover:shadow-xl hover:-translate-y-1 transition
                disabled:opacity-60
              "
            >
              {isSubmitting ? "Sending..." : <>
                <Send className="w-5 h-5" />
                Send Message
              </>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => {
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: Github, url: "https://github.com/rameshwar" },
    { icon: Linkedin, url: "https://linkedin.com/in/rameshwar" },
    { icon: Twitter, url: "https://twitter.com/rameshwar" },
    { icon: Mail, url: "mailto:hello@rameshwar.dev" }
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Skills", href: "/skills" },
        { label: "Projects", href: "/projects" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Resume", href: "/resume.pdf" },
        { label: "Contact", href: "/contact" },
        { label: "Certifications", href: "/certifications" }
      ]
    }
  ];

  return (
    <footer
      className="
        relative mt-24 border-t backdrop-blur-xl
        bg-gradient-to-b from-white/60 to-gray-100/80
        dark:from-slate-900/50 dark:to-slate-950/80
        border-gray-200 dark:border-slate-800
        transition-colors
      "
    >
      {/* Scroll progress */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="inline-block p-3 rounded-2xl mb-4
              bg-gradient-to-br from-cyan-500/20 to-indigo-500/20
              border border-cyan-500/30">
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                RM
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Rameshwar.dev
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Full Stack Developer crafting modern, scalable web experiences.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="
                      p-2 rounded-lg border backdrop-blur-sm
                      bg-gray-200/60 text-slate-600 border-gray-300
                      dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700
                      hover:text-cyan-500 transition
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="
                        inline-flex items-center gap-2 text-sm
                        text-slate-600 dark:text-slate-400
                        hover:text-cyan-500 transition
                      "
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-slate-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500">
            © {currentYear} Rameshwar.dev — All rights reserved
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              p-3 rounded-full border backdrop-blur-sm
              bg-gradient-to-br from-cyan-500/20 to-indigo-500/20
              border-cyan-500/30 text-cyan-500
              hover:bg-cyan-500/30 transition
            "
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

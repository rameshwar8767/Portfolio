import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize (UX polish)
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1280 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300
          ${scrolled ? "py-3 shadow-xl" : "py-5"}
          ${theme === "dark"
            ? "bg-slate-950/80 border-slate-800/50"
            : "bg-white/80 border-gray-200/60"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30">
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                RM
              </span>
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 dark:text-white">
                Rameshwar<span className="text-cyan-400">.dev</span>
              </h1>
              <p className="text-xs text-slate-500">Full Stack Developer</p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-3">
            <div
              className={`flex gap-1 px-3 py-2 rounded-2xl border backdrop-blur-xl
                ${theme === "dark"
                  ? "bg-slate-900/60 border-slate-700/50"
                  : "bg-white/70 border-gray-300/50"}`}
            >
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-semibold transition-all
                    ${isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg"
                      : theme === "dark"
                        ? "text-slate-300 hover:bg-slate-800/60"
                        : "text-slate-700 hover:bg-gray-100"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border backdrop-blur-xl transition hover:scale-105
                bg-gradient-to-r from-orange-400/20 to-amber-400/20 border-orange-400/30"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>

            {/* RESUME */}
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-lg hover:shadow-cyan-500/30 transition"
            >
              Resume
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 rounded-xl border backdrop-blur-xl"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`xl:hidden border-t backdrop-blur-xl
              ${theme === "dark"
                ? "bg-slate-950/95 border-slate-800"
                : "bg-white/95 border-gray-200"}`}
          >
            <div className="grid grid-cols-2 gap-4 p-6">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `p-5 rounded-2xl text-lg font-bold text-center transition
                    ${isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl"
                      : theme === "dark"
                        ? "text-slate-300 hover:bg-slate-800"
                        : "text-slate-700 hover:bg-gray-100"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

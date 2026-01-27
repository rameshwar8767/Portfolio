import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProfileImage from "../assets/profile.jpg";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";  // Add this import

const Home = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={ref}
        className="
          relative min-h-screen flex items-center justify-center overflow-hidden
          bg-gradient-to-br from-gray-50 via-white to-slate-100
          dark:from-slate-950 dark:via-slate-900 dark:to-black
          transition-colors
        "
      >
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            style={{ y: yText, opacity }}
            className="space-y-8"
          >
            <span className="
              inline-block px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider
              bg-gradient-to-r from-cyan-500/20 to-indigo-500/20
              border border-cyan-500/30 text-cyan-600
              dark:text-cyan-300
            ">
              Full-Stack Developer
            </span>

            <h1 className="
              text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight
              text-slate-900 dark:text-white
            ">
              Hi, I’m <span className="text-cyan-400">Rameshwar</span>
              <br />
              <span className="block text-slate-800 dark:text-slate-200">
                Mane
              </span>
            </h1>

            <p className="
              text-xl lg:text-2xl max-w-xl leading-relaxed
              text-slate-600 dark:text-slate-300
            ">
              I build scalable <span className="font-semibold text-cyan-400">MERN</span> applications
              and clean, high-performance user interfaces.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="
                  px-8 py-4 rounded-2xl font-bold text-lg text-white
                  bg-gradient-to-r from-cyan-500 to-indigo-600
                  shadow-xl hover:shadow-cyan-500/30
                  hover:-translate-y-1 transition-all duration-300
                "
              >
                📄 Download Resume
              </a>

              <a
                href="/contact"
                className="
                  px-8 py-4 rounded-2xl font-bold text-lg
                  border-2 border-cyan-500/50 text-cyan-600
                  dark:text-cyan-300 dark:border-cyan-400/50
                  hover:bg-cyan-500/10 hover:-translate-y-1
                  transition-all duration-300
                "
              >
                Contact Me →
              </a>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-3 pt-6">
              {["React", "Node.js", "MongoDB", "Tailwind", "Vite", "Framer"].map(
                tech => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2 rounded-full text-sm font-semibold
                      bg-white/70 border border-gray-200/50 text-slate-700
                      dark:bg-slate-800/70 dark:border-slate-700/50 dark:text-slate-300
                      hover:scale-105 transition-all duration-200
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT — PROFILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="
              absolute -inset-6 rounded-full
              bg-gradient-to-r from-cyan-400/30 to-indigo-500/30
              blur-3xl animate-pulse
            " />

            {/* Image */}
            <div className="
              relative w-80 h-80 sm:w-96 sm:h-96
              rounded-full overflow-hidden
              border-8 border-white/30 dark:border-slate-900/50
              shadow-2xl backdrop-blur-xl ring-4 ring-cyan-500/20
              hover:scale-105 transition-all duration-500
            ">
              <img
                src={ProfileImage}
                alt="Rameshwar Mane"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="
                absolute -top-10 -right-10
                w-24 h-24 rounded-2xl
                bg-gradient-to-br from-cyan-400/40 to-indigo-500/40
                backdrop-blur-xl border-2 border-white/30 dark:border-slate-900/50
                flex items-center justify-center shadow-xl
              "
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          text-xs uppercase tracking-wider font-semibold
          text-slate-500 dark:text-slate-400
          animate-bounce
        ">
          Scroll Down
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-center mb-24 text-slate-900 dark:text-white"
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2> */}
          <Projects />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative py-32 bg-gradient-to-t from-slate-50 via-white dark:from-slate-950 dark:via-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-center mb-24 text-slate-900 dark:text-white"
          >
            <span className="text-cyan-400">Skills</span> & Technologies
          </motion.h2> */}
          <Skills />
        </div>
      </section>
    </>
  );
};

export default Home;

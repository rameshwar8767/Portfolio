import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      className="
        min-h-screen py-24 px-6
        bg-gradient-to-b from-gray-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-center
            text-slate-900 dark:text-white
          "
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* Profile + Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div
              className="
                w-80 h-80 rounded-3xl p-2
                bg-gradient-to-br from-cyan-400/20 to-indigo-500/20
                shadow-2xl border border-white/20 backdrop-blur-sm
              "
            >
              <img
                src={ProfileImage}
                alt="Rameshwar Mane"
                className="
                  w-full h-full object-cover rounded-2xl
                  shadow-xl hover:scale-105 transition
                "
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                Rameshwar Mane
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Full-Stack Developer | MERN Stack
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300 dark:prose-invert">
              <p>
                Final-year B.E. Information Technology student with hands-on
                experience building scalable full-stack applications using the
                <strong> MERN stack</strong>.
              </p>
              <p>
                Passionate about clean code, REST APIs, secure authentication,
                and responsive UIs using Tailwind CSS, Vite, and Framer Motion.
              </p>
              <p>
                Built real-world projects including hotel booking platforms,
                social media apps, and production-ready backend APIs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl p-8 border backdrop-blur-xl shadow-xl
              bg-white/80 border-gray-200
              dark:bg-slate-900/80 dark:border-slate-700
              hover:-translate-y-1 hover:shadow-2xl transition
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              🎓 Education
            </h3>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              B.E. Information Technology
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              PES Modern College of Engineering, Pune
            </p>
            <p className="text-2xl font-black text-cyan-400 mt-2">
              7.36 / 10 CGPA
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              rounded-3xl p-8 border backdrop-blur-xl shadow-xl
              bg-white/80 border-gray-200
              dark:bg-slate-900/80 dark:border-slate-700
              hover:-translate-y-1 hover:shadow-2xl transition
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              🏆 Certifications
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              5+ certifications in Full-Stack Development, AWS Cloud, and
              competitive programming.
            </p>
            <a
              href="/certifications"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View All Certifications →
            </a>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/contact"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-2xl
              font-semibold text-lg text-white
              bg-gradient-to-r from-cyan-500 to-indigo-600
              hover:from-cyan-600 hover:to-indigo-700
              shadow-xl hover:shadow-2xl hover:-translate-y-1
              transition
            "
          >
            Get In Touch →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

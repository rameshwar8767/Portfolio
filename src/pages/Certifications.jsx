import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/certifications";


const Certifications = () => {
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-center
            text-slate-900 dark:text-white
          "
        >
          Certifications
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="
                group rounded-3xl overflow-hidden
                border backdrop-blur-xl cursor-pointer
                bg-white/80 border-gray-200
                dark:bg-slate-900/70 dark:border-slate-700
                shadow-xl hover:shadow-2xl
                hover:border-cyan-400/60
                transition
              "
            >
              <div className="p-8 h-80 flex flex-col justify-between">

                {/* Content */}
                <div>
                  <h3
                    className="
                      text-xl md:text-2xl font-bold mb-2
                      text-slate-900 dark:text-white
                      group-hover:text-cyan-400 transition
                    "
                  >
                    {cert.title}
                  </h3>

                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {cert.date}
                  </p>
                </div>

                {/* Action */}
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-slate-700">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 text-sm font-semibold
                      text-cyan-500 hover:text-cyan-400 transition
                    "
                  >
                    View Certificate →
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

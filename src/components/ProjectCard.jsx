import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        group relative overflow-hidden rounded-3xl p-8
        border backdrop-blur-xl cursor-pointer
        shadow-xl hover:shadow-2xl
        bg-white/80 border-gray-200
        dark:bg-slate-900/80 dark:border-slate-700
        hover:border-cyan-400/60 dark:hover:border-cyan-400/50
      "
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 blur-xl animate-[shine_1.5s_linear]" />
      </div>

      {/* Image */}
      {project.image && (
        <div className="mb-6 overflow-hidden rounded-2xl h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="
        text-2xl lg:text-3xl font-black mb-4
        text-slate-900 dark:text-white
      ">
        {project.title}
      </h3>

      {/* Description */}
      <p className="
        mb-6 text-lg leading-relaxed
        text-slate-600 dark:text-slate-300
      ">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech?.map((tech, i) => (
          <span
            key={i}
            className="
              flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full
              border backdrop-blur-sm shadow
              bg-white/70 border-gray-200 text-slate-700
              dark:bg-slate-800/70 dark:border-slate-600 dark:text-slate-200
              hover:scale-105 transition
            "
          >
            <Code className="w-3 h-3" />
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 flex items-center justify-center gap-2
              px-6 py-4 rounded-2xl font-bold
              bg-gradient-to-r from-emerald-500 to-teal-600
              text-white shadow-lg
              hover:shadow-emerald-500/30 hover:-translate-y-1
              transition
            "
          >
            Live Demo
            <ExternalLink className="w-5 h-5" />
          </a>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 flex items-center justify-center gap-2
            px-6 py-4 rounded-2xl font-bold
            border shadow-lg
            bg-slate-100 text-slate-900 border-gray-300
            dark:bg-slate-800 dark:text-white dark:border-slate-600
            hover:-translate-y-1 transition
          "
        >
          View Code
          <Github className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

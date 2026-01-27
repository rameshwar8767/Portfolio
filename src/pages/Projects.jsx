import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState(["all"]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let filtered = projects;

    // 🔍 Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 🏷 Tech filter
    if (!activeFilters.includes("all")) {
      filtered = filtered.filter((p) =>
        p.tags?.some((tag) => activeFilters.includes(tag))
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, activeFilters]);

  const filters = ["all", "React", "Node.js", "Full-Stack", "MERN"];

  const handleFilterClick = (filter) => {
    if (filter === "all") {
      setActiveFilters(["all"]);
      return;
    }

    setActiveFilters((prev) => {
      const withoutAll = prev.filter((f) => f !== "all");

      if (withoutAll.includes(filter)) {
        const next = withoutAll.filter((f) => f !== filter);
        return next.length === 0 ? ["all"] : next;
      }

      return [...withoutAll, filter];
    });
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Handcrafted full-stack applications showcasing modern development practices
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 max-w-4xl mx-auto">

          {/* Search */}
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-cyan-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-3xl text-lg font-medium bg-white/80 border border-gray-200 dark:bg-slate-900/80 dark:border-slate-700 dark:text-white focus:ring-4 focus:ring-cyan-400/20 transition"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterClick(filter)}
                className={`px-6 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2 transition shadow-lg ${
                  activeFilters.includes(filter)
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-cyan-500/30"
                    : "bg-white/70 border border-gray-200 text-slate-700 hover:bg-white dark:bg-slate-900/60 dark:border-slate-700 dark:text-slate-300"
                }`}
              >
                <Filter className="w-4 h-4" />
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-32">
              <div className="text-7xl mb-6 text-slate-300 dark:text-slate-700">🔍</div>
              <h3 className="text-3xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                No projects found
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;

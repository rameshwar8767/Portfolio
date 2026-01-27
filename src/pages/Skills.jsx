import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Monitor, Server, Cloud } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "from-cyan-400 to-blue-500",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux", level: 80 },
      { name: "HTML / CSS", level: 95 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-indigo-500 to-purple-600",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 88 }
    ]
  },
  {
    title: "Programming",
    icon: Code,
    color: "from-emerald-500 to-teal-600",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "Vite", level: 88 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Vercel", level: 85 }
    ]
  }
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [progress, setProgress] = useState({});

  useEffect(() => {
    if (!inView) return;

    skills.forEach(skill => {
      skill.items.forEach((item, i) => {
        setTimeout(() => {
          setProgress(prev => ({
            ...prev,
            [`${skill.title}-${item.name}`]: item.level
          }));
        }, i * 120);
      });
    });
  }, [inView]);

  return (
    <section
      ref={ref}
      className="
        min-h-screen py-24 px-6
        bg-gradient-to-b from-gray-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white">
            Professional <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Technologies I work with regularly
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="
                relative p-8 rounded-3xl border backdrop-blur-xl
                bg-white/80 border-gray-200
                dark:bg-slate-900/80 dark:border-slate-700
                shadow-xl hover:shadow-2xl
                transition
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                >
                  <skill.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {skill.title}
                </h3>
              </div>

              {/* Progress */}
              <div className="space-y-6">
                {skill.items.map(item => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {item.name}
                      </span>
                      <span className="font-mono font-bold text-slate-600 dark:text-slate-400">
                        {progress[`${skill.title}-${item.name}`] || 0}%
                      </span>
                    </div>

                    <div className="h-3 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${progress[`${skill.title}-${item.name}`] || 0}%`
                        }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

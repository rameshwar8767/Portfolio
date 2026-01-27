import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br
        from-slate-100 to-slate-200
        dark:from-slate-950 dark:to-slate-900
        transition-colors duration-300
      "
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="
          w-16 h-16 rounded-full border-4
          border-cyan-400/20 border-t-cyan-500
          shadow-lg shadow-cyan-500/20
        "
      />
    </div>
  );
};

export default LoadingSpinner;

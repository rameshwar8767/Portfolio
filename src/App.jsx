import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

// Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center
                bg-gradient-to-br from-slate-100 to-slate-300
                dark:from-slate-950 dark:to-slate-900 transition-colors">

                <div className="text-center p-12 max-w-md
                  bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl
                  rounded-3xl border border-slate-200 dark:border-slate-700">

                  <h1 className="text-6xl font-black mb-6
                    bg-gradient-to-r from-red-400 to-orange-500
                    bg-clip-text text-transparent">
                    404
                  </h1>

                  <p className="text-xl mb-8 text-slate-600 dark:text-slate-400">
                    Page Not Found
                  </p>

                  <a
                    href="/"
                    className="inline-flex px-8 py-4 rounded-2xl
                      bg-gradient-to-r from-cyan-500 to-indigo-600
                      text-white font-bold shadow-xl
                      hover:-translate-y-1 transition-all"
                  >
                    ← Back to Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors">
          <Navbar />
          <ScrollToTop />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

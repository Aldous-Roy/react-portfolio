import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const App = () => {
  return (
    <motion.div
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300"
      initial={{ opacity: 0 }} // Start opacity
      animate={{ opacity: 1 }}  // End opacity (fade-in effect)
      exit={{ opacity: 0 }}     // Fade-out effect when leaving
      transition={{ duration: 1 }} // Duration of the animation
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
        <Contact />
      </div>
    </motion.div>
  );
};

export default App;
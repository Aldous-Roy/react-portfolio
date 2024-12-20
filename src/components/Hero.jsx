import React from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/Aldous.jpeg";
import { motion } from "framer-motion";

const Hero = () => (
  <div className="border-b border-neutral-900 pb-10 lg:mb-20">
    <div className="flex flex-wrap items-center">
      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6 lg:px-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      >
        <h1 className="text-5xl lg:text-7xl font-thin tracking-tight leading-tight mb-6">
          Aldous Roy
        </h1>
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl font-bold text-transparent mb-6">
          Full Stack Developer
        </span>
        <p className="text-base lg:text-lg max-w-lg text-justify leading-relaxed">
          {HERO_CONTENT}
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end px-6 lg:px-12"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
      >
        <img
          className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          src={profile}
          alt="Portrait of Aldous Roy, Full Stack Developer"
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  </div>
);

export default Hero;
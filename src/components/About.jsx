import React from "react";
import { motion } from "framer-motion";
import about_img from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <h2 className="my-20 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        {/* Image Section with Animation */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 1.2,
            delay: 0.5, // Delay for a smoother effect
          }}
        >
          <img
            src={about_img}
            alt="About Me"
            className="rounded-lg shadow-lg max-w-sm lg:max-w-md"
          />
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          className="w-full lg:w-1/2 lg:pl-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 30,
            duration: 1.2,
            delay: 0.3, // Staggered effect for text
          }}
        >
          <p className="my-2 max-w-xl py-6 text-lg leading-relaxed text-justify text-neutral-400">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
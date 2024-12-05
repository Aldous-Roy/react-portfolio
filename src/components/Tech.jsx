import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGithub } from "react-icons/si";
import { motion } from "framer-motion"; // Import Framer Motion

const Tech = () => (
  <div className="border-b border-neutral-800">
    <h2 className="my-10 text-center text-4xl font-bold">Technologies</h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
      {[
        { Icon: RiReactjsLine, color: "text-cyan-400" },
        { Icon: SiMongodb, color: "text-green-400" },
        { Icon: SiNodedotjs, color: "text-green-500" },
        { Icon: SiExpress, color: "text-gray-400" },
        { Icon: SiPostgresql, color: "text-blue-400" },
        { Icon: SiGithub, color: "text-gray-600" },
      ].map(({ Icon, color }, idx) => (
        <motion.div
          key={idx}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ opacity: 0, scale: 0.8 }}  // Start with opacity 0 and scale smaller
          animate={{ opacity: 1, scale: 1 }}    // Animate to opacity 1 and scale 1
          transition={{ duration: 0.5, delay: idx * 0.1 }} // Delay based on index for staggered animation
        >
          <Icon className={`text-7xl ${color}`} />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Tech;
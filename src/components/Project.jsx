import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">Projects</h2>
      <div>
        {PROJECTS.map((project, id) => (
          <motion.div
            key={id}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and y-position off-screen
            animate={{ opacity: 1, y: 0 }}   // Animate to opacity 1 and y-position 0
            transition={{ duration: 0.6, delay: id * 0.2 }} // Delay each project animation based on its index
          >
            <div className="w-full flex justify-center items-center lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-xl"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p>{project.description}</p>
              <div className="mt-2">
                {project.technologies.map((tech, id) => (
                  <span
                    key={id}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
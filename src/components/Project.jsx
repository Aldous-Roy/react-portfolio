import React from "react";
import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <h2 className="my-20 text-center text-4xl font-bold">Projects</h2>
      <div className="flex flex-col gap-10">
        {PROJECTS.map((project, id) => (
          <div
            key={id}
            className="flex flex-wrap items-center gap-6 lg:flex-nowrap lg:justify-center"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4 flex justify-center items-center">
              <img
                src={project.image}
                alt={`Project: ${project.title}`}
                width={150}
                height={150}
                className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-3/4 max-w-3xl">
              <h6 className="mb-2 text-xl font-semibold text-neutral-700">
                {project.title}
              </h6>
              <p className="mb-4 text-sm text-neutral-500 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 text-xs font-medium text-purple-800 shadow transition-colors hover:bg-purple-700 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
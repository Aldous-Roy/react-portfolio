import React from "react";
import about_img from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <h2 className="my-20 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img
            src={about_img}
            alt="About Me"
            className="rounded-lg shadow-lg max-w-sm lg:max-w-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <p className="my-2 max-w-xl py-6 text-lg leading-relaxed text-justify text-neutral-700">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
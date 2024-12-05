import React from "react";
import logo from "../assets/Aldous Roy.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="www.linkedin.com/in/aldousroy2004" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Aldous-Roy" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="text-black hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/aldous.roy/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="text-pink-500 hover:text-pink-700"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
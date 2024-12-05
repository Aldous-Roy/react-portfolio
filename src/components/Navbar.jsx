import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../assets/Aldous Roy.png";

const Navbar = () => {
  return (
    <nav className="mb-10 flex justify-between py-6">
      {/* Logo with Motion Animation */}
      <motion.div
        className="flex flex-shrink-0 items-center"
        initial={{ opacity: 0, x: -50 }} // Start position
        animate={{ opacity: 1, x: 0 }}   // End position
        transition={{ duration: 0.5 }}    // Duration of animation
      >
        <img
          className="mx-2 w-14"
          src={logo}
          alt="Aldous Roy Logo"
          aria-label="Aldous Roy Logo"
        />
      </motion.div>

      {/* Social Media Icons */}
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/aldousroy2004"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          whileHover={{ scale: 1.2 }} // Scale up on hover
          whileTap={{ scale: 0.9 }}  // Slightly scale down on tap
        >
          <FaLinkedin />
        </motion.a>
        
        <motion.a
          href="https://github.com/Aldous-Roy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-black hover:text-gray-800 transition-colors duration-300"
          whileHover={{ scale: 1.2 }} // Scale up on hover
          whileTap={{ scale: 0.9 }}  // Slightly scale down on tap
        >
          <FaGithub />
        </motion.a>
        
        <motion.a
          href="https://www.instagram.com/aldous.roy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
          whileHover={{ scale: 1.2 }} // Scale up on hover
          whileTap={{ scale: 0.9 }}  // Slightly scale down on tap
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
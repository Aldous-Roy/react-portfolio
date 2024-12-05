import React from "react";
import logo from "../assets/Aldous Roy.png";
import {FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
      </div>
    </nav>
  );
};

export default Navbar;

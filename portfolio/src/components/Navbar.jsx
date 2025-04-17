import React from "react";
import logo from "../assets/bucktooth-bill-favicon.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <Link to="https://www.linkedin.com/in/kristianallanos/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/llanosengineering" target="_blank">
          <FaGithub />
        </Link>
        <Link to="mailto:llanosengineering@gmail.com" target="_blank">
          <SiGmail />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import Input from "../Input.jsx";
import Button  from "../Button";
function Footer() {
  return (
    <footer className="bg-gray-500 p-4 w-full self-baseline border-slate-900 border-t-2 shadow-sm">
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-center">
          <Link
            to="/"
            className="text-gray-900 text-2xl font-bold  hover:text-black self-center"
          >
            Reso
          </Link>
          <div className="flex gap-4 mt-5 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <NavLink
            to={"/"}
            className="text-gray-900 text-lg font-semibold px-3 hover:text-black"
          >
            Home
          </NavLink>
          <NavLink
            to={"/"}
            className="text-gray-900 text-lg font-semibold px-3 hover:text-black"
          >
            About
          </NavLink>
          <NavLink
            to={"/"}
            className="text-gray-900 text-lg font-semibold px-3 hover:text-black"
          >
            Contact Us
          </NavLink>
        </div>
        <div>
          <Input
            label={"Email"}
            id={"emailforSubscribe"}
            placeholder={"name@example.com"}
            type={"email"}
            autoComplete={"email"}
          />
          <Button label={"Subscribe"} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-3 border-t-2">
        Copyright © 2025 Reso . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

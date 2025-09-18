import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "../components/ResponsiveMenu";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  Facebook,
  X,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  MessageCircle, // or PhoneCall
} from "lucide-react";

import logo from "../assets/logo/picsvg_download.svg";
import Modal from "./Modal";

export const Navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Cars", link: "/cars" },
  { id: 3, name: "About Us", link: "/about" },
  { id: 4, name: "Contact us", link: "/contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-80 shadow-lg transition-all duration-500 ease-in-out ${
        theme === "dark" ? "bg-black-800 text-white" : "text-gray-800"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`${
          theme === "dark"
            ? "bg-black-800/50 backdrop-blur-lg text-gray-300 border-gray-700"
            : " backdrop-blur-lg text-gray-800 border-orange-200"
        } hidden xl:flex justify-between items-center py-1 px-8 border-b transition-all duration-300 text-xs`}
      >
        {/* Contact Info - Compact */}
        <div
          className={`${
            theme === "dark"
              ? "bg-black-800/50 backdrop-blur-lg text-gray-300 border-gray-700"
              : "bg-orange-100  backdrop-blur-lg text-gray-800 border-orange-200"
          } flex justify-between items-center font-semibold tracking-wide rounded-md flex items-center space-x-4 py-0.2 px-8 border-b transition-all duration-300 text-xs hover:space-x-6 hover:py-1 hover:px-16 hover:scale-105 transform-gpu`}
        >
          <a
            href="tel:+9175064 94862"
            className="flex items-center space-x-1 hover:text-blue-500 transition duration-300"
          >
            <Phone className="text-blue-500 text-sm" />
            <span>+91 75064 94862</span>
          </a>
          <a
            href="mailto:info@rscarrentalgoa.com"
            className="flex items-center space-x-1 hover:text-red-500 transition duration-300"
          >
            <Mail className="text-red-500 text-sm" />
            <span>info@rscarrentalgoa.com</span>
          </a>
          <a
            href="https://wa.me/917506494862"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-green-500 transition duration-300"
          >
            <MessageCircle className="text-green-500 text-sm" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Marquee - Compact */}
        <div className="max-w-sm w-ful">
          <marquee
            behavior="scroll"
            direction="left"
            className={`${
              theme === "dark"
                ? "bg-black-700/50 text-gray-300 border border-gray-700"
                : "bg-orange-100 px-6  text-gray-800 border border-orange-300"
            } flex justify-between items-center font-semibold tracking-wide rounded-md flex items-center space-x-4 py-0.2 px-8 border-b transition-all duration-300 text-xs hover:py-1 hover:px-[200px] hover:scale-105 transform-gpu`}
          >
            🚗 Book Now! Best & cheap Prices in Goa | Min 2 Days Prior Booking | Call: +91
            7506494862 🚗
          </marquee>
        </div>

        {/* Social Media - Compact */}
        <div
          className={`${
            theme === "dark"
              ? "bg-black-700/50 text-gray-300 border border-gray-700"
              : "bg-orange-100 px-4 text-gray-800 border border-orange-300"
          } flex justify-between items-center font-semibold tracking-wide rounded-md flex items-center space-x-6 py-0.2 px-8 border-b transition-all duration-300 text-xs hover:space-x-8 hover:py-1 hover:px-16 hover:scale-105 transform-gpu`}
        >
          {[
            { icon: FaFacebook, color: "text-blue-600" },
            { icon: X, color: "text-black-400" },
            { icon: FaInstagram, color: "text-pink-500" },
            { icon: FaYoutube, color: "text-red-600" },
          ].map(({ icon: Icon, color }, index) => (
            <a
              key={index}
              href="#"
              className={`${color} text-sm rounded-full hover:scale-105 transition duration-300`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}

      <div className="flex justify-between items-center py-4 px-6 border-b border-gray-300">
        {/* Logo */}
        <div
          data-aos="zoom-in"
          className="transition duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="RS Goa Car Rental Logo"
            className="max-w-[100px] md:max-w-[100px] h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {Navlinks.map(({ id, name, link }) => (
            <NavLink
              key={id}
              to={link}
              className={`text-lg font-semibold tracking-wide transition-all duration-300 px-3 py-1 rounded-lg ${
                location.pathname === link
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "hover:text-orange-500 hover:border-orange-500 hover:border-b-2"
              }`}
            >
              {name}
            </NavLink>
          ))}

          {/* Theme Toggle Button */}
          {theme === "dark" ? (
            <BiSolidSun
              onClick={() => setTheme("light")}
              className="text-2xl cursor-pointer hover:text-gray-400 transition duration-300"
            />
          ) : (
            <BiSolidMoon
              onClick={() => setTheme("dark")}
              className="text-2xl cursor-pointer hover:text-gray-400 transition duration-300"
            />
          )}

          {/* Book Now Button */}
          <button
            onClick={() => setModalOpen(true)}
            className={`bg-gradient-to-r cursor-pointer from-orange-500 to-red-500 text-white px-6 py-1 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl`}
          >
            Book Now
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </nav>

        {/* Mobile View (Hamburger Menu & Theme Toggle) */}
        <div className="flex items-center gap-4 md:hidden">
          {theme === "dark" ? (
            <BiSolidSun
              onClick={() => setTheme("light")}
              className="text-2xl cursor-pointer transition duration-300 hover:text-yellow-400"
            />
          ) : (
            <BiSolidMoon
              onClick={() => setTheme("dark")}
              className="text-2xl cursor-pointer transition duration-300 hover:text-gray-600"
            />
          )}

          {/* Hamburger Menu */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all duration-300"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all duration-300"
              size={30}
            />
          )}
          {showMenu && (
            <ResponsiveMenu theme={theme} showMenu={showMenu} toggleMenu={toggleMenu} />
          )}
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Navbar;

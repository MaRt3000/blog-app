import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header bg-white shadow-lg transition-all duration-300 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="logo hidden md:block lg:block">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-y-4 z-10 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0  bg-white md:w-auto md:bg-transparent shadow-md md:shadow-none px-6 md:px-0 py-4 md:py-0`}
        >
          {nav.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        {/* User Section */}
        <div className="account md:flex items-center space-x-4">
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;

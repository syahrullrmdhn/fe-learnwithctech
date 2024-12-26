import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">learnwithctech_</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            Series
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            Articles
          </a>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
            Register
          </button>
        </nav>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`fixed inset-0 z-30 bg-gray-900 text-white transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex flex-col h-full">
            {/* Header dalam Menu */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                className="text-gray-400 hover:text-white focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col flex-grow items-center justify-center space-y-6 text-lg">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:underline"
                >
                  Series
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:underline"
                >
                  Articles
                </a>
              </li>
              <li>
                <button className="w-full px-6 py-3 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Login
                </button>
              </li>
              <li>
                <button className="w-full px-6 py-3 text-center bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
                  Register
                </button>
              </li>
            </ul>

            {/* Footer dalam Menu */}
            <div className="px-6 py-4 border-t border-gray-700 text-center text-sm">
              <p>© 2024 Learn With C-Tech. All rights reserved.</p>
            </div>
          </div>
        </nav>

        {/* Overlay Background */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;

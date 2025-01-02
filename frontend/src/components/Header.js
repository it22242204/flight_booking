import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="flex justify-between items-center px-6 py-4 relative">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          FlightFinder
        </div>

        {/* Hamburger Menu for Mobile - Positioned on the right side */}
        <button
          className="md:hidden text-white hover:text-purple-500 focus:outline-none absolute right-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </div>
        </button>

        {/* Navigation and Login Menu */}
        <div
          className={`md:flex md:space-x-4 items-center absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent z-20 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Links */}
          <ul className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
            <li
              className="hover:text-purple-500 cursor-pointer py-2 md:py-0"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li className="hover:text-purple-500 cursor-pointer py-2 md:py-0">
              About Us
            </li>
            <li className="hover:text-purple-500 cursor-pointer py-2 md:py-0">
              Agents
            </li>
            <li className="hover:text-purple-500 cursor-pointer py-2 md:py-0">
              Blog
            </li>
          </ul>

          {/* Buttons for Mobile - Dropdown */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 text-center md:text-left mt-4 md:mt-0">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 px-6 py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105">
              Sign In
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;

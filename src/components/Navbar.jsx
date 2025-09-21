import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import slogo from "../assets/favicon.png";
import wlogo from "../assets/favicon-w.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  // Apply theme to <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-[#020202e1] shadow-md fixed w-full z-20 top-0 left-0 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex gap-2 text-2xl font-bold text-blue-600 cursor-pointer items-center"
        >
          <img src={slogo} alt="StudyE Logo" className="h-6 w-6 dark:hidden" />
          StudyE UI
          <img
            src={wlogo}
            alt="StudyE Logo Dark"
            className="h-6 w-6 hidden dark:block"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <Link to="/" className="cursor-pointer hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/components"
              className="cursor-pointer hover:text-blue-600"
            >
              Components
            </Link>
          </li>
          <li>
            <Link to="/explore-ui" onClick={() => setIsOpen(false)}>
              Explore UI
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#020202e1] shadow-lg">
          <ul className="flex flex-col space-y-4 p-6 text-gray-700 dark:text-gray-200 font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/components" onClick={() => setIsOpen(false)}>
                Components
              </Link>
            </li>
            <li>
              <Link to="/explore-ui" onClick={() => setIsOpen(false)}>
                Explore UI
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

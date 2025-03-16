import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="font-bold text-2xl tracking-wider text-indigo-600 dark:text-indigo-400 font-display"
            >
              CodeMamba
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#about"
                className="px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
              >
                About
              </a>
              <a
                href="#skills"
                className="px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
              >
                Projects
              </a>
              <a
                href="#socials"
                className="px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
              >
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-gray-800">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
            >
              Projects
            </a>
            <a
              href="#socials"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors dark:text-gray-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

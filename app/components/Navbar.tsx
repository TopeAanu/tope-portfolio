"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Determine if we're in dark mode
  const isDarkMode = mounted && theme === "dark";

  return (
    <nav className={`${styles.navbar} ${isDarkMode ? styles.navbar_dark : ""}`}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div>
            <a
              href="#"
              className={`${styles.logo} ${isDarkMode ? styles.logo_dark : ""}`}
            >
              CodeMamba
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <a
              href="#about"
              className={`${styles.navLink} ${
                isDarkMode ? styles.navLink_dark : ""
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`${styles.navLink} ${
                isDarkMode ? styles.navLink_dark : ""
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`${styles.navLink} ${
                isDarkMode ? styles.navLink_dark : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#socials"
              className={`${styles.navLink} ${
                isDarkMode ? styles.navLink_dark : ""
              }`}
            >
              Contact
            </a>

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`${styles.themeButton} ${
                  isDarkMode ? styles.themeButton_dark : ""
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <FaSun className="h-5 w-5" />
                ) : (
                  <FaMoon className="h-5 w-5" />
                )}
              </button>
            )}
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className={styles.mobileMenu}>
            {/* Theme Toggle Button - Mobile */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`${styles.themeButton} ${
                  isDarkMode ? styles.themeButton_dark : ""
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <FaSun className="h-5 w-5" />
                ) : (
                  <FaMoon className="h-5 w-5" />
                )}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.themeButton} ${
                isDarkMode ? styles.themeButton_dark : ""
              }`}
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
        <div className={styles.mobileNavLinks}>
          <div>
            <a
              href="#about"
              className={`${styles.mobileNavLink} ${
                isDarkMode ? styles.mobileNavLink_dark : ""
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`${styles.mobileNavLink} ${
                isDarkMode ? styles.mobileNavLink_dark : ""
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`${styles.mobileNavLink} ${
                isDarkMode ? styles.mobileNavLink_dark : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#socials"
              className={`${styles.mobileNavLink} ${
                isDarkMode ? styles.mobileNavLink_dark : ""
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "next-themes";
import styles from "./SocialsSection.module.css";

export default function SocialsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we're in dark mode
  const isDarkMode = mounted && theme === "dark";

  return (
    <section
      id="socials"
      className={`${styles.socialsSection} ${
        isDarkMode ? styles.socialsSection_dark : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/TopeAanu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div
              className={`${styles.iconContainer} ${
                isDarkMode ? styles.iconContainer_dark : ""
              }`}
            >
              <FaGithub className={styles.icon} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/tope-fasasi-6280a1245/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div
              className={`${styles.iconContainer} ${
                isDarkMode ? styles.iconContainer_dark : ""
              }`}
            >
              <FaLinkedin className={styles.icon} />
            </div>
          </a>
          <a
            href="https://x.com/tope_fasasi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div
              className={`${styles.iconContainer} ${
                isDarkMode ? styles.iconContainer_dark : ""
              }`}
            >
              <FaXTwitter className={styles.icon} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

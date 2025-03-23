// components/AboutSection.tsx
"use client";

import styles from "./AboutSection.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we're in dark mode
  const isDarkMode = mounted && theme === "dark";

  return (
    <section
      id="about"
      className={`${styles.section} ${isDarkMode ? styles.sectionDark : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h2
              className={`${styles.heading} ${
                isDarkMode ? styles.headingDark : ""
              }`}
            >
              About Me
            </h2>
            <p
              className={`${styles.paragraph} ${
                isDarkMode ? styles.paragraphDark : ""
              }`}
            >
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I specialize in building responsive, performant web
              applications using React, Next.js, and Node.js.
            </p>
            <p
              className={`${styles.paragraph} ${
                isDarkMode ? styles.paragraphDark : ""
              }`}
            >
              With over 5 years of experience in software development, I've
              worked on various projects ranging from e-commerce platforms to
              complex enterprise applications.
            </p>
            <p
              className={`${styles.lastParagraph} ${
                isDarkMode ? styles.lastParagraphDark : ""
              }`}
            >
              I'm constantly learning and exploring new technologies to stay at
              the cutting edge of web development.
            </p>
            <div className={styles.buttonContainer}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${
                  isDarkMode ? styles.buttonDark : ""
                }`}
              >
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

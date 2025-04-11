// components/AboutSection.tsx
"use client";
import styles from "./AboutSection.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme instead of theme to get the actual applied theme
  const isDarkMode = mounted && (resolvedTheme === "dark" || theme === "dark");

  // Don't render content until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className={styles.section}></div>; // Empty placeholder
  }

  return (
    <section
      id="about"
      className={`${styles.section} ${isDarkMode ? styles.sectionDark : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            {/* Added Image Container */}
            <div className={styles.imageContainer}>
              <Image
                src="/profilepic.jpg"
                alt="Profile picture"
                width={200}
                height={200}
                className={styles.profileImage}
              />
            </div>

            <h2
              className={`${styles.heading} ${
                isDarkMode ? styles.headingDark : ""
              }`}
            >
              Hello! 👋
            </h2>
            <p
              className={`${styles.paragraph} ${
                isDarkMode ? styles.paragraphDark : ""
              }`}
            >
              I'm Tope, a software developer and technical writer passionate
              about building practical web applications that solve real-world
              problems using modern web technologies like React.js, Next.js,
              TypeScript, JavaScript (ES6+), etc., and crafting
              easy-to-understand technical content. I'm always available to
              collaborate and contribute to open source.
            </p>
            <div className={styles.buttonContainer}>
              <a
                href="https://docs.google.com/document/d/1m5sLo1QWkx64iqrlBhCz_OM-lbWUPmuQohE6zUeGBzs/edit?usp=sharing"
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

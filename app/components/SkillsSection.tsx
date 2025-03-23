// components/SkillsSection.tsx
"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./SkillsSection.module.css";

interface SkillGroup {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
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
      id="skills"
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
              My Skills
            </h2>
            <div className={styles.skillsGrid}>
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className={`${styles.skillCard} ${
                    isDarkMode ? styles.skillCardDark : ""
                  }`}
                >
                  <h3
                    className={`${styles.skillCategory} ${
                      isDarkMode ? styles.skillCategoryDark : ""
                    }`}
                  >
                    {skillGroup.category}
                  </h3>
                  <div className={styles.skillsContainer}>
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className={`${styles.skillBadge} ${
                          isDarkMode ? styles.skillBadgeDark : ""
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

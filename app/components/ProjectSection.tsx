"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Project } from "./models/types";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
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
      id="projects"
      className={`
        ${styles.projectsSection}
        ${isDarkMode ? styles.projectsSection_dark : ""}
      `}
    >
      <div className={styles.container}>
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionContent}>
            <h2
              className={`
                ${styles.sectionTitle}
                ${isDarkMode ? styles.sectionTitle_dark : ""}
              `}
            >
              Projects
            </h2>
            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Project } from "./models/types";
import styles from "./ProjectSection.module.css";

type ProjectCardProps = {
  project: Project;
  isDarkMode: boolean;
};

export default function ProjectCard({ project, isDarkMode }: ProjectCardProps) {
  return (
    <div
      className={`
        ${styles.projectCard}
        ${isDarkMode ? styles.projectCard_dark : ""}
      `}
    >
      <div className={styles.projectImageContainer}>
        <div className={styles.projectImage}>
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
            </svg>
          )}
        </div>

        {/* Overlay that appears on hover */}
        <div className={styles.projectOverlay}>
          <div className={styles.overlayContent}>
            <h3 className={styles.overlayTitle}>{project.title}</h3>
            <p className={styles.overlayDescription}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.overlayTechTag}>
                  {tech}
                </span>
              ))}
            </div>
            <a href="#" className={styles.overlayButton}>
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Visible content when not hovering */}
      {/* <div className={styles.projectContent}>
        <h3
          className={`
            ${styles.projectTitle}
            ${isDarkMode ? styles.projectTitle_dark : ""}
          `}
        >
          {project.title}
        </h3>
        <p
          className={`
            ${styles.projectDescription}
            ${isDarkMode ? styles.projectDescription_dark : ""}
          `}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`
                ${styles.techTag}
                ${isDarkMode ? styles.techTag_dark : ""}
              `}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="#"
          className={`
            ${styles.projectLink}
            ${isDarkMode ? styles.projectLink_dark : ""}
          `}
        >
          View Project
        </a>
      </div> */}
    </div>
  );
}

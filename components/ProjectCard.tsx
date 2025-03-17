// components/ProjectCard.tsx
import { Project } from "./models/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
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
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="text-gray-600 font-medium hover:text-gray-800 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

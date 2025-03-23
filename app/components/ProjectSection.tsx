// components/ProjectSection.tsx
import ProjectCard from "./ProjectCard";

// Import the Project type or redefine it
interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

interface ProjectSectionProps {
  projects: Project[];
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
  // Add defensive check
  if (!projects || !Array.isArray(projects)) {
    return <div>No projects to display</div>;
  }

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

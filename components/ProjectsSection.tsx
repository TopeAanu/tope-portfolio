// components/ProjectsSection.tsx
import { Project } from "./models/types";
import ProjectCard from "./ProjectCard";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/images/ecommerce-project.jpg",
    },
    {
      id: 2,
      title: "Weather Application",
      description:
        "Real-time weather application using weather API with location tracking.",
      technologies: ["Next.js", "Tailwind CSS", "OpenWeather API"],
      imageUrl: "/images/ecommerce-project.jpg",
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates.",
      technologies: ["TypeScript", "React", "Firebase", "Material UI"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
                  </svg>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded text-xs transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

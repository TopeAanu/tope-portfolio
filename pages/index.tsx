import { useState } from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Define project type for type safety
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Weather Application",
      description: "Real-time weather application using weather API with location tracking.",
      technologies: ["Next.js", "Tailwind CSS", "OpenWeather API"],
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates.",
      technologies: ["TypeScript", "React", "Firebase", "Material UI"],
    },
  ];

  // Skills data
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "GraphQL"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "GitHub Actions"] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>CodeMamba | Portfolio</title>
        <meta name="description" content="CodeMamba's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="font-bold text-2xl tracking-wider text-indigo-600 font-display">
                CodeMamba
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#about" className="px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">About</a>
                <a href="#skills" className="px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Skills</a>
                <a href="#projects" className="px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Projects</a>
                <a href="#socials" className="px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">About</a>
              <a href="#skills" className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">Skills</a>
              <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">Projects</a>
              <a href="#socials" className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm CodeMamba</h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">Full-Stack Developer specializing in modern web technologies</p>
            <a href="#projects" className="bg-white text-indigo-600 font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
              View My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-lg mb-4">
                  I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in building responsive, performant web applications using React, Next.js, and Node.js.
                </p>
                <p className="text-lg mb-4">
                  With over 5 years of experience in software development, I've worked on various projects ranging from e-commerce platforms to complex enterprise applications.
                </p>
                <p className="text-lg">
                  I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
                      </svg>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Socials Section */}
        <section id="socials" className="py-20 bg-indigo-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Connect With Me</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-16 h-16 bg-white text-indigo-600 rounded-full flex items-center justify-center mb-2">
                  <FaGithub className="w-8 h-8" />
                </div>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-16 h-16 bg-white text-indigo-600 rounded-full flex items-center justify-center mb-2">
                  <FaLinkedin className="w-8 h-8" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-16 h-16 bg-white text-indigo-600 rounded-full flex items-center justify-center mb-2">
                  <FaTwitter className="w-8 h-8" />
                </div>
                <span>Twitter / X</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 CodeMamba. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#about" className="hover:text-indigo-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a>
            <a href="#socials" className="hover:text-indigo-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
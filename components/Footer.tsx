export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-2">&copy; 2025 CodeMamba. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#about" className="hover:text-indigo-300 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-300 transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#socials"
            className="hover:text-indigo-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

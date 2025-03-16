import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Socials() {
  return (
    <section
      id="socials"
      className="py-20 bg-indigo-600 dark:bg-indigo-800 text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Connect With Me</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 bg-white text-indigo-600 dark:text-indigo-800 rounded-full flex items-center justify-center mb-2">
              <FaGithub className="w-8 h-8" />
            </div>
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 bg-white text-indigo-600 dark:text-indigo-800 rounded-full flex items-center justify-center mb-2">
              <FaLinkedin className="w-8 h-8" />
            </div>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 bg-white text-indigo-600 dark:text-indigo-800 rounded-full flex items-center justify-center mb-2">
              <FaTwitter className="w-8 h-8" />
            </div>
            <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </section>
  );
}

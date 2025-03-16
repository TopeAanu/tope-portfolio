// components/SocialsSection.tsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function SocialsSection() {
  return (
    <section id="socials" className="py-20 text-gray-500">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* <h2 className="text-3xl font-bold mb-12">Connect With Me</h2> */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 bg-white text-black-600 rounded-full flex items-center justify-center mb-2">
              <FaGithub className="w-8 h-8" />
            </div>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center mb-2">
              <FaLinkedin className="w-8 h-8" />
            </div>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 bg-white text-black-600 rounded-full flex items-center justify-center mb-2">
              <FaX className="w-8 h-8" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// components/SocialsSection.tsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

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
            <div className="w-10 h-10 bg-white text-black-600 rounded-full flex items-center justify-center mb-2">
              <FaGithub className="w-5 h-5" />
            </div>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-white text-gray-600 rounded-full flex items-center justify-center mb-2">
              <FaLinkedin className="w-5 h-5" />
            </div>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-white text-black-600 rounded-full flex items-center justify-center mb-2">
              <FaXTwitter className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

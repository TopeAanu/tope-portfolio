// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 relative">
            <h2 className="text-3xl font-bold mb-12">About Me</h2>
            <p className="text-lg mb-4">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I specialize in building responsive, performant web
              applications using React, Next.js, and Node.js.
            </p>
            <p className="text-lg mb-4">
              With over 5 years of experience in software development, I've
              worked on various projects ranging from e-commerce platforms to
              complex enterprise applications.
            </p>
            <p className="text-lg mb-8">
              I'm constantly learning and exploring new technologies to stay at
              the cutting edge of web development.
            </p>
            <div className="flex justify-end">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 inline-flex items-center"
              >
                <span>Resume</span>
                {/* <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

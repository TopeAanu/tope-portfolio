// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
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
            <p className="text-lg">
              I'm constantly learning and exploring new technologies to stay at
              the cutting edge of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Vue",
    "JavaScript (ES6+)",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
    "HTML5 & CSS3",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "FastAPI",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Redis",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m a passionate <strong>Full‑Stack Developer</strong> with
              expertise in modern frontend frameworks and scalable backend
              systems. I focus on building performant, accessible, and
              user‑friendly applications for global audiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

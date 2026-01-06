import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Delivery System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Food Delivery System</h3>
              <p className="text-gray-400 mb-4">
                Complete food delivery platform with responsive frontend and RESTful backend APIs.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "Axios", "Vite"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express", "MongoDB", "JWT"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://food-delivery-38i7.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                Live Preview →
              </a>
            </div>

            {/* Food Ordering App */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Food Ordering App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack food ordering system with product listings, cart management, and secure checkout flow.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Netlify"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://food-ordering-app-junaed.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                Live Preview →
              </a>
            </div>

            {/* Food Delivery App (Vercel) */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Food Delivery App (Vercel)</h3>
              <p className="text-gray-400 mb-4">
                Deployment of the food delivery frontend, optimized for Vercel hosting with fast builds and CDN.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "Vercel"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://food-delivery-nine-hazel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                Live Preview →
              </a>
            </div>

            {/* GearGrid */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">GearGrid</h3>
              <p className="text-gray-400 mb-4">
                E-commerce style app showcasing product grids, filtering, and responsive design for modern shopping experiences.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "TailwindCSS", "Vercel"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://geargrid-eight.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                Live Preview →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

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
            {/* EverGreen Clinic */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">EverGreen Clinic</h3>
              <p className="text-gray-400 mb-4">
                Healthcare management platform with patient booking, doctor dashboards, admin controls, and accessibility-focused UI refinement.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React 19","Next.js 15","TailwindCSS","Axios","Redux Toolkit","Clerk","Vercel"].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">{tech}</span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Express 5","MongoDB","Mongoose","JWT","Cloudinary","Multer","bcryptjs"].map((tech) => (
                  <span key={tech} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition">{tech}</span>
                ))}
              </div>

              <div className="space-y-2 my-4">
                <a href="https://ever-green-red-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors block">
                  EverGreen Main →
                </a>
                <a href="https://ever-green-lilac.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors block">
                  Admin / Doctor Dashboard →
                </a>
              </div>

              <h4 className="text-sm font-semibold text-red-400 mb-2">Demo video</h4>
              <div className="aspect-video mt-2">
                <iframe
                  src="https://www.youtube.com/embed/J4nj9swt7Bs?si=O5CVoL9SJS0rv5PS"
                  title="EverGreen Clinic Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* GearGrid */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">GearGrid</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce app with product grids, filtering, authentication, media uploads, and responsive design for modern shopping experiences.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js 15","React 19","JavaScript","TailwindCSS","Axios","Clerk","Redux Toolkit","Vercel"].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">{tech}</span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Express 5","MongoDB","Mongoose","Inngest","Cloudinary","JWT"].map((tech) => (
                  <span key={tech} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition">{tech}</span>
                ))}
              </div>

              <a href="https://geargrid-eight.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4 block">
                Live Preview →
              </a>

              <h4 className="text-sm font-semibold text-red-400 mb-2">Demo video</h4>
              <div className="aspect-video mt-2">
                <iframe
                  src="https://www.youtube.com/embed/R9yLKyVkS-Y?si=xUD8dNUT0U5E04tF"
                  title="GearGrid Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Food Delivery Platform (merged deployments) */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Food Delivery Platform</h3>
              <p className="text-gray-400 mb-4">
                Complete food delivery solution with responsive frontend, secure authentication, real-time order tracking, media uploads, and RESTful backend APIs. Deployed to multiple platforms for redundancy and performance.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React 19","Vite","TailwindCSS","Axios","Redux Toolkit","Firebase","Vercel"].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">{tech}</span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js","Express 5","MongoDB","Mongoose","JWT","bcryptjs","Cloudinary","Multer","Nodemailer","Socket.io"].map((tech) => (
                  <span key={tech} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition">{tech}</span>
                ))}
              </div>

              <div className="space-y-2 my-4">
                <a href="https://food-delivery-38i7.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors block">
                  Live Preview (Render) →
                </a>
                <a href="https://food-delivery-nine-hazel.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors block">
                  Live Preview (Vercel) →
                </a>
              </div>

              <h4 className="text-sm font-semibold text-red-400 mb-2">Demo video</h4>
              <div className="aspect-video mt-2">
                <iframe
                  src="https://www.youtube.com/embed/rGgPFuePOs8?si=iKhyw7EZyXlQZaSS"
                  title="Food Delivery Platform Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

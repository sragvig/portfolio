import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import PageTitle from "../../components/layout/PageTitle";
import ProjectCard from "../../components/projects/ProjectCard";

import projects from "../../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");
  // Store the active hackathon project data when clicked
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.type.includes(filter);
  });

  return (
    <section className="relative min-h-screen w-full px-16 py-24">
      <PageTitle>Projects</PageTitle>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {["All", "SWE", "PM"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`
              px-6 py-2 transition
              ${
                filter === category
                  ? "bg-white text-black"
                  : "border border-white/20 hover:bg-white hover:text-black"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="flex flex-col gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <ProjectCard project={project} />

            {/* Tailwind animate-bounce Badge */}
            {project.hackathon && (
              <button
                onClick={() => setSelectedHackathon(project)}
                className="
                  animate-bounce
                  absolute top-5 right-5
                  px-4 py-2 rounded-full
                  bg-amber-500/20 border border-amber-500/40
                  text-amber-300 text-xs font-medium backdrop-blur-md
                  hover:bg-amber-500/30 transition-all duration-300
                  cursor-pointer flex items-center gap-1.5 shadow-lg z-10
                "
              >
                <span>🏆</span> Hackathon Winner!
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Dynamic Hackathon Details Modal */}
      {selectedHackathon && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 w-[450px] relative shadow-2xl">
            <button
              onClick={() => setSelectedHackathon(null)}
              className="absolute right-5 top-5 text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🏆</span>
              <h2 className="text-2xl font-bold">Hackathon Details</h2>
            </div>

            <p className="text-xs text-amber-400 font-medium mb-6 uppercase tracking-wider">
              {selectedHackathon.title}
            </p>

            <div className="space-y-4 text-gray-300">
              <div>
                <span className="text-xs text-gray-500 block uppercase tracking-wider">
                  Hackathon
                </span>
                <p className="font-medium text-white text-lg">
                  {selectedHackathon.hackathon.name}
                </p>
              </div>

              <div>
                <span className="text-xs text-gray-500 block uppercase tracking-wider">
                  Date
                </span>
                <p className="font-medium text-white">
                  {selectedHackathon.hackathon.date}
                </p>
              </div>

              <div>
                <span className="text-xs text-gray-500 block uppercase tracking-wider">
                  Award
                </span>
                <p className="font-medium text-amber-300">
                  {selectedHackathon.hackathon.award}
                </p>
              </div>

              {selectedHackathon.hackathon.teamMembers?.length > 0 && (
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider">
                    Team Members
                  </span>
                  <p className="font-medium text-white">
                    {selectedHackathon.hackathon.teamMembers.join(", ")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedHackathon(null)}
                className="px-5 py-2 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-24 right-10 px-5 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md hover:bg-black/60 transition"
      >
        ↑ Top
      </button>
    </section>
  );
}

export default Projects;
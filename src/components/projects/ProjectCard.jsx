import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div
      className="
        flex
        gap-8
        items-center
        rounded-3xl
        border border-white/10
        bg-white/5
        p-6
        hover:bg-white/10
        transition
      "
    >
      {/* Media */}
      <div className="w-80 flex-shrink-0">
        {project.media.type === "image" && (
          <img
            src={project.media.src}
            alt={project.title}
            className="
              w-full
              h-56
              object-cover
              rounded-2xl
            "
          />
        )}
      </div>

      {/* Right Side */}
      <div className="flex-1">
        {/* Labels */}
        <div className="flex gap-2 mb-4">
          {project.type.map((tag) => (
            <span
              key={tag}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                border
                border-white/20
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-3xl font-semibold">
          {project.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {project.date}
        </p>

        <p className="text-gray-300 mt-1 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
        <h3 className="font-medium">
            Tech Stack:
        </h3>

        {project.tech.map((item) => (
            <span
            key={item}
            className="text-sm text-gray-400"
            >
            {item}
            </span>
        ))}
        </div>


        {/* Links */}
        <div className="flex gap-3 mt-4">

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-2
                rounded-full
                bg-white
                text-black
                hover:bg-gray-200
                transition
              "
            >
              <span className="flex items-center gap-2">
                GitHub
                <ExternalLink size={16} />
              </span>
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-2
                rounded-full
                border
                border-white/20
                hover:bg-white
                hover:text-black
                transition
              "
            >
              <span className="flex items-center gap-2">
                Demo
                <ExternalLink size={16} />
              </span>
            </a>
          )}

          {project.links.slides && (
            <a
              href={project.links.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5
                py-2
                rounded-full
                border
                border-white/20
                hover:bg-white
                hover:text-black
                transition
              "
            >
              <span className="flex items-center gap-2">
                Slides
                <ExternalLink size={16} />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
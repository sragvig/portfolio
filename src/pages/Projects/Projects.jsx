import { useState } from "react";
import { motion } from "framer-motion";

import PageTitle from "../../components/layout/PageTitle";
import ProjectCard from "../../components/projects/ProjectCard";

import projects from "../../data/projects";


function Projects() {

  const [filter, setFilter] = useState("All");


  const filteredProjects = projects.filter((project) => {

    if (filter === "All") {
      return true;
    }

    return project.type.includes(filter);

  });



  return (

    <section className="relative min-h-screen w-full px-16 py-24">


      <PageTitle>
        Projects
      </PageTitle>



      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">


        {["All", "SWE", "PM"].map((category)=>(

          <button

            key={category}

            onClick={() => setFilter(category)}

            className={`
              px-6
              py-2
              rounded-full
              transition

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
      <motion.div

        layout

        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          max-w-6xl
          mx-auto
        "

      >


        {
          filteredProjects.map((project)=>(

            <motion.div

              key={project.id}

              layout

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.4
              }}

            >

              <ProjectCard project={project}/>

            </motion.div>


          ))
        }


      </motion.div>





      {/* Back to Top */}
      <button

        onClick={() =>
          window.scrollTo({
            top:0,
            behavior:"smooth"
          })
        }

        className="
          fixed
          bottom-24
          right-10
          px-5
          py-3
          rounded-full
          border
          border-white/20
          bg-black/40
          backdrop-blur-md
        "

      >

        ↑ Top

      </button>



    </section>

  );

}


export default Projects;
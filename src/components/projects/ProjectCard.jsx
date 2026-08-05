function ProjectCard({ project }) {


  return (

    <div className="
      rounded-3xl
      border border-white/10
      bg-white/5
      overflow-hidden
      p-6
      hover:bg-white/10
      transition
    ">


      {/* Media */}
      {
        project.media.type === "image" && (

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

        )
      }





      <div className="mt-6">


        {/* Labels */}

        <div className="flex gap-2 mb-4">

          {
            project.type.map((tag)=>(

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

            ))
          }

        </div>





        <h2 className="text-3xl font-semibold">

          {project.title}

        </h2>



        <p className="text-sm text-gray-500 mt-2">

          {project.date}

        </p>




        <p className="text-gray-300 mt-4 leading-relaxed">

          {project.description}

        </p>





        {/* Tech Stack */}

        <h3 className="mt-6 font-medium">

          Tech Stack

        </h3>


        <div className="flex flex-wrap gap-2 mt-2">

          {
            project.tech.map((item)=>(

              <span

                key={item}

                className="
                  text-sm
                  text-gray-400
                "

              >

                #{item}

              </span>

            ))
          }

        </div>





        {/* Components */}

        <h3 className="mt-6 font-medium">

          Components

        </h3>


        <ul className="text-gray-400 mt-2 space-y-1">

          {
            project.components.map((item)=>(

              <li key={item}>
                • {item}
              </li>

            ))
          }

        </ul>





        {/* Links */}

        <div className="flex gap-3 mt-8">


          {
            project.links.github && (

              <a

                href={project.links.github}

                target="_blank"

                className="
                  px-5
                  py-2
                  rounded-full
                  border
                  border-white/20
                "

              >

                GitHub

              </a>

            )
          }



          {
            project.links.demo && (

              <a

                href={project.links.demo}

                target="_blank"

                className="
                  px-5
                  py-2
                  rounded-full
                  bg-white
                  text-black
                "

              >

                Demo

              </a>

            )
          }



          {
            project.links.slides && (

              <a

                href={project.links.slides}

                target="_blank"

                className="
                  px-5
                  py-2
                  rounded-full
                  border
                  border-white/20
                "

              >

                Slides

              </a>

            )
          }



        </div>


      </div>


    </div>

  );

}


export default ProjectCard;
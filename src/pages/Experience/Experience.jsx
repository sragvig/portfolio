import { useState } from "react";
import { motion } from "framer-motion";

import PageTitle from "../../components/layout/PageTitle";
import ExperienceCard from "../../components/experience/ExperienceCard";

import work from "../../data/work";


function Experience() {

  const [filter, setFilter] = useState("All");



  const filteredExperience = work.filter((experience) => {

    if (filter === "All") {
      return true;
    }

    return experience.type.includes(filter);

  });



  return (

    <section className="relative min-h-screen w-full px-16 py-24">


      <PageTitle>
        Work Experience
      </PageTitle>



      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">


        {
          ["All", "SWE", "PM"].map((category)=>(

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

          ))
        }


      </div>





      {/* Experience Cards */}
      <motion.div

        layout

        className="
          max-w-5xl
          mx-auto
          space-y-8
        "

      >


        {
          filteredExperience.map((experience)=>(

            <motion.div

              key={experience.id}

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

              <ExperienceCard experience={experience}/>

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


export default Experience;
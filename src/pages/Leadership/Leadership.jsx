import { useState } from "react";
import { motion } from "framer-motion";

import PageTitle from "../../components/layout/PageTitle";
import ImpactCard from "../../components/impact/ImpactCard";

import leadership from "../../data/leadership";


function Leadership() {

  const [filter, setFilter] = useState("All");



  const categories = [
    "All",
    "Leadership",
    "Community",
    "Program",
    "Technology"
  ];



  const filteredActivities = leadership.filter((activity) => {

    if (filter === "All") {
      return true;
    }

    return activity.category.includes(filter);

  });



  return (

    <section className="relative min-h-screen w-full px-16 py-24">


      <PageTitle>
        Leadership & Impact
      </PageTitle>



      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">


        {
          categories.map((category)=>(

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





      {/* Cards */}

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
          filteredActivities.map((activity)=>(

            <motion.div

              key={activity.id}

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

              <ImpactCard activity={activity}/>


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


export default Leadership;
import { useState } from "react";
import { motion } from "framer-motion";

import PageTitle from "../../components/layout/PageTitle";
import AwardCard from "../../components/awards/AwardCard";
import NewsGallery from "../../components/awards/NewsGallery";

import awards from "../../data/awards";
import news from "../../data/news";


function Awards() {


  const [filter, setFilter] = useState("All");



  const categories = [
    "All",
    "Software",
    "Community",
    "Scholarship"
  ];



  const filteredAwards = awards.filter((award)=>{

    if(filter === "All"){
      return true;
    }

    return award.category.includes(filter);

  });



  return (

    <section className="
      relative
      min-h-screen
      w-full
      px-16
      py-24
    ">


      <PageTitle>
        Awards & In The News
      </PageTitle>





      {/* Award Filters */}

      <div className="
        flex
        flex-wrap
        justify-center
        gap-4
        mb-12
      ">


        {
          categories.map((category)=>(

            <button

              key={category}

              onClick={()=>setFilter(category)}

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






      {/* Awards Grid */}

      <motion.div

        layout

        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-8
          max-w-4xl
          mx-auto
        "

      >


        {
          filteredAwards.map((award)=>(

            <motion.div

              key={award.id}

              layout

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

            >

              <AwardCard award={award}/>


            </motion.div>

          ))
        }


      </motion.div>







      {/* News Section */}

      <div className="
        max-w-6xl
        mx-auto
        mt-24
      ">


        <h2 className="
          text-4xl
          font-semibold
          mb-8
        ">

          In The News

        </h2>



        <NewsGallery news={news}/>


      </div>







      {/* Back To Top */}

      <button

        onClick={()=>
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


export default Awards;
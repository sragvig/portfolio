import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Landing from "../../pages/Landing/Landing";
import Projects from "../../pages/Projects/Projects";
import Experience from "../../pages/Experience/Experience";
import Leadership from "../../pages/Leadership/Leadership";
import Awards from "../../pages/Awards/Awards";
import PageTitle from "./PageTitle";


const pages = [

  {
    name: "Landing",
    component: Landing
  },

  {
    name: "Projects",
    component: Projects
  },

  {
    name: "Experience",
    component: Experience
  },

  {
    name: "Leadership",
    component: Leadership
  },

  {
    name: "Awards",
    component: Awards
  }

];




function SlideContainer() {


  const [currentPage, setCurrentPage] = useState(0);




  function nextPage(){

    setCurrentPage((prev)=>
      prev === pages.length - 1
      ? 0
      : prev + 1
    );

  }




  function previousPage(){

    setCurrentPage((prev)=>
      prev === 0
      ? pages.length - 1
      : prev - 1
    );

  }






  useEffect(()=>{


    function handleKey(event){


      if(event.key === "ArrowRight" || event.key === "ArrowDown"){

        nextPage();

      }



      if(event.key === "ArrowLeft" || event.key === "ArrowUp"){

        previousPage();

      }


    }



    window.addEventListener(
      "keydown",
      handleKey
    );


    return ()=>
      window.removeEventListener(
        "keydown",
        handleKey
      );


  }, []);







  const PageComponent =
    pages[currentPage].component;





  return (

    <main className="
      relative
      min-h-screen
      overflow-x-hidden
      bg-[#090909]
      text-white
    ">



      {/* Page Title */}

      <AnimatePresence mode="wait">


        <motion.div

          key={currentPage}

          initial={{
            opacity:0,
            x:80
          }}

          animate={{
            opacity:1,
            x:0
          }}

          exit={{
            opacity:0,
            x:-80
          }}

          transition={{
            duration:0.4
          }}

        >

          <PageComponent/>


        </motion.div>


      </AnimatePresence>







      {/* Left Arrow */}

      <button

        onClick={previousPage}

        className="
          fixed
          left-6
          top-1/2
          -translate-y-1/2
          text-4xl
          text-white/50
          hover:text-white
          transition
        "

      >

        ←

      </button>







      {/* Right Arrow */}

      <button

        onClick={nextPage}

        className="
          fixed
          right-6
          top-1/2
          -translate-y-1/2
          text-4xl
          text-white/50
          hover:text-white
          transition
        "

      >

        →

      </button>








      {/* Bottom Navigation */}

      <div className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        flex
        gap-6
        items-center
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        px-6
        py-3
        rounded-full
      ">


        {
          pages.map((page,index)=>(


            <button

              key={page.name}

              onClick={()=>
                setCurrentPage(index)
              }

              className={`
                text-sm
                transition

                ${
                  currentPage === index
                  ? "text-white font-semibold"
                  : "text-white/40 hover:text-white"
                }

              `}

            >

              {page.name}

            </button>


          ))
        }


      </div>




    </main>

  );

}



export default SlideContainer;
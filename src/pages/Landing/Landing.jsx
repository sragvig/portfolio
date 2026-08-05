import { useState } from "react";
import { FileText, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import PageTitle from "../../components/layout/PageTitle";

function Landing() {

  const [showContact, setShowContact] = useState(false);
  const [showCoursework, setShowCoursework] = useState(false);


  return (

    <section className="relative h-screen w-full flex items-center justify-center px-16">

      <PageTitle>
        About Me
      </PageTitle>


      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-20 items-center max-w-6xl"
      >


        {/* Left Side */}
        <div>


          <div className="flex items-center gap-5">

            <h1 className="text-7xl font-semibold tracking-tight">
              Sragvi
              <br />
              Gireesh
            </h1>


            {/* Resume Icon */}
            <motion.a

              href="/resume.pdf"

              target="_blank"

              className="
                group
                flex
                items-center
                gap-0
                px-4
                py-3
                rounded-full
                border
                border-white/20
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "

            >


              <FileText size={18}/>


              <span
                className="
                  max-w-0
                  overflow-hidden
                  opacity-0
                  group-hover:max-w-xs
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  whitespace-nowrap
                "
            >

                Resume

            </span>


            </motion.a>


          </div>



          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
            I'm currently studying Computer Science at 
            Texas A&M University. I enjoy work in human-centered 
            technology, civic innovation, and building software 
            that creates meaningful impact.
          </p>



          {/* Buttons */}
          <div className="flex gap-4 mt-10">


            <button
              onClick={() => setShowContact(true)}
              className="
                px-7 py-3
                rounded-full
                bg-white
                text-black
                font-medium
                hover:scale-105
                transition
              "
            >
                Contact Me
            </button>


            <button
              onClick={() => setShowCoursework(true)}
              className="
                px-7 py-3
                rounded-full
                border border-white/20
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                transition
              "
            >
                Coursework
            </button>


          </div>


        </div>



        {/* Right Side Photo */}
        <motion.div

          animate={{
            y: [0, -10, 0]
          }}

          transition={{
            duration: 4,
            repeat: Infinity
          }}

          className="flex justify-center"

        >


          <motion.div

            animate={{
                y: [0, -10, 0]
            }}

            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}

            className="flex justify-center"

            >

            <div className="relative">


                <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-2xl"/>


                <img
                src="/profile.png"
                alt="Sragvi Gireesh"
                className="relative w-90 h-100 object-cover rounded-[2rem] border border-white/20"
                />


            </div>


            </motion.div>


        </motion.div>



      </motion.div>





      {/* Contact Modal */}
      {
        showContact && (

          <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center">


            <div className="bg-[#111] border border-white/10 rounded-3xl p-10 w-[400px] relative">


              <button
                onClick={() => setShowContact(false)}
                className="absolute right-5 top-5"
              >

                <X/>

              </button>



              <h2 className="text-3xl font-bold mb-6">
                Contact
              </h2>



              <div className="space-y-5">


                <p>
                  📧 email@example.com
                </p>


                <p>
                  📱 (123) 456-7890
                </p>



                <a
                  href="https://www.linkedin.com/in/sragvig/"
                  target="_blank"
                  className="flex gap-3 items-center hover:underline"
                >

                  <FaLinkedin size={20}/>
                  LinkedIn

                </a>



                <a
                  href="https://github.com/sragvig"
                  target="_blank"
                  className="flex gap-3 items-center hover:underline"
                >

                  <FaGithub size={20}/>
                  GitHub

                </a>


              </div>


            </div>


          </div>

        )
      }





      {/* Coursework Modal */}
      {
        showCoursework && (

          <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center">


            <div className="bg-[#111] border border-white/10 rounded-3xl p-10 w-[450px] relative">


              <button
                onClick={() => setShowCoursework(false)}
                className="absolute right-5 top-5"
              >

                <X/>

              </button>



              <h2 className="text-3xl font-bold mb-6">
                Relevant Coursework
              </h2>



              <ul className="space-y-3 text-gray-300">

                <li>
                  CSCE 110 — Programming I
                </li>

                <li>
                  CSCE 120 — Design and Concepts
                </li>

                <li>
                  ENGR 102 — Engineering Lab I
                </li>

              </ul>


            </div>


          </div>

        )
      }



    </section>

  );
}

export default Landing;
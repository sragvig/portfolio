import { useState } from "react";


function AwardCard({ award }) {

  const [open, setOpen] = useState(false);



  return (

    <div
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        overflow-hidden
      "
    >


      <img

        src={award.image}

        alt={award.title}

        className="
          w-full
          h-40
          object-cover
        "

      />



      <div className="p-6">


        <div className="flex flex-wrap gap-1">


          {
            award.category.map((tag)=>(

              <span

                key={tag}

                className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  border
                  border-white/20
                "

              >

                {tag}

              </span>

            ))
          }


        </div>



        <h2 className="text-9xs font-semibold mt-3">

          {award.title}

        </h2>



        <p className="text-gray-500 mt-1">

          {award.date}

        </p>



        <button

          onClick={() => setOpen(!open)}

          className="
            mt-5
            text-sm
            underline
          "

        >

          {
            open
            ? "Hide Details"
            : "View Details"
          }

        </button>




        {
          open && (

            <p className="
              mt-2
              text-gray-300
              leading-relaxed
            ">

              {award.details}

            </p>

          )
        }



      </div>


    </div>

  );

}


export default AwardCard;
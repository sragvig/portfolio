function ExperienceCard({ experience }) {


  return (

    <div className="
      rounded-3xl
      border border-white/10
      bg-white/5
      p-6
    ">


      <div className="flex items-center gap-5">


        <img
          src={experience.logo}
          alt={experience.company}
          className="
            w-16
            h-16
            rounded-2xl
            object-cover
            bg-white/10
          "
        />



        <div>

          <h2 className="text-2xl font-semibold">
            {experience.company}
          </h2>


          <p className="text-gray-400">
            {experience.role}
          </p>

        </div>


      </div>





      <div className="flex gap-3 mt-6">


        {
          experience.type.map((tag)=>(

            <span
              key={tag}
              className="
                px-3
                py-1
                rounded-full
                border
                border-white/20
                text-xs
              "
            >
              {tag}
            </span>

          ))
        }


        <span
          className="
            px-3
            py-1
            rounded-full
            bg-white
            text-black
            text-xs
          "
        >

          {experience.status}

        </span>


      </div>





      <p className="text-gray-500 mt-5">
        {experience.dates}
      </p>


      <p className="text-gray-500">
        {experience.location}
      </p>




      <p className="text-gray-300 mt-5 leading-relaxed">
        {experience.summary}
      </p>





      <div className="flex gap-3 mt-6">


        {
          experience.links.website && (

            <a
              href={experience.links.website}
              target="_blank"
              className="
                px-4
                py-2
                rounded-full
                border
                border-white/20
              "
            >
              Website
            </a>

          )
        }


      </div>


    </div>

  );

}


export default ExperienceCard;
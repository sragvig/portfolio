function ImpactCard({ activity }) {


  return (

    <div className="
      rounded-3xl
      border border-white/10
      bg-white/5
      overflow-hidden
      p-6
    ">


      <img

        src={activity.image}

        alt={activity.title}

        className="
          w-full
          h-64
          object-cover
          rounded-2xl
        "

      />



      <div className="mt-6">


        <div className="flex flex-wrap gap-2">


          {
            activity.category.map((tag)=>(

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




        <h2 className="text-3xl font-semibold mt-4">

          {activity.title}

        </h2>




        <p className="text-gray-500 mt-2">

          {activity.date}

        </p>




        <p className="text-gray-300 mt-5 leading-relaxed">

          {activity.description}

        </p>




        <div className="flex gap-3 mt-6">


          {
            activity.links.website && (

              <a
                href={activity.links.website}
                target="_blank"
                className="
                  px-5
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


    </div>

  );

}


export default ImpactCard;
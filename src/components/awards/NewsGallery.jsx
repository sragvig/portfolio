function NewsGallery({ news }) {


  return (

    <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
    ">


      {
        news.map((article)=>(

          <a

            key={article.id}

            href={article.link}

            target="_blank"

          >

            <img

              src={article.image}

              alt={article.title}

              className="
                rounded-3xl
                border
                border-white/10
                hover:scale-105
                transition
              "

            />

          </a>

        ))
      }


    </div>

  );

}


export default NewsGallery;
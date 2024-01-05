import React, { useState, useEffect } from 'react'
import useNews from '../Hooks/useNews'




function NewsCards({ category }) {
  const country = 'in'

  // const [articles, setarticles] = useState(null)

  const [page, setpage] = useState(1)

  const [pagesize, setpagesize] = useState()

  const datanews = useNews({ country, category, page, pagesize })

  // if (datanews){
  //    console.log(datanews);}
  useEffect(() => {


    setpagesize(10);
    window.scrollTo({ top: 0, behavior: 'smooth' })
    console.log(category)




  }, [category])



  function nextpage() {

    if (page <= (Math.ceil(datanews.totalResults / Number(pagesize))) - 1) {
      setpagesize((prev) => prev + 10)



    }


  }




  return (
    <>

      {

        datanews && datanews.articles.length > 0 ? datanews.articles.map((data) => (
          // <a href={data.}></a>
          <div key={data.title} className='newscard'>
            <img src={data.urlToImage ? data.urlToImage : 'https://namiohio.org/wp-content/uploads/2021/06/news-update-1-1080x500.png'} alt="" />
            {data.source.name && <span><p>publisher - {data.source.name}</p></span>}
            <h1>{data.title.slice(0, 100)}...</h1>
            <p>{data.content && data.content.slice(0, 150)}...</p>
            <button onClick={() => window.open(`${data.url}`)} >read more</button>

          </div>


        )) : <h1>LOading.....</h1>

      }

      {datanews &&

        <div className='nextpagenews'>
          {page <= (Math.ceil(datanews.totalResults / Number(pagesize))) - 1 ?

            <button onClick={nextpage}>Read more <strong>→</strong></button> : <p className=''>You all Caught Up !</p>

          }

        </div>
      }


    </>
  )
}

export default NewsCards;
import React, { useState, useEffect, Suspense } from 'react'
import useNews from '../Hooks/useNews'
import Homepage from './Homepage'




function NewsCards({ category }) {
  const country = 'in'

  // const [articles, setarticles] = useState(null)

  const [page, setpage] = useState(1)

  const [pagesize, setpagesize] = useState()

  const datanews = useNews({ country, category, page, pagesize })

  const [backgroundImage,setbackgroundimage] = useState('')
  const [newsTitle,setnewstitle] = useState('')
  



  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } 
  }
  

  // if (datanews){
  //    console.log(datanews);}
  useEffect(() => {


    setpagesize(10);
       console.log(category)
      
       if (category){

       scrollToElement('head');

       }


  }, [category])



  const [index,setindex] = useState(0)


  const homeimages = [{title:'Entertainment',image:'https://wallpaperaccess.com/full/37948.jpg'},{title:'Politics',image:'https://thelogicalindian.com/h-upload/2020/06/22/175558-modiweb.jpg'},{title:'Sports',image:'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},{title:'Health & Medical',image:'https://e0.pxfuel.com/wallpapers/28/749/desktop-wallpaper-standard.jpg'},{title:'Technology',image:'https://wallpapers.com/images/hd/4k-tech-105e3a4x7aw7coqd.jpg'}]
 
  
  useEffect(() => {

    if (category){

    const timer = setInterval(() => {

      

      setbackgroundimage(homeimages[index].image)
      setnewstitle(homeimages[index].title)
      
      setindex(index+1)

      if (index == homeimages.length-1){
        setindex(0)
      }


    }, 3000);
  

   
    return () => clearInterval(timer);
  }
  },[index]);

  
  
// }



  function nextpage() {

    if (page <= (Math.ceil(datanews.totalResults / Number(pagesize))) - 1) {
      setpagesize((prev) => prev + 10)

    }


  }

  return (
    <>

        {category === 'general' && <Homepage id={'head'} backgroundImage={backgroundImage} newsTitle={newsTitle}/>}
      {
     
        datanews && datanews.articles.length > 0 ? datanews.articles.map((data) => (
          // <a href={da
          <div key={data.title} id={category !== 'general' && 'head' } className='newscard'>
            <img src={data.urlToImage ? data.urlToImage : 'https://namiohio.org/wp-content/uploads/2021/06/news-update-1-1080x500.png'} alt="" />
            {data.source.name && <span><p>publisher - {data.source.name}</p></span>}
            <h1>{data.title.slice(0, 100)}...</h1>
            <p>{data.content && data.content.slice(0, 150)}...</p>
            <button onClick={() => window.open(`${data.url}`)} >read more</button>

          </div>


        )) : <div className="loader"></div>

      }

      {datanews &&

        <div className='nextpagenews'>
          {page <= (Math.ceil(datanews.totalResults / Number(pagesize))) - 1 ?

            <button onClick={nextpage}>Read more <strong>→</strong></button> : <p className=''>Nothing Left here...</p>

          }

        </div>
      }


    </>
  )
}

export default NewsCards;
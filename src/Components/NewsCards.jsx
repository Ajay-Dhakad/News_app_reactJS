import React, { useState ,useEffect} from 'react'
import useNews from '../Hooks/useNews'


function NewsCards({category}) {
    const country = 'in'  

    const [News,setnews] = useState(null)

    const [articles,setarticles] = useState(null)


    const [page,setpage] = useState(2)
 
    const pagesize = 10

    const [totalposts,settotalposts] = useState(null)
    

    // useNews({country, category, page, pagesize}).then((data) =>{setnews(data);setarticles(data.articles);settotalposts(data.totalResults)
    // });
  
    const fetchData = async () => {
      try {
        const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1e4422fe2da64bc3bd603bd6e2517a00&page=1&pageSize=10');
       console.log(data)
      setnews(data.articles)
      console.log(News)
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    }

    useEffect(() => {
    fetchData();
  }, [country, category, page, pagesize]);
    


function nextpage(){
 
  if (page <= (Math.ceil(totalposts/pagesize))){
    setpage((prev) => prev+1)
    console.log(page)

  }
  

}
    
   
  

  return (
    <>
    <div className="main">
     {

           articles && articles.map((data) => (
        // <a href={data.}></a>
            <div key={data.title} className='newscard'>
            <img src={data.urlToImage ? data.urlToImage: 'https://namiohio.org/wp-content/uploads/2021/06/news-update-1-1080x500.png' } alt="" />
            {data.source.name && <span>publisher - { data.source.name}</span>}
                <h1>{data.title.slice(0,100)}...</h1>
                <p>{data.content && data.content.slice(0,150)}...</p>
           
                </div>
                

            ))

     }

<button onClick={() => nextpage()} className='readmore'>nextpage</button>
     </div>
    </>
  )
}

export default NewsCards;

import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Homepage({backgroundImage,id,newsTitle,query,data}) {
  const [search,setsearch]  = useState('')
  const navigate = useNavigate()
  // console.log(search)

  return (
<>
    { !query &&

    (<div id={id} style={{backgroundImage:`url("${backgroundImage ? backgroundImage : 'https://wallpaperaccess.com/full/37948.jpg'}")`}} className='homepage'>
       {/* homepage */}
      <div className="content">   
      <h1>News<b>Hub</b></h1>
      
      <form  onSubmit={(e) => {e.preventDefault();navigate(`/search/${search}`);setsearch('');}} className="searchbar">
     
      <input value={search}  onChange={(e) =>(setsearch(e.target.value)) } required type="text" placeholder='Search News...'/>
      <input value='Search' type="submit" /> 
      </form>
        <h2>Get News About <br /> <b>{newsTitle ? newsTitle : 'Everything !'}</b> </h2>
      </div>

    </div>) }
    
    {(query && data?.articles.length > 0) && <h1 className='searchresult'> showing {data.totalResults} results for {query}</h1> } 
    {(query && data?.articles.length == 0) && <h1>No Results Found For {query}</h1> }
    
    </>

  )
}

export default Homepage

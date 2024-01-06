import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Homepage({backgroundImage,id,newsTitle}) {
  const [search,setsearch]  = useState('')
  const navigate = useNavigate()
  // console.log(search)

  return (
    <div id={id} style={{backgroundImage:`url("${backgroundImage ? backgroundImage : 'https://wallpaperaccess.com/full/37948.jpg'}")`}} className='homepage'>
       {/* homepage */}
      <div className="content">   
      <h1>News<b>Hub</b></h1>
      
      <form  onSubmit={(e) => {e.preventDefault();navigate(`/search/${search}`);setsearch('');}} className="searchbar">
     
      <input value={search}  onChange={(e) =>(setsearch(e.target.value)) } required type="text" placeholder='Search News...'/>
      <input type="submit" /> 
      </form>
        <h2>Get News About <b>{newsTitle}</b> </h2>
      </div>

    </div>
  )
}

export default Homepage

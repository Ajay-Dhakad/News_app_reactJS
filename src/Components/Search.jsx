import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Searchnews from '../Hooks/Searchnews';
import NewsCards from './NewsCards';

function Search() {
    const {slug} = useParams();

    const [query,setquery] = useState(null)

    useEffect(() => {
        
    },[slug])

   
    

    

  return (
   <>
   
   <NewsCards query={slug}/>

   </>
  )
}

export default Search

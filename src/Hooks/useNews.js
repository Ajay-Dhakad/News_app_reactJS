import React, { useEffect, useState } from 'react'

function useNews({ country, category, page, pagesize }) {

  const [newsdata, setnewsdata] = useState('error in fetching api...')



  useEffect(() => {
    
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1e4422fe2da64bc3bd603bd6e2517a00&page=${page}&pageSize=${pagesize}`).then((data) => {

     if (data.ok) return data.json();
    //  else console.error('error in fetching API !');
   

    }).then((data) => {

      setnewsdata(data);
      
    })


  }, [category, page, pagesize]);

  return newsdata;
}

export default useNews

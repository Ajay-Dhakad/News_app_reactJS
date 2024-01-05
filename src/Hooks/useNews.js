import React, { useEffect, useState } from 'react';

function useNews({country,category,page,pagesize}) {

  
  const [newsdata, setNewsdata] = useState(null)
  
useEffect(() => {
 
  

    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=80e2231a0e0e44608d2fd8cb8cc70ebd&page=${page}&pageSize=${pagesize}`)

      .then((response) => {

        if (response.ok) {
          return response.json();  // This returns a promise
        } else {
          throw new Error('Network response was not ok.');
        }
      })

      .then((data) => {
        setNewsdata(data);
        console.log(data.articles);

      })

      .catch((err) => console.log('Error:', err));

    },[category,page,pagesize])
   

  return newsdata
}

export default useNews;
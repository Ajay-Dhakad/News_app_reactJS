import React, { useEffect, useState } from 'react';

function useNews({country,category,page,pagesize}) {

  
  const [newsdata, setNewsdata] = useState(null)
  
useEffect(() => {
 
  

    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9d0c444658944563828048409320005a&page=${page}&pageSize=${pagesize}`)

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
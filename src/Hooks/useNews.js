import React, { useEffect, useState } from 'react';

function useNews({ country, category, page, pagesize,query }) {


  const [newsdata, setNewsdata] = useState(null)
  
  const apiKey = String(import.meta.env.VITE_NEWS_API_KEY)
  



  useEffect(() => {

    const apiurl = !query ? `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pagesize}`: `https://newsapi.org/v2/top-headlines?q=${query}&country=${country}&apiKey=7e026601f4ed437b81906cca557fdc7d`

    fetch(apiurl)

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

  }, [category, page, pagesize,query])


  return newsdata
}

export default useNews;

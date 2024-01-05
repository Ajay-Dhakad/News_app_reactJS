import React, { useEffect, useState } from 'react';

function useNews({ country, category, page, pagesize }) {


  const [newsdata, setNewsdata] = useState(null)

  useEffect(() => {



    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9d5d629dc6a1454dbe6e4418e80977b7&page=${page}&pageSize=${pagesize}`)

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

  }, [category, page, pagesize])


  return newsdata
}

export default useNews;
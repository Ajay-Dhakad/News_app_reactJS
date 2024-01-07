import React, { useEffect, useState } from 'react'


function Searchnews({query}) {

    const [newsdata,setnewsdata] = useState(null)

    useEffect(() => {

        fetch(`https://newsapi.org/v2/top-headlines?q=${query}&country=in&apiKey=ed527191150f449ebb3d7a62fcda76e8`).then((response) => {

        console.log(response)

        if (response.ok) {
          return response.json();  // This returns a promise
        } else {
          throw new Error('Network response was not ok.');
        }
      })

      .then((data) => {
        setnewsdata(data);
        console.log(data.articles);

      })

      .catch((err) => console.log('Error:', err));

  }, [query])


   


  return (newsdata)
}

export default Searchnews

import React, { useState, useEffect, Suspense } from "react";
import useNews from "../Hooks/useNews";
import Homepage from "./Homepage";
import { motion } from "framer-motion";

function NewsCards({ category, query }) {
  // Default country for news
  const country = "in";

  // State variables
  const [page, setPage] = useState(1);
  const [pagesize, setPagesize] = useState(10);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headline, setHeadline] = useState();

  // Custom hook to fetch news data
  const dataNews = useNews({ country, category, page, pagesize, query });

  // Function to scroll to a specific element by its ID
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Effect to scroll to top when there is a change in category or query
  useEffect(() => {
    setPagesize(10);
    if (category) {
      scrollToElement("head");
    }
  }, [category, query]);

  // Homepage image slider data
  const homeImages = [
    { title: "Entertainment", image: "https://wallpaperaccess.com/full/37948.jpg" },
    // Add other images...
  ];

  // Effect to handle image slider for the 'general' category
  useEffect(() => {
    if (category === "general") {
      const timer = setInterval(() => {
        setBackgroundImage(homeImages[index].image);
        setNewsTitle(homeImages[index].title);
        setIndex((prevIndex) => (prevIndex + 1 === homeImages.length ? 0 : prevIndex + 1));
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [index, category]);

  // Effect for displaying top headlines with a 3-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadline(dataNews.articles[headlineIndex].title);
      setHeadlineIndex((prevIndex) => (prevIndex + 1 === dataNews.articles.length ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [headlineIndex, category, dataNews]);

  // Function to load more news on button click
  function nextPage() {
    if (page <= Math.ceil(dataNews.totalResults / Number(pagesize)) - 1) {
      setPagesize((prevPageSize) => prevPageSize + 10);
    }
  }

  return (
    <>
      {/* Displaying homepage image slider for the 'general' category */}
      {category === "general" && (
        <Homepage id={"head"} backgroundImage={backgroundImage} newsTitle={newsTitle} />
      )}

      {/* Displaying homepage with search query */}
      {query?.length > 0 && <Homepage id={"head"} query={query} data={dataNews} />}

      {/* Displaying top headlines */}
      {headline && category === 'general' && (
        <div className="headlines">
          <h5>Top Headlines : </h5>
          {headline && <strong>{headline}</strong>}
        </div>
      )}

      {/* Displaying individual news cards */}
      {dataNews &&
        dataNews?.articles.length > 0 &&
        dataNews.articles.map((data, index) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            key={data.title}
            id={category !== "general" && "head"}
            className="newscard"
          >
            <img
              src={
                data.urlToImage
                  ? data.urlToImage
                  : "https://namiohio.org/wp-content/uploads/2021/06/news-update-1-1080x500.png"
              }
              alt=""
            />

            {data.source.name && (
              <span>
                <p>publisher - {data.source.name}</p>
              </span>
            )}

            <a id="newscardtitle" href={data.url}>
              <h1>{data.title.slice(0, 100)}...</h1>
            </a>

            <p>{data.content && data.content.slice(0, 100)}...</p>
            <button onClick={() => window.open(`${data.url}`)}>
              read more
            </button>
          </motion.div>
        ))}

      {/* Displaying error message if there is an issue in fetching data */}
      {dataNews?.articles.length === 0 && !query && (
        <h1>Error in fetching data...</h1>
      )}

      {/* Displaying loader while data is being fetched */}
      {dataNews === null && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}

      {/* Displaying 'Read more' button if there is more news to load */}
      {dataNews && dataNews.articles.length > 0 && (
        <div className="nextpagenews">
          {page <= Math.ceil(dataNews.totalResults / Number(pagesize)) - 1 ? (
            <button className="readmorebtn" onClick={nextPage}>
              Read more <strong>→</strong>
            </button>
          ) : (
            <p>Nothing Left here...</p>
          )}
        </div>
      )}
    </>
  );
}

export default NewsCards;

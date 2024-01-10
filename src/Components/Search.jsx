import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCards from "./NewsCards";

function Search() {
  const { slug } = useParams();

  useEffect(() => {}, [slug]);

  return (
    <>
      <NewsCards query={slug} />
    </>
  );
}

export default Search;

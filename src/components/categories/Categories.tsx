import React from "react";
import SingleCategory from "./SingleCategory";

const MovieCategories = () => {
  return (
    <div className="flex justify-end items-center gap-4 max-w-6xl mx-auto md:my-5 my-4 ">
      <SingleCategory title="Treding" param="fetchTrending" />
      <SingleCategory title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default MovieCategories;

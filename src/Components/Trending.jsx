import { useState, useEffect } from "react";
import TrendingCards from "./TrendingCards";
import { movieData } from "../constants";

const Trending = () => {
  const [movies, setMovies] = useState(movieData);
  const categories = ["Movie", "TV"];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    const filteredMovies = movieData.filter(
      (movie) => movie.category === activeCategory
    );
    setMovies(filteredMovies);
  }, [activeCategory]);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };
  return (
    <div className="bg-[#122C36] p-4 lg:px-40 py-16 mx-auto">
      <div className="flex items-center gap-4 px-4 mb-6">
        <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300">
          Trending
        </h2>

        {/* category selection */}
        {categories.map((category) => (
          <button
            key={category}
            className={` text-white hover:text-blue-400 border px-2 py-1 sm:px-4 sm:py-2 rounded-[50px] ${
              activeCategory === category ? "active-category-btn" : ""
            }`}
            onClick={() => {
              handleCategoryChange(category);
            }}
          >
            {category === "TV" ? category + " Series" : category}
          </button>
        ))}
      </div>

      <TrendingCards
        selectedCategory={selectedCategory}
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  );
};

export default Trending;

import MovieCard from "./movieCard";
import React from "react";

const MovieList = (props) => {
  const { movies, addStars, removeStars, handleFav, handleCart } = props;
  return (
    <div className="movieList">
      {movies.map((movie, id) => {
        return (
          <MovieCard
            key={movie.id}
            movies={movie}
            addStars={addStars}
            removeStars={removeStars}
            handleFav={handleFav}
            handleCart={handleCart}
          />
        );
      })}
    </div>
  );
};

export default MovieList;

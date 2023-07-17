import MovieCard from "./movieCard";
import React from "react";
import { Component } from "react";
import { movies } from "./movieData";

class MovieList extends Component {
  render() {
    const { movies, addStars, removeStars, handleFav, handleCart } = this.props;
    return (
      <div className="movieList">
        {movies.map((movie) => {
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
  }
}

export default MovieList;

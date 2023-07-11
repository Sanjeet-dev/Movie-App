import MovieCard from "./movieCard";
import React from "react";
import { Component } from "react";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Batman",
          plot: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          price: 250,
          rating: 7.8,
          img: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
          stars: 0,
          fav: false,
          cart: false,
        },
        {
          title: "Shazam!",
          plot: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
          price: 300,
          rating: 7,
          img: "https://m.media-amazon.com/images/M/MV5BOWZhZjE4NGQtODg5Ni00MjQ1LWJmMzAtNzQ2N2M1NzYzMDJkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_UY209_CR0,0,140,209_AL_.jpg",
          stars: 0,
          fav: false,
          cart: false,
        },
        {
          title: "Wanted",
          plot: "A frustrated office worker discovers that he is the son of a professional assassin, and that he shares his father's superhuman killing abilities.",
          price: 200,
          rating: 6.7,
          img: "https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_UX140_CR0,0,140,209_AL_.jpg",
          stars: 0,
          fav: false,
          cart: false,
        },
        {
          title: "Doctor Strange",
          plot: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon indulge into mystic art.",
          price: 180,
          rating: 7.5,
          img: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
          stars: 0,
          fav: false,
          cart: false,
        },
      ],
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);
    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleFavBtn = (movie) => {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies,
    });
  };
  handleCartBtn = (movie) => {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    this.setState({
      movies: movies,
    });
  };
  render() {
    const { movies } = this.state;
    return (
      <div className="movieList">
        {movies.map((movie, mid) => {
          return (
            <MovieCard
              key={mid}
              movies={movie}
              addStars={this.handleIncStar}
              removeStars={this.handleDecStar}
              handleFav={this.handleFavBtn}
              handleCart={this.handleCartBtn}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieList;

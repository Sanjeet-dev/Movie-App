import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./movieData";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
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

  handleDecStars = (movie) => {
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
      movies,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Navbar />
        <MovieList
          movies={movies}
          addStars={this.handleIncStars}
          removeStars={this.handleDecStars}
          handleFav={this.handleFavBtn}
          handleCart={this.handleCartBtn}
        />
      </>
    );
  }
}
export default App;

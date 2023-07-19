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

  handleIncStars = (movie) => {
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
    let { movies, cartCount } = this.state;
    const mid = this.state.movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    console.log(movies[mid].cart);

    if (movies[mid].cart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies,
      cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
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

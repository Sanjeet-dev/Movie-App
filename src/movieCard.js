import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Component } from "react";

class MovieCard extends Component {
  // lets add props in component
  render() {
    // destructuring the prop values:
    const { movies, addStars, removeStars, handleFav, handleCart } = this.props;
    const { title, plot, price, rating, img, stars, fav, cart } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={img} />
          </div>

          <div className="right-container">
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">
                <b>Plot:</b> {plot}.
              </div>
              <div className="price">
                <FaRupeeSign />
                {price}
              </div>
            </div>

            <div className="footer">
              <div className="rating">Ratings: {rating}</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  alt="decrease"
                  className="str-btn"
                  onClick={() => {
                    removeStars(movies);
                  }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  alt="stars"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                  alt="increase"
                  className="str-btn"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span className="starCount">{stars}</span>
              </div>
              <div className="btn-container">
                <button
                  className={fav ? "unfavourite-btn" : "favourite-btn"}
                  onClick={() => {
                    handleFav(movies);
                  }}
                >
                  {fav ? "Unfavourite" : "Favourite"}
                </button>

                <button
                  className={cart ? "rmcart-btn" : "cart-btn"}
                  onClick={() => {
                    handleCart(movies);
                  }}
                >
                  {cart ? "Remove from cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;

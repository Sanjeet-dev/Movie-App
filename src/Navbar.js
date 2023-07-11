import { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <>
        <div style={styles.nav}>
          <div style={styles.title}>movie-app</div>
          <div style={styles.cart}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              alt=""
              style={styles.cartIcon}
            />
            <span style={styles.num}>0</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;

const styles = {
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    background: "#7F00FF",
    marginBottom: 10,
    paddingRight: 30,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: 600,
    fontFamily: "'Montserrat',sans-serif",
    textTransform: "uppercase",
    paddingLeft: 20,
  },
  cart: {
    display: "flex",
    position: "relative",
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  num: {
    color: "white",
    fontSize: 13,
    fontWeight: 500,
    position: "absolute",
    borderRadius: 50,
    top: 0,
    right: 0,
  },
};

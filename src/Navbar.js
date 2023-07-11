import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 98vw;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  background-color: cadetblue;
  margin-bottom: 10px;
  padding-right: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  padding-top: 0.8rem;
  padding-left: 20px;
`;

class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <Title>movie-app</Title>
          <div style={styles.cart}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              alt=""
              style={styles.cartIcon}
            />
            <span style={styles.num}>3</span>
          </div>
        </Nav>
      </>
    );
  }
}

export default Navbar;

const styles = {
  cart: {
    display: "flex",
    position: "relative",
    paddingLeft: 35,
  },
  cartIcon: {
    width: 30,
    height: 30,
    paddingTop: "0.8rem",
  },
  num: {
    color: "black",
    fontSize: 10,
    backgroundColor: "yellow",
    border: "2px solid yellow",
    borderRadius: "45%",
    fontWeight: 500,
    position: "absolute",
    top: "0.8rem",
    right: 0,
  },
};

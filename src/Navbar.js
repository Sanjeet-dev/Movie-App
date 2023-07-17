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
const Cart = styled.div`
  display: flex;
  position: relative;
  padding-left: 35px;
`;

const Count = styled.span`
  color: black;
  font-size: 10px;
  background-color: yellow;
  border: 2px solid yellow;
  border-radius: 45%;
  font-weight: 500;
  position: absolute;
  top: 0.8rem;
  right: 0;
`;
const MovieCart = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 0.8rem;
`;

class Navbar extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <>
        <Nav>
          <Title>movie-app</Title>
          <Cart>
            <MovieCart
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              alt="shopping-cart"
            />
            <Count>{cartCount}</Count>
          </Cart>
        </Nav>
      </>
    );
  }
}

export default Navbar;

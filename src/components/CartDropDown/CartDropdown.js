import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 10%;
  right: 10%;
  border: 1px solid var(--color-text);
  padding: 1rem;
  background-color: white;
`;

const StyledLink = styled(Link)`
  outline: none;
  padding: 1.2rem 2rem;
  border-radius: 2px;
  font-size: 1.2rem;
  color: var(--color-white);
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: var(--color-main);
  text-align: center;
`;

const CartDropdown = ({ cartItems }) => {
  return (
    <Wrapper>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <div>Your Cart is Empty</div>
      )}
      <StyledLink to="/checkout">Checkout</StyledLink>
    </Wrapper>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);

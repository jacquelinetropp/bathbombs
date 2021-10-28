import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";
import { ButtonLink } from "../styles";
import * as actions from '../../store/actions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 65%;
  right: 7%;
  border: 1px solid var(--color-text);
  clip-path: polygon(0 25%, 0 100%, 100% 100%, 100% 25%, 70% 25%, 50% 1%, 30% 25%);
  padding: 5rem 1rem 1rem 1rem;
  background-color: white;
  text-align: center;
`;

const Header = styled.h4`
  font-size: 1.8rem;
  text-align: center;
`;

const CartDropdown = ({ cartItems, closeCart }) => {
  let content;
  cartItems.length
    ? (content = cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      )))
    : (content = (
        <Fragment>
          <div>Your Cart is Empty</div>
        </Fragment>
      ));

  return (
    <Wrapper>
    <Header>Checkout</Header>
      {content}
      <ButtonLink to="/checkout" onClick={()=> closeCart()}>Checkout</ButtonLink>
    </Wrapper>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

const mapDispatchToProps = {
  closeCart: actions.closeCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);

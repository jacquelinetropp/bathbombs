import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CheckoutItem from "../components/CheckoutItem/CheckoutItem";
import { cartItemTotal } from "../store/cart/cartUtils";
import StripeButton from "../components/StripeButton/StripeButton";
import { ButtonLink } from "../components/styles";

const Wrapper = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3rem;
`;

const Items = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Total = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  font-size: 2rem;
  margin: 0 auto;
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 2rem auto;

`;

const Checkout = ({ items, user }) => {
  const total = items.reduce(
    (acucumulatedQuantity, cartItem) =>
      acucumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <Wrapper>
      <Header>Checkout</Header>
      <Items>
        {items ? (
          items.map((item) => <CheckoutItem item={item} key={item.id} />)
        ) : (
          <div>no items </div>
        )}
      </Items>
      <Total>Total: ${total}</Total>
      {user ? (
        <StripeButton price={total} />
      ) : (
        <ButtonWrapper>
          <ButtonLink to="/login">Please Login to checkout</ButtonLink>
        </ButtonWrapper>
      )}
      <Payment>
        <div>
          *Please use the following test credit card as payment*
          <br />
          4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>
      </Payment>
    </Wrapper>
  );
};

const mapStateToProps = ({ cart, firebase }) => ({
  items: cart.cartItems,
  user: firebase.auth.uid,
});

export default connect(mapStateToProps)(Checkout);

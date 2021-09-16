import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import Button from "../Form/Button";
import * as actions from "../../store/actions";

const StripeButton = ({ price, cartItem, addItemToUser, clearAllItems }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_rrFgcrDPIffSU3GW4LJwWMgK00wvUvACZn";
  const onToken = (token) => {
    alert("Payment Successful");
    addItemToUser(cartItem);
    clearAllItems();
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Natural Bath Bombs"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your price is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      >
        <Button contain>Checkout</Button>
      </StripeCheckout>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItem: cart.cartItems,
});

const mapDispatchToProps = {
  addItemToUser: actions.addItemToUser,
  clearAllItems: actions.clearAllItems

};

export default connect(mapStateToProps, mapDispatchToProps)(StripeButton);

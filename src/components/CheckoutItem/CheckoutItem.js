import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { LeftArrow, RightArrow, XIcon } from "../styles/Icons";

const Wrapper = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(3, min-content);
`;

const Image = styled.img`
  width: 100px;
  grid-column: 1/2;
`;

const Text = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const ClearItem = styled.div`
  grid-column: 3/4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

const Name = styled.h4`
  font-size: 2rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
`;

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  return (
    <Wrapper>
      <Image src={item.img} alt="item" />
      <Text>
        <Name>{item.name}</Name>
        <Price>${item.price}</Price>
        <Quantity>
          <LeftArrow onClick={() => removeItem(item)} />
          {item.quantity}
          <RightArrow onClick={() => addItem(item)} />
        </Quantity>
      </Text>
      <ClearItem>
        <XIcon onClick={() => clearItem(item)} />
      </ClearItem>
    </Wrapper>
  );
};

const mapStateToProps = ({ cart }) => ({
  items: cart.cartItems,
});

const mapDispatchToProps = {
  addItem: actions.addItem,
  removeItem: actions.removeItem,
  clearItem: actions.clearItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);

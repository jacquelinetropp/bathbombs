import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const Name = styled.h5`
    font-size: 1.5rem;
`;

const Price = styled.p`
  font-size: 1.2rem;
`

const CartItem = ({ item }) => {
  return (
    <Wrapper>
      <Image src={item.img} />
      <TextWrapper>
        <Name>{item.name}</Name>
        <Price>${item.price} x {item.quantity}</Price>
      </TextWrapper>
    </Wrapper>
  );
};

export default CartItem;

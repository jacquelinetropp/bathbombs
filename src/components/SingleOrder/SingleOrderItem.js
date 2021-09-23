import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Image = styled.img`
  width: 150px;
`;

const Text = styled.div`
  font-size: 1.4rem;
`;

const SingleOrderItem = ({ item }) => {
  return (
    <Item>
      <Image src={item.img} />
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
    </Item>
  );
};

export default SingleOrderItem;

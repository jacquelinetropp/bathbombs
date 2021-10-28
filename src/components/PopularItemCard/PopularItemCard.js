import React from "react";
import styled from "styled-components";

const ItemImage = styled.img`
  width: 200%;
  grid-column: 3/4;
  position: block;

  @media only screen and (max-width: 768px) {
      width: 170%;
  }
`;

const Wrapper = styled.div`
  color: ${({ color }) => {
    if (color === "green") return "var(--color-tertiary)";
    else if (color === "pink") return "var(--color-second)";
    else return "var(--color-main)";
  }};
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 350px;

  @media only screen and (max-width: 768px) {
    min-height: 250px;
  }
  &:hover {
      ${ItemImage} {
          transform: translateX(-40%);
          transition: transform 1s cubic-bezier( 0.6, 0.39, 0.29, 0.89 );
      }
  }
`;

const TopHalf = styled.div`
  background-color: white;
  padding: 2rem 2rem 0rem 2rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  overflow: hidden;
`;
const TopText = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Price = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
`;

const ItemName = styled.h5`
  font-size: 2.4rem;
`;


const BottomHalf = styled.div`
  background-color: ${({ color }) => {
    if (color === "green") return "var(--color-tertiary)";
    else if (color === "pink") return "var(--color-second)";
    else return "var(--color-main)";
  }};

  color: black;
  padding: 2rem;
  text-align: center;

  font-size: 1.4rem;
`;

const PopularItemCard = ({ item }) => {
  return (
    <Wrapper color={item.color}>
      <TopHalf>
        <TopText>
          <Price>${item.price}</Price>
          <ItemName>{item.name}</ItemName>
        </TopText>
        <ItemImage src={item.img} alt="item image" />
      </TopHalf>
      <BottomHalf color={item.color}>
        <p> {item.about} </p>
      </BottomHalf>
    </Wrapper>
  );
};

export default PopularItemCard;

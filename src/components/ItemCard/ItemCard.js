import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../Form/Button";
import * as actions from '../../store/actions';

const AddToCart = styled.div`
  display: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  position: relative;

  &:hover {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
  }

  &:hover ${AddToCart} {
      display: block;
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);

  }
`;

const Img = styled.img`
  width: 200px;
`;

const Name = styled.h5`
  font-size: 2rem;
`;

const Price = styled.p`
  font-size: 1.4rem;
`;

const ItemCard = ({ item, addItem}) => {
  return (
    <Wrapper>
      <Img src={item.img} alt="bathbomb" />
      <Name>{item.name}</Name>
      <Price>${item.price}</Price>
      <AddToCart>
        <Button onClick={() => addItem(item)} contain>Add To Cart</Button>
      </AddToCart>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(actions.addItem(item)),
  });


export default connect(null, mapDispatchToProps)(ItemCard);

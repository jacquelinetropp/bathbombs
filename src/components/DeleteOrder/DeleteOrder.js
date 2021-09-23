import React from "react";
import styled from "styled-components";
import Button from '../Form/Button';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 5rem;
  border-radius: 1rem;
`;

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const DeleteOrder = ({ order, close, deleteOrder }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Are you sure you want to delete this order?</h1>
        <ButtonsDiv>
            <Button color="red" contain onClick={() => deleteOrder(order)} >Delete</Button>
            <Button contain onClick={close}>Close</Button>
        </ButtonsDiv>
      </InnerWrapper>
    </Wrapper>
  );
};
const mapDispatchToProps = {
    deleteOrder: actions.deleteOrder
}


export default connect(null, mapDispatchToProps)(DeleteOrder);

import React from "react";
import styled from "styled-components";

const HamburgerWrapper = styled.div`
    position: fixed;
    z-index: 15;
    top: 5.7%;
    left: 3%;
    display: block;
    width: 40px;
    height: 40px;
    margin:  -30px auto 0 auto;
    cursor: pointer;
`

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
`;

const Hamburger = ({onClick}) => {
  return (
    <HamburgerWrapper onClick={onClick}>
      <Bar />
      <Bar />
      <Bar />
    </HamburgerWrapper>
  );
};

export default Hamburger;

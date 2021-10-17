import React from "react";
import header from "../../images/intro2.jpg";
import Button from "../Form/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const IntroImage = styled.img`
  width: 100%;
`;

const IntroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Text = styled.div`
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

const Header = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: 5px;
  }

  @media only screen and (max-width: 625px) {
    font-size: 3rem;
    letter-spacing: 3px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const Intro = () => {
  return (
    <Wrapper>
      <IntroImage src={header} alt="bathbombs" />
      <IntroText>
        <Header>Natural Bath Bombs</Header>
        <Text>Bath bombs built with peace of mind at heart</Text>
        <ButtonWrapper>
        <Button variant="outlined" contain>
          Learn More
        </Button>
        </ButtonWrapper>
      </IntroText>
    </Wrapper>
  );
};

export default Intro;

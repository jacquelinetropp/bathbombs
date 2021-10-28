import React, { Fragment } from "react";
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

const IntroMessage = styled.div`
  background-color: var(--color-mainDark);
  text-align: center;
  padding: 2rem 0 1rem 0;
  margin-top: -10px;
`;
const Text = styled.h2`
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
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

const Intro = () => {
  return (
    <Fragment>
      <Wrapper>
        <IntroImage src={header} alt="bathbombs" />
        <IntroText>
          <Header>Natural Bath Bombs</Header>
        </IntroText>
      </Wrapper>

      <IntroMessage>
          <Text>Bath bombs built with peace of mind at heart</Text>

          <Button variant="outlined" contain>
            Learn More
          </Button>
        </IntroMessage>
    </Fragment>
  );
};

export default Intro;

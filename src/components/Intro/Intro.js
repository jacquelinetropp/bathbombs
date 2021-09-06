import React from "react";
import header from "../../images/intro2.jpg";
import Button from "../Form/Button";
import styled from 'styled-components';

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
`

const Intro = () => {
  return (
    <Wrapper>
      <IntroImage src={header} alt="bathbombs" />
      <IntroText>
        <h2>Natural Bath Bombs</h2>
        <p>Bath bombs built with peace of mind at heart</p>
        <Button variant="outlined">Learn More</Button>
      </IntroText>
    </Wrapper>
  );
};

export default Intro;

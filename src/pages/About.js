import React from "react";
import AboutImage from "../images/about1.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 8rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}
`;

const Header = styled.h1`
  font-size: 7.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  letter-spacing: 23px;
  color: white;
  -webkit-text-stroke: 1px black;
  text-align: center;

  @media only screen and (max-width: 420px) {
    font-size: 5.5rem;
    letter-spacing: 15px;
}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  
  @media only screen and (max-width: 420px) {
    width: 90%;
    margin: 0 auto;
}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
`;

const About = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={AboutImage} alt="bath bombs and women" />
        <Header>About</Header>
      </ImageWrapper>
      <Content>
        <h2>Designed With You In Mind</h2>
        <p>Using the best sourced materials, we created bath bombs that provide you the most luxurious experience. No chemicals or artifical dyes are used. We understand that your skin is nothing more than a loose barrier so ensuring we are using the highest quality ingredients is our top priority. No need to worry about toxic materials entering through your skin. Just relax and let the bubbles take over.</p>
      </Content>
    </Wrapper>
  );
};

export default About;

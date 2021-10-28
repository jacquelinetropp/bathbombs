import React from "react";
import Card from "../Cards/Card";

import styled from "styled-components";
import { DotIcon, HeartIcon, LeafIcon, StarIcon } from "../styles/Icons";
import JaggedLine from "../../images/jaggedline.png";

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-offWhite);
  width: 100%;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem 2rem 6rem 2rem;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LineImage = styled.img`
  width: 100%;
  height: 50px;
  z-index: 3;
`;

const Header = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  padding: 6rem 0 2rem 0;
  text-align: center;
`;

const IntroCard = () => {
  return (
    <GridWrapper>
      <Header><DotIcon /> What we do <DotIcon /></Header>
      <CardGrid>
        <Card
          title="Natural Ingredients"
          text="All of our ingredients are 98% natural and sourced with care for the environment"
          icon={<LeafIcon />}
        />

        <Card
          title="Made with Love"
          text="All of bath bombs are made in small batches with love"
          icon={<HeartIcon />}
          color="green"
        />

        <Card
          title="Packed with Power"
          text="Enjoy the full experience of seeing the color and feeling the fizzle"
          icon={<StarIcon />}
          color="yellow"
        />
      </CardGrid>
      <LineImage src={JaggedLine} />
    </GridWrapper>
  );
};

export default IntroCard;

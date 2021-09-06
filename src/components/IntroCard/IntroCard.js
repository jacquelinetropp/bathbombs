import React from "react";
import Card from "../Cards/Card";

import styled from "styled-components";
import { HeartIcon, LeafIcon, StarIcon } from "../styles/Icons";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 2rem;
`;

const IntroCard = () => {
  return (
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
      />

      <Card
        title="Packed with Power"
        text="Enjoy the full experience of seeing the color and feeling the fizzle"
        icon={<StarIcon />}
      />
    </CardGrid>
  );
};

export default IntroCard;

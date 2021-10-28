import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-right-radius: 10px;
  min-height: 200px;
`;

const Header = styled.div`
  border-top-left-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100px;
  font-size: 2rem;
  text-align: center;
  
`;

const HeaderText = styled.h4`
  color: ${({ color }) => {
    if (color === "yellow") return "var(--color-second)";
    else if (color === "pink") return "var(--color-second)";
    else if (color === "green") return "var(--color-tertiary)";
    else return "var(--color-main)";
  }};
`

const Text = styled.div`
  padding: 2rem;
  font-size: 1.4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const IconWrapper = styled.div`
  background-color: ${({ color }) => {
    if (color === "yellow") return "var(--color-second)";
    else if (color === "pink") return "var(--color-second)";
    else if (color === "green") return "var(--color-tertiary)";
    else return "var(--color-main)";
  }};
  border-radius: 50%;
  height: 100px;
  width: 100px;
  padding: 30px;
  display: flex;
  align-items: center;
`;

const UnderLine = styled.hr`
  height: 10px;
  width: 60%;
  background-color: ${({ color }) => {
    if (color === "yellow") return "var(--color-second)";
    else if (color === "pink") return "var(--color-second)";
    else if (color === "green") return "var(--color-tertiary)";
    else return "var(--color-main)";
  }};
  border: none;
  
`

const IntroCard = ({ title, icon, text, color}) => {
  return (
    <Main>
      <Header>
        <IconWrapper color={color}>{icon}</IconWrapper>
        <HeaderText color={color}>{title}</HeaderText>
        <UnderLine color={color}/>
      </Header>
      <Text>{text}</Text>
    </Main>
  );
};

export default IntroCard;

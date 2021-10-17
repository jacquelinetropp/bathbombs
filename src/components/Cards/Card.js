import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  height: 100%;
`;

const Header = styled.div`
  background-color: var(--color-main);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Text = styled.div`
  padding: 1rem;
`

const IntroCard = ({ title, icon, text }) => {
  return (
    <Main>
      <Header>
        {icon}
        <h4>{title}</h4>
      </Header>
      <Text>{text}</Text>
    </Main>
  );
};

export default IntroCard;

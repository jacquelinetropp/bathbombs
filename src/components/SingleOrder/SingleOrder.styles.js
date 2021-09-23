import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid black;
  margin: 1rem 0;
`;

export const Name = styled.div`
  font-size: 2rem;
  width: 100%;
  border-bottom: 1px solid black;
`;

export const Address = styled.div`
  font-size: 1.4rem;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
  padding: 1rem;
  border-bottom: 1px solid black;
`;

export const ButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
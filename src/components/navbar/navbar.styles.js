import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 10;
`

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  top: 0;
  left: 0;
  background-color: var(--color-second);
  box-shadow: 0 0 1rem rgba(0,0,0, .3);
  z-index: 10;
  position: relative;
`;

export const Logo = styled.img`
  height: 30px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const User = styled.div`
  position: absolute;
  top: 65%;
  right: 7%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding-top: ${({user}) => (user ? "2.5rem" : "5rem")};
  clip-path: polygon(0 25%, 0 100%, 100% 100%, 100% 25%, 70% 25%, 50% 1%, 30% 25%);
  background-color: var(--color-main);
  text-align: center;
`;

export const UserLink = styled(Link)`
    font-size: 1.5rem;
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    color: var(--color-tertiary);
`;

export const UserButton = styled.button`
   font-size: 1.5rem;
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    color: var(--color-tertiary);
    border: none;
`

export const JaggedLine = styled.img`
  background-repeat: repeat-x;
  height: 45px;
  position: absolute;
  z-index: 3;
  top: 75%;
  width: 100%;
`
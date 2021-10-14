import { Link } from "react-router-dom";
import styled from "styled-components";

//Page to allow space for header
export const Page = styled.div`
  margin-top: 10rem;
`;

//Link
export const StyledLink = styled(Link)`
  color: var(--color-textColor);
  font-size: 2.2rem;
`;

//Link that looks like a button
export const ButtonLink = styled(Link)`
  outline: none;
  padding: 1.2rem 2rem;
  border-radius: 2px;
  font-size: 1.2rem;
  color: var(--color-white);
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: var(--color-main);
  text-align: center;
`;

//Message Form Wrapper
export const MessageWrapper = styled.div`
  position: absolute;
  bottom: -15px;
`;

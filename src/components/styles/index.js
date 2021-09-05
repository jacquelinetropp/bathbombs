import { Link } from "react-router-dom";
import styled from "styled-components";

//Page to allow space for header
export const Page = styled.div`
    margin-top: 10rem;
`

//Link
export const StyledLink = styled(Link)`
  color: var(--color-textColor);
  font-size: 2.2rem;
`;

//Message Form Wrapper
export const MessageWrapper = styled.div`
  position: absolute;
  bottom: -15px;
`;

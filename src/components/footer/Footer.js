import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  text-align: center;
  background-color: var(--color-tertiary);
  padding: 1.5rem;
  width: 100%;
  align-self: bottom;
`;

const Footer = () => {
  return <FooterDiv>© Natural Bath Bombs | 2021</FooterDiv>;
};

export default Footer;

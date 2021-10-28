import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import logo from "../../images/logo .png";
import { ButtonLink, StyledLink } from "../styles";
import Hamburger from "./hamburger";
import { JaggedLine, Logo } from "./navbar.styles";
import LineImage from '../../images/jaggedline.png';

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const NavbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  background-color: var(--color-second);
  position: relative;
  position: fixed;
  z-index: 8;
  width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  top: 0;
`;

const Links = styled.div`
  font-size: 1.4rem;
  text-align: center;
  z-index: 5;
`;

const MobileNav = ({ user }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <NavbarDiv>
      <StyledLink to="/">
        <Logo src={logo} alt="Logo" />
      </StyledLink>

      <Hamburger onClick={() => setShow(!show)} />

      {show ? (
        <Links>
          <StyledLink to="/" onClick={() => setShow(false)}>
            <h4>Home</h4>
          </StyledLink>
          <StyledLink to="/about" onClick={() => setShow(false)}>
            <h4>About</h4>
          </StyledLink>
          <StyledLink to="/shop" onClick={() => setShow(false)}>
            <h4>Shop</h4>
          </StyledLink>
          {user ? (
            <StyledLink to="/logout" onClick={() => setShow(false)}>
              <h4>Log Out</h4>
            </StyledLink>
          ) : (
            <Fragment>
              <StyledLink to="/login" onClick={() => setShow(false)}>
                <h4>Log in</h4>
              </StyledLink>
              <StyledLink to="/signup" onClick={() => setShow(false)}>
                <h4>Sign Up</h4>
              </StyledLink>
            </Fragment>
          )}
          <ButtonLink to="/checkout" onClick={() => setShow(false)}>
            Cart
          </ButtonLink>
        </Links>
      ) : (
        ""
      )}
    </NavbarDiv>

  );
};

const mapStateToProps = ({ firebase }) => ({
  user: firebase.auth.uid,
});

const mapDispatchToProps = {};

export default connect()(MobileNav);

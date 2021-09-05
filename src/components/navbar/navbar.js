import React, { Fragment, useState } from "react";
import logo from "../../images/logo .png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { StyledLink } from "../styles";
import { connect } from "react-redux";

import styled from "styled-components";

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 10;
  padding: 2rem;
  width: 100%;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  height: 30px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const User = styled.div`
  position: absolute;
  top: 6%;
  right: 5%;
  z-index: 10;
  display: flex;
  clip-path: polygon(0 25%, 0 100%, 100% 100%, 100% 26%, 69% 25%, 49% 1%, 33% 22%);
  background-color: purple;
`;

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <Fragment>
      <NavbarDiv>
        <StyledLink to="/">
          <h4>Home</h4>
        </StyledLink>
        <StyledLink to="/about">
          <h4>About</h4>
        </StyledLink>
        <StyledLink to="/">
          <Logo src={logo} alt="Logo" />
        </StyledLink>
        <StyledLink to="/shop">
          <h4>Shop</h4>
        </StyledLink>
        <Icons>
          <StyledLink to="/checkout">
            <h4>
              <ShoppingCartIcon />
            </h4>
          </StyledLink>

          <h4>
            <AccountBoxIcon onClick={() => setShow(true)} />
          </h4>
        </Icons>
      </NavbarDiv>

      {show ? (
        <User>
          <StyledLink to="/login" onClick={() => setShow(false)}>
            <h4>Login</h4>
          </StyledLink>
          <StyledLink to="/signup" onClick={() => setShow(false)}>
            <h4>Sign Up</h4>
          </StyledLink>
        </User>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default connect()(Navbar);

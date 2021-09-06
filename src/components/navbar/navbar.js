import React, { Fragment, useState, useEffect } from "react";
import logo from "../../images/logo .png";
import { StyledLink } from "../styles";
import { connect } from "react-redux";
import { AccountIcon, ShoppingIcon } from "../styles/Icons";
import { NavbarDiv, Logo, Icons, User, UserLink, UserButton } from "./navbar.styles";
import * as actions from "../../store/actions";
import Button from "../Form/Button";

const Navbar = ({ signOut, user }) => {
  const [color, setColor] = useState("transparent");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundColor = window.scrollY < 100 ? "transparent" : "white";

      setColor(backgroundColor);
    });
  });
  console.log(color);
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
              <ShoppingIcon />
            </h4>
          </StyledLink>

          <h4>
            <AccountIcon onClick={() => setShow(!show)} />
          </h4>
        </Icons>
      </NavbarDiv>

      {show ? (
        user ? (
          <User user={user}>
            <UserButton onClick={() => signOut()}>Sign Out</UserButton>
          </User>
        ) : (
          <User user={user}>
            <UserLink to="/login" onClick={() => setShow(false)}>
              <h4>Login</h4>
            </UserLink>
            <UserLink to="/signup" onClick={() => setShow(false)}>
              <h4>Sign Up</h4>
            </UserLink>
          </User>
        )
      ) : (
        ""
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ firebase }) => ({
  user: firebase.auth.uid,
});

const mapDispatchToProps = {
  signOut: actions.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

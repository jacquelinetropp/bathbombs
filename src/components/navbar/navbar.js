import React, { Fragment, useState, useEffect } from "react";
import logo from "../../images/logo .png";
import { StyledLink } from "../styles";
import { connect } from "react-redux";
import { AccountIcon, ShoppingIcon } from "../styles/Icons";
import {
  NavbarDiv,
  Logo,
  Icons,
  User,
  UserLink,
  UserButton,
} from "./navbar.styles";
import * as actions from "../../store/actions";
import CartDropdown from "../CartDropDown/CartDropdown";
import MobileNav from "./MobileNav";

const Navbar = ({ signOut, user, toggleCart, hidden, closeCart }) => {
  const [color, setColor] = useState("transparent");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundColor = window.scrollY < 100 ? "transparent" : "white";

      setColor(backgroundColor);
    });
  });
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  let content;

  if (width < 768) {
    content = <MobileNav />;
  } else if (width > 768) {
    content = (
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
            <h4>
              <ShoppingIcon
                onClick={() => {
                  toggleCart();
                  setShow(false);
                }}
              />
            </h4>

            <h4>
              <AccountIcon
                onClick={() => {
                  setShow(!show);
                  closeCart();
                }}
              />
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

        {hidden ? <CartDropdown onClick={() => toggleCart()} /> : ""}
      </Fragment>
    );
  }
  return <Fragment>{content}</Fragment>;
};

const mapStateToProps = ({ firebase, cart }) => ({
  user: firebase.auth.uid,
  hidden: cart.open,
});

const mapDispatchToProps = {
  signOut: actions.signOut,
  toggleCart: actions.toggleCart,
  closeCart: actions.closeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

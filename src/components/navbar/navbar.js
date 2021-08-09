import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../../images/logo .png';

const styles = {
  appbar: {
    backgroundColor: "transparent",
    height: "6rem",
  },
   navbar: {
       display: "flex",
       justifyContent: "space-between",
       alignContent: "center",
       height: "100%",
   },
  links: {
    textDecoration: "none",
    padding: "1rem",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#e3b3be"
    }
  },
  logo: {
    height: "60px"
  }
};

const Navbar = ({ classes }) => {
  return (
    <AppBar elevation={0} className={classes.appbar}>
      <Toolbar className={classes.navbar}>
        <Link to="/" className={classes.links}>
          <Typography color="textPrimary" variant="h5">
            Home
          </Typography>
        </Link>
        <Link to="/about" className={classes.links}>
          <Typography color="textPrimary" variant="h5">
            About
          </Typography>
        </Link>
        <Link to="/" className={classes.links}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </Link>
        <Link to="/shop" className={classes.links}>
          <Typography color="textPrimary" variant="h5">
           Shop
          </Typography>
        </Link>
        <Link to="/checkout" className={classes.links}>
          <Typography color="textPrimary" variant="h5">
           Checkout
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);

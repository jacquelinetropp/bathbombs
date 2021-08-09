import React from "react";
import header from "../../images/intro2.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Typography } from "@material-ui/core";

const styles = {
  container: {
    width: "100%",
    position: "relative"
  },
  introImage: {
    width: "100%",
  },
  introtext: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

const Intro = ({ classes }) => {
  return (
    <div className={classes.container}>
      <img src={header} alt="bathbombs" className={classes.introImage} />
      <div className={classes.introtext}>
        <Typography variant="h2">Natural Bath Bombs</Typography>
        <Typography variant="body1">Bath bombs built with peace of mind at heart</Typography>
        <Button variant="outlined">Learn More</Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Intro);

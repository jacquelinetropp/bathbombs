import React from "react";
import { Fragment } from "react";
import Intro from "../components/Intro/Intro";
import IntroCard from "../components/IntroCard/IntroCard";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {

}

const Home = () => {
  return (
    <Fragment>
      <Intro />
        <IntroCard />
    </Fragment>
  );
};

export default withStyles(styles)(Home);

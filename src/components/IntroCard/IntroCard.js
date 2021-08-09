import React from "react";
import Card from "../Cards/Card";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import EcoIcon from '@material-ui/icons/Eco';
import StarIcon from '@material-ui/icons/Star';

const styles = {
    card: {
        margin: ".5rem"
    },
    icon: {
        height: "25px"
    }
};

const IntroCard = ({ classes }) => {
  return (
    <Grid container  justifyContent="center">
      <Grid item sm={3} xs={12} className={classes.card}>
        <Card
          title="Natural Ingredients"
          text="All of our ingredients are 98% natural and sourced with care for the environment"
          icon={<EcoIcon iconStyles={classes.icon}/>}
        />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.card}>
        <Card
          title="Made with Love"
          text="All of bath bombs are made in small batches with love"
          icon={<FavoriteIcon />}
 
        />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.card}>
        <Card
          title="Packed with Power"
          text="Enjoy the full experience of seeing the color and feeling the fizzle"
          icon={<StarIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(IntroCard);

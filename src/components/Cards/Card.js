import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  main: {
    height: "100%",
    padding: "0%",
  },
  content: {
    padding: "0%",
  },
  header: {
    backgroundColor: "#F2A0B6",
    width: "100%",
    height: "150px",
  },
  icon: {
    height: "25px",
  },
};

const IntroCard = ({ title, icon, text, classes }) => {
  return (
    <Card className={classes.main}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <div className={classes.icon}> {icon}</div>
          <Typography variant="h4">{title}</Typography>
        </div>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(IntroCard);

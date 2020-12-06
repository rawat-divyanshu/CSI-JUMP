import React from "react";
import { programMottoStyles } from "./ProgramMottoStyles";
import { Grid, Paper } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import AimLogo from "../../../../Assets/images/aim-logo.png";

const ProgramMottoCard = ({ programMotto }) => {
  const classes = programMottoStyles();
  return (
    <Grid
      component={Paper}
      elevation={6}
      container
      className={`${classes.card} ${classes.leftCard}`}
    >
      <Grid className={classes.cardTextWrapper} item xs={12} sm={6}>
        <div className={classes.cardTextContainer}>
          <div className={classes.cardText}>
            <div className={classes.cardTitle}>
              <Avatar src={AimLogo} className={classes.aimLogo} />
              <h1 className={classes.cardTitleText}>#{programMotto.id}</h1>
            </div>
            <h1 className={classes.cardSubTitleText}>{programMotto.desc}</h1>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img alt="cardimg" className={classes.cardImg} src={programMotto.img} />
      </Grid>
    </Grid>
  );
};

export default ProgramMottoCard;

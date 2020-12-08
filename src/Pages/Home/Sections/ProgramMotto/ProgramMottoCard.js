import React from "react";
import { programMottoStyles } from "./ProgramMottoStyles";
import { Grid, Paper } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import AimLogo from "../../../../Assets/images/aim-logo.png";

const ProgramMottoCard = ({ programMotto, idx }) => {
  const classes = programMottoStyles();

  const textCard = () => (
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
  );

  const imageCard = () => (
    <Grid item xs={12} sm={6}>
      <img alt="cardimg" className={classes.cardImg} src={programMotto.img} />
    </Grid>
  );
  return (
    <Grid
      component={Paper}
      elevation={6}
      container
      className={`${classes.card} ${
        idx % 2 === 0 ? classes.leftCard : classes.rightCard
      }`}
    >
      {idx % 2 === 0 ? textCard() : imageCard()}
      {idx % 2 !== 0 ? textCard() : imageCard()}
    </Grid>
  );
};

export default ProgramMottoCard;

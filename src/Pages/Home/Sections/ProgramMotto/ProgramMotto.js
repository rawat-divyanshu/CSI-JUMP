import { Container, Grid } from "@material-ui/core";
import React from "react";
import { programMottoStyles } from "./ProgramMottoStyles";
import { programMottoDetails } from "./../../../../data";
import ProgramMottoCard from "./ProgramMottoCard";



const ProgramMotto = () => {
  const classes = programMottoStyles();
  return (
    <div className={classes.wrapperContainer}>
      <Container maxWidth="lg">
        <div className={classes.titleContainer}>
          <h1
            className={`${classes.basicText} ${classes.headerHeading}`}
            style={{ color: "#6C1A93" }}
          >
            Program Motto
          </h1>
          <hr className={classes.underline} />
        </div>
        <Grid container spacing={4}>
          {programMottoDetails.map((programMotto, idx) => (
            <Grid key={programMotto} item xs={12} sm={12}>
              <ProgramMottoCard programMotto={programMotto} idx={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProgramMotto;

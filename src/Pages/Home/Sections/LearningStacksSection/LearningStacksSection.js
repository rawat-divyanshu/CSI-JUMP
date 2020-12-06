import { Container, Grid } from "@material-ui/core";
import React from "react";
import { learningStacksSectionStyles } from "./LearningStacksSectionStyles";
import { learningStackDetails } from "../../../../data";
import LearningStackCard from "./LearningStackCard";

const LearningStacksSection = () => {
  const classes = learningStacksSectionStyles();
  return (
    <React.Fragment>
      <div className={classes.wrapperContainer}>
        <Container maxWidth="lg">
          <div className={classes.titleContainer}>
            <h1
              className={`${classes.basicText} ${classes.headerHeading}`}
              style={{ color: "#ffffff" }}
            >
              Learning Stacks
            </h1>
            <hr className={classes.underline} />
          </div>
          <p className={classes.subTitle}>
            We've collected mentors working in following different stacks to
            give you a guided learning path.
          </p>
          <Grid container spacing={4}>
            {learningStackDetails.map((learningStack) => (
              <Grid key={learningStack} item xs={12} sm={6} lg={4}>
                <LearningStackCard learningStack={learningStack} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className={classes.shapeContainer} />
    </React.Fragment>
  );
};

export default LearningStacksSection;

import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { peopleCategorySectionStyles } from "./PeopleCategorySectionStyles";
import { Container } from "@material-ui/core";
import One from "../../../../Assets/images/one.png";
import Two from "../../../../Assets/images/two.png";
import Three from "../../../../Assets/images/three.png";

const PeopleCategorySection = () => {
  const classes = peopleCategorySectionStyles();
  return (
    <Container className={classes.mainContainer} maxWidth="lg">
      <Grid container>
        <Grid className={classes.titleContainer} item xs={12} sm={12}>
          <h1
            className={`${classes.basicText} ${classes.headerHeading}`}
            style={{ color: "#6C1A93" }}
          >
            Categories of People to be Selected
          </h1>
          <hr className={classes.underline} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <div>
                      <img src={One} />
                    </div>
                    <div className={classes.cardTextContainer}>
                      <h3 className={classes.cardTitle}>L1 Learners</h3>
                      <p className={classes.cardText}>
                        These will be the students from 1st year, who'll start
                        from basics of everything and will later move to field
                        specific learning.
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <div>
                      <img src={Two} />
                    </div>
                    <div className={classes.cardTextContainer}>
                      <h3 className={classes.cardTitle}>L2 Learners</h3>
                      <p className={classes.cardText}>
                        These will be students from 2nd and 3rd year who wish to
                        learn something specific to a field.
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <div>
                      <img src={Three} />
                    </div>
                    <div className={classes.cardTextContainer}>
                      <h3 className={classes.cardTitle}>Mentors</h3>
                      <p className={classes.cardText}>
                        These will be the students from 2nd, 3rd and final year
                        working in some particular field with some good amount
                        of knowledge.
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PeopleCategorySection;

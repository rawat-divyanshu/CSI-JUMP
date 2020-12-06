import React from "react";
import { Grid } from "@material-ui/core";
import { peopleCategorySectionStyles } from "./PeopleCategorySectionStyles";
import { Container } from "@material-ui/core";
import { selectionCategoryDetails } from "../../../../data";
import PeopleCategoryCard from "./PeopleCategoryCard";

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
            {selectionCategoryDetails.map((categoryData) => (
              <Grid key={categoryData} item xs={12} sm={12} md={4} lg={4}>
                <PeopleCategoryCard categoryData={categoryData} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PeopleCategorySection;

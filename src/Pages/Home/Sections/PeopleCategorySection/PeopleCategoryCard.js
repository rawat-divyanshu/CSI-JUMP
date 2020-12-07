import React from "react";
import { peopleCategorySectionStyles } from "./PeopleCategorySectionStyles";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { Slide } from 'react-awesome-reveal';

const PeopleCategoryCard = ({ categoryData }) => {
  const classes = peopleCategorySectionStyles();
  return (
    <Slide triggerOnce>
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <div>
            <img alt="categoryno" src={categoryData.img} />
          </div>
          <div className={classes.cardTextContainer}>
            <h3 className={classes.cardTitle}>{categoryData.title}</h3>
            <p className={classes.cardText}>{categoryData.description}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Slide>
  );
};

export default PeopleCategoryCard;

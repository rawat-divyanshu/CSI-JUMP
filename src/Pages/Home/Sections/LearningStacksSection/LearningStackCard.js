import React from "react";
import { learningStacksSectionStyles } from "./LearningStacksSectionStyles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Slide } from 'react-awesome-reveal';


const LearningStackCard = ({ learningStack }) => {
  const classes = learningStacksSectionStyles();
  return (
    <Slide triggerOnce>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={learningStack.img}
            style={{ height: 200 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant={learningStack.id === 6 ? "h6" : "h5"}
              component="h2"
            >
              {learningStack.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {learningStack.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Slide>
  );
};

export default LearningStackCard;

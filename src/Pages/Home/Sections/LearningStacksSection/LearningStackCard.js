import React from "react";
import { learningStacksSectionStyles } from "./LearningStacksSectionStyles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const LearningStackCard = ({ learningStack }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const classes = learningStacksSectionStyles();
  
  return (

    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={{
      visible: { opacity: 1,  scale:1},
      hidden: { opacity: 0, scale:0.5 }
    }}
    transition={{duration: 0.5}}
 
    
    >
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
    </motion.div>
    </motion.div>
  );
};

export default LearningStackCard;

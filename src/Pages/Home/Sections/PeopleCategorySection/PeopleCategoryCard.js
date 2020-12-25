import React from "react";
import { peopleCategorySectionStyles } from "./PeopleCategorySectionStyles";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const PeopleCategoryCard = ({ categoryData }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const classes = peopleCategorySectionStyles();
  return (
    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={{
      visible: { opacity: 1, x: 0},
      hidden: { opacity: 0, x: -300 }
    }}
    transition={{duration: 1}}
 
    
    >

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
    </motion.div>
  );
};

export default PeopleCategoryCard;

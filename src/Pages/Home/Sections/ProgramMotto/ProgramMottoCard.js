import React from "react";
import { programMottoStyles } from "./ProgramMottoStyles";
import { Grid, Paper } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import AimLogo from "../../../../Assets/images/aim-logo.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";




const LeftAnimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const Oanimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0},
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};


const ProgramMottoCard = ({ programMotto, idx }) => {
  const classes = programMottoStyles();

  const textCard = () => (
    <Grid className={classes.cardTextWrapper} item xs={12} sm={6}>
      <Oanimation>
      <div className={classes.cardTextContainer}>
        <div className={classes.cardText}>
          <div className={classes.cardTitle}>
            <Avatar src={AimLogo} className={classes.aimLogo} />
            <h1 className={classes.cardTitleText}>#{programMotto.id}</h1>
          </div>
          <h1 className={classes.cardSubTitleText}>{programMotto.desc}</h1>
        </div>
      </div>
      </Oanimation>
    </Grid>
  );

  const imageCard = () => (
    <Grid item xs={12} sm={6}>
      <LeftAnimation>
      <img alt="cardimg" className={classes.cardImg} src={programMotto.img} />
    </LeftAnimation>
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

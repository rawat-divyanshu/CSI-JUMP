import React from "react";
import { headerStyles } from "./HeaderStyles";
import Wave from "react-wavify";
import { Grid } from "@material-ui/core";
import Logo from "../../../../Assets/images/logo-csi.png";


import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";




const TextAnimation = ({ children }) => {
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
        hidden: { opacity: 0, y: -15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.25,
            type: "spring",
            damping: 100,
            mass: 4
          }
        }
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};


const Header = () => {
  const classes = headerStyles();
  return (
    <div className={classes.wrapperContainer}>
      <div className={classes.mainContainer} style={{ height: "500px" }}>
        <Grid className={classes.headerContainer} container>
          <Grid
            className={classes.logoContainer}
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <TextAnimation>
            <img alt="logoimg" src={Logo} className={classes.logo} />
            </TextAnimation>
          </Grid>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
          >

<TextAnimation>
            <h1 className={`${classes.basicText} ${classes.headerHeading}`}>
              Computer Society of India - Student Chapter <br /> BIT Mesra -
              Jaipur Campus
            </h1>
            <h3
              className={classes.basicText}
              style={{
                textAlign: "center",
                margin: "1rem",
              }}
            >
              Presents
            </h3>
            <h1 className={`${classes.basicText} ${classes.headerHeading}`}>
              Junior's Uplift and Mentorship Program
            </h1>
            </TextAnimation>
          </Grid>
        </Grid>
      </div>
      <Wave
        fill="#F5F5F5"
        paused={false}
        options={{
          height: 90,
          amplitude: 25,
          speed: 0.3,
          points: 5,
        }}
      />
    </div>
  );
};

export default Header;

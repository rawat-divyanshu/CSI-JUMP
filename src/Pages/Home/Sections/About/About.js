import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { aboutStyles } from "./AboutStyles";
import Logo from "../../../../Assets/images/logo-jump.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const About = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  const classes = aboutStyles();
  return (
    <React.Fragment>
      <div className={classes.mainContainer}>
        <Container
          className={classes.dataContainer}
          component={Paper}
          elevation={8}
          maxWidth="lg"
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
          <Grid container>
            <Grid className={classes.titleContainer} item xs={12} sm={12}>
              <h1
                className={`${classes.basicText} ${classes.headerHeading}`}
                style={{ color: "#6C1A93" }}
              >
                About The Program
              </h1>
              <hr className={classes.underline} />
            </Grid>
            <Grid className={classes.upperLogo} item xs={12} sm={12}>
              <img alt="logoimg" src={Logo} className={classes.logo} />
            </Grid>
            <Grid
              className={classes.dataText}
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
            >
              A program initiated under CSI both for Juniors and Mentors
              (seniors). Where Juniors will be introduced to different fields of
              Technology and Programming such as Programming Languages, Data
              Structures and Algorithms, Competitive Programming, Machine
              Learning, AI, Web Development, Android Development, Open Source,
              and many more and all forethought for the year 2021 mentored by
              their Seniors. Guided by proper Roadmap for the particular domain
              students are interested in.
              <br />
              <br />
              This not only benefits the Juniors but Seniors as well. They get
              an opportunity to guide and Mentor the students of their domain of
              interest and thus developing leadership skills and improving their
              own knowledge.
              <br />
              <br />
              Apart from this Technical side this will also bridge the gap
              between their Juniors and Seniors, making it easier to communicate
              and learn.
            </Grid>
            <Grid
              className={classes.sideLogo}
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <img alt="logoimg" src={Logo} className={classes.logo} />
            </Grid>
          </Grid>
          </motion.div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default About;

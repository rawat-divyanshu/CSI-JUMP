import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { programMottoStyles } from "./ProgramMottoStyles";
import Aim1 from "../../../../Assets/images/aim-1.svg";
import Aim2 from "../../../../Assets/images/aim-2.svg";
import Aim3 from "../../../../Assets/images/aim-3.svg";
import Aim4 from "../../../../Assets/images/aim-4.svg";
import { Avatar } from "@material-ui/core";
import AimLogo from "../../../../Assets/images/aim-logo.png";

const ProgramMotto = () => {
  const classes = programMottoStyles();
  return (
    <div className={classes.wrapperContainer}>
      <Container maxWidth="lg">
        <div className={classes.titleContainer}>
          <h1
            className={`${classes.basicText} ${classes.headerHeading}`}
            style={{ color: "#6C1A93" }}
          >
            Program Motto
          </h1>
          <hr className={classes.underline} />
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Grid
              component={Paper}
              elevation={6}
              container
              className={`${classes.card} ${classes.leftCard}`}
            >
              <Grid className={classes.cardTextWrapper} item xs={12} sm={6}>
                <div className={classes.cardTextContainer}>
                  <div className={classes.cardText}>
                    <div className={classes.cardTitle}>
                      <Avatar
                        alt="Remy Sharp"
                        src={AimLogo}
                        className={classes.aimLogo}
                      />
                      <h1 className={classes.cardTitleText}>#1</h1>
                    </div>
                    <h1 className={classes.cardSubTitleText}>
                      Early start for 1st year students to get familiar with the
                      technologies, giving them enough time to pick their
                      interests.
                    </h1>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img className={classes.cardImg} src={Aim1} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid
              component={Paper}
              elevation={6}
              container
              className={`${classes.card} ${classes.rightCard}`}
            >
              <Grid item xs={12} sm={6}>
                <img className={classes.cardImg} src={Aim3} />
              </Grid>
              <Grid className={classes.cardTextWrapper} item xs={12} sm={6}>
                <div className={classes.cardTextContainer}>
                  <div className={classes.cardText}>
                    <div className={classes.cardTitle}>
                      <Avatar
                        alt="Remy Sharp"
                        src={AimLogo}
                        className={classes.aimLogo}
                      />
                      <h1 className={classes.cardTitleText}>#2</h1>
                    </div>
                    <h1 className={classes.cardSubTitleText}>
                      Working together will give a sense of working as a
                      community. Since, people with similar interests will be
                      working together.
                    </h1>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid
              component={Paper}
              elevation={6}
              container
              className={`${classes.card} ${classes.leftCard}`}
            >
              <Grid className={classes.cardTextWrapper} item xs={12} sm={6}>
                <div className={classes.cardTextContainer}>
                  <div className={classes.cardText}>
                    <div className={classes.cardTitle}>
                      <Avatar
                        alt="Remy Sharp"
                        src={AimLogo}
                        className={classes.aimLogo}
                      />
                      <h1 className={classes.cardTitleText}>#3</h1>
                    </div>
                    <h1 className={classes.cardSubTitleText}>
                      Being continuosuly mentored by Seniors, will create a
                      swift channel of communication and interaction between
                      Seniors and Juniors.
                    </h1>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img className={classes.cardImg} src={Aim2} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid
              component={Paper}
              elevation={6}
              container
              className={`${classes.card} ${classes.rightCard}`}
            >
              <Grid item xs={12} sm={6}>
                <img className={classes.cardImg} src={Aim4} />
              </Grid>
              <Grid className={classes.cardTextWrapper} item xs={12} sm={6}>
                <div className={classes.cardTextContainer}>
                  <div className={classes.cardText}>
                    <div className={classes.cardTitle}>
                      <Avatar
                        alt="Remy Sharp"
                        src={AimLogo}
                        className={classes.aimLogo}
                      />
                      <h1 className={classes.cardTitleText}>#4</h1>
                    </div>
                    <h1 className={classes.cardSubTitleText}>
                      Mentors will get chance to show off their leadership
                      skills. Also if they feel a bit underconfident about it,
                      it'll help to enhance it.
                    </h1>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProgramMotto;

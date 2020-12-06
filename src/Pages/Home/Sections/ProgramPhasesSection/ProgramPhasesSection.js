import React from "react";
import { programPhasesSectionStyles } from "./ProgramPhasesSectionStyles";
import { Container } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import One from "../../../../Assets/images/one-2.png";
import Two from "../../../../Assets/images/two-2.png";
import Three from "../../../../Assets/images/three-2.png";
import Avatar from "@material-ui/core/Avatar";

const ProgramPhasesSection = () => {
  const classes = programPhasesSectionStyles();
  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.wrapperContainer}>
      <Container
        component={Paper}
        elevation={4}
        className={classes.mainContainer}
        maxWidth="lg"
      >
        <Grid container>
          <Grid className={classes.titleContainer} item xs={12} sm={12}>
            <h1
              className={`${classes.basicText} ${classes.headerHeading}`}
              style={{ color: "#6C1A93" }}
            >
              Program Execution
            </h1>
            <hr className={classes.underline} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Timeline align={smMatch ? "left" : "alternate"}>
              <TimelineItem>
                <TimelineOppositeContent
                  className={classes.oppositeContentContainer}
                >
                  <h3 className={classes.timeLineTitle}>Phase 1</h3>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    {smMatch ? (
                      <Avatar alt="firstName lastName" src={One} />
                    ) : (
                      <img alt="oneimg" src={One} />
                    )}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.timeLineCard}>
                    <h3 className={classes.timeLineCardTitle}>Phase 1</h3>
                    <ul className={classes.timeLineCardList}>
                      <li className={classes.timeLineCardText}>
                        In this phase, L1 Learners will go through all the
                        basics for continuing further in the program.
                      </li>
                      <li className={classes.timeLineCardText}>
                        In this phase, L2 Learners will select the specific
                        field of their choice and will start working guided with
                        the mentors.
                      </li>
                    </ul>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  className={classes.oppositeContentContainer}
                >
                  <h3 className={classes.timeLineTitle}>Phase 2</h3>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    {smMatch ? (
                      <Avatar alt="firstName lastName" src={Two} />
                    ) : (
                      <img alt="img2" src={Two} />
                    )}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.timeLineCard}>
                    <h3 className={classes.timeLineCardTitle}>Phase 2</h3>
                    <ul className={classes.timeLineCardList}>
                      <li className={classes.timeLineCardText}>
                        In this phase, L1 Learners will pick their particular
                        field of interest and will start learning and working in
                        it, guided by L2 learners, a long with mentors.
                      </li>
                      <li className={classes.timeLineCardText}>
                        In this phase, L2 Learners will continue their learnings
                        same as of Phase 1, but alongside they'll also mentor L1
                        Learners.
                      </li>
                    </ul>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  className={classes.oppositeContentContainer}
                >
                  <h3 className={classes.timeLineTitle}>Project Exhibition</h3>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    {smMatch ? (
                      <Avatar alt="firstName lastName" src={Three} />
                    ) : (
                      <img alt="img3" src={Three} />
                    )}
                  </TimelineDot>
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.timeLineCard}>
                    <h3 className={classes.timeLineCardTitle}>
                      Project Exhibition
                    </h3>
                    <ul className={classes.timeLineCardList}>
                      <li className={classes.timeLineCardText}>
                        Since all of this will be project based learning, so
                        through the end of a year we'll have small a event
                        either in BIT-J Techfest or an CSI individual event,
                        where all the participants will get chance to show off
                        their projects. And the best projects will be rewarded
                        accordingly.
                      </li>
                    </ul>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProgramPhasesSection;

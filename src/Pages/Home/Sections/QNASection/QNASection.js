import React from "react";
import { qnaSectionStyles } from "./QNASectionStyles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import QueIcon from "../../../../Assets/images/que-icon.png";
import AnsIcon from "../../../../Assets/images/ans-icon.png";

const QNASection = () => {
  const classes = qnaSectionStyles();
  return (
    <div className={classes.wrapperContainer}>
      <Container
        className={classes.mainContainer}
        component={Paper}
        elevation={6}
        maxWidth="lg"
      >
        <div className={classes.titleContainer}>
          <h1
            className={`${classes.basicText} ${classes.headerHeading}`}
            style={{ color: "#6C1A93" }}
          >
            Questions you might have
          </h1>
          <hr className={classes.underline} />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={QueIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    Is their any fee or charges for being part of this program ?
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={AnsIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    Their is no as such charges for being part of the program.
                    The only required condition is you have to avail CSI
                    membership.
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={QueIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    Is this program a part of curriculum ? Will we get any
                    credits for being part of it ?
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={AnsIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    No this program is not part of college curriculum. This
                    event is solely managed by CSI - BIT Jaipur and aims for
                    better technological understandings of the students.
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={QueIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    Will their be any exam for Learning Stack Selection ?
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={AnsIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    Yes, for L1 Learners Phase 1 will have no exam, since
                    they'll be guided regarding basics in that Phase. After the
                    end of Phase 1, L1 Learners will have a exam, and based on
                    results of it, they'll be allotted some stack.
                    <br />
                    <br />
                    For L2 Learners they'll have a exam before starting of Phase
                    1, based on results of it, they'll be allotted particular
                    learning stack.
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={QueIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    Can I go for any number of Learning Stacks ?
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={AnsIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    During the program you'll be obviously introduced to what
                    each and every stack significances are, but at last in the
                    learning phase, you'll only be allowed to be part of maximum
                    2 stacks of your choice.
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={QueIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    Will I get any certificate for being part of the program ?
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container className={classes.qnaContainer}>
                  <Grid className={classes.iconContainer} item xs={2} sm={1}>
                    <img src={AnsIcon} />
                  </Grid>
                  <Grid className={classes.qnaText} item xs={10} sm={11}>
                    This program is purely result oriented, if you haven't tried
                    to perform in the program or you didn't remain active,
                    you'll not be alloted certificate.
                    <br />
                    <br />
                    Yes, the active participants of the programs will be
                    provided certificates from CSI - BIT Jaipur.
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default QNASection;

import React from "react";
import { qnaSectionStyles } from "./QNASectionStyles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import QueIcon from "../../../../Assets/images/que-icon.png";
import AnsIcon from "../../../../Assets/images/ans-icon.png";
import { Slide } from 'react-awesome-reveal';


const QNAAccordion = ({ qna }) => {
  const classes = qnaSectionStyles();
  return (
    <Slide triggerOnce>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container className={classes.qnaContainer}>
          <Grid className={classes.iconContainer} item xs={2} sm={1}>
            <img alt="queicon" src={QueIcon} />
          </Grid>
          <Grid className={classes.qnaText} item xs={10} sm={11}>
            {qna.que}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container className={classes.qnaContainer}>
          <Grid className={classes.iconContainer} item xs={2} sm={1}>
            <img alt="ansicon" src={AnsIcon} />
          </Grid>
          <Grid className={classes.qnaText} item xs={10} sm={11}>
            {qna["ans"].split("\n").map((i) => (
              <p key={i} className={classes.qnaText}>
                {i}
              </p>
            ))}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
    </Slide>
  );
};

export default QNAAccordion;

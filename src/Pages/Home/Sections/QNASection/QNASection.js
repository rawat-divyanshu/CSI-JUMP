import React from "react";
import { qnaSectionStyles } from "./QNASectionStyles";
import { Container, Paper, Grid } from "@material-ui/core";
import { qnaDetails } from "./../../../../data";
import QNAAccordion from "./QNAAccordion";

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
          {qnaDetails.map((qna) => (
            <Grid key={qna} item xs={12} sm={12}>
              <QNAAccordion qna={qna} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default QNASection;

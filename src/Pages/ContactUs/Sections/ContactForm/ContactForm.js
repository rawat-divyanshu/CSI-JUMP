import { Grid, Container, Paper, Button } from "@material-ui/core";
import React from "react";
import { contactFormStyles } from "./ContactFormStyles";
import ContactUs from "../../../../Assets/images/contact-us.svg";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const ContactForm = () => {
  const classes = contactFormStyles();
  return (
    <div className={classes.wrapperContainer}>
      <Container maxWidth="lg">
        <Grid
          className={classes.formContainer}
          container
          component={Paper}
          elevation={4}
        >
          <Grid item xs={12} sm={6}>
            <img
              className={classes.contactImg}
              src={ContactUs}
              alt="contactimg"
            />
          </Grid>
          <Grid className={classes.formCard} item xs={12} sm={6}>
            <div className={classes.formInput}>
              <TextField
                className={classes.formInput}
                label="Full Name"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className={classes.formInput}>
              <TextField
                className={classes.formInput}
                label="Email ID"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className={classes.formInput}>
              <TextField
                className={classes.formInput}
                label="Enter Your Message"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
              />
            </div>
            <div className={classes.formBtn}>
              <Button
                className={classes.formBtn}
                variant="contained"
                color="primary"
              >
                Send Message
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactForm;

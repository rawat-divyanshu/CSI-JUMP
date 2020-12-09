import { Container, Grid } from "@material-ui/core";
import React from "react";
import { footerStyles } from "./FooterStyles";
import CSILogo from "../../../../Assets/images/logo-csi.png";

const Footer = () => {
  const classes = footerStyles();
  return (
    <React.Fragment>
      <div className={classes.waveContainer} />
      <div className={classes.wrapperContainer}>
        <Container maxWidth="lg">
          <Grid container className={classes.footerContainer}>
            <Grid item xs={12} sm={12}>
              <Grid className={classes.aboutContainer} container>
                <Grid
                  className={classes.imageContainer}
                  item
                  xs={12}
                  sm={6}
                  md={2}
                >
                  <img alt="csilogo" src={CSILogo} className={classes.logo} />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <h1 className={classes.logoTitle}>
                    Computer Society Of India
                    <br />
                    Student Chapter - BIT Mesra, Jaipur Campus
                  </h1>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <p className={classes.logoSubTitle}>
                    Computer Society Of India, Student Chapter - BIT Mesra,
                    Jaipur Campus aims to develop a community of self - focused
                    and aware individuals inside Campus, working and learning
                    together to improve themselves along with whosoever comes in
                    the way.
                  </p>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                >
                  <hr
                    style={{
                      width: "80%",
                      height: "2px",
                      color: "white",
                      backgroundColor: "white",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{
                color: "white",
                fontFamily: "Fira Sans",
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "1rem",
              }}
              item
              xs={12}
              sm={12}
            >
              Designed & Developed by :
              <br />
              <a
                style={{ color: "#ffffff" }}
                href="https://www.rawatdivyanshu.com/"
                target="_blank"
              >
                Divyanshu Rawat (BTECH/25008/18) [Click to Follow]
              </a>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1rem",
              }}
              item
              xs={12}
              sm={12}
              md={12}
            >
              <hr
                style={{
                  width: "80%",
                  height: "2px",
                  color: "white",
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid
              style={{
                color: "white",
                fontFamily: "Fira Sans",
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "1rem",
              }}
              item
              xs={12}
              sm={12}
            >
              Birla Institute Of Technology, Mesra - Jaipur Campus
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;

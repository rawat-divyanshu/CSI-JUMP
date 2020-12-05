import React from "react";
import { headerStyles } from "./HeaderStyles";
import Wave from "react-wavify";
import { Grid } from "@material-ui/core";
import Logo from "../../../../Assets/images/logo-csi.png";

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
            <img src={Logo} className={classes.logo} />
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

import React from "react";
import { headerStyles } from "./HeaderStyles";
import Wave from "react-wavify";

const Header = () => {
  const classes = headerStyles();
  return (
    <div className={classes.wrapperContainer}>
      <div className={classes.mainContainer}>
        <h1 className={classes.title}>Contact Us</h1>
        <h3 className={classes.subTitle}>
          Contact us using the form below and we'll get back to you right away.
        </h3>
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

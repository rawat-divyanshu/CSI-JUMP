import React from "react";
import { footerStyles } from "./FooterStyles";

const Footer = () => {
  const classes = footerStyles();
  return (
    <div className={classes.wrapperContainer}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;

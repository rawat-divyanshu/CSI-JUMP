import React from "react";
import { constructionStyles } from "./ConstructionStyles";
import ConstructionImg from "../../Assets/images/construction-asset.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Construction = () => {
  const classes = constructionStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        <h1 className={classes.title}>Oops!</h1>
        <h2 className={classes.subTitle}>This page is under construction.</h2>
        <h4 className={classes.text}>We will be soon back with this page.</h4>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          disableElevation
        >
          Go to Home
        </Button>
      </div>
      <div className={classes.footerContainer}>
        <img
          className={classes.constructionImage}
          src={ConstructionImg}
          alt="constructionimg"
        />
      </div>
    </div>
  );
};

export default Construction;

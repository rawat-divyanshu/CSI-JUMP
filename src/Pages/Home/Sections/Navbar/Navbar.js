import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { NavbarStyles } from "./NavbarStyles";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Navbar = (props) => {
  const classes = NavbarStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined,
  });
  return (
    <ElevationScroll {...props}>
      <AppBar
        color={!trigger ? "transparent" : "primary"}
        position="fixed"
        className={classes.appbar}
      >
        <Toolbar>
          <h4 className={classes.navTitle}>CSI - BITJ</h4>
          <div className={classes.navDivider} />
          <div className={classes.navMenu}>
            <h4 className={classes.navMenuItem}>Home</h4>
            <h4 className={classes.navMenuItem}>About</h4>
            <h4 className={classes.navMenuItem}>Learners Categories</h4>
            <h4 className={classes.navMenuItem}>Program Execution</h4>
            <h4 className={classes.navMenuItem}>Learning Stacks</h4>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;

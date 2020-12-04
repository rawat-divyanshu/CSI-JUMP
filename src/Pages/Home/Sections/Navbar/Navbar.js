import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { NavbarStyles } from "./NavbarStyles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

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

  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.down("sm"));

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
            <h4 className={classes.navMenuItem}>Events</h4>
            <h4 className={classes.navMenuItem}>Gallery</h4>
            <h4 className={classes.navMenuItem}>Our Team</h4>
            <h4 className={classes.navMenuItem}>Contact Us</h4>
          </div>

          {smMatch && (
            <div className={classes.mobileDrawer}>
              <IconButton>
                <MenuIcon fontSize="large" style={{ color: "#ffffff" }} />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;

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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { navItems } from "./../../../../data";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const NavAnimation = ({ children }) => {

  return (
    <motion.div
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};


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

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
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
            {navItems.map((navItem, idx) => (
              <NavAnimation>
              <Link
                className={
                  idx === 0
                    ? `${classes.navMenuItem} ${classes.activeLink}`
                    : classes.navMenuItem
                }
                to={navItem.link}
              >
                {navItem.title}
              </Link>
              </NavAnimation>
            ))}
          </div>

          {smMatch && (
            <div className={classes.mobileDrawer}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon fontSize="large" style={{ color: "#ffffff" }} />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
              >
                <div
                  className={classes.list}
                  role="presentation"
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                >
                  <div className={classes.drawerList}>
                    <List>
                      {navItems.map((navItem, idx) => (
                        <ListItem
                          className={classes.drawerListItem}
                          button
                          key={navItem}
                          component={Link}
                          to={navItem.link}
                        >
                          <ListItemText
                            className={
                              idx === 0
                                ? `${classes.drawerListText} ${classes.activeLink}`
                                : classes.drawerListText
                            }
                            primary={navItem.title}
                            disableTypography
                          />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                </div>
              </SwipeableDrawer>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;

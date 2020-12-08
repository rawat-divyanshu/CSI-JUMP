import { makeStyles } from "@material-ui/core/styles";

export const NavbarStyles = makeStyles((theme) => ({
  appbar: {
    padding: "0.8rem 2rem 0.8rem 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 0.5rem 0.8rem 0.5rem",
    },
  },
  navTitle: {
    fontFamily: "Fira Sans",
    color: "#ffffff",
    fontSize: "1.8rem",
  },
  navDivider: {
    marginLeft: "auto",
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    justifyItems: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navMenuItem: {
    marginLeft: "1.5rem",
    color: "#ffffff",
    fontFamily: "Fira Sans",
    fontSize: "1.2rem",
  },
  list: {
    width: 250,
    height: "100%",
    backgroundColor: "#6C1A93",
  },
  drawerList: {
    padding: "2rem 1rem 2rem 1rem",
  },
  drawerListText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  drawerListItem: {
    borderBottom: "1px solid #ffffff",
    marginBottom: "1rem",
  },
  activeLink: {
    color: "#ff8c00",
  },
}));

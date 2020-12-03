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
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navMenuItem: {
    marginLeft: "1.5rem",
    color: "#ffffff",
    fontFamily: "Fira Sans",
    fontSize: "1.2rem",
  },
}));

import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../../../Assets/images/header-bg.png";

export const headerStyles = makeStyles((theme) => ({
  wrapperContainer: {
    background: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "right",
    },
  },
  headerContainer: {
    padding: "12rem 4rem 2rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "5rem 0.5rem 0rem 0.5rem",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  basicText: {
    color: "#ffffff",
    fontFamily: "Fira Sans",
  },
  headerHeading: {
    fontSize: "3rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      height: "70%",
    },
    [theme.breakpoints.down("md")]: {
      height: "80%",
    },
  },
}));

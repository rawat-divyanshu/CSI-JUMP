import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../../../Assets/images/Bg-4.png";

export const aboutStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "-0.5rem",
    backgroundColor: "#F5F5F5",
    padding: "0.5rem",
    paddingTop: "1rem",
    zIndex: "100",
    marginBottom: "1rem",
  },
  dataContainer: {
    padding: "2rem",
    background: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
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
      fontSize: "2rem",
    },
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.5rem",
    },
  },
  underline: {
    width: "300px",
    height: "4px",
    backgroundColor: "#6C1A93",
  },
  dataText: {
    fontFamily: "Fira Sans",
    fontSize: "1.3rem",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
      fontSize: "1.2rem",
    },
  },
  sideLogo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  upperLogo: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    display: "none",
    marginBottom: "1.5rem",
  },
  logo: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
}));

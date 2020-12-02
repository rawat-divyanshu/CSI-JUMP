import { makeStyles } from "@material-ui/core/styles";

export const aboutStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "-1rem",
    backgroundColor: "#003399",
    padding: "0.5rem",
    paddingTop: "2rem",
  },
  dataContainer: {
    padding: "2rem",
    zIndex: "100",
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
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.5rem",
    },
  },
  underline: {
    width: "300px",
    height: "4px",
    backgroundColor: "#d02d5a",
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
  shapeContainer: {
    height: "8vh",
    clipPath: "polygon(100% 0, 100% 10%, 50% 100%, 0 10%, 0 0)",
    backgroundColor: "#003399",
    [theme.breakpoints.down("sm")]: {
      height: "4vh",
    },
  },
}));

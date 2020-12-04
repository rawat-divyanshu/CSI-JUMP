import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../../../Assets/images/Bg-4.png";

export const qnaSectionStyles = makeStyles((theme) => ({
  wrapperContainer: {
    backgroundColor: "#F5F5F5",
    padding: "2rem 0.5rem 2rem 0.5rem",
  },
  mainContainer: {
    background: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    padding: "2rem 1rem 2rem 1rem",
  },
  basicText: {
    color: "#ffffff",
    fontFamily: "Fira Sans",
  },
  headerHeading: {
    fontSize: "3rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2.5rem",
    },
  },
  underline: {
    width: "300px",
    height: "4px",
    backgroundColor: "#6C1A93",
  },
  qnaContainer: {
    display: "flex",
    alignItems: "center",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  qnaText: {
    color: "#6C1A93",
    fontSize: "1.3rem",
    fontFamily: "Fira Sans",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      paddingLeft: "0.2rem",
    },
  },
}));

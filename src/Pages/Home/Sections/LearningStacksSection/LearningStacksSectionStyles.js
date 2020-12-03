import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../../../Assets/images/bg-1.png";

export const learningStacksSectionStyles = makeStyles((theme) => ({
  wrapperContainer: {
    padding: "2rem 0rem 2rem 0rem",
    backgroundImage: "linear-gradient(to right, #A92994, #501393)",
  },
  mainContainer: {
    padding: "2rem 0rem 2rem 0rem",
    background: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
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
    backgroundColor: "#ffffff",
  },
  subTitle: {
    color: "#ffffff",
    fontSize: "1.1rem",
    fontFamily: "Fira Sans",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
}));

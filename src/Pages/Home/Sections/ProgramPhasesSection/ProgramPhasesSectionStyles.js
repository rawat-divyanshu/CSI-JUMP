import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../../../Assets/images/bg-1.png";

export const programPhasesSectionStyles = makeStyles((theme) => ({
  wrapperContainer: {
    padding: "1rem 0.5rem 2rem 0.5rem",
    marginBottom: "2rem",
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
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.5rem",
    },
  },
  underline: {
    width: "300px",
    height: "4px",
    backgroundColor: "#6C1A93",
  },
  timeLineCardList: {
    listStylePosition: "inside",
    listStyleType: "disc",
  },
  timeLineCard: {
    padding: "1rem 1rem 0.1rem 1rem",
    textAlign: "left",
  },
  timeLineCardText: {
    fontSize: "1.1rem",
    fontFamily: "Fira Sans",
    marginBottom: "1rem",
  },
  timeLineTitle: {
    fontSize: "1.8rem",
    fontFamily: "Fira Sans",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  timeLineCardTitle: {
    fontSize: "1.2rem",
    fontFamily: "Fira Sans",
    marginBottom: "1rem",
    textAlign: "center",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  oppositeContentContainer: {
    [theme.breakpoints.down("sm")]: {
      flex: "0",
      display: "none",
    },
  },
}));

import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../../../Assets/images/bg-1.png";

export const peopleCategorySectionStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2rem",
    marginBottom: "2rem",
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
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontFamily: "Oswald",
    marginBottom: "0.5rem",
  },
  cardText: {
    fontSize: "1rem",
    fontFamily: "Fira Sans",
  },
  card: {
    background: `url(${Bg})`,
    backgroundSize: "contain",
  },
}));

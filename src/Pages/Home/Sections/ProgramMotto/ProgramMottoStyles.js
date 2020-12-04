import { makeStyles } from "@material-ui/core/styles";
import CardBg from "../../../../Assets/images/card-bg.png";
import CardBgMirror from "../../../../Assets/images/card-bg-mirror.png";
import Bg from "../../../../Assets/images/Bg-4.png";

export const programMottoStyles = makeStyles((theme) => ({
  wrapperContainer: {
    backgroundColor: "#F5F5F5",
    padding: "2rem 0.5rem 2rem 0.5rem",
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
  card: {
    padding: "2rem 1rem 2rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "sapce-between",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem 0.2rem 1.5rem 0.2rem",
    },
  },
  leftCard: {
    background: `url(${CardBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  rightCard: {
    background: `url(${CardBgMirror})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  cardTextContainer: {
    padding: "0rem 3rem 0rem 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "0rem 2rem 0rem 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 1rem 0rem 1rem",
    },
  },
  cardText: {
    background: `url(${Bg})`,
    borderRadius: "0.5rem",
    backgroundSize: "contain",
    backgroundPosition: "center",
    padding: "1rem 2rem 1rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      padding: "1rem 1.5rem 1rem 1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1.5rem 0.5rem 1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0.5rem 1rem 0.5rem",
    },
  },
  aimLogo: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  cardTitle: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  },
  cardTitleText: {
    fontFamily: "Fira Sans",
    color: "#6C1A93",
    fontSize: "3rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  cardSubTitleText: {
    fontFamily: "Fira Sans",
    color: "#6C1A93",
    textAlign: "center",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
}));

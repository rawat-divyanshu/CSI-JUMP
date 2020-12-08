import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../Assets/images/construction-bg.svg";
import smBg from "../../Assets/images/construction-bg-sm.svg";
import mdBg from "../../Assets/images/construction-bg-md.svg";
import lgBg from "../../Assets/images/construction-bg-lg.svg";

export const constructionStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerContainer: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${lgBg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mdBg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${smBg})`,
      backgroundPosition: "bottom",
      backgroundSize: "cover",
    },
  },
  constructionImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  title: {
    color: "#6C1A93",
    fontSize: "7rem",
    fontWeight: 800,
    textAlign: "center",
    fontFamily: "Fira Sans",
  },
  subTitle: {
    color: "#6C1A93",
    fontSize: "2rem",
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Fira Sans",
  },
  text: {
    color: "#6C1A93",
    fontSize: "1.2rem",
    fontWeight: 400,
    textAlign: "center",
    fontFamily: "Fira Sans",
  },
}));

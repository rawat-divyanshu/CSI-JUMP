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
  mainContainer: {
    padding: "8rem 4rem 1rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "8rem 0.5rem 0rem 0.5rem",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "Fira Sans",
    fontSize: "4rem",
    color: "#ffffff",
    textAlign: "center",
  },
  subTitle: {
    fontFamily: "Fira Sans",
    fontSize: "2rem",
    color: "#ffffff",
    marginTop: "1rem",
    textAlign: "center",
  },
}));

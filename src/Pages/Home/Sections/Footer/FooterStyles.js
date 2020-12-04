import { makeStyles } from "@material-ui/core/styles";
import lgBetaWave from "../../../../Assets/images/wave-2-beta-lg.svg";
import mdBetaWave from "../../../../Assets/images/wave-2-beta-md.svg";
import smBetaWave from "../../../../Assets/images/wave-2-beta-sm.svg";
import xsBetaWave from "../../../../Assets/images/wave-2-beta-xs.svg";

export const footerStyles = makeStyles((theme) => ({
  wrapperContainer: {
    backgroundColor: "#6C1A93",
    marginTop: "-2rem",
  },
  waveContainer: {
    height: 150,
    background: `url(${lgBetaWave})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      background: `url(${mdBetaWave})`,
    },
    [theme.breakpoints.down("sm")]: {
      background: `url(${smBetaWave})`,
    },
    [theme.breakpoints.down("xs")]: {
      background: `url(${xsBetaWave})`,
    },
  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "sapce-between",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "sapce-around",
  },
  logo: {
    width: "60%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "auto",
    },
  },
  logoTitle: {
    fontFamily: "Fira Sans",
    color: "#ffffff",
    fontSize: "2rem",
    marginTop: "0.8rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  logoSubTitle: {
    fontFamily: "Fira Sans",
    color: "#ffffff",
    fontSize: "1rem",
    marginTop: "0.8rem",
    textAlign: "center",
    marginBottom: "1rem",
  },
  footerContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

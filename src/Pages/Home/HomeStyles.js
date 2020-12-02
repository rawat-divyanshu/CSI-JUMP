import { makeStyles } from "@material-ui/core/styles";

export const homeStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
  },
  headerContainer: {
    padding: "4rem 4rem 2rem 4rem",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerWrapper: {
    backgroundColor: "#003399",
  },
}));

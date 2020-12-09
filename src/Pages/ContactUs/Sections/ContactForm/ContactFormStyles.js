import { makeStyles } from "@material-ui/core/styles";

export const contactFormStyles = makeStyles((theme) => ({
  wrapperContainer: {
    marginTop: "-1rem",
    backgroundColor: "#F5F5F5",
    paddingTop: "3rem",
  },
  contactImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  formContainer: {
    background: "transparent",
    padding: "2rem",
    marginBottom: "2rem",
  },
  formCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0rem 1rem 0rem 1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0rem",
    },
  },
  formInput: {
    marginTop: "1rem",
    fontFamily: "Fira Sans",
  },
  formBtn: {
    marginTop: "1rem",
    fontFamily: "Fira Sans",
  },
}));

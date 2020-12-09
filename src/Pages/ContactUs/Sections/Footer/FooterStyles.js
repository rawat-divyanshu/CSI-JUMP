import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../../../Assets/images/footer-bg.svg";

export const footerStyles = makeStyles((theme) => ({
  wrapperContainer: {
    height: "60vh",
    background: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
}));

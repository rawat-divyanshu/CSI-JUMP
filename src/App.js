import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home/Home";
import { theme } from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;

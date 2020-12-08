import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import Routes from "./Routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;

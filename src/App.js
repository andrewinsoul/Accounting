import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paths as Routes } from "./components/routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c14793",
    },
    loader: {
      main: "#fff",
    },
  },
  typography: {
    fontSize: 12,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;

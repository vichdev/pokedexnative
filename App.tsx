import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import theme from "./src/styles/theme";
import "react-native-gesture-handler";

const App: React.FC = () => {
  const globalTheme = theme;

  return (
    <ThemeProvider theme={globalTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;

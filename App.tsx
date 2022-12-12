import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import Main from "./src/views/Main";

const App: React.FC = () => {
  const globalTheme = theme;

  return (
    <ThemeProvider theme={globalTheme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import theme from "./src/styles/theme";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/store";

const App: React.FC = () => {
  const globalTheme = theme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={globalTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";

import { themes } from "./theme";
import GlobalStyle from "./styles/GlobalStyle";
import { THEME_TYPES } from "./theme/consts";

import SwitchTheme from "./widgets/SwitchTheme";
import Section from "./components/Section";
import Game from "./pages/Game";
import ResultsBoard from "./pages/ResultsBoard";

import Home from "./pages/index";

import useLocalStorage from "./utils/useLocalStorage";

// @TODO should be own component
const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
`;

// @TODO create context for theme
export default function App() {
  const [themeType, setThemeType] = useLocalStorage(
    "themeType",
    THEME_TYPES.LIGHT
  );

  // @TODO add 404 screen
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes[themeType]}>
        <>
          <Header>
            <SwitchTheme setTheme={setThemeType} currentTheme={themeType} />
          </Header>
          <Section>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/game/" component={Game} />
              <Route path="/results-board/" component={ResultsBoard} />
              <GlobalStyle />
            </Router>
          </Section>
        </>
      </ThemeProvider>
    </Provider>
  );
}

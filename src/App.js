import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

import useLocalStorage from "./utils/useLocalStorage";

const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
`;

export default function App() {
  const [themeType, setThemeType] = useLocalStorage(
    "themeType",
    THEME_TYPES.LIGHT
  );

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={themes[themeType]}>
          <>
            <Header>
              <SwitchTheme setTheme={setThemeType} currentTheme={themeType} />
            </Header>
            <Section>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/game/" exact component={Game} />
                <Route path="/results-board/" exact component={ResultsBoard} />
                <Route component={NotFound} />
              </Switch>
              <GlobalStyle />
            </Section>
          </>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

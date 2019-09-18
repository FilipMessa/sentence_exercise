import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import {  themes } from './theme';
import  GlobalStyle  from './styles/GlobalStyle';
import { THEME_TYPES } from './theme/consts';

import SwitchTheme from './widgets/SwitchTheme';
import Game from './pages/Game';
import ResultsBoard from './pages/ResultsBoard';

import Home from './pages/index';

// @TODO should be own component
const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  padding: 1rem;
`;

// @TODO create context for theme
export default function App() {
  // get the themeType from the localStorage
  const storedThemeType = localStorage.getItem('themeType');

  const [themeType, setThemeType] = React.useState(storedThemeType || THEME_TYPES.LIGHT);

  const setTheme = type => {
    // store the themeType into the localStorage
    localStorage.setItem('themeType', type);

    setThemeType(type);
  };

  return (
    <ThemeProvider theme={themes[themeType]}>
      <>
        <Header>
          <SwitchTheme setTheme={setTheme} currentTheme={themeType} />
        </Header>
        <Router>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route path="/game/" component={Game} />
          <Route path="/results-board/" component={ResultsBoard} />
          <GlobalStyle />
        </Router>
      </>
    </ThemeProvider>
  );
}

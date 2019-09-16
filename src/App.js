import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themes } from "./theme";
import { THEME_TYPES } from "./theme/consts";
import SwitchTheme from "./widgets/SwitchTheme";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

// @TODO should be own component
const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  padding: 1rem;
`;

function App() {
  // get the themeType from the localStorage
  const storedThemeType = localStorage.getItem("themeType");

  const [themeType, setThemeType] = React.useState(
    storedThemeType || THEME_TYPES.LIGHT
  );

  const setTheme = themeType => {
    // store the themeType into the localStorage
    localStorage.setItem("themeType", themeType);

    setThemeType(themeType);
  };

  return (
    <ThemeProvider theme={themes[themeType]}>
      <>
        <Header>
          <SwitchTheme setTheme={setTheme} currentTheme={themeType} />
        </Header>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;

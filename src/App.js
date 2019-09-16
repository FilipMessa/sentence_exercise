import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themes } from "./theme";
import { Checkbox } from "./components/Checkbox";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

// @TODO should be own component
const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  padding: 1rem;
  transition: all 100ms ease;
`;

// @TODO create switchTheme component
function App() {
  const [themeType, setTheme] = React.useState("light");

  return (
    <ThemeProvider theme={themes[themeType]}>
      <>
        <Header>
          <h3>mode: {themeType}</h3>
          <br />
          <Checkbox
            label="light"
            checked={themeType === "light"}
            onClick={() => setTheme("light")}
          />
          <Checkbox
            label="dark"
            checked={themeType === "dark"}
            onClick={() => setTheme("dark")}
          />
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

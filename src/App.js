import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themes } from "./theme";
import { THEME_TYPES } from "./theme/consts";
import styled from "styled-components";
import SwitchTheme from "./widgets/SwitchTheme";

import Home from "./pages/index";

// @TODO should be own component
const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  padding: 1rem;
`;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// @TODO create context for theme
export default function App() {
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
        <Router>
          <Route
            path="/"
            exact
            component={() => <Home setTheme={setTheme} themeType={themeType} />}
          />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <GlobalStyle />
        </Router>
      </>
    </ThemeProvider>
  );
}

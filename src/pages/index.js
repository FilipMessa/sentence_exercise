import React from "react";
import logo from "../logo.svg";
import "../App.css";

import Text from '../components/Text'

import styled from "styled-components";

// @TODO should be own component
const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  padding: 1rem;
`;

function Home({ setTheme, themeType }) {
  return (
    <div className="App">
      <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
          Edit <code>src/App.js</code> and save to reload.
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Text element="span"> kokoce </Text>
      </Header>
    </div>
  );
}

export default Home;

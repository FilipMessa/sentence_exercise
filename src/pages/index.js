import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';

import Text from '../components/Text';
import typewriterAnimation from '../styles/typewriterAnimation'

const AnimatedText= styled(Text)`
  ${typewriterAnimation}
`

// @TODO should be own component
const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  padding: 1rem;
`;

function Home() {
  return (
    <div className="App">
      <Header className="App-header">
        <div>
          <AnimatedText>
            Welcome to Sentence Game!
          </AnimatedText>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/game">Start</Link>
      </Header>
    </div>
  );
}

export default Home;

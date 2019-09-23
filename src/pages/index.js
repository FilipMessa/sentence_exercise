import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Start from "../components/Star";
import Container from "../components/Container";

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.secondary};
  padding: 20px;
  border-radius: 10px;
  border: 4px solid ${({ theme }) => theme.secondary};
`;

function Home() {
  return (
    <Container>
      <Start size="large" message="Welcome to Sentence Game!" />
      <StyledLink to="/game">Start</StyledLink>
    </Container>
  );
}

export default Home;

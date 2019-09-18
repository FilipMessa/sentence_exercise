import React from "react";
import { Link } from "react-router-dom";
import Start from "../components/Star";
import Container from "../components/Container";

function Home() {
  return (
    <Container>
      <Start size="large" message="Welcome to Sentence Game!" />
      <Link to="/game">Start</Link>
    </Container>
  );
}

export default Home;

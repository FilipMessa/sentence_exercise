import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";

function NotFound() {
  return (
    <Container>
      <h1>404 - Page not found</h1>
      <br />
      <br />
      <Link to="/game">go to home page</Link>
    </Container>
  );
}

export default NotFound;

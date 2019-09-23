import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Star from "../components/Star";
import Button from "../components/Button";
import Container from "../components/Container";

function ResultsBoard({ location, history, answers }) {
  const handleClick = () => {
    history.push("/");
  };

  const getMessage = answers => {
    if (answers.length === 0) return "The game is over!";
    return `${answers[0]} ${answers[1]} ${answers[3]} ${answers[2]}. You Win!`;
  };

  return (
    <Container>
      <Star size="large" message={getMessage(answers)} />
      <Button type="button" onClick={handleClick}>
        New Game
      </Button>
    </Container>
  );
}

export default connect(({ answers }) => ({ answers }))(
  withRouter(ResultsBoard)
);

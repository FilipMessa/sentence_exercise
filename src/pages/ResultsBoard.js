import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { resetStore } from "../redux/actions";

import Star from "../components/Star";
import Button from "../components/Button";
import Container from "../components/Container";

function ResultsBoard({ location, history, answers, resetStore }) {
  React.useEffect(() => {
    return () => {
      resetStore();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Button type="link" onClick={handleClick}>
        New Game
      </Button>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  resetStore: answer => dispatch(resetStore(answer))
});

export default connect(
  ({ answers }) => ({ answers }),
  mapDispatchToProps
)(withRouter(ResultsBoard));

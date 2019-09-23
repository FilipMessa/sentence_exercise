import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import useInput from "../utils/useInput";
import InputField from "../components/InputField";

import { connect } from "react-redux";
import { addNewAnswer } from "../redux/actions";

import Star from "../components/Star";
import Button from "../components/Button";
import Container from "../components/Container";

const KEY_CODES = {
  ENTER: 13,
  ESC: 27
};

const QUESTIONS = ["Who?", "What?", "When?", "Where?"];

const MESSAGES = [
  "The game has begun!",
  "You're doing well!",
  "Has it happened or will it happen?",
  "We are almost done here!"
];

const IVALIDE_MESSAGE = "Come on, You know how to do that!";

const NextButton = styled(Button)`
  margin: 20px;
`;

export function Game(props) {
  const inputState = useInput("");
  const [isValid, setValidity] = React.useState(true);
  const currentIndex = props.answers.length;

  const handleSubmitAnswer = () => {
    if (!inputState.value) {
      setValidity(false);
    } else {
      inputState.clear();
      setValidity(true);
      props.addNewAnswer(inputState.value);
      currentIndex === 3 && props.history.push("/results-board");
    }
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === KEY_CODES.ENTER) {
      handleSubmitAnswer();
    } else if (keyCode === KEY_CODES.ESC) {
      inputState.clear();
    }
  };

  const getStarMessage = index => {
    if (isValid === false) return IVALIDE_MESSAGE;
    return MESSAGES[index];
  };

  const isInvalid = !isValid;

  return (
    <Container>
      <Star message={getStarMessage(currentIndex)} warning={isInvalid} />
      <InputField
        invalid={isInvalid}
        label={QUESTIONS[currentIndex] || "N/A"}
        onChange={inputState.onChange}
        onKeyDown={handleKeyDown}
        value={inputState.value}
      />
      <NextButton type="submit" onClick={handleSubmitAnswer}>
        {currentIndex > 2 ? "Submit answer" : "Next"}
      </NextButton>
    </Container>
  );
}

const mapStateToProps = ({ answers }) => ({
  answers
});
const mapDispatchToProps = dispatch => ({
  addNewAnswer: answer => dispatch(addNewAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Game));

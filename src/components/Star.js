import React from "react";
import styled from "styled-components";

import starImg from "../assets/star.png";

import Bubble from "./Bubble";
import AnimatedText from "./AnimatedText";

const getStartSize = ({ size, theme }) => {
  const token = {
    small: theme.mascotSizeSmall,
    normal: theme.mascotSizeNormal,
    large: theme.mascotSizeLarge
  };
  return token[size];
};

const AnimatedMessage = styled(AnimatedText)`
  color: ${({ theme, warning }) =>
    warning ? theme.fontColorWarrning : theme.primary};
`;

const BubbleMessage = styled(Bubble)`
  position: absolute;
  left: 100px;
  top: -36px;
`;

const Container = styled.div`
  position: relative;
`;

const Img = styled.img`
  padding: 20px;
  height: ${getStartSize};
  width: ${getStartSize};
`;

export default function Start({ message = "", size = "normal", warning }) {
  return (
    <Container>
      <Img alt="mascotte" src={starImg} size={size} />
      <BubbleMessage align="left">
        <AnimatedMessage warning={warning}>{message}</AnimatedMessage>
      </BubbleMessage>
    </Container>
  );
}

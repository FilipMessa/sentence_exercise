import React from "react";
import styled, { css } from "styled-components";
import bubbleBorder from "../assets/bubble-border.svg";
import bubbleBorderGray from "../assets/bubble-border-gray.svg";

import { THEME_TYPES } from "../theme/consts";

const right = css`
  &:before {
    bottom: -14px;
    width: 26px;
    height: 10px;
    background-color: #fff;
    border-right: 4px solid #212529;
    border-left: 4px solid #212529;
    right: 2rem;

    position: absolute;
    content: "";

    box-sizing: border-box;
  }

  &:after {
    bottom: -18px;
    width: 18px;
    height: 4px;
    margin-left: 8px;
    background-color: #fff;
    box-shadow: -4px 0, 4px 0, 4px 4px #fff, 0 4px, 8px 4px, 4px 8px, 8px 8px;

    right: 2rem;
    position: absolute;
    content: "";
    box-sizing: border-box;
  }
`;

const left = css`
  &:before {
    bottom: -14px;
    width: 26px;
    height: 10px;
    background-color: #fff;
    border-right: 4px solid #212529;
    border-left: 4px solid #212529;

    left: 2rem;
  }

  &:after {
    bottom: -18px;
    width: 18px;
    height: 4px;
    margin-right: 8px;
    color: #212529;
    background-color: #fff;
    box-shadow: -4px 0, 4px 0, -4px 4px #fff, 0 4px, -8px 4px, -4px 8px,
      -8px 8px;

    left: 2rem;
  }
`;

const getBubbleBoarderImg = ({ theme }) => {
  if (theme.name === THEME_TYPES.LIGHT) return bubbleBorder;
  return bubbleBorderGray;
};

const Container = styled.div`
  border-image-slice: 3;
  border-image-width: 3;
  border-image-repeat: space;
  border-image-source: url(${getBubbleBoarderImg});
  border-image-outset: 2;
  position: relative;
  display: inline-block;
  padding: 1rem 1.5rem;
  margin: 8px;
  margin-bottom: 30px;
  background-color: #fff;

  border-style: solid;
  border-width: 4px;

  &:after,
  &:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
  }

  ${({ align }) => (align === "right" ? right : left)}
`;

export default function Bubble({ children, align = "left", className }) {
  return (
    <Container className={className} align={align}>
      {children}
    </Container>
  );
}

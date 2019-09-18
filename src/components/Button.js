import styled from "styled-components";
import CustomCursor from "../styles/CustomCursor";
import buttonBorder from "../assets/button-border.svg";

// height todo
const Button = styled.button`
  ${CustomCursor}
  font: inherit;
  outline: inherit;

  height: 35px;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: url(${buttonBorder});
  border-image-outset: 2;
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;

  border-style: solid;
  border-width: 4px;

  &:active {
    font-size: 0.8rem;
  }
`;

export default Button;

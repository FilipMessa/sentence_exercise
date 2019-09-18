import React from "react";
import styled from "styled-components";
import CustomCursor from "../styles/CustomCursor";
import border from "../assets/border.svg";
import invalidBorder from "../assets/border-red.svg";

const Container = styled.div`
  ${CustomCursor}
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

// @TODO theme
const Input = styled.input`
  display: block;
  border-image-slice: 2;
  border-image-width: 2;
  border-width: 4px;
  border-image-source: url(${({ invalid }) =>
    invalid ? invalidBorder : border});
  border-image-outset: 2;
  padding: 0.5rem 1rem;
  margin: 4px;
  background-clip: padding-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export default function InputField({
  onChange,
  onKeyDown,
  value,
  label,
  invalid = false
}) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        ref={inputRef}
        focused
        invalid={invalid}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        label={label}
      />
    </Container>
  );
}

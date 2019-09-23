import React from "react";
import styled, { css } from "styled-components";
import CustomCursor from "../styles/CustomCursor";
import PropTypes from "prop-types";

const uncheckedStyle = css`2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
16px 2px, 2px 4px, 16px 4px, 2px 6px, 16px 6px, 2px 8px, 16px 8px, 2px 10px, 16px 10px,
2px 12px, 16px 12px, 2px 14px, 16px 14px, 2px 16px, 4px 16px, 6px 16px, 8px 16px, 10px 16px,
12px 16px, 14px 16px, 16px 16px;`;

const checkedStyle = css`2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
18px 2px, 20px 2px, 2px 4px, 16px 4px, 18px 4px, 20px 4px, 2px 6px,
14px 6px, 16px 6px, 2px 8px, 4px 8px, 12px 8px, 14px 8px, 2px 10px,
4px 10px, 6px 10px, 10px 10px, 12px 10px, 16px 10px, 2px 12px, 6px 12px,
8px 12px, 10px 12px, 16px 12px, 2px 14px, 8px 14px, 16px 14px, 2px 16px,
4px 16px, 6px 16px, 8px 16px, 10px 16px, 12px 16px, 14px 16px, 16px 16px`;

const Label = styled.label`
  display: inline-block;
  ${CustomCursor}
`;

const Input = styled.input`
  outline: 0;
  padding: 0;
  margin-left: 28px;
  appearance: none;
  overflow: visible;
`;

const Text = styled.span`
  position: relative;
  &:before {
    box-sizing: border-box;
    position: absolute;
    top: -3px;
    left: -28px;
    width: 2px;
    height: 2px;
    content: "";
    color: ${({ theme }) => theme.defaultTextColor};
    box-shadow: ${({ checked }) => (checked ? checkedStyle : uncheckedStyle)};
  }
`;

export default function Checkbox({ label, checked, onChange }) {
  const [isChecked, setCheck] = React.useState(checked || false);

  const toggle = e => {
    onChange(e);
    setCheck(!isChecked);
  };

  return (
    <Label>
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={toggle}
        name={label}
      />
      {label && <Text checked={checked}>{label}</Text>}
    </Label>
  );
}

Checkbox.prototype = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string
};

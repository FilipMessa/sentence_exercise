import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getFontSize = ({ theme, size }) => {
  const sizeTokens = {
    small: theme.fontSizeSmall,
    normal: theme.fontSizeNormal,
    large: theme.fontSizeLarge
  };
  return sizeTokens[size];
};

const getColor = ({ theme, type }) => {
  const colorToken = {
    primary: theme.primary,
    secundary: theme.secondary
  };

  return colorToken[type];
};

const StyledText = styled(({ element: TextElement, ...props }) => (
  <TextElement {...props} />
))`
  font-size: ${getFontSize};
  color: ${getColor};
`;

export default function Text({
  element = "p",
  size = "normal",
  children,
  className
}) {
  return (
    <StyledText size={size} element={element} className={className}>
      {children}
    </StyledText>
  );
}

Text.prototype = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(["small", "normal", "large"]),
  element: PropTypes.elementType,
  className: PropTypes.string
};

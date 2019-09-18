import React from "react";
import styled from "styled-components";

// @TODO all color should came from theme
// @TODO from props component type

const SectionContainer = styled.section`
  margin: 2rem;
  padding: 1.5rem 2rem;
  border-color: ${({ theme }) => theme.sectionBorderColor};
  border-style: solid;
  border-width: 4px;
  background-color: ${({ theme }) => theme.sectionBackgroundColor};
`;

const Header = styled(({ element: Component = "span", ...props }) => (
  <Component {...props} />
))`
  display: table;
  padding: 0 0.5rem;
  margin: -1.8rem 0 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.sectionBackgroundColor};
`;

export default function Section({ label, children, element }) {
  return (
    <SectionContainer>
      <Header element={element}>{label}</Header>
      {children}
    </SectionContainer>
  );
}

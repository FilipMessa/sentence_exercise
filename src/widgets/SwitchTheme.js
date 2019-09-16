import React from "react";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";
import Section from "../components/Section";
import { THEME_TYPES } from "../theme/consts";

const Container = styled.section`
  display: flex;
  font-size: 0.8rem;
`;

const Divider = styled.div`
  width: 1rem;
`;

export default function SwitchTheme({ setTheme, currentTheme }) {
  const handleSwitchTheme = ({ target: { name } }) => {
    if (name !== currentTheme) {
      const newTheme =
        currentTheme === THEME_TYPES.LIGHT
          ? THEME_TYPES.DARK
          : THEME_TYPES.LIGHT;
      setTheme(newTheme);
    }
  };

  return (
    <Section label={`Mode: ${currentTheme.toUpperCase()}`} element="h3">
      <Container>
        <Checkbox
          label={THEME_TYPES.LIGHT}
          onChange={handleSwitchTheme}
          checked={currentTheme === THEME_TYPES.LIGHT}
        />
        <Divider />
        <Checkbox
          label={THEME_TYPES.DARK}
          onChange={handleSwitchTheme}
          checked={currentTheme === THEME_TYPES.DARK}
        />
      </Container>
    </Section>
  );
}

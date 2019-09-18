import colorPalette from "./palette";

const typography = {
  // sizes
  fontSizeSmall: "0.75em",
  fontSizeNormal: "1em",
  fontSizeLarge: "1.25em",

  // colors
  fontColorWarrning: colorPalette.$color_07
};

const mascot = {
  mascotSizeNormal: "95px",
  mascotSizeSmall: "50px",
  mascotSizeLarge: "400px"
};

const commonTokens = {
  ...typography,
  ...mascot
};

const light = {
  name: "light",
  ...commonTokens,
  defaultBackgroundColor: "white",
  primary: colorPalette.$color_27,
  secondary: colorPalette.$color_21,
  defaultTextColor: colorPalette.$color_0F,
  headerBackgroundColor: colorPalette.$color_20,
  sectionBackgroundColor: colorPalette.$color_20,
  sectionBorderColor: colorPalette.$color_black,
  // Bubble
  bubbleDefaultColor: colorPalette.$color_0D
};

const dark = {
  name: "dark",
  ...commonTokens,
  defaultBackgroundColor: "black",
  primary: colorPalette.$color_03,
  secondary: colorPalette.$color_0A,
  defaultTextColor: colorPalette.$color_20,
  headerBackgroundColor: colorPalette.$color_0F,
  sectionBackgroundColor: colorPalette.$color_0F,
  sectionBorderColor: colorPalette.$color_white,

  // Bubble
  bubbleDefaultColor: colorPalette.$color_white
};

export const themes = {
  light,
  dark
};

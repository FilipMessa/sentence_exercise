import { colorPalette } from "./palette";
export { GlobalStyle } from "./GlobalStyle";

const light = {
  primary: colorPalette.$color_27,
  defaultTextColor: colorPalette.$color_black,
  headerBackgroundColor: colorPalette.$color_20
};

const dark = {
  primary: colorPalette.$color_03,
  defaultTextColor: colorPalette.$color_white,
  headerBackgroundColor: colorPalette.$color_0F
};

export const themes = {
  light,
  dark
};

import { colorPalette } from "./palette";
export { GlobalStyle } from "./GlobalStyle";

const light = {
  primary: colorPalette.$color_27,
  defaultTextColor: colorPalette.$color_0F,
  headerBackgroundColor: colorPalette.$color_20,
  sectionBackgroundColor: colorPalette.$color_20,
  sectionBorderColor: colorPalette.$color_black
};

const dark = {
  primary: colorPalette.$color_03,
  defaultTextColor: colorPalette.$color_20,
  headerBackgroundColor: colorPalette.$color_0F,
  sectionBackgroundColor: colorPalette.$color_0F,
  sectionBorderColor: colorPalette.$white
};

export const themes = {
  light,
  dark
};
